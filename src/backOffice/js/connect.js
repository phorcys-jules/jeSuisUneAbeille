document.getElementById("formLogin").addEventListener('submit', (e) => {
    e.preventDefault();
    let log = document.getElementById('login').value;
    let pass = document.getElementById('pass').value;
    if (verifierLogin(log, pass)) {
        window.localStorage.setItem("currentUser",log);
        window.location.href='./dashboard.html';
    } else {
        //TODO message d'erreur propre
        console.log('mauvaise combinaison login mdp');
    }

})

function verifierLogin(login, pass) {
    //return login==='login' && pass==='pass';
    return pass==='pass';
}
