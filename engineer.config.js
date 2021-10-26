module.exports = () => {
  return {
    data: {
      schema: [
        {
          id: "user",
          name: "User",
          fields: [
            {
              id: "name",
              type: "String",
              default: "Unknown",
            },
            {
              id: "email",
              type: "String",
              required: true,
            },
          ],
        },
      ],
      pages: [
        {
          id: "users",
          name: "Users",
          path: "/users",
          navigation: true,
          state: [
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
          ],
          actions: [
            {
              id: "onUserClick",
              value: "(user)=>history.push(`/user/${user}`)"
            }
          ],
          hooks: [
            {
              id: "history",
              import: "import { useHistory } from 'react-router-dom'",
              implementation: "const history = useHistory();",
            }
          ],
          ui: [
            {
              component: "Table",
              props: [
                {
                  prop: "rows",
                  value: "items",
                },
                {
                  prop: "headers",
                  value: "headers"
                },
                {
                  prop: "onRowClick",
                  value: "onUserClick"
                }
              ],
            },
          ],
        },
        {
          id: "user",
          name: "User",
          path: "/user/:id",
          navigation: false,
          ui: [
            {
              component: "Hero",
            },
          ],
        },
      ],
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
