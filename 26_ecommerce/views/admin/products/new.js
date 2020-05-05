const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ errors }) => {
  return layout({
    content: `
    <form method="POST" enctype="multipart/form-data">
    <input type="text" placeholder="Title" name="title" />
    ${getError(errors, "title")}
    <input type="text" placeholder="Price" name="price" />
    ${getError(errors, "price")}
    <input type="file" name="image" id="" />
    <button>Submit</button>
  </form>
    `,
  });
};
