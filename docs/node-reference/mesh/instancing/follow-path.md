---
title: Follow Path
---

## Overview

Extrudes a profile mesh along a path mesh, creating a swept surface or tube-like geometry.

---

## Inputs

| Name      | Type     | Description                                                                 |
| :-------- | :------- | :-------------------------------------------------------------------------- |
| Path      | MeshData | The spine or path geometry along which the profile will be extruded.        |
| Profile   | MeshData | The cross-section geometry to be swept along the path.                      |
| Close Caps| bool     | If true, generates geometry to seal the start and end openings of the extrusion. |

---

## Outputs

| Name   | Type     | Description                                           |
| :----- | :------- | :---------------------------------------------------- |
| Output | MeshData | The resulting extruded mesh geometry.                 |

---

## Parameters

| Name   | Type           | Default        | Description                                                                             |
| :----- | :------------- | :------------- | :-------------------------------------------------------------------------------------- |
| Factor | AnimationCurve | Constant (1.0) | Controls the scale of the profile along the normalized length (0 to 1) of the path. |

---

## Behavior Notes

- The **Factor** curve allows for variable thickness, such as tapering the extrusion at the ends or creating bulging effects in the middle.

---