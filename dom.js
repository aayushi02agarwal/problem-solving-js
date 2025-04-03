const element1 = document.getElementById("my-intro");
console.log(element1); //<div id="intro">My name is Aayushi</div>
console.log(typeof element1); //object

const byTag = element1.getElementsByTagName("p");
console.log(byTag);

const byClass = element1.getElementsByClassName("intro");
console.log(byClass);

const byCSSSelector = element1.querySelectorAll("h2.intro");
console.log(byCSSSelector);



//DOM Specific datatypes
const element2 = document.createElement("div");
const textElement = document.createTextNode("text");

//1. NODE
console.log(element2.nodeType); // 1 -> means Node.ELEMENT_NODE;
console.log(textElement.nodeType); // 2 -> means Node.ELEMENT_NODE;

console.log(element2.nodeName); //DIV
console.log(textElement.nodeName); //#text

const text = element1.firstChild;
console.log(text.nodeValue); //Hey!

console.log(element1.childNodes); //NodeList(5)

element2.appendChild(document.createElement("p"));
const firstChildOfElement2 = element2.firstChild;
console.log(firstChildOfElement2.nodeName);//p

element2.removeChild(firstChildOfElement2);
console.log(element2.childNodes);//NodeList[] empty

//2. Element
element2.id = "myDiv";
element2.className = "conatiner";
console.log(element2.id);//myDiv
console.log(element2.className);//conatiner
console.log(element2.tagName);//DIV
console.log(element2.getAttribute('id')); //myDiv
element2.setAttribute('href',"test.com");
console.log(element2.getAttribute('href')); //test.com
console.log(document.querySelector('div')); //<div id="intro">--<div>
document.body.appendChild(element2);
console.log(document.querySelectorAll('div'));//NodeList(2) [div#my-intro, div#myDiv.conatiner]
console.log(document.querySelector('div'));//<div id="intro">--<div> -> first div


//3. Document
console.log(document.body);//<body>---</body>
console.log(document.documentElement);//<html>--
//createElement()
//getElementById(), getElementByClassName(), etc.

//4.Text
const textNode = document.createTextNode('This is a text node.'); // Creates a text node
document.body.appendChild(textNode);


//5. Attr
const element = document.createElement('a'); // Creates a new <a> element
element.setAttribute('href', 'https://example.com'); // Sets the `href` attribute
console.log(element.getAttribute('href')); //https://example.com


//6. NodeList
// Collection of Nodes returned by querySelectorAll(), childNodes

//7. HTMLCollection
// Collection of elements returned by getElementsById(), getElementsByClassName(), getElementsByTagName()

//8. Event
//click, hover, etc.

//9. Window
console.log(window.document);
console.log(window.alert("Heyyy"));

//10. Comment
const comment = document.createComment('This is a comment'); // Creates a comment node
document.body.appendChild(comment); 
console.log(document.body.childNodes);//NodeList(7) [text, div#my-intro, text, script, div#myDiv.conatiner, text, comment]

//11. Range
const range = document.createRange(); // Creates a new Range object
const p = document.querySelector('p'); // Selects the first <p> element
range.selectNodeContents(p); // Selects the contents of the <p> element
console.log(range.toString()); //I'm a Software Engineer