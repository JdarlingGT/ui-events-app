import { type Registry } from "shadcn/schema"

export const internal: Registry["items"] = [
  {
    name: "sidebar-demo",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-header",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-header.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-footer",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-footer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-group.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-collapsible",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-group-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-group-action",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-group-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-menu.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-action",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-menu-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-sub",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-menu-sub.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-collapsible",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-menu-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-menu-badge",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-menu-badge.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-rsc",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-rsc.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "sidebar-controlled",
    type: "registry:internal",
    files: [
      {
        path: "internal/sidebar-controlled.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "v0-sidebar-01",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "internal/sidebar-01.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "v0-sidebar-02",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "internal/sidebar-02.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-03",
    type: "registry:internal",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "internal/sidebar-03.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-04",
    type: "registry:internal",
    registryDependencies: ["sidebar", "breadcrumb", "separator"],
    files: [
      {
        path: "internal/sidebar-04.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-05",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "collapsible",
    ],
    files: [
      {
        path: "internal/sidebar-05.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-06",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "card",
      "dropdown-menu",
    ],
    files: [
      {
        path: "internal/sidebar-06.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-07",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "internal/sidebar-07.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-08",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "internal/sidebar-08.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-09",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "switch",
    ],
    files: [
      {
        path: "internal/sidebar-09.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-10",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
    ],
    files: [
      {
        path: "internal/sidebar-10.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-11",
    type: "registry:internal",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "collapsible"],
    files: [
      {
        path: "internal/sidebar-11.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-12",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "calendar",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "internal/sidebar-12.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-13",
    type: "registry:internal",
    registryDependencies: ["sidebar", "breadcrumb", "button", "dialog"],
    files: [
      {
        path: "internal/sidebar-13.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-14",
    type: "registry:internal",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "internal/sidebar-14.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-sidebar-15",
    type: "registry:internal",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
      "calendar",
      "avatar",
    ],
    files: [
      {
        path: "internal/sidebar-15.tsx",
        type: "registry:internal",
      },
    ],
  },
  {
    name: "v0-login-01",
    type: "registry:internal",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "internal/login-01.tsx",
        type: "registry:internal",
      },
    ],
  },
]
