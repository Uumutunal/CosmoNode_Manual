---
title: MeshData
---

## Overview

`MeshData` represents a procedural mesh used throughout CosmoNode.  
It contains geometry, topology, and per-element attributes.

---

## Contains

- Vertices
- Edges
- Faces
- UVs
- Attributes (vertex, edge, face, object)

---

## Usage

- Most mesh-related nodes consume and output `MeshData`
- Modifying nodes return a new or updated `MeshData`
- Attributes are stored and accessed by name and domain

---

## Notes

- `MeshData` is immutable by default unless explicitly modified by a node
- Attribute domains determine how data maps to geometry elements
