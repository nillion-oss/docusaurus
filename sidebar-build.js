const buildSidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Build',
    defaultStyle: true,
  },
  {
    type: 'doc',
    label: 'Getting Started',
    id: 'quickstart',
  },
  {
    type: 'category',
    label: 'SecretVault & SecretDataAnalytics',
    items: [
      {
        type: 'doc',
        label: 'Overview',
        id: 'build/secretVault-secretDataAnalytics/overview',
      },
      'build/secret-vault',
      'build/secretVault-secretDataAnalytics/access',
      'build/secretVault-secretDataAnalytics/generate-tokens',
      'build/secretVault-secretDataAnalytics/encryption',
      'build/secretVault-secretDataAnalytics/create-schema',
      'build/secretVault-secretDataAnalytics/upload-retrieve',
      'build/secretVault-secretDataAnalytics/create-query',
      'build/secretVault-secretDataAnalytics/query',
      {
        type: 'doc',
        label: 'API Reference',
        id: 'api/nildb/overview',
      },
      {
        type: 'link',
        label: 'Examples',
        href: 'https://github.com/NillionNetwork/blind-module-examples/tree/main/nildb',
      },
    ],
  },
  {
    type: 'category',
    label: 'SecretLLM',
    link: {
      type: 'doc',
      id: 'build/secretLlm/overview',
    },
    items: [],
  },
  {
    type: 'category',
    label: 'SecretSigning',
    link: {
      type: 'doc',
      id: 'build/secretSigning/overview',
    },
    items: [],
  },
  'build/blind-modules',
  {
    type: 'doc',
    label: 'Evolution of nilVM',
    id: 'start-building',
  },
];

module.exports = {
  buildSidebar,
};
