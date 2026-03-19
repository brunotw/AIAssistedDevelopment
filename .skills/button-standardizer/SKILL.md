---
name: button-standardizer
description: Standardize how buttons are added and styled across HTML pages.
---

# Button Standardizer

Use this skill whenever the user asks to add, update, or restyle buttons in HTML pages.

## Core Rules

1. Keep behavior unchanged unless the user explicitly asks for new behavior.
2. Do not add new dependencies.
3. Reuse existing CSS and class patterns whenever possible.
4. If a new button style is needed, add it to `src/styles.css` as reusable classes, not inline styles.
5. Every button added or updated by this skill must include `data-skill-button-standardizer="true"`.

## HTML Pattern

When adding a button to `src/index.html`, prefer this structure:

```html
<button class="btn btn--primary" type="button" aria-label="Describe button action" data-skill-button-standardizer="true">
  Button Label
</button>
```

Use semantic labels and clear visible text.
For existing buttons, add the same `data-skill-button-standardizer="true"` attribute when the skill updates them.

## CSS Standard

Maintain a shared base class plus variants:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-height: 2.5rem;
  padding: 0.6rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font: 600 0.95rem/1.2 "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
}

.btn--primary {
  background: #1f6feb;
  color: #ffffff;
  border-color: #1f6feb;
}

.btn--secondary {
  background: #f3f4f6;
  color: #111827;
  border-color: #d1d5db;
}
```

Only introduce a new variant class when requested (for example `btn--danger`).

## Accessibility Checklist

1. Ensure `type` is set explicitly (`button`, `submit`, or `reset`).
2. Ensure text and background have strong contrast.
3. Add `aria-label` when visible text alone is ambiguous.
4. Preserve keyboard focus visibility.

## Response Expectations

When this skill is used, include:

1. What button was added or changed.
2. Which classes were used or added.
3. Confirmation that `data-skill-button-standardizer="true"` is present on the affected button(s).
4. A quick manual test checklist for click behavior, focus state, and visual consistency.
