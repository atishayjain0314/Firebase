const firebaseConfig = {
    apiKey: "AIzaSyDV-p8ODILRBcfE3YhonQ8sDwuLzbhJR4I",
    authDomain: "form-7bbac.firebaseapp.com",
    databaseURL: "https://form-a2596-default-rtdb.firebaseio.com/",
    projectId: "form-7bbac",
    storageBucket: "form-7bbac.appspot.com",
    messagingSenderId: "712355533177",
    appId: "1:712355533177:web:415faa9b0f1bbb4f215fa8",
    measurementId: "G-CS80HJMDDH"
  };

  //initializing the firebase
firebase.initializeApp(firebaseConfig);

//reference for the database so this firebase.database() throws an object and we need to catch them

var FormDB = firebase.database().ref('Form');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var mail = getElementVal('mail');
    var fullname = {
        fname : getElementVal('fname'),
        lname : getElementVal('lname'), 
    }
    save(mail,fullname);
}

const save = (mail,fullname) =>{
    var newForm = FormDB.push();

    newForm.set({
        mail : mail,
        fullname : fullname,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}