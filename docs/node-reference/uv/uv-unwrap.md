---
title: UV Unwrap
---

## Overview

Automatically generates 2D UV coordinates for a 3D mesh. This node flattens 3D geometry into 2D UV space, attempting to minimize texture distortion and manage seam placement based on geometric features.

---

## Inputs

| Name        | Type     | Description                                                                 |
| :---------- | :------- | :-------------------------------------------------------------------------- |
| Mesh        | MeshData | The 3D geometry that requires UV mapping.                                   |
| Edge Weight | float    | Influences how heavily edge lengths are preserved during the flattening process. |
| Seam Bias   | float    | Adjusts the sensitivity for creating seams. Higher values typically result in more UV islands. |
| Compactness | float    | Controls how tightly the resulting UV islands are packed within the 0-1 UV space. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The mesh data updated with new UV coordinate channels. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Designed for procedural or generated meshes where manual UV authoring is not feasible.
- **Distortion vs. Seams**:
  - Higher **Seam Bias** generally reduces texture stretching at the cost of additional UV islands.
  - Lower **Seam Bias** produces fewer islands but may increase distortion on curved or complex surfaces.
- The **Compactness** setting affects how efficiently UV islands fill the available 0–1 UV space, helping maximize texture resolution.
- Results depend on mesh topology and may vary between different types of geometry.

---