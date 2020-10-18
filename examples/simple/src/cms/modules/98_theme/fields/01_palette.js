module.exports = {
  label: 'Palette Color',
  name: 'palette',
  file: 'content/theme/palette.json',
  fields: [
    { label: 'Brand', name: 'brand', widget: 'list', required: false },
    { label: 'Primary [a]', name: 'a', widget: 'list', required: false },
    { label: 'Secondary [b]', name: 'b', widget: 'list', required: false },
    { label: 'Tertiary [c]', name: 'c', widget: 'list', required: false },
    { label: 'Fourth [d]', name: 'd', widget: 'list', required: false },
    { label: 'Fifth [e]', name: 'e', widget: 'list', required: false },
    { label: 'Header [h]', name: 'h', widget: 'list', required: false },
    { label: 'Footer [f]', name: 'f', widget: 'list', required: false },
    { label: 'Extra', name: 'extra', widget: 'list', required: false },
  ],
}
