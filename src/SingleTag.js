import Node from "./Node"

export default class SingleTag extends Node {
  toString() {
    const attrs = this.attributesToString()

    return `<${this.tagName}${attrs}>`
  }
}
