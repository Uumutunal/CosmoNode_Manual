---
title: Realize Instances
---

## Overview

Converts all instances in the input geometry into regular mesh geometry. Instance transforms are applied and the resulting geometry is combined with any existing mesh into a single mesh.

This node is useful when subsequent operations require direct access to the realized mesh rather than instance data.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Input | GeometryData | The geometry containing mesh data and/or instances to realize. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | GeometryData | Geometry containing the realized mesh with all instances converted to regular mesh geometry. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- All instances in the input are converted into regular mesh geometry.
- Any existing mesh geometry is combined with the realized instances.
- The output contains a single `MeshData` and does not retain the original instances.
- If the input contains only a mesh, the mesh is returned as realized geometry without any instances.
- If the input contains only instances, all instances are combined into the output mesh.
- Realizing instances can increase memory usage and processing time because each instance is converted into actual mesh geometry.