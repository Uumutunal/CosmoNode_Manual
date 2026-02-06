---
title: Decimate
---

## Overview

Reduces the total number of faces in a mesh while attempting to preserve its overall shape and topology.

---

## Inputs

| Name              | Type     | Description                                           |
| :---------------- | :------- | :---------------------------------------------------- |
| Mesh              | MeshData | The high-poly mesh to be simplified.                  |
| Target Face Count | int      | The desired number of triangles in the resulting mesh. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The simplified version of the input mesh.             |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Because it removes edges and collapses vertices to meet the target count, the mesh's edge flow will be altered.

---