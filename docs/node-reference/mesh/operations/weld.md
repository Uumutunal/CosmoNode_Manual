---
title: Weld
---

## Overview

Merges vertices that are within a specific proximity to one another into a single vertex.

---

## Inputs

| Name     | Type     | Description                                                                 |
| :------- | :------- | :-------------------------------------------------------------------------- |
| Mesh     | MeshData | The input mesh containing vertices to be merged.                            |
| Distance | double   | The maximum distance between vertices for them to be considered identical. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The optimized mesh with a reduced vertex count.       |

---

## Parameters

> This node does not expose additional parameters beyond the inputs.

---

## Behavior Notes

- The default distance is extremely small ($1 \times 10^{-7}$), which is ideal for removing overlapping vertices without distorting the shape. 

---