---
title: Circle
---

## Overview

Generates a circular or arc-shaped mesh primitive consisting of vertices and edges arranged in a ring.

---

## Inputs

| Name       | Type    | Description                                                                 |
| :--------- | :------ | :-------------------------------------------------------------------------- |
| Radius     | float   | The radius of the circle.                         |
| Divisions  | int     | The number of segments used to form the circle. Higher values create a smoother curve. |
| Arc Angles | Vector2 | The start and end angles (in degrees) for the circle. (e.g., 0 to 180 for a semi-circle). |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The generated circular or arc-based mesh data.        |

---

## Parameters

| Name      | Type     | Default | Description                                                                 |
| :-------- | :------- | :------ | :-------------------------------------------------------------------------- |
| Plane     | Planes   | XZ      | The 3D orientation of the circle (e.g., **XY, XZ,** or **YZ**).             |
| Arc Types | ArcTypes | ArcTypes.Closed       | Determines how the arc is closed or filled (e.g., **Closed, OpenArc,** or **ClosedArc**). |

---

## Behavior Notes

- **Angle Range**: The **Arc Angles** input uses a Vector2 as a range $(x = start, y = end)$, allowing for partial circles or spirals if combined with other transformations.

---