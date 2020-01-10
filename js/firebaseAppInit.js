function onLoadFunction(){
    firebase.initializeApp(fbConfig);
    showCurrentUser();//update lbUserLoggedIn label
}