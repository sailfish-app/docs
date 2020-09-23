module.exports = {
  title: "Sailfish",
  tagline: "Open financial services",
  url: "https://docs.sailfish.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/sailfish.png",
  organizationName: "sailfish", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: "Sailfish",
      logo: {
        alt: "Sailfish",
        src: "img/sailfish_logo_dark.svg",
        srcDark: "img/sailfish_logo_light.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "/",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/sailfish-app/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Overview",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/7Wbqucc",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Sailfishapp",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/@sailfishapp",
            },
            {
              label: "GitHub",
              href: "https://github.com/sailfish-app/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sailfish`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sailfish-app/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
