const fs = require("fs");
const { clientEntryPath } = require("./context");

/**
 * entry 入口
 */
const extnames = ["js", "jsx", "ts", "tsx"];

const extname = extnames[3];

function readPages(pagesPath) {
  const entries = {};
  const dirs = fs.readdirSync(pagesPath);
  for (let dir of dirs) {
    entries[dir] = `${pagesPath}/${dir}/index.${extname}`;
  }
  entries["common"] = `${clientEntryPath}/common/index.${extnames[2]}`;
  return entries;
}

function getEntries(pagesPath) {
  const pages = readPages(`${pagesPath}/pages`);
  return pages;
}

module.exports = {
  entry: getEntries(clientEntryPath),
};
