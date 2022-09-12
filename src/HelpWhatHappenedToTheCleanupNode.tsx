import { useEffect } from 'react'
import {
  DecoratorNode, LexicalNode, SerializedLexicalNode,
  EditorConfig, Spread, NodeKey
} from 'lexical'


function HelpWhatHappenedToTheCleanup() {
  useEffect(() => () => alert("At last, I've been cleaned up"), [])
  return (
    <div>
      Please clean me up :(
    </div>
  )
}

export type SerializedHelpWhatHappenedToTheCleanupNode = Spread<
  {
    type: 'help-what-happened-to-the-cleanup'
  },
  SerializedLexicalNode
>

export class HelpWhatHappenedToTheCleanupNode extends DecoratorNode<JSX.Element> {

  static getType(): string {
    return 'help-what-happened-to-the-cleanup'
  }

  static clone(node: HelpWhatHappenedToTheCleanupNode): HelpWhatHappenedToTheCleanupNode {
    return new HelpWhatHappenedToTheCleanupNode(node.__key)
  }

  constructor(key?: NodeKey) {
    super(key)
  }

  static importJSON(serializedNode: SerializedHelpWhatHappenedToTheCleanupNode): HelpWhatHappenedToTheCleanupNode {
    const node = $createHelpWhatHappenedToTheCleanupNode()
    return node
  }

  exportJSON(): SerializedHelpWhatHappenedToTheCleanupNode {
    return {
      type: 'help-what-happened-to-the-cleanup',
      version: 1,
    }
  }

  createDOM(_config: EditorConfig): HTMLElement {
    return document.createElement(this.__inline ? 'span' : 'div')
  }

  updateDOM(prevNode: HelpWhatHappenedToTheCleanupNode): boolean {
    // If the inline property changes, replace the element
    return this.__inline !== prevNode.__inline
  }

  getEquation(): string {
    return this.__equation
  }

  setEquation(equation: string): void {
    const writable = this.getWritable()
    writable.__equation = equation
  }

  decorate(): JSX.Element {
    return (
      <HelpWhatHappenedToTheCleanup />
    )
  }
}

export function $createHelpWhatHappenedToTheCleanupNode(): HelpWhatHappenedToTheCleanupNode {
  const node = new HelpWhatHappenedToTheCleanupNode()
  return node
}

export function $isHelpWhatHappenedToTheCleanupNode(
  node: LexicalNode | null | undefined,
): node is HelpWhatHappenedToTheCleanupNode {
  return node instanceof HelpWhatHappenedToTheCleanupNode
}
