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
            const loadedData = yield this.loadData();
            console.log('Loaded settings data:', loadedData);
            // Check if tagMappings is an object (old format)
            if (loadedData.tagMappings && typeof loadedData.tagMappings === 'object' && !Array.isArray(loadedData.tagMappings)) {
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
            else {
                // If not in old format, assign directly
                this.settings.tagMappings = loadedData.tagMappings || [];
            }
            console.log('Loaded excluded folders:', loadedData.excludedFolders);
            console.log('Loaded limited folders:', loadedData.limitedFolders);
            // Merge with default settings
            this.settings = Object.assign(Object.assign({}, DEFAULT_SETTINGS), this.settings);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFnQixPQUFPLEVBQUUsTUFBTSxFQUFTLGdCQUFnQixFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUVoSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFnQjFDLE1BQU0sZ0JBQWdCLEdBQXNCO0lBQzFDLFdBQVcsRUFBRSxFQUFFO0lBQ2YsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixlQUFlLEVBQUUsRUFBRTtJQUNuQixjQUFjLEVBQUUsRUFBRTtJQUNsQixhQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsTUFBTTtJQUdwQyxHQUFHLENBQUMsT0FBZTtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTFCLG9EQUFvRDtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEdBQVMsRUFBRTtvQkFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFD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aW1wb3J0IHsgUGx1Z2luLCBNb2RhbCwgQXBwLCBDb21tYW5kLCBTZXR0aW5nLCBOb3RpY2UsIFRGaWxlLCBQbHVnaW5TZXR0aW5nVGFiLCBUZXh0Q29tcG9uZW50IH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5jb25zb2xlLmxvZygnTG9hZGluZyBNb3ZlIGJ5IFRhZyBQbHVnaW4nKTtcblxuaW50ZXJmYWNlIFRhZ01hcHBpbmcge1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgZm9sZGVyOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7IC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgbWFwcGluZ1xufVxuXG5pbnRlcmZhY2UgTW92ZUJ5VGFnU2V0dGluZ3Mge1xuICB0YWdNYXBwaW5nczogVGFnTWFwcGluZ1tdO1xuICBjb25maXJtQmVmb3JlTW92ZTogYm9vbGVhbjtcbiAgZXhjbHVkZWRGb2xkZXJzOiBzdHJpbmdbXTtcbiAgbGltaXRlZEZvbGRlcnM6IHN0cmluZ1tdO1xuICBlbmFibGVMb2dnaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNb3ZlQnlUYWdTZXR0aW5ncyA9IHtcbiAgdGFnTWFwcGluZ3M6IFtdLFxuICBjb25maXJtQmVmb3JlTW92ZTogdHJ1ZSxcbiAgZXhjbHVkZWRGb2xkZXJzOiBbXSxcbiAgbGltaXRlZEZvbGRlcnM6IFtdLFxuICBlbmFibGVMb2dnaW5nOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlQnlUYWcgZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogTW92ZUJ5VGFnU2V0dGluZ3M7XG5cbiAgcHVibGljIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW01vdmUgYnkgVGFnXSAke21lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xuICB9XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBUaGlzIGFkZHMgYSBjb21tYW5kIHRvIHRoZSBhcHAncyBjb21tYW5kIHBhbGV0dGUuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbW92ZS1ieS10YWcnLFxuICAgICAgbmFtZTogJ01vdmUgYnkgVGFnJyxcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vdmVCeVRhZ01vZGFsKHRoaXMuYXBwLCB0aGlzKTtcbiAgICAgICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgbW9kYWwub3BlbigpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21tYW5kIGluIE9ic2lkaWFuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy1maWxlLWluZm8nLFxuICAgICAgbmFtZTogJ1Nob3cgRmlsZSBJbmZvJyxcbiAgICAgIGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpbGUpIHtcbiAgICAgICAgICBpZiAoIWNoZWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dGaWxlSW5mbyhhY3RpdmVGaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNb3ZlQnlUYWdTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICBjb25zb2xlLmxvZygnTW92ZSBieSBUYWcgUGx1Z2luIGxvYWRlZCcpO1xuICAgIFxuICB9XG5cbiAgYXN5bmMgb251bmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ01vdmUgYnkgVGFnIFBsdWdpbiB1bmxvYWRlZCcpO1xuICAgIC8vIFJlc2V0IHNldHRpbmdzIHRvIGRlZmF1bHRcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUyk7XG4gICAgLy8gYXdhaXQgdGhpcy5zYXZlRGF0YSh7fSk7IC8vIENsZWFyIGFsbCBzdG9yZWQgZGF0YVxuICB9XG5cbiAgZXh0cmFjdFRhZ3MoY29udGVudDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHRhZ1JlZ2V4ID0gLyNcXHcrL2c7XG4gICAgcmV0dXJuIGNvbnRlbnQubWF0Y2godGFnUmVnZXgpIHx8IFtdO1xuICB9XG5cbiAgYXN5bmMgc2hvd0ZpbGVJbmZvKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIHRoaXMuc2hvd0ZpbGVJbmZvRGlhbG9nKGZpbGUucGF0aCwgY29udGVudCk7XG4gIH1cblxuICBzaG93RmlsZUluZm9EaWFsb2coZmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLmV4dHJhY3RUYWdzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgZGlhbG9nQ29udGVudCA9IGBGaWxlIE5hbWU6ICR7ZmlsZU5hbWV9XFxuTG9jYXRpb246ICR7ZmlsZVBhdGh9XFxuVGFnczogJHt0YWdzLmpvaW4oJywgJyl9YDtcblxuICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBJbmZvRGlhbG9nKHRoaXMuYXBwLCBkaWFsb2dDb250ZW50KTtcbiAgICBkaWFsb2cub3BlbigpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIGNvbnN0IGxvYWRlZERhdGEgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCBzZXR0aW5ncyBkYXRhOicsIGxvYWRlZERhdGEpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGFnTWFwcGluZ3MgaXMgYW4gb2JqZWN0IChvbGQgZm9ybWF0KVxuICAgIGlmIChsb2FkZWREYXRhLnRhZ01hcHBpbmdzICYmIHR5cGVvZiBsb2FkZWREYXRhLnRhZ01hcHBpbmdzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShsb2FkZWREYXRhLnRhZ01hcHBpbmdzKSkge1xuICAgICAgLy8gQ29udmVydCBvbGQgZm9ybWF0IHRvIG5ldyBmb3JtYXRcbiAgICAgIGNvbnN0IG9sZE1hcHBpbmdzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbG9hZGVkRGF0YS50YWdNYXBwaW5ncztcbiAgICAgIGNvbnN0IGNvbnZlcnRlZE1hcHBpbmdzOiBUYWdNYXBwaW5nW10gPSBbXTtcblxuICAgICAgLy8gR3JvdXAgbWFwcGluZ3MgYnkgZm9sZGVyXG4gICAgICBjb25zdCBmb2xkZXJUb1RhZ3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuICAgICAgT2JqZWN0LmVudHJpZXMob2xkTWFwcGluZ3MpLmZvckVhY2goKFt0YWcsIGZvbGRlcl0pID0+IHtcbiAgICAgICAgaWYgKCFmb2xkZXJUb1RhZ3NbZm9sZGVyXSkge1xuICAgICAgICAgIGZvbGRlclRvVGFnc1tmb2xkZXJdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZm9sZGVyVG9UYWdzW2ZvbGRlcl0ucHVzaCh0YWcpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgbWFwcGluZ3NcbiAgICAgIE9iamVjdC5lbnRyaWVzKGZvbGRlclRvVGFncykuZm9yRWFjaCgoW2ZvbGRlciwgdGFnc10pID0+IHtcbiAgICAgICAgY29udmVydGVkTWFwcGluZ3MucHVzaCh7XG4gICAgICAgICAgdGFnczogdGFncyxcbiAgICAgICAgICBmb2xkZXI6IGZvbGRlcixcbiAgICAgICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKClcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXR0aW5ncy50YWdNYXBwaW5ncyA9IGNvbnZlcnRlZE1hcHBpbmdzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBub3QgaW4gb2xkIGZvcm1hdCwgYXNzaWduIGRpcmVjdGx5XG4gICAgICB0aGlzLnNldHRpbmdzLnRhZ01hcHBpbmdzID0gbG9hZGVkRGF0YS50YWdNYXBwaW5ncyB8fCBbXTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnTG9hZGVkIGV4Y2x1ZGVkIGZvbGRlcnM6JywgbG9hZGVkRGF0YS5leGNsdWRlZEZvbGRlcnMpO1xuICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgbGltaXRlZCBmb2xkZXJzOicsIGxvYWRlZERhdGEubGltaXRlZEZvbGRlcnMpO1xuXG4gICAgLy8gTWVyZ2Ugd2l0aCBkZWZhdWx0IHNldHRpbmdzXG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUywgLi4udGhpcy5zZXR0aW5ncyB9O1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgc2V0dGluZ3MgZGF0YTonLCB0aGlzLnNldHRpbmdzKTtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG5cbmNsYXNzIE1vdmVCeVRhZ01vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHNldHRpbmdzOiBNb3ZlQnlUYWdTZXR0aW5ncztcbiAgcHJpdmF0ZSBwbHVnaW46IE1vdmVCeVRhZztcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNb3ZlQnlUYWcpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBwbHVnaW4uc2V0dGluZ3M7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dDb25maXJtYXRpb25EaWFsb2cobW92ZW1lbnRzOiBBcnJheTx7IGZpbGU6IFRGaWxlOyB0YXJnZXRQYXRoOiBzdHJpbmcgfT4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdDb25maXJtIEZpbGUgTW92ZW1lbnRzJyB9KTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLWNvbmZpcm1hdGlvbicgfSk7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7IHRleHQ6IGBBYm91dCB0byBtb3ZlICR7bW92ZW1lbnRzLmxlbmd0aH0gZmlsZXM6YCB9KTtcblxuICAgICAgY29uc3QgbGlzdCA9IGNvbnRhaW5lci5jcmVhdGVFbCgndWwnKTtcbiAgICAgIG1vdmVtZW50cy5zbGljZSgwLCAxMCkuZm9yRWFjaCgoeyBmaWxlLCB0YXJnZXRQYXRoIH0pID0+IHtcbiAgICAgICAgbGlzdC5jcmVhdGVFbCgnbGknLCB7IHRleHQ6IGAke2ZpbGUucGF0aH0g4oaSICR7dGFyZ2V0UGF0aH1gIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtb3ZlbWVudHMubGVuZ3RoID4gMTApIHtcbiAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKCdwJywgeyB0ZXh0OiBgLi4uYW5kICR7bW92ZW1lbnRzLmxlbmd0aCAtIDEwfSBtb3JlIGZpbGVzYCB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLWJ1dHRvbnMnIH0pO1xuXG4gICAgICBidXR0b25Db250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbCcgfSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBidXR0b25Db250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NvbmZpcm0nIH0pXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5zZXRUZXh0KCdNb3ZlIGZpbGVzIGJhc2VkIG9uIHRoZWlyIHRhZ3MnKTtcbiAgICB0aGlzLnBsdWdpbi5sb2coJ09wZW5pbmcgTW92ZSBieSBUYWcgbW9kYWwnKTtcblxuICAgIC8vIEFkZCBhIGJ1dHRvbiB0byB0cmlnZ2VyIHRoZSBmaWxlIG1vdmVtZW50IHByb2Nlc3NcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+IGJ0blxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnTW92ZSBGaWxlcycpXG4gICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVGaWxlc0J5VGFnKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIG1vdmVGaWxlc0J5VGFnKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHRoaXMuYXBwO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsdWdpbi5sb2coJ1N0YXJ0aW5nIGZpbGUgbW92ZW1lbnQgcHJvY2Vzcy4uLicpO1xuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzLnNvbWUoZm9sZGVyID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGZvbGRlcikpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kICR7ZmlsZXMubGVuZ3RofSBtYXJrZG93biBmaWxlcyB0b3RhbGApO1xuXG4gICAgICBjb25zdCBtb3ZlbWVudHM6IEFycmF5PHsgZmlsZTogVEZpbGU7IHRhcmdldFBhdGg6IHN0cmluZyB9PiA9IFtdO1xuXG4gICAgICAvLyBGaXJzdCwgcGxhbiBhbGwgbW92ZW1lbnRzXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBQcm9jZXNzaW5nIGZpbGU6ICR7ZmlsZS5wYXRofWApO1xuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBmaWxlIHBhdGhcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZpbGVQYXRoID0gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGZpbGUucGF0aCA6ICcvJyArIGZpbGUucGF0aDtcblxuICAgICAgICAvLyBTa2lwIGZpbGVzIGluIGV4Y2x1ZGVkIGZvbGRlcnNcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzLnNvbWUoZm9sZGVyID0+IHtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLnN0YXJ0c1dpdGgoJy8nKSA/IGZvbGRlciA6ICcvJyArIGZvbGRlcjtcbiAgICAgICAgICByZXR1cm4gbm9ybWFsaXplZEZpbGVQYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcik7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBTa2lwcGluZyBleGNsdWRlZCBmaWxlOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBhd2FpdCB0aGlzLmV4dHJhY3RUYWdzKGZpbGUpO1xuICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kIHRhZ3MgaW4gJHtmaWxlLnBhdGh9OiAke3RhZ3Muam9pbignLCAnKSB8fCAnbm9uZSd9YCk7XG5cbiAgICAgICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmdldFRhcmdldEZvbGRlckZvclRhZ3ModGFncyk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Rm9sZGVyOiBzdHJpbmcgfCBudWxsID0gbWF0Y2hlc1swXS5tYXBwaW5nLmZvbGRlcjtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMsIHNob3cgZGlhbG9nIGZvciB1c2VyIHRvIGNob29zZVxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kIG11bHRpcGxlIG1hdGNoaW5nIGZvbGRlcnMgZm9yICR7ZmlsZS5wYXRofTogJHttYXRjaGVzLm1hcChtID0+IG0ubWFwcGluZy5mb2xkZXIpLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgICAgIHRhcmdldEZvbGRlciA9IGF3YWl0IHRoaXMuc2hvd1J1bGVDb25mbGljdERpYWxvZyhmaWxlLCBtYXRjaGVzKTtcblxuICAgICAgICAgICAgICBpZiAoIXRhcmdldEZvbGRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgVXNlciBza2lwcGVkIGZpbGUgJHtmaWxlLnBhdGh9IGR1ZSB0byBydWxlIGNvbmZsaWN0YCk7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZShgU2tpcHBlZCAke2ZpbGUubmFtZX0gZHVlIHRvIHJ1bGUgY29uZmxpY3RgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYFNlbGVjdGVkIHRhcmdldCBmb2xkZXI6ICR7dGFyZ2V0Rm9sZGVyfWApO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IGAke3RhcmdldEZvbGRlcn0vJHtmaWxlLm5hbWV9YDtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZmlsZSBhbHJlYWR5IGV4aXN0cyBpbiB0YXJnZXRcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyh0YXJnZXRQYXRoKSkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGFyZ2V0IGxvY2F0aW9uOiAke3RhcmdldFBhdGh9YCk7XG4gICAgICAgICAgICAgIG5ldyBOb3RpY2UoYFNraXBwaW5nICR7ZmlsZS5uYW1lfTogRmlsZSBhbHJlYWR5IGV4aXN0cyBpbiB0YXJnZXQgbG9jYXRpb25gKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgUGxhbm5pbmcgdG8gbW92ZSAke2ZpbGUucGF0aH0gdG8gJHt0YXJnZXRQYXRofWApO1xuICAgICAgICAgICAgbW92ZW1lbnRzLnB1c2goeyBmaWxlLCB0YXJnZXRQYXRoIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYE5vIG1hdGNoaW5nIGZvbGRlciBmb3VuZCBmb3IgdGFnczogJHt0YWdzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgTm8gdGFncyBmb3VuZCBpbiBmaWxlOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBmaWxlcyB0byBtb3ZlLCBub3RpZnkgYW5kIGNsb3NlXG4gICAgICBpZiAobW92ZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5sb2coJ05vIGZpbGVzIHRvIG1vdmUgLSBubyB2YWxpZCB0YWcgbWFwcGluZ3MgZm91bmQnKTtcbiAgICAgICAgbmV3IE5vdGljZSgnTm8gZmlsZXMgdG8gbW92ZScpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBGb3VuZCAke21vdmVtZW50cy5sZW5ndGh9IGZpbGVzIHRvIG1vdmVgKTtcblxuICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gaWYgZW5hYmxlZFxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29uZmlybUJlZm9yZU1vdmUpIHtcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5zaG93Q29uZmlybWF0aW9uRGlhbG9nKG1vdmVtZW50cyk7XG4gICAgICAgIGlmICghY29uZmlybWVkKSB7XG4gICAgICAgICAgbmV3IE5vdGljZSgnT3BlcmF0aW9uIGNhbmNlbGxlZCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQZXJmb3JtIG1vdmVtZW50c1xuICAgICAgbGV0IHN1Y2Nlc3NDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHsgZmlsZSwgdGFyZ2V0UGF0aCB9IG9mIG1vdmVtZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlbmFtZShmaWxlLCB0YXJnZXRQYXRoKTtcbiAgICAgICAgICBzdWNjZXNzQ291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTW92ZWQgJHtmaWxlLnBhdGh9IHRvICR7dGFyZ2V0UGF0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIG1vdmUgJHtmaWxlLm5hbWV9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IE5vdGljZShgU3VjY2Vzc2Z1bGx5IG1vdmVkICR7c3VjY2Vzc0NvdW50fSBvZiAke21vdmVtZW50cy5sZW5ndGh9IGZpbGVzYCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5ldyBOb3RpY2UoYEVycm9yIGR1cmluZyBmaWxlIG1vdmVtZW50OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICBjb25zb2xlLmVycm9yKCdNb3ZlIGJ5IFRhZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZXh0cmFjdFRhZ3MoZmlsZTogVEZpbGUpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZyhgUmVhZGluZyBjb250ZW50IGZyb20gZmlsZTogJHtmaWxlLnBhdGh9YCk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIGNvbnN0IHRhZ1JlZ2V4ID0gLyMoW1xcdy1dKykvZztcbiAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcbiAgICAgIGxldCBtYXRjaDtcbiAgICAgIHdoaWxlICgobWF0Y2ggPSB0YWdSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgICB0YWdzLnB1c2gobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBFeHRyYWN0ZWQgdGFncyBmcm9tICR7ZmlsZS5wYXRofTogJHt0YWdzLmpvaW4oJywgJykgfHwgJ25vbmUnfWApO1xuICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZyhgRXJyb3IgZXh0cmFjdGluZyB0YWdzIGZyb20gJHtmaWxlLnBhdGh9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFyZ2V0Rm9sZGVyRm9yVGFncyhmaWxlVGFnczogc3RyaW5nW10pOiBBcnJheTx7IG1hcHBpbmc6IFRhZ01hcHBpbmc7IG1hdGNoZWRUYWdzOiBzdHJpbmdbXSB9PiB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudGFnTWFwcGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBtYXBwaW5ncyBkZWZpbmVkLicpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLmxvZyhgQ2hlY2tpbmcgdGFnIG1hcHBpbmdzIGZvciB0YWdzOiAke2ZpbGVUYWdzLmpvaW4oJywgJyl9YCk7XG4gICAgdGhpcy5wbHVnaW4ubG9nKGBBdmFpbGFibGUgbWFwcGluZ3M6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncy50YWdNYXBwaW5ncyl9YCk7XG5cbiAgICAvLyBDb252ZXJ0IGZpbGUgdGFncyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2hpbmdcbiAgICBjb25zdCBsb3dlckZpbGVUYWdzID0gZmlsZVRhZ3MubWFwKHRhZyA9PiB0YWcudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgbWF0Y2hlczogQXJyYXk8eyBtYXBwaW5nOiBUYWdNYXBwaW5nOyBtYXRjaGVkVGFnczogc3RyaW5nW10gfT4gPSBbXTtcblxuICAgIC8vIENoZWNrIGVhY2ggbWFwcGluZ1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiB0aGlzLnNldHRpbmdzLnRhZ01hcHBpbmdzKSB7XG4gICAgICAvLyBDb252ZXJ0IG1hcHBpbmcgdGFncyB0byBsb3dlcmNhc2VcbiAgICAgIGNvbnN0IGxvd2VyTWFwcGluZ1RhZ3MgPSBtYXBwaW5nLnRhZ3MubWFwKHRhZyA9PiB0YWcudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgIC8vIFRyYWNrIHdoaWNoIHRhZ3MgZnJvbSB0aGUgbWFwcGluZyB3ZXJlIGZvdW5kIGluIHRoZSBmaWxlXG4gICAgICBjb25zdCBtYXRjaGVkVGFnczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgLy8gQ2hlY2sgZWFjaCB0YWcgaW4gdGhlIG1hcHBpbmdcbiAgICAgIGZvciAoY29uc3QgbWFwcGluZ1RhZyBvZiBtYXBwaW5nLnRhZ3MpIHtcbiAgICAgICAgY29uc3QgbG93ZXJNYXBwaW5nVGFnID0gbWFwcGluZ1RhZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBmaWxlIHRhZyBtYXRjaGVzIHRoaXMgbWFwcGluZyB0YWdcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdGaWxlVGFnID0gbG93ZXJGaWxlVGFncy5maW5kKGZpbGVUYWcgPT5cbiAgICAgICAgICBmaWxlVGFnID09PSBsb3dlck1hcHBpbmdUYWcgfHxcbiAgICAgICAgICBmaWxlVGFnID09PSBsb3dlck1hcHBpbmdUYWcgKyAncycgfHxcbiAgICAgICAgICBmaWxlVGFnLnNsaWNlKDAsIC0xKSA9PT0gbG93ZXJNYXBwaW5nVGFnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRmlsZVRhZykge1xuICAgICAgICAgIG1hdGNoZWRUYWdzLnB1c2gobWFwcGluZ1RhZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYWxsIHRhZ3MgaW4gdGhlIG1hcHBpbmcgd2VyZSBmb3VuZCwgaXQncyBhIG1hdGNoXG4gICAgICBpZiAobWF0Y2hlZFRhZ3MubGVuZ3RoID09PSBtYXBwaW5nLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucGx1Z2luLmxvZyhgRm91bmQgbWF0Y2hpbmcgbWFwcGluZzogJHttYXBwaW5nLnRhZ3Muam9pbignICsgJyl9IOKGkiAke21hcHBpbmcuZm9sZGVyfWApO1xuICAgICAgICBtYXRjaGVzLnB1c2goeyBtYXBwaW5nLCBtYXRjaGVkVGFncyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZygnTm8gbWF0Y2hpbmcgZm9sZGVyIGZvdW5kIGZvciB0YWdzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dSdWxlQ29uZmxpY3REaWFsb2coZmlsZTogVEZpbGUsIG1hdGNoZXM6IEFycmF5PHsgbWFwcGluZzogVGFnTWFwcGluZzsgbWF0Y2hlZFRhZ3M6IHN0cmluZ1tdIH0+KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoYFwiJHtmaWxlLm5hbWV9XCJgKTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgdGV4dDogYFRoaXMgZmlsZSBtYXRjaGVzIG11bHRpcGxlIHRhZyBydWxlcy4gUGxlYXNlIHNlbGVjdCB3aGljaCBmb2xkZXIgdG8gbW92ZSBpdCB0bzpgXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbGlzdCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICBtYXRjaGVzLmZvckVhY2goKHsgbWFwcGluZywgbWF0Y2hlZFRhZ3MgfSkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLXJ1bGUtb3B0aW9uJyB9KTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSByb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICB0ZXh0OiBgTW92ZSB0byAke21hcHBpbmcuZm9sZGVyfSAodGFnczogJHttYXBwaW5nLnRhZ3MubWFwKHQgPT4gJyMnICsgdCkuam9pbignICsgJyl9KWAsXG4gICAgICAgICAgY2xzOiAnbW9kLWN0YSdcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7IC8vIEFkZCBtYXJnaW4gdG8gdGhlIGJvdHRvbSBvZiB0aGUgYnV0dG9uXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZShtYXBwaW5nLmZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBjYW5jZWwgYnV0dG9uXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogJ1NraXAgdGhpcyBmaWxlJyxcbiAgICAgICAgY2xzOiAnbW92ZS1ieS10YWctY2FuY2VsJ1xuICAgICAgfSk7XG5cbiAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIEluZm9EaWFsb2cgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgY29udGVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLnNldFRleHQodGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmVtcHR5KCk7XG4gIH1cbn1cblxuY2xhc3MgTW92ZUJ5VGFnU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwcml2YXRlIGZvbGRlcklucHV0OiBUZXh0Q29tcG9uZW50OyAvLyBEZWNsYXJlIGZvbGRlcklucHV0IGhlcmVcbiAgcGx1Z2luOiBNb3ZlQnlUYWc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTW92ZUJ5VGFnKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICAvLyBHZW5lcmFsIFNldHRpbmdzIFNlY3Rpb25cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdHZW5lcmFsIFNldHRpbmdzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0NvbmZpcm0gQmVmb3JlIE1vdmluZycpXG4gICAgICAuc2V0RGVzYygnU2hvdyBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBtb3ZpbmcgZmlsZXMnKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb25maXJtQmVmb3JlTW92ZSlcbiAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZpcm1CZWZvcmVNb3ZlID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0VuYWJsZSBMb2dnaW5nJylcbiAgICAgIC5zZXREZXNjKCdMb2cgZmlsZSBtb3ZlbWVudHMgdG8gY29uc29sZScpXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUxvZ2dpbmcpXG4gICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVMb2dnaW5nID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pKTtcblxuICAgIC8vIEV4Y2x1ZGVkIEZvbGRlcnMgU2VjdGlvblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0V4Y2x1ZGVkIEZvbGRlcnMnIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgdGV4dDogJ0ZpbGVzIGluIHRoZXNlIGZvbGRlcnMgd2lsbCBub3QgYmUgbW92ZWQuIE9uZSBmb2xkZXIgcGF0aCBwZXIgbGluZS4nLFxuICAgICAgY2xzOiAnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJ1xuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuYWRkVGV4dEFyZWEodGV4dCA9PiB7XG4gICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIGZyb20gc2V0dGluZ3NcbiAgICAgICAgY29uc3QgZXhjbHVkZWRGb2xkZXJzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzIHx8IFtdO1xuICAgICAgICB0ZXh0LnNldFZhbHVlKGV4Y2x1ZGVkRm9sZGVycy5qb2luKCdcXG4nKSlcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2ZvbGRlcjEvc3ViZm9sZGVyXFxuZm9sZGVyMicpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzID0gdmFsdWUuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgIC5tYXAoZiA9PiBmLnRyaW0oKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihmID0+IGYubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gU3BlY2lmaWMgRm9sZGVycyBTZWN0aW9uXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnU3BlY2lmaWMgRm9sZGVycycgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiAnRmlsZXMgd2lsbCBvbmx5IGJlIG1vdmVkIGZyb20gdGhlc2UgZm9sZGVycy4gT25lIGZvbGRlciBwYXRoIHBlciBsaW5lLicsXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5hZGRUZXh0QXJlYSh0ZXh0ID0+IHtcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgZnJvbSBzZXR0aW5nc1xuICAgICAgICBjb25zdCBsaW1pdGVkRm9sZGVycyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzIHx8IFtdO1xuICAgICAgICB0ZXh0LnNldFZhbHVlKGxpbWl0ZWRGb2xkZXJzLmpvaW4oJ1xcbicpKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignZm9sZGVyMS9zdWJmb2xkZXJcXG5mb2xkZXIyJylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycyA9IHZhbHVlLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAubWFwKGYgPT4gZi50cmltKCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZiA9PiBmLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIFRhZyBNYXBwaW5ncyBTZWN0aW9uXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnVGFnIE1hcHBpbmdzJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6ICdEZWZpbmUgd2hlcmUgZmlsZXMgc2hvdWxkIGJlIG1vdmVkIGJhc2VkIG9uIHRoZWlyIHRhZ3MuJyxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbidcbiAgICB9KTtcblxuICAgIC8vIEFkZCBOZXcgTWFwcGluZyBhbmQgRGVsZXRlIEFsbCBCdXR0b25zIGF0IHRoZSB0b3BcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQWRkIE5ldyBNYXBwaW5nJylcbiAgICAgICAgLnNldEN0YSgpIC8vIE1ha2UgaXQgc3RhbmQgb3V0IGFzIHRoZSBwcmltYXJ5IGFjdGlvblxuICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOZXdNYXBwaW5nTW9kYWwoKSkpO1xuXG4gICAgLy8gRXhpc3RpbmcgTWFwcGluZ3NcbiAgICBjb25zdCBtYXBwaW5nc0NvbnRhaW5lciA9IGNvbnRhaW5lckVsLmNyZWF0ZURpdigndGFnLW1hcHBpbmdzLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbWFwcGluZ3NDb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIHRleHQ6ICdObyB0YWcgbWFwcGluZ3MgZGVmaW5lZCB5ZXQuIENsaWNrIFwiQWRkIE5ldyBNYXBwaW5nXCIgdG8gY3JlYXRlIG9uZS4nLFxuICAgICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IG1hcHBpbmdzIGJ5IGZpcnN0IHRhZ1xuICAgIGNvbnN0IHNvcnRlZE1hcHBpbmdzID0gWy4uLnRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGFnc1swXS5sb2NhbGVDb21wYXJlKGIudGFnc1swXSkpO1xuXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHNvcnRlZE1hcHBpbmdzKSB7XG4gICAgICBjb25zdCB0YWdEaXNwbGF5ID0gbWFwcGluZy50YWdzLm1hcCh0ID0+ICcjJyArIHQpLmpvaW4oJyArICcpO1xuXG4gICAgICBuZXcgU2V0dGluZyhtYXBwaW5nc0NvbnRhaW5lcilcbiAgICAgICAgLnNldE5hbWUodGFnRGlzcGxheSlcbiAgICAgICAgLnNldERlc2MoYEN1cnJlbnQgZGVzdGluYXRpb246ICR7bWFwcGluZy5mb2xkZXJ9YClcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0VkaXQnKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRNYXBwaW5nTW9kYWwobWFwcGluZyk7XG4gICAgICAgICAgfSkpO1xuICAgICAgLy8gLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAvLyAgIC5zZXRJY29uKCd0cmFzaCcpXG4gICAgICAvLyAgIC5zZXRUb29sdGlwKCdEZWxldGUgbWFwcGluZycpXG4gICAgICAvLyAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgIC8vICAgICBpZiAoYXdhaXQgdGhpcy5zaG93RGVsZXRlQ29uZmlybWF0aW9uKG1hcHBpbmcpKSB7XG4gICAgICAvLyAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdNYXBwaW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzXG4gICAgICAvLyAgICAgICAgIC5maWx0ZXIobSA9PiBtLmlkICE9PSBtYXBwaW5nLmlkKTtcbiAgICAgIC8vICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgLy8gICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd05ld01hcHBpbmdNb2RhbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KCdDcmVhdGUgTmV3IFRhZyBNYXBwaW5nJyk7XG5cbiAgICBjb25zdCBjb250ZW50RWwgPSBtb2RhbC5jb250ZW50RWw7XG4gICAgbGV0IHRhZ3NJbnB1dDogVGV4dENvbXBvbmVudDtcblxuICAgIC8vIFRhZ3MgaW5wdXRcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnVGFncycpXG4gICAgICAuc2V0RGVzYygnRW50ZXIgdGFncyB3aXRob3V0ICMgc3ltYm9sLCBzZXBhcmF0ZWQgYnkgY29tbWFzLiBBbGwgdGFncyBtdXN0IGJlIHByZXNlbnQgZm9yIHRoZSBydWxlIHRvIGFwcGx5LicpXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHtcbiAgICAgICAgdGFnc0lucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcigndGFnMSwgdGFnMiwgdGFnMycpO1xuICAgICAgfSk7XG5cbiAgICAvLyBGb2xkZXIgaW5wdXRcbiAgICBjb25zdCBmb2xkZXJTZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0Rlc3RpbmF0aW9uIEZvbGRlcicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmZvbGRlcklucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignZm9sZGVyL3N1YmZvbGRlcicpO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUud2lkdGggPSAnMzAwcHgnOyAvLyBNYWtlIGlucHV0IGZpZWxkIHdpZGVyXG4gICAgICAgIHRleHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgdGhpcy5zZWFyY2hGb2xkZXJzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZvbGRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdDYW5jZWwnKVxuICAgICAgICAub25DbGljaygoKSA9PiBtb2RhbC5jbG9zZSgpKSlcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQWRkJylcbiAgICAgICAgLnNldEN0YSgpXG4gICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0YWdzVmFsdWUgPSB0YWdzSW5wdXQuZ2V0VmFsdWUoKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgZm9sZGVyID0gdGhpcy5mb2xkZXJJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKTtcblxuICAgICAgICAgIGlmICghdGFnc1ZhbHVlIHx8ICFmb2xkZXIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0JvdGggdGFncyBhbmQgZm9sZGVyIGFyZSByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRhZ3MgPSB0YWdzVmFsdWUuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSkuZmlsdGVyKHQgPT4gdC5sZW5ndGggPiAwKTtcbiAgICAgICAgICBpZiAodGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0F0IGxlYXN0IG9uZSB0YWcgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHRhZyBjb21iaW5hdGlvbnNcbiAgICAgICAgICBjb25zdCB0YWdTZXQgPSBuZXcgU2V0KHRhZ3MubWFwKHQgPT4gdC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLnNvbWUobSA9PlxuICAgICAgICAgICAgbS50YWdzLmxlbmd0aCA9PT0gdGFncy5sZW5ndGggJiZcbiAgICAgICAgICAgIG0udGFncy5ldmVyeSh0ID0+IHRhZ1NldC5oYXModC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICApKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdUaGlzIHRhZyBjb21iaW5hdGlvbiBhbHJlYWR5IGhhcyBhIG1hcHBpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBuZXdNYXBwaW5nOiBUYWdNYXBwaW5nID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVJZCgpLFxuICAgICAgICAgICAgdGFncyxcbiAgICAgICAgICAgIGZvbGRlclxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdNYXBwaW5ncy5wdXNoKG5ld01hcHBpbmcpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcblxuICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlYXJjaEZvbGRlcnMocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gW107XG4gICAgXG4gICAgY29uc3QgZm9sZGVycyA9IHRoaXMuYXBwLnZhdWx0LmdldEFsbEZvbGRlcnMoKTtcbiAgICBjb25zb2xlLmxvZygnQWxsIGZvbGRlcnM6JywgZm9sZGVycyk7XG4gICAgXG4gICAgbGV0IGZvbGRlclBhdGhzID0gZm9sZGVycy5tYXAoZm9sZGVyID0+IHtcbiAgICAgIC8vIEVuc3VyZSBsZWFkaW5nIHNsYXNoIGZvciByb290LWxldmVsIGZvbGRlcnNcbiAgICAgIHJldHVybiBmb2xkZXIucGF0aCA9PT0gJy8nID8gJy8nIDogKGZvbGRlci5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGZvbGRlci5wYXRoIDogJy8nICsgZm9sZGVyLnBhdGgpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgbGltaXRlZCBmb2xkZXJzIGFyZSBzZXQsIG9ubHkgc2hvdyBmb2xkZXJzIHdpdGhpbiB0aG9zZSBwYXRoc1xuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkTGltaXRlZEZvbGRlcnMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5tYXAoZm9sZGVyID0+IFxuICAgICAgICBmb2xkZXIuc3RhcnRzV2l0aCgnLycpID8gZm9sZGVyIDogJy8nICsgZm9sZGVyXG4gICAgICApO1xuICAgICAgXG4gICAgICBmb2xkZXJQYXRocyA9IGZvbGRlclBhdGhzLmZpbHRlcihwYXRoID0+IFxuICAgICAgICBub3JtYWxpemVkTGltaXRlZEZvbGRlcnMuc29tZShsaW1pdGVkRm9sZGVyID0+IFxuICAgICAgICAgIHBhdGguc3RhcnRzV2l0aChsaW1pdGVkRm9sZGVyKSB8fCBsaW1pdGVkRm9sZGVyLnN0YXJ0c1dpdGgocGF0aClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQXBwbHkgc2VhcmNoIHF1ZXJ5IGZpbHRlclxuICAgIGZvbGRlclBhdGhzID0gZm9sZGVyUGF0aHNcbiAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpXG4gICAgICAuc29ydCgpO1xuICAgIFxuICAgIHJldHVybiBmb2xkZXJQYXRocztcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheUZvbGRlclN1Z2dlc3Rpb25zKGZvbGRlcnM6IHN0cmluZ1tdKSB7XG4gICAgLy8gQ2xlYXIgcHJldmlvdXMgc3VnZ2VzdGlvbnNcbiAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhIG5ldyBzdWdnZXN0aW9ucyBjb250YWluZXJcbiAgICBjb25zdCBuZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDb250YWluZXIuaWQgPSAnZm9sZGVyLXN1Z2dlc3Rpb25zJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMTAwMCc7XG5cbiAgICAvLyBBZGQgc3VnZ2VzdGlvbnMgdG8gdGhlIGNvbnRhaW5lclxuICAgIGZvbGRlcnMuZm9yRWFjaChmb2xkZXIgPT4ge1xuICAgICAgY29uc3Qgc3VnZ2VzdGlvbkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN1Z2dlc3Rpb25JdGVtLnRleHRDb250ZW50ID0gZm9sZGVyO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0uc3R5bGUucGFkZGluZyA9ICc1cHgnO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgdG8gc2VsZWN0IGZvbGRlclxuICAgICAgc3VnZ2VzdGlvbkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9sZGVySW5wdXQuc2V0VmFsdWUoZm9sZGVyKTsgLy8gU2V0IHRoZSBpbnB1dCB2YWx1ZSB0byB0aGUgc2VsZWN0ZWQgZm9sZGVyXG4gICAgICAgIG5ld0NvbnRhaW5lci5yZW1vdmUoKTsgLy8gUmVtb3ZlIHN1Z2dlc3Rpb25zIGFmdGVyIHNlbGVjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWdnZXN0aW9uSXRlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBQb3NpdGlvbiB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyIHVuZGVyIHRoZSBpbnB1dCBmaWVsZFxuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmZvbGRlcklucHV0LmlucHV0RWw7XG4gICAgY29uc3QgcmVjdCA9IGlucHV0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbW9kYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG1vZGFsV2lkdGggPSBtb2RhbEVsID8gbW9kYWxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IDUwMDtcbiAgICBuZXdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5sZWZ0fXB4YDtcbiAgICBuZXdDb250YWluZXIuc3R5bGUudG9wID0gYCR7cmVjdC5ib3R0b219cHhgO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGAke01hdGgubWluKG1vZGFsV2lkdGggLSA0MCwgMzAwKX1weGA7IC8vIFVzZSBtb2RhbCB3aWR0aCBtaW51cyBwYWRkaW5nLCBtYXggNTAwcHhcbiAgICBuZXdDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJzIwMHB4JztcbiAgICBuZXdDb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2VsbGlwc2lzJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgIFxuICAgIC8vIEFwcGVuZCB0aGUgc3VnZ2VzdGlvbnMgY29udGFpbmVyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RWRpdE1hcHBpbmdNb2RhbChtYXBwaW5nOiBUYWdNYXBwaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5hcHApO1xuICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dCgnRWRpdCBUYWcgTWFwcGluZycpO1xuXG4gICAgY29uc3QgY29udGVudEVsID0gbW9kYWwuY29udGVudEVsO1xuICAgIGxldCB0YWdzSW5wdXQ6IFRleHRDb21wb25lbnQ7XG5cbiAgICAvLyBUYWdzIGlucHV0XG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ1RhZ3MnKVxuICAgICAgLnNldERlc2MoJ0VudGVyIHRhZ3Mgd2l0aG91dCAjIHN5bWJvbCwgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gQWxsIHRhZ3MgbXVzdCBiZSBwcmVzZW50IGZvciB0aGUgcnVsZSB0byBhcHBseS4nKVxuICAgICAgLmFkZFRleHQodGV4dCA9PiB7XG4gICAgICAgIHRhZ3NJbnB1dCA9IHRleHQ7XG4gICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJ3RhZzEsIHRhZzIsIHRhZzMnKVxuICAgICAgICAgIC5zZXRWYWx1ZShtYXBwaW5nLnRhZ3Muam9pbignLCAnKSk7XG4gICAgICB9KTtcblxuICAgIC8vIEZvbGRlciBpbnB1dFxuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdEZXN0aW5hdGlvbiBGb2xkZXInKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGhpcy5mb2xkZXJJbnB1dCA9IHRleHQ7XG4gICAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIoJ2ZvbGRlci9zdWJmb2xkZXInKVxuICAgICAgICAgIC5zZXRWYWx1ZShtYXBwaW5nLmZvbGRlcik7XG4gICAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnNcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgLnNldEJ1dHRvblRleHQoJ0NhbmNlbCcpXG4gICAgICAgIC5vbkNsaWNrKCgpID0+IG1vZGFsLmNsb3NlKCkpKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdTYXZlJylcbiAgICAgICAgLnNldEN0YSgpXG4gICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0YWdzVmFsdWUgPSB0YWdzSW5wdXQuZ2V0VmFsdWUoKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgZm9sZGVyID0gdGhpcy5mb2xkZXJJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKTtcblxuICAgICAgICAgIGlmICghdGFnc1ZhbHVlIHx8ICFmb2xkZXIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0JvdGggdGFncyBhbmQgZm9sZGVyIGFyZSByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRhZ3MgPSB0YWdzVmFsdWUuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSkuZmlsdGVyKHQgPT4gdC5sZW5ndGggPiAwKTtcbiAgICAgICAgICBpZiAodGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0F0IGxlYXN0IG9uZSB0YWcgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHRhZyBjb21iaW5hdGlvbnMsIGV4Y2x1ZGluZyB0aGUgY3VycmVudCBtYXBwaW5nXG4gICAgICAgICAgY29uc3QgdGFnU2V0ID0gbmV3IFNldCh0YWdzLm1hcCh0ID0+IHQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdNYXBwaW5ncy5zb21lKG0gPT5cbiAgICAgICAgICAgIG0uaWQgIT09IG1hcHBpbmcuaWQgJiYgLy8gRXhjbHVkZSBjdXJyZW50IG1hcHBpbmdcbiAgICAgICAgICAgIG0udGFncy5sZW5ndGggPT09IHRhZ3MubGVuZ3RoICYmXG4gICAgICAgICAgICBtLnRhZ3MuZXZlcnkodCA9PiB0YWdTZXQuaGFzKHQudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgICAgKSkge1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnVGhpcyB0YWcgY29tYmluYXRpb24gYWxyZWFkeSBoYXMgYSBtYXBwaW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXBkYXRlIHRoZSBleGlzdGluZyBtYXBwaW5nXG4gICAgICAgICAgbWFwcGluZy50YWdzID0gdGFncztcbiAgICAgICAgICBtYXBwaW5nLmZvbGRlciA9IGZvbGRlcjtcblxuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcblxuICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dEZWxldGVBbGxDb25maXJtYXRpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoJ0RlbGV0ZSBBbGwgVGFnIE1hcHBpbmdzJyk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IG1vZGFsLmNvbnRlbnRFbDtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgdGV4dDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhZyBtYXBwaW5ncz8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nXG4gICAgICB9KTtcblxuICAgICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQ2FuY2VsJylcbiAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfSkpXG4gICAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAgIC5zZXRCdXR0b25UZXh0KCdEZWxldGUgQWxsJylcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RGVsZXRlQ29uZmlybWF0aW9uKG1hcHBpbmc6IFRhZ01hcHBpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIG1vZGFsLnRpdGxlRWwuc2V0VGV4dCgnRGVsZXRlIFRhZyBNYXBwaW5nJyk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IG1vZGFsLmNvbnRlbnRFbDtcbiAgICAgIGNvbnN0IHRhZ0Rpc3BsYXkgPSBtYXBwaW5nLnRhZ3MubWFwKHQgPT4gJyMnICsgdCkuam9pbignICsgJyk7XG5cbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIG1hcHBpbmcgZm9yICR7dGFnRGlzcGxheX0/XFxuYCArXG4gICAgICAgICAgYEZpbGVzIHdpdGggdGhlc2UgdGFncyB3aWxsIG5vIGxvbmdlciBiZSBtb3ZlZCBhdXRvbWF0aWNhbGx5LmBcbiAgICAgIH0pO1xuXG4gICAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAgIC5zZXRCdXR0b25UZXh0KCdDYW5jZWwnKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9KSlcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0RlbGV0ZScpXG4gICAgICAgICAgLnNldFdhcm5pbmcoKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map