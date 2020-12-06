const csv = require('csv-parser');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const Transform = require('stream').Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: 'id', title: 'id' },
    { id: 'styleId', title: 'style_id' },
    { id: 'url', title: 'url' },
    { id: 'thumbnail_url', title: 'thumbnail_url' }
  ],
});

let readStream = fs.createReadStream('../rawDatabases/photos-0.csv');
let writeStream = fs.createWriteStream('../databaseCleaners/photos-0.csv');
// let readStream = fs.createReadStream('../sampleDatabase/photosSample.csv');
// let writeStream = fs.createWriteStream('../cleanedSamples/photosSample.csv');

let photosObj = {};

class PhotosCleaner extends Transform {
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
      if (trimKey === 'thumbnail_url' && chunk[trimKey].indexOf('\n') >= 0) {
        let parts = chunk[trimKey].split('\n');
        chunks.push(parts[1]);
        chunk[trimKey] = parts[0];
      }
      if (trimKey[0] === '_') {
        chunks.push(chunk[trimKey]);
        delete chunk[trimKey];
      }
    }
    if (!photosObj[chunk.id]) {
      // console.log(chunk);
      chunk = csvStringifier.stringifyRecords([chunk]);
      this.push(chunk);
    }
    photosObj[chunk.id] = true;
    if (chunks.length) {
      chunks = chunks.join('').split('\n');
      for (let i = 0; i < chunks.length; i++) {
        let str = chunks[i];
        let match = str.match(/\dhttp/);
        if (match) {
          str = str.replace(/\dhttp/, `${match[0][0]},http`);
        }
        let arr = str
          .split('"').join('')
          .split('uhtt').join('u,htt')
          .split(',');
        let obj = {
          id: arr[0],
          styleId: arr[1],
          url: arr[2],
          thumbnail_url: arr[3]
        };
        if (!photosObj[obj.id]) {
          chunk = csvStringifier.stringifyRecords([obj]);
          this.push(chunk);
        }
        photosObj[obj.id] = true;
      }
    }
    next();
  }
}

const transformer = new PhotosCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Finished transforming photos.csv');
  });