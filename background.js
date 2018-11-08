chrome.alarms.onAlarm.addListener(f => {
  fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=1&order=desc&sort=creation&site=stackoverflow&filter=!C(o*VkSJu.8H6iV)T")
    .then(r => r.json().then(d => {
      var question = d.items[0].title;
      var body = d.items[0].body.replace("<p>","");
      var opt = {
        type: "basic",
        title: question,
        message: body,
        iconUrl: "./peng.png"
      };
      chrome.notifications.create(undefined, opt, undefined);
    }));
});
chrome.runtime.onInstalled.addListener(f => {
  chrome.alarms.create("that-guy", { delayInMinutes: 15, periodInMinutes: 10 });
});
