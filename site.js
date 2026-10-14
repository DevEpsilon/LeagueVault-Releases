'use strict';
// Tour: the sidebar works like the app's own navigation and swaps the screenshot.
const tabs = [...document.querySelectorAll('.tour-nav [role="tab"]')];
const panel = document.getElementById('panel');
const img = document.getElementById('tour-img');
const title = document.getElementById('tour-title-text');
const text = document.getElementById('tour-text');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Warm the cache so switching pages doesn't flash
tabs.forEach(tab => { new Image().src = `assets/shots/${tab.dataset.shot}.webp`; });

function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  title.textContent = tab.dataset.title;
  text.textContent = tab.dataset.text;
  const src = `assets/shots/${tab.dataset.shot}.webp`;
  if (reduceMotion) { img.src = src; return; }
  img.classList.add('swapping');
  setTimeout(() => { img.src = src; img.decode().catch(() => {}).finally(() => img.classList.remove('swapping')); }, 180);
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => select(tab));
  tab.addEventListener('keydown', e => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (e.key in keys) next = (i + keys[e.key] + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    tabs[next].focus();
    select(tabs[next]);
  });
});
