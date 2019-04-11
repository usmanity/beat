var host = location.host;
var protocol = location.protocol;

function getHeartbeat() {
  let root = document.documentElement;
  let beat = root.style.getPropertyValue("--beat");
  let url = `//${host}/heartbeat?previous=${beat}`;
  fetch(url)
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
