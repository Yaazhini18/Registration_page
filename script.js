var modal=document.getElementById('login-form');
 window.onclick = function(event) 
 {
    if(event.target==modal){
       modal.style.display="none";
     }
 }


function checkPassword() {
    if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Click Register button to get Register!!';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Please enter the valid Password!!';
  }
}

function log_success(){
  alert("You had Logged into tha Page Successfully!!! \n Thank you!!")
}

function reg_success(){
  alert("You had Registered Successfully !!! \n Thank you for your kind support!!")
}
