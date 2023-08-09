<template>
    <pre>
      <code v-html="highlightedCode" />
    </pre>
</template>
  
<script>
import hljs from 'highlight.js';

export default {
props: ['code', 'language'],
computed: {
    highlightedCode() {
        const highlighted = hljs.highlight(this.language, this.code, true, undefined);
        return highlighted.value;
    },
},
};
</script>