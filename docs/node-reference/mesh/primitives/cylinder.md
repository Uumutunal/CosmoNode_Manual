---
title: Cylinder
---

## Overview

Generates a cylindrical primitive.

---

## Inputs

| Name          | Type    | Description                                                                 |
| :------------ | :------ | :-------------------------------------------------------------------------- |
| Origin        | Vector3 | The center point of the cylinder.                                           |
| Rotation      | Vector3 | The Euler angles for the cylinder's orientation.                            |
| Scale         | Vector3 | Scaling along X, Y, and Z. Adjusting X/Z changes the radius/elliptical shape. |
| Rows          | int     | The number of vertical segments along the height of the cylinder.           |
| Columns       | int     | The number of radial segments. Higher values create a smoother cylinder.    |
| Uniform Scale | float   | A global multiplier applied to the final mesh size.                         |
| Fill Caps     | bool    | If true, generates circular faces to close the top and bottom of the cylinder. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The generated cylinder mesh data.                     |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---