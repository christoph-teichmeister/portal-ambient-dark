# Portal Ambient Dark

Tampermonkey script for the Portal (`portal.beyonder.de`, `portal-test.beyonder.de`): always dark mode, the old Ambient
palette (cool greys, red accent `#ff5959`, slate blue primary `#8a9bd0`) and corners 40% less round.

## Install

Open the raw URL in the browser with Tampermonkey installed and confirm "Install":

```text
https://raw.githubusercontent.com/christoph-teichmeister/portal-ambient-dark/refs/heads/main/portal-ambient-dark.user.js
```

`@updateURL`/`@downloadURL` point to the same file, so Tampermonkey picks up new versions on its own.
Bump `@version` with every change, otherwise Tampermonkey does not update.
