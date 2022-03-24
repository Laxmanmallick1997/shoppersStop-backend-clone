
document.getElementById("btn").addEventListener("click", signUp);

async function signUp() {

  let url = `https://shopperstopapinodejs.herokuapp.com/register`;

  let userCredentials = {
    name: document.getElementById("user").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    password: document.getElementById("pass").value,
    gender: document.querySelector('input[name="gender"]:checked').value
  };

  console.log(userCredentials);


  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: {
      "Content-Type": "application/json"
    }
  });

  let data = await res.json();
  console.log('data:', data)
  //[0].length !== 0
  if (data.error) {
    let message = document.getElementById("message");
    return message.innerText = data.error[0].msg;
  }
  else {

    console.log("Else worked")

    message.style.color = "green";
    message.innerText = data.message;

    setTimeout(function () {
      window.location.href = "./signin.html"
    }, 1000);
  }

}