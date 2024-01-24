"use strict";
exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 563:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ $40df3f8667284809$export$d55e7ee900f34e93)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2493);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
    let { role: role = "dialog" } = props;
    let titleId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSlotId */ .mp)();
    titleId = props["aria-label"] ? undefined : titleId;
    let isRefocusing = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__/* .focusSafely */ .ex)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    isRefocusing.current = true;
                    ref.current.blur();
                    (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__/* .focusSafely */ .ex)(ref.current);
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, _react_aria_overlays__WEBPACK_IMPORTED_MODULE_3__/* .useOverlayFocusContain */ .Bq)();
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .filterDOMProps */ .zL)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            "aria-labelledby": props["aria-labelledby"] || titleId,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ })

};
;