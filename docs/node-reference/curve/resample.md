---
title: Resample
---

## Overview

Resamples geometry by redistributing points along curves.

---

## Inputs

| Name       | Type              | Description |
|------------|-------------------|-------------|
| Input      | MeshData / Curve  | Incoming geometry or curve to resample. |
| Segments   | int               | Number of segments used for resampling when **Use Length** is disabled. |
| Length     | float             | Target segment length when **Use Length** is enabled. |
| Use Length | bool              | Enables length-based resampling instead of fixed segment count. |
| Is Bezier  | bool              | Treats the input as Bézier curves when enabled. |

---

## Outputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Output | MeshData | Resampled geometry. |

---

## Parameters

> This node does not expose additional parameters beyond its inputs.

---

## Behavior Notes

- The **Input** socket accepts both **Curve** and **MeshData** types.
- When a mesh is provided, curve data contained within the mesh is resampled.
- When **Use Length** is disabled, resampling is performed using a fixed number of **Segments**.
- When **Use Length** is enabled, resampling is based on the specified **Length** value.
- Enabling **Is Bezier** affects how curve interpolation is evaluated.
- Higher segment counts or smaller lengths result in increased point density.

---
