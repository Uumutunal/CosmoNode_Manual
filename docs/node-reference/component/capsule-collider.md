---
title: Capsule Collider Node
---

## Overview

Generates and attaches a primitive capsule collider component configuration onto the incoming mesh scene data hierarchy. It provides options for manual configuration of radius, height, orientation direction, and trigger setup, alongside an automatic mesh-fitting calculation.

---

## Inputs

| Name | Type | Description |
|:---|:---|:---|
| Input | MeshData | Incoming mesh geometry data to receive the collider configuration. |
| Center | Vector3 | The local offset position of the collider center relative to the geometry. |
| Rotation | Vector3 | The rotation orientation angles (in degrees) applied to the capsule collider. |
| Radius | float | The radius of the capsule's circular profile. |
| Height | float | The total length of the capsule from top to bottom (including hemispherical caps). |
| Radius Padding | float | Margin added to expand the radius exclusively during automatic mesh-fitting. |
| Height Padding | float | Margin added to expand the height exclusively during automatic mesh-fitting. |
| Direction | Direction | The local orientation axis along which the capsule aligns (`X`, `Y`, or `Z`). |
| Is Trigger | bool | Defines whether the collider functions as an un-physical trigger zone or a solid barrier. |

---

## Outputs

| Name | Type | Description |
|:---|:---|:---|
| Output | MeshData | The updated mesh scene data hierarchy embedded with the defined capsule collider component payload. |

---

## Parameters

| Name | Type | Description |
|:---|:---|:---|
| Fit To Mesh | bool | If active, explicitly bypasses manual dimensions, calculating optimal boundaries, radius, and height directly from the vertices of the incoming mesh. |

---

## Behavior Notes

- **Fit to Mesh Mechanics:** When `fitToMesh` is toggled true, the node maps the `Input` mesh vertices into the capsule's local orientation space. It identifies the maximum cross-sectional bounding extents perpendicular to the selected `Direction` axis to calculate the radius, and measures the longitudinal extent for the height.
- **Proportional Constraint:** Capsule geometry logic dictates that a capsule's radius cannot exceed half of its total height. If the calculated or manual `Radius` (including `RadiusPadding`) exceeds `Height / 2f`, the node automatically clamps the radius to half the total height value to maintain valid physical geometry.
- **Padding Integration:** The `RadiusPadding` and `HeightPadding` input values accumulate dynamically on top of the calculated dimensions when `fitToMesh` is true, providing standalone control over radial and height clearance margins.
