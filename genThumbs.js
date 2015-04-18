var gm = require('gm').subClass({ imageMagick: true });
var fs = require('fs');
var path = require('path');
var targetH = 150;
var root = process.argv[2];

if(!root) throw "no path specified";

root = path.resolve(root);
fs.readdir(root, function(err, files) {
  if(fs.existsSync(root + '/thumbnails')) 
    rmdir(root + '/thumbnails');
  fs.mkdirSync(root + '/thumbnails');
  files.forEach(function(name) {
    if(!isImage(name)) return;
    var file = root + '/' + name;
    var thumb = root + '/thumbnails/' + removeExt(name) + '_thumb.png';
      var _size = 0;
      gm(file)
      .size(function (err, size) {
        if (err) throw err;
        _size = size;
      })
      .resize(Math.round(targetH/_size.height*_size.width), targetH)
      .noProfile()
      .write(thumb, function (err) {
        if (!err) gm(file);
        else throw err;
      });
  });
});

function isImage(path) {
  var splitz = path.split('.');
  var ext = splitz[splitz.length-1].toLowerCase();
  return (ext == 'jpg' || ext == 'png');
}

function removeExt(str) {
  return str.substring(0, str.lastIndexOf('.'));
}

var rmdir = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};