$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDwM_amJwRmdfKu2cezanMqbjuvJXGTc4w",
        authDomain: "bootcamp-first-attempt.firebaseapp.com",
        databaseURL: "https://bootcamp-first-attempt.firebaseio.com",
        projectId: "bootcamp-first-attempt",
        storageBucket: "bootcamp-first-attempt.appspot.com",
        messagingSenderId: "1002927761886",
        appId: "1:1002927761886:web:f25488293b98c8eadc954f"
    };
    
    firebase.initializeApp(config);
    
    // Create a variable to reference the database.
    var database = firebase.database();
    
})