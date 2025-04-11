/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Device Integration',
      items: [
        'device-integration/README',
        {
          type: 'category',
          label: 'Cisco',
          items: [
            'device-integration/cisco/asa',
            'device-integration/cisco/firepower',
            'device-integration/cisco/network-os',
          ],
        },
        {
          type: 'category',
          label: 'Fortinet',
          items: [
            'device-integration/fortinet/fortigate',
            'device-integration/fortinet/fortimanager',
            'device-integration/fortinet/fortiweb',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connectors',
      items: [
        'connectors/README',
        {
          type: 'category',
          label: 'Cloud Services',
          items: [
            'connectors/aws/cloudtrail',
            'connectors/azure/event-hub',
            'connectors/gcp/pubsub',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Ingestion',
      items: [
        'data-ingestion/syslog',
        'data-ingestion/windows-event-logs',
        {
          type: 'category',
          label: 'Extractors',
          items: [
            'data-ingestion/extractors/custom',
            'data-ingestion/extractors/validator',
            'data-ingestion/extractors/guidelines',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Hunting with Workbooks',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'hunting-with-workbooks/getting-started/create-workbook',
            'hunting-with-workbooks/getting-started/view-workbook',
            'hunting-with-workbooks/getting-started/workbook-functions',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'DQL Language',
      items: [
        'dql-language/overview',
        'dql-language/basic-syntax',
        'dql-language/cheatsheet',
        {
          type: 'category',
          label: 'Pipes',
          items: [
            'dql-language/pipes/duration',
            'dql-language/pipes/groupby',
            'dql-language/pipes/limit',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Security Monitoring',
      items: [
        'security-monitoring/signal-suppression',
        'security-monitoring/alert-analysis',
        {
          type: 'category',
          label: 'Investigate Signals',
          items: [
            'security-monitoring/investigate-signals/add-signals',
            'security-monitoring/investigate-signals/view-signals',
            'security-monitoring/investigate-signals/signal-filters',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/collection-status',
        'operations/event-stores',
        'operations/geo-enrichment',
        'operations/authentication',
      ],
    },
    {
      type: 'category',
      label: 'User Management',
      items: [
        'user-management/organization',
        'user-management/tenants',
        'user-management/access-control',
      ],
    },
    {
      type: 'category',
      label: 'Automation',
      items: [
        'automation/overview',
        {
          type: 'category',
          label: 'Supported Automation',
          items: [
            'automation/supported/active-directory',
            'automation/supported/jira',
            'automation/supported/servicenow',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/connectors',
        'troubleshooting/automations',
        'troubleshooting/validations',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/2025-03-05',
        'release-notes/2025-01-29',
        'release-notes/2024-12-30',
      ],
    },
    {
      type: 'category',
      label: 'Legal & Compliance',
      items: [
        'legal-compliance/license-agreement',
        'legal-compliance/privacy-policy',
      ],
    },
  ],
};

module.exports = sidebars; 