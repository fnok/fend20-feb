// altert user data from contact-field inputs
let contactFormInput = {
  firstName: "",
  lastName: "",
  emailAddr: "",
  problemSelection: "",
  message: "",
};

document.getElementById("submitBtn").addEventListener("click", validateEmail);

function displayInput() {
  contactFormInput = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    emailAddr: document.getElementById("email-address").value,
    problemSelection: document.getElementById("problem-select").value,
    message: document.getElementById("text-input").value,
  };
  alert(
    "Frist Name: " +
      contactFormInput.firstName +
      "\nLast Name: " +
      contactFormInput.lastName +
      "\nEmail: " +
      contactFormInput.emailAddr +
      "\n\nProblem: " +
      contactFormInput.problemSelection +
      "\n\nMessage: \n" +
      contactFormInput.message
  );
}

function validateEmail() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailCheck = document.getElementById("email-address").value;

  if (emailCheck.match(mailformat)) {
    document.getElementById("email-address").classList.remove("invalid-email");
    displayInput();
    return true;
  } else {
    document.getElementById("email-address").classList.add("invalid-email");
    document.getElementById("email-address").focus;
    return false;
  }
}
