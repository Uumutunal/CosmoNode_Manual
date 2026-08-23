---
title: GeometryData
sidebar_position: 4
---

**## Overview**

`GeometryData` is the primary container used to represent geometry throughout CosmoNode.

It can contain both a regular `MeshData` mesh and a collection of instances. This allows geometry to be processed either as direct mesh data or as lightweight instanced geometry.

---

## Contains

- Mesh
- Instances

---

## Mesh

The `mesh` field contains a `MeshData` object representing regular mesh geometry.

- Can be `null` when the geometry contains only instances.
- Contains the actual vertices, topology, UVs, and attributes of the mesh.
- Mesh geometry is stored directly rather than as an instance.

---

## Instances

The `instances` field contains a list of `InstanceData` objects.

Each instance references source geometry and stores one or more transformation matrices used to place that geometry in the scene.

- Each instance can have its own transformation.
- Instances avoid duplicating the underlying mesh data.
- Instance geometry can be converted into regular mesh geometry using the **Realize Instances** node.

---

## Usage

- Most geometry-related nodes consume and output `GeometryData`.
- `GeometryData` allows nodes to work with both regular meshes and instances.
- Mesh and instance data can exist together in the same `GeometryData`.

---

## Notes

- A `GeometryData` object can therefore represent:
  - A mesh only
  - Instances only
  - A mesh and instances together
- `GeometryData` is the higher-level geometry container, while `MeshData` represents the actual mesh structure.