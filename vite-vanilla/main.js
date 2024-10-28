import './style.css';
import { EditorFactory } from '@coffic/juice-editor';

EditorFactory.register('juice-editor', {
  onCreate: (editor) => {
    console.log('editor created');

    editor.setContent('Hello World');
  },
});
