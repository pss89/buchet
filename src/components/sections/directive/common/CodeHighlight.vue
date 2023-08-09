<template>
    <pre>
      <code v-html="highlightedCode" />
    </pre>
</template>
  
<script>
import hljs from 'highlight.js';

export default {
props: {
    code:String,
    language:String
},
computed: {
    highlightedCode() {
        const highlighted = hljs.highlight(this.code, this.language, true, undefined);
        return highlighted.value;
    },
}
};
</script>