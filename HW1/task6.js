console.log('Who`s there');
function signIn(){
  let login = document.getElementById('login').value
  let password = document.getElementById('pass').value

  switch (login) {
    case "Cancel":
      console.log("Canceled.")
      break;
    case "Admin":
      console.log("Password")
      switch (password) {
        case "TheMaster":
          console.log("Welcome!!!")
          break;
        case "Cancel":
          console.log("Canceled.")
        default:
          console.log("Wrong password!!")
      }
      break;
    default:
      console.log("I don`t know you")
  }
}
