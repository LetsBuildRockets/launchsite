/* example
    var items = [
        {
            src: 'https://lh3.googleusercontent.com/-MNlPgwES_hk/AAAAAAAAAAI/AAAAAAACA0w/3_FYgdvbXgA/photo.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];*/
    
var fs = require('fs');
var sizeOf = require('image-size');
var read = function(dir,files_) {
    files_ = files_ || [];
    if (typeof files_ === 'undefined') files_=[];
    var files = fs.readdirSync(dir);
    /*for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            ;//read(name,files_);
        } else {
            files_.push(name);
        }
    }*/
   
   return files;
}

var addDims = function(dir, files) {
    var obj = {};
    for(var i in files) {
        var dimensions = sizeOf(dir+'/'+files[i]);
        obj[i] = [files[i],dimensions.width,dimensions.height]
    }
    return obj;
}

var removeNonPicture = function(files) {
    files = files.filter(function(element) { return(element.endsWith(".png") || element.endsWith(".jpg")) });
    return files;
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
var dir = "client/assets/images";
var files = removeNonPicture(read(dir));
//console.log(indexedFiles);

var json = JSON.stringify(addDims(dir,files));

console.log(json);
