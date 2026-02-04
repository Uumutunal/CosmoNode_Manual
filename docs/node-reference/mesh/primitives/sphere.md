---
title: Sphere
---

## Overview

Generates a UV sphere primitive composed of horizontal rings and vertical segments.

---

## Inputs

| Name          | Type    | Description                                                                 |
| :------------ | :------ | :-------------------------------------------------------------------------- |
| Origin        | Vector3 | The center point of the sphere in 3D space.                                 |
| Rotation      | Vector3 | The Euler angles (in degrees) for the sphere's orientation.                 |
| Scale         | Vector3 | Scaling along X, Y, and Z. Adjusting these creates an ellipsoid shape.      |
| Rows          | int     | The number of horizontal rings. Defines the vertical resolution.            |
| Columns       | int     | The number of vertical segments. Defines the radial smoothness.             |
| Uniform Scale | float   | A global multiplier applied to the final radius of the sphere.              |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The generated sphere mesh data.          |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---