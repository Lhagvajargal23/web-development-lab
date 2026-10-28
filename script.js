(function () {
  'use strict';

  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var flipAllBtn = document.getElementById('flip-all');
  var cards = document.querySelectorAll('.card');

  /* ===== Theme (dark mode) ===== */
  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* хэрэгүй */ }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark';
    themeBtn.setAttribute('aria-pressed', String(isDark));
    themeBtn.textContent = isDark ? 'Цайвар горим' : 'Харанхуй горим';
  }

  var saved = safeGet('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    safeSet('theme', next);
  });

  /* ===== Flip cards ===== */
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
    });
  });

  flipAllBtn.addEventListener('click', function () {
    var flip = flipAllBtn.getAttribute('aria-pressed') !== 'true';
    flipAllBtn.setAttribute('aria-pressed', String(flip));
    flipAllBtn.textContent = flip ? 'Бүх картыг буцаах' : 'Бүх карт эргүүлэх';
    cards.forEach(function (card) {
      card.classList.toggle('is-flipped', flip);
      card.setAttribute('aria-pressed', String(flip));
    });
  });
})();