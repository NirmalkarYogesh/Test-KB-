/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'connectors/README',
      ],
    },
    {
      type: 'category',
      label: 'Data Ingestion',
      items: [
        'data-ingestion/syslog',
      ],
    },
    {
      type: 'category',
      label: 'Device Integration',
      items: [
        'device-integration/README',
      ],
    },
    {
      type: 'category',
      label: 'DQL Language',
      items: [
        'dql-language/overview',
      ],
    },
    {
      type: 'category',
      label: 'Hunting with Workbooks',
      items: [
        'hunting-with-workbooks/getting-started/create-workbook',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/collection-status',
      ],
    },
    {
      type: 'category',
      label: 'Security Monitoring',
      items: [
        'security-monitoring/signal-suppression',
      ],
    },
    {
      type: 'category',
      label: 'User Management',
      items: [
        'user-management/authentication',
        'user-management/user-management',
        'user-management/tenant-management',
      ],
    },
  ],
};

module.exports = sidebars; 