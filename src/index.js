import '../css/theme/source/black.scss';
import './style.scss';
import 'script-loader!../js/reveal';

Reveal.initialize({
  hash: true,
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/highlight/highlight.js' },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});
