let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("sign-Up");
signup.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === "" || email.value === "" || password.value.length < 6) {
    function show(e){
        e.preventDefault()
        var alert=document.getElementById("alert")
        alert.style.display="block"
    }
  } else {
    let datalist = [
      {
        id: userName.value,
        email: email.value,
        password: password.value,
      },
    ];
    localStorage.setItem("datalist", JSON.stringify(datalist));
    setTimeout(() => {
      window.location.href = "login.html";
      userName.value = "";
      email.value = "";
      password.value = "";
    }, 1000);
  }
});


function show(){
    var alert=document.getElementById("alert")
    alert.style.display="block"
}
function hide(){
      var alert=document.getElementById("alert")
    alert.style.display="none"
}