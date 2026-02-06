---
title: Fit Curve
---

## Overview

Deforms the input mesh to fit along a curve.

---

## Inputs

| Name            | Type     | Description |
|-----------------|----------|-------------|
| Geometry Input  | MeshData | Incoming mesh to be deformed. |
| Curve Input     | Curve    | Curve used as the deformation guide. |

---

## Outputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Output | MeshData | Mesh deformed to fit the input curve. |

---

## Parameters

| Name             | Type             | Default | Description |
|------------------|------------------|---------|-------------|
| Deformation Axis | DeformationAxis  | DeformationAxis.X  | Axis of the mesh used for deformation along the curve. |

---

## Behavior Notes

- The mesh is deformed along the provided curve based on the selected **Deformation Axis**.
- The orientation and scale of the result depend on both the mesh’s original alignment and the shape of the curve.
- If no curve is provided, the input mesh is passed through unchanged.

---
