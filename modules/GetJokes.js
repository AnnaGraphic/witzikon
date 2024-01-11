import { handleError } from "./HandleError.js ";

export function setupEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', getJokes);
};

async function getJokes() {
  try {
    const witzeUrl = "https://jokes.panda.krebsco.de/api/jokes";
    const response = await fetch(witzeUrl);
    const data = await response.json();
    const status =  response.status;
    console.log('click')
    if (status === 500 || status === 404 || status === 400 || status === 401) {
      throw new Error(status);
    }

    const result = document.querySelector(".result");
    data.forEach((joke) => {
      console.log(joke.joke);
      const li = document.createElement("li");
      li.innerHTML = `${joke.joke}`;
      result.appendChild(li);
    });
  } catch (error) {
    handleError()
  }
}
