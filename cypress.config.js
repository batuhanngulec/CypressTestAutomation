const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "hg34x2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
