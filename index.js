var myFirstChar = name.slice(0,1);
var upperCaseFirstChar = myFirstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
var restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;

alert("Hello " + capitalisedName);