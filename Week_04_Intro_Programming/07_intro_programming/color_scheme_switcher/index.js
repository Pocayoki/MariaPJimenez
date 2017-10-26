document.getElementById('grayButton').onclick = switchGray;
2
document.getElementById('whiteButton').onclick = switchWhite;
3
4
function switchGray() {
5
  document.body.style.backgroundColor = 'gray';
6
  document.body.style.color = 'white';
7
}
8
9
function switchWhite() {
10
  document.body.style.backgroundColor = 'white';
11
  document.body.style.color = 'black';
12
}
13
7 file changes in working directory
View changes
commit:edda13
WIP on master: Auto stash before merge of "master" and "origin/master"