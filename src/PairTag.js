import Node from "./Node"

export default class PairTag extends Node {
  constructor(tagName, attributes = {}, content = '') {
    super(tagName, attributes)

    this.content = content
  }

  toString() {
    const attrs = this.attributesToString()

    return `<${this.tagName}${attrs}>${this.content}</${this.tagName}>`
  }
}
