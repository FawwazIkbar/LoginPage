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
