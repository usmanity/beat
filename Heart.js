function live(previous) {
  let minorVariance = Math.floor(Math.random() * 9) + 1;
  let minimumBeat = parseInt(previous) || 70;
  if (minimumBeat > 85) {
    return minimumBeat - minorVariance;
  } else {
    return minimumBeat + minorVariance;
  }
}
var Heart = {
  beat(req, res) {
    let previous = req.query.previous;
    let heartbeat = live(previous);
    res.send({ heartbeat });
  }
};

module.exports = { Heart };
