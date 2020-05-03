const layout = require("../layout");

module.exports = () => {
  return layout({
    content: `
      <div>
        <form method="POST">
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button>Sign in</button>
        </form>
      </div>
  `,
  });
};
