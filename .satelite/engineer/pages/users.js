const state = [
  {
    id: "items",
    value: "[0, 1, 2, 3, 4, 5, 6]",
    type: "const",
  },
  {
    id: "headers",
    value: "['name', 'email']",
    type: "const",
  },
];

const actions = [
  {
    id: "onUserClick",
    value: "(user)=>history.push(`/user/${user}`)",
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
      {
        prop: "onRowClick",
        value: "onUserClick",
      },
    ],
  },
  {
    component: "Hero",
  },
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
    {
      prop: "onRowClick",
      value: "onUserClick",
    },
  ],
}];

// Instead of including import and implementation code, this should only reference a hook from a pre-built library of common hooks.
// 
const hooks = [
  {
    id: "history",
    import: "import { useHistory } from 'react-router-dom'",
    implementation: "const history = useHistory();",
  },
];

module.exports = {
  id: "users",
  name: "Users",
  path: "/users",
  navigation: true,
  state,
  actions,
  hooks,
  ui,
};
