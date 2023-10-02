const pass = document.getElementById("pass");
const conPass = document.getElementById("conpass");

document.addEventListener("focusout", () => {
  const isValid = pass.value === conPass.value;

  [pass, conPass].forEach((element) => {
    element.classList.remove("valid", "invalid", "indeterminate");
    element.classList.add(pass.value ? (isValid ? "valid" : "invalid") : "indeterminate");
  });
});
