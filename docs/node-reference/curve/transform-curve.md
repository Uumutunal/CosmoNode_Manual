---
title: Transform Curve
---

## Overview

Applies translation, rotation, and scaling transformations to an input curve.

---

## Inputs

| Name          | Type    | Description |
|---------------|---------|-------------|
| Input         | Curve   | Curve to be transformed. |
| Translation   | Vector3 | Positional offset applied to all points of the curve. |
| Rotation      | Vector3 | Euler rotation (in degrees) applied to the curve. |
| Scale         | Vector3 | Per-axis scale applied to the curve. |
| Uniform Scale | float   | Scalar multiplier applied on top of the scale. |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Output | Curve | Transformed curve. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Transformations are applied uniformly to all points of the curve.
- Rotation uses Unity-style Euler angles.

---
