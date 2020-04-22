const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];
World.add(world, walls);

// Maze generation

// old way
// const grid = [];
// for (let i = 0; i < 3; i++) {
//   grid.push([]);
//   for (let j = 0; j < 3; j++) {
//     grid[i].push(false);
//   }
// }

// new way
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));
// console.log(grid);

// vertical
const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

// horizontals
const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

// console.log(verticals);
// console.log(horizontals);

const startRow = Math.floor(Math.random() * cells);
const startCol = Math.floor(Math.random() * cells);
// console.log(startRow, startCol);

const stepThroughCell = (row, column) => {
  // if I have visited cell at [row, column] then return
  if (grid[row][column]) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbors = [
    [row - 1, column],
    [row, column + 1],
    [row + 1, column],
    [row, column - 1],
  ];
  // For each neighbor...
  // See if that neighbor is out of bounds
  // if have visited neighbor, continue to next neighbor
  // remove a wall from horiz or vertical
  // visit that next cell
};

stepThroughCell(startRow, startCol);
console.log(startRow, startCol);
console.log(grid);
