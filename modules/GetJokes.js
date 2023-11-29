export async function getJokes() {
  try {
    const witzeUrl = 'http://jokes.panda.krebsco.de/api/jokes'
//router.get('/latestJoke', (ctx) => {
    const response = await fetch(witzeUrl);
    const data = await response.json();
    //TODO build switch statement
    if (data.cod === "500") {
      throw new Error('Uh oh')
    }
    //console.log(data[1].joke);
    const result = document.querySelector('.result');
    //console.log(container);
    data.forEach(joke => {
      console.log(joke.joke);
      const li = document.createElement('li');
      li.innerHTML = `${joke.joke}`;
      result.appendChild(li);
    })
  } catch (error) {
    console.log(error)
  }
}