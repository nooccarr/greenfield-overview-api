const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "name", title: "name" },
    { id: "slogan", title: "slogan" },
    { id: "description", title: "description" },
    { id: "category", title: "category" },
    { id: "default_price", title: "default_price" },
  ],
});

let readStream = fs.createReadStream('../rawDatabases/product.csv');
let writeStream = fs.createWriteStream('../cleanedDatabases/product.csv');
// let readStream = fs.createReadStream('../sampleDatabase/productSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/productSample.csv');

class ProductCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    let chunks = [];
    for (let key in chunk) {
      let trimKey = key.trim();
      chunk[trimKey] = chunk[key];
      if (trimKey !== key) {
        delete chunk[key];
      }
    }
    let onlyNumbers = chunk.default_price.replace(/\D/g, '');
    chunk.default_price = onlyNumbers;
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new ProductCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('finished');
  });