// "Ask an AI" panel. Each assistant opens in a new tab with the prompt in the box already filled in.
// The prompt is plain and editable: it asks the assistant to read these pages and cite them, nothing more.
(function () {
  var ASSISTANTS = [
    ["Claude", "https://claude.ai/new?q="],
    ["ChatGPT", "https://chatgpt.com/?q="],
    ["Perplexity", "https://www.perplexity.ai/search/new?q="],
    ["Grok", "https://grok.com/?q="],
    ["Google AI Mode", "https://www.google.com/search?udm=50&q="],
    ["Copilot", "https://copilot.microsoft.com/?q="],
    ["Le Chat", "https://chat.mistral.ai/chat?q="]
  ];
  document.querySelectorAll("[data-ask]").forEach(function (box) {
    var area = box.querySelector("textarea");
    var row = box.querySelector(".ask-go");
    var chips = box.querySelectorAll(".chip");
    var copy = box.querySelector(".ask-copy");
    var links = ASSISTANTS.map(function (a) {
      var el = document.createElement("a");
      el.className = "btn ghost"; el.target = "_blank"; el.rel = "noopener"; el.textContent = a[0];
      row.appendChild(el); return [el, a[1]];
    });
    function sync() { links.forEach(function (l) { l[0].href = l[1] + encodeURIComponent(area.value.trim()); }); }
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        area.value = chip.dataset.prompt; sync();
      });
    });
    area.addEventListener("input", sync);
    if (copy) copy.addEventListener("click", function () {
      var done = function () { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy the prompt"; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(area.value).then(done, function () { area.select(); });
      else { area.select(); try { document.execCommand("copy"); done(); } catch (e) {} }
    });
    if (!area.value && chips[0]) area.value = chips[0].dataset.prompt;
    sync();
  });
})();
