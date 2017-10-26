var addZeroElement = document.getElementById('zero');
2
var addFiveElement = document.getElementById('add5');
3
var addTenElement = document.getElementById('add10');
4
var subOneElement = document.getElementById('sub1');
5
var results = document.getElementById('result');
6
var total = 0;
7
var randomElement = document.getElementById('random');
8
9
10
11
12
13
14
15
/*Execute Code Here*/
16
console.dir(addZeroElement);
17
addZeroElement.onclick = addZero;
18
addFiveElement.onclick = addFive;
19
addTenElement.onclick = addTen;
20
subOneElement.onclick = subOne;
21
randomElement.onclick = function(){
22
	var number = prompt("what's your number?");
23
	addRandom(number);
24
}
25
results.onmouseover = function() {
26
	results.style.color = 'blue';
27
};
28
29
results.onmouseout = function() {
30
	results.style.color = 'green';
31
};
32
33
console.dir(results);
34
35
36
37
/*My Functions Goes Here*/
38
function addZero() {
39
	total = total + 0;
40
	results.innerHTML = total;
41
	
42
}
43
44
function addFive() {
45
	total = total + 5;
46
	results.innerHTML = total;
47
}

