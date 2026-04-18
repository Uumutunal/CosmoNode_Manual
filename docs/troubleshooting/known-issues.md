# Known Limitations

This page lists current limitations and known issues in CosmoNode.  
These issues do not usually affect graph results but may affect the editor experience.

If you encounter a problem not listed here, please report it on the project's GitHub repository.

---

- **Node Dropdown UI Sometimes Stops Working**  
  Dropdown menus on nodes may occasionally stop responding or fail to open.

  **Workaround:** Close the graph window and reopen it.


---

- **Index Gizmos Can Freeze Unity on Dense Meshes**  
  Enabling **Index Gizmos** on very dense meshes can cause Unity to freeze temporarily because a very large number of indices are drawn.

  **Recommendation:** Avoid enabling index gizmos on meshes with very high element counts.

---

- **Multiple Ghosted Nodes with Curve Nodes**  
  Normally only **one node** can be ghosted (previewed) at a time.

  With **curve nodes**, it is possible for a **curve node and a regular node** to be ghosted simultaneously.

---

- **Spreadsheet Not Updating After Store Attribute Value Change**  
  When the **Value** input on a **Store Attribute** node changes, the update may not immediately appear in the **Spreadsheet**.

  **Workaround:** Press the **Render** button on the node to refresh the spreadsheet view.