---
title: Combine XYZ
---

## Overview

Combines three scalar values into a single vector.

---

## Inputs

| Name | Type  | Description |
|------|-------|-------------|
| X    | float | X component of the vector. |
| Y    | float | Y component of the vector. |
| Z    | float | Z component of the vector. |

---

## Outputs

| Name   | Type    | Description |
|--------|---------|-------------|
| Output | Vector3 | Vector constructed from the X, Y, and Z inputs. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Each input directly maps to the corresponding axis of the output vector.
- Commonly used to construct translation, rotation, or scale vectors.
- if at least one of the inputs is a list, then the output is also a list of vectors.
---
