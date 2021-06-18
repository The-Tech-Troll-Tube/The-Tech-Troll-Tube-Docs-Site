/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The Tech Troll Tube',
  tagline: 'Troll The Tech!',
  //url: 'https://your-docusaurus-test-site.com',
  url: 'https://the-tech-troll-tube.github.io/The-Tech-Troll-Tube-Docs-Site/docs/tutorial-basics/create-a-page/',
//   baseUrl: '/',
  baseUrl: '/The-Tech-Troll-Tube-Docs-Site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/TheTechTrollTube-R.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{26c8}',
        lightIcon: '\u{1f324}',
      },
    },      
    navbar: {
//      hideOnScroll: true,
//      style: 'primary', // primary || dark      
      title: 'The Tech Troll Tube',
      logo: {
        alt: 'The Tech Troll Tube Logo',
//        src: 'img/logo.svg',
        src: 'img/TheTechTrollTube-R.png',
        srcDark: 'img/TheTechTrollTube-D.png',  
      },
    //   items: [
    //     {
    //       type: 'doc',
    //       docId: 'intro',
    //       position: 'left',
    //       label: 'Tutorial',
    //     },
    //     {to: '/blog', label: 'Blog', position: 'left'},
    //     {
    //       href: 'https://github.com/facebook/docusaurus',
    //       label: 'GitHub',
    //       position: 'right',
    //     },
    //   ],
    // },
    items: [
      {
        label: 'TECH-VIDEOS',
        position: 'right', // or 'left'
        items: [
          // {
          //   label: 'HOME',
          //   to: '/',
          // },
           {
             label: 'Introduction ➤',
              to: '/docs/intro',             
           },
            {
              label: 'Products[LINK CHECK] ➤',
              href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA',
            },
          {
            label: ' Cloud ➤',
            to: '/docs/intro',
          },
          {
            label: ' site ➤',
            to: '/docs/intro',
          },
          {
            label: ' site ➤',
            to: '/docs/intro',
          },
          {
            label: 'TTT Products ➤',
            to: '/docs/intro',
          },
          // ... more items
        ],
      },
      {
        label: 'GAME-VIDEOS',
        position: 'right', // or 'left'
        items: [
          {
            label: 'HOME',
            to: '/',
          },
           {
             label: 'Introduction ➤',
              to: '/docs/intro',          
           },
            {
              label: 'Products ➤',
              to: '/',
            },
          {
            label: ' Cloud ➤',
            to: '/docs/intro',
          },
          {
            label: ' site ➤',
            to: '/docs/intro',
          },
          {
            label: ' site ➤',
            to: '/docs/intro',
          },
          {
            label: 'TTT Products ➤',
            to: '/docs/intro',
          },
          // ... more items
        ],
      },
       // {to: 'docs/introduction', label: 'INTRODUCTION TO DOCUMENTS ➤', position: 'right'},
       // {to: 'docs/download', label: 'Download', position: 'right'},
       {href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA', label: 'NEWLINKS', position: 'right'},
       {href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA', label: 'TTT', position: 'right'},

//        {to: 'blog', label: 'Blog', position: 'left'},
      {
        href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA?sub_confirmation=1',
        label: 'SUBSCRIBE TO THIS CHANNEL',
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
              label: 'Tutorial',
              to: '/docs/intro',
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
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
//      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      copyright: `Copyright © ${new Date().getFullYear()} The Tech Troll Tube, Built with Docusaurus.`,

    },
  },
  plugins: ['./PreventTrailingSlash/PreventTrailingSlashPlugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
//          routeBasePath: '/', /////////////////////////////////used in docs only mode          
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        //////////////////////////////////////////////////////////////////////////////////////////// AS OF 26-05-2021 2.0.0-beta.0 this is not working !
//         sitemap:{
//         trailingSlash: false
//         },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
