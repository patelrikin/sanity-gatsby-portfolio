export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d16d56ed90d5ad3b62b71a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-b5mjb2yr',
                  apiId: '2fded057-8691-466a-a47a-7ac82df6c509'
                },
                {
                  buildHookId: '5d16d56e89dd0f21e733539f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9n9k8oc7',
                  apiId: 'cb783554-1bb9-4a5b-83fa-8674e2229af8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patelrikin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9n9k8oc7.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
