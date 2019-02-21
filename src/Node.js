import keys from 'lodash/keys';

export default class Node {
  constructor(tagName, attributes = {}) {
    this.tagName = tagName
    this.attributes = attributes
  }

  /** @private */
  attributesToString() {
    if (keys(this.attributes).length === 0) return ''

    const attrs = keys(this.attributes).map(key => `${key}="${this.attributes[key]}"`).join(' ')
    return ` ${attrs}`
  }
}
