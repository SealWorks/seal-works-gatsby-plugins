module.exports = {
  file: 'src/pages/quem-somos.md',
  label: 'Quem somos',
  name: 'about',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'pages/simple',
    },
    {
      label: 'Title',
      name: 'title',
      default: 'Sobre',
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
