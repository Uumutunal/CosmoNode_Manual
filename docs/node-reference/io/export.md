---
title: Export
---

## Overview

Exports the incoming mesh data as an asset using the specified name and path.

---

## Inputs

| Name  | Type     | Description |
|-------|----------|-------------|
| Input | MeshData | Mesh data to be exported. |

---

## Outputs

> This node does not produce an output.

---

## Parameters

| Name        | Type   | Default          | Description |
|-------------|--------|------------------|-------------|
| Export Name | string | ExportedObject   | Name of the exported asset. |
| Path        | string | Assets/Prefabs   | Target folder path where the asset will be saved. |

---

## Behavior Notes

- The export path must be a valid project-relative path (e.g. inside the `Assets` folder).
- If an asset with the same name already exists at the target path, it may be overwritten.

---
