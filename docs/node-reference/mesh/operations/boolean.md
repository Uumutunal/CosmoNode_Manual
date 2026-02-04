---
title: Boolean
---

## Overview

Combines or subtracts two meshes using constructive solid geometry (CSG) operations to create complex shapes.

---

## Inputs

| Name   | Type     | Description                                 |
| :----- | :------- | :------------------------------------------ |
| Mesh A | MeshData | The primary mesh (base geometry).           |
| Mesh B | MeshData | The secondary mesh (operating geometry).    |

---

## Outputs

| Name   | Type     | Description                                 |
| :----- | :------- | :------------------------------------------ |
| Output | MeshData | The resulting mesh after the boolean logic. |

---

## Parameters

| Name      | Type      | Default          | Description                                                                        |
| :-------- | :-------- | :--------------- | :--------------------------------------------------------------------------------- |
| Operation | BooleanOp | BooleanOp.Union | The logic to apply: **Union / Difference / Intersection**. |

---

## Behavior Notes

- **Union**: Merges both meshes into a single manifold volume, removing internal faces.
- **Difference**: Subtracts the volume of **Mesh B** from **Mesh A**.
- **Intersection**: Keeps only the volume where **Mesh A** and **Mesh B** overlap.
- For the best results, ensure that both input meshes are "water-tight" (manifold) and have no holes.

---