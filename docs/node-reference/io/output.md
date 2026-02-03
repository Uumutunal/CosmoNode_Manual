---
title: Output
---

## Overview

Defines an output parameter for the node graph, exposing a value from the graph so it can be accessed externally.

---

## Inputs

| Name  | Type | Description |
|-------|------|-------------|
| Input | Any  | The value to be output from the graph. The input type is dynamic and matches the connected data. |

---

## Outputs

> This node does not expose output ports.

---

## Parameters

> This node does not expose additional parameters beyond its inputs.

---

## Behavior Notes

- Output nodes define the public outputs of the node graph.
- The output type is determined by the selected parameter type or the connected input.
- The output parameters are exposed on the group node if the graph is a subgraph.

---

## Related Nodes

- Group Node
