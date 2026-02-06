---
title: Match Size
---

## Overview

Scales and repositions a source mesh so that its dimensions and alignment match the volume of a target "bounding box" mesh. This is ideal for fitting objects into specific containers or aligning multiple parts of a model relative to one another.

---

## Inputs

| Name         | Type     | Description                                                                 |
| :----------- | :------- | :-------------------------------------------------------------------------- |
| Geometry     | MeshData | The source mesh that will be resized and moved.                             |
| Bounding Box | MeshData | The reference mesh whose volume defines the target area.                    |
| Offset X/Y/Z | float    | Manual translation adjustments applied after the matching process.          |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The transformed source mesh, now matching the target volume. |

---

## Parameters

| Name           | Type    | Description                                                                                   |
| :------------- | :------ | :-------------------------------------------------------------------------------------------- |
| Justify X/Y/Z  | Justify | The alignment point on the **source** mesh (e.g., Min, Center, Max).                          |
| Box X/Y/Z      | Justify | The target alignment point within the **Bounding Box** volume (e.g., Min, Center, Max).       |

---

## Behavior Notes

- **Fitting Logic**: The node calculates the scale multiplier required to make the `Geometry` bounds equal to the `Bounding Box` bounds. If the bounding box is a cube and your geometry is a sphere, the sphere will be stretched into an ellipsoid to fill the box.
- **Alignment (Justification)**: The **Justify** and **Box** parameters allow for precise snapping. For example, setting both **Y** parameters to `Min` will ensure the bottom of your object sits perfectly on the floor of the bounding volume.
- **Workflow Tip**: Use this in conjunction with the **Bounding Box Node** to create "containers" for procedural assets, ensuring they never exceed a specific physical footprint.

---