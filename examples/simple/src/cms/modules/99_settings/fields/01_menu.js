module.exports = {
  file: './src/content/settings/menu.json',
  label: 'Menu',
  name: 'menu',
  fields: [
    {
      label: 'Links',
      name: 'links',
      widget: 'list',
      fields: [
        { label: 'Label', name: 'label', widget: 'string' },
        { label: 'URL', name: 'url', widget: 'string' },
      ],
    },
  ],
}
