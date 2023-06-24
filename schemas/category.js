export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'key',
      type: 'string',
      title: 'Key'
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      options: {
        list: [
          { title: 'Cat', value: 'cat' },
          { title: 'Design', value: 'design' },
        ],
      },
    },
    {
      name: 'english',
      type: 'string',
      title: 'English Name'
    },
  ]
}