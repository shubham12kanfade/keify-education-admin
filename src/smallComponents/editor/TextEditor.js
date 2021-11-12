import React, { useState } from 'react';
import './TextEditor.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor({heading, content}) {
  const [text, setText] = useState(content);
  return (
    <div>
      <h3 className = 'heading'>{heading}</h3>
                
      <div className = 'editor'>
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
          config={{         
            toolbar: ['heading', '|', 'bold', 'italic', 'underline', 'blockQuote', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo']
          }} 
          onReady ={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
            editor.editing.view.change((writer) => {
            writer.setStyle(
                "height",
                "100px",
                editor.editing.view.document.getRoot()
            );
          });
        }}
        />    
      </div>
    </div>
  )
}

export default TextEditor
