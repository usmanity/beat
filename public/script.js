var host = location.host;
var seconds = 10;
var updateInterval = seconds * 1000;

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
  console.log(`New heartbeat will be fetched every ${seconds}.`);
  setInterval(getHeartbeat, updateInterval);
});
