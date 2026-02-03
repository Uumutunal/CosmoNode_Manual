---
title: Attribute Value
---

## Overview

Retrieves attribute values from the incoming mesh.

---

## Inputs

| Name  | Type     | Description |
|-------|----------|-------------|
| Input | MeshData | Incoming mesh data. |

---

## Outputs

| Name  | Type | Description |
|-------|------|-------------|
| Value | Any  | Attribute value. The output type matches the selected attribute type. |

---

## Parameters

| Name           | Type            | Default                  | Description |
|----------------|-----------------|--------------------------|-------------|
| Type           | VariableType    | VariableType.Int         | Type of the attribute to retrieve. |
| Domain         | AttributeDomain | AttributeDomain.Vertex   | Domain from which the attribute is retrieved. |
| Attribute Name | string          | ""                       | Name of the attribute. |

---

## Behavior Notes

- Attribute names must be unique within the same domain.
- The output type updates dynamically to match the selected attribute type.

---
