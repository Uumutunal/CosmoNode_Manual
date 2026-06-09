---
title: Light
---

## Overview

Configures and applies lighting data to an incoming mesh scene or hierarchy. It supports multiple light types (such as Point, Spot, and Area), transform adjustments, emission properties, and shadow configurations.

---

## Inputs

| Name | Type | Description |
|:---|:---|:---|
| Input | MeshData | Incoming mesh data or scene hierarchy to be lit. |
| Light Position | Vector3 | The position of the light source in 3D space. |
| Light Rotation | Vector3 | The rotation/orientation of the light source. |
| Spot Angle | float | The outer angle of a Spot light's cone (in degrees). |
| Inner SpotAngle | float | The inner angle of a Spot light's cone where fading begins. |
| Width | float | The width of an Area light. |
| Height | float | The height of an Area light. |
| Light Color | Color | The color emitted by the light. |
| Intensity | float | The brightness/energy of the light source. |
| Indirect Multiplier | float | Controls the intensity of indirect bounce lighting. |
| Range | float | The maximum distance the light can travel before dying out. |
| Cast Shadows | bool | Toggles whether the light casts real-time shadows. |
| Shadow Strength | float | Controls the opacity/darkness of the cast shadows. |
| Shadow NearPlane | float | The closest distance from the light source at which shadows begin rendering. |

---

## Outputs

| Name | Type | Description |
|:---|:---|:---|
| Output | MeshData | The processed mesh data incorporating the configured light source. |

---

## Parameters

| Name | Type | Description |
|:---|:---|:---|
| Type | LightDataType | Defines the light type (`Point`, `Spot`, `Area`, etc.). |
| Mode | LightMode | Defines the baking behavior (`Realtime`, `Mixed`, `Baked`). |
| Render Mode | LightRenderMode | Determines the rendering priority (`Auto`, `Important`, `NotImportant`). |
| Culling Mask | LayerMask | Determines which object layers are affected by this light. |
| Shadows | LightShadows | Selects the type of shadow filtering (`None`, `Hard`, `Soft`). |

---

## Behavior Notes

- **Shape-Specific Fields:** The settings are content specific, meaning only the related content will show depending on the type selected.

