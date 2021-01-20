var db = firebase.firestore();

  

const container = document.querySelector('.container');
let logged_in = false;
let error = '';
let num = null;
let on_page = 'login';
function updateView() {
    if(on_page == 'login') {
        loginScreen();
    }

    if(on_page == 'register') {
        registerScreen();
    }
    if(logged_in === true) {
        container.innerHTML = `knoobs`;
    }
}
updateView();


function loginScreen() {
    container.innerHTML = `
        <form onsubmit="login(event, this)">
            <input type="email" id="email">
            <input type="password" id="password">
            <input type="submit" id="submit" value="Login">
        </form>
        <div id="error">${error}</div>
    `;
}

function login(e, form) {
    e.preventDefault();

    const email = form['email'].value;
    const password = form['password'].value;
    console.log(email, password);

    if(email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in 
                // ...
                logged_in = true;
                updateView();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                error = errorCode + ' ' + errorMessage;
                updateView();
            });
    } else { error = 'you need to type in email and password'; updateView(); }
    
}

function controller() {

    num =  Math.round(Math.random() * 1000000) * 31 / 50 % 2

    updateView();
}