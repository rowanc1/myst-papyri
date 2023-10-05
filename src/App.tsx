import React from 'react';
import { ThemeProvider } from '@myst-theme/providers';
import { MyST, DEFAULT_RENDERERS } from 'myst-to-react';
import './app.css';
import ast from './ast.json';

function inlineCode({ node }: { node: any }) {
  return (
    <>
      <code>{node.value}</code>
      <span className="text-xs">(see numpy)</span>
    </>
  );
}

function App() {
  return (
    <article className="max-w-2xl mx-auto mt-10 article">
      <h1>An Example of using MyST</h1>
      <ThemeProvider renderers={{ ...DEFAULT_RENDERERS, inlineCode }}>
        <MyST ast={{ type: 'root', children: ast }} />
      </ThemeProvider>
    </article>
  );
}

export default App;
