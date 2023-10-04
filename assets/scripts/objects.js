/*
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
*/

const addMovieBtn = document.getElementById ('add-movie-btn');
const searchBtn = document.getElementById ('search-btn');

const movies= [];

const renderMovies= ()=> {
  const movieList= document.getElementById('movie-list');

  
  if (movies.lenght===0){
    movieList.classList.remove('visible');
    return;
  }else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach((movie)=>{
    const movieEl = document.createElement('li');
    movieEl.textContent = movie.info.title;
    movieList.append(movieEl); 
  });
};


const addMovieHandler = () => {
const title = document.getElementById ('title').value;
const extraName = document.getElementById ('extra-name').value;
const extraValue = document. getElementById('extra-value').value;



if (
  title.trim()===''||
  extraName.trim() ==='' ||
  extraValue.trim()=== ''
    ) {
      return;
    }

    const newMovie = {

      info: {
        title,
        [extraName]:extraValue

    },
id: Math.random()
};
movies.push(newMovie);
renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);