const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
  return layout({
    content: `
    <form method="POST">
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Price" name="price" />
    <input type="file" name="image" id="" />
    <button>Submit</button>
  </form>
    `,
  });
};
