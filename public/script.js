var host = location.host;
function getHeartbeat() {
  let root = document.documentElement;
  let beat = root.style.getPropertyValue("--beat");
  fetch(`http://${host}/heartbeat?previous=${beat}`)
    .then(response => response.json())
    .then(data => {
      let root = document.documentElement;
      console.log(data.heartbeat);
      let newBeat = 60 / data.heartbeat + "s";
      root.style.setProperty("--heartbeat", newBeat);
    });
}
$(document).ready(function() {
  setInterval(getHeartbeat, 3000);
});
