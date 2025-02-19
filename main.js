/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "obsidian":
/*!***************************!*\
  !*** external "obsidian" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("obsidian");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoveByTag)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var obsidian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! obsidian */ "obsidian");
/* harmony import */ var obsidian__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(obsidian__WEBPACK_IMPORTED_MODULE_0__);


console.log('Loading Move by Tag Plugin');
const DEFAULT_SETTINGS = {
    tagMappings: [],
    confirmBeforeMove: true,
    excludedFolders: [],
    limitedFolders: [],
    enableLogging: true
};
class MoveByTag extends obsidian__WEBPACK_IMPORTED_MODULE_0__.Plugin {
    log(message) {
        if (this.settings.enableLogging) {
            console.log(`[Move by Tag] ${message}`);
        }
    }
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    onload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadSettings();
            // This adds a command to the app's command palette.
            this.addCommand({
                id: 'move-by-tag',
                name: 'Move by Tag',
                callback: () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    const modal = new MoveByTagModal(this.app, this);
                    modal.onClose = () => {
                        // Clean up suggestions when modal is closed
                        const suggestionsContainer = document.getElementById('folder-suggestions');
                        if (suggestionsContainer) {
                            suggestionsContainer.remove();
                        }
                    };
                    modal.open();
                }),
            });
            // Register the command in Obsidian
            this.addCommand({
                id: 'show-file-info',
                name: 'Show File Info',
                checkCallback: (checking) => {
                    const activeFile = this.app.workspace.getActiveFile();
                    if (activeFile) {
                        if (!checking) {
                            this.showFileInfo(activeFile);
                        }
                        return true;
                    }
                    return false;
                }
            });
            this.addSettingTab(new MoveByTagSettingTab(this.app, this));
            console.log('Move by Tag Plugin loaded');
        });
    }
    onunload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Move by Tag Plugin unloaded');
            // Reset settings to default
            // this.settings = Object.assign({}, DEFAULT_SETTINGS);
            // await this.saveData({}); // Clear all stored data
        });
    }
    extractTags(content) {
        const tagRegex = /#\w+/g;
        return content.match(tagRegex) || [];
    }
    showFileInfo(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const content = yield this.app.vault.read(file);
            this.showFileInfoDialog(file.path, content);
        });
    }
    showFileInfoDialog(filePath, content) {
        const fileName = filePath.split('/').pop();
        const tags = this.extractTags(content);
        const dialogContent = `File Name: ${fileName}\nLocation: ${filePath}\nTags: ${tags.join(', ')}`;
        const dialog = new InfoDialog(this.app, dialogContent);
        dialog.open();
    }
    loadSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const loadedData = yield this.loadData();
            console.log('Loaded settings data:', loadedData);
            // Initialize settings with defaults
            this.settings = Object.assign({}, DEFAULT_SETTINGS);
            // Check if tagMappings is an object (old format)
            if (loadedData && loadedData.tagMappings && typeof loadedData.tagMappings === 'object' && !Array.isArray(loadedData.tagMappings)) {
                // Convert old format to new format
                const oldMappings = loadedData.tagMappings;
                const convertedMappings = [];
                // Group mappings by folder
                const folderToTags = {};
                Object.entries(oldMappings).forEach(([tag, folder]) => {
                    if (!folderToTags[folder]) {
                        folderToTags[folder] = [];
                    }
                    folderToTags[folder].push(tag);
                });
                // Create new mappings
                Object.entries(folderToTags).forEach(([folder, tags]) => {
                    convertedMappings.push({
                        tags: tags,
                        folder: folder,
                        id: this.generateId()
                    });
                });
                this.settings.tagMappings = convertedMappings;
            }
            else if (loadedData && loadedData.tagMappings) {
                // If not in old format, assign directly
                this.settings.tagMappings = loadedData.tagMappings;
            }
            // Merge loaded data with settings
            if (loadedData) {
                this.settings = Object.assign(Object.assign({}, this.settings), { confirmBeforeMove: (_a = loadedData.confirmBeforeMove) !== null && _a !== void 0 ? _a : DEFAULT_SETTINGS.confirmBeforeMove, excludedFolders: (_b = loadedData.excludedFolders) !== null && _b !== void 0 ? _b : DEFAULT_SETTINGS.excludedFolders, limitedFolders: (_c = loadedData.limitedFolders) !== null && _c !== void 0 ? _c : DEFAULT_SETTINGS.limitedFolders, enableLogging: (_d = loadedData.enableLogging) !== null && _d !== void 0 ? _d : DEFAULT_SETTINGS.enableLogging });
            }
            console.log('Loaded excluded folders:', this.settings.excludedFolders);
            console.log('Loaded limited folders:', this.settings.limitedFolders);
        });
    }
    saveSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Saving settings data:', this.settings);
            yield this.saveData(this.settings);
        });
    }
}
class MoveByTagModal extends obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal {
    constructor(app, plugin) {
        super(app);
        this.settings = plugin.settings;
        this.plugin = plugin;
    }
    showConfirmationDialog(movements) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
                modal.contentEl.createEl('h2', { text: 'Confirm File Movements' });
                const container = modal.contentEl.createEl('div', { cls: 'move-by-tag-confirmation' });
                container.createEl('p', { text: `About to move ${movements.length} files:` });
                const list = container.createEl('ul');
                movements.slice(0, 10).forEach(({ file, targetPath }) => {
                    list.createEl('li', { text: `${file.path} → ${targetPath}` });
                });
                if (movements.length > 10) {
                    container.createEl('p', { text: `...and ${movements.length - 10} more files` });
                }
                const buttonContainer = container.createEl('div', { cls: 'move-by-tag-buttons' });
                buttonContainer.createEl('button', { text: 'Cancel' })
                    .addEventListener('click', () => {
                    modal.close();
                    resolve(false);
                });
                buttonContainer.createEl('button', { text: 'Confirm' })
                    .addEventListener('click', () => {
                    modal.close();
                    resolve(true);
                });
                modal.onClose = () => {
                    // Clean up suggestions when modal is closed
                    const suggestionsContainer = document.getElementById('folder-suggestions');
                    if (suggestionsContainer) {
                        suggestionsContainer.remove();
                    }
                };
                modal.open();
            });
        });
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.setText('Move files based on their tags');
        this.plugin.log('Opening Move by Tag modal');
        // Add a button to trigger the file movement process
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
            .addButton((btn) => btn
            .setButtonText('Move Files')
            .onClick(() => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.moveFilesByTag();
        })));
    }
    moveFilesByTag() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const { vault } = this.app;
            try {
                this.plugin.log('Starting file movement process...');
                const files = this.app.vault.getMarkdownFiles().filter(file => {
                    return this.settings.limitedFolders.length === 0 ||
                        this.settings.limitedFolders.some(folder => file.path.startsWith(folder));
                });
                this.plugin.log(`Found ${files.length} markdown files total`);
                const movements = [];
                // First, plan all movements
                for (const file of files) {
                    this.plugin.log(`Processing file: ${file.path}`);
                    // Normalize file path
                    const normalizedFilePath = file.path.startsWith('/') ? file.path : '/' + file.path;
                    // Skip files in excluded folders
                    if (this.settings.excludedFolders.some(folder => {
                        const normalizedFolder = folder.startsWith('/') ? folder : '/' + folder;
                        return normalizedFilePath.startsWith(normalizedFolder);
                    })) {
                        this.plugin.log(`Skipping excluded file: ${file.path}`);
                        continue;
                    }
                    const tags = yield this.extractTags(file);
                    this.plugin.log(`Found tags in ${file.path}: ${tags.join(', ') || 'none'}`);
                    if (tags.length > 0) {
                        const matches = this.getTargetFolderForTags(tags);
                        if (matches.length > 0) {
                            let targetFolder = matches[0].mapping.folder;
                            // If there are multiple matches, show dialog for user to choose
                            if (matches.length > 1) {
                                this.plugin.log(`Found multiple matching folders for ${file.path}: ${matches.map(m => m.mapping.folder).join(', ')}`);
                                targetFolder = yield this.showRuleConflictDialog(file, matches);
                                if (!targetFolder) {
                                    this.plugin.log(`User skipped file ${file.path} due to rule conflict`);
                                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice(`Skipped ${file.name} due to rule conflict`);
                                    continue;
                                }
                            }
                            this.plugin.log(`Selected target folder: ${targetFolder}`);
                            const targetPath = `${targetFolder}/${file.name}`;
                            // Check if file already exists in target
                            if (yield this.app.vault.adapter.exists(targetPath)) {
                                this.plugin.log(`File already exists at target location: ${targetPath}`);
                                new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice(`Skipping ${file.name}: File already exists in target location`);
                                continue;
                            }
                            this.plugin.log(`Planning to move ${file.path} to ${targetPath}`);
                            movements.push({ file, targetPath });
                        }
                        else {
                            this.plugin.log(`No matching folder found for tags: ${tags.join(', ')}`);
                        }
                    }
                    else {
                        this.plugin.log(`No tags found in file: ${file.path}`);
                    }
                }
                // If no files to move, notify and close
                if (movements.length === 0) {
                    this.plugin.log('No files to move - no valid tag mappings found');
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('No files to move');
                    this.close();
                    return;
                }
                this.plugin.log(`Found ${movements.length} files to move`);
                // Show confirmation if enabled
                if (this.settings.confirmBeforeMove) {
                    const confirmed = yield this.showConfirmationDialog(movements);
                    if (!confirmed) {
                        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('Operation cancelled');
                        return;
                    }
                }
                // Perform movements
                let successCount = 0;
                for (const { file, targetPath } of movements) {
                    try {
                        yield this.app.vault.rename(file, targetPath);
                        successCount++;
                        if (this.settings.enableLogging) {
                            console.log(`Moved ${file.path} to ${targetPath}`);
                        }
                    }
                    catch (error) {
                        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice(`Failed to move ${file.name}: ${error.message}`);
                    }
                }
                new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice(`Successfully moved ${successCount} of ${movements.length} files`);
                this.close();
            }
            catch (error) {
                new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice(`Error during file movement: ${error.message}`);
                console.error('Move by Tag error:', error);
                this.close();
            }
        });
    }
    extractTags(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.plugin.log(`Reading content from file: ${file.path}`);
                const content = yield this.app.vault.read(file);
                const tagRegex = /#([\w-]+)/g;
                const tags = [];
                let match;
                while ((match = tagRegex.exec(content)) !== null) {
                    tags.push(match[1]);
                }
                this.plugin.log(`Extracted tags from ${file.path}: ${tags.join(', ') || 'none'}`);
                return tags;
            }
            catch (error) {
                this.plugin.log(`Error extracting tags from ${file.path}: ${error.message}`);
                return [];
            }
        });
    }
    getTargetFolderForTags(fileTags) {
        if (this.settings.tagMappings.length === 0) {
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('No mappings defined.');
            return [];
        }
        this.plugin.log(`Checking tag mappings for tags: ${fileTags.join(', ')}`);
        this.plugin.log(`Available mappings: ${JSON.stringify(this.settings.tagMappings)}`);
        // Convert file tags to lowercase for case-insensitive matching
        const lowerFileTags = fileTags.map(tag => tag.toLowerCase());
        const matches = [];
        // Check each mapping
        for (const mapping of this.settings.tagMappings) {
            // Convert mapping tags to lowercase
            const lowerMappingTags = mapping.tags.map(tag => tag.toLowerCase());
            // Track which tags from the mapping were found in the file
            const matchedTags = [];
            // Check each tag in the mapping
            for (const mappingTag of mapping.tags) {
                const lowerMappingTag = mappingTag.toLowerCase();
                // Check if any file tag matches this mapping tag
                const matchingFileTag = lowerFileTags.find(fileTag => fileTag === lowerMappingTag ||
                    fileTag === lowerMappingTag + 's' ||
                    fileTag.slice(0, -1) === lowerMappingTag);
                if (matchingFileTag) {
                    matchedTags.push(mappingTag);
                }
            }
            // If all tags in the mapping were found, it's a match
            if (matchedTags.length === mapping.tags.length) {
                this.plugin.log(`Found matching mapping: ${mapping.tags.join(' + ')} → ${mapping.folder}`);
                matches.push({ mapping, matchedTags });
            }
        }
        if (matches.length === 0) {
            this.plugin.log('No matching folder found for tags');
        }
        return matches;
    }
    showRuleConflictDialog(file, matches) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
                modal.titleEl.setText(`"${file.name}"`);
                const container = modal.contentEl.createEl('div');
                container.createEl('p', {
                    text: `This file matches multiple tag rules. Please select which folder to move it to:`
                });
                const list = container.createEl('div');
                matches.forEach(({ mapping, matchedTags }) => {
                    const row = list.createEl('div', { cls: 'move-by-tag-rule-option' });
                    const button = row.createEl('button', {
                        text: `Move to ${mapping.folder} (tags: ${mapping.tags.map(t => '#' + t).join(' + ')})`,
                        cls: 'mod-cta'
                    });
                    button.style.marginBottom = '10px'; // Add margin to the bottom of the button
                    button.addEventListener('click', () => {
                        modal.close();
                        resolve(mapping.folder);
                    });
                });
                // Add cancel button
                const cancelButton = container.createEl('button', {
                    text: 'Skip this file',
                    cls: 'move-by-tag-cancel'
                });
                cancelButton.addEventListener('click', () => {
                    modal.close();
                    resolve(null);
                });
                modal.onClose = () => {
                    // Clean up suggestions when modal is closed
                    const suggestionsContainer = document.getElementById('folder-suggestions');
                    if (suggestionsContainer) {
                        suggestionsContainer.remove();
                    }
                };
                modal.open();
            });
        });
    }
}
class InfoDialog extends obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal {
    constructor(app, content) {
        super(app);
        this.content = content;
    }
    onOpen() {
        const { contentEl } = this;
        contentEl.setText(this.content);
    }
    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
class MoveByTagSettingTab extends obsidian__WEBPACK_IMPORTED_MODULE_0__.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        // General Settings Section
        containerEl.createEl('h3', { text: 'General Settings' });
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(containerEl)
            .setName('Confirm Before Moving')
            .setDesc('Show confirmation dialog before moving files')
            .addToggle(toggle => toggle
            .setValue(this.plugin.settings.confirmBeforeMove)
            .onChange((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.plugin.settings.confirmBeforeMove = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(containerEl)
            .setName('Enable Logging')
            .setDesc('Log file movements to console')
            .addToggle(toggle => toggle
            .setValue(this.plugin.settings.enableLogging)
            .onChange((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.plugin.settings.enableLogging = value;
            yield this.plugin.saveSettings();
        })));
        // Excluded Folders Section
        containerEl.createEl('h3', { text: 'Excluded Folders' });
        containerEl.createEl('p', {
            text: 'Files in these folders will not be moved. One folder path per line.',
            cls: 'setting-item-description'
        });
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(containerEl)
            .addTextArea(text => {
            // Set initial value from settings
            const excludedFolders = this.plugin.settings.excludedFolders || [];
            text.setValue(excludedFolders.join('\n'))
                .setPlaceholder('folder1/subfolder\nfolder2')
                .onChange((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                this.plugin.settings.excludedFolders = value.split('\n')
                    .map(f => f.trim())
                    .filter(f => f.length > 0);
                yield this.plugin.saveSettings();
            }));
        });
        // Specific Folders Section
        containerEl.createEl('h3', { text: 'Specific Folders' });
        containerEl.createEl('p', {
            text: 'Files will only be moved from these folders. One folder path per line.',
            cls: 'setting-item-description'
        });
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(containerEl)
            .addTextArea(text => {
            // Set initial value from settings
            const limitedFolders = this.plugin.settings.limitedFolders || [];
            text.setValue(limitedFolders.join('\n'))
                .setPlaceholder('folder1/subfolder\nfolder2')
                .onChange((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                this.plugin.settings.limitedFolders = value.split('\n')
                    .map(f => f.trim())
                    .filter(f => f.length > 0);
                yield this.plugin.saveSettings();
            }));
        });
        // Tag Mappings Section
        containerEl.createEl('h3', { text: 'Tag Mappings' });
        containerEl.createEl('p', {
            text: 'Define where files should be moved based on their tags.',
            cls: 'setting-item-description'
        });
        // Add New Mapping and Delete All Buttons at the top
        new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(containerEl)
            .addButton(button => button
            .setButtonText('Add New Mapping')
            .setCta() // Make it stand out as the primary action
            .onClick(() => this.showNewMappingModal()));
        // Existing Mappings
        const mappingsContainer = containerEl.createDiv('tag-mappings-container');
        if (this.plugin.settings.tagMappings.length === 0) {
            mappingsContainer.createEl('p', {
                text: 'No tag mappings defined yet. Click "Add New Mapping" to create one.',
                cls: 'setting-item-description'
            });
        }
        // Sort mappings by first tag
        const sortedMappings = [...this.plugin.settings.tagMappings]
            .sort((a, b) => a.tags[0].localeCompare(b.tags[0]));
        for (const mapping of sortedMappings) {
            const tagDisplay = mapping.tags.map(t => '#' + t).join(' + ');
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(mappingsContainer)
                .setName(tagDisplay)
                .setDesc(`Current destination: ${mapping.folder}`)
                .addButton(button => button
                .setButtonText('Edit')
                .onClick(() => {
                this.showEditMappingModal(mapping);
            }));
            // .addButton(button => button
            //   .setIcon('trash')
            //   .setTooltip('Delete mapping')
            //   .onClick(async () => {
            //     if (await this.showDeleteConfirmation(mapping)) {
            //       this.plugin.settings.tagMappings = this.plugin.settings.tagMappings
            //         .filter(m => m.id !== mapping.id);
            //       await this.plugin.saveSettings();
            //       this.display();
            //     }
            //   }));
        }
        ;
    }
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    showNewMappingModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
            modal.titleEl.setText('Create New Tag Mapping');
            const contentEl = modal.contentEl;
            let tagsInput;
            // Tags input
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .setName('Tags')
                .setDesc('Enter tags without # symbol, separated by commas. All tags must be present for the rule to apply.')
                .addText(text => {
                tagsInput = text;
                text.setPlaceholder('tag1, tag2, tag3');
            });
            // Folder input
            const folderSetting = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .setName('Destination Folder')
                .addText((text) => {
                this.folderInput = text;
                text.setPlaceholder('folder/subfolder');
                text.inputEl.style.width = '300px'; // Make input field wider
                text.onChange((value) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    const results = yield this.searchFolders(value);
                    this.displayFolderSuggestions(results);
                }));
            });
            // Buttons
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .addButton(button => button
                .setButtonText('Cancel')
                .onClick(() => modal.close()))
                .addButton(button => button
                .setButtonText('Add')
                .setCta()
                .onClick(() => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const tagsValue = tagsInput.getValue().trim();
                const folder = this.folderInput.getValue().trim();
                if (!tagsValue || !folder) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('Both tags and folder are required');
                    return;
                }
                const tags = tagsValue.split(',').map(t => t.trim()).filter(t => t.length > 0);
                if (tags.length === 0) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('At least one tag is required');
                    return;
                }
                // Check for duplicate tag combinations
                const tagSet = new Set(tags.map(t => t.toLowerCase()));
                if (this.plugin.settings.tagMappings.some(m => m.tags.length === tags.length &&
                    m.tags.every(t => tagSet.has(t.toLowerCase())))) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('This tag combination already has a mapping');
                    return;
                }
                const newMapping = {
                    id: this.generateId(),
                    tags,
                    folder
                };
                this.plugin.settings.tagMappings.push(newMapping);
                yield this.plugin.saveSettings();
                this.display();
                modal.close();
            })));
            modal.onClose = () => {
                // Clean up suggestions when modal is closed
                const suggestionsContainer = document.getElementById('folder-suggestions');
                if (suggestionsContainer) {
                    suggestionsContainer.remove();
                }
            };
            modal.open();
        });
    }
    searchFolders(query) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!query)
                return [];
            const folders = this.app.vault.getAllFolders();
            console.log('All folders:', folders);
            let folderPaths = folders.map(folder => {
                // Ensure leading slash for root-level folders
                return folder.path === '/' ? '/' : (folder.path.startsWith('/') ? folder.path : '/' + folder.path);
            });
            // If limited folders are set, only show folders within those paths
            if (this.plugin.settings.limitedFolders.length > 0) {
                const normalizedLimitedFolders = this.plugin.settings.limitedFolders.map(folder => folder.startsWith('/') ? folder : '/' + folder);
                folderPaths = folderPaths.filter(path => normalizedLimitedFolders.some(limitedFolder => path.startsWith(limitedFolder) || limitedFolder.startsWith(path)));
            }
            // Apply search query filter
            folderPaths = folderPaths
                .filter(path => path.toLowerCase().includes(query.toLowerCase()))
                .sort();
            return folderPaths;
        });
    }
    displayFolderSuggestions(folders) {
        // Clear previous suggestions
        const suggestionsContainer = document.getElementById('folder-suggestions');
        if (suggestionsContainer) {
            suggestionsContainer.remove();
        }
        // Create a new suggestions container
        const newContainer = document.createElement('div');
        newContainer.id = 'folder-suggestions';
        newContainer.style.position = 'absolute';
        newContainer.style.backgroundColor = 'white';
        newContainer.style.border = '1px solid #ccc';
        newContainer.style.zIndex = '1000';
        // Add suggestions to the container
        folders.forEach(folder => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = folder;
            suggestionItem.style.padding = '5px';
            suggestionItem.style.cursor = 'pointer';
            // Add click event to select folder
            suggestionItem.addEventListener('click', () => {
                this.folderInput.setValue(folder); // Set the input value to the selected folder
                newContainer.remove(); // Remove suggestions after selection
            });
            newContainer.appendChild(suggestionItem);
        });
        // Position the suggestions container under the input field
        const inputEl = this.folderInput.inputEl;
        const rect = inputEl.getBoundingClientRect();
        const modalEl = document.querySelector('.modal');
        const modalWidth = modalEl ? modalEl.getBoundingClientRect().width : 500;
        newContainer.style.position = 'absolute';
        newContainer.style.left = `${rect.left}px`;
        newContainer.style.top = `${rect.bottom}px`;
        newContainer.style.width = `${Math.min(modalWidth - 40, 300)}px`; // Use modal width minus padding, max 500px
        newContainer.style.maxHeight = '200px';
        newContainer.style.overflowY = 'auto';
        newContainer.style.overflowX = 'hidden';
        newContainer.style.textOverflow = 'ellipsis';
        newContainer.style.whiteSpace = 'nowrap';
        // Append the suggestions container
        document.body.appendChild(newContainer);
    }
    showEditMappingModal(mapping) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
            modal.titleEl.setText('Edit Tag Mapping');
            const contentEl = modal.contentEl;
            let tagsInput;
            // Tags input
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .setName('Tags')
                .setDesc('Enter tags without # symbol, separated by commas. All tags must be present for the rule to apply.')
                .addText(text => {
                tagsInput = text;
                text.setPlaceholder('tag1, tag2, tag3')
                    .setValue(mapping.tags.join(', '));
            });
            // Folder input
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .setName('Destination Folder')
                .addText((text) => {
                this.folderInput = text;
                text.setPlaceholder('folder/subfolder')
                    .setValue(mapping.folder);
            });
            // Buttons
            new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                .addButton(button => button
                .setButtonText('Cancel')
                .onClick(() => modal.close()))
                .addButton(button => button
                .setButtonText('Save')
                .setCta()
                .onClick(() => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const tagsValue = tagsInput.getValue().trim();
                const folder = this.folderInput.getValue().trim();
                if (!tagsValue || !folder) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('Both tags and folder are required');
                    return;
                }
                const tags = tagsValue.split(',').map(t => t.trim()).filter(t => t.length > 0);
                if (tags.length === 0) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('At least one tag is required');
                    return;
                }
                // Check for duplicate tag combinations, excluding the current mapping
                const tagSet = new Set(tags.map(t => t.toLowerCase()));
                if (this.plugin.settings.tagMappings.some(m => m.id !== mapping.id && // Exclude current mapping
                    m.tags.length === tags.length &&
                    m.tags.every(t => tagSet.has(t.toLowerCase())))) {
                    new obsidian__WEBPACK_IMPORTED_MODULE_0__.Notice('This tag combination already has a mapping');
                    return;
                }
                // Update the existing mapping
                mapping.tags = tags;
                mapping.folder = folder;
                yield this.plugin.saveSettings();
                this.display();
                modal.close();
            })));
            modal.onClose = () => {
                // Clean up suggestions when modal is closed
                const suggestionsContainer = document.getElementById('folder-suggestions');
                if (suggestionsContainer) {
                    suggestionsContainer.remove();
                }
            };
            modal.open();
        });
    }
    showDeleteAllConfirmation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
                modal.titleEl.setText('Delete All Tag Mappings');
                const contentEl = modal.contentEl;
                contentEl.createEl('p', {
                    text: 'Are you sure you want to delete all tag mappings? This action cannot be undone.'
                });
                new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                    .addButton(button => button
                    .setButtonText('Cancel')
                    .onClick(() => {
                    modal.close();
                    resolve(false);
                }))
                    .addButton(button => button
                    .setButtonText('Delete All')
                    .setWarning()
                    .onClick(() => {
                    modal.close();
                    resolve(true);
                }));
                modal.onClose = () => {
                    // Clean up suggestions when modal is closed
                    const suggestionsContainer = document.getElementById('folder-suggestions');
                    if (suggestionsContainer) {
                        suggestionsContainer.remove();
                    }
                };
                modal.open();
            });
        });
    }
    showDeleteConfirmation(mapping) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const modal = new obsidian__WEBPACK_IMPORTED_MODULE_0__.Modal(this.app);
                modal.titleEl.setText('Delete Tag Mapping');
                const contentEl = modal.contentEl;
                const tagDisplay = mapping.tags.map(t => '#' + t).join(' + ');
                contentEl.createEl('p', {
                    text: `Are you sure you want to delete the mapping for ${tagDisplay}?\n` +
                        `Files with these tags will no longer be moved automatically.`
                });
                new obsidian__WEBPACK_IMPORTED_MODULE_0__.Setting(contentEl)
                    .addButton(button => button
                    .setButtonText('Cancel')
                    .onClick(() => {
                    modal.close();
                    resolve(false);
                }))
                    .addButton(button => button
                    .setButtonText('Delete')
                    .setWarning()
                    .onClick(() => {
                    modal.close();
                    resolve(true);
                }));
                modal.onClose = () => {
                    // Clean up suggestions when modal is closed
                    const suggestionsContainer = document.getElementById('folder-suggestions');
                    if (suggestionsContainer) {
                        suggestionsContainer.remove();
                    }
                };
                modal.open();
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFnQixPQUFPLEVBQUUsTUFBTSxFQUFTLGdCQUFnQixFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUVoSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFnQjFDLE1BQU0sZ0JBQWdCLEdBQXNCO0lBQzFDLFdBQVcsRUFBRSxFQUFFO0lBQ2YsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixlQUFlLEVBQUUsRUFBRTtJQUNuQixjQUFjLEVBQUUsRUFBRTtJQUNsQixhQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsTUFBTTtJQUdwQyxHQUFHLENBQUMsT0FBZTtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTFCLG9EQUFvRDtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEdBQVMsRUFBRTtvQkFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFD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QUNaLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRVIsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7b0JBQ3JCLDRDQUE0QztvQkFDNUMsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQzNFLElBQUksb0JBQW9CLEVBQUUsQ0FBQzt3QkFDekIsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2hDLENBQUM7Z0JBQ0gsQ0FBQyxDQUFDO2dCQUVGLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW4sIE1vZGFsLCBBcHAsIENvbW1hbmQsIFNldHRpbmcsIE5vdGljZSwgVEZpbGUsIFBsdWdpblNldHRpbmdUYWIsIFRleHRDb21wb25lbnQgfSBmcm9tICdvYnNpZGlhbic7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIE1vdmUgYnkgVGFnIFBsdWdpbicpO1xuXG5pbnRlcmZhY2UgVGFnTWFwcGluZyB7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICBmb2xkZXI6IHN0cmluZztcbiAgaWQ6IHN0cmluZzsgLy8gVW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBtYXBwaW5nXG59XG5cbmludGVyZmFjZSBNb3ZlQnlUYWdTZXR0aW5ncyB7XG4gIHRhZ01hcHBpbmdzOiBUYWdNYXBwaW5nW107XG4gIGNvbmZpcm1CZWZvcmVNb3ZlOiBib29sZWFuO1xuICBleGNsdWRlZEZvbGRlcnM6IHN0cmluZ1tdO1xuICBsaW1pdGVkRm9sZGVyczogc3RyaW5nW107XG4gIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE1vdmVCeVRhZ1NldHRpbmdzID0ge1xuICB0YWdNYXBwaW5nczogW10sXG4gIGNvbmZpcm1CZWZvcmVNb3ZlOiB0cnVlLFxuICBleGNsdWRlZEZvbGRlcnM6IFtdLFxuICBsaW1pdGVkRm9sZGVyczogW10sXG4gIGVuYWJsZUxvZ2dpbmc6IHRydWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmVCeVRhZyBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzOiBNb3ZlQnlUYWdTZXR0aW5ncztcblxuICBwdWJsaWMgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZUxvZ2dpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbTW92ZSBieSBUYWddICR7bWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XG4gIH1cblxuICBhc3luYyBvbmxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuICAgIC8vIFRoaXMgYWRkcyBhIGNvbW1hbmQgdG8gdGhlIGFwcCdzIGNvbW1hbmQgcGFsZXR0ZS5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdtb3ZlLWJ5LXRhZycsXG4gICAgICBuYW1lOiAnTW92ZSBieSBUYWcnLFxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW92ZUJ5VGFnTW9kYWwodGhpcy5hcHAsIHRoaXMpO1xuICAgICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICBtb2RhbC5vcGVuKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gUmVnaXN0ZXIgdGhlIGNvbW1hbmQgaW4gT2JzaWRpYW5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdzaG93LWZpbGUtaW5mbycsXG4gICAgICBuYW1lOiAnU2hvdyBGaWxlIEluZm8nLFxuICAgICAgY2hlY2tDYWxsYmFjazogKGNoZWNraW5nOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgICAgICBpZiAoYWN0aXZlRmlsZSkge1xuICAgICAgICAgIGlmICghY2hlY2tpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0ZpbGVJbmZvKGFjdGl2ZUZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IE1vdmVCeVRhZ1NldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIGNvbnNvbGUubG9nKCdNb3ZlIGJ5IFRhZyBQbHVnaW4gbG9hZGVkJyk7XG4gICAgXG4gIH1cblxuICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnTW92ZSBieSBUYWcgUGx1Z2luIHVubG9hZGVkJyk7XG4gICAgLy8gUmVzZXQgc2V0dGluZ3MgdG8gZGVmYXVsdFxuICAgIC8vIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTKTtcbiAgICAvLyBhd2FpdCB0aGlzLnNhdmVEYXRhKHt9KTsgLy8gQ2xlYXIgYWxsIHN0b3JlZCBkYXRhXG4gIH1cblxuICBleHRyYWN0VGFncyhjb250ZW50OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdGFnUmVnZXggPSAvI1xcdysvZztcbiAgICByZXR1cm4gY29udGVudC5tYXRjaCh0YWdSZWdleCkgfHwgW107XG4gIH1cblxuICBhc3luYyBzaG93RmlsZUluZm8oZmlsZTogYW55KSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgdGhpcy5zaG93RmlsZUluZm9EaWFsb2coZmlsZS5wYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIHNob3dGaWxlSW5mb0RpYWxvZyhmaWxlUGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLnNwbGl0KCcvJykucG9wKCk7XG4gICAgY29uc3QgdGFncyA9IHRoaXMuZXh0cmFjdFRhZ3MoY29udGVudCk7XG5cbiAgICBjb25zdCBkaWFsb2dDb250ZW50ID0gYEZpbGUgTmFtZTogJHtmaWxlTmFtZX1cXG5Mb2NhdGlvbjogJHtmaWxlUGF0aH1cXG5UYWdzOiAke3RhZ3Muam9pbignLCAnKX1gO1xuXG4gICAgY29uc3QgZGlhbG9nID0gbmV3IEluZm9EaWFsb2codGhpcy5hcHAsIGRpYWxvZ0NvbnRlbnQpO1xuICAgIGRpYWxvZy5vcGVuKCk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgbG9hZGVkRGF0YSA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICBjb25zb2xlLmxvZygnTG9hZGVkIHNldHRpbmdzIGRhdGE6JywgbG9hZGVkRGF0YSk7XG5cbiAgICAvLyBJbml0aWFsaXplIHNldHRpbmdzIHdpdGggZGVmYXVsdHNcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi5ERUZBVUxUX1NFVFRJTkdTIH07XG5cbiAgICAvLyBDaGVjayBpZiB0YWdNYXBwaW5ncyBpcyBhbiBvYmplY3QgKG9sZCBmb3JtYXQpXG4gICAgaWYgKGxvYWRlZERhdGEgJiYgbG9hZGVkRGF0YS50YWdNYXBwaW5ncyAmJiB0eXBlb2YgbG9hZGVkRGF0YS50YWdNYXBwaW5ncyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkobG9hZGVkRGF0YS50YWdNYXBwaW5ncykpIHtcbiAgICAgIC8vIENvbnZlcnQgb2xkIGZvcm1hdCB0byBuZXcgZm9ybWF0XG4gICAgICBjb25zdCBvbGRNYXBwaW5nczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IGxvYWRlZERhdGEudGFnTWFwcGluZ3M7XG4gICAgICBjb25zdCBjb252ZXJ0ZWRNYXBwaW5nczogVGFnTWFwcGluZ1tdID0gW107XG5cbiAgICAgIC8vIEdyb3VwIG1hcHBpbmdzIGJ5IGZvbGRlclxuICAgICAgY29uc3QgZm9sZGVyVG9UYWdzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9sZE1hcHBpbmdzKS5mb3JFYWNoKChbdGFnLCBmb2xkZXJdKSA9PiB7XG4gICAgICAgIGlmICghZm9sZGVyVG9UYWdzW2ZvbGRlcl0pIHtcbiAgICAgICAgICBmb2xkZXJUb1RhZ3NbZm9sZGVyXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvbGRlclRvVGFnc1tmb2xkZXJdLnB1c2godGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgbmV3IG1hcHBpbmdzXG4gICAgICBPYmplY3QuZW50cmllcyhmb2xkZXJUb1RhZ3MpLmZvckVhY2goKFtmb2xkZXIsIHRhZ3NdKSA9PiB7XG4gICAgICAgIGNvbnZlcnRlZE1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgZm9sZGVyOiBmb2xkZXIsXG4gICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVJZCgpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MudGFnTWFwcGluZ3MgPSBjb252ZXJ0ZWRNYXBwaW5ncztcbiAgICB9IGVsc2UgaWYgKGxvYWRlZERhdGEgJiYgbG9hZGVkRGF0YS50YWdNYXBwaW5ncykge1xuICAgICAgLy8gSWYgbm90IGluIG9sZCBmb3JtYXQsIGFzc2lnbiBkaXJlY3RseVxuICAgICAgdGhpcy5zZXR0aW5ncy50YWdNYXBwaW5ncyA9IGxvYWRlZERhdGEudGFnTWFwcGluZ3M7XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgbG9hZGVkIGRhdGEgd2l0aCBzZXR0aW5nc1xuICAgIGlmIChsb2FkZWREYXRhKSB7XG4gICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAuLi50aGlzLnNldHRpbmdzLFxuICAgICAgICBjb25maXJtQmVmb3JlTW92ZTogbG9hZGVkRGF0YS5jb25maXJtQmVmb3JlTW92ZSA/PyBERUZBVUxUX1NFVFRJTkdTLmNvbmZpcm1CZWZvcmVNb3ZlLFxuICAgICAgICBleGNsdWRlZEZvbGRlcnM6IGxvYWRlZERhdGEuZXhjbHVkZWRGb2xkZXJzID8/IERFRkFVTFRfU0VUVElOR1MuZXhjbHVkZWRGb2xkZXJzLFxuICAgICAgICBsaW1pdGVkRm9sZGVyczogbG9hZGVkRGF0YS5saW1pdGVkRm9sZGVycyA/PyBERUZBVUxUX1NFVFRJTkdTLmxpbWl0ZWRGb2xkZXJzLFxuICAgICAgICBlbmFibGVMb2dnaW5nOiBsb2FkZWREYXRhLmVuYWJsZUxvZ2dpbmcgPz8gREVGQVVMVF9TRVRUSU5HUy5lbmFibGVMb2dnaW5nXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgZXhjbHVkZWQgZm9sZGVyczonLCB0aGlzLnNldHRpbmdzLmV4Y2x1ZGVkRm9sZGVycyk7XG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCBsaW1pdGVkIGZvbGRlcnM6JywgdGhpcy5zZXR0aW5ncy5saW1pdGVkRm9sZGVycyk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgY29uc29sZS5sb2coJ1NhdmluZyBzZXR0aW5ncyBkYXRhOicsIHRoaXMuc2V0dGluZ3MpO1xuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cblxuY2xhc3MgTW92ZUJ5VGFnTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE1vdmVCeVRhZ1NldHRpbmdzO1xuICBwcml2YXRlIHBsdWdpbjogTW92ZUJ5VGFnO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE1vdmVCeVRhZykge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHBsdWdpbi5zZXR0aW5ncztcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyhtb3ZlbWVudHM6IEFycmF5PHsgZmlsZTogVEZpbGU7IHRhcmdldFBhdGg6IHN0cmluZyB9Pik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5hcHApO1xuICAgICAgbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0NvbmZpcm0gRmlsZSBNb3ZlbWVudHMnIH0pO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBtb2RhbC5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnbW92ZS1ieS10YWctY29uZmlybWF0aW9uJyB9KTtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgncCcsIHsgdGV4dDogYEFib3V0IHRvIG1vdmUgJHttb3ZlbWVudHMubGVuZ3RofSBmaWxlczpgIH0pO1xuXG4gICAgICBjb25zdCBsaXN0ID0gY29udGFpbmVyLmNyZWF0ZUVsKCd1bCcpO1xuICAgICAgbW92ZW1lbnRzLnNsaWNlKDAsIDEwKS5mb3JFYWNoKCh7IGZpbGUsIHRhcmdldFBhdGggfSkgPT4ge1xuICAgICAgICBsaXN0LmNyZWF0ZUVsKCdsaScsIHsgdGV4dDogYCR7ZmlsZS5wYXRofSDihpIgJHt0YXJnZXRQYXRofWAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1vdmVtZW50cy5sZW5ndGggPiAxMCkge1xuICAgICAgICBjb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7IHRleHQ6IGAuLi5hbmQgJHttb3ZlbWVudHMubGVuZ3RoIC0gMTB9IG1vcmUgZmlsZXNgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnbW92ZS1ieS10YWctYnV0dG9ucycgfSk7XG5cbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ2FuY2VsJyB9KVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJ1dHRvbkNvbnRhaW5lci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQ29uZmlybScgfSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLnNldFRleHQoJ01vdmUgZmlsZXMgYmFzZWQgb24gdGhlaXIgdGFncycpO1xuICAgIHRoaXMucGx1Z2luLmxvZygnT3BlbmluZyBNb3ZlIGJ5IFRhZyBtb2RhbCcpO1xuXG4gICAgLy8gQWRkIGEgYnV0dG9uIHRvIHRyaWdnZXIgdGhlIGZpbGUgbW92ZW1lbnQgcHJvY2Vzc1xuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT4gYnRuXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdNb3ZlIEZpbGVzJylcbiAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHRoaXMubW92ZUZpbGVzQnlUYWcoKTtcbiAgICAgICAgfSkpO1xuICB9XG5cbiAgYXN5bmMgbW92ZUZpbGVzQnlUYWcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyB2YXVsdCB9ID0gdGhpcy5hcHA7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZygnU3RhcnRpbmcgZmlsZSBtb3ZlbWVudCBwcm9jZXNzLi4uJyk7XG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgIHRoaXMuc2V0dGluZ3MubGltaXRlZEZvbGRlcnMuc29tZShmb2xkZXIgPT4gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoZm9sZGVyKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucGx1Z2luLmxvZyhgRm91bmQgJHtmaWxlcy5sZW5ndGh9IG1hcmtkb3duIGZpbGVzIHRvdGFsYCk7XG5cbiAgICAgIGNvbnN0IG1vdmVtZW50czogQXJyYXk8eyBmaWxlOiBURmlsZTsgdGFyZ2V0UGF0aDogc3RyaW5nIH0+ID0gW107XG5cbiAgICAgIC8vIEZpcnN0LCBwbGFuIGFsbCBtb3ZlbWVudHNcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICB0aGlzLnBsdWdpbi5sb2coYFByb2Nlc3NpbmcgZmlsZTogJHtmaWxlLnBhdGh9YCk7XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIGZpbGUgcGF0aFxuICAgICAgICBjb25zdCBub3JtYWxpemVkRmlsZVBhdGggPSBmaWxlLnBhdGguc3RhcnRzV2l0aCgnLycpID8gZmlsZS5wYXRoIDogJy8nICsgZmlsZS5wYXRoO1xuXG4gICAgICAgIC8vIFNraXAgZmlsZXMgaW4gZXhjbHVkZWQgZm9sZGVyc1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5leGNsdWRlZEZvbGRlcnMuc29tZShmb2xkZXIgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuc3RhcnRzV2l0aCgnLycpID8gZm9sZGVyIDogJy8nICsgZm9sZGVyO1xuICAgICAgICAgIHJldHVybiBub3JtYWxpemVkRmlsZVBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYFNraXBwaW5nIGV4Y2x1ZGVkIGZpbGU6ICR7ZmlsZS5wYXRofWApO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFncyA9IGF3YWl0IHRoaXMuZXh0cmFjdFRhZ3MoZmlsZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLmxvZyhgRm91bmQgdGFncyBpbiAke2ZpbGUucGF0aH06ICR7dGFncy5qb2luKCcsICcpIHx8ICdub25lJ31gKTtcblxuICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuZ2V0VGFyZ2V0Rm9sZGVyRm9yVGFncyh0YWdzKTtcblxuICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRGb2xkZXI6IHN0cmluZyB8IG51bGwgPSBtYXRjaGVzWzBdLm1hcHBpbmcuZm9sZGVyO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgbWF0Y2hlcywgc2hvdyBkaWFsb2cgZm9yIHVzZXIgdG8gY2hvb3NlXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgRm91bmQgbXVsdGlwbGUgbWF0Y2hpbmcgZm9sZGVycyBmb3IgJHtmaWxlLnBhdGh9OiAke21hdGNoZXMubWFwKG0gPT4gbS5tYXBwaW5nLmZvbGRlcikuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgICAgdGFyZ2V0Rm9sZGVyID0gYXdhaXQgdGhpcy5zaG93UnVsZUNvbmZsaWN0RGlhbG9nKGZpbGUsIG1hdGNoZXMpO1xuXG4gICAgICAgICAgICAgIGlmICghdGFyZ2V0Rm9sZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBVc2VyIHNraXBwZWQgZmlsZSAke2ZpbGUucGF0aH0gZHVlIHRvIHJ1bGUgY29uZmxpY3RgKTtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKGBTa2lwcGVkICR7ZmlsZS5uYW1lfSBkdWUgdG8gcnVsZSBjb25mbGljdGApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgU2VsZWN0ZWQgdGFyZ2V0IGZvbGRlcjogJHt0YXJnZXRGb2xkZXJ9YCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoID0gYCR7dGFyZ2V0Rm9sZGVyfS8ke2ZpbGUubmFtZX1gO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBmaWxlIGFscmVhZHkgZXhpc3RzIGluIHRhcmdldFxuICAgICAgICAgICAgaWYgKGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZXhpc3RzKHRhcmdldFBhdGgpKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgRmlsZSBhbHJlYWR5IGV4aXN0cyBhdCB0YXJnZXQgbG9jYXRpb246ICR7dGFyZ2V0UGF0aH1gKTtcbiAgICAgICAgICAgICAgbmV3IE5vdGljZShgU2tpcHBpbmcgJHtmaWxlLm5hbWV9OiBGaWxlIGFscmVhZHkgZXhpc3RzIGluIHRhcmdldCBsb2NhdGlvbmApO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBQbGFubmluZyB0byBtb3ZlICR7ZmlsZS5wYXRofSB0byAke3RhcmdldFBhdGh9YCk7XG4gICAgICAgICAgICBtb3ZlbWVudHMucHVzaCh7IGZpbGUsIHRhcmdldFBhdGggfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgTm8gbWF0Y2hpbmcgZm9sZGVyIGZvdW5kIGZvciB0YWdzOiAke3RhZ3Muam9pbignLCAnKX1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBObyB0YWdzIGZvdW5kIGluIGZpbGU6ICR7ZmlsZS5wYXRofWApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5vIGZpbGVzIHRvIG1vdmUsIG5vdGlmeSBhbmQgY2xvc2VcbiAgICAgIGlmIChtb3ZlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucGx1Z2luLmxvZygnTm8gZmlsZXMgdG8gbW92ZSAtIG5vIHZhbGlkIHRhZyBtYXBwaW5ncyBmb3VuZCcpO1xuICAgICAgICBuZXcgTm90aWNlKCdObyBmaWxlcyB0byBtb3ZlJyk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kICR7bW92ZW1lbnRzLmxlbmd0aH0gZmlsZXMgdG8gbW92ZWApO1xuXG4gICAgICAvLyBTaG93IGNvbmZpcm1hdGlvbiBpZiBlbmFibGVkXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb25maXJtQmVmb3JlTW92ZSkge1xuICAgICAgICBjb25zdCBjb25maXJtZWQgPSBhd2FpdCB0aGlzLnNob3dDb25maXJtYXRpb25EaWFsb2cobW92ZW1lbnRzKTtcbiAgICAgICAgaWYgKCFjb25maXJtZWQpIHtcbiAgICAgICAgICBuZXcgTm90aWNlKCdPcGVyYXRpb24gY2FuY2VsbGVkJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBlcmZvcm0gbW92ZW1lbnRzXG4gICAgICBsZXQgc3VjY2Vzc0NvdW50ID0gMDtcbiAgICAgIGZvciAoY29uc3QgeyBmaWxlLCB0YXJnZXRQYXRoIH0gb2YgbW92ZW1lbnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQucmVuYW1lKGZpbGUsIHRhcmdldFBhdGgpO1xuICAgICAgICAgIHN1Y2Nlc3NDb3VudCsrO1xuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZUxvZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBNb3ZlZCAke2ZpbGUucGF0aH0gdG8gJHt0YXJnZXRQYXRofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBuZXcgTm90aWNlKGBGYWlsZWQgdG8gbW92ZSAke2ZpbGUubmFtZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXcgTm90aWNlKGBTdWNjZXNzZnVsbHkgbW92ZWQgJHtzdWNjZXNzQ291bnR9IG9mICR7bW92ZW1lbnRzLmxlbmd0aH0gZmlsZXNgKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbmV3IE5vdGljZShgRXJyb3IgZHVyaW5nIGZpbGUgbW92ZW1lbnQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01vdmUgYnkgVGFnIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBleHRyYWN0VGFncyhmaWxlOiBURmlsZSk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBSZWFkaW5nIGNvbnRlbnQgZnJvbSBmaWxlOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgdGFnUmVnZXggPSAvIyhbXFx3LV0rKS9nO1xuICAgICAgY29uc3QgdGFncyA9IFtdO1xuICAgICAgbGV0IG1hdGNoO1xuICAgICAgd2hpbGUgKChtYXRjaCA9IHRhZ1JlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICAgIHRhZ3MucHVzaChtYXRjaFsxXSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsdWdpbi5sb2coYEV4dHJhY3RlZCB0YWdzIGZyb20gJHtmaWxlLnBhdGh9OiAke3RhZ3Muam9pbignLCAnKSB8fCAnbm9uZSd9YCk7XG4gICAgICByZXR1cm4gdGFncztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBFcnJvciBleHRyYWN0aW5nIHRhZ3MgZnJvbSAke2ZpbGUucGF0aH06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBnZXRUYXJnZXRGb2xkZXJGb3JUYWdzKGZpbGVUYWdzOiBzdHJpbmdbXSk6IEFycmF5PHsgbWFwcGluZzogVGFnTWFwcGluZzsgbWF0Y2hlZFRhZ3M6IHN0cmluZ1tdIH0+IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50YWdNYXBwaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIG1hcHBpbmdzIGRlZmluZWQuJyk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdGhpcy5wbHVnaW4ubG9nKGBDaGVja2luZyB0YWcgbWFwcGluZ3MgZm9yIHRhZ3M6ICR7ZmlsZVRhZ3Muam9pbignLCAnKX1gKTtcbiAgICB0aGlzLnBsdWdpbi5sb2coYEF2YWlsYWJsZSBtYXBwaW5nczogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzLnRhZ01hcHBpbmdzKX1gKTtcblxuICAgIC8vIENvbnZlcnQgZmlsZSB0YWdzIHRvIGxvd2VyY2FzZSBmb3IgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaGluZ1xuICAgIGNvbnN0IGxvd2VyRmlsZVRhZ3MgPSBmaWxlVGFncy5tYXAodGFnID0+IHRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgICBjb25zdCBtYXRjaGVzOiBBcnJheTx7IG1hcHBpbmc6IFRhZ01hcHBpbmc7IG1hdGNoZWRUYWdzOiBzdHJpbmdbXSB9PiA9IFtdO1xuXG4gICAgLy8gQ2hlY2sgZWFjaCBtYXBwaW5nXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHRoaXMuc2V0dGluZ3MudGFnTWFwcGluZ3MpIHtcbiAgICAgIC8vIENvbnZlcnQgbWFwcGluZyB0YWdzIHRvIGxvd2VyY2FzZVxuICAgICAgY29uc3QgbG93ZXJNYXBwaW5nVGFncyA9IG1hcHBpbmcudGFncy5tYXAodGFnID0+IHRhZy50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgLy8gVHJhY2sgd2hpY2ggdGFncyBmcm9tIHRoZSBtYXBwaW5nIHdlcmUgZm91bmQgaW4gdGhlIGZpbGVcbiAgICAgIGNvbnN0IG1hdGNoZWRUYWdzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAvLyBDaGVjayBlYWNoIHRhZyBpbiB0aGUgbWFwcGluZ1xuICAgICAgZm9yIChjb25zdCBtYXBwaW5nVGFnIG9mIG1hcHBpbmcudGFncykge1xuICAgICAgICBjb25zdCBsb3dlck1hcHBpbmdUYWcgPSBtYXBwaW5nVGFnLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGZpbGUgdGFnIG1hdGNoZXMgdGhpcyBtYXBwaW5nIHRhZ1xuICAgICAgICBjb25zdCBtYXRjaGluZ0ZpbGVUYWcgPSBsb3dlckZpbGVUYWdzLmZpbmQoZmlsZVRhZyA9PlxuICAgICAgICAgIGZpbGVUYWcgPT09IGxvd2VyTWFwcGluZ1RhZyB8fFxuICAgICAgICAgIGZpbGVUYWcgPT09IGxvd2VyTWFwcGluZ1RhZyArICdzJyB8fFxuICAgICAgICAgIGZpbGVUYWcuc2xpY2UoMCwgLTEpID09PSBsb3dlck1hcHBpbmdUYWdcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdGaWxlVGFnKSB7XG4gICAgICAgICAgbWF0Y2hlZFRhZ3MucHVzaChtYXBwaW5nVGFnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhbGwgdGFncyBpbiB0aGUgbWFwcGluZyB3ZXJlIGZvdW5kLCBpdCdzIGEgbWF0Y2hcbiAgICAgIGlmIChtYXRjaGVkVGFncy5sZW5ndGggPT09IG1hcHBpbmcudGFncy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBGb3VuZCBtYXRjaGluZyBtYXBwaW5nOiAke21hcHBpbmcudGFncy5qb2luKCcgKyAnKX0g4oaSICR7bWFwcGluZy5mb2xkZXJ9YCk7XG4gICAgICAgIG1hdGNoZXMucHVzaCh7IG1hcHBpbmcsIG1hdGNoZWRUYWdzIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5wbHVnaW4ubG9nKCdObyBtYXRjaGluZyBmb2xkZXIgZm91bmQgZm9yIHRhZ3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd1J1bGVDb25mbGljdERpYWxvZyhmaWxlOiBURmlsZSwgbWF0Y2hlczogQXJyYXk8eyBtYXBwaW5nOiBUYWdNYXBwaW5nOyBtYXRjaGVkVGFnczogc3RyaW5nW10gfT4pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dChgXCIke2ZpbGUubmFtZX1cImApO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBtb2RhbC5jb250ZW50RWwuY3JlYXRlRWwoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICB0ZXh0OiBgVGhpcyBmaWxlIG1hdGNoZXMgbXVsdGlwbGUgdGFnIHJ1bGVzLiBQbGVhc2Ugc2VsZWN0IHdoaWNoIGZvbGRlciB0byBtb3ZlIGl0IHRvOmBcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaXN0ID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnKTtcbiAgICAgIG1hdGNoZXMuZm9yRWFjaCgoeyBtYXBwaW5nLCBtYXRjaGVkVGFncyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGxpc3QuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnbW92ZS1ieS10YWctcnVsZS1vcHRpb24nIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHJvdy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICAgIHRleHQ6IGBNb3ZlIHRvICR7bWFwcGluZy5mb2xkZXJ9ICh0YWdzOiAke21hcHBpbmcudGFncy5tYXAodCA9PiAnIycgKyB0KS5qb2luKCcgKyAnKX0pYCxcbiAgICAgICAgICBjbHM6ICdtb2QtY3RhJ1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcxMHB4JzsgLy8gQWRkIG1hcmdpbiB0byB0aGUgYm90dG9tIG9mIHRoZSBidXR0b25cblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKG1hcHBpbmcuZm9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGNhbmNlbCBidXR0b25cbiAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNvbnRhaW5lci5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICB0ZXh0OiAnU2tpcCB0aGlzIGZpbGUnLFxuICAgICAgICBjbHM6ICdtb3ZlLWJ5LXRhZy1jYW5jZWwnXG4gICAgICB9KTtcblxuICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfSk7XG5cbiAgICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgSW5mb0RpYWxvZyBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSBjb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuc2V0VGV4dCh0aGlzLmNvbnRlbnQpO1xuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgfVxufVxuXG5jbGFzcyBNb3ZlQnlUYWdTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHByaXZhdGUgZm9sZGVySW5wdXQ6IFRleHRDb21wb25lbnQ7IC8vIERlY2xhcmUgZm9sZGVySW5wdXQgaGVyZVxuICBwbHVnaW46IE1vdmVCeVRhZztcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNb3ZlQnlUYWcpIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIC8vIEdlbmVyYWwgU2V0dGluZ3MgU2VjdGlvblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0dlbmVyYWwgU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQ29uZmlybSBCZWZvcmUgTW92aW5nJylcbiAgICAgIC5zZXREZXNjKCdTaG93IGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIG1vdmluZyBmaWxlcycpXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZpcm1CZWZvcmVNb3ZlKVxuICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmlybUJlZm9yZU1vdmUgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRW5hYmxlIExvZ2dpbmcnKVxuICAgICAgLnNldERlc2MoJ0xvZyBmaWxlIG1vdmVtZW50cyB0byBjb25zb2xlJylcbiAgICAgIC5hZGRUb2dnbGUodG9nZ2xlID0+IHRvZ2dsZVxuICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlTG9nZ2luZylcbiAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUxvZ2dpbmcgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgLy8gRXhjbHVkZWQgRm9sZGVycyBTZWN0aW9uXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnRXhjbHVkZWQgRm9sZGVycycgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiAnRmlsZXMgaW4gdGhlc2UgZm9sZGVycyB3aWxsIG5vdCBiZSBtb3ZlZC4gT25lIGZvbGRlciBwYXRoIHBlciBsaW5lLicsXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5hZGRUZXh0QXJlYSh0ZXh0ID0+IHtcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgZnJvbSBzZXR0aW5nc1xuICAgICAgICBjb25zdCBleGNsdWRlZEZvbGRlcnMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5leGNsdWRlZEZvbGRlcnMgfHwgW107XG4gICAgICAgIHRleHQuc2V0VmFsdWUoZXhjbHVkZWRGb2xkZXJzLmpvaW4oJ1xcbicpKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignZm9sZGVyMS9zdWJmb2xkZXJcXG5mb2xkZXIyJylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5leGNsdWRlZEZvbGRlcnMgPSB2YWx1ZS5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgLm1hcChmID0+IGYudHJpbSgpKVxuICAgICAgICAgICAgICAuZmlsdGVyKGYgPT4gZi5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBTcGVjaWZpYyBGb2xkZXJzIFNlY3Rpb25cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdTcGVjaWZpYyBGb2xkZXJzJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6ICdGaWxlcyB3aWxsIG9ubHkgYmUgbW92ZWQgZnJvbSB0aGVzZSBmb2xkZXJzLiBPbmUgZm9sZGVyIHBhdGggcGVyIGxpbmUuJyxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbidcbiAgICB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLmFkZFRleHRBcmVhKHRleHQgPT4ge1xuICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZSBmcm9tIHNldHRpbmdzXG4gICAgICAgIGNvbnN0IGxpbWl0ZWRGb2xkZXJzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MubGltaXRlZEZvbGRlcnMgfHwgW107XG4gICAgICAgIHRleHQuc2V0VmFsdWUobGltaXRlZEZvbGRlcnMuam9pbignXFxuJykpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdmb2xkZXIxL3N1YmZvbGRlclxcbmZvbGRlcjInKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzID0gdmFsdWUuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgIC5tYXAoZiA9PiBmLnRyaW0oKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihmID0+IGYubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gVGFnIE1hcHBpbmdzIFNlY3Rpb25cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdUYWcgTWFwcGluZ3MnIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgdGV4dDogJ0RlZmluZSB3aGVyZSBmaWxlcyBzaG91bGQgYmUgbW92ZWQgYmFzZWQgb24gdGhlaXIgdGFncy4nLFxuICAgICAgY2xzOiAnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJ1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIE5ldyBNYXBwaW5nIGFuZCBEZWxldGUgQWxsIEJ1dHRvbnMgYXQgdGhlIHRvcFxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdBZGQgTmV3IE1hcHBpbmcnKVxuICAgICAgICAuc2V0Q3RhKCkgLy8gTWFrZSBpdCBzdGFuZCBvdXQgYXMgdGhlIHByaW1hcnkgYWN0aW9uXG4gICAgICAgIC5vbkNsaWNrKCgpID0+IHRoaXMuc2hvd05ld01hcHBpbmdNb2RhbCgpKSk7XG5cbiAgICAvLyBFeGlzdGluZyBNYXBwaW5nc1xuICAgIGNvbnN0IG1hcHBpbmdzQ29udGFpbmVyID0gY29udGFpbmVyRWwuY3JlYXRlRGl2KCd0YWctbWFwcGluZ3MtY29udGFpbmVyJyk7XG5cbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnTWFwcGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBtYXBwaW5nc0NvbnRhaW5lci5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgdGV4dDogJ05vIHRhZyBtYXBwaW5ncyBkZWZpbmVkIHlldC4gQ2xpY2sgXCJBZGQgTmV3IE1hcHBpbmdcIiB0byBjcmVhdGUgb25lLicsXG4gICAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvcnQgbWFwcGluZ3MgYnkgZmlyc3QgdGFnXG4gICAgY29uc3Qgc29ydGVkTWFwcGluZ3MgPSBbLi4udGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnTWFwcGluZ3NdXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS50YWdzWzBdLmxvY2FsZUNvbXBhcmUoYi50YWdzWzBdKSk7XG5cbiAgICBmb3IgKGNvbnN0IG1hcHBpbmcgb2Ygc29ydGVkTWFwcGluZ3MpIHtcbiAgICAgIGNvbnN0IHRhZ0Rpc3BsYXkgPSBtYXBwaW5nLnRhZ3MubWFwKHQgPT4gJyMnICsgdCkuam9pbignICsgJyk7XG5cbiAgICAgIG5ldyBTZXR0aW5nKG1hcHBpbmdzQ29udGFpbmVyKVxuICAgICAgICAuc2V0TmFtZSh0YWdEaXNwbGF5KVxuICAgICAgICAuc2V0RGVzYyhgQ3VycmVudCBkZXN0aW5hdGlvbjogJHttYXBwaW5nLmZvbGRlcn1gKVxuICAgICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dCgnRWRpdCcpXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RWRpdE1hcHBpbmdNb2RhbChtYXBwaW5nKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAvLyAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgIC8vICAgLnNldEljb24oJ3RyYXNoJylcbiAgICAgIC8vICAgLnNldFRvb2x0aXAoJ0RlbGV0ZSBtYXBwaW5nJylcbiAgICAgIC8vICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gICAgIGlmIChhd2FpdCB0aGlzLnNob3dEZWxldGVDb25maXJtYXRpb24obWFwcGluZykpIHtcbiAgICAgIC8vICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnTWFwcGluZ3NcbiAgICAgIC8vICAgICAgICAgLmZpbHRlcihtID0+IG0uaWQgIT09IG1hcHBpbmcuaWQpO1xuICAgICAgLy8gICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAvLyAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93TmV3TWFwcGluZ01vZGFsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoJ0NyZWF0ZSBOZXcgVGFnIE1hcHBpbmcnKTtcblxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IG1vZGFsLmNvbnRlbnRFbDtcbiAgICBsZXQgdGFnc0lucHV0OiBUZXh0Q29tcG9uZW50O1xuXG4gICAgLy8gVGFncyBpbnB1dFxuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdUYWdzJylcbiAgICAgIC5zZXREZXNjKCdFbnRlciB0YWdzIHdpdGhvdXQgIyBzeW1ib2wsIHNlcGFyYXRlZCBieSBjb21tYXMuIEFsbCB0YWdzIG11c3QgYmUgcHJlc2VudCBmb3IgdGhlIHJ1bGUgdG8gYXBwbHkuJylcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICB0YWdzSW5wdXQgPSB0ZXh0O1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCd0YWcxLCB0YWcyLCB0YWczJyk7XG4gICAgICB9KTtcblxuICAgIC8vIEZvbGRlciBpbnB1dFxuICAgIGNvbnN0IGZvbGRlclNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnRGVzdGluYXRpb24gRm9sZGVyJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRoaXMuZm9sZGVySW5wdXQgPSB0ZXh0O1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdmb2xkZXIvc3ViZm9sZGVyJyk7XG4gICAgICAgIHRleHQuaW5wdXRFbC5zdHlsZS53aWR0aCA9ICczMDBweCc7IC8vIE1ha2UgaW5wdXQgZmllbGQgd2lkZXJcbiAgICAgICAgdGV4dC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLnNlYXJjaEZvbGRlcnModmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5Rm9sZGVyU3VnZ2VzdGlvbnMocmVzdWx0cyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnNcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgLnNldEJ1dHRvblRleHQoJ0NhbmNlbCcpXG4gICAgICAgIC5vbkNsaWNrKCgpID0+IG1vZGFsLmNsb3NlKCkpKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdBZGQnKVxuICAgICAgICAuc2V0Q3RhKClcbiAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhZ3NWYWx1ZSA9IHRhZ3NJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBmb2xkZXIgPSB0aGlzLmZvbGRlcklucHV0LmdldFZhbHVlKCkudHJpbSgpO1xuXG4gICAgICAgICAgaWYgKCF0YWdzVmFsdWUgfHwgIWZvbGRlcikge1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnQm90aCB0YWdzIGFuZCBmb2xkZXIgYXJlIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGFncyA9IHRhZ3NWYWx1ZS5zcGxpdCgnLCcpLm1hcCh0ID0+IHQudHJpbSgpKS5maWx0ZXIodCA9PiB0Lmxlbmd0aCA+IDApO1xuICAgICAgICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnQXQgbGVhc3Qgb25lIHRhZyBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgdGFnIGNvbWJpbmF0aW9uc1xuICAgICAgICAgIGNvbnN0IHRhZ1NldCA9IG5ldyBTZXQodGFncy5tYXAodCA9PiB0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnTWFwcGluZ3Muc29tZShtID0+XG4gICAgICAgICAgICBtLnRhZ3MubGVuZ3RoID09PSB0YWdzLmxlbmd0aCAmJlxuICAgICAgICAgICAgbS50YWdzLmV2ZXJ5KHQgPT4gdGFnU2V0Lmhhcyh0LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICAgICkpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1RoaXMgdGFnIGNvbWJpbmF0aW9uIGFscmVhZHkgaGFzIGEgbWFwcGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5ld01hcHBpbmc6IFRhZ01hcHBpbmcgPSB7XG4gICAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKCksXG4gICAgICAgICAgICB0YWdzLFxuICAgICAgICAgICAgZm9sZGVyXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLnB1c2gobmV3TWFwcGluZyk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VhcmNoRm9sZGVycyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGlmICghcXVlcnkpIHJldHVybiBbXTtcbiAgICBcbiAgICBjb25zdCBmb2xkZXJzID0gdGhpcy5hcHAudmF1bHQuZ2V0QWxsRm9sZGVycygpO1xuICAgIGNvbnNvbGUubG9nKCdBbGwgZm9sZGVyczonLCBmb2xkZXJzKTtcbiAgICBcbiAgICBsZXQgZm9sZGVyUGF0aHMgPSBmb2xkZXJzLm1hcChmb2xkZXIgPT4ge1xuICAgICAgLy8gRW5zdXJlIGxlYWRpbmcgc2xhc2ggZm9yIHJvb3QtbGV2ZWwgZm9sZGVyc1xuICAgICAgcmV0dXJuIGZvbGRlci5wYXRoID09PSAnLycgPyAnLycgOiAoZm9sZGVyLnBhdGguc3RhcnRzV2l0aCgnLycpID8gZm9sZGVyLnBhdGggOiAnLycgKyBmb2xkZXIucGF0aCk7XG4gICAgfSk7XG5cbiAgICAvLyBJZiBsaW1pdGVkIGZvbGRlcnMgYXJlIHNldCwgb25seSBzaG93IGZvbGRlcnMgd2l0aGluIHRob3NlIHBhdGhzXG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRMaW1pdGVkRm9sZGVycyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzLm1hcChmb2xkZXIgPT4gXG4gICAgICAgIGZvbGRlci5zdGFydHNXaXRoKCcvJykgPyBmb2xkZXIgOiAnLycgKyBmb2xkZXJcbiAgICAgICk7XG4gICAgICBcbiAgICAgIGZvbGRlclBhdGhzID0gZm9sZGVyUGF0aHMuZmlsdGVyKHBhdGggPT4gXG4gICAgICAgIG5vcm1hbGl6ZWRMaW1pdGVkRm9sZGVycy5zb21lKGxpbWl0ZWRGb2xkZXIgPT4gXG4gICAgICAgICAgcGF0aC5zdGFydHNXaXRoKGxpbWl0ZWRGb2xkZXIpIHx8IGxpbWl0ZWRGb2xkZXIuc3RhcnRzV2l0aChwYXRoKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBBcHBseSBzZWFyY2ggcXVlcnkgZmlsdGVyXG4gICAgZm9sZGVyUGF0aHMgPSBmb2xkZXJQYXRoc1xuICAgICAgLmZpbHRlcihwYXRoID0+IHBhdGgudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSlcbiAgICAgIC5zb3J0KCk7XG4gICAgXG4gICAgcmV0dXJuIGZvbGRlclBhdGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5Rm9sZGVyU3VnZ2VzdGlvbnMoZm9sZGVyczogc3RyaW5nW10pIHtcbiAgICAvLyBDbGVhciBwcmV2aW91cyBzdWdnZXN0aW9uc1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHN1Z2dlc3Rpb25zIGNvbnRhaW5lclxuICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0NvbnRhaW5lci5pZCA9ICdmb2xkZXItc3VnZ2VzdGlvbnMnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2NjYyc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMDAwJztcblxuICAgIC8vIEFkZCBzdWdnZXN0aW9ucyB0byB0aGUgY29udGFpbmVyXG4gICAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0udGV4dENvbnRlbnQgPSBmb2xkZXI7XG4gICAgICBzdWdnZXN0aW9uSXRlbS5zdHlsZS5wYWRkaW5nID0gJzVweCc7XG4gICAgICBzdWdnZXN0aW9uSXRlbS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgICAgIC8vIEFkZCBjbGljayBldmVudCB0byBzZWxlY3QgZm9sZGVyXG4gICAgICBzdWdnZXN0aW9uSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5mb2xkZXJJbnB1dC5zZXRWYWx1ZShmb2xkZXIpOyAvLyBTZXQgdGhlIGlucHV0IHZhbHVlIHRvIHRoZSBzZWxlY3RlZCBmb2xkZXJcbiAgICAgICAgbmV3Q29udGFpbmVyLnJlbW92ZSgpOyAvLyBSZW1vdmUgc3VnZ2VzdGlvbnMgYWZ0ZXIgc2VsZWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25JdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXIgdW5kZXIgdGhlIGlucHV0IGZpZWxkXG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuZm9sZGVySW5wdXQuaW5wdXRFbDtcbiAgICBjb25zdCByZWN0ID0gaW5wdXRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBtb2RhbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3QgbW9kYWxXaWR0aCA9IG1vZGFsRWwgPyBtb2RhbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogNTAwO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtyZWN0LmJvdHRvbX1weGA7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7TWF0aC5taW4obW9kYWxXaWR0aCAtIDQwLCAzMDApfXB4YDsgLy8gVXNlIG1vZGFsIHdpZHRoIG1pbnVzIHBhZGRpbmcsIG1heCA1MDBweFxuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnMjAwcHgnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnZWxsaXBzaXMnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgXG4gICAgLy8gQXBwZW5kIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0NvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dFZGl0TWFwcGluZ01vZGFsKG1hcHBpbmc6IFRhZ01hcHBpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KCdFZGl0IFRhZyBNYXBwaW5nJyk7XG5cbiAgICBjb25zdCBjb250ZW50RWwgPSBtb2RhbC5jb250ZW50RWw7XG4gICAgbGV0IHRhZ3NJbnB1dDogVGV4dENvbXBvbmVudDtcblxuICAgIC8vIFRhZ3MgaW5wdXRcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnVGFncycpXG4gICAgICAuc2V0RGVzYygnRW50ZXIgdGFncyB3aXRob3V0ICMgc3ltYm9sLCBzZXBhcmF0ZWQgYnkgY29tbWFzLiBBbGwgdGFncyBtdXN0IGJlIHByZXNlbnQgZm9yIHRoZSBydWxlIHRvIGFwcGx5LicpXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHtcbiAgICAgICAgdGFnc0lucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcigndGFnMSwgdGFnMiwgdGFnMycpXG4gICAgICAgICAgLnNldFZhbHVlKG1hcHBpbmcudGFncy5qb2luKCcsICcpKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gRm9sZGVyIGlucHV0XG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0Rlc3RpbmF0aW9uIEZvbGRlcicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmZvbGRlcklucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignZm9sZGVyL3N1YmZvbGRlcicpXG4gICAgICAgICAgLnNldFZhbHVlKG1hcHBpbmcuZm9sZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQ2FuY2VsJylcbiAgICAgICAgLm9uQ2xpY2soKCkgPT4gbW9kYWwuY2xvc2UoKSkpXG4gICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgLnNldEJ1dHRvblRleHQoJ1NhdmUnKVxuICAgICAgICAuc2V0Q3RhKClcbiAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhZ3NWYWx1ZSA9IHRhZ3NJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBmb2xkZXIgPSB0aGlzLmZvbGRlcklucHV0LmdldFZhbHVlKCkudHJpbSgpO1xuXG4gICAgICAgICAgaWYgKCF0YWdzVmFsdWUgfHwgIWZvbGRlcikge1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnQm90aCB0YWdzIGFuZCBmb2xkZXIgYXJlIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdGFncyA9IHRhZ3NWYWx1ZS5zcGxpdCgnLCcpLm1hcCh0ID0+IHQudHJpbSgpKS5maWx0ZXIodCA9PiB0Lmxlbmd0aCA+IDApO1xuICAgICAgICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnQXQgbGVhc3Qgb25lIHRhZyBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGZvciBkdXBsaWNhdGUgdGFnIGNvbWJpbmF0aW9ucywgZXhjbHVkaW5nIHRoZSBjdXJyZW50IG1hcHBpbmdcbiAgICAgICAgICBjb25zdCB0YWdTZXQgPSBuZXcgU2V0KHRhZ3MubWFwKHQgPT4gdC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLnNvbWUobSA9PlxuICAgICAgICAgICAgbS5pZCAhPT0gbWFwcGluZy5pZCAmJiAvLyBFeGNsdWRlIGN1cnJlbnQgbWFwcGluZ1xuICAgICAgICAgICAgbS50YWdzLmxlbmd0aCA9PT0gdGFncy5sZW5ndGggJiZcbiAgICAgICAgICAgIG0udGFncy5ldmVyeSh0ID0+IHRhZ1NldC5oYXModC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICApKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdUaGlzIHRhZyBjb21iaW5hdGlvbiBhbHJlYWR5IGhhcyBhIG1hcHBpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIGV4aXN0aW5nIG1hcHBpbmdcbiAgICAgICAgICBtYXBwaW5nLnRhZ3MgPSB0YWdzO1xuICAgICAgICAgIG1hcHBpbmcuZm9sZGVyID0gZm9sZGVyO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0RlbGV0ZUFsbENvbmZpcm1hdGlvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dCgnRGVsZXRlIEFsbCBUYWcgTWFwcGluZ3MnKTtcblxuICAgICAgY29uc3QgY29udGVudEVsID0gbW9kYWwuY29udGVudEVsO1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICB0ZXh0OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgdGFnIG1hcHBpbmdzPyBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLidcbiAgICAgIH0pO1xuXG4gICAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAgIC5zZXRCdXR0b25UZXh0KCdDYW5jZWwnKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9KSlcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0RlbGV0ZSBBbGwnKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9KSk7XG5cbiAgICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dEZWxldGVDb25maXJtYXRpb24obWFwcGluZzogVGFnTWFwcGluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5hcHApO1xuICAgICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KCdEZWxldGUgVGFnIE1hcHBpbmcnKTtcblxuICAgICAgY29uc3QgY29udGVudEVsID0gbW9kYWwuY29udGVudEVsO1xuICAgICAgY29uc3QgdGFnRGlzcGxheSA9IG1hcHBpbmcudGFncy5tYXAodCA9PiAnIycgKyB0KS5qb2luKCcgKyAnKTtcblxuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgbWFwcGluZyBmb3IgJHt0YWdEaXNwbGF5fT9cXG5gICtcbiAgICAgICAgICBgRmlsZXMgd2l0aCB0aGVzZSB0YWdzIHdpbGwgbm8gbG9uZ2VyIGJlIG1vdmVkIGF1dG9tYXRpY2FsbHkuYFxuICAgICAgfSk7XG5cbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0NhbmNlbCcpXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH0pKVxuICAgICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dCgnRGVsZXRlJylcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map