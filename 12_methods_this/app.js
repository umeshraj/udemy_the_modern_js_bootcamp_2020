// Shorthand

const getStats = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { min, max };
};

const res = getStats([1, 2, 3]);
console.log(res);
