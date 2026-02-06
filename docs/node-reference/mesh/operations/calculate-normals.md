---
title: Calculate Normals
---

## Overview

Recalculates the normal vectors for the input mesh.

---

## Inputs

| Name  | Type     | Description             |
| :---- | :------- | :---------------------- |
| Input | MeshData | The mesh to be updated. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The mesh with the new normal data. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Calculates vertex normals using area- and angle-weighted face contributions.

---