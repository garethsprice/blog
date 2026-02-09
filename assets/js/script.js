function isDark() {
  return document.documentElement.style.colorScheme === 'dark' ||
    (!document.documentElement.style.colorScheme && matchMedia('(prefers-color-scheme:dark)').matches);
}

function setIcon() {
  document.querySelector('.theme-toggle').innerHTML = '<i data-lucide="' + (isDark() ? 'sun' : 'moon') + '"></i>';
  lucide.createIcons();
}

setIcon();

document.querySelector('.theme-toggle').onclick = function() {
  document.documentElement.style.colorScheme = isDark() ? 'light' : 'dark';
  localStorage.setItem('theme', document.documentElement.style.colorScheme);
  setIcon();
};
