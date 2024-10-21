const colors = [
    "joke-bg-1",
    "joke-bg-2",
    "joke-bg-3",
    "joke-bg-4",
    "joke-bg-5",
    "joke-bg-6",
    "joke-bg-7",
    "joke-bg-8",
    "joke-bg-9",
    "joke-bg-10"
];

async function fetchJokes() {
    const container = document.getElementById('jokeContainer');
    try {
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random/25');
        const jokes = await response.json();

        jokes.slice(0, 25).forEach((joke, index) => {
            const jokeElement = document.createElement('div');
            jokeElement.className = `joke ${colors[index % colors.length]}`;
            jokeElement.innerHTML = `
                    <div class="setup">${joke.setup}</div>
                    <div class="punchline">${joke.punchline}</div>
                `;
            container.appendChild(jokeElement);
        });
    } catch (error) {
        console.error('Error fetching jokes:', error);
        const errorMessage = document.createElement('p');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Failed to load jokes. Please try again later.';
        container.appendChild(errorMessage);
    }
}

fetchJokes();