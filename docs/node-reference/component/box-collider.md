---
title: Box Collider
---

## Overview

Generates and attaches a primitive box collider component configuration onto the incoming mesh scene data hierarchy. It allows full control over position, dimensions, rotation, and trigger configuration, alongside an automatic mesh-fitting algorithm.

---

## Inputs

| Name | Type | Description |
|:---|:---|:---|
| Input | MeshData | Incoming mesh geometry data to receive the collider configuration. |
| Center | Vector3 | The local offset position of the collider center relative to the geometry. |
| Size | Vector3 | The dimensional scale (width, height, depth) of the box collider. |
| Rotation | Vector3 | The rotation orientation angles (in degrees) applied to the box collider. |
| Padding | Vector3 | Supplementary margin expansion added exclusively during automatic bounding calculations. |
| Is Trigger | bool | Defines whether the collider functions as an un-physical trigger boundary or a solid barrier. |

---

## Outputs

| Name | Type | Description |
|:---|:---|:---|
| Output | MeshData | The updated mesh scene data hierarchy embedded with the defined box collider component payload. |

---

## Parameters

| Name | Type | Description |
|:---|:---|:---|
| Fit To Mesh | bool | If active, explicitly bypasses fixed manual sizes, calculating optimal center boundaries and dimensions directly derived from the vertices of the incoming mesh. |

---

## Behavior Notes

- **Fit to Mesh Mechanics:** When `fitToMesh` is toggled true, the node maps the `input` vertices into the custom orientation space of the collider. It computes an aligned bounding box where `center` and `size` parameters are overridden based on actual geometry limits, while retaining user-defined `rotation` matrices.
- **Padding Integration:** The `padding` input field acts cumulatively with `fitToMesh`. It expands the dynamic calculated boundary dimensions, allowing comfortable clearance gaps around geometry bounds.
