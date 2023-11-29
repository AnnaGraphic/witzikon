export async function postJoke() {
  const jokeInput = document.getElementById('jokeInput');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', async () => {
    const jokeText = jokeInput.value;

    const url = 'http://jokes.panda.krebsco.de/api/jokes';

    try {
      console.log(jokeText);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `joke=${jokeText}`
      })
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else (
        console.log(`Error: ${response.status} - ${response.statusText}`)
      )
    } catch (error) {
      console.log(error);
    }
  })
}