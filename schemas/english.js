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
    }
  ]
}