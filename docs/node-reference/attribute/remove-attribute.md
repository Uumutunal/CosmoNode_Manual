---
title: Remove Attribute
---

## Overview

Removes an attribute from the incoming mesh.

---

## Inputs

| Name  | Type     | Description |
|-------|----------|-------------|
| Input | MeshData | Incoming mesh data. |

---

## Outputs

| Name   | Type     | Description |
|--------|----------|-------------|
| Output | MeshData | Mesh data with the specified attribute removed. |

---

## Parameters

| Name                | Type            | Default                | Description |
|---------------------|-----------------|------------------------|-------------|
| Domain              | AttributeDomain | AttributeDomain.Vertex | Domain from which the attribute will be removed. |
| Attribute Name      | string          | ""                     | Name of the attribute to remove. |
| Clear All Attributes| bool            | false                  | Removes all attributes from the selected domain when enabled. |

---

## Behavior Notes

- When **Clear All Attributes** is enabled, all attributes in the selected domain are removed.
- If the specified attribute does not exist, the mesh is returned unchanged.

---
