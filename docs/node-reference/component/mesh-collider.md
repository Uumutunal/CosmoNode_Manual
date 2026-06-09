---
title: Mesh Collider Node
---

## Overview

Generates and attaches a mesh collider component configuration onto the incoming mesh scene data hierarchy. This node relies directly on the complex geometry of the mesh itself for high-fidelity physical collisions, rather than approximating it with a primitive shape.

---

## Inputs

| Name | Type | Description |
|:---|:---|:---|
| Input | MeshData | Incoming mesh geometry data to be utilized for generating the collision surface. |
| Convex | bool | If enabled, forces the physics engine to generate a convex hull representation of the geometry. Required if this collider needs to interact with rigidbodies or act as a trigger. |
| Is Trigger | bool | Defines whether the collider functions as an un-physical trigger boundary or a solid barrier. |

---

## Outputs

| Name | Type | Description |
|:---|:---|:---|
| Output | MeshData | The updated mesh scene data hierarchy embedded with the defined mesh collider component payload. |

---

## Parameters

> This node does not expose additional parameters beyond its inputs.

---

## Behavior Notes

- **Convex Limitation:** Non-convex (concave) mesh colliders can only collide with primitive-shaped colliders or other convex mesh colliders. For full kinematic interaction, dynamic physics collisions, or trigger interactions between multiple mesh surfaces, **Convex** must be set to `true`.
- **Performance Impact:** Mesh colliders calculate collisions on a per-polygon level. They require considerably more processing overhead than primitive shapes (like boxes or capsules). Use them selectively for complex custom environments or intricate structural assets where primitive hulls are insufficient.
