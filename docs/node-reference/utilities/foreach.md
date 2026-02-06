---
title: For Each
---

## Overview

The **For Each** system (comprising the **Begin** and **End** nodes) allows you to perform iterative operations on a mesh. It breaks a mesh down into smaller components—such as individual faces or vertices—processes them through a series of nodes, and then merges them back together.

---

## Inputs & Outputs

### Begin Node
| Name      | Type     | Description                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------- |
| Input     | MeshData | The source mesh to be iterated over.                          |
| Iteration | int      | The current iteration index in the loop.|
| **Output: Element** | MeshData | The current sub-mesh or component being processed in the loop. |
| **Output: Index** | int      | The current iteration count.                 |

### End Node
| Name      | Type     | Description                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------- |
| Input     | MeshData | The processed mesh data coming from the final node within the loop.          |
| **Output: Output** | MeshData | The final combined result of all iterations.                        |

---

## Parameters

| Name               | Type    | Description                                                                                   |
| :----------------- | :------ | :-------------------------------------------------------------------------------------------- |
| Element to Iterate | Element | Defines the "chunk" size for iteration (e.g., iterate per **Point**, per **Face**, **Number**, or **ConnectedPiece**). |

---

## Behavior Notes

- Any nodes placed between the **Begin** and **End** nodes are executed repeatedly. For each iteration, the **Begin** node sends a single "Element" (like one triangle) through the chain.
- The **End** node acts as an accumulator. Once all iterations are complete, it stitches the results back into a single `MeshData` object.
- By using the **Index** output from the **Begin** node, you can introduce variation in each loop—for example, scaling each face based on its index using a math node.
- Loops are powerful but computationally expensive. Iterating over thousands of individual faces can significantly increase graph evaluation time.

---