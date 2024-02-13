import React, { useEffect, useState, useCallback } from 'react'
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import Result from '../Playground/Result';

const Playground = () => {

  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  const onChangeHtml = useCallback((value) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_Edit(value);
  }, []);

  const srcCode = `
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
`
  
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         {/* Html Editor */}
          <div className="bg-accent p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl"
              value={html_edit}
              height="342px"
              theme="light"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          {/* Css Editor  */}
          <div className="bg-accent p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl"
              value={css_edit}
              height="342px"
              theme="light"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          {/* JavaScript Editor  */}
          <div className="bg-accent p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl"
              value={js_edit}
              height="342px"
              theme="light"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        <Result srcCode={srcCode} />
    </div>
  );
}

export default Playground