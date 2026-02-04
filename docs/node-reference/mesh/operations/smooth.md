---
title: Smooth
---

## Overview

Applies a smoothing algorithm to the mesh, reducing sharp edges and noise by averaging vertex positions with their neighbors.

---

## Inputs

| Name      | Type     | Description                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------- |
| Mesh      | MeshData | The source mesh to be smoothed.                                             |
| Iteration | int      | The number of times the smoothing pass is repeated.                         |
| Lambda    | double   | The weight of the smoothing effect per iteration (typically between 0 and 1). |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The resulting mesh with smoothed vertex positions.     |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- High **Iteration** or **Lambda** values can cause the mesh to shrink, as vertices are pulled toward the average center of their neighbors.

---