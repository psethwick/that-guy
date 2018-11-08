chrome.alarms.onAlarm.addListener(f => {
  fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&site=stackoverflow&filter=!C(o*VkSJu.8H6iV)T")
    .then(r => r.json().then(d => {
      var question = d.items[0].title;
      var body = d.items[0].body;
      var opt = {
        type: "basic",
        title: question,
        message: body,
        iconUrl: "./peng.png"
      };
      chrome.notifications.create(undefined, opt, undefined);
    }));
});
chrome.runtime.onInstalled.addListener(function () {
  chrome.alarms.create("that-guy", { delayInMinutes: 0.1, periodInMinutes: 2 });
});
