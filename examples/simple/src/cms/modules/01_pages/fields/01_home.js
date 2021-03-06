module.exports = {
  file: 'src/pages/index.md',
  label: 'Home',
  name: 'home',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'pages/home',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'select',
      options: ['Home Page'],
      default: ['Home Page'],
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
    },
    {
      label: 'Metadata',
      name: 'metadata',
      widget: 'object',
      fields: [
        {
          label: 'Updated Date',
          name: 'dateModified',
          widget: 'datetime',
        },
        {
          label: 'Cover',
          name: 'cover',
          widget: 'image',
          default: '/img/ogimage.png',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          pattern: [
            '.{10,155}',
            'Must have at least 10 characters and not more than 155',
          ],
        },
      ],
    },
  ],
}
