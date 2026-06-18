const lgnbtn = document.getElementById("login-btn")
//console.log(lgnbtn)
lgnbtn.addEventListener("click", function (event) {
    event.preventDefault()
    email = document.getElementById("mail").value
    password = document.getElementById("password").value
    console.log(password)
    if (email === "" || password === "") {
        alert("please fill all the fields")
        return
    }
    const users = JSON.parse(localStorage.getItem("users"))
    const matcheduser = users.find(function (user) {
        return user.mail === email && user.password === password
    })
    if (matcheduser) {
        alert("Login successfull")
        window.location.href = "index.html"
    }
    else {
        alert("Incorrect username or password")
    }
})