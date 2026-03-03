'use strict';

// Theme switching
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const systemDark = () => matchMedia('(prefers-color-scheme:dark)').matches;
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemDark();

const setDisc = () => {
  toggle.classList.toggle('dark-toggle', isDark());
};

const saved = localStorage.getItem('theme');
if (saved) root.dataset.theme = saved;
setDisc();

toggle.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  if (next === (systemDark() ? 'dark' : 'light')) {
    delete root.dataset.theme;
    localStorage.removeItem('theme');
  } else {
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  }
  setDisc();
});

// Animated details disclosure
const animateDetails = (el) => {
  if (!el) return;
  el.querySelector('summary').addEventListener('click', (e) => {
    if (el.open) {
      e.preventDefault();
      el.classList.replace('open', 'closing');
      el.addEventListener('transitionend', () => {
        el.classList.remove('closing');
        el.open = false;
      }, { once: true });
    } else {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => el.classList.add('open'))
      );
    }
  });
};

animateDetails(document.querySelector('.site-nav details'));
animateDetails(document.querySelector('.revisions'));

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
