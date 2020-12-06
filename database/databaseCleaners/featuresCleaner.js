const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "productId", title: "product_id" },
    { id: "Fabric", title: "feature" },
    { id: "Canvas", title: "value" }
  ],
});

let readStream = fs.createReadStream('../rawDatabases/features.csv');
let writeStream = fs.createWriteStream('../cleanedDatabases/features.csv');
// let readStream = fs.createReadStream('../sampleDatabase/featuresSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/featuresSample.csv');

let featuresIdCounter = 1;

class FeaturesCleaner extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, next) {
    let newChunk = {};
    newChunk.id = featuresIdCounter;
    featuresIdCounter++;
    for (let key in chunk) {
      if (key === '1') {
        newChunk.productId = chunk[key];
      } else if (key === 'Canvas' && chunk[key] === 'null') {
        newChunk.Canvas = null;
      } else {
        newChunk[key] = chunk[key];
      }
    }
    // console.log(newChunk);
    chunk = csvStringifier.stringifyRecords([newChunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new FeaturesCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming features.csv');
  });