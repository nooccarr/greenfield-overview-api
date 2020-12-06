const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "current_product_id", title: "product_id" },
    { id: "related_product_id", title: "related_product_id" }
  ],
});

let readStream = fs.createReadStream('../rawDatabases/related.csv');
let writeStream = fs.createWriteStream('../cleanedDatabases/related.csv');
// let readStream = fs.createReadStream('../sampleDatabase/relatedSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/relatedSample.csv');

class RelatedCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    // console.log(chunk);
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new RelatedCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming related.csv');
  });