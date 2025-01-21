// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import 'dotenv/config';
// const { apiSidebar } = require('./sidebar-api');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nillion Builder Docs',
  tagline:
    'Nillion is a secure computation network that decentralizes trust for high value data',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  // Set the production url of your site here
  url: 'https://docs.nillion.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'ignore',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: '/js/piwik.js',
      async: false,
    },
    {
      src: 'https://tag.safary.club/stag-0.1.11.js',
      async: true,
      'data-name': 'safary-sdk',
      'data-product-id': 'prd_rbwHhyTvxR',
      integrity: 'sha256-FcvJgRCaJFszFBKv8MGIbUcmHlVuHp7LX8zGgjfvvGs=',
      crossOrigin: 'anonymous',
    },
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '94defefb-94a4-4706-9ec8-7a7333f484c1',
    },
    {
      src: 'https://plausible.io/js/script.tagged-events.js',
      defer: true,
      'data-domain': 'docs.nillion.com',
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'AaBcABcNNZ4eaHnfCCOfrhzAWLWI7IpKLePjkSBMGp4',
      },
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/ApiItem',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/NillionNetwork/nillion-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
    'docusaurus-theme-github-codeblock',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      devServer: {
        proxy: {
          '/api': {
            target: 'https://nildb-a50d.nillion.network',
            changeOrigin: true,
            pathRewrite: {
              '^/api': '',
            },
          },
        },
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      image: 'img/nillion-banner.jpeg',
      navbar: {
        logo: {
          alt: 'Nillion logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'what-is-nillion',
            label: 'Learn',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'quickstart',
            label: 'Build',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'api/overview',
            label: 'API',
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'community-and-support',
            label: 'Community',
          },

          {
            href: 'https://github.com/NillionNetwork',
            className: 'header-github',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
        showRunmeLink: false,
        runmeLinkLabel: 'Checkout via Runme',
      },
      algolia: {
        appId: 'I1AVSJUXEA',
        apiKey: '54efdeb0639df4a13b0e58e37360efe9', // search only - safe to share
        indexName: 'nillion_docs',
        searchPagePasitemapth: 'search',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        links: [
          {
            title: 'Community',
            items: [
              {
                type: 'link',
                label: 'Discord',
                href: 'https://discord.com/invite/nillionnetwork',
              },
              {
                type: 'link',
                label: 'X (formerly Twitter)',
                href: 'https://x.com/nillionnetwork',
              },
            ],
          },
          {
            title: 'Builders',
            items: [
              {
                type: 'link',
                label: 'Github Discussions',
                href: 'https://github.com/orgs/NillionNetwork/discussions',
              },
              {
                type: 'link',
                label: 'Builder Bounties',
                href: 'https://github.com/NillionNetwork/builder-bounties',
              },
              {
                type: 'link',
                label: 'Report a Bug',
                href: 'https://github.com/orgs/NillionNetwork/discussions/categories/bugs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                type: 'link',
                label: 'Website',
                href: 'https://nillion.com',
              },
              {
                type: 'link',
                label: 'Blog',
                href: 'https://nillion.com/news',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Nillion. All Rights Reserved.`,
      },
    }),
  plugins: [
    [
      'docusaurus-pushfeedback',
      {
        project: '0zdbombk5w',
        modalTitle: 'Nillion Docs Feedback',
        messagePlaceholder:
          'Let us know how we can improve this page of the Nillion docs.',
        hideEmail: true,
        sendButtonText: 'Send to the Nillion team',
        buttonStyle: 'dark',
        hideScreenshotButton: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          nildbapi: {
            specPath: 'apispec/nildb-api.yaml',
            outputDir: 'docs/api/nildb',
            sidebarOptions: { groupPathsBy: 'tag' },
          },
          nilaiapi: {
            specPath: 'apispec/nilai-api.yaml',
            outputDir: 'docs/api/nilai',
            sidebarOptions: { groupPathsBy: 'tag' },
          },
        },
      },
    ],
  ],
};

export default config;
