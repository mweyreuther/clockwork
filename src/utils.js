function sleep(duration = 0) {
  return new Promise((resolve, reject) => {
    // if (!duration) resolve(true);
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
}

export { sleep };
