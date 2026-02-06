---
title: Shrinkwrap
---

## Overview

Projects the vertices of one mesh onto the surface of another mesh, allowing the "From" geometry to conform to the shape of the "To" geometry.

---

## Inputs

| Name         | Type     | Description                                                                 |
| :----------- | :------- | :-------------------------------------------------------------------------- |
| Input From   | MeshData | The source mesh whose vertices will be moved.                               |
| Input To     | MeshData | The target mesh that the source mesh will wrap around.                      |
| Offset       | float    | A distance maintained between the projected vertices and the target surface. |
| Max Distance | float    | The maximum distance a vertex can travel to find the target surface.        |
| Direction    | Vector3  | The vector used for projection when **Direction Type** is set to a fixed axis.|

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The deformed mesh conforming to the target geometry. |

---

## Parameters

| Name           | Type             | Default             | Description                                                                           |
| :------------- | :--------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Direction Type | ProjectDirection | ProjectDirection.Normal | Determines the projection method: **Custom / Normal** |

---

## Behavior Notes

- Positive offset values keep the mesh "floating" above the target surface, while negative values push it inside.
- Setting **Max Distance** to 0 typically means an infinite search distance.
- Depending on the **Direction Type**, vertices will either move along their own normals or along the specified Direction vector.

---