---
title: Set Material
---

## Overview

Assigns a material to a mesh or a selected subset of its elements.

---

## Inputs

| Name       | Type     | Description |
|------------|----------|-------------|
| Input      | MeshData | Incoming mesh data. |
| Selection  | int      | Face index defining which elements of the mesh will receive the material. |
| Material   | Material | The material to assign to the selected elements. |

---

## Outputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Output | MeshData | The mesh with the material applied. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- If the selection is 1, the material is applied to the entire mesh.
- The selection input can be a list of int, in that case it will act as a mask.
- Materials are assigned per element according to the mesh’s material system.

---
