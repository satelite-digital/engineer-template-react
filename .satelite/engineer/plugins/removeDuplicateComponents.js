module.exports = (config) => {
  if (!"data" in config) {
    return config;
  }
  if ("pages" in config.data) {
    config.data.pages = config.data.pages.map((page) => {
      if ("ui" in page) {
        page._components = [
          ...new Set(page.ui.map(({ component }) => component)),
        ];
        return page;
      }
      return page;
    });
    return config;
  }
  return config;
};
