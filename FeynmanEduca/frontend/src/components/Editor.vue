<template>
  <div>
    <div class="p-5">
      <div class="editor" v-if="editor">
        <menu-bar class="editor__header" :editor="editor" />
        <editor-content class="editor__content text-left p-1 border-0" :editor="editor" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import History from '@tiptap/extension-history';
import Highlight from '@tiptap/extension-highlight';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import MenuBar from './MenuBar.vue';

export default {
  components: {
    EditorContent,
    MenuBar,
  },

  props: ['user'],

  setup() {
    const editor = ref(null);

    onMounted(() => {
      editor.value = new Editor({
        extensions: [
          StarterKit.configure({
            history: false,
          }),
          Document,
          Paragraph,
          Text,
          History,
          Highlight,
          TaskItem,
          TaskList,
        ],
        content: 'HI',
      });
    });

    onUnmounted(() => {
      editor.value.destroy();
    });

    return {
      editor,
    };
  },
};
</script>

<style scoped lang="scss">
.editor {
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: 0.75rem;
  color: #0d0d0d;
  display: flex;
  flex-direction: column;
  max-height: 26rem;

  &__header {
    align-items: center;
    background: #0d0d0d;
    border-bottom: 3px solid #0d0d0d;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
  }

  &__content {
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1.25rem 1rem;
    -webkit-overflow-scrolling: touch;
  }
}

.font-bold {
  font-weight: bold;
}

.text-2xl {
  font-size: 1.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-5 {
  padding: 1.25rem;
}

.text-left {
  text-align: left;
}

.border-0 {
  border: 0;
}
</style>
