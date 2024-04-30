function getCurrentDateTime() {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const currentDate = new Date();

    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    return `${month} ${day}, ${year} ${hours}:${minutes}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('user-form');
    const leaderboard = document.getElementById('leaderboard');
    const addButton = document.getElementById('add-button');
    let score = 0;

    addButton.addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value.toUpperCase();
        const lastName = document.getElementById('lastName').value.toUpperCase();
        const country = document.getElementById('country').value.toUpperCase();
        const playerScore = parseInt(document.getElementById('score').value);

        if (firstName && lastName && country && playerScore) {
            const playerEntry = document.createElement('div');
            playerEntry.classList.add('player-entry');
            const currentDataTime = getCurrentDateTime();
            playerEntry.innerHTML = `<div class='main-div'><div class='name-time'><p id='PlayerName'>${firstName} ${lastName}</p><p id='CurrentTime'>${currentDataTime}</p></div>
            <div class='country'>${country}</div>
            <div class='score'>${playerScore}</div>
            <div class='navigation-button'>
                <div id='delete-card'><i class="fa-solid fa-trash"></i></div>
                <div id='plusFive'>+5</div>
                <div id='minusFive'>-5</div>
            </div>
            </div>`;

            leaderboard.appendChild(playerEntry);

            const deleteButton = playerEntry.querySelector('#delete-card');
            deleteButton.addEventListener('click', function () {
                leaderboard.removeChild(playerEntry);
            });

            leaderboard.addEventListener('click', function (event) {
                const plusButton = event.target.closest('#plusFive');
                const minusButton = event.target.closest('#minusFive');
            
                if (plusButton) {
                    const scoreElement = plusButton.closest('.player-entry').querySelector('.score');
                    let playerScore = parseInt(scoreElement.textContent);
                    if (playerScore < 100) {
                        playerScore += 5;
                        if (playerScore > 100) {
                            playerScore = 100;
                        }
                        scoreElement.textContent = playerScore;
                    }
                }
            
                if (minusButton) {
                    const scoreElement = minusButton.closest('.player-entry').querySelector('.score');
                    let playerScore = parseInt(scoreElement.textContent);
                    if (playerScore > 0) {
                        playerScore -= 5;
                        if (playerScore < 0) {
                            playerScore = 0;
                        }
                        scoreElement.textContent = playerScore;
                    }
                }
            });

            form.reset();
        } else {
            alert('All fields are required');
        }
    });
});
