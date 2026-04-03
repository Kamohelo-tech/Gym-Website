document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader when the page fully loads
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hide-preloader");
    }, 1000); // Adjust timing as needed
});


document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.getElementById("signin-btn");
    const container = document.getElementById("container");
    const body = document.body;
    const loginForm = document.getElementById("login-form");

    signInBtn.addEventListener("click", (e) => {
        e.preventDefault();
        container.classList.add("login-mode");
        body.classList.add("dark-mode");
        setTimeout(() => {
            loginForm.style.opacity = "1";
            loginForm.style.transform = "translateX(0)";
        }, 500);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".signup-btn");
    const signinBtn = document.querySelector(".signin-btn");

    if (signupBtn) {
        signupBtn.addEventListener("click", function (event) {
            event.preventDefault();
            
            // Simulate user registration
            const user = {
                email: document.querySelector("input[type='email']").value,
                profileCompleted: false // New user has not completed the profile
            };

            localStorage.setItem("user", JSON.stringify(user));

            window.location.href = "dashboard.html";
        });
    }

    if (signinBtn) {
        signinBtn.addEventListener("click", function (event) {
            event.preventDefault();
            
            const user = JSON.parse(localStorage.getItem("user"));

            if (user) {
                if (user.profileCompleted) {
                    window.location.href = "dashboard.html";
                }
            } else {
                alert("User not found. Please sign up first.");
            }
        });
    }


    document.querySelector(".signup-btn").addEventListener("click", function(event) {
        let password = document.querySelector('input[type="password"]').value;
        let confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;
        
        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match!");
        }
    });


});
