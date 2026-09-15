---
title: Changelog
---

## Overview

This document tracks all public releases, feature updates, optimization passes, and bug fixes for CosmoNode.

---

## Version 0.4.1

### New Features & Optimizations

- **GPU Instancing:** Added GPU instancing support for significantly more efficient rendering of instanced geometry.
- **Post-Processing Optimization:** Optimized the processing performed after graph evaluation, improving overall performance and reducing the overhead of converting procedural results into Unity meshes.

---

## Version 0.4.0

### New Features & Nodes

- **Instancing:** Added support for procedural geometry instancing.

- **Pack Geometry Node:** Added a node for converting mesh geometry into instances.

- **Realize Instances Node:** Added a node for converting instances back into regular mesh geometry.

- **UV Transform Node:** Added a node for procedurally translating, rotating, and scaling UV coordinates.

- **Material Parameter:** Added support for controlling material parameters within the graph.

- **Auto UV Mapping:** Added automatic UV mapping support to the Follow Path node.

- **Simple Deform Node:** Added a new node for procedurally bending, twisting, and tapering geometry.

#### Curve Improvements

- **Box Selection:** Added box selection support for curve points.

- **Curve Parameter:** Added curve parameter support for procedural curve operations.

- **Curve Point Deletion:** Fixed issues with deleting curve points.

#### Follow Path Node

- **Multiple Paths:** Fixed the Follow Path node not correctly closing the loop when working with multiple paths.

- **Twisting:** Fixed unexpected twisting during Follow Path deformation.

- **UV Mapping:** Added automatic UV mapping for geometry generated along paths.

### Bug Fixes & Stability Improvements

- **Merge Node:** Fixed the Flatness attribute not being merged correctly.

- **Match Size Node:** Fixed the gizmo not scaling correctly with the GameObject.

- **Curve Selection:** Fixed issues with curve box selection and point interaction.

---

## Version 0.3.2

**Released: July 27, 2026**

### Bug Fixes & Stability Improvements

- **Draw Curve:** Fixed Curve Mode always blocking Scene View input after editing.

- **ForEach Node:** Fixed the iteration count not working correctly.

- **Input Handling:** Fixed null input handling.

- **ForEach Node:** Fixed the iteration input not updating correctly.

- **Weld Node:** Fixed issues with degenerate faces and edges after welding.

- **Merge Node:** Fixed the second input not correctly merging UV data.

---

## Version 0.3.0

### New Features & Nodes

- **Raycast Node:** Added a new node for performing ray queries.

### Draw Curve Improvements

- Added support for closed curves.
- Added support for linear (non-Bezier) curve segments.
- Added a dedicated curve handle window and editing controls.
- Curves now reset rotation and scale automatically when created.

### Optimizations & Refactoring

- **Resample Node Rewrite:** Completely rewrote the Resample node for improved performance and maintainability.

- **Reduced Garbage Collection:** Lowered GC pressure by improving referenced output handling.

- **Optimized Native Code Interop:** Improved communication between managed and native code.

- **Split Pieces Optimization:**
  - Optimized the Split Pieces workflow.
  - Added component outputs to `Utils.SplitConnectedPieces`.

- **Copy Node:** Improved execution performance.

- **Static Merge Node:** Faster processing for static merge operations.

- **Material Assignment:** Improved performance when applying materials in CosmoNode.

- **Decimate Node:** Refactored and cleaned up the implementation.

### Bug Fixes & Stability Improvements

- **Draw Curve:**
  - Fixed adding points when no point was selected.
  - Fixed incorrect depth when adding new points.

- **Curve Bevel:** Fixed bevel generation on closed curves.

- **Rendered Nodes:** Fixed errors when deleting rendered nodes.

- **Draw Node:** Fixed the node being reset after removing a connection.

- **Spreadsheet:** Fixed updates not occurring correctly when creating or removing connections.

- **Unity Compatibility:** Fixed GUI matrix offset issues in newer Unity versions.

- **Ghost Node:** Fixed ghost rendering while the source GameObject was invisible.

- **Gizmo Scaling:** Fixed inconsistent vertex gizmo scaling.

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