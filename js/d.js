/*d.js*/
require(['a','b','c'],function(a,b,c){
	console.log("A:Hello,i'm "+a.name+".What's your name?");
	console.log("B:My name is "+ c.name +".");
	console.log("A:How old are you?");
	console.log("B:"+b+" years old.");
});