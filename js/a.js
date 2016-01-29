/*a.js*/
define([],function(){
	var person = {
		name: 'libr',
		age: 25,
		position: 'front end engineer',
		getName: function() {
			return this.name;
		}
	}
	
	return person;
});