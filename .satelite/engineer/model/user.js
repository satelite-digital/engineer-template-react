module.exports = {
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
};
