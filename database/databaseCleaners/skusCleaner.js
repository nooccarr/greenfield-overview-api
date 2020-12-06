const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "styleId", title: "style_id" },
    { id: "size", title: "size" },
    { id: "quantity", title: "quantity" },
  ],
});

let readStream = fs.createReadStream('../rawDatabases/skus.csv');
let writeStream = fs.createWriteStream('../cleanedDatabases/skus.csv');
// let readStream = fs.createReadStream('../sampleDatabase/skusSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/skusSample.csv');

class SkusCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    for (let key in chunk) {
      let trimKey = key.trim();
      chunk[trimKey] = chunk[key];
      if (trimKey !== key) {
        delete chunk[key];
      }
    }
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new SkusCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming skus.csv');
  });