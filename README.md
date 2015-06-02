<br>  
<br>  
<br>  
<p align="center">
<img src="fs-batch.png" width=250> 	
</p>
<br>  
<br>  
<br>  




# fs-batch
Reads files asynchronously and groups the results into a single response.

Fs-batch aims at making it easier to work with asynchronous file reading in Node. You can specify an array of paths to read, and fs-batch will read all of them asynchronously, and then when each file has been read, it returns an array of results for you.

*Example*
```javascript
var fsb = require('fs-batch');
fsb.readFiles(["path/to/file1", "file2", "path/file3"])
.success(function(files){
  console.log(files);
})
```

####How is this better than promises?  
With promises, you can read files asynchronously, but only one at a time. Here is how a typical promise file reading goes:  
*NOT an example of fs-batch*
```javascript
promiseFs.readFile.("path/to/file1")
.then(function () { // won't run until file1 is read
    return promiseFs.readFile("file2");
})
.then(function () { // won't run until file1 AND file2 are read
    return promiseFs.readFile("file3");
})
//etc.
```
Unlike this example of a promise based library, fs-batch will read all of the files independently of eachother and then when they have all been read (or errored) then fs-batch will return them all.

####Response Methods
- `success()` - return an array of succesfully found files
- `error()` - returns an array of errors associated with file read

These methods act as promises  
*Example*
```javascript
var fsb = require('fs-batch');

fsb.readFiles(["path/to/file1", "file2", "path/file3"])
.success(function(files){
  console.log(files);
})
.error(function(errors){
   console.log(errors);
})
```

<br>

####The Returned Array of Files
They returned array is made up of objects that each have 2 properties:
- `query` - a string that is the same as the original used as the file path
- `data` - the contents of the file

<br>

####Itterating the Returned Array of Files
The array comes with a method called `each()` that allows you to run a function against each file.

*Example*
```javascript
var fsb = require('fs-batch');

fsb.readFiles(["path/to/file1", "file2", "path/file3"])

.success(function(files){

  files.each(function(file){
    if(file.query === "path/file3"){
      console.log("file 3's contents: ", file.data);
    }
  })
  
})
```
