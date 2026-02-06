---
title: Random Value
---

## Overview

Generates a deterministic random value within a specified range.

---

## Inputs

| Name       | Type  | Description |
|------------|-------|-------------|
| Min        | float | Lower bound of the random range. |
| Max        | float | Upper bound of the random range. |
| Seed       | int   | Seed value used to control randomization. |
| Enumerate  | int   | Determines how many values will be generated. |

---

## Outputs

| Name  | Type  | Description |
|-------|-------|-------------|
| Value | float | Generated random value within the specified range. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The output value is always within the range **[Min, Max]**.
- **Enumerate** controls how many values will be generated.

---
