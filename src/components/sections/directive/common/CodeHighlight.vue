<template>
    <pre class="text-xs h-32 overflow-y-auto h-96">
      <code v-html="highlightedCode" />
    </pre>
</template>
  
<script>
import hljs from 'highlight.js';

export default {
props: {
    code: String,
    language: String
},
computed: {
    highlightedCode() {
        return hljs.highlight(this.code, { language: this.language }).value;
        // const highlighted = hljs.highlight(this.code, this.language, true, undefined);
        // return highlighted.value;
    },
}
};
</script>