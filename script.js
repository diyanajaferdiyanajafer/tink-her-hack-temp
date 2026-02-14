// Admin Login Function
function adminLogin() {
    const id = document.getElementById("adminId").value;
    const password = document.getElementById("adminPassword").value;

    if (id === "admin" && password === "123") {
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Invalid Admin Credentials!");
    }

    return false; // Prevent form reload
}


// Student Login Function
function studentLogin() {
    const id = document.getElementById("studentId").value;
    const password = document.getElementById("studentPassword").value;

    // Hardcoded student credentials
    const validId = "nishana001";
    const validPassword = "1234";

    if (id === validId && password === validPassword) {
        window.location.href = "student-dashboard.html";
    } else {
        alert("Invalid Student ID or Password!");
    }

    return false; // Prevent page reload
}

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Account Created Successfully!");
        window.location.href = "student-login.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "student-dashboard.html";
    })
    .catch((error) => {
        alert("Invalid Login");
    });
});



