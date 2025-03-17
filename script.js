function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = new Array(26).fill(0);

	for(let i =0 ; i<str.length ; i++){
		let ch = str[i];
		arr[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
	}

	let ans = "null";

	for(let i =0 ;i<26 ; i++){
		if(arr[i] === 1){
			ans = String.fromCharCode(i+'a'.charCodeAt(0));
			break;
		}
	}

	return ans;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
