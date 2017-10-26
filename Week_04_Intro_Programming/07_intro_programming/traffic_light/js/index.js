document.getElementById('stopButton').onclick = illuminateRed;
2
document.getElementById('slowButton').onclick = illuminateYellow;
3
document.getElementById('goButton').onclick = illuminateGreen;
4
5
function illuminateRed() {
6
  clearLights();
7
  document.getElementById('stopLight').style.backgroundColor = "red";
8
}
9
10
function illuminateYellow() {
11
  clearLights();
12
  document.getElementById('slowLight').style.backgroundColor = "Yellow";
13
}
14
15
function illuminateGreen() {
16
  clearLights();
17
  document.getElementById('goLight').style.
18
  backgroundColor = "green";
19
}
20
21
function clearLights() {
22
  document.getElementById('stopLight').style.backgroundColor = "black";
23
  document.getElementById('slowLight').style.backgroundColor = "black";
24
  document.getElementById('goLight').style.backgroundColor = "black";
25
}
12 file changes in working directory
View changes
commit:edda13
WIP on master: Auto stash before merge of "master" and "origin/master"