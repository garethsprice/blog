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

// Open revisions details on desktop only
var revisions = document.querySelector('.revisions-details');
if (revisions && window.innerWidth >= 768) {
  revisions.open = true;
}
