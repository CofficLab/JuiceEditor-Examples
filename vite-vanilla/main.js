import './style.css';
import { defineJuiceEditor, EventType } from '@coffic/juice-editor';

window.addEventListener('editor-event', (event) => {
  if (event.detail.type === EventType.editorReady) {
    console.log(event.detail.api);
    api.node.setHTML('<h1>Hello World</h1><p>Hello World</p>');
  }
});

defineJuiceEditor();
