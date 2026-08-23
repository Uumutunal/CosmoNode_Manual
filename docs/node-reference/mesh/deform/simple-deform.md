---
title: Simple Deform
---

## Overview

Deforms mesh geometry using a selected deformation method. The node supports bending, twisting, and tapering along a chosen deformation axis.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Input | GeometryData | The geometry to deform. |
| Deform Angle | float | Controls the strength of the deformation. Its exact meaning depends on the selected deformation method. |
| Selection | `List<int>` | A selection of mesh elements that can be used to define the deformation region. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | GeometryData | The deformed geometry. |

---

## Parameters

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| Deformation Method | DeformationMethod | `Bend` | Determines the type of deformation applied. Options are **Bend**, **Twist**, and **Taper**. |
| Deformation Axis | DeformationAxis | `X` | Defines the primary axis along which the deformation is applied. |
| Deform Angle | float | `45` | Controls the deformation amount. For **Bend** and **Twist**, this represents an angle in degrees. For **Taper**, it determines the ending scale. |

---

## Behavior Notes

- The deformation is based on the minimum and maximum vertex positions along the deformation axis.

#### Bend

- Bends the geometry progressively along its deformation axis.
- **Deform Angle** specifies the total bend angle in degrees.
- Vertices are mapped onto an arc based on their position along the deformation axis.
- Geometry extending beyond the deformation range continues along the tangent of the resulting bend.

#### Twist

- Rotates each cross-section progressively around the deformation axis.
- **Deform Angle** specifies the total rotation in degrees.
- Vertices at the start of the deformation remain at their original rotation.
- Vertices at the end of the deformation receive the full specified rotation.
- Vertices beyond the deformation range are clamped to the maximum twist.

#### Taper

- Scales the cross-section progressively along the deformation axis.
- The starting scale is fixed at `1`.
- **Deform Angle** determines the ending scale.
- A value of `1` produces no taper, while values greater than or less than `1` enlarge or shrink the cross-section toward the end of the deformation range.

- The deformation is applied to the input geometry through the geometry processing system, allowing the node to work with geometry containing instances.