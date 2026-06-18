const regbtn = document.getElementById("reg-button")
regbtn.addEventListener("click", function (event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const mail = document.getElementById("mail").value
    const pass = document.getElementById("password").value
    const reset_password = document.getElementById("re-password").value
    console.log(name)
    console.log(mail)
    console.log(password)
    console.log(reset_password)
    if (name === "" || mail === "" || pass === "" || reset_password === "") {
        alert("pls fill all fields")
        return
    }
    if (pass !== reset_password) {
        alert("password mismatch")
        return
    }
    const user = {
        name: name,
        email: mail,
        password: pass
    }
    let users = JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    alert("registration successfull")
    window.location.href = "login.html"
})