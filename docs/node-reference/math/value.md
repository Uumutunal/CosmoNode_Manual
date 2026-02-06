---
title: Value
---

## Overview

A versatile constant node that outputs a single value. The type of data provided is determined by a user-selected variable type.

---

## Inputs

> This node does not have input ports.

---

## Outputs

| Name   | Type  | Description                                      |
| :----- | :---- | :----------------------------------------------- |
| Output | Any | The numeric value defined by the node settings. |

---

## Parameters

| Name          | Type         | Description                                                                 |
| :------------ | :----------- | :-------------------------------------------------------------------------- |
| Variable Type | VariableType         | Selects the data type: **int / float / vector2 / vector3 / bool**.          |
| Value         | Any   | The actual data field corresponding to the selected **Variable Type**.      |

---

## Behavior Notes

- **Dynamic Interface**: Only one value type is shown at a time based on the selected **Variable Type**. Changing the type will hide the previous value field and reveal the new one.
- **Data Casting**: While the output is technically a float, it is often used to feed constant values into other math or transformation nodes.
- When set to **bool**, the value is typically treated as 0 (false) or 1 (true).

---