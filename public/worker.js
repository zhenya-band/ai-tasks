onmessage = function(e) {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  postMessage(t);
}; 