import {
  BitBucketCloudDSL,
  BitBucketServerDSL,
  GitHubJSONDSL,
  DangerDSLType,
  DangerUtilsDSL,
  GitDSL,
  GitHubDSL,
  GitLabDSL
} from 'danger'

export type LogFunction = (message:string) => void
export interface DangerMock {
  git?: Partial<GitDSL>
  github?: Partial<GitHubDSL>
  'bitbucket_server'?: Partial<BitBucketServerDSL>
  'bitbucket_cloud'?: Partial<BitBucketCloudDSL>
  gitlab?: Partial<GitLabDSL>
  utils?: Partial<DangerUtilsDSL>
  message?: LogFunction
  fail?: LogFunction
  warn?: LogFunction
}
export type DangerModel = DangerDSLType | DangerMock
export type GitHubJSON = GitHubJSONDSL
