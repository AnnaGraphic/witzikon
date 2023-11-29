export function setupEventListener() {
  const button = document.getElementById('button');
  button.addEventListener('click', getJokes);
}
async function getJokes() {
  try {
    const witzeUrl = "http://jokes.panda.krebsco.de/api/jokes";
    const response = await fetch(witzeUrl);
    const data = await response.json();
    console.log("response.status", response.status);
    if (response.status === 500) {
      console.log("500");
      createImage("https://http.cat/500", "Uh oh");
      throw new Error("Uh oh");
    } else if (response.status === 404) {
      createImage("https://http.cat/404", "Not found");
      throw new Error(response.status);
    } else if (response.status === 400) {
      createImage("https://http.cat/400", "Bad request");
      throw new Error("Forbidden");
    } else if (response.status === 401) {
      createImage("https://http.cat/401", "Unauthorized");
      throw new Error("Unauthorized");
    }

    const result = document.querySelector(".result");
    data.forEach((joke) => {
      console.log(joke.joke);
      const li = document.createElement("li");
      li.innerHTML = `${joke.joke}`;
      result.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

function createImage(src, alt) {
  const result = document.querySelector(".result");
  console.log("createImage");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  console.log(img);
  result.appendChild(img);
}
