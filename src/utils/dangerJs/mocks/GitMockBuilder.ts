export const gitMockBuilder = () => {
  return {
    base: 'string',
    head: 'string',
    modified_files: ['string'],
    created_files: ['string'],
    deleted_files: ['string'],
    commits: [
      {
        sha: 'string',
        parents: ['string'],
        author: {
          name: 'string',
          email: 'string',
          date: 'string'
        },
        committer: {
          name: 'string',
          email: 'string',
          date: 'string'
        },
        message: 'string',
        tree: {
          sha: 'string',
          url: 'string'
        },
        url: 'string'
      }

    ]
  }
}
