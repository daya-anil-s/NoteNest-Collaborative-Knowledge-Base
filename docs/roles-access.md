# NoteNest – Roles & Access Control (RBAC)

This document explains how **roles and permissions** work in NoteNest.
It helps contributors understand **who can do what** inside the application.

---

## What is Role-Based Access Control (RBAC)?

RBAC is a system where:
- Users are assigned **roles**
- Roles define **permissions**
- Permissions control actions

This is a common pattern used in real-world applications.

---

## Roles in NoteNest

NoteNest supports the following roles within a workspace:

### 🟢 Admin
**Description:** Workspace owner or manager

**Permissions:**
- Create, edit, and delete notes
- Manage users in the workspace
- Assign or change roles
- Access all workspace content

---

### 🟡 Editor
**Description:** Contributor who creates and edits content

**Permissions:**
- Create new notes
- Edit existing notes
- View all accessible notes

**Restrictions:**
- Cannot manage users
- Cannot change roles

---

### 🔵 Viewer
**Description:** Read-only user

**Permissions:**
- View notes
- Search notes

**Restrictions:**
- Cannot create or edit notes
- Cannot manage users

---

## Role Assignment

- Roles are assigned **per workspace**
- A user can have different roles in different workspaces
- Role checks are enforced by the backend

Example:
- User A → Admin in Workspace X
- User A → Viewer in Workspace Y

---

## How Roles Affect the UI

The frontend should:
- Show edit options only to Admins and Editors
- Hide or disable actions for Viewers
- Display role-based navigation options

The backend is the **final authority** on permissions.

---

## Backend Enforcement (Important)

Even if the UI hides a button:
- The backend must still validate permissions

This prevents:
- Unauthorized access
- Security loopholes

---

## Role-Based Contribution Areas

Contributors can help by:
- Implementing role-check middleware
- Improving permission logic
- Updating UI based on roles
- Writing documentation for RBAC
- Adding tests for access control

---

## Why RBAC Matters for OSQ

RBAC teaches:
- Security fundamentals
- Real-world backend logic
- Clean separation of responsibilities

It is a **high-value learning area**.

---

## What Roles Do NOT Control

Roles do NOT:
- Control authentication (login)
- Control database structure directly
- Replace backend validation

---

## Final Note

Great documentation is just as important as great code.

By following these guidelines, you're helping make NoteNest more accessible, educational, and contributor-friendly. Every improvement to our docs helps someone learn and contribute.

Thank you for caring about documentation! 🚀📝