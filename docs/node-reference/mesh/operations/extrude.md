---
title: Extrude
---

## Overview

Extrudes mesh faces outward to create new geometry, adding depth and volume to the input mesh.

---

## Inputs

| Name     | Type     | Description                                           |
| :------- | :------- | :---------------------------------------------------- |
| Mesh     | MeshData | The source mesh to be extruded.                       |
| Distance | float    | The height or length of the extrusion along normals. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The resulting mesh with newly generated side faces.    |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The extrusion follows the surface normals of the selected geometry.

---