function checkLogin() {
    // ១. ចាប់យកតម្លៃពី Input
    const email = document.getElementById('userEmail').value.trim(); // ប្រើ .trim() ដើម្បីលុប Space បើមាន
    const password = document.getElementById('userPassword').value;
    const errorMessage = document.getElementById('error-message');
    const emailField = document.getElementById('userEmail');
    const passwordField = document.getElementById('userPassword');

    // លាងសម្អាត Style ចាស់ៗចេញមុននឹងឆែកម្តងទៀត
    errorMessage.innerText = "";
    emailField.style.border = "1px solid white";
    passwordField.style.border = "1px solid white";

    // ២. ឆែកមើលថា តើមានប្រអប់ណាមួយទទេរឬអត់?
    if (email === "") {
        errorMessage.innerText = "សូមបញ្ចូល Email របស់អ្នក។";
        emailField.style.border = "2px solid red";
        return;
    }

    if (password === "") {
        errorMessage.innerText = "សូមបញ្ចូល Password របស់អ្នក។";
        passwordField.style.border = "2px solid red";
        return;
    }

    // ៣. ឆែកមើលថា តើ Email និង Password ត្រូវជាមួយទិន្នន័យយើងឬអត់?
    if (email === "linashee29@gmail.com" && password === "Lina@9999") {
        alert("សួស្តី LINA! រីករាយដែលបានជួបអ្នកវិញ។");
        window.location.href = "home3.html"; 
    } else {
        // បើវាយខុសណាមួយ (ឬខុសទាំងពីរ)
        errorMessage.innerText = "Email ឬ Password មិនត្រឹមត្រូវទេ។";
        emailField.style.border = "2px solid red";
        passwordField.style.border = "2px solid red";
    }
}