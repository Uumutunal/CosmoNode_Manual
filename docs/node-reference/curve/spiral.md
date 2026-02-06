---
title: Spiral
---

## Overview

Generates a spiral-shaped curve.

---

## Inputs

| Name              | Type  | Description |
|-------------------|-------|-------------|
| Height            | float | Total height of the spiral. |
| Turns             | float | Number of turns in the spiral. |
| Start Radius      | float | Radius of the spiral at the start. |
| Increase Per Turn | float | Amount the radius increases for each turn. |
| Radius Scale      | float | Scale factor applied to the spiral radius. |
| Resolution        | float | Number of segments per turn used to generate the curve. |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Output | Curve | Generated spiral curve. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Higher **Resolution** values produce smoother spirals at the cost of additional points.
- **Increase Per Turn** controls how quickly the spiral expands outward.
- **Radius Scale** can be used to globally scale the spiral’s radius.

---
