import "./App.css";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { createEmptyHistoryState, HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { HelpWhatHappenedToTheCleanupNode } from "./HelpWhatHappenedToTheCleanupNode";

const initialState = {
  root: {
    children: [
      {
        type: "paragraph",
        children: [
          {
            text: "Howdy",
            type: "text",
          },
        ],
      },
      {
        type: "help-what-happened-to-the-cleanup"
      },
      {
        type: "paragraph",
        children: [
          {
            text: "Oops",
            type: "text",
          },
        ],
      },
    ],
    type: "root",
  },
};

export default function App() {
  const history = createEmptyHistoryState();
  return (
    <LexicalComposer
      initialConfig={{
        namespace: "test",
        nodes: [HelpWhatHappenedToTheCleanupNode],
        theme: {
          custom: "custom",
          expand: 'expand',
        },
        editorState: JSON.stringify(initialState),
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <HistoryPlugin externalHistoryState={history} />
      <OnChangePlugin
        onChange={(editorState) => {
          console.log(JSON.stringify(editorState, null, 2))
        }}
      />
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div className="placeholder">Type something</div>}
      />
      <ClearEditorPlugin />
    </LexicalComposer>
  );
}