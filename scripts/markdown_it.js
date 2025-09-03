// scripts/markdown-it.js
'use strict';

const markdownIt = require('markdown-it');
const mila = require('markdown-it-link-attributes');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItTaskLists = require('markdown-it-task-lists');
const markdownItMultimdTable = require('markdown-it-multimd-table');
const markdownItKatex = require('markdown-it-katex');

hexo.extend.renderer.register('md', 'html', (data, options) => {
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
  })
  .use(markdownItAttrs)
  .use(markdownItTaskLists)
  .use(markdownItMultimdTable)
  .use(markdownItKatex)
  .use(mila, { attrs: { target: '_blank', rel: 'noopener' } });

  return md.render(data.text);
}, true);
