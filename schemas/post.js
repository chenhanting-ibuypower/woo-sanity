export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [
        { type: 'category' },
      ]
    }
  ]
}