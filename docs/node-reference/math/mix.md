---
title: Mix
---

## Overview

Blends between two values using a factor, supporting multiple data types.

---

## Inputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Factor | float | Blend factor in the range **[0, 1]**, where 0 outputs the first value and 1 outputs the second value. |

### Value Inputs

> Only one value type is active and visible at a time, based on the selected **Mix Type**.

| Name | Type | Description |
|------|------|-------------|
| Value 1 | int / float / Vector2 / Vector3 / Quaternion | First input value. |
| Value 2 | int / float / Vector2 / Vector3 / Quaternion | Second input value. |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Output | int / float / Vector2 / Vector3 / Quaternion | Result of the mix operation. |

> The output represents the mixed result of the selected value type.

---

## Parameters

| Name | Type | Default | Description |
|------|------|---------|-------------|
| Type | MixType | MixType.Int | Determines the data type and mixing behavior used by the node. |

---

## Behavior Notes

- Only the inputs corresponding to the selected **Mix Type** are shown and evaluated.
- A **Factor** of `0` outputs the first value, while a value of `1` outputs the second value.
- Intermediate values blend proportionally between the two inputs.

---
