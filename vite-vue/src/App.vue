<script setup lang="ts">
import { Editor, EditorFactory } from '@coffic/juice-editor'

EditorFactory.register('juice-editor', {
  onCreate: (editor: Editor) => {
    console.log('editor created')

    editor.setContent('Hello World')
  }
})

</script>

<template>
  <div style="width: 100%; height: 100%; border: 1px solid #ccc; text-align: center;">
    <juice-editor />
  </div>
</template>
