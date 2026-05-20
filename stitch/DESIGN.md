---
name: SurfaceGate Desk
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  sidebar-width: 240px
  topbar-height: 56px
  gutter: 16px
  margin-desktop: 24px
  cell-padding-v: 8px
  cell-padding-h: 12px
---

## Brand & Style
The design system is engineered for high-performance operational environments where cognitive load reduction and data clarity are paramount. The brand personality is calm, precise, and utilitarian, positioning the interface as a reliable tool rather than a marketing surface. 

The visual style leans heavily into **Minimalism** and **Corporate Modernism**. It prioritizes a "content-first" hierarchy, using generous whitespace only where it serves legibility and using tight structural alignment to organize dense information. The aesthetic avoids all unnecessary ornamentation—such as heavy gradients or decorative blurs—to ensure the user's focus remains entirely on ticket management, SLA monitoring, and resolution workflows.

## Colors
The palette is centered around "Service Blue," a professional and trustworthy primary hue that signals action and interactivity. This is balanced by a sophisticated "Neutral Gray" scale used for structural elements, borders, and secondary text.

*   **Primary (Service Blue):** Used for primary actions, active navigation states, and focus indicators.
*   **Secondary/Neutral (Slate):** Used for typography and iconography to maintain a grounded, calm atmosphere.
*   **Status Colors:** These are functionally distinct and high-contrast to ensure SLA breaches and urgent tickets are immediately scannable. 
    *   **Success Green:** Resolved states and met SLAs.
    *   **Warning Orange:** Approaching SLA limits or pending vendor feedback.
    *   **Danger Red:** Breached SLAs, critical priority, or system errors.

The default mode is **Light**, utilizing a tiered grayscale background system (#FFFFFF for cards, #F8FAFC for the main workspace, and #F1F5F9 for the sidebar) to create subtle depth without relying on shadows.

## Typography
This design system utilizes **Inter** for all roles due to its exceptional legibility at small sizes and its neutral, systematic character. 

The type scale is intentionally tight to facilitate high data density. Headlines are restrained, capping at 20px to allow more room for data tables and ticket lists. 
- **Body-sm (13px):** This is the workhorse size for data grid cells and secondary meta-data.
- **Label-md (12px):** Used for column headers and section titles, utilizing uppercase and increased letter spacing to distinguish from interactive data.
- **Mobile adjustments:** Given the desktop-first nature of the application, typography remains consistent across breakpoints, with only minor padding adjustments rather than font-size scaling.

## Layout & Spacing
The layout follows a **Fixed Grid** logic for the primary structural pillars, ensuring a predictable workspace for power users.

*   **Side Navigation:** Fixed at 240px. This houses the primary application sections (Queues, Analytics, Customers, Settings). It uses a collapsed state (64px) for advanced users who prioritize screen real estate.
*   **Top Bar:** A 56px persistent bar for global search, notifications, and profile.
*   **Workspace:** A 12-column fluid system within the main content area, with 16px gutters and 24px outer margins. 
*   **Density:** A 4px base unit controls all spacing. For high-density views, vertical padding is minimized (8px) while horizontal padding remains slightly wider (12px) to guide the eye across table rows.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than shadows. This approach maintains the "flat" professional look of a browser-based tool and avoids visual "fuzziness" in data-heavy views.

- **Level 0 (Background):** #F1F5F9 - Used for the application backdrop and sidebar.
- **Level 1 (Surface):** #FFFFFF - Used for the main content area, cards, and data table containers.
- **Borders:** All surfaces are defined by a 1px solid border (#E2E8F0). 
- **Active State:** A subtle "Elevation-like" effect is achieved for active cards or rows using a 2px left-border accent in Primary Blue, rather than an offset shadow.

## Shapes
The design system uses a **Soft (Level 1)** shape language. A 4px corner radius (0.25rem) is applied to all buttons, input fields, and cards.

This subtle rounding provides a modern touch that prevents the UI from feeling "dated" or overly aggressive (like sharp corners), while still maintaining the architectural rigidity required for a professional service desk. Status badges use a slightly higher radius (rounded-lg) to distinguish them as discrete, pill-like objects within a row.

## Components

### Buttons
- **Primary:** Solid Blue with white text. Height: 32px (Compact) or 40px (Standard).
- **Secondary:** White background with #E2E8F0 border and #475569 text.
- **Ghost:** No border or background unless hovered. Used for row-level actions to reduce visual noise.

### Data Tables
- **Rows:** 40px minimum height. On hover, the background shifts to #F8FAFC.
- **Headers:** Sticky positioning with #F1F5F9 background and a distinct 1px bottom border.
- **Cells:** Use `body-sm` for content.

### Status Badges
- **Style:** Light tinted background (10% opacity of the status color) with high-contrast text.
- **Priority:** High Priority (Red) uses a solid background to ensure it breaks the visual rhythm and demands immediate attention.

### Input Fields
- **Default:** 1px border (#CBD5E1). Inset 8px padding.
- **Validation:** Clear 1px borders in Danger Red or Success Green with 12px helper text positioned immediately below the field.

### Metric Cards
- **Structure:** Flat cards with a 1px border. The "Value" uses `headline-lg` in Primary Blue, and the "Label" uses `label-md` in Gray. No shadows are permitted on metric cards to ensure they feel part of the dashboard surface.