---
title: Intersection
---

## Overview

Calculates the intersection between two meshes. This node identifies where the surfaces of two geometric objects meet and generates new geometry based on that contact area.

---

## Inputs

| Name     | Type     | Description                                                                 |
| :------- | :------- | :-------------------------------------------------------------------------- |
| Input 1  | MeshData | The first mesh to test for intersection.                                    |
| Input 2  | MeshData | The second mesh to test for intersection.                                   |
| Segments | bool     | Controls whether the resulting points should be connected to form edges. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The mesh data representing the intersection result.   |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Depending on the internal implementation, this node typically performs a Boolean "And" operation.
- **Segments Toggle**: 
    - When **Segments** is **true**, the node generates lines (edges) along the path where the two meshes cut through each other. 
    - When **Segments** is **false**, the node may only output the raw vertices at the intersection points.

---