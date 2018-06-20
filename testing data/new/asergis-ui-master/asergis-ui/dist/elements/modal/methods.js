"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lib = require("../../lib");

var toggleModal = function toggleModal(name, show) {
  _lib.store.modals[name].show = show;
};

exports.default = {
  toggleModal: toggleModal
};