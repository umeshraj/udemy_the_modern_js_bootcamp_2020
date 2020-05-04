const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div>
        <form method="POST">
          <input type="text" name="email" placeholder="email" />
          ${getError(errors, "email")}
          <input type="text" name="password" placeholder="password" />
          ${getError(errors, "password")}
          <button>Sign in</button>
        </form>
      </div>
  `,
  });
};
