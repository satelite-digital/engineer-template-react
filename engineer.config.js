const fs = require("fs");
const removeDuplicateComponentsPlugin = require("./.satelite/engineer/plugins/removeDuplicateComponents.js");

const modelsFolder = "./.satelite/engineer/model/";
const pagesFolder = "./.satelite/engineer/pages/";

const config = () => {
  return {
    data: {
      schema: fs
        .readdirSync(modelsFolder)
        .map((file) => require(`${modelsFolder}/${file}`)),
      pages: fs
        .readdirSync(pagesFolder)
        .map((file) => require(`${pagesFolder}/${file}`)),
    },
    templates: [
      {
        src: ".satelite/engineer/files/[page].jsx.hbs",
        dest: "src/pages/[name]/index.jsx",
        key: "pages",
      },
      {
        src: ".satelite/engineer/files/App.js.hbs",
        dest: "src/App.js",
      },
    ],
  };
};

const computedConfig = removeDuplicateComponentsPlugin(config());

module.exports = () => computedConfig;
