# kits-js  
    a easy use js library for some operates with js  
目录
=
1. [http](#http)   
    - [http.fetch](#11-httpfetchoption)    
    - [http.ajax](#11-httpajaxoption)   
    - [http.jsonp](#11-httpjsonpoption) 
1. [obj](#obj)   
    - [obj.deepClone](#21-objdeepclonesource)
    -  [obj.diff](#22-objdiffsrc1src2)  
    -  [obj.merge](#22-objmergesrc1src2)


###  1. http
#### 1.1 http.fetch(option) 
#### 1.2 http.ajax(option)  
#### 3.3 http.jsonp(option)  
option parameters:

    |param|type|description|  
    |:-:|:-:|:-:|:-:|:-:|  
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
            expect(rs).toBeInstanceOf(Object);
            expect(rs.id).toBeInstanceOf(Number);
            expect(rs).toHaveProperty('address.geo');
            done();
        },
        fail: (rs) => {
            expect(rs).toBeInstanceOf(Object);
            done();
        }
    });
```
4. http.download(url,fileName)  
    |param|type|description|
    |:-:|:-:|:-:|:-:|:-:|
    |url|String|The URL of the resource/api|
    |fileName|String|the name you want to name the file|

### 2. obj 
    for Object operations
#### 2.1.  obj.deepClone(source)      
    source: the Object you want to deep clone
    return a object the same as source
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


#### 3. Jest for test
    just run jest in root directory.