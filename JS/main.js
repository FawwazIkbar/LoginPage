const btnLogin = $("#login");
const btnRegist = $("#register");
const loginForm = $(".login-form");
const registForm = $(".register-form");
const formContainer = $(".form-container");
const formCol = $(".form-col");

btnLogin.click(function () {
  btnLogin.css("background-color", "#ffeba7");
  btnRegist.css("background-color", "#5e6681");
  btnLogin.css({
    background: "#ffeba7",
    color: "#5e6681",
  });
  btnRegist.css({
    background: "#5e6681",
    color: "#ffeba7",
  });
  loginForm.css({
    left: "0",
    opacity: 1,
  });
  registForm.css({
    left: "100%",
    opacity: 0,
  });
  loginForm.addClass("active");
  registForm.removeClass("active");
});

btnRegist.click(function () {
  btnLogin.css({
    background: "#5e6681",
    color: "#ffeba7",
  });
  btnRegist.css({
    background: "#ffeba7",
    color: "#5e6681",
  });

  loginForm.css({
    left: "-100%",
    opacity: 0,
  });
  registForm.css({
    left: "0",
    opacity: 1,
  });
  registForm.addClass("active");
  loginForm.removeClass("active");
});

// view password function

const loginPasw = $("#logPassword");
const loginPaswIcon = $("#log-pass-icon");

const registPasw = $("#regPassword");
const registPaswIcon = $("#reg-pass-icon");

function myLogPassword() {
  if (loginPasw.prop("type") === "password") {
    loginPasw.prop("type", "text");
    loginPaswIcon.attr("name", "eye-off-outline");
    loginPaswIcon.css("cursor", "pointer");
  } else {
    loginPasw.prop("type", "password");
    loginPaswIcon.attr("name", "eye-outline");
    loginPaswIcon.css("cursor", "pointer");
  }
}
function myRegPassword() {
  if (registPasw.prop("type") === "password") {
    registPasw.prop("type", "text");
    registPaswIcon.attr("name", "eye-off-outline");
    registPaswIcon.css("cursor", "pointer");
  } else {
    registPasw.prop("type", "password");
    registPaswIcon.attr("name", "eye-outline");
    registPaswIcon.css("cursor", "pointer");
  }
}

function changeIcon(value) {
  if (value.length > 0) {
    loginPaswIcon.attr("name", "eye-off-outline");
    registPaswIcon.attr("name", "eye-off-outline");
  } else {
    loginPaswIcon.attr("name", "lock-closed-outline");
    registPaswIcon.attr("name", "lock-closed-outline");
  }
}
