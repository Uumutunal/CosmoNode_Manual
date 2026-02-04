---
title: Copy To Points
---

## Overview

Instances a piece of geometry onto every vertex of a target mesh or curve, populating a scene with repeated mesh data.

---

## Inputs

| Name           | Type             | Description                                                                 |
| :------------- | :--------------- | :-------------------------------------------------------------------------- |
| Geometry Input | MeshData         | The source geometry that will be duplicated.                                |
| Point Input    | MeshData / Curve | The target locations. Vertices or curve points serve as the instance origin. |
| Rotation Input | `List<Quaternion>` | A list of rotations to apply to each instance.                               |

---

## Outputs

| Name   | Type     | Description                                                                 |
| :----- | :------- | :-------------------------------------------------------------------------- |
| Output | MeshData | The combined mesh containing all instanced copies of the geometry.          |

---

## Parameters

| Name              | Type | Default | Description                                                                           |
| :---------------- | :--- | :------ | :------------------------------------------------------------------------------------ |
| Align To Rotation | bool | false   | If enabled, uses the **Rotation Input** to orient each instance.                      |

---

## Behavior Notes

- The **Point Input** accepts both `MeshData` (using vertices) and `Curve` types. Curves are automatically converted to mesh points internally.
- If **Align To Rotation** is active, each object will use **Rotation Input** to align.

---