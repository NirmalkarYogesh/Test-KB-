import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Test-KB-/',
    component: ComponentCreator('/Test-KB-/', 'd9d'),
    routes: [
      {
        path: '/Test-KB-/connectors/',
        component: ComponentCreator('/Test-KB-/connectors/', '7b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/data-ingestion/syslog',
        component: ComponentCreator('/Test-KB-/data-ingestion/syslog', 'a5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/device-integration/',
        component: ComponentCreator('/Test-KB-/device-integration/', '195'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/dql-language/overview',
        component: ComponentCreator('/Test-KB-/dql-language/overview', '104'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/hunting-with-workbooks/getting-started/create-workbook',
        component: ComponentCreator('/Test-KB-/hunting-with-workbooks/getting-started/create-workbook', 'd40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/operations/collection-status',
        component: ComponentCreator('/Test-KB-/operations/collection-status', '94c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/security-monitoring/signal-suppression',
        component: ComponentCreator('/Test-KB-/security-monitoring/signal-suppression', '0bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/user-management/',
        component: ComponentCreator('/Test-KB-/user-management/', '2ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/user-management/authentication',
        component: ComponentCreator('/Test-KB-/user-management/authentication', 'cde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Test-KB-/user-management/tenant-management',
        component: ComponentCreator('/Test-KB-/user-management/tenant-management', 'd4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
