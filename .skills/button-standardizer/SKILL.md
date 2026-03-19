---
name: button-standardizer
description: Standardize how buttons are added and styled across HTML pages.
---

# Button Standardizer

## Mandatory Rule: Skill Marker Comment

Whenever this skill applies edits to an HTML file with a button change, include a skill marker comment adjacent to the affected button block.

Required comment format:

```html
<!-- This button was updated by the skill: button-standardizer on YYYY-MM-DD HH:mm -->
```

Use the current date and time in 24-hour format.
If a marker already exists for the same button block, replace it instead of duplicating comments.

## HTML Pattern

When adding a button to any HTML file, prefer this structure:

```html
<button class="btn btn--primary" type="button" aria-label="Describe button action" data-skill-button-standardizer="true">
  Button Label
</button>
```

For existing or new buttons, ensure `data-skill-button-standardizer="true"` is present on the affected `<button>` element.