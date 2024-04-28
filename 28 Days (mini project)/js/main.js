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

    addButton.addEventListener('click', function () {
        const firstName = document.getElementById('firstName').value.toUpperCase();
        const lastName = document.getElementById('lastName').value.toUpperCase();
        const country = document.getElementById('country').value.toUpperCase();
        const score = document.getElementById('score').value;

        if (firstName && lastName && country && score) {
            const playerEntry = document.createElement('div');
            playerEntry.classList.add('player-entry');
            const currentDataTime = getCurrentDateTime();
            playerEntry.innerHTML = `<div class='main-div'><div class='name-time'><p id='PlayerName'>${firstName} ${lastName}</p><p id='CurrentTime'>${currentDataTime}</p></div>
            <div class='country'>${country}</div>
            <div class='score'>${score}</div>
            <div class='navigation-button'>
                <div id='delete-card'>Del</div>
                <div id='plusFive'>+5</div>
                <div id='minusFive'>-5</div>
            </div>
            </div>`;

            leaderboard.appendChild(playerEntry);

            form.reset();
        } else {
            alert('All fields are required');
        }
    });
});
