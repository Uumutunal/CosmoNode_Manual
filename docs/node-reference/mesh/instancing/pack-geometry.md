---
title: Pack Geometry
---

## Overview

Converts mesh geometry into an instance and stores it in the geometry's instance collection. This node can be used to prepare geometry for instance-based processing while preserving the original geometry when required.

When **Pack All** is enabled, all geometry, including existing instances, is realized into a single mesh and packed into one instance.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Input | GeometryData | The geometry to pack into instances. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | GeometryData | The geometry with mesh data packed into instances. |

---

## Parameters

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| Pack All | bool | `false` | When enabled, realizes all geometry and existing instances into a single mesh and stores it as one instance. |

---

## Behavior Notes

- When **Pack All** is disabled, the node converts the input mesh into an instance while preserving existing instances.
- If the input contains both a mesh and instances, the mesh is converted into an additional instance and the direct mesh is removed from the output.
- If the input contains only instances, the geometry is returned unchanged.
- When **Pack All** is enabled, existing instances are realized into mesh geometry before being packed into a single instance.
- **Pack All** can therefore be used to combine an entire geometry into a single packed instance.