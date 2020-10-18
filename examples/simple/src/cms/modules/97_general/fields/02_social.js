module.exports = {
  file: 'src/content/general/social.json',
  label: 'Social Network',
  name: 'social',
  fields: [
    {
      label: 'Social Networks',
      name: 'networks',
      widget: 'list',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'select',
          options: ['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'],
        },
        { label: 'Link', name: 'link', widget: 'string' },
      ],
    },
  ],
}
