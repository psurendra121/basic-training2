// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  var mx1=Number.MIN_VALUE,mx2=Number.MIN_VALUE ;
    array.forEach((curr_val)=>{
      if(curr_val>mx1){
        mx2=mx2;
        mx1=curr_val;
       }
       else if(curr_val>mx2){
         mx2=curr_val;
       }
    })
    return mx2;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  var freq = {};
  for(s in string){
    var ch=string[s];
    console.log(ch)
    if(ch>='a'&&ch<='z'){
        if(freq[ch]==undefined){
        freq[ch]=1;
        }else{
            freq[ch]++;
        }
    }
  }
  return freq
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  var res ={}
  for(const i in unflatObject) {
      if(typeof unflatObject[i] == 'object'){
          var str=flatten(unflatObject[i]);
          for(const j in str ){
              res[i+'.'+j]=str[j];
          }
      }else{
          res[i]=unflatObject[i];
      }
  }
  return res;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
  let result = {},
	temp,
	substrings,
	property,
	i;
	for (property in flatObject) {
        substrings = property.split(".");
        temp = result;
        for (i = 0; i < substrings.length - 1; i++) {
            if (!(substrings[i] in temp)) {
                if (isFinite(substrings[i + 1])) {
                    temp[substrings[i]] = [];
                }else{
                    temp[substrings[i]] = {};
                }
            }
            temp = temp[substrings[i]];
        }
        temp[substrings[substrings.length - 1]] = flatObject[property];
	}
return result;
}

