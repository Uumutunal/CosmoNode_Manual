---
title: Transform
---

## Overview

Applies translation, rotation, and scaling transformations to mesh geometry and instances. Supports configurable translation and rotation orders to control how transformations are applied.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Input | GeometryData | The source geometry, including mesh data and instances. |
| Translation | Vector3 | The distance to move the geometry along the X, Y, and Z axes. |
| Rotation | Vector3 | The Euler angles in degrees used to rotate the geometry. |
| Scale | Vector3 | The scaling factor for each individual axis. |
| Uniform Scale | float | A global multiplier applied equally to all axes, compounded with **Scale**. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | GeometryData | The transformed geometry, including mesh data and instances. |

---

## Parameters

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| Translation Order | TranslationOrder | `SRT` | Determines the order in which translation, rotation, and scaling transformations are applied. Supports `SRT`, `STR`, `RST`, `RTS`, `TSR`, and `TRS`. |
| Rotation Order | RotationOrder | `XYZ` | Determines the order in which the X, Y, and Z rotations are applied. Supports `XYZ`, `XZY`, `YXZ`, `YZX`, `ZXY`, and `ZYX`. |

---

## Behavior Notes

- **Translation Order** – Supports six transformation orders: `SRT`, `STR`, `RST`, `RTS`, `TSR`, and `TRS`.
- **Rotation Order** – Supports six rotation orders: `XYZ`, `XZY`, `YXZ`, `YZX`, `ZXY`, and `ZYX`.
- **Default Transformation Order** – Uses `SRT`, applying scaling first, rotation second, and translation last.