---
title: Mesh to Curve
---

## Overview

Converts mesh geometry into a curve representation.

---

## Inputs

| Name  | Type     | Description |
|-------|----------|-------------|
| Input | MeshData | Incoming mesh geometry to convert. |

---

## Outputs

| Name   | Type  | Description |
|--------|-------|-------------|
| Output | Curve | Curve generated from the input mesh. |

---

## Parameters

> This node does not expose additional parameters.

---

## Behavior Notes

- The resulting curve is generated based on the structure of the input mesh.
- The quality and shape of the curve depend on the topology of the source mesh.
- If the input mesh is empty, the output curve will be empty.

---
