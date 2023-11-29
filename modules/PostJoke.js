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
          'Content-Type': 'text/plain'
        },
        body: `joke=${jokeText}`
      })
    } catch (error) {
      console.log(error);
    }
  })
}