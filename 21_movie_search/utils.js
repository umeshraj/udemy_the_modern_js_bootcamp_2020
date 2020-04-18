const debounce = (func, delay = 1000) => {
  // debounce decides how often func can be invoked
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // func(arg);
      func.apply(null, args);
    }, delay);
  };
};
