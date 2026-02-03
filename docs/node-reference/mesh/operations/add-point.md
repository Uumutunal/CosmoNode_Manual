---
title: Add Point
sidebar_position: 1
---

## Overview

Briefly describe what this node does in **one or two sentences**.
Focus on *what problem it solves*, not how it’s implemented.

> Example:  
> The **Mesh** node represents a mesh input or output and acts as the foundation
> for most geometry operations in CosmoNode.

---

## Inputs

| Name | Type | Description |
|-----|------|-------------|
| Points | Vector3 | Incoming mesh data to be processed |

> If the node has **no inputs**, explicitly say so.

---

## Outputs

| Name | Type | Description |
|------|------|-------------|
| Output | MeshData | Resulting mesh after processing |

---

## Parameters

The node has no parameters.

> Omit this section if the node has no parameters.

---

## Behavior Notes

- How the node behaves in edge cases
- Order of operations
- Execution timing (lazy, eager, cached, etc.)
- Any Unity-specific behavior

---

## Performance Considerations

- Time complexity (high-level)
- Memory implications
- When *not* to use this node

> Especially important for procedural chains.

---

## Common Use Cases

- Generating base geometry
- Preparing meshes for modifiers
- Reusable graph patterns

---

## Limitations

- Known constraints
- Unsupported mesh types
- Precision or topology issues

---

## Related Nodes

- [Extrude](../modifiers/extrude.md)
- [Subdivide](../modifiers/subdivide.md)
- [Merge](../utilities/merge.md)
