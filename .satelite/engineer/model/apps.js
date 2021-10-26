module.exports = {
  id: "app",
  name: "App",
  fields: [
    {
      id: "title",
      type: "String",
      default: "Unknown",
    },
    {
      id: "url",
      type: "String",
      required: true,
    },
  ],
};
