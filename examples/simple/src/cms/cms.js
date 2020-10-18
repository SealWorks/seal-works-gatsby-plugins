import manifest from '../content/settings/manifest.json'
import CMS from 'netlify-cms-app'
import { repository } from '../../package.json'
import { collections, registerPreviews } from './collections'

const config = {
  display_url: window.location.origin,
  logo_url: manifest.icon,

  collections,
}

config.backend = {
  name: 'github',
  branch: 'master',
  publish_mode: 'editorial_workflow',
  squash_merges: true,
  commit_messages: {
    create: 'Create {{collection}} "{{slug}}"',
    update: 'Update {{collection}} "{{slug}}"',
    delete: 'Delete {{collection}} "{{slug}}"',
    uploadMedia: '[skip ci] Upload "{{path}}"',
    deleteMedia: '[skip ci] Delete "{{path}}"',
  },
}
if (repository) {
  config.backend.repo = repository.split('github.com/')[1].split('.git')[0]
}

if (process.env.NODE_ENV === 'development') {
  // config.local_backend = true
  config.local_backend = {
    url: 'http://localhost:8081/api/v1',
    allowed_hosts: ['192.168.*.*'],
  }
}

CMS.init({ config })

registerPreviews()
