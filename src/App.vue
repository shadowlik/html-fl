<template>
  <div id="app">
    <form action="#" @submit="format($event)">
      <codemirror v-model="html" :options="cmOptions"></codemirror>
      <textarea  id="html-copy" v-model="html" class="html-input"></textarea>
      <div class="actions">
        <button class="format-button" type="submit">Formatar</button>
        <button class="clean-button" @click="clean" type="button">Limpar</button>
        <button class="copy-button"
        v-clipboard:copy="html"
        type="button">Copiar</button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.actions {
  margin-top: 15px;
}
.html-input {
  display: none;
}
.format-button,
.clean-button,
.copy-button {
  border: 0;
  cursor: pointer;
  padding: 13px 23px;
  background: #f6f6f6;
  box-shadow: 0 2px 3px rgba(110, 110, 110, 0.25);
  color: #000;
  font-family: Roboto, Arial, sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  opacity: initial;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: #161616;
    color: #fff;
  }
}
.format-button {
  background: #43a047;
  color: #fff;
  &:hover {
    background: #76d275;
  }
}
.clean-button {
  margin-left: 15px;
  background: #d32f2f;
  color: #fff;
  &:hover {
    background: #ff6659;
  }
}
.copy-button {
  margin-left: 15px;
  // background: #283593;
  // color: #fff;
  &:hover {
    // background: #5f5fc4;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

const pretty = require('pretty');

export default Vue.extend({
  name: 'app',
  data() {
    return {
      html: `<!DOCTYPE html>
<!-- Cole seu HTML aqui -->`,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        htmlMode: true,
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        line: true,
      },
    };
  },
  methods: {
    format(e: Event) {
      e.preventDefault();
      this.html = pretty(this.html);
    },
    clean() {
      this.html = '';
    },
  },
});
</script>
