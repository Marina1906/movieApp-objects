const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor= 'magenta';
movieList.style.display= 'block';


let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },

  1.5:'hello'
};

delete person.age;
person.isAdmin = true;
console.log (person ['first name']);
console.log(person[1.5]);
console.log(person);
