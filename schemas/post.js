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
      title: "Description",
      name: "description",
      type: "array",
      of: [
        {
          type: 'block'
        },
        {
          type: "image",
        },
      ]
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image URL'
    },
    {
      title: "Image",
      name: "sanityImage",
      type: "image",
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