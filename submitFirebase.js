// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBFOZmfvaAXMvQW6lsqovgWBPQTHVf4mj4",
    authDomain: "scootma-a76c9.firebaseapp.com",
    databaseURL: "https://scootma-a76c9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scootma-a76c9",
    storageBucket: "scootma-a76c9.appspot.com",
    messagingSenderId: "156419848811",
    appId: "1:156419848811:web:9d15b9deb18750e0630f2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for form submit
document.getElementById('commande').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  var quantite = getInputVal('quantite');
  var nom = getInputVal('nom');
  var email = getInputVal('email');
  var adresse = getInputVal('adresse');
  var codepostal = getInputVal('codepostal');
  var ville = getInputVal('ville');
  var telephone = getInputVal('telephone');
  var message = getInputVal('message');
  console.log( quantite ,nom ,email, adresse,ville, codepostal, telephone, message);

  saveContactInfo( quantite  ,nom ,email, adresse,ville, codepostal, telephone, message);

  document.querySelector(".contact-clean");
}
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function validate(){
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(nom.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(adresse.length < 10){
    text = "Please Enter Correct adresse";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(telephone) || telephone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

// Save infos to Firebase
function saveContactInfo( quantite  ,nom ,email, adresse,ville, codepostal, telephone, message) {
  var newMessageRef = contactInfo.push();
  newMessageRef.set({
     quantite  :  quantite ,
    nom : nom,
    adresse : adresse,
    ville : ville ,
    codepostal : codepostal,
    telephone : telephone,
    email: email,
    message: message,
  });
}