/* Apply the saved/system theme before styles load; keep it separate from study progress. */
(function () {
  'use strict';
  const key = 'zhixu.os.review.theme';
  const media = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const valid = value => value === 'dark' || value === 'light' ? value : null;
  let preference = null;
  try { preference = valid(localStorage.getItem(key)); } catch {}
  let current = preference || (media?.matches ? 'dark' : 'light');

  function apply(theme) {
    current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-checked', String(theme === 'dark'));
      toggle.setAttribute('title', theme === 'dark' ? '切换到浅色模式' : '切换到暗色模式');
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111c19' : '#f6f7f3');
  }

  apply(current);
  document.addEventListener('DOMContentLoaded', () => apply(current));
  document.addEventListener('click', event => {
    if (!event.target.closest?.('[data-action="theme-toggle"]')) return;
    preference = current === 'dark' ? 'light' : 'dark';
    apply(preference);
    try { localStorage.setItem(key, preference); } catch {}
  });
  media?.addEventListener?.('change', event => {
    if (!preference) apply(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = valid(event.newValue);
    apply(preference || (media?.matches ? 'dark' : 'light'));
  });
})();
