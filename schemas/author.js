export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'First Name (名)',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name (姓)',
    },
    {
      name: 'nickname',
      type: 'string',
      title: 'Nick Name',
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