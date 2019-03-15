var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, matchElem) {
    return arr.indexOf(matchElem);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, matchElem) {
    return arr.lastIndexOf(matchElem);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i]){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, dropElem){
    if(dropElem >=0){
      for(var i=0; i<dropElem; i++){
        arr.shift();
      }
    } else { arr.shift();}
    return arr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, dropElem) {
    if(dropElem >=0){
      for(var i=0; i<dropElem; i++){
        arr.pop();
      }
    } else { arr.pop();}
    return arr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, take) {
    var takeArr = [];
    if(take >=0){
      if(take <= arr.length){
        for(var i=0; i<take; i++){
          takeArr.push(arr.shift());
        }
        return takeArr;
      } else {
        return arr;
      }
    } else {
      takeArr.push(arr.shift());
      return takeArr;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, takeRight) {
    var takeArr = [];
    if(takeRight >=0){
      if(takeRight <= arr.length){
        for(var i=0; i<takeRight; i++){
          takeArr.push(arr.pop());
        }
        takeArr.sort();
        return takeArr;
      } else {
        return arr;
      }
    } else {
      takeArr.push(arr.pop());
      return takeArr;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, replace, start, end) {
    let arrMap;
    if(start <= arr.length-1 && end <= arr.length-1){
      for(var i=start; i<end; i++){
        arr.splice(i, 1, replace);
      }
      arrMap = arr;
    } else {
      arrMap = arr.map(x => replace);
    }
    return arrMap;
  },

  // removes all given values from an array
  pull: function (arr, ...vals) {
    for(var i=arr.length-1; i>=0; i--){
      if(vals.includes(arr[i])){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indexNums) {
    var newArr = [];
    for(var i=arr.length-1; i>=0; i--){
      if(indexNums.includes(i)){
        var pulled = arr.splice(i, 1);
        newArr = newArr.concat(pulled);
        newArr.sort();
      }
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr, ...vals) {
    var newArr = [];
    for(var i=arr.length-1; i>=0; i--){
      if(vals.includes(arr[i]) === false){
        newArr.push(arr[i]);
        newArr.sort();
      }
    }
    return newArr;
  },

  // returns an array with specified values excluded
  difference: function(arr, exVals) {
    var newArr = [];
    for(var i=0; i<arr.length; i++){
      if(exVals.includes(arr[i]) === false){
        newArr.push(arr[i]);
        newArr.sort();
      }
    }
    return newArr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (...arrs) {

	var longestArr = 0;
  arrs.forEach(function(array){
  	if(array.length > longestArr){
    	longestArr = array.length;
    }
  });

	var zipped = [];
	for (var i=0; i<longestArr; i++) {
  	var newArr = [];
    arrs.forEach(function(array){
    	if(array.length > i){
      	newArr.push(array[i]);
      } 
    });
    zipped.push(newArr);
  }
  return zipped;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
  
	var longestArr = 0;
  
  arr.forEach(function(array){
  	if(array.length > longestArr){
    	longestArr = array.length;
    }
  });

	var unzipped = [];
	for (var i=0; i<longestArr; i++) {
  	var newArr = [];
    arr.forEach(function(array){
    	if(array.length > i){
      	newArr.push(array[i]);
      } 
    });
    unzipped.push(newArr);
  }
  return unzipped;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, num){

    if(num ===0){
      return [];
    }
  
    var chunk = [];

    while(arr.length){ //because this is truthy & will stop once 0 or falsy
    var newArr = arr.splice(0 ,num)
    chunk.push(newArr);
    }
    return chunk;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(stuff, func) {
  let result = [];
  let arr = [];
  
  if(typeof stuff === 'object'){
    arr = Object.values(stuff);
  } else {arr = stuff;}

  for(let i=0; i<arr.length; i++){
    item = arr[i];
    key = i;
    func(item, key);
  }
  return result;
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
