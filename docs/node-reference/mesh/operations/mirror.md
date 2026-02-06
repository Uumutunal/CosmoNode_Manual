---
title: Mirror
---

## Overview

Creates a reflected copy of a mesh across a virtual plane defined by an origin and a direction.

---

## Inputs

| Name          | Type     | Description                                                                 |
| :------------ | :------- | :-------------------------------------------------------------------------- |
| Input         | MeshData | The source mesh to be mirrored.                                             |
| Origin        | Vector3  | The center point of the mirror plane.                                       |
| Direction     | Vector3  | The normal vector of the mirror plane (determines the axis of reflection).  |
| Distance      | float    | An offset to move the mirror plane along its direction.          |
| Keep Original | bool     | If true, the output includes both the original mesh and the reflected copy. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The resulting mesh (mirrored version or combined).    |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- **Plane Definition**: The mirror plane is always perpendicular to the **Direction** vector, passing through the **Origin** (plus the **Distance** offset).

---