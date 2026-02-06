---
title: Bounding Box
---

## Overview

Calculates the axis-aligned bounding box (AABB) of a mesh and generates a cube that perfectly encapsulates the geometry.

---

## Inputs

| Name     | Type     | Description                                  |
| :------- | :------- | :------------------------------------------- |
| Geometry | MeshData | The mesh to analyze for bounding dimensions. |

---

## Outputs

| Name   | Type     | Description                                               |
| :----- | :------- | :-------------------------------------------------------- |
| Output | MeshData | A cube mesh representing the volume of the bounding box. |
| Min    | Vector3  | The minimum corner coordinates (bottom-left-back).        |
| Max    | Vector3  | The maximum corner coordinates (top-right-front).         |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---