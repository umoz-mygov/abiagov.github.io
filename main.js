/*
Everything in between is a comment.
*/

// This is a comment

/*
Equality	Does a test to see if two values are equal to one another and returns a true/false (Boolean) result.
	===
	var myVariable = 3;
    myVariable === 4;
*/

/*
Not, Does-not-equal
    Returns the logically opposite value of what it precedes; it turns a true into a false, etc.
    When it is used alongside the Equality operator, the negation operator tests whether two values are not equal.

    The basic expression is true, but the comparison returns false because we've negated it:

    var myVariable = 3;
    !(myVariable === 3);

    Here we are testing "is myVariable NOT equal to 3". This returns false because myVariable IS equal to 3.

    var myVariable = 3;
    myVariable !== 3;
*/

// EVENTS (click event)

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mygov1.jpg') {
      myImage.setAttribute ('src','images/mygov.jpg');
    } else {
      myImage.setAttribute ('src','images/mygov1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Abia state governor, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Abia state governor, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
