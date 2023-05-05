import './monaco-config';
import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';

const editor = monaco.editor.create(document.getElementById('container'), {
  value: 'function hello() {\n\talert("Hello, world!");\n}',
  language: 'javascript',
  theme: 'vs-dark',
});
