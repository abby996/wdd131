const input = document.queryselector('#favchap ');
const button = document.querySelector('button');
const list = document.querySelector('___________');

const li = document.querySelector('li');

const deleteButton = document.createElement('button');

li.textContent= input.value
deleteButton.textContent = ' x ';

li.append(deleteButton);

list.append(li);