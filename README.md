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

*Example*
```javascript
var fsb = require('fs-batch');
fsb.readFiles(["path/to/file1", "file2", "path/file3"])
.success(function(files){
  console.log(files);
})
```

<br>

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
