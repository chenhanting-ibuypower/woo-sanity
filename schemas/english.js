export default {
  name: 'english',
  type: 'document',
  title: 'English',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Image Tiles',
      name: 'tiles',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Sanity Tiles',
      name: 'sanityTiles',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, options) => `__${doc.title}__`
      }
    },
  ]
}