let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hi there!');
  },
};

delete person.age;
person.isAdmin = true;
console.log (person);
