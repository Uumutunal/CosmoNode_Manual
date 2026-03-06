---
title: Graph Basics
sidebar_position: 3
---

## Node Graph Editor

CosmoNode uses a visual node graph to define procedural geometry.  
Each node performs a single operation, and data flows between nodes through connections.

---

## Adding Nodes

- Right-click inside the graph editor or press **Spacebar**
- Select a node category and node type
- The node will appear at the cursor position

Nodes are organized by category (e.g. `Math`, `Mesh/Operations`, `IO`).

---

## Connecting Nodes

- Drag from an **output port** to a compatible **input port**
- Connections define the order of execution and data flow
- Only compatible types can be connected

---

## Parameters

- Nodes expose parameters directly in the node UI
- Parameters can be:
  - Set manually
  - Driven by connections from other nodes
- Some nodes change visible inputs based on parameter selection

---

## Evaluating the Graph

- The graph is evaluated through the **CosmoNode component** attached to a GameObject
- Changes to the graph or parameters update the output automatically
- The final result is applied to the GameObject in the scene

---

## Rendering & Output

- A rendered node defines the final output of the graph
- Mesh output is converted into scene geometry
- Attribute and data nodes affect how geometry is generated and modified

---

## Basic Node Controls

Each node includes a small set of controls that define how it participates in the graph and how it is visualized.

### Render

- Marks the node as the **active output**
- Only **one node can be rendered at a time**
- Rendering a new node automatically disables the previous one
- The rendered node represents the final graph result

Use this to preview or export a specific node’s output.

---

### Ghost

- Displays a **visual outline** of the node’s output on top of the rendered node
- Ghost nodes are not treated as final output
- Useful for comparing intermediate results or debugging

---

### Bypass

- Temporarily disables the node
- The node is skipped during evaluation
- Input data is passed directly through to the outputs

Bypassing is useful for testing and debugging.

---

## Basic Graph Controls

> These are the default controls provided by the xNode-based graph editor.

| Action            | Control                   |
|-------------------|----------------------------|
| Pan View          | Middle Mouse Button + Drag |
| Zoom              | Mouse Wheel                |
| Select Node       | Left Click                 |
| Multi-Select      | Shift + Left Click         |
| Move Node         | Left Click + Drag          |
| Delete Node       | Delete                     |
| Open Context Menu | Right Click                |

---

## Renaming Parameters

You can rename exposed parameters directly from the GameObject Inspector.

1. Select the GameObject that contains the CosmoNode component.
2. In the Parameters section of the Inspector, locate the parameter you want to rename.
3. Right-click on the parameter name.
4. Select Rename from the context menu.
5. Enter the new name and confirm.

Renaming a parameter will update its name within the graph and any references that use it.

---

## Notes

- Changes to node values or connections automatically update the rendered result
- If nothing appears in the scene, ensure a node is marked as **Render**
- Some nodes expose different inputs depending on their configuration

---

## Next Steps

- Continue with **Node Reference** to learn what each node does
- Build a simple graph using math or noise nodes to understand data flow

This covers everything needed to start working with CosmoNode graphs.
