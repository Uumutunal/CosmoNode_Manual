---
title: Changelog
---

## Overview

This document tracks all public releases, feature updates, optimization passes, and bug fixes for CosmoNode.

---

## Version 0.2.0

### New Features & Nodes
* **Light Nodes:** Full support for procedurally generating and configuring light sources within your graphs.
* **Collider Nodes:** Generate and assign primitive (`Box`, `Capsule`, `Sphere`) and `Mesh` physics colliders to your procedural geometry.
* **Smooth by Angle Node:** Dynamically control mesh smoothing based on adjustable edge angle thresholds.
* **Shading Control:** Added native support for switching between Smooth and Flat shading modes.
* **Face-Corner Attributes:** Expanded the attribute system to support face-corner data fields for advanced mesh manipulation.

### Optimizations & Refactoring
* **Subdivision Node Rewrite:** Refactored and optimized the core subdivision algorithm for better runtime execution speed.
* **Attribute System Overhaul:** Refactored internal attribute data structures and operations to improve overall performance and system stability.

### Bug Fixes & Stability Improvements
* **Attribute Interop:** Fixed underlying bugs regarding attribute interpolation and interop handling across differing domains.
* **Vector Calculations:** Resolved an issue where vector attributes were not calculating or transforming correctly in 3D space.
* **UI & Spreadsheet:** Fixed a bug where index numbers for vertex attributes were displaying incorrectly in the graph's spreadsheet viewer.
* **Serialization:** Fixed an issue where the `Store Attribute` node would lose its active graph connections upon a Unity script compilation or project reload.
* **Merge Node:** Improved stability by fixing edge-case null reference exceptions when merging empty data paths.

### Adjustments
* **Cube Node Generation:** Changed the `Cube Node` generation structure to output a welded-vertex mesh by default instead of a detached, split-face layout. 
  > **Note:** If your current workflows rely on separated faces, you will need to utilize a split/disconnect node immediately after the Cube generation node.

---

## Version 0.1.0 — Initial Release

### Core Framework
* **First Public Release:** Initial public release of the CosmoNode toolset.
* **Procedural Engine:** Node-based procedural geometry generation system built on top of `xNode`.
* **Environment Support:** Works seamlessly in both the Unity Editor and at Runtime.
* **Samples Included:** Package includes essential primitive generation nodes and functional demo scenes.