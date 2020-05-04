const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
      Your id is: ${req.session.userId}
      <form method="POST">
        <input type="text" name="email" placeholder="email" />
        ${getError(errors, "email")}
        <input type="text" name="password" placeholder="password" />
        ${getError(errors, "password")}
        <input type="text" name="passwordConfirmation" placeholder="password confirm" />
        ${getError(errors, "passwordConfirmation")}
        <button>Sign up</button>
      </form>
    </div>
    `,
  });
};
