// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Base de datos de conocimiento OCIAL',
  tagline: 'ISPP 2023-2024 GRUPO 2',
  url: 'https://ocial.es',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [require.resolve('docusaurus-lunr-search')],
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Base de datos de conocimiento OCIAL',
        logo: {
          alt: 'Ocial Logo',
          src: 'img/Ocial_Blue.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Feedback/intro-feedback',
            position: 'left',
            label: 'Feedback',
          },
          {to: 'docs/actas/intro-actas', label: 'Actas', position: 'left'},
          {to: 'docs/Documentación actual/intro-doc-actual', label: 'Documentación actual', position: 'left'},
          {to: 'docs/Entregables anteriores/intro-entregables-anteriores', label: 'Entregas anteriores', position: 'left'},
          {
            href: 'https://github.com/ispp-2324-ocial/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Feedback',
                to: 'docs/Feedback/intro-feedback/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          /**{
            title: 'More',
            items: [
              {
                label: 'Actas',
                to: 'docs/actas/intro-actas',
              },
              {
                label: 'Landing Page',
                href: 'https://ocial.es',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ISPP 23/24 Grupo2. Hecho con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
