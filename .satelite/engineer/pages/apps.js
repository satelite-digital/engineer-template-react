const state = [
  {
    id: "items",
    value: "[0, 1, 2, 3, 4, 5, 6]",
    type: "const",
  },
  {
    id: "headers",
    value: "['id', 'url']",
    type: "const",
  },
];

const ui = [
  {
    component: "Table",
    props: [
      {
        prop: "rows",
        value: "items",
      },
      {
        prop: "headers",
        value: "headers",
      },
    ],
  },
];

module.exports = {
  id: "apps",
  name: "Apps",
  path: "/apps",
  navigation: true,
  state,
  ui,
};
