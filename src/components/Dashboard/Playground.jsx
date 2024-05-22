import React, { useEffect, useState, useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import Result from "../Playground/Result";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { FaRegQuestionCircle } from "react-icons/fa";

const Playground = () => {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

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
  `;

  useEffect(() => {
    if (!localStorage.getItem("tutorialStarted")) {
      startTutorial();
      localStorage.setItem("tutorialStarted", "true"); // Set the flag in localStorage
    }
  }, []);

  const startTutorial = () => {
    const config = {
      steps: [
        {
          element: "#htmlEditor",
          popover: {
            title: "Area Kode HTML",
            description: "Anda dapat menuliskan Kode HTML disini",
          },
        },
        {
          element: "#cssEditor",
          popover: {
            title: "Area Kode CSS",
            description: "Anda dapat menuliskan Kode CSS disini",
          },
        },
        {
          element: "#jsEditor",
          popover: {
            title: "Area Kode JavaScript",
            description: "Anda dapat menuliskan Kode JavaScript disini",
          },
        },
        {
          element: "#resultCode",
          popover: {
            title: "Hasil Kode",
            description: "Hasil dari Kode yang anda tulis akan muncul disini",
          },
        }
      ],
      allowClose: true,
      // Add other configuration options as needed
    };

    const tourInstance = driver(config);

    // Start the tour directly
    tourInstance.drive();
  };

  return (
    <div className="p-6">
      <div className="flex justify-end w-full mb-3">
      <button className="border px-4 py-2 rounded-xl bg-secondary text-primary flex items-center" onClick={startTutorial}>
        Tutorial
        <FaRegQuestionCircle className="text-xl ml-2" />
      </button>
      
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Html Editor */}
        <div id="htmlEditor" className="bg-accent p-4 rounded-lg shadow">
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
        <div id="cssEditor" className="bg-accent p-4 rounded-lg shadow">
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
        <div id="jsEditor" className="bg-accent p-4 rounded-lg shadow">
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

      <div id="resultCode">
        <Result srcCode={srcCode} />
      </div>
      
    </div>
  );
};

export default Playground;
