// https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&site=stackoverflow&filter=!)8aDKR.(yQrG6bS
chrome.alarms.onAlarm.addListener(f => {
  fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=1&order=desc&sort=creation&site=stackoverflow&filter=!)8aDKR.(yQrG6bS")
    .then(r => r.json().then(d => {
      var q = d.items[0].title;
      console.log(q);
      var opt = {
        type: "basic",
        title: "Hey",
        message: q,
        iconUrl: "./peng.png"
      };
      chrome.notifications.create(undefined, opt, function (id) {
        console.log(id);
      }
      );
    }));
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("that-guy", { delayInMinutes: 0.1, periodInMinutes: 2 });
});
