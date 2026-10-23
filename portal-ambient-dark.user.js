// ==UserScript==
// @name         Portal: Ambient Dark
// @namespace    https://beyonder.de/
// @version      2026.10.2
// @description  Forces dark mode on the Portal and swaps the palette for the old Ambient greys, red accent and slate blue primary.
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

      /* Primary: slate blue, dark text on it */
      --color-brand-minimal: #25252c;
      --color-brand-lightest: #2c2f3d;
      --color-brand-lighter: #a3b1dc;
      --color-brand-light: #3d4b71;
      --color-brand: #8a9bd0;
      --color-brand-dark: #a3b1dc;
      --color-brand-darkest: #3d4b71;
      --color-brand-contrast: #dde3f3;
      --color-brand-invert: #f4f4f4;
      --color-text-icon-brand: #a3b1dc;

      --color-info-lightest: #2c2f3d;
      --color-info-lighter: #a3b1dc;
      --color-info-light: #3d4b71;
      --color-info: #8a9bd0;
      --color-info-dark: #a3b1dc;
      --color-info-darker: #dde3f3;
      --color-info-darkest: #f4f4f4;

      /* Ambient greys */
      --color-background: #25252c;
      --color-neutral-invert: #2e2e35;
      --color-neutral-lightest: #39393f;
      --color-neutral-lighter: #4e4e53;
      --color-neutral-disable: #636368;
      --color-neutral-light: #a1a1a3;
      --color-neutral: #cacacc;
      --color-neutral-dark: #d9d9dd;
      --color-neutral-darkest: #f4f4f4;
      --color-modal-overview-contrast: rgba(244, 244, 244, 0.25);
      --color-logo: #d9d9dd;

      /* Accent: Ambient red */
      --color-accent-minimal: #ff7b7b;
      --color-accent-light: #ff6b6b;
      --color-accent: #ff5959;

      --color-form-default: #39393f;
      --color-form-hover: #2c2f3d;
      --color-form-hover-contrast: #a3b1dc;
      --color-form-disabled: #4e4e53;

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
