---
title: Store Attribute
---

## Overview

Stores a value as an attribute on the incoming mesh.

---

## Inputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Input  | MeshData | Incoming mesh data. |

### Value Inputs

> Only one value input is visible and active at a time, based on the selected **Type** parameter.

| Name          | Type     | Description |
|---------------|----------|-------------|
| Int Value     | int      | Attribute value when **Type** is set to `Int`. |
| Float Value   | float    | Attribute value when **Type** is set to `Float`. |
| Vector2 Value | Vector2 | Attribute value when **Type** is set to `Vector2`. |
| Vector3 Value | Vector3 | Attribute value when **Type** is set to `Vector3`. |
| Bool Value    | bool     | Attribute value when **Type** is set to `Bool`. |

---

## Outputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Output | MeshData | Mesh data with the stored attribute applied. |

---

## Parameters

| Name           | Type            | Default                | Description |
|----------------|-----------------|------------------------|-------------|
| Type           | VariableType    | VariableType.Int       | Type of the attribute to store. Controls which value input is exposed. |
| Domain         | AttributeDomain | AttributeDomain.Vertex | Domain where the attribute will be stored. |
| Attribute Name | string          | ""                     | Name of the attribute to store. |

---

## Behavior Notes

- Only the value input corresponding to the selected **Type** is visible and used.
- If an attribute with the same name already exists in the selected domain, it will rename the new attribute.
- Attribute values are stored per element based on the selected domain.

---
