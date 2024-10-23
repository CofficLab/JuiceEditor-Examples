<script setup lang="ts">
import { defineJuiceEditor, EventName, EventType } from '@coffic/juice-editor'

window.addEventListener(EventName, (event: Event) => {
  const customEvent = event as CustomEvent
  if (customEvent.detail.type == EventType.editorReady) {
    console.log('editor ready');
    (window as any).api.node.setHTML('Hello World')
  }
})

defineJuiceEditor()


</script>

<template>
  <div style="width: 100%; height: 100%; border: 1px solid #ccc; text-align: center;">
    <juice-editor />
  </div>
</template>
