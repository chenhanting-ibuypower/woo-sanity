export default {
  name: "configuration",
  type: "document",
  title: "Configuration",
  fields: [
    {
      name: "brand",
      type: "string",
      title: "Brand",
    },
    {
      title: "Homepage LOGO",
      name: "homepageLogo",
      type: "image",
    },
    {
      title: "Homepage Cover",
      name: "homepageCover",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [
        {
          type: 'block'
        },
      ]
    },
    {
      title: "Global Description",
      name: "globalDescription",
      type: "array",
      of: [
        {
          type: 'block'
        },
      ]
    },
  ],
};
