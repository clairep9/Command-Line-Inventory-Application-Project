const { readFileSync, writeFileSync } = require("node:fs");

function readJSONFile(path, fileName) {
  try {
  const file = readFileSync(`${path}/${fileName}`, "utf8");
  return file ? JSON.parse(file) : [];
} catch (error) {
  console.error("Error reading file:", error);
}
}

function writeJSONFile(path, fileName, data) {
  try {
    console.log(data)
  data = JSON.stringify(data);
  writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
} catch (error) {
  console.error("Error writing file:", error);
}
}


module.exports = {
  readJSONFile,
  writeJSONFile,
};