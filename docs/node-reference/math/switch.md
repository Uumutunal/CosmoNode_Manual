---
title: Switch
---

## Overview

Acts as a gatekeeper that selects between two potential mesh data inputs based on a boolean condition.

---

## Inputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Condition | bool | The toggle that determines which input is passed to the output. |
| False Cond | MeshData | The mesh data to use when the condition is **false**. |
| True Cond | MeshData | The mesh data to use when the condition is **true**. |

---

## Outputs

| Name | Type | Description |
| :--- | :--- | :--- |
| Output | MeshData | The selected mesh data based on the current state of the condition. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- If the **Condition** is **true**, the `trueCond` input is used; otherwise, the `falseCond` input is used.

---