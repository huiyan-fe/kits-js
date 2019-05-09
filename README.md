 **kits-js**   
--
    a easy use js library for some operates with js  

- [ **kits-js** ](#kits-js)
    - [1. http](#1-http)
        - [1.1 http.fetch(option)](#11-httpfetchoption)
        - [1.2 http.ajax(option)](#12-httpajaxoption)
        - [1.3 http.jsonp(option)](#13-httpjsonpoption)
        - [1.4 http.download(url,fileName)](#14-httpdownloadurlfilename)
    - [2. obj](#2-obj)
        - [2.1. obj.deepClone(source)](#21-objdeepclonesource)
        - [2.2. obj.diff(src1,src2)](#22-objdiffsrc1src2)
        - [2.3. obj.merge(src1,src2)](#23-objmergesrc1src2)

###  1. http
#### 1.1 http.fetch(option) 
#### 1.2 http.ajax(option)  
#### 1.3 http.jsonp(option)  

option parameters:

|param|type|description|  
|:-:|:-:|:-:|
|url|String|The URL of the resource/api| 
|timeout|Number|The URL of the resource/api|  
|method|String|GET or POST method default GET|  
|success|Function|the request success callback|  
|fail|Function|the request fail callback| 

example:
```
    http.fetch({
        url: 'http://jsonplaceholder.typicode.com/users/1',
        method: 'GET',
        success: (rs) => {
        },
        fail: (rs) => {
        }
    });
```
#### 1.4 http.download(url,fileName)   

|param|type|description|
|:-:|:-:|:-:|
|url|String|The URL of the resource/api|
|fileName|String|the name you want to name the file|

### 2. obj 

    for Object operations

#### 2.1.  obj.deepClone(source)      

    source: 
        the Object you want to deep clone
    return:
        an object the same as source

```
    let clone = obj.deepClone({name:'Daniel',age:44})
```

#### 2.2.  obj.diff(src1,src2)   

    src1/src2:     
        the object you want to get the diff of two objects   
    return:   
        return the diff of src2 relative to src1   
    
```
    var o1 = {
        a: {
            aa: {
                aaa: 1
            },
            bb: {
                bbb: 2
            }
        },
        b: 'hello',
        e: 'o2 dont have',
        g: 'o2 different',
    }
    var o2 = {
        a: {
            aa: {
                aaa: 'first'
            },
            bb: {
                bbb: 2
            }
        },
        c: 'daniel',
        f: 'o1 dont have',
        g: 'different',
    }
    let diff = obj.diff(o1,o2);

```

#### 2.3.  obj.merge(src1,src2) 
    src1/src2:  
        the same as obj.diff  
    return:  
        return the merged object of src1 && src2  
        the src2 will only overwrite the string/number property values of src1

example:

```
    let merged = obj.merge(o1,o2)
```