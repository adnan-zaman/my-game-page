const cypress = require("cypress");
const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");

cypress
  .run()
  .then((res) => {
    if (res.totalFailed > 0 || res.failures > 0) process.exit(1);
  })
  .catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });
