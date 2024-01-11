export async function postJoke() {
  const jokeInput = document.getElementById('jokeInput');
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', async () => {
    const jokeText = jokeInput.value.trim();
    // input sanitation
    const validInputRegex = /^[A-Za-z0-9\s.,!?'"-]+$/;

    if (!validInputRegex.test(jokeText)) {
      // TODO: user communication
      console.log('Invalid input format');
      return;
    }

    const url = 'https://jokes.panda.krebsco.de/api/jokes';

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