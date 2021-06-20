export default class Tag {
  constructor(tagName, relatedApps = []) {
    this.tagName = tagName
    this.relatedApps = relatedApps
  }

  tagActivity() {
    return this.relatedApps.reduce((acc, app) => (acc += app.appActivity), 0)
  }
}
