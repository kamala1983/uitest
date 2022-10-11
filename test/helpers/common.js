
const fs = require('fs')
const path = require('path');

async function emptyDir(dir){

  try {

    fs.readdir(dir, (err, files) => {
      //if (err) throw err;
    
      for (const file of files) {
        fs.unlink(path.join(dir, file), err => {
          //if (err) throw err;
        });
      }
    
    }
    );
   
  }
  catch(err){

  }
    }


    module.exports.emptyDir=emptyDir;