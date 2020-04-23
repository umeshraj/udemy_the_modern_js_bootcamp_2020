const { Engine, Render, Runner, World, Bodies, Body } = Matter;

const cells = 10;
const width = 600;
const height = 600;

const unitLength = width / cells;

const engine = Engine.create();
engine.world.gravity.y = 0;
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
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
World.add(world, walls);

// Maze generation

const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const tmp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = tmp;
  }
  return arr;
};

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

// vertical
const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

// horizontals
const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startCol = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // if I have visited cell at [row, column] then return
  if (grid[row][column]) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  // For each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // See if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
    ) {
      continue;
    }
    // if have visited neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }
    // remove a wall from horiz or vertical
    if (direction == "left") {
      verticals[row][column - 1] = true;
    } else if (direction == "right") {
      verticals[row][column] = true;
    } else if (direction == "up") {
      horizontals[row - 1][column] = true;
    } else if (direction == "down") {
      horizontals[row][column] = true;
    }

    stepThroughCell(nextRow, nextColumn);
  }

  // visit that next cell
};

stepThroughCell(startRow, startCol);

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open == true) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      10,
      {
        isStatic: true,
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open == true) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      10,
      unitLength,
      {
        isStatic: true,
      }
    );
    World.add(world, wall);
  });
});

// add goal
const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * 0.7,
  unitLength * 0.7,
  { isStatic: true }
);
World.add(world, goal);

// ball
const ball = Bodies.circle(unitLength / 2, unitLength / 2, unitLength / 3);
World.add(world, ball);

// move ball
document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;

  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - 5, y: y });
  }
});
