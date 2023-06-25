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
      title: "Cover Image",
      name: "coverImage",
      type: "image",
    },
    {
      title: "Images",
      name: "Images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ]
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