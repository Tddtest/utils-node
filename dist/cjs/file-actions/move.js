var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/file-actions/move.ts
var move_exports = {};
__export(move_exports, {
  moveDirectory: () => moveDirectory,
  moveFile: () => moveFile,
  moveFileOrDirectory: () => moveFileOrDirectory
});
module.exports = __toCommonJS(move_exports);
var import_fs_extra = require("fs-extra");
var import_judge = require("./judge");
var moveFile = (src, dest) => {
  (0, import_fs_extra.moveSync)(src, dest);
};
var moveDirectory = (src, dest) => {
  (0, import_fs_extra.moveSync)(src, dest);
};
var moveFileOrDirectory = (src, dest) => {
  const targetType = (0, import_judge.determineTargetType)(src);
  if (targetType === "file") {
    moveFile(src, dest);
  }
  if (targetType === "dir") {
    moveDirectory(src, dest);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  moveDirectory,
  moveFile,
  moveFileOrDirectory
});
