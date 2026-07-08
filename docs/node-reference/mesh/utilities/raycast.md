---
title: Raycast
---

## Overview

Casts a ray against the target mesh and returns information about the first intersection, including whether the ray hit, the hit position, surface normal, and distance from the ray origin.

---

## Inputs

| Name            | Type     | Description                                            |
| :-------------- | :------- | :----------------------------------------------------- |
| Target Geometry | MeshData | The mesh to test for ray intersections.                |
| Source Position | Vector3  | The starting position of the ray.                      |
| Ray Direction   | Vector3  | The direction in which the ray is cast.                |
| Ray Length      | Float    | The maximum distance the ray will travel.              |

---

## Outputs

| Name         | Type    | Description                                              |
| :----------- | :------ | :------------------------------------------------------- |
| Is Hit       | Boolean | Returns `true` if the ray intersects the target mesh.    |
| Hit Position | Vector3 | The world-space position of the first intersection.      |
| Hit Normal   | Vector3 | The surface normal at the intersection point.            |
| Hit Distance | Float   | The distance from the source position to the hit point.  |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Only the closest intersection along the ray is returned.
- The ray is cast from **Source Position** in the **Ray Direction** for up to **Ray Length** units.
