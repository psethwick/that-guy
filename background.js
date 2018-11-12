chrome.alarms.onAlarm.addListener(f => {
  fetch("https://api.stackexchange.com/2.2/questions?page=1&pagesize=1&order=desc&sort=creation&site=stackoverflow&filter=!C(o*VkSJu.8H6iV)T")
    .then(r => r.json().then(d => {
      const body = d.items[0].body;
      const div = document.createElement("div");
      div.innerHTML = body;
      const text = div.innerText || "";
      chrome.tts.speak(text);
    }));
});
chrome.runtime.onInstalled.addListener(f => {
  chrome.alarms.create("that-guy", { delayInMinutes: 30, periodInMinutes: 15 });
});
