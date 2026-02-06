---
title: Delete
---

## Overview

Removes vertices from a mesh based on a provided index or selection list.

---

## Inputs

| Name             | Type     | Description                                                                 |
| :--------------- | :------- | :-------------------------------------------------------------------------- |
| Input            | MeshData | The mesh from which elements will be removed.                               |
| Selection        | int      | Vertex index value used to identify which parts of the mesh to delete. |
| Invert Selection | bool     | If true, deletes everything *except* the provided selection.                |

---

## Outputs

| Name   | Type     | Description                                         |
| :----- | :------- | :-------------------------------------------------- |
| Output | MeshData | The resulting mesh after the deletion has occurred. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---