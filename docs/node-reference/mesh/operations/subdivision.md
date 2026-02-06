---
title: Subdivision
---

## Overview

Increases the resolution of a mesh by dividing each face into smaller polygons.

---

## Inputs

| Name              | Type     | Description                                                                 |
| :---------------- | :------- | :-------------------------------------------------------------------------- |
| Mesh              | MeshData | The source mesh to be subdivided.                                           |
| Subdivision Level | int      | The number of times the subdivision process is applied.                     |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The high-resolution mesh resulting from the operation. |

---

## Parameters

| Name               | Type | Default | Description                                                                                                   |
| :----------------- | :--- | :------ | :------------------------------------------------------------------------------------------------------------ |
| Simple Subdivision | bool | false   | If **true**, only increases vertex count without smoothing. If **false**, applies Catmull-Clark style smoothing. |

---

## Behavior Notes

- Each level of subdivision significantly increases the vertex and face count. Using high levels on complex meshes may impact performance.
- **Simple vs. Smooth**: 
    - **Simple** subdivision is ideal for adding geometric density while maintaining the exact original shape.
    - **Smooth** subdivision (when `simpleSubdivision` is false) creates organic, rounded surfaces by interpolating vertex positions.

---