function isDark() {
  var theme = document.documentElement.dataset.theme;
  if (theme) return theme === 'dark';
  return matchMedia('(prefers-color-scheme:dark)').matches;
}

function setIcon() {
  document.querySelector('.theme-toggle').innerHTML = '<i data-lucide="' + (isDark() ? 'sun' : 'moon') + '"></i>';
  lucide.createIcons();
}

// Restore saved theme preference
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

setIcon();

document.querySelector('.theme-toggle').onclick = function() {
  var newTheme = isDark() ? 'light' : 'dark';
  var systemPreference = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';

  if (newTheme === systemPreference) {
    // Matches system preference, so remove override
    delete document.documentElement.dataset.theme;
    localStorage.removeItem('theme');
  } else {
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  }
  setIcon();
};

// Animate nav menu open/close
(function() {
  var details = document.querySelector('.site-nav details');
  if (!details) return;
  var summary = details.querySelector('summary');

  summary.addEventListener('click', function(e) {
    if (details.open) {
      e.preventDefault();
      details.classList.add('closing');
      details.classList.remove('open');
      details.addEventListener('transitionend', function() {
        details.classList.remove('closing');
        details.open = false;
      }, { once: true });
    } else {
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          details.classList.add('open');
        });
      });
    }
  });
})();

// Render relative timestamps client-side
(function() {
  var units = [
    ["year",   31536000],
    ["month",  2592000],
    ["week",   604800],
    ["day",    86400],
    ["hour",   3600],
    ["minute", 60],
    ["second", 1]
  ];
  var locale = navigator.language;
  var rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  document.querySelectorAll("time[data-relative]").forEach(function(el) {
    var date = new Date(el.getAttribute("datetime"));
    el.title = date.toLocaleString(locale, { dateStyle: "full", timeStyle: "short" });
    var diff = (date - Date.now()) / 1000;
    for (var i = 0; i < units.length; i++) {
      if (Math.abs(diff) >= units[i][1] || i === units.length - 1) {
        el.textContent = rtf.format(Math.round(diff / units[i][1]), units[i][0]);
        break;
      }
    }
  });
})();
