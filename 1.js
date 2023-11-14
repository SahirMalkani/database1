

var firebaseConfig = {
    apiKey: "AIzaSyARxxWJZXyLkkhcSsqmf65NbTvOSFDGQDE",
    authDomain: "sahir1234-37340.firebaseapp.com",
    databaseURL: "https://sahir1234-37340-default-rtdb.firebaseio.com",
    projectId: "sahir1234-37340",
    storageBucket: "sahir1234-37340.appspot.com",
    messagingSenderId: "459480570695",
    appId: "1:459480570695:web:966794ac21c7d854b48a62"
};

var app = firebase.initializeApp(firebaseConfig);


function ssav() {

    var email = document.getElementById("email").value;

    var pass = document.getElementById("password").value;


    var ob = {

        ema: email,
        pp: pass

    }

    var kk = Math.random() * 454574545


    // console.log(ob)

    firebase.database().ref("s123/" + Math.round(kk)).set(ob)

    //2nd method
    firebase.database().ref("s123").push(ob)
    alert("done")


}


function show() {



    firebase.database().ref("s123").once("value", function (data) {

        console.log(data.val())

    })




    // on method

    firebase.database().ref("s123").on("child_added", function (data) {

        console.log(data.val())

    })



}







function del() {






    firebase.database().ref("s123/18400536").remove()



}



function update() {







    firebase.database().ref("s123/87690866").set(

        {

            ema: "karina",
            pp: "kriti"


        }


    )



}











function getData() {
    var email = document.getElementById("email");

    var pass = document.getElementById("password");

    firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, pass.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);

            firebase.auth().currentUser.sendEmailVerification()
                .then(() => {
                    alert("varification email sent")
                });

            // setTimeout(function () {
            //     window.location.href = "index.html";
            // }, 100);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}



function getData2() {
    var email = document.getElementById("email");

    var pass = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...   console.log(user);
            console.log(user);

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage);

        });
}


// function getData2pass() {

//     // alert()


//     var email = document.getElementById("email").value;


//     firebase.auth().sendPasswordResetEmail(email)
//         .then(() => {
//             //  console.log(email);
//             console.log(email);
//             console.log("succesful");


//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage);

//         });




// }


// function getDatagoog() {

//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;

//             console.log(user);


//             // IdP data available in result.additionalUserInfo.profile.
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });


// }


// function getg() {


//     var provider = new firebase.auth.GithubAuthProvider();


//     firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//             var token = credential.accessToken;

//             // The signed-in user info.
//             var user = result.user;


//             console.log(user);

//             // IdP data available in result.additionalUserInfo.profile.
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;


//             console.log(errorMessage);

//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });

// }