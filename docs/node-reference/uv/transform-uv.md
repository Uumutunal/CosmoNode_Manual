---
title: Transform UV
---

## Overview

Applies translation, rotation, and scaling transformations to the UV coordinates of a mesh. This node allows UV layouts to be repositioned, rotated, and resized without modifying the underlying 3D geometry.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Input | GeometryData | The geometry whose UV coordinates will be transformed. |
| Translation | Vector3 | Moves the UV coordinates along the U and V axes. The Z component has no effect on standard 2D UV coordinates. |
| Rotation | Vector3 | Rotates the UV coordinates. The Z component controls rotation within the UV plane; X and Y typically have no effect on standard 2D UV coordinates. |
| Scale | Vector3 | Scales the UV coordinates independently along the U and V axes. The Z component has no effect on standard 2D UV coordinates. |
| Uniform Scale | float | Applies an additional uniform scaling factor to the UV coordinates. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | GeometryData | The geometry with transformed UV coordinates. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The node preserves the existing UV layout structure and only modifies its coordinate values.