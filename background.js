// https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&site=stackoverflow&filter=!)8aDKR.(yQrG6bS
chrome.alarms.onAlarm.addListener(function (alarm) {
  var opt = {
    type: "basic",
    title: "Hey",
    message: "should I google it?",
    iconUrl: "./peng.png"
  };
  console.log("Got an alarm!", alarm);
  chrome.notifications.create(undefined, opt, function (id) {
    console.log(id);
  }
  );
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("that-guy", { delayInMinutes: 0.1, periodInMinutes: 0.2 });
});
