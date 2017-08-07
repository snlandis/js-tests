/*
    Define a repeatify function on the String object.
    'hello'.repeatify(3) should equal 'hellohellohello'
 */
 String.prototype.repeatify = function (repeat) {
	var repeatedString = '';

  for (var i =0; i < repeat; i++) {
  	repeatedString += this.toString();
  }

	return repeatedString;
}

console.log('hello'.repeatify(3));
