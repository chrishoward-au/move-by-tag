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
        const existingSuggestions = document.querySelectorAll('.folder-suggestions-container');
        existingSuggestions.forEach(el => el.remove());
        if (folders.length === 0)
            return;
        // Create a new suggestions container
        const newContainer = document.createElement('div');
        newContainer.className = 'folder-suggestions-container';
        newContainer.style.position = 'absolute';
        newContainer.style.backgroundColor = 'var(--background-primary)';
        newContainer.style.border = '1px solid var(--background-modifier-border)';
        newContainer.style.borderRadius = '4px';
        newContainer.style.zIndex = '1000';
        newContainer.style.boxShadow = '0 2px 8px var(--background-modifier-box-shadow)';
        // Add suggestions to the container
        folders.forEach(folder => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'folder-suggestion-item';
            suggestionItem.textContent = folder;
            suggestionItem.style.padding = '8px 12px';
            suggestionItem.style.cursor = 'pointer';
            suggestionItem.style.transition = 'background-color 0.1s ease';
            // Hover effect
            suggestionItem.addEventListener('mouseover', () => {
                suggestionItem.style.backgroundColor = 'var(--background-modifier-hover)';
            });
            suggestionItem.addEventListener('mouseout', () => {
                suggestionItem.style.backgroundColor = '';
            });
            // Click event
            suggestionItem.addEventListener('click', () => {
                this.folderInput.setValue(folder);
                newContainer.remove();
            });
            newContainer.appendChild(suggestionItem);
        });
        // Position the suggestions container
        const inputEl = this.folderInput.inputEl;
        const rect = inputEl.getBoundingClientRect();
        const modalEl = inputEl.closest('.modal');
        const modalRect = modalEl === null || modalEl === void 0 ? void 0 : modalEl.getBoundingClientRect();
        newContainer.style.position = 'fixed';
        newContainer.style.left = `${rect.left}px`;
        newContainer.style.top = `${rect.bottom + 4}px`; // Add small gap
        newContainer.style.width = `${Math.min(modalRect ? modalRect.width - 40 : 300, 300)}px`;
        newContainer.style.maxHeight = '200px';
        newContainer.style.overflowY = 'auto';
        newContainer.style.overflowX = 'hidden';
        // Add click outside listener
        const clickOutsideHandler = (e) => {
            if (!newContainer.contains(e.target) && e.target !== inputEl) {
                newContainer.remove();
                document.removeEventListener('click', clickOutsideHandler);
            }
        };
        // Delay adding the click listener to prevent immediate triggering
        setTimeout(() => {
            document.addEventListener('click', clickOutsideHandler);
        }, 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFnQixPQUFPLEVBQUUsTUFBTSxFQUFTLGdCQUFnQixFQUFpQixNQUFNLFVBQVUsQ0FBQztBQUVoSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFnQjFDLE1BQU0sZ0JBQWdCLEdBQXNCO0lBQzFDLFdBQVcsRUFBRSxFQUFFO0lBQ2YsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixlQUFlLEVBQUUsRUFBRTtJQUNuQixjQUFjLEVBQUUsRUFBRTtJQUNsQixhQUFhLEVBQUUsSUFBSTtDQUNwQixDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsTUFBTTtJQUdwQyxHQUFHLENBQUMsT0FBZTtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFSyxNQUFNOztZQUNWLE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTFCLG9EQUFvRDtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxhQUFhO2dCQUNqQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEdBQVMsRUFBRTtvQkFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFD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NEM7b0JBQzVDLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLG9CQUFvQixFQUFFLENBQUM7d0JBQ3pCLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNoQyxDQUFDO2dCQUNILENBQUMsQ0FBQztnQkFFRixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1Z2luLCBNb2RhbCwgQXBwLCBDb21tYW5kLCBTZXR0aW5nLCBOb3RpY2UsIFRGaWxlLCBQbHVnaW5TZXR0aW5nVGFiLCBUZXh0Q29tcG9uZW50IH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5jb25zb2xlLmxvZygnTG9hZGluZyBNb3ZlIGJ5IFRhZyBQbHVnaW4nKTtcblxuaW50ZXJmYWNlIFRhZ01hcHBpbmcge1xuICB0YWdzOiBzdHJpbmdbXTtcbiAgZm9sZGVyOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7IC8vIFVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgbWFwcGluZ1xufVxuXG5pbnRlcmZhY2UgTW92ZUJ5VGFnU2V0dGluZ3Mge1xuICB0YWdNYXBwaW5nczogVGFnTWFwcGluZ1tdO1xuICBjb25maXJtQmVmb3JlTW92ZTogYm9vbGVhbjtcbiAgZXhjbHVkZWRGb2xkZXJzOiBzdHJpbmdbXTtcbiAgbGltaXRlZEZvbGRlcnM6IHN0cmluZ1tdO1xuICBlbmFibGVMb2dnaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBNb3ZlQnlUYWdTZXR0aW5ncyA9IHtcbiAgdGFnTWFwcGluZ3M6IFtdLFxuICBjb25maXJtQmVmb3JlTW92ZTogdHJ1ZSxcbiAgZXhjbHVkZWRGb2xkZXJzOiBbXSxcbiAgbGltaXRlZEZvbGRlcnM6IFtdLFxuICBlbmFibGVMb2dnaW5nOiB0cnVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlQnlUYWcgZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5nczogTW92ZUJ5VGFnU2V0dGluZ3M7XG5cbiAgcHVibGljIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgW01vdmUgYnkgVGFnXSAke21lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpO1xuICB9XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBUaGlzIGFkZHMgYSBjb21tYW5kIHRvIHRoZSBhcHAncyBjb21tYW5kIHBhbGV0dGUuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnbW92ZS1ieS10YWcnLFxuICAgICAgbmFtZTogJ01vdmUgYnkgVGFnJyxcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vdmVCeVRhZ01vZGFsKHRoaXMuYXBwLCB0aGlzKTtcbiAgICAgICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgbW9kYWwub3BlbigpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21tYW5kIGluIE9ic2lkaWFuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy1maWxlLWluZm8nLFxuICAgICAgbmFtZTogJ1Nob3cgRmlsZSBJbmZvJyxcbiAgICAgIGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUZpbGUpIHtcbiAgICAgICAgICBpZiAoIWNoZWNraW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dGaWxlSW5mbyhhY3RpdmVGaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBNb3ZlQnlUYWdTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICBjb25zb2xlLmxvZygnTW92ZSBieSBUYWcgUGx1Z2luIGxvYWRlZCcpO1xuICAgIFxuICB9XG5cbiAgYXN5bmMgb251bmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ01vdmUgYnkgVGFnIFBsdWdpbiB1bmxvYWRlZCcpO1xuICAgIC8vIFJlc2V0IHNldHRpbmdzIHRvIGRlZmF1bHRcbiAgICAvLyB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUyk7XG4gICAgLy8gYXdhaXQgdGhpcy5zYXZlRGF0YSh7fSk7IC8vIENsZWFyIGFsbCBzdG9yZWQgZGF0YVxuICB9XG5cbiAgZXh0cmFjdFRhZ3MoY29udGVudDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHRhZ1JlZ2V4ID0gLyNcXHcrL2c7XG4gICAgcmV0dXJuIGNvbnRlbnQubWF0Y2godGFnUmVnZXgpIHx8IFtdO1xuICB9XG5cbiAgYXN5bmMgc2hvd0ZpbGVJbmZvKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIHRoaXMuc2hvd0ZpbGVJbmZvRGlhbG9nKGZpbGUucGF0aCwgY29udGVudCk7XG4gIH1cblxuICBzaG93RmlsZUluZm9EaWFsb2coZmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlUGF0aC5zcGxpdCgnLycpLnBvcCgpO1xuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLmV4dHJhY3RUYWdzKGNvbnRlbnQpO1xuXG4gICAgY29uc3QgZGlhbG9nQ29udGVudCA9IGBGaWxlIE5hbWU6ICR7ZmlsZU5hbWV9XFxuTG9jYXRpb246ICR7ZmlsZVBhdGh9XFxuVGFnczogJHt0YWdzLmpvaW4oJywgJyl9YDtcblxuICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBJbmZvRGlhbG9nKHRoaXMuYXBwLCBkaWFsb2dDb250ZW50KTtcbiAgICBkaWFsb2cub3BlbigpO1xuICB9XG5cbiAgYXN5bmMgbG9hZFNldHRpbmdzKCkge1xuICAgIGNvbnN0IGxvYWRlZERhdGEgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgY29uc29sZS5sb2coJ0xvYWRlZCBzZXR0aW5ncyBkYXRhOicsIGxvYWRlZERhdGEpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9TRVRUSU5HUyB9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGFnTWFwcGluZ3MgaXMgYW4gb2JqZWN0IChvbGQgZm9ybWF0KVxuICAgIGlmIChsb2FkZWREYXRhICYmIGxvYWRlZERhdGEudGFnTWFwcGluZ3MgJiYgdHlwZW9mIGxvYWRlZERhdGEudGFnTWFwcGluZ3MgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGxvYWRlZERhdGEudGFnTWFwcGluZ3MpKSB7XG4gICAgICAvLyBDb252ZXJ0IG9sZCBmb3JtYXQgdG8gbmV3IGZvcm1hdFxuICAgICAgY29uc3Qgb2xkTWFwcGluZ3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBsb2FkZWREYXRhLnRhZ01hcHBpbmdzO1xuICAgICAgY29uc3QgY29udmVydGVkTWFwcGluZ3M6IFRhZ01hcHBpbmdbXSA9IFtdO1xuXG4gICAgICAvLyBHcm91cCBtYXBwaW5ncyBieSBmb2xkZXJcbiAgICAgIGNvbnN0IGZvbGRlclRvVGFnczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG4gICAgICBPYmplY3QuZW50cmllcyhvbGRNYXBwaW5ncykuZm9yRWFjaCgoW3RhZywgZm9sZGVyXSkgPT4ge1xuICAgICAgICBpZiAoIWZvbGRlclRvVGFnc1tmb2xkZXJdKSB7XG4gICAgICAgICAgZm9sZGVyVG9UYWdzW2ZvbGRlcl0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb2xkZXJUb1RhZ3NbZm9sZGVyXS5wdXNoKHRhZyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIG5ldyBtYXBwaW5nc1xuICAgICAgT2JqZWN0LmVudHJpZXMoZm9sZGVyVG9UYWdzKS5mb3JFYWNoKChbZm9sZGVyLCB0YWdzXSkgPT4ge1xuICAgICAgICBjb252ZXJ0ZWRNYXBwaW5ncy5wdXNoKHtcbiAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgIGZvbGRlcjogZm9sZGVyLFxuICAgICAgICAgIGlkOiB0aGlzLmdlbmVyYXRlSWQoKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLnRhZ01hcHBpbmdzID0gY29udmVydGVkTWFwcGluZ3M7XG4gICAgfSBlbHNlIGlmIChsb2FkZWREYXRhICYmIGxvYWRlZERhdGEudGFnTWFwcGluZ3MpIHtcbiAgICAgIC8vIElmIG5vdCBpbiBvbGQgZm9ybWF0LCBhc3NpZ24gZGlyZWN0bHlcbiAgICAgIHRoaXMuc2V0dGluZ3MudGFnTWFwcGluZ3MgPSBsb2FkZWREYXRhLnRhZ01hcHBpbmdzO1xuICAgIH1cblxuICAgIC8vIE1lcmdlIGxvYWRlZCBkYXRhIHdpdGggc2V0dGluZ3NcbiAgICBpZiAobG9hZGVkRGF0YSkge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgLi4udGhpcy5zZXR0aW5ncyxcbiAgICAgICAgY29uZmlybUJlZm9yZU1vdmU6IGxvYWRlZERhdGEuY29uZmlybUJlZm9yZU1vdmUgPz8gREVGQVVMVF9TRVRUSU5HUy5jb25maXJtQmVmb3JlTW92ZSxcbiAgICAgICAgZXhjbHVkZWRGb2xkZXJzOiBsb2FkZWREYXRhLmV4Y2x1ZGVkRm9sZGVycyA/PyBERUZBVUxUX1NFVFRJTkdTLmV4Y2x1ZGVkRm9sZGVycyxcbiAgICAgICAgbGltaXRlZEZvbGRlcnM6IGxvYWRlZERhdGEubGltaXRlZEZvbGRlcnMgPz8gREVGQVVMVF9TRVRUSU5HUy5saW1pdGVkRm9sZGVycyxcbiAgICAgICAgZW5hYmxlTG9nZ2luZzogbG9hZGVkRGF0YS5lbmFibGVMb2dnaW5nID8/IERFRkFVTFRfU0VUVElOR1MuZW5hYmxlTG9nZ2luZ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnTG9hZGVkIGV4Y2x1ZGVkIGZvbGRlcnM6JywgdGhpcy5zZXR0aW5ncy5leGNsdWRlZEZvbGRlcnMpO1xuICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgbGltaXRlZCBmb2xkZXJzOicsIHRoaXMuc2V0dGluZ3MubGltaXRlZEZvbGRlcnMpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgc2V0dGluZ3MgZGF0YTonLCB0aGlzLnNldHRpbmdzKTtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG5cbmNsYXNzIE1vdmVCeVRhZ01vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIHNldHRpbmdzOiBNb3ZlQnlUYWdTZXR0aW5ncztcbiAgcHJpdmF0ZSBwbHVnaW46IE1vdmVCeVRhZztcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBNb3ZlQnlUYWcpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBwbHVnaW4uc2V0dGluZ3M7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dDb25maXJtYXRpb25EaWFsb2cobW92ZW1lbnRzOiBBcnJheTx7IGZpbGU6IFRGaWxlOyB0YXJnZXRQYXRoOiBzdHJpbmcgfT4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICAgIG1vZGFsLmNvbnRlbnRFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdDb25maXJtIEZpbGUgTW92ZW1lbnRzJyB9KTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLWNvbmZpcm1hdGlvbicgfSk7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7IHRleHQ6IGBBYm91dCB0byBtb3ZlICR7bW92ZW1lbnRzLmxlbmd0aH0gZmlsZXM6YCB9KTtcblxuICAgICAgY29uc3QgbGlzdCA9IGNvbnRhaW5lci5jcmVhdGVFbCgndWwnKTtcbiAgICAgIG1vdmVtZW50cy5zbGljZSgwLCAxMCkuZm9yRWFjaCgoeyBmaWxlLCB0YXJnZXRQYXRoIH0pID0+IHtcbiAgICAgICAgbGlzdC5jcmVhdGVFbCgnbGknLCB7IHRleHQ6IGAke2ZpbGUucGF0aH0g4oaSICR7dGFyZ2V0UGF0aH1gIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtb3ZlbWVudHMubGVuZ3RoID4gMTApIHtcbiAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKCdwJywgeyB0ZXh0OiBgLi4uYW5kICR7bW92ZW1lbnRzLmxlbmd0aCAtIDEwfSBtb3JlIGZpbGVzYCB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gY29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLWJ1dHRvbnMnIH0pO1xuXG4gICAgICBidXR0b25Db250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NhbmNlbCcgfSlcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBidXR0b25Db250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHsgdGV4dDogJ0NvbmZpcm0nIH0pXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5zZXRUZXh0KCdNb3ZlIGZpbGVzIGJhc2VkIG9uIHRoZWlyIHRhZ3MnKTtcbiAgICB0aGlzLnBsdWdpbi5sb2coJ09wZW5pbmcgTW92ZSBieSBUYWcgbW9kYWwnKTtcblxuICAgIC8vIEFkZCBhIGJ1dHRvbiB0byB0cmlnZ2VyIHRoZSBmaWxlIG1vdmVtZW50IHByb2Nlc3NcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+IGJ0blxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnTW92ZSBGaWxlcycpXG4gICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLm1vdmVGaWxlc0J5VGFnKCk7XG4gICAgICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIG1vdmVGaWxlc0J5VGFnKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgdmF1bHQgfSA9IHRoaXMuYXBwO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnBsdWdpbi5sb2coJ1N0YXJ0aW5nIGZpbGUgbW92ZW1lbnQgcHJvY2Vzcy4uLicpO1xuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzLnNvbWUoZm9sZGVyID0+IGZpbGUucGF0aC5zdGFydHNXaXRoKGZvbGRlcikpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kICR7ZmlsZXMubGVuZ3RofSBtYXJrZG93biBmaWxlcyB0b3RhbGApO1xuXG4gICAgICBjb25zdCBtb3ZlbWVudHM6IEFycmF5PHsgZmlsZTogVEZpbGU7IHRhcmdldFBhdGg6IHN0cmluZyB9PiA9IFtdO1xuXG4gICAgICAvLyBGaXJzdCwgcGxhbiBhbGwgbW92ZW1lbnRzXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBQcm9jZXNzaW5nIGZpbGU6ICR7ZmlsZS5wYXRofWApO1xuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBmaWxlIHBhdGhcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEZpbGVQYXRoID0gZmlsZS5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGZpbGUucGF0aCA6ICcvJyArIGZpbGUucGF0aDtcblxuICAgICAgICAvLyBTa2lwIGZpbGVzIGluIGV4Y2x1ZGVkIGZvbGRlcnNcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzLnNvbWUoZm9sZGVyID0+IHtcbiAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLnN0YXJ0c1dpdGgoJy8nKSA/IGZvbGRlciA6ICcvJyArIGZvbGRlcjtcbiAgICAgICAgICByZXR1cm4gbm9ybWFsaXplZEZpbGVQYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcik7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4ubG9nKGBTa2lwcGluZyBleGNsdWRlZCBmaWxlOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhZ3MgPSBhd2FpdCB0aGlzLmV4dHJhY3RUYWdzKGZpbGUpO1xuICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kIHRhZ3MgaW4gJHtmaWxlLnBhdGh9OiAke3RhZ3Muam9pbignLCAnKSB8fCAnbm9uZSd9YCk7XG5cbiAgICAgICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLmdldFRhcmdldEZvbGRlckZvclRhZ3ModGFncyk7XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Rm9sZGVyOiBzdHJpbmcgfCBudWxsID0gbWF0Y2hlc1swXS5tYXBwaW5nLmZvbGRlcjtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG1hdGNoZXMsIHNob3cgZGlhbG9nIGZvciB1c2VyIHRvIGNob29zZVxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZvdW5kIG11bHRpcGxlIG1hdGNoaW5nIGZvbGRlcnMgZm9yICR7ZmlsZS5wYXRofTogJHttYXRjaGVzLm1hcChtID0+IG0ubWFwcGluZy5mb2xkZXIpLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgICAgIHRhcmdldEZvbGRlciA9IGF3YWl0IHRoaXMuc2hvd1J1bGVDb25mbGljdERpYWxvZyhmaWxlLCBtYXRjaGVzKTtcblxuICAgICAgICAgICAgICBpZiAoIXRhcmdldEZvbGRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgVXNlciBza2lwcGVkIGZpbGUgJHtmaWxlLnBhdGh9IGR1ZSB0byBydWxlIGNvbmZsaWN0YCk7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZShgU2tpcHBlZCAke2ZpbGUubmFtZX0gZHVlIHRvIHJ1bGUgY29uZmxpY3RgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYFNlbGVjdGVkIHRhcmdldCBmb2xkZXI6ICR7dGFyZ2V0Rm9sZGVyfWApO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IGAke3RhcmdldEZvbGRlcn0vJHtmaWxlLm5hbWV9YDtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZmlsZSBhbHJlYWR5IGV4aXN0cyBpbiB0YXJnZXRcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyh0YXJnZXRQYXRoKSkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYEZpbGUgYWxyZWFkeSBleGlzdHMgYXQgdGFyZ2V0IGxvY2F0aW9uOiAke3RhcmdldFBhdGh9YCk7XG4gICAgICAgICAgICAgIG5ldyBOb3RpY2UoYFNraXBwaW5nICR7ZmlsZS5uYW1lfTogRmlsZSBhbHJlYWR5IGV4aXN0cyBpbiB0YXJnZXQgbG9jYXRpb25gKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgUGxhbm5pbmcgdG8gbW92ZSAke2ZpbGUucGF0aH0gdG8gJHt0YXJnZXRQYXRofWApO1xuICAgICAgICAgICAgbW92ZW1lbnRzLnB1c2goeyBmaWxlLCB0YXJnZXRQYXRoIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2coYE5vIG1hdGNoaW5nIGZvbGRlciBmb3VuZCBmb3IgdGFnczogJHt0YWdzLmpvaW4oJywgJyl9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGx1Z2luLmxvZyhgTm8gdGFncyBmb3VuZCBpbiBmaWxlOiAke2ZpbGUucGF0aH1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBubyBmaWxlcyB0byBtb3ZlLCBub3RpZnkgYW5kIGNsb3NlXG4gICAgICBpZiAobW92ZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5sb2coJ05vIGZpbGVzIHRvIG1vdmUgLSBubyB2YWxpZCB0YWcgbWFwcGluZ3MgZm91bmQnKTtcbiAgICAgICAgbmV3IE5vdGljZSgnTm8gZmlsZXMgdG8gbW92ZScpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBGb3VuZCAke21vdmVtZW50cy5sZW5ndGh9IGZpbGVzIHRvIG1vdmVgKTtcblxuICAgICAgLy8gU2hvdyBjb25maXJtYXRpb24gaWYgZW5hYmxlZFxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29uZmlybUJlZm9yZU1vdmUpIHtcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gYXdhaXQgdGhpcy5zaG93Q29uZmlybWF0aW9uRGlhbG9nKG1vdmVtZW50cyk7XG4gICAgICAgIGlmICghY29uZmlybWVkKSB7XG4gICAgICAgICAgbmV3IE5vdGljZSgnT3BlcmF0aW9uIGNhbmNlbGxlZCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQZXJmb3JtIG1vdmVtZW50c1xuICAgICAgbGV0IHN1Y2Nlc3NDb3VudCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHsgZmlsZSwgdGFyZ2V0UGF0aCB9IG9mIG1vdmVtZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlbmFtZShmaWxlLCB0YXJnZXRQYXRoKTtcbiAgICAgICAgICBzdWNjZXNzQ291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgTW92ZWQgJHtmaWxlLnBhdGh9IHRvICR7dGFyZ2V0UGF0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIG1vdmUgJHtmaWxlLm5hbWV9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IE5vdGljZShgU3VjY2Vzc2Z1bGx5IG1vdmVkICR7c3VjY2Vzc0NvdW50fSBvZiAke21vdmVtZW50cy5sZW5ndGh9IGZpbGVzYCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5ldyBOb3RpY2UoYEVycm9yIGR1cmluZyBmaWxlIG1vdmVtZW50OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICBjb25zb2xlLmVycm9yKCdNb3ZlIGJ5IFRhZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZXh0cmFjdFRhZ3MoZmlsZTogVEZpbGUpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZyhgUmVhZGluZyBjb250ZW50IGZyb20gZmlsZTogJHtmaWxlLnBhdGh9YCk7XG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIGNvbnN0IHRhZ1JlZ2V4ID0gLyMoW1xcdy1dKykvZztcbiAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcbiAgICAgIGxldCBtYXRjaDtcbiAgICAgIHdoaWxlICgobWF0Y2ggPSB0YWdSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgICB0YWdzLnB1c2gobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wbHVnaW4ubG9nKGBFeHRyYWN0ZWQgdGFncyBmcm9tICR7ZmlsZS5wYXRofTogJHt0YWdzLmpvaW4oJywgJykgfHwgJ25vbmUnfWApO1xuICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZyhgRXJyb3IgZXh0cmFjdGluZyB0YWdzIGZyb20gJHtmaWxlLnBhdGh9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFyZ2V0Rm9sZGVyRm9yVGFncyhmaWxlVGFnczogc3RyaW5nW10pOiBBcnJheTx7IG1hcHBpbmc6IFRhZ01hcHBpbmc7IG1hdGNoZWRUYWdzOiBzdHJpbmdbXSB9PiB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudGFnTWFwcGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBtYXBwaW5ncyBkZWZpbmVkLicpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHRoaXMucGx1Z2luLmxvZyhgQ2hlY2tpbmcgdGFnIG1hcHBpbmdzIGZvciB0YWdzOiAke2ZpbGVUYWdzLmpvaW4oJywgJyl9YCk7XG4gICAgdGhpcy5wbHVnaW4ubG9nKGBBdmFpbGFibGUgbWFwcGluZ3M6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5zZXR0aW5ncy50YWdNYXBwaW5ncyl9YCk7XG5cbiAgICAvLyBDb252ZXJ0IGZpbGUgdGFncyB0byBsb3dlcmNhc2UgZm9yIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2hpbmdcbiAgICBjb25zdCBsb3dlckZpbGVUYWdzID0gZmlsZVRhZ3MubWFwKHRhZyA9PiB0YWcudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgbWF0Y2hlczogQXJyYXk8eyBtYXBwaW5nOiBUYWdNYXBwaW5nOyBtYXRjaGVkVGFnczogc3RyaW5nW10gfT4gPSBbXTtcblxuICAgIC8vIENoZWNrIGVhY2ggbWFwcGluZ1xuICAgIGZvciAoY29uc3QgbWFwcGluZyBvZiB0aGlzLnNldHRpbmdzLnRhZ01hcHBpbmdzKSB7XG4gICAgICAvLyBDb252ZXJ0IG1hcHBpbmcgdGFncyB0byBsb3dlcmNhc2VcbiAgICAgIGNvbnN0IGxvd2VyTWFwcGluZ1RhZ3MgPSBtYXBwaW5nLnRhZ3MubWFwKHRhZyA9PiB0YWcudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgIC8vIFRyYWNrIHdoaWNoIHRhZ3MgZnJvbSB0aGUgbWFwcGluZyB3ZXJlIGZvdW5kIGluIHRoZSBmaWxlXG4gICAgICBjb25zdCBtYXRjaGVkVGFnczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgLy8gQ2hlY2sgZWFjaCB0YWcgaW4gdGhlIG1hcHBpbmdcbiAgICAgIGZvciAoY29uc3QgbWFwcGluZ1RhZyBvZiBtYXBwaW5nLnRhZ3MpIHtcbiAgICAgICAgY29uc3QgbG93ZXJNYXBwaW5nVGFnID0gbWFwcGluZ1RhZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBmaWxlIHRhZyBtYXRjaGVzIHRoaXMgbWFwcGluZyB0YWdcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdGaWxlVGFnID0gbG93ZXJGaWxlVGFncy5maW5kKGZpbGVUYWcgPT5cbiAgICAgICAgICBmaWxlVGFnID09PSBsb3dlck1hcHBpbmdUYWcgfHxcbiAgICAgICAgICBmaWxlVGFnID09PSBsb3dlck1hcHBpbmdUYWcgKyAncycgfHxcbiAgICAgICAgICBmaWxlVGFnLnNsaWNlKDAsIC0xKSA9PT0gbG93ZXJNYXBwaW5nVGFnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRmlsZVRhZykge1xuICAgICAgICAgIG1hdGNoZWRUYWdzLnB1c2gobWFwcGluZ1RhZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYWxsIHRhZ3MgaW4gdGhlIG1hcHBpbmcgd2VyZSBmb3VuZCwgaXQncyBhIG1hdGNoXG4gICAgICBpZiAobWF0Y2hlZFRhZ3MubGVuZ3RoID09PSBtYXBwaW5nLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucGx1Z2luLmxvZyhgRm91bmQgbWF0Y2hpbmcgbWFwcGluZzogJHttYXBwaW5nLnRhZ3Muam9pbignICsgJyl9IOKGkiAke21hcHBpbmcuZm9sZGVyfWApO1xuICAgICAgICBtYXRjaGVzLnB1c2goeyBtYXBwaW5nLCBtYXRjaGVkVGFncyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMucGx1Z2luLmxvZygnTm8gbWF0Y2hpbmcgZm9sZGVyIGZvdW5kIGZvciB0YWdzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dSdWxlQ29uZmxpY3REaWFsb2coZmlsZTogVEZpbGUsIG1hdGNoZXM6IEFycmF5PHsgbWFwcGluZzogVGFnTWFwcGluZzsgbWF0Y2hlZFRhZ3M6IHN0cmluZ1tdIH0+KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoYFwiJHtmaWxlLm5hbWV9XCJgKTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gbW9kYWwuY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbCgncCcsIHtcbiAgICAgICAgdGV4dDogYFRoaXMgZmlsZSBtYXRjaGVzIG11bHRpcGxlIHRhZyBydWxlcy4gUGxlYXNlIHNlbGVjdCB3aGljaCBmb2xkZXIgdG8gbW92ZSBpdCB0bzpgXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbGlzdCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jyk7XG4gICAgICBtYXRjaGVzLmZvckVhY2goKHsgbWFwcGluZywgbWF0Y2hlZFRhZ3MgfSkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBsaXN0LmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21vdmUtYnktdGFnLXJ1bGUtb3B0aW9uJyB9KTtcblxuICAgICAgICBjb25zdCBidXR0b24gPSByb3cuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICB0ZXh0OiBgTW92ZSB0byAke21hcHBpbmcuZm9sZGVyfSAodGFnczogJHttYXBwaW5nLnRhZ3MubWFwKHQgPT4gJyMnICsgdCkuam9pbignICsgJyl9KWAsXG4gICAgICAgICAgY2xzOiAnbW9kLWN0YSdcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5tYXJnaW5Cb3R0b20gPSAnMTBweCc7IC8vIEFkZCBtYXJnaW4gdG8gdGhlIGJvdHRvbSBvZiB0aGUgYnV0dG9uXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgcmVzb2x2ZShtYXBwaW5nLmZvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBjYW5jZWwgYnV0dG9uXG4gICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBjb250YWluZXIuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgdGV4dDogJ1NraXAgdGhpcyBmaWxlJyxcbiAgICAgICAgY2xzOiAnbW92ZS1ieS10YWctY2FuY2VsJ1xuICAgICAgfSk7XG5cbiAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIEluZm9EaWFsb2cgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgY29udGVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBvbk9wZW4oKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLnNldFRleHQodGhpcy5jb250ZW50KTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmVtcHR5KCk7XG4gIH1cbn1cblxuY2xhc3MgTW92ZUJ5VGFnU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwcml2YXRlIGZvbGRlcklucHV0OiBUZXh0Q29tcG9uZW50OyAvLyBEZWNsYXJlIGZvbGRlcklucHV0IGhlcmVcbiAgcGx1Z2luOiBNb3ZlQnlUYWc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogTW92ZUJ5VGFnKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cbiAgICAvLyBHZW5lcmFsIFNldHRpbmdzIFNlY3Rpb25cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdHZW5lcmFsIFNldHRpbmdzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0NvbmZpcm0gQmVmb3JlIE1vdmluZycpXG4gICAgICAuc2V0RGVzYygnU2hvdyBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBtb3ZpbmcgZmlsZXMnKVxuICAgICAgLmFkZFRvZ2dsZSh0b2dnbGUgPT4gdG9nZ2xlXG4gICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb25maXJtQmVmb3JlTW92ZSlcbiAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZpcm1CZWZvcmVNb3ZlID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0VuYWJsZSBMb2dnaW5nJylcbiAgICAgIC5zZXREZXNjKCdMb2cgZmlsZSBtb3ZlbWVudHMgdG8gY29uc29sZScpXG4gICAgICAuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB0b2dnbGVcbiAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZUxvZ2dpbmcpXG4gICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5lbmFibGVMb2dnaW5nID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pKTtcblxuICAgIC8vIEV4Y2x1ZGVkIEZvbGRlcnMgU2VjdGlvblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0V4Y2x1ZGVkIEZvbGRlcnMnIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdwJywge1xuICAgICAgdGV4dDogJ0ZpbGVzIGluIHRoZXNlIGZvbGRlcnMgd2lsbCBub3QgYmUgbW92ZWQuIE9uZSBmb2xkZXIgcGF0aCBwZXIgbGluZS4nLFxuICAgICAgY2xzOiAnc2V0dGluZy1pdGVtLWRlc2NyaXB0aW9uJ1xuICAgIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuYWRkVGV4dEFyZWEodGV4dCA9PiB7XG4gICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIGZyb20gc2V0dGluZ3NcbiAgICAgICAgY29uc3QgZXhjbHVkZWRGb2xkZXJzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzIHx8IFtdO1xuICAgICAgICB0ZXh0LnNldFZhbHVlKGV4Y2x1ZGVkRm9sZGVycy5qb2luKCdcXG4nKSlcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2ZvbGRlcjEvc3ViZm9sZGVyXFxuZm9sZGVyMicpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZXhjbHVkZWRGb2xkZXJzID0gdmFsdWUuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgIC5tYXAoZiA9PiBmLnRyaW0oKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihmID0+IGYubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gU3BlY2lmaWMgRm9sZGVycyBTZWN0aW9uXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnU3BlY2lmaWMgRm9sZGVycycgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICB0ZXh0OiAnRmlsZXMgd2lsbCBvbmx5IGJlIG1vdmVkIGZyb20gdGhlc2UgZm9sZGVycy4gT25lIGZvbGRlciBwYXRoIHBlciBsaW5lLicsXG4gICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nXG4gICAgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5hZGRUZXh0QXJlYSh0ZXh0ID0+IHtcbiAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgZnJvbSBzZXR0aW5nc1xuICAgICAgICBjb25zdCBsaW1pdGVkRm9sZGVycyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmxpbWl0ZWRGb2xkZXJzIHx8IFtdO1xuICAgICAgICB0ZXh0LnNldFZhbHVlKGxpbWl0ZWRGb2xkZXJzLmpvaW4oJ1xcbicpKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignZm9sZGVyMS9zdWJmb2xkZXJcXG5mb2xkZXIyJylcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycyA9IHZhbHVlLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAubWFwKGYgPT4gZi50cmltKCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZiA9PiBmLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vIFRhZyBNYXBwaW5ncyBTZWN0aW9uXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnVGFnIE1hcHBpbmdzJyB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgncCcsIHtcbiAgICAgIHRleHQ6ICdEZWZpbmUgd2hlcmUgZmlsZXMgc2hvdWxkIGJlIG1vdmVkIGJhc2VkIG9uIHRoZWlyIHRhZ3MuJyxcbiAgICAgIGNsczogJ3NldHRpbmctaXRlbS1kZXNjcmlwdGlvbidcbiAgICB9KTtcblxuICAgIC8vIEFkZCBOZXcgTWFwcGluZyBhbmQgRGVsZXRlIEFsbCBCdXR0b25zIGF0IHRoZSB0b3BcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQWRkIE5ldyBNYXBwaW5nJylcbiAgICAgICAgLnNldEN0YSgpIC8vIE1ha2UgaXQgc3RhbmQgb3V0IGFzIHRoZSBwcmltYXJ5IGFjdGlvblxuICAgICAgICAub25DbGljaygoKSA9PiB0aGlzLnNob3dOZXdNYXBwaW5nTW9kYWwoKSkpO1xuXG4gICAgLy8gRXhpc3RpbmcgTWFwcGluZ3NcbiAgICBjb25zdCBtYXBwaW5nc0NvbnRhaW5lciA9IGNvbnRhaW5lckVsLmNyZWF0ZURpdigndGFnLW1hcHBpbmdzLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbWFwcGluZ3NDb250YWluZXIuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIHRleHQ6ICdObyB0YWcgbWFwcGluZ3MgZGVmaW5lZCB5ZXQuIENsaWNrIFwiQWRkIE5ldyBNYXBwaW5nXCIgdG8gY3JlYXRlIG9uZS4nLFxuICAgICAgICBjbHM6ICdzZXR0aW5nLWl0ZW0tZGVzY3JpcHRpb24nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IG1hcHBpbmdzIGJ5IGZpcnN0IHRhZ1xuICAgIGNvbnN0IHNvcnRlZE1hcHBpbmdzID0gWy4uLnRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzXVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEudGFnc1swXS5sb2NhbGVDb21wYXJlKGIudGFnc1swXSkpO1xuXG4gICAgZm9yIChjb25zdCBtYXBwaW5nIG9mIHNvcnRlZE1hcHBpbmdzKSB7XG4gICAgICBjb25zdCB0YWdEaXNwbGF5ID0gbWFwcGluZy50YWdzLm1hcCh0ID0+ICcjJyArIHQpLmpvaW4oJyArICcpO1xuXG4gICAgICBuZXcgU2V0dGluZyhtYXBwaW5nc0NvbnRhaW5lcilcbiAgICAgICAgLnNldE5hbWUodGFnRGlzcGxheSlcbiAgICAgICAgLnNldERlc2MoYEN1cnJlbnQgZGVzdGluYXRpb246ICR7bWFwcGluZy5mb2xkZXJ9YClcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0VkaXQnKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRNYXBwaW5nTW9kYWwobWFwcGluZyk7XG4gICAgICAgICAgfSkpO1xuICAgICAgLy8gLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAvLyAgIC5zZXRJY29uKCd0cmFzaCcpXG4gICAgICAvLyAgIC5zZXRUb29sdGlwKCdEZWxldGUgbWFwcGluZycpXG4gICAgICAvLyAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgIC8vICAgICBpZiAoYXdhaXQgdGhpcy5zaG93RGVsZXRlQ29uZmlybWF0aW9uKG1hcHBpbmcpKSB7XG4gICAgICAvLyAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdNYXBwaW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzXG4gICAgICAvLyAgICAgICAgIC5maWx0ZXIobSA9PiBtLmlkICE9PSBtYXBwaW5nLmlkKTtcbiAgICAgIC8vICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgLy8gICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd05ld01hcHBpbmdNb2RhbCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KCdDcmVhdGUgTmV3IFRhZyBNYXBwaW5nJyk7XG5cbiAgICBjb25zdCBjb250ZW50RWwgPSBtb2RhbC5jb250ZW50RWw7XG4gICAgbGV0IHRhZ3NJbnB1dDogVGV4dENvbXBvbmVudDtcblxuICAgIC8vIFRhZ3MgaW5wdXRcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnVGFncycpXG4gICAgICAuc2V0RGVzYygnRW50ZXIgdGFncyB3aXRob3V0ICMgc3ltYm9sLCBzZXBhcmF0ZWQgYnkgY29tbWFzLiBBbGwgdGFncyBtdXN0IGJlIHByZXNlbnQgZm9yIHRoZSBydWxlIHRvIGFwcGx5LicpXG4gICAgICAuYWRkVGV4dCh0ZXh0ID0+IHtcbiAgICAgICAgdGFnc0lucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcigndGFnMSwgdGFnMiwgdGFnMycpO1xuICAgICAgfSk7XG5cbiAgICAvLyBGb2xkZXIgaW5wdXRcbiAgICBjb25zdCBmb2xkZXJTZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLnNldE5hbWUoJ0Rlc3RpbmF0aW9uIEZvbGRlcicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmZvbGRlcklucHV0ID0gdGV4dDtcbiAgICAgICAgdGV4dC5zZXRQbGFjZWhvbGRlcignZm9sZGVyL3N1YmZvbGRlcicpO1xuICAgICAgICB0ZXh0LmlucHV0RWwuc3R5bGUud2lkdGggPSAnMzAwcHgnOyAvLyBNYWtlIGlucHV0IGZpZWxkIHdpZGVyXG4gICAgICAgIHRleHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgdGhpcy5zZWFyY2hGb2xkZXJzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUZvbGRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdDYW5jZWwnKVxuICAgICAgICAub25DbGljaygoKSA9PiBtb2RhbC5jbG9zZSgpKSlcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQWRkJylcbiAgICAgICAgLnNldEN0YSgpXG4gICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0YWdzVmFsdWUgPSB0YWdzSW5wdXQuZ2V0VmFsdWUoKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgZm9sZGVyID0gdGhpcy5mb2xkZXJJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKTtcblxuICAgICAgICAgIGlmICghdGFnc1ZhbHVlIHx8ICFmb2xkZXIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0JvdGggdGFncyBhbmQgZm9sZGVyIGFyZSByZXF1aXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRhZ3MgPSB0YWdzVmFsdWUuc3BsaXQoJywnKS5tYXAodCA9PiB0LnRyaW0oKSkuZmlsdGVyKHQgPT4gdC5sZW5ndGggPiAwKTtcbiAgICAgICAgICBpZiAodGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0F0IGxlYXN0IG9uZSB0YWcgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHRhZyBjb21iaW5hdGlvbnNcbiAgICAgICAgICBjb25zdCB0YWdTZXQgPSBuZXcgU2V0KHRhZ3MubWFwKHQgPT4gdC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRhZ01hcHBpbmdzLnNvbWUobSA9PlxuICAgICAgICAgICAgbS50YWdzLmxlbmd0aCA9PT0gdGFncy5sZW5ndGggJiZcbiAgICAgICAgICAgIG0udGFncy5ldmVyeSh0ID0+IHRhZ1NldC5oYXModC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICApKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdUaGlzIHRhZyBjb21iaW5hdGlvbiBhbHJlYWR5IGhhcyBhIG1hcHBpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBuZXdNYXBwaW5nOiBUYWdNYXBwaW5nID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2VuZXJhdGVJZCgpLFxuICAgICAgICAgICAgdGFncyxcbiAgICAgICAgICAgIGZvbGRlclxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50YWdNYXBwaW5ncy5wdXNoKG5ld01hcHBpbmcpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH0pKTtcblxuICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNlYXJjaEZvbGRlcnMocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBpZiAoIXF1ZXJ5KSByZXR1cm4gW107XG4gICAgXG4gICAgY29uc3QgZm9sZGVycyA9IHRoaXMuYXBwLnZhdWx0LmdldEFsbEZvbGRlcnMoKTtcbiAgICBjb25zb2xlLmxvZygnQWxsIGZvbGRlcnM6JywgZm9sZGVycyk7XG4gICAgXG4gICAgbGV0IGZvbGRlclBhdGhzID0gZm9sZGVycy5tYXAoZm9sZGVyID0+IHtcbiAgICAgIC8vIEVuc3VyZSBsZWFkaW5nIHNsYXNoIGZvciByb290LWxldmVsIGZvbGRlcnNcbiAgICAgIHJldHVybiBmb2xkZXIucGF0aCA9PT0gJy8nID8gJy8nIDogKGZvbGRlci5wYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IGZvbGRlci5wYXRoIDogJy8nICsgZm9sZGVyLnBhdGgpO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgbGltaXRlZCBmb2xkZXJzIGFyZSBzZXQsIG9ubHkgc2hvdyBmb2xkZXJzIHdpdGhpbiB0aG9zZSBwYXRoc1xuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkTGltaXRlZEZvbGRlcnMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5saW1pdGVkRm9sZGVycy5tYXAoZm9sZGVyID0+IFxuICAgICAgICBmb2xkZXIuc3RhcnRzV2l0aCgnLycpID8gZm9sZGVyIDogJy8nICsgZm9sZGVyXG4gICAgICApO1xuICAgICAgXG4gICAgICBmb2xkZXJQYXRocyA9IGZvbGRlclBhdGhzLmZpbHRlcihwYXRoID0+IFxuICAgICAgICBub3JtYWxpemVkTGltaXRlZEZvbGRlcnMuc29tZShsaW1pdGVkRm9sZGVyID0+IFxuICAgICAgICAgIHBhdGguc3RhcnRzV2l0aChsaW1pdGVkRm9sZGVyKSB8fCBsaW1pdGVkRm9sZGVyLnN0YXJ0c1dpdGgocGF0aClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQXBwbHkgc2VhcmNoIHF1ZXJ5IGZpbHRlclxuICAgIGZvbGRlclBhdGhzID0gZm9sZGVyUGF0aHNcbiAgICAgIC5maWx0ZXIocGF0aCA9PiBwYXRoLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkpXG4gICAgICAuc29ydCgpO1xuICAgIFxuICAgIHJldHVybiBmb2xkZXJQYXRocztcbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheUZvbGRlclN1Z2dlc3Rpb25zKGZvbGRlcnM6IHN0cmluZ1tdKSB7XG4gICAgLy8gQ2xlYXIgcHJldmlvdXMgc3VnZ2VzdGlvbnNcbiAgICBjb25zdCBleGlzdGluZ1N1Z2dlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvbGRlci1zdWdnZXN0aW9ucy1jb250YWluZXInKTtcbiAgICBleGlzdGluZ1N1Z2dlc3Rpb25zLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xuXG4gICAgaWYgKGZvbGRlcnMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgc3VnZ2VzdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb2xkZXItc3VnZ2VzdGlvbnMtY29udGFpbmVyJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KSc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxMDAwJztcbiAgICBuZXdDb250YWluZXIuc3R5bGUuYm94U2hhZG93ID0gJzAgMnB4IDhweCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJveC1zaGFkb3cpJztcblxuICAgIC8vIEFkZCBzdWdnZXN0aW9ucyB0byB0aGUgY29udGFpbmVyXG4gICAgZm9sZGVycy5mb3JFYWNoKGZvbGRlciA9PiB7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0uY2xhc3NOYW1lID0gJ2ZvbGRlci1zdWdnZXN0aW9uLWl0ZW0nO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0udGV4dENvbnRlbnQgPSBmb2xkZXI7XG4gICAgICBzdWdnZXN0aW9uSXRlbS5zdHlsZS5wYWRkaW5nID0gJzhweCAxMnB4JztcbiAgICAgIHN1Z2dlc3Rpb25JdGVtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgIHN1Z2dlc3Rpb25JdGVtLnN0eWxlLnRyYW5zaXRpb24gPSAnYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2UnO1xuXG4gICAgICAvLyBIb3ZlciBlZmZlY3RcbiAgICAgIHN1Z2dlc3Rpb25JdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgc3VnZ2VzdGlvbkl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItaG92ZXIpJztcbiAgICAgIH0pO1xuICAgICAgc3VnZ2VzdGlvbkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIHN1Z2dlc3Rpb25JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENsaWNrIGV2ZW50XG4gICAgICBzdWdnZXN0aW9uSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5mb2xkZXJJbnB1dC5zZXRWYWx1ZShmb2xkZXIpO1xuICAgICAgICBuZXdDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25JdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIFBvc2l0aW9uIHRoZSBzdWdnZXN0aW9ucyBjb250YWluZXJcbiAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5mb2xkZXJJbnB1dC5pbnB1dEVsO1xuICAgIGNvbnN0IHJlY3QgPSBpbnB1dEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG1vZGFsRWwgPSBpbnB1dEVsLmNsb3Nlc3QoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG1vZGFsUmVjdCA9IG1vZGFsRWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtyZWN0LmJvdHRvbSArIDR9cHhgOyAvLyBBZGQgc21hbGwgZ2FwXG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7TWF0aC5taW4obW9kYWxSZWN0ID8gbW9kYWxSZWN0LndpZHRoIC0gNDAgOiAzMDAsIDMwMCl9cHhgO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnMjAwcHgnO1xuICAgIG5ld0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgbmV3Q29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuXG4gICAgLy8gQWRkIGNsaWNrIG91dHNpZGUgbGlzdGVuZXJcbiAgICBjb25zdCBjbGlja091dHNpZGVIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghbmV3Q29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpICYmIGUudGFyZ2V0ICE9PSBpbnB1dEVsKSB7XG4gICAgICAgIG5ld0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIERlbGF5IGFkZGluZyB0aGUgY2xpY2sgbGlzdGVuZXIgdG8gcHJldmVudCBpbW1lZGlhdGUgdHJpZ2dlcmluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja091dHNpZGVIYW5kbGVyKTtcbiAgICB9LCAwKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0VkaXRNYXBwaW5nTW9kYWwobWFwcGluZzogVGFnTWFwcGluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHRoaXMuYXBwKTtcbiAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoJ0VkaXQgVGFnIE1hcHBpbmcnKTtcblxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IG1vZGFsLmNvbnRlbnRFbDtcbiAgICBsZXQgdGFnc0lucHV0OiBUZXh0Q29tcG9uZW50O1xuXG4gICAgLy8gVGFncyBpbnB1dFxuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgIC5zZXROYW1lKCdUYWdzJylcbiAgICAgIC5zZXREZXNjKCdFbnRlciB0YWdzIHdpdGhvdXQgIyBzeW1ib2wsIHNlcGFyYXRlZCBieSBjb21tYXMuIEFsbCB0YWdzIG11c3QgYmUgcHJlc2VudCBmb3IgdGhlIHJ1bGUgdG8gYXBwbHkuJylcbiAgICAgIC5hZGRUZXh0KHRleHQgPT4ge1xuICAgICAgICB0YWdzSW5wdXQgPSB0ZXh0O1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCd0YWcxLCB0YWcyLCB0YWczJylcbiAgICAgICAgICAuc2V0VmFsdWUobWFwcGluZy50YWdzLmpvaW4oJywgJykpO1xuICAgICAgfSk7XG5cbiAgICAvLyBGb2xkZXIgaW5wdXRcbiAgICBuZXcgU2V0dGluZyhjb250ZW50RWwpXG4gICAgICAuc2V0TmFtZSgnRGVzdGluYXRpb24gRm9sZGVyJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PiB7XG4gICAgICAgIHRoaXMuZm9sZGVySW5wdXQgPSB0ZXh0O1xuICAgICAgICB0ZXh0LnNldFBsYWNlaG9sZGVyKCdmb2xkZXIvc3ViZm9sZGVyJylcbiAgICAgICAgICAuc2V0VmFsdWUobWFwcGluZy5mb2xkZXIpO1xuICAgICAgfSk7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgIC5zZXRCdXR0b25UZXh0KCdDYW5jZWwnKVxuICAgICAgICAub25DbGljaygoKSA9PiBtb2RhbC5jbG9zZSgpKSlcbiAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAuc2V0QnV0dG9uVGV4dCgnU2F2ZScpXG4gICAgICAgIC5zZXRDdGEoKVxuICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFnc1ZhbHVlID0gdGFnc0lucHV0LmdldFZhbHVlKCkudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGZvbGRlciA9IHRoaXMuZm9sZGVySW5wdXQuZ2V0VmFsdWUoKS50cmltKCk7XG5cbiAgICAgICAgICBpZiAoIXRhZ3NWYWx1ZSB8fCAhZm9sZGVyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdCb3RoIHRhZ3MgYW5kIGZvbGRlciBhcmUgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0YWdzID0gdGFnc1ZhbHVlLnNwbGl0KCcsJykubWFwKHQgPT4gdC50cmltKCkpLmZpbHRlcih0ID0+IHQubGVuZ3RoID4gMCk7XG4gICAgICAgICAgaWYgKHRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKCdBdCBsZWFzdCBvbmUgdGFnIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGR1cGxpY2F0ZSB0YWcgY29tYmluYXRpb25zLCBleGNsdWRpbmcgdGhlIGN1cnJlbnQgbWFwcGluZ1xuICAgICAgICAgIGNvbnN0IHRhZ1NldCA9IG5ldyBTZXQodGFncy5tYXAodCA9PiB0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGFnTWFwcGluZ3Muc29tZShtID0+XG4gICAgICAgICAgICBtLmlkICE9PSBtYXBwaW5nLmlkICYmIC8vIEV4Y2x1ZGUgY3VycmVudCBtYXBwaW5nXG4gICAgICAgICAgICBtLnRhZ3MubGVuZ3RoID09PSB0YWdzLmxlbmd0aCAmJlxuICAgICAgICAgICAgbS50YWdzLmV2ZXJ5KHQgPT4gdGFnU2V0Lmhhcyh0LnRvTG93ZXJDYXNlKCkpKVxuICAgICAgICAgICkpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1RoaXMgdGFnIGNvbWJpbmF0aW9uIGFscmVhZHkgaGFzIGEgbWFwcGluZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZXhpc3RpbmcgbWFwcGluZ1xuICAgICAgICAgIG1hcHBpbmcudGFncyA9IHRhZ3M7XG4gICAgICAgICAgbWFwcGluZy5mb2xkZXIgPSBmb2xkZXI7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9KSk7XG5cbiAgICBtb2RhbC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgLy8gQ2xlYW4gdXAgc3VnZ2VzdGlvbnMgd2hlbiBtb2RhbCBpcyBjbG9zZWRcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGRlci1zdWdnZXN0aW9ucycpO1xuICAgICAgaWYgKHN1Z2dlc3Rpb25zQ29udGFpbmVyKSB7XG4gICAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgbW9kYWwub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RGVsZXRlQWxsQ29uZmlybWF0aW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5hcHApO1xuICAgICAgbW9kYWwudGl0bGVFbC5zZXRUZXh0KCdEZWxldGUgQWxsIFRhZyBNYXBwaW5ncycpO1xuXG4gICAgICBjb25zdCBjb250ZW50RWwgPSBtb2RhbC5jb250ZW50RWw7XG4gICAgICBjb250ZW50RWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIHRleHQ6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCB0YWcgbWFwcGluZ3M/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuJ1xuICAgICAgfSk7XG5cbiAgICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbClcbiAgICAgICAgLmFkZEJ1dHRvbihidXR0b24gPT4gYnV0dG9uXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoJ0NhbmNlbCcpXG4gICAgICAgICAgLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH0pKVxuICAgICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dCgnRGVsZXRlIEFsbCcpXG4gICAgICAgICAgLnNldFdhcm5pbmcoKVxuICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgbW9kYWwub25DbG9zZSA9ICgpID0+IHtcbiAgICAgIC8vIENsZWFuIHVwIHN1Z2dlc3Rpb25zIHdoZW4gbW9kYWwgaXMgY2xvc2VkXG4gICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb2xkZXItc3VnZ2VzdGlvbnMnKTtcbiAgICAgIGlmIChzdWdnZXN0aW9uc0NvbnRhaW5lcikge1xuICAgICAgICBzdWdnZXN0aW9uc0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0RlbGV0ZUNvbmZpcm1hdGlvbihtYXBwaW5nOiBUYWdNYXBwaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLmFwcCk7XG4gICAgICBtb2RhbC50aXRsZUVsLnNldFRleHQoJ0RlbGV0ZSBUYWcgTWFwcGluZycpO1xuXG4gICAgICBjb25zdCBjb250ZW50RWwgPSBtb2RhbC5jb250ZW50RWw7XG4gICAgICBjb25zdCB0YWdEaXNwbGF5ID0gbWFwcGluZy50YWdzLm1hcCh0ID0+ICcjJyArIHQpLmpvaW4oJyArICcpO1xuXG4gICAgICBjb250ZW50RWwuY3JlYXRlRWwoJ3AnLCB7XG4gICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBtYXBwaW5nIGZvciAke3RhZ0Rpc3BsYXl9P1xcbmAgK1xuICAgICAgICAgIGBGaWxlcyB3aXRoIHRoZXNlIHRhZ3Mgd2lsbCBubyBsb25nZXIgYmUgbW92ZWQgYXV0b21hdGljYWxseS5gXG4gICAgICB9KTtcblxuICAgICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxuICAgICAgICAuYWRkQnV0dG9uKGJ1dHRvbiA9PiBidXR0b25cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dCgnQ2FuY2VsJylcbiAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfSkpXG4gICAgICAgIC5hZGRCdXR0b24oYnV0dG9uID0+IGJ1dHRvblxuICAgICAgICAgIC5zZXRCdXR0b25UZXh0KCdEZWxldGUnKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9KSk7XG5cbiAgICAgIG1vZGFsLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBDbGVhbiB1cCBzdWdnZXN0aW9ucyB3aGVuIG1vZGFsIGlzIGNsb3NlZFxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9sZGVyLXN1Z2dlc3Rpb25zJyk7XG4gICAgICBpZiAoc3VnZ2VzdGlvbnNDb250YWluZXIpIHtcbiAgICAgICAgc3VnZ2VzdGlvbnNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map