const csvSplitStream = require('csv-split-stream');
const fs = require('fs');


return csvSplitStream.split(
  fs.createReadStream('../rawDatabases/photos.csv'),
    { lineLimit: 800000 },
    (index) => fs.createWriteStream(`../rawDatabases/photos-${index}.csv`)
  )
  .then(csvSplitResponse => {
    console.log('csvSplitStream succeeded.', csvSplitResponse);
  }).catch(csvSplitError => {
    console.log('csvSplitStream failed!', csvSplitError);
  });