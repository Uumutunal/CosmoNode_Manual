---
title: Scatter Points On Surface
---

## Overview

Randomly distributes a set number of points across the surface area of a mesh.

---

## Inputs

| Name             | Type     | Description                                                                  |
| :--------------- | :------- | :--------------------------------------------------------------------------- |
| Mesh             | MeshData | The target mesh surface where points will be placed.                         |
| Number of Points | int      | Total amount of points to generate across the surface.                       |
| Relax Iteration  | int      | Number of passes used to push points away from each other for even spacing.  |
| Radius           | float    | The influence distance used during the relaxation phase.                     |
| Seed             | int      | The random seed used to determine point placement.                           |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | A mesh representing the scattered points. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Increasing **Relax Iteration** will result in a more "blue noise" distribution (less clustering), but will take more processing time.
- Changing the **Seed** value will generate a different random configuration of points while maintaining the same density.

---