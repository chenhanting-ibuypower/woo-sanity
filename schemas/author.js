export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt'
    },
    {
      name: 'birth_year',
      type: 'number',
      title: 'Birth Year'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: (doc, options) => `__${doc.name}__`
      }
    },
    {
      title: 'Masterpieces',
      name: 'masterpieces',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    },
    {
      title: 'Site',
      name: 'site',
      type: 'string',
    },
  ]
}