export default {
  name: 'portfolioItem',
  type: 'document',
  title: 'Portfolio Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    },
    {
      name: 'hightlight',
      type: 'boolean',
      title: 'Highlight'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
