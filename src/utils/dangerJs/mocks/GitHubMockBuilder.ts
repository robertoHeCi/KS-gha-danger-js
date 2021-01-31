import { GitHubJSONDSL } from 'danger'

export const gitHubMockBuilder = (): GitHubJSONDSL => {
  return {
    issue: {
      url: 'string',
      repository_url: 'string',
      labels_url: 'string',
      comments_url: 'string',
      events_url: 'string',
      html_url: 'string',
      id: 0,
      node_id: 'string',
      number: 0,
      title: 'string',
      user: {
        login: 'string',
        id: 0,
        node_id: 'string',
        avatar_url: 'string',
        gravatar_id: 'string',
        url: 'string',
        html_url: 'string',
        followers_url: 'string',
        following_url: 'string',
        gists_url: 'string',
        starred_url: 'string',
        subscriptions_url: 'string',
        organizations_url: 'string',
        repos_url: 'string',
        events_url: 'string',
        received_events_url: 'string',
        type: 'string',
        site_admin: false
      },
      labels: [
        {
          id: 0,
          url: 'string',
          name: 'string',
          color: 'string'
        }
      ],
      state: 'string',
      locked: false,
      assignee: null,
      assignees: [
        'string'
      ],
      milestone: null,
      comments: 0,
      created_at: 'string',
      updated_at: 'string',
      closed_at: null,
      author_association: 'string',
      active_lock_reason: null,
      pull_request: {
        url: 'string',
        html_url: 'string',
        diff_url: 'string',
        patch_url: 'string'
      },
      body: 'string',
      closed_by: null,
      performed_via_github_app: null
    },
    pr: {
      url: 'string',
      id: 0,
      node_id: 'string',
      html_url: 'string',
      diff_url: 'string',
      patch_url: 'string',
      issue_url: 'string',
      0: 0,
      state: 'string',
      locked: false,
      title: 'string',
      user: {
        login: 'string',
        id: 0,
        node_id: 'string',
        avatar_url: 'string',
        gravatar_id: 'string',
        url: 'string',
        html_url: 'string',
        followers_url: 'string',
        following_url: 'string',
        gists_url: 'string',
        starred_url: 'string',
        subscriptions_url: 'string',
        organizations_url: 'string',
        repos_url: 'string',
        events_url: 'string',
        received_events_url: 'string',
        type: 'string',
        site_admin: false
      },
      body: 'string',
      created_at: 'string',
      updated_at: 'string',
      closed_at: null,
      merged_at: null,
      merge_commit_sha: 'string',
      assignee: null,
      assignees: [
        'string'
      ],
      requested_reviewers: [
        'string'
      ],
      requested_teams: [
        'string'
      ],
      labels: [
        'string'
      ],
      milestone: null,
      draft: false,
      commits_url: 'string',
      review_comments_url: 'string',
      review_comment_url: 'string',
      comments_url: 'string',
      statuses_url: 'string',
      head: {
        label: 'string',
        ref: 'string',
        sha: 'string',
        user: {
          login: 'string',
          id: 0,
          node_id: 'string',
          avatar_url: 'string',
          gravatar_id: 'string',
          url: 'string',
          html_url: 'string',
          followers_url: 'string',
          following_url: 'string',
          gists_url: 'string',
          starred_url: 'string',
          subscriptions_url: 'string',
          organizations_url: 'string',
          repos_url: 'string',
          events_url: 'string',
          received_events_url: 'string',
          type: 'string',
          site_admin: false
        },
        repo: {
          id: 0,
          node_id: 'string',
          name: 'string',
          full_name: 'string',
          private: true,
          owner: {
            login: 'string',
            id: 0,
            node_id: 'string',
            avatar_url: 'string',
            gravatar_id: 'string',
            url: 'string',
            html_url: 'string',
            followers_url: 'string',
            following_url: 'string',
            gists_url: 'string',
            starred_url: 'string',
            subscriptions_url: 'string',
            organizations_url: 'string',
            repos_url: 'string',
            events_url: 'string',
            received_events_url: 'string',
            type: 'string',
            site_admin: false
          },
          html_url: 'string',
          description: null,
          fork: false,
          url: 'string',
          forks_url: 'string',
          keys_url: 'string',
          collaborators_url: 'string',
          teams_url: 'string',
          hooks_url: 'string',
          issue_events_url: 'string',
          events_url: 'string',
          assignees_url: 'string',
          branches_url: 'string',
          tags_url: 'string',
          blobs_url: 'string',
          git_tags_url: 'string',
          git_refs_url: 'string',
          trees_url: 'string',
          statuses_url: 'string',
          languages_url: 'string',
          stargazers_url: 'string',
          contributors_url: 'string',
          subscribers_url: 'string',
          subscription_url: 'string',
          commits_url: 'string',
          git_commits_url: 'string',
          comments_url: 'string',
          issue_comment_url: 'string',
          contents_url: 'string',
          compare_url: 'string',
          merges_url: 'string',
          archive_url: 'string',
          downloads_url: 'string',
          issues_url: 'string',
          pulls_url: 'string',
          milestones_url: 'string',
          notifications_url: 'string',
          labels_url: 'string',
          releases_url: 'string',
          deployments_url: 'string',
          created_at: 'string',
          updated_at: 'string',
          pushed_at: 'string',
          git_url: 'string',
          ssh_url: 'string',
          clone_url: 'string',
          svn_url: 'string',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'string',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'string'
        }
      },
      base: {
        label: 'string',
        ref: 'string',
        sha: 'string',
        user: {
          login: 'string',
          id: 0,
          node_id: 'string',
          avatar_url: 'string',
          gravatar_id: 'string',
          url: 'string',
          html_url: 'string',
          followers_url: 'string',
          following_url: 'string',
          gists_url: 'string',
          starred_url: 'string',
          subscriptions_url: 'string',
          organizations_url: 'string',
          repos_url: 'string',
          events_url: 'string',
          received_events_url: 'string',
          type: 'string',
          site_admin: false
        },
        repo: {
          id: 0,
          node_id: 'string',
          name: 'string',
          full_name: 'string',
          private: true,
          owner: {
            login: 'string',
            id: 0,
            node_id: 'string',
            avatar_url: 'string',
            gravatar_id: 'string',
            url: 'string',
            html_url: 'string',
            followers_url: 'string',
            following_url: 'string',
            gists_url: 'string',
            starred_url: 'string',
            subscriptions_url: 'string',
            organizations_url: 'string',
            repos_url: 'string',
            events_url: 'string',
            received_events_url: 'string',
            type: 'string',
            site_admin: false
          },
          html_url: 'string',
          description: null,
          fork: false,
          url: 'string',
          forks_url: 'string',
          keys_url: 'string',
          collaborators_url: 'string',
          teams_url: 'string',
          hooks_url: 'string',
          issue_events_url: 'string',
          events_url: 'string',
          assignees_url: 'string',
          branches_url: 'string',
          tags_url: 'string',
          blobs_url: 'string',
          git_tags_url: 'string',
          git_refs_url: 'string',
          trees_url: 'string',
          statuses_url: 'string',
          languages_url: 'string',
          stargazers_url: 'string',
          contributors_url: 'string',
          subscribers_url: 'string',
          subscription_url: 'string',
          commits_url: 'string',
          git_commits_url: 'string',
          comments_url: 'string',
          issue_comment_url: 'string',
          contents_url: 'string',
          compare_url: 'string',
          merges_url: 'string',
          archive_url: 'string',
          downloads_url: 'string',
          issues_url: 'string',
          pulls_url: 'string',
          milestones_url: 'string',
          notifications_url: 'string',
          labels_url: 'string',
          releases_url: 'string',
          deployments_url: 'string',
          created_at: 'string',
          updated_at: 'string',
          pushed_at: 'string',
          git_url: 'string',
          ssh_url: 'string',
          clone_url: 'string',
          svn_url: 'string',
          homepage: null,
          size: 0,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'string',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'string'
        }
      },
      _links: {
        self: {
          href: 'string'
        },
        html: {
          href: 'string'
        },
        issue: {
          href: 'string'
        },
        comments: {
          href: 'string'
        },
        review_comments: {
          href: 'string'
        },
        review_comment: {
          href: 'string'
        },
        commits: {
          href: 'string'
        },
        statuses: {
          href: 'string'
        }
      },
      author_association: 'string',
      active_lock_reason: null,
      merged: false,
      mergeable: true,
      rebaseable: true,
      mergeable_state: 'string',
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: false,
      commits: 0,
      additions: 0,
      deletions: 0,
      changed_files: 0
    },
    commits: [
      {
        sha: 'string',
        node_id: 'string',
        commit: {
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
          url: 'string',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'string',
            signature: null,
            payload: null
          }
        },
        url: 'string',
        html_url: 'string',
        comments_url: 'string',
        author: {
          login: 'string',
          id: 0,
          node_id: 'string',
          avatar_url: 'string',
          gravatar_id: 'string',
          url: 'string',
          html_url: 'string',
          followers_url: 'string',
          following_url: 'string',
          gists_url: 'string',
          starred_url: 'string',
          subscriptions_url: 'string',
          organizations_url: 'string',
          repos_url: 'string',
          events_url: 'string',
          received_events_url: 'string',
          type: 'string',
          site_admin: false
        },
        committer: {
          login: 'string',
          id: 0,
          node_id: 'string',
          avatar_url: 'string',
          gravatar_id: 'string',
          url: 'string',
          html_url: 'string',
          followers_url: 'string',
          following_url: 'string',
          gists_url: 'string',
          starred_url: 'string',
          subscriptions_url: 'string',
          organizations_url: 'string',
          repos_url: 'string',
          events_url: 'string',
          received_events_url: 'string',
          type: 'string',
          site_admin: false
        },
        parents: [
          {
            sha: 'string',
            url: 'string',
            html_url: 'string'
          }
        ]
      }
    ],
    reviews: [
      'string'
    ],
    requested_reviewers: {
      users: [
        'string'
      ],
      teams: [
        'string'
      ]
    },
    thisPR: {
      0: 0,
      repo: 'string',
      owner: 'string'
    },
    api: {
      log: {},
      actions: {},
      activity: {},
      apps: {},
      checks: {},
      codesOfConduct: {},
      emojis: {},
      gists: {},
      git: {},
      gitignore: {},
      interactions: {},
      issues: {},
      licenses: {},
      markdown: {},
      meta: {},
      migrations: {},
      oauthAuthorizations: {},
      orgs: {},
      projects: {},
      pulls: {},
      rateLimit: {},
      reactions: {},
      repos: {},
      search: {},
      teams: {},
      users: {}
    },
    utils: {}
  }
}
