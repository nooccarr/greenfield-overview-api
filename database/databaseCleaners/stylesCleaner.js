const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "productId", title: "product_id" },
    { id: "name", title: "name" },
    { id: "sale_price", title: "sale_price" },
    { id: "original_price", title: "original_price" },
    { id: "default_style", title: "default?" },
  ],
});

let readStream = fs.createReadStream('../rawDatabases/styles.csv');
let writeStream = fs.createWriteStream('../cleanedDatabases/styles.csv');
// let readStream = fs.createReadStream('../sampleDatabase/stylesSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/stylesSample.csv');

class StylesCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    if (chunk.sale_price === 'null') {
      chunk.sale_price = '0';
    }
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new StylesCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming styles.csv');
  });