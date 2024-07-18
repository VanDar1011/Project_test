var form = $(".form-login");
var checkbox = $(".remember-password");
console.log("checkbox: ", checkbox);
// console.log(form);
const account = {
  username: "admin",
  password: "admin",
};
$(document).ready(function () {
  if (localStorage.getItem("rememberPassword") === "true") {
    $("input[name='username']").val(localStorage.getItem("username"));
    $("input[name='password']").val(localStorage.getItem("password"));
    checkbox.prop("checked", true);
  }
});
form.on("submit", function (e) {
  e.preventDefault();
  var data = new FormData(e.target);
  var dataLogin = Object.fromEntries(data.entries());
  //   console.log(dataLogin);
  if (dataLogin.username === "" || dataLogin.password === "") {
    alert("Vui lòng điền đầy đủ thông tin");
  } else {
    if (
      dataLogin.username === account.username &&
      dataLogin.password === account.password
    ) {
      if (checkbox.is(":checked")) {
        localStorage.setItem("rememberPassword", true);
        localStorage.setItem("username", dataLogin.username);
        localStorage.setItem("password", dataLogin.password);
        console.log("checkbox checked");
      } else {
        localStorage.removeItem("rememberPassword");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      location.href = "index.html";
    } else {
      alert("Sai thông tin đăng nhập, vui lòng thử lại");
    }
  }
});
