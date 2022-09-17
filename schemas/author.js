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
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    }
  ]
}