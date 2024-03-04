/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: 'autogenerated', dirName: '.' },
    {
      type: 'category',
      label: 'Inspiration projects',
      items: [
        {
          type: 'link',
          label: 'MUI color input',
          href: 'https://viclafouch.github.io/mui-color-input/'
        },
        {
          type: 'link',
          label: 'MUI tel input',
          href: 'https://viclafouch.github.io/mui-tel-input/'
        },
        {
          type: 'link',
          label: 'MUI chips input',
          href: 'https://viclafouch.github.io/mui-chips-input/'
        },
        {
          type: 'link',
          label: 'MUI OTP input',
          href: 'https://viclafouch.github.io/mui-otp-input/'
        }
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}

module.exports = sidebars
