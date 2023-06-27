/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The Tech Troll Tube',
  tagline: 'Troll The Tech!',
  //url: 'https://your-docusaurus-test-site.com',
  // url: 'https://the-tech-troll-tube.github.io/The-Tech-Troll-Tube-Docs-Site/docs/tutorial-basics/create-a-page/',
  url: 'https://the-tech-troll-tube.github.io',
//   baseUrl: '/',
  baseUrl: '/The-Tech-Troll-Tube-Docs-Site/',
  //onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/TheTechTrollTube-R.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    /////////////////ANOUNCEMENT BAR ///////////////////////
    announcementBar: {
      id: 'banner', // Any value that will identify this message.
      content:
       // 'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
       'You can now download Windows 11 Official Compactibility Check Tool Under Download Links',
       backgroundColor: '#091E42', // Defaults to `#fff`.
      textColor: '#fafbfc', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    ////////////////////////////////////////////////////////
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
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
        label: 'TECH-VIDEOS ',
        position: 'right', // or 'left'
        items: [
          // {
          //   label: 'HOME',
          //   to: '/',
          // },
          {
            label: 'Unboxing iPad Magic Keyboard ! First Look !! ',
            href: 'https://youtu.be/36_F5biyU5s',          
          },
          {
            label: 'Windows 11 is a Free Upgrade, here is why !! ',
            href: 'https://www.youtube.com/watch?v=NSSH8qDEuJM',          
          },
           {
             label: 'Experience Windows 11 in Just 3 Steps !! ',
             href: 'https://www.youtube.com/watch?v=JbH0J0XypOk',          
           },
            {
              label: 'Install Windows 11 and Activate it on VMware ',
              href: 'https://www.youtube.com/watch?v=qu5xOve-v8g',
            },
            {
              label: 'WINDOWS 11 Looks, Feel and Features ',
              href: 'https://www.youtube.com/watch?v=TDlmrAh5SAE',
            },
          
            {
              label: 'Install MAC OS X Catalina 10.15.6 on Windows PC [VMware] ',
              href: 'https://youtu.be/hCEvzEvUMuA',
            },


          // ... more items
        ],
      },     
      {
        label: 'GAME-VIDEOS ',
        position: 'right', // or 'left'
        items: [
           {
             label: 'Install COD Mobile on PC ',
             href: 'https://www.youtube.com/watch?v=1RF6C5WP6d4',          
           },
            {
              label: 'ZERO DEATH !! [0 DEATH] Call Of Duty Team Death Match !! ',
              href: 'https://youtu.be/J7Z1WEggAxw', 
            },
          {
            label: ' GTA 5 | MICHAEL TOURS TO VICE CITY | GTA V | GTA MODS ',
            href: 'https://youtu.be/gyjfoWE8uD0', 
          },
          // ... more items
        ],
      },
      {
        label: 'DOWNLOAD LINKS ',
        position: 'right', // or 'left'
        items: [
          {
            label: 'Download Windows 11 Wallpapers ',
            href: 'https://github.com/The-Tech-Troll-Tube/The-Tech-Troll-Tube-Docs-Site/raw/main/static/img/Windows-11-Wallpapers.zip',          
          },
          {
            label: 'Download Windows 10/11 Activator Toolkit ',
            href: 'https://github.com/The-Tech-Troll-Tube/Windows-11-Dev/archive/refs/heads/main.zip',
          },
          {
            label: 'Download Windows 11 Official Compactibility Check Tool ',
            href: 'https://github.com/The-Tech-Troll-Tube/The-Tech-Troll-Tube-Docs-Site/raw/main/static/img/WindowsPCHealthCheckSetup.msi',          
          },
          // ... more items
        ],
      }, 
       // {to: 'docs/introduction', label: 'INTRODUCTION TO DOCUMENTS ➤', position: 'right'},
       // {to: 'docs/download', label: 'Download', position: 'right'},
       //{href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA', label: 'NEWLINKS', position: 'right'},
       //{href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA', label: 'TTT', position: 'right'},

//        {to: 'blog', label: 'Blog', position: 'left'},
      {
        label: 'SUBSCRIBE ',
        href: 'https://www.youtube.com/channel/UCU0XJuh2J_NwMwoFETrM_UA?sub_confirmation=1', 
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
              to: '/docs/welcome',
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
      copyright: `Copyright © ${new Date().getFullYear()} The Tech Troll Tube YouTube Channel.`,

    },
  },
  plugins: ['./PreventTrailingSlash/PreventTrailingSlashPlugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', /////////////////////////////////used in docs only mode          
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
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