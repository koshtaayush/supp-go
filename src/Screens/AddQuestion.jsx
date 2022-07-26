import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

function AddQuestion() {
  const [editorState, setEditorState] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [title, setTitle] = React.useState("");

  const editorConfig = {
    forced_root_block: "div",
    menubar: "file edit insert view format table tools",
    plugins:
      "autolink link image code lists print preview media save autosave table hr fullscreen insertdatetime autoresize searchreplace emoticons wordcount",
    toolbar1:
      "undo redo | bold italic forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | fontsizeselect | styleselect",
    toolbar3:
      "media image link | preview restoredraft fullscreen searchreplace code"
  };

  const onEditorStateChange = (e) => {
    var val = e.target.value;
    setEditorState(val);
  };

  const onTagsStateChange = (e) => {
    var val = e.target.value;
    setTags(val);
  };

  const onTitleStateChange = (e) => {
    var val = e.target.value;
    setTitle(val);
  };

  const onAddQuestionClick = () => {
    console.log(editorState, tags, title);
    setTags(setTitle);
  };

  return (
    <div>
      Ask a public question
      <div>Title</div>
      <input type="text" onChange={onTitleStateChange} />
      <div>Body</div>
      <Editor
        value={editorState}
        init={editorConfig}
        onChange={onEditorStateChange}
      />
      <div>Tags</div>
      <input type="text" onChange={onTagsStateChange} />
      <div>
        <button onClick={onAddQuestionClick}>Review Your Question</button>
      </div>
    </div>
  );
}

export default AddQuestion;