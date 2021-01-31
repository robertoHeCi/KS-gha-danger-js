import { GitHubDSL, GitJSONDSL } from 'danger'
export type LogFunction = (message:string) => void
export type DangerObjectModel = { git?: Partial<GitJSONDSL>, github?: Partial<GitHubDSL>}
export interface DangerModel {
  danger: DangerObjectModel
  fail: LogFunction
  message: LogFunction
  warn: LogFunction
}
