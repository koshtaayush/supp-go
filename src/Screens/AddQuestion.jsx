import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";
import './AddQuestion.css';

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
    <div className="add-question-page">
      <div className="ask-question">Ask a public question</div>

      <div className="question-container">

      <div className="title-section">
        <div class>Title</div>
        <div class>Be specific and imagine you’re asking a question to another person</div>
        <input type="text" onChange={onTitleStateChange} style={{width: "100%"}}/>
      </div>

      <div className="title-section" style={{marginTop: "25px"}}>
        <div>Body</div>
        <div>Include all the information someone would need to answer your question</div>
      </div>

      <div style={{marginTop: "25px"}}>
        <Editor
          value={editorState}
          init={editorConfig}
          onChange={onEditorStateChange}
        />
      </div>

      <div className="title-section" style={{marginTop: "25px"}}>
        <div>Tags</div>
        <div>Add up to 5 tags to describe what your question is about</div>
        <input type="text" onChange={onTagsStateChange} />
        </div>
      </div>


      <div className="button-section">
        <button className="add-button" onClick={onAddQuestionClick}>Review Your Question</button>
      </div>
    </div>
  );
}

export default AddQuestion;