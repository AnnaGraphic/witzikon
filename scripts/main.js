import { getJokes } from '../modules/GetJokes.js';
import { postJoke } from '../modules/PostJoke.js';

function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const homeLink = document.createElement('a');
  homeLink.href = '/index.html'
  homeLink.textContent = 'Home';

  const postJokesLink = document.createElement('a');
  postJokesLink.href = '/pages/postJokes.html';
  postJokesLink.textContent = 'send jokes';

  navbar.appendChild(homeLink);
  navbar.appendChild(postJokesLink);

  const body = document.body;
  body.insertBefore(navbar, body.firstChild);
}
//console.log(getJokes());
createNavbar();
postJoke();
