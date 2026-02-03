---
title: Trim Curve
---

## Overview

Extracts a sub-section of a curve by trimming it between normalized start and end parameters.

---

## Inputs

| Name  | Type  | Description |
|-------|-------|-------------|
| Input | Curve | Curve to be trimmed. |
| Start | float | Normalized start position along the curve (**0–1**). |
| End   | float | Normalized end position along the curve (**0–1**). |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Output | Curve | Trimmed curve segment. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- **Start** and **End** are evaluated in normalized curve space (**0 = beginning, 1 = end**).
- The output curve contains only the portion between **Start** and **End**.
- If **Start ≥ End**, the output curve will be empty.
- Values outside the **[0, 1]** range are clamped.
- Each spline in the curve is trimmed independently.

---
