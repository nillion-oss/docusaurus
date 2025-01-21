module.exports = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'API',
    defaultStyle: true,
  },
  'api/overview',
  {
    type: 'category',
    label: 'NilDB API',
    items: [
      'api/nildb/overview',
      {
        type: 'category',
        label: 'System',
        items: [
          'api/nildb/get-health-status', // Health
          'api/nildb/get-node-details', // About
          'api/nildb/retrieve-an-organizations-account-details', // Accounts
        ],
      },
      {
        type: 'category',
        label: 'Data',
        items: [
          'api/nildb/upload-data-to-the-specified-schema-collection', // Upload /
          'api/nildb/retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter', // Read
          'api/nildb/retrieve-recently-added-documents-from-a-schema-collection', // Tail
          'api/nildb/update-documents-within-a-schema-collection-that-match-the-given-filter', // Update
          'api/nildb/delete-data-records-that-match-a-given-filter', // Detail
          'api/nildb/remove-all-documents-in-a-schema-collection', // Flush
          'api/nildb/list-the-organizations-schemas', // List Schemas
        ],
      },
      {
        type: 'category',
        label: 'Queries',
        items: [
          'api/nildb/list-the-organizations-queries', // List
          'api/nildb/execute-the-specified-query', // Execute
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'NilAI API',
    items: [
      'api/nilai/overview',
      'api/nilai/chat-completion-v-1-chat-completions-post',
      'api/nilai/get-attestation-v-1-attestation-report-get',
      'api/nilai/get-models-v-1-models-get',
      'api/nilai/get-usage-v-1-usage-get',
      'api/nilai/health-check-v-1-health-get',
    ],
  },
];
