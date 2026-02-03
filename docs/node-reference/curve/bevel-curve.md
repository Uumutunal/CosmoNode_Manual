---
title: Bevel Curve
---

## Overview

Applies a bevel to the input curve.

---

## Inputs

| Name        | Type  | Description |
|-------------|-------|-------------|
| Input Curve | Curve | Incoming curve to bevel. |
| Radius      | float | Radius of the bevel. |
| Count       | int   | Number of segments used for the bevel. |

---

## Outputs

| Name         | Type  | Description |
|--------------|-------|-------------|
| Output Curve | Curve | Beveled curve. |

---

## Parameters

> This node does not expose additional parameters beyond its inputs.

---

## Behavior Notes

- Higher **Count** values produce smoother bevels at the cost of additional geometry.
- A **Radius** value of zero results in no visible bevel.

---
