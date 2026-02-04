---
title: Node Group
---

## Overview

A container node that encapsulates a sub-graph of nodes into a single, organized block. İt allows for modularity, reusability, and cleaner graph layouts by nesting complex logic inside a single node.

---

## Inputs & Outputs


> This node has **dynamic** ports. It does not have default inputs or outputs.

- **Dynamic Inputs**: Automatically generated based on the **Input Nodes** placed inside the sub-graph.
- **Dynamic Outputs**: Automatically generated based on the **Output Nodes** placed inside the sub-graph.

---

## Parameters

> This node does not expose standard parameters, as its behavior is defined by the internal nodes it contains.

---

## Behavior Notes

- Node Groups help manage large-scale procedural projects by hiding detailed logic. You can think of it as a "custom node" created on the fly.
- To pass data into the group (like a `MeshData` object or a `float`), you must place a specialized **Group Input** node inside the sub-graph. To send data back to the main graph, use a **Group Output** node.

---