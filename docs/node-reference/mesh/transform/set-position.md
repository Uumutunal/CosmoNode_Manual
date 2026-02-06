---
title: Set Position
---

## Overview

Modifies the vertex positions of a mesh by applying a specific position, a list of positions, or a translation offset.

---

## Inputs

| Name          | Type           | Description                                                                                   |
| :------------ | :------------- | :-------------------------------------------------------------------------------------------- |
| Input         | MeshData       | The source mesh to be modified.                                                               |
| Selection     | int            | An index or mask used to filter which vertices are affected by the operation.                |
| Position List | List\<Vector3\> | A collection of target coordinates.  |
| Offset        | Vector3        | A translation vector added to the current vertex positions.                                   |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The mesh with updated vertex coordinates.             |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---