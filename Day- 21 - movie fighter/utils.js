const debounce = (callback) => {
    let timerId;
    return (...args) => {
      if (timerId) clearInterval(timerId);
      timerId = setTimeout(() => {
        callback.apply(null, args);
      }, 1000);
    };
  };