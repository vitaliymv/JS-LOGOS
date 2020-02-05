//task2
console.log('Who`s there');
function signIn(){
  let login = document.getElementById('login').value
  let password = document.getElementById('pass').value

  if(login == "Cancel") {
    console.log("Canceled.")
  } else if (login == "Admin") {
    console.log("Password ?")
    if (password == "Cancel") {
      console.log("Canceled.")
    } else if (password == "TheMaster") {
      console.log("Welcome!!!")
    } else {
      console.log("Wrong password!!")
    }
  } else {
    console.log("I don`t know you")
  }
}
