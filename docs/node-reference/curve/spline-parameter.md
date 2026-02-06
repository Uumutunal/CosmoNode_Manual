---
title: Spline Parameter
---

## Overview

Generates a normalized parameter value along each spline of the input curve.

---

## Inputs

| Name  | Type  | Description |
|-------|-------|-------------|
| Input | Curve | Incoming curve used to compute spline parameters. |

---

## Outputs

| Name   | Type        | Description |
|--------|-------------|-------------|
| Output | `List<float>` | Normalized parameter values for each point along the curve. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The output values are normalized in the range **[0, 1]** for each individual spline.
- Parameter values increase along the order of points within each spline.
- Each spline is evaluated independently; parameter values reset for each separate path.
- If a spline contains a single point, its parameter value is **0**.

---
