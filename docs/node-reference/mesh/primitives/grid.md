---
title: Grid
---

## Overview

Generates a flat, rectangular mesh surface (plane) mesh.

---

## Inputs

| Name           | Type    | Description                                                                 |
| :------------- | :------ | :-------------------------------------------------------------------------- |
| Origin         | Vector3 | The center position of the grid in 3D space.                                |
| Rotation       | Vector3 | The Euler angles (in degrees) used to orient the grid.                      |
| Scale          | Vector3 | The width (X) and length (Z) of the grid.                                   |
| Resolution X   | int      | The number of subdivisions along the X-axis.                                |
| Resolution Z   | int      | The number of subdivisions along the Z-axis.                                |
| Uniform Scale  | float   | A global multiplier applied to the overall size of the grid.                |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The generated grid/plane mesh data.                   |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- **Orientation**: While a standard "Plane" is often flat on the XZ plane, the **Rotation** input allows you to easily create vertical walls or angled slopes.

---