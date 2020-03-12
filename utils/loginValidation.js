module.exports = loginValidation = (email, username, password) => {
  switch (true) {
    case !email && !username:
      return (msg = "Please enter either email or username.");
    case !password:
      return (msg = "Please enter password.");
    case email && email.length < 12:
      return (msg = "Email length error");
    case username && username.length < 2:
      return (msg = "Username length error.");
    case password && password.length < 6:
      return (msg = "Password length error.");
    default:
      return null;
  }
};
