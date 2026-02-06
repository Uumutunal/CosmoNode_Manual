---
title: Transform
---

## Overview

Applies standard affine transformations—translation, rotation, and scaling—to an entire mesh.

---

## Inputs

| Name          | Type     | Description                                                                 |
| :------------ | :------- | :-------------------------------------------------------------------------- |
| Input         | MeshData | The source mesh to be transformed.                                          |
| Translation   | Vector3  | The distance to move the mesh along the X, Y, and Z axes.                   |
| Rotation      | Vector3  | The Euler angles (in degrees) to rotate the mesh.                           |
| Scale         | Vector3  | The scaling factor for each individual axis.                                |
| Uniform Scale | float    | A global multiplier that scales all axes equally, compounded with **Scale**. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The mesh data after the transformation has been applied. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Calculations follow the standard matrix order: **Scale** first, then **Rotation**, and finally **Translation** (TRS). 

---