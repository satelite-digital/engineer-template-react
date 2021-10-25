module.exports = () => {
  return {
    data: {
      schema: [
        {
          id: "page",
          name: "Page",
          display: {
            table: true,
          },
        },
        {
          id: "other",
          name: "Other",
          display: {
            cards: true,
          },
        },
      ],
    },
    templates: [
      {
        src: ".satelite/engineer/files/[page].jsx.hbs",
        dest: "src/pages/[name]/index.jsx",
        key: "schema",
      },
      {
        src: ".satelite/engineer/files/App.js.hbs",
        dest: "src/App.js",
      },
    ],
  };
};
