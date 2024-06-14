<template>
    <pre class="text-xs overflow-y-auto">
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
    },
}
};
</script>