import './style.css';
import editor from '@coffic/juice-editor';

editor.onCreate(() => {
  editor.setHtml('<h1>Hello World</h1><p>Hello World</p>');
});
