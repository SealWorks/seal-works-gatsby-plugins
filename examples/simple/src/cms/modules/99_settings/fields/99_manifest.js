module.exports = {
  file: 'src/content/settings/manifest.json',
  label: 'Manifest',
  name: 'manifest',
  fields: [
    { label: 'Name', name: 'name', widget: 'string' },
    { label: 'Short Name', name: 'short_name', widget: 'string' },
    { label: 'Start URL', name: 'start_url', widget: 'string' },
    {
      label: 'Background Color',
      name: 'background_color',
      widget: 'string',
    },
    { label: 'Theme Color', name: 'theme_color', widget: 'string' },
    {
      label: 'Orientation',
      name: 'orientation',
      widget: 'hidden',
      default: 'portrait',
    },
    {
      label: 'Display',
      name: 'display',
      widget: 'hidden',
      default: 'standalone',
    },
    { label: 'Icon', name: 'icon', widget: 'image' },
  ],
}
