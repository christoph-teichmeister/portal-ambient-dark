// ==UserScript==
// @name         Portal: Ambient Dark
// @namespace    https://beyonder.de/
// @version      2026.10.3
// @description  Forces dark mode on the Portal and keeps its own dark greys and uses the Ambient brand colours: turquoise primary, red accent.
// @match        https://portal.beyonder.de/*
// @match        https://portal-test.beyonder.de/*
// @author       christoph-teichmeister
// @icon         https://raw.githubusercontent.com/christoph-teichmeister/portal-ambient-dark/refs/heads/main/icon.svg
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/christoph-teichmeister/portal-ambient-dark/refs/heads/main/portal-ambient-dark.user.js
// @downloadURL  https://raw.githubusercontent.com/christoph-teichmeister/portal-ambient-dark/refs/heads/main/portal-ambient-dark.user.js
// ==/UserScript==

(() => {
  "use strict";

  const css = `
    html:root[data-theme] {
      color-scheme: dark;

      /* Primary: Ambient turquoise, dark text on it */
      --color-brand-minimal: #33312e;
      --color-brand-lightest: #203331;
      --color-brand-lighter: #c4eee9;
      --color-brand-light: #2d4e4a;
      --color-brand: #a5e4dd;
      --color-brand-dark: #c4eee9;
      --color-brand-darkest: #2d4e4a;
      --color-brand-contrast: #e3f7f4;
      --color-brand-invert: #f8f5ef;
      --color-text-icon-brand: #a5e4dd;

      --color-info-lightest: #203331;
      --color-info-lighter: #c4eee9;
      --color-info-light: #2d4e4a;
      --color-info: #a5e4dd;
      --color-info-dark: #c4eee9;
      --color-info-darker: #e3f7f4;
      --color-info-darkest: #f8f5ef;

      /* Accent: Ambient red */
      --color-accent-minimal: #ff7b7b;
      --color-accent-light: #ff6b6b;
      --color-accent: #ff5959;

      /* 40% less round than the portal's own radii (pills measured at ~40px height) */
      --radius-full: 0.75rem;
      --radius-large: 1.2rem;
      --radius-medium: 0.3rem;
      --radius-lg: 0.3rem;
      --radius-xl: 0.45rem;
      --radius-2xl: 0.6rem;
      --radius-3xl: 0.9rem;
    }
  `;

  const root = document.documentElement;
  const forceDark = () => {
    if (root.dataset.theme !== "dark") root.dataset.theme = "dark";
  };
  forceDark();
  new MutationObserver(forceDark).observe(root, { attributes: true, attributeFilter: ["data-theme"] });

  const style = document.createElement("style");
  style.id = "portal-ambient-dark";
  style.textContent = css;
  (document.head || root).appendChild(style);
})();
