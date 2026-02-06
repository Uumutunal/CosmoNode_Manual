---
sidebar_position: 2
---

# Installation

## Requirements

CosmoNode is a **Unity Editor extension** and requires the following:

- **Unity** (recommended: latest LTS)
- **xNode** (graph framework dependency)

---

## Installation Steps

### 1. Import CosmoNode

1. Download the **CosmoNode `.unitypackage`** file.
2. In Unity, open your project.
3. Go to **Assets → Import Package → Custom Package…**
4. Select the CosmoNode package and import all files.

---

### 2. Install xNode (Required)

CosmoNode depends on **xNode** for its node graph system.

1. Download xNode from GitHub:  
   https://github.com/Uumutunal/xNode.git
2. Copy the `xNode` folder into your Unity project’s `Assets` directory  
   **or**
3. Add it via Unity Package Manager (Git URL).

> xNode must be present in the project for CosmoNode to function correctly.

---

## After Installation

Once installed:

- CosmoNode tools will be available inside the Unity Editor
- You can create and edit node graphs immediately
- No additional setup is required

If you encounter compilation errors, verify that **xNode is correctly imported** and that there are no duplicate versions in the project.

---

## Compatibility

- Tested with **Unity 2021 LTS and newer**
- **Platforms**: Works in the Unity Editor and produces standard Unity meshes
- **Dependencies**:
  - **xNode** (required)
- **Render Pipelines**: Built-in, URP, and HDRP
