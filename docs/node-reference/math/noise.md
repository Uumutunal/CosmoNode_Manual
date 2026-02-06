---
title: Noise
---

## Overview

Generates procedural noise values based on input coordinates.

---

## Inputs

| Name        | Type             | Description |
|-------------|------------------|-------------|
| Coordinates | `List<Vector3>`  | Positions used as input for noise evaluation. |
| Seed        | int              | Seed value used to randomize the noise pattern. |
| Scale       | float            | Overall scale applied to the input coordinates. |
| Frequency   | float            | Frequency of the noise pattern. Higher values produce more variation. |

---

## Outputs

| Name  | Type         | Description |
|-------|--------------|-------------|
| Value | `List<float>`  | Noise values evaluated at each input coordinate. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- Changing the **Seed** produces a different but deterministic noise pattern.

---
