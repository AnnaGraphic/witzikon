async function getJokes() {
  try {
    const witzeUrl = 'http://jokes.panda.krebsco.de/api/jokes'

    const response = await fetch(witzeUrl);
    const data = await response.json();
    //TODO build switch statement
    if (data.cod === "500") {
      throw new Error('Uh oh')
    }
    console.log(data);
    const container = document.querySelector('.container');
    console.log(container)
  } catch (error) {
    console.log(err)
  }
}
getJokes()