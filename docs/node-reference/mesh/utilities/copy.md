---
title: Copy
---

## Overview

Creates multiple duplicates of an input mesh, applying incremental transformations to each successive copy.

---

## Inputs

| Name         | Type     | Description                                                                 |
| :----------- | :------- | :-------------------------------------------------------------------------- |
| Input        | MeshData | The source mesh to be duplicated.                                           |
| Total Number | int      | The number of copies to generate.                                           |
| Translation  | Vector3  | The incremental movement applied to each subsequent copy.                   |
| Rotation     | Vector3  | The incremental Euler rotation applied to each subsequent copy.             |
| Scale        | Vector3  | The incremental scale multiplier applied to each subsequent copy.           |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | A single mesh containing all generated copies merged together. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- **Incremental Stacking**: Transformations are cumulative. For example, if **Translation** is set to $(0, 1, 0)$, the first copy moves $1$ unit up, the second $2$ units, the third $3$ units, and so on.
- **Spiral & Arrays**: By combining small rotation increments with translation, you can easily create complex structures like spiral staircases or circular arrays.
- **Merging**: The output is automatically treated as a single `MeshData` object, similar to passing multiple items through a **Merge** node.

---