---
title: Cube
---

## Overview

Generates a 3D box primitive with adjustable dimensions, orientation, and edge resolution.

---

## Inputs

| Name           | Type    | Description                                                                 |
| :------------- | :------ | :-------------------------------------------------------------------------- |
| Origin         | Vector3 | The center point of the cube in 3D space.                                   |
| Rotation       | Vector3 | The Euler angles (in degrees) for the cube's orientation.                   |
| Scale          | Vector3 | The dimensions of the cube along the X, Y, and Z axes.                      |
| Resolution X/Y/Z | int     | The number of subdivisions on each face. Increasing this adds more vertices. |
| Uniform Scale  | float   | A global multiplier applied to the overall size of the cube.                |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The generated cube mesh.    |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---