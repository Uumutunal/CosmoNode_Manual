---
title: Calculate Tangents
---

## Overview

Computes the tangent vectors for each vertex in the mesh. These are output as a list of quaternions representing the local orientation of the surface at each point.

---

## Inputs

| Name  | Type     | Description                                           |
| :---- | :------- | :---------------------------------------------------- |
| Input | MeshData | The source mesh used to calculate surface orientation. |

---

## Outputs

| Name   | Type              | Description                                                                     |
| :----- | :---------------- | :------------------------------------------------------------------------------ |
| Output | `List<Quaternion>` | A collection of rotations representing the surface tangent space for each vertex. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

---