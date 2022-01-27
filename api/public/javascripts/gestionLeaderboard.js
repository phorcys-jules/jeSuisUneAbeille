function afficherLeaderboard(data) {
    for (let i = 0; i < data.length; i++) {
        let color = ''

        switch (i) {
            case 0:
                color = 'text-gold'
                break;

            case 1:
                color = 'text-silver'
                break;

            case 2:
                color = 'text-bronze'
                break;
        }

        document.getElementById('leaderboard').innerHTML += `
            <div class="${color}">
                <strong>${i + 1}.</strong> ${data[i].bestScore}pts - ${data[i].nom}
                <hr/>
            </div>
        `

    }
}

window.onload = () => {
    fetch('http://localhost:3000/leaderboard/listUsers', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((results) => {
            afficherLeaderboard(results)
        })
        .catch(err => console.log(err))
}