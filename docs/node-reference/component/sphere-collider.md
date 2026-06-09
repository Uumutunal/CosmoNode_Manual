---
title: Sphere Collider Node
---

## Overview

Generates and attaches a primitive sphere collider component configuration onto the incoming mesh scene data hierarchy. It provides options for manual configuration of the center point and radius, alongside an automatic mesh-fitting calculation.

---

## Inputs

| Name | Type | Description |
|:---|:---|:---|
| Input | MeshData | Incoming mesh geometry data to receive the collider configuration. |
| Center | Vector3 | The local offset position of the collider center relative to the geometry. |
| Radius | float | The radius of the sphere collider. |
| Radius Padding | float | Margin added to expand the radius exclusively during automatic mesh-fitting. |
| Is Trigger | bool | Defines whether the collider functions as an un-physical trigger boundary or a solid barrier. |

---

## Outputs

| Name | Type | Description |
|:---|:---|:---|
| Output | MeshData | The updated mesh scene data hierarchy embedded with the defined sphere collider component payload. |

---

## Parameters

| Name | Type | Description |
|:---|:---|:---|
| Fit To Mesh | bool | If active, explicitly bypasses fixed manual dimensions, calculating optimal center boundaries and radius directly from the vertices of the incoming mesh. |

---

## Behavior Notes

- **Fit to Mesh Mechanics:** When `fitToMesh` is toggled true, the node scans all vertices in the `Input` mesh to determine its axis-aligned bounding box. It calculates the `Center` as the geometric midpoint of these boundaries, and sets the `Radius` based on half of the mesh's single largest dimensional axis (width, height, or depth).
- **Padding Integration:** The `RadiusPadding` input value accumulates dynamically on top of the calculated dimension when `fitToMesh` is true, providing an easy way to scale out the collision shell.
