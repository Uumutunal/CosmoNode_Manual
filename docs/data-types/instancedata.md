---
title: InstanceData
sidebar_position: 5
---

## Overview

`InstanceData` represents instanced geometry in CosmoNode.

It stores a reference to a source `MeshData` and a collection of transformation matrices. Multiple transformations can reference the same source mesh, allowing the same geometry to be placed multiple times without duplicating the underlying mesh data.

---

## Contains

- Source Mesh
- Transformation Matrices

---

## Source

The `source` field contains the `MeshData` used by the instance.

---

## Usage

- `InstanceData` is stored inside the `GeometryData`.
- Nodes such as **Copy to Points** can generate multiple transformations for the same source geometry.
- **Realize Instances** converts the instances into regular mesh geometry.
- **Pack Geometry** can convert regular mesh geometry into an `InstanceData`.

---

## Notes

- `source` may be `null` for an uninitialized instance.
- The `transform` list can contain multiple transformation matrices.
- Sharing the source mesh between instances reduces memory usage compared to storing a separate mesh for every instance.
- Instance transformations are applied when calculating bounds or realizing the geometry.