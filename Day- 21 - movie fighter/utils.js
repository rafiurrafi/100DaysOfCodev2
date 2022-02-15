function debounce(callback, delay = 1000) {
  let timerId;
  return function (...args) {
    if (timerId) clearInterval(timerId);
    timerId = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
}
