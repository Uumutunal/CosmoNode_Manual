---
title: Map Range
---

## Overview

Remaps a value from one numerical range into another.

---

## Inputs

| Name     | Type  | Description |
|----------|-------|-------------|
| Value    | float | Input value to be remapped. |
| From Min | float | Lower bound of the input range. |
| From Max | float | Upper bound of the input range. |
| To Min   | float | Lower bound of the target range. |
| To Max   | float | Upper bound of the target range. |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Result | `List<float>` | The remapped value in the target range. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The node linearly maps **Value** from the range **[From Min, From Max]** into **[To Min, To Max]**.
- Values outside the input range are extrapolated accordingly.

---
