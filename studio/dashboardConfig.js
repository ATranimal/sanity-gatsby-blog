export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5739b6d3c14251ec851fa4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mi49vj1t',
                  apiId: '7f70fa9e-9812-4a35-af93-f6951391935b'
                },
                {
                  buildHookId: '5d5739b7e56042242a2e3745',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m214fusy',
                  apiId: '45ff8386-8368-4748-be99-054abf6ab7af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ATranimal/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m214fusy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
