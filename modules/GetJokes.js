export function setupEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', getJokes);
}
async function getJokes() {
  try {
    const witzeUrl = "http://jokes.panda.krebsco.de/api/jokes";
    const response = await fetch(witzeUrl);
    const data = await response.json();
    const status =  response.status;

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
    createImage(`https://http.cat/${error.message}`, `${error}`);
    console.log(error);
  }
}

function createImage(src, alt) {
  const result = document.querySelector(".result");
  //console.log("createImage");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  result.appendChild(img);
}
