#!/usr/bin/env node

const download = require('download-git-repo')
const generate = require('vue-cli/lib/generate')
const logger = require('vue-cli/lib/logger')
const checkVersion = require('vue-cli/lib/check-version')
const ora = require('ora')
const exists = require('fs').existsSync
const home = require('user-home')
const path = require('path')
const rm = require('rimraf').sync
const localPath = require('vue-cli/lib/local-path')
const chalk = require('chalk')
const format = require('util').format

const cmd = process.argv[2]
const name = process.argv[3]

if (cmd !== 'generate') {
  logger.fatal('only generate is allowed for now')
}

if (!name) {
  logger.fatal('you have to specify a name for your website')
}

const isLocalPath = localPath.isLocalPath
const getTemplatePath = localPath.getTemplatePath

//const template = 'code-forefront/vue-website-template'
const template = 'code-forefront/vue-website-template'
const to = path.resolve(name)

const tmp = path.join(home, '.vue-templates', template.replace(/\//g, '-'))

function downloadAndGenerate () {
  const spinner = ora('downloading template')
  spinner.start()
  // Remove if local template exists
  if (exists(tmp)) rm(tmp)
  download(template, tmp, { clone: false }, err => {
    spinner.stop()
    if (err) logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
    generate(name, tmp, to, err => {
      if (err) logger.fatal(err)

      const msg = format.apply(format, ['   Generated "%s".', name])
      console.log(msg)
    })
  })  
}

downloadAndGenerate(template)