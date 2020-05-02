module.exports = ({ req }) => {
  return `
    <div>
    Your id is: ${req.session.userId}
    <form method="POST">
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="password" />
      <input type="text" name="passwordConfirmation" placeholder="password confirm" />
      <button>Sign up</button>
    </form>
  </div>
  `;
};
