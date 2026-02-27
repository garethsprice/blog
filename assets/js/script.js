'use strict';

// Theme switching
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const systemDark = () => matchMedia('(prefers-color-scheme:dark)').matches;
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemDark();

const setIcon = () => {
  toggle.innerHTML = `<i data-lucide="${isDark() ? 'sun' : 'moon'}"></i>`;
  lucide.createIcons();
};

const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;
setIcon();

toggle.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  if (next === (systemDark() ? 'dark' : 'light')) {
    delete root.dataset.theme;
    localStorage.removeItem('theme');
  } else {
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  }
  setIcon();
});

// Nav menu fade animation
{
  const details = document.querySelector('.site-nav details');
  if (details) {
    details.querySelector('summary').addEventListener('click', (e) => {
      if (details.open) {
        e.preventDefault();
        details.classList.replace('open', 'closing');
        details.addEventListener('transitionend', () => {
          details.classList.remove('closing');
          details.open = false;
        }, { once: true });
      } else {
        requestAnimationFrame(() =>
          requestAnimationFrame(() => details.classList.add('open'))
        );
      }
    });
  }
}

// Relative timestamps
{
  const units = [
    ['year',   31536000],
    ['month',  2592000],
    ['week',   604800],
    ['day',    86400],
    ['hour',   3600],
    ['minute', 60],
    ['second', 1],
  ];
  const locale = navigator.language;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  for (const el of document.querySelectorAll('time[data-relative]')) {
    const date = new Date(el.getAttribute('datetime'));
    const diff = (date - Date.now()) / 1000;
    const [unit, secs] = units.find(([, s], i) => Math.abs(diff) >= s || i === units.length - 1);

    el.textContent = rtf.format(Math.round(diff / secs), unit);
    el.title = date.toLocaleString(locale, { dateStyle: 'full', timeStyle: 'short' });
  }
}
