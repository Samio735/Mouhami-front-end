"use strict";
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 4506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ autocomplete_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(8973);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(7364);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-3BNHFA72.mjs


// src/components/autocomplete.ts
var autocomplete = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "group inline-flex flex-column w-full",
    listboxWrapper: "scroll-py-6 max-h-64 w-full",
    listbox: "",
    popoverContent: "w-full p-1 overflow-hidden",
    endContentWrapper: "relative flex h-full items-center -mr-2",
    clearButton: [
      "text-medium",
      "translate-x-1",
      "cursor-text",
      "opacity-0",
      "text-default-500",
      "group-data-[invalid=true]:text-danger",
      "data-[visible=true]:opacity-100",
      "data-[visible=true]:cursor-pointer",
      "sm:data-[visible=true]:opacity-0",
      "sm:group-data-[hover=true]:data-[visible=true]:opacity-100"
    ],
    selectorButton: "text-medium"
  },
  variants: {
    isClearable: {
      true: {},
      false: {
        clearButton: "hidden"
      }
    },
    disableAnimation: {
      true: {
        selectorButton: "transition-none"
      },
      false: {
        selectorButton: "transition-transform duration-150 ease motion-reduce:transition-none"
      }
    },
    disableSelectorIconRotation: {
      true: {},
      false: {
        selectorButton: "data-[open=true]:rotate-180"
      }
    }
  },
  defaultVariants: {
    disableAnimation: false,
    isClearable: true,
    disableSelectorIconRotation: false
  }
});



// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/real-module.mjs + 1 modules
var real_module = __webpack_require__(3651);
;// CONCATENATED MODULE: ./node_modules/@react-aria/live-announcer/dist/import.mjs
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
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
    $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer.destroy();
        $319e236875307eab$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    createLog(ariaLive) {
        let node = document.createElement("div");
        node.setAttribute("role", "log");
        node.setAttribute("aria-live", ariaLive);
        node.setAttribute("aria-relevant", "additions");
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement("div");
        node.textContent = message;
        if (assertiveness === "assertive") this.assertiveLog.appendChild(node);
        else this.politeLog.appendChild(node);
        if (message !== "") setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if (!assertiveness || assertiveness === "assertive") this.assertiveLog.innerHTML = "";
        if (!assertiveness || assertiveness === "polite") this.politeLog.innerHTML = "";
    }
    constructor(){
        this.node = document.createElement("div");
        this.node.dataset.liveAnnouncer = "true";
        // copied from VisuallyHidden
        Object.assign(this.node.style, {
            border: 0,
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap"
        });
        this.assertiveLog = this.createLog("assertive");
        this.node.appendChild(this.assertiveLog);
        this.politeLog = this.createLog("polite");
        this.node.appendChild(this.politeLog);
        document.body.prepend(this.node);
    }
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs
var dist_import = __webpack_require__(2493);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@react-aria/label/dist/import.mjs
var label_dist_import = __webpack_require__(5995);
// EXTERNAL MODULE: ./node_modules/@react-aria/selection/dist/import.mjs
var selection_dist_import = __webpack_require__(1948);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/import.mjs
var collections_dist_import = __webpack_require__(2049);
;// CONCATENATED MODULE: ./node_modules/@react-aria/listbox/dist/import.mjs






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
 */ const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === "string") return key.replace(/\s*/g, "");
    return "" + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error("Unknown list");
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}





function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = (0, utils_dist_import/* filterDOMProps */.zL)(props, {
        labelable: true
    });
    // Use props instead of state here. We don't want this to change due to long press.
    let selectionBehavior = props.selectionBehavior || "toggle";
    let linkBehavior = props.linkBehavior || (selectionBehavior === "replace" ? "action" : "override");
    if (selectionBehavior === "toggle" && linkBehavior === "action") // linkBehavior="action" does not work with selectionBehavior="toggle" because there is no way
    // to initiate selection (checkboxes are not allowed inside a listbox). Link items will not be
    // selectable in this configuration.
    linkBehavior = "override";
    let { listProps: listProps } = (0, selection_dist_import/* useSelectableList */._t)({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        linkBehavior: linkBehavior
    });
    let { focusWithinProps: focusWithinProps } = (0, interactions_dist_import/* useFocusWithin */.L_)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, utils_dist_import/* useId */.Me)(props.id);
    (0, $b1f0cad8af73213b$export$3585ede4d035bf14).set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction,
        linkBehavior: linkBehavior
    });
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, label_dist_import/* useLabel */.N)({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: "span"
    });
    return {
        labelProps: labelProps,
        listBoxProps: (0, utils_dist_import/* mergeProps */.dG)(domProps, focusWithinProps, state.selectionManager.selectionMode === "multiple" ? {
            "aria-multiselectable": "true"
        } : {}, {
            role: "listbox",
            ...(0, utils_dist_import/* mergeProps */.dG)(fieldProps, listProps)
        })
    };
}


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
 */ 




function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    var _item_props;
    let { key: key } = props;
    let data = (0, $b1f0cad8af73213b$export$3585ede4d035bf14).get(state);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    var _props_shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
    var _props_shouldFocusOnHover;
    let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
    var _props_shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
    var _props_isVirtualized;
    let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
    let labelId = (0, utils_dist_import/* useSlotId */.mp)();
    let descriptionId = (0, utils_dist_import/* useSlotId */.mp)();
    let optionProps = {
        role: "option",
        "aria-disabled": isDisabled || undefined,
        "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!((0, utils_dist_import/* isMac */.V5)() && (0, utils_dist_import/* isWebKit */.Pf)())) {
        optionProps["aria-label"] = props["aria-label"];
        optionProps["aria-labelledby"] = labelId;
        optionProps["aria-describedby"] = descriptionId;
    }
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        let index = Number(item === null || item === void 0 ? void 0 : item.index);
        optionProps["aria-posinset"] = Number.isNaN(index) ? undefined : index + 1;
        optionProps["aria-setsize"] = (0, collections_dist_import/* getItemCount */.is)(state.collection);
    }
    let { itemProps: itemProps, isPressed: isPressed, isFocused: isFocused, hasAction: hasAction, allowsSelection: allowsSelection } = (0, selection_dist_import/* useSelectableItem */.Cs)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled,
        onAction: (data === null || data === void 0 ? void 0 : data.onAction) ? ()=>{
            var _data_onAction;
            return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
        } : undefined,
        linkBehavior: data === null || data === void 0 ? void 0 : data.linkBehavior
    });
    let { hoverProps: hoverProps } = (0, interactions_dist_import/* useHover */.XI)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, interactions_dist_import/* isFocusVisible */.E)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    let domProps = (0, utils_dist_import/* filterDOMProps */.zL)(item === null || item === void 0 ? void 0 : item.props, {
        isLink: !!(item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.href)
    });
    delete domProps.id;
    return {
        optionProps: {
            ...optionProps,
            ...(0, utils_dist_import/* mergeProps */.dG)(domProps, itemProps, hoverProps),
            id: (0, $b1f0cad8af73213b$export$9145995848b05025)(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && (0, interactions_dist_import/* isFocusVisible */.E)(),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}


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
 */ 
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading, "aria-label": ariaLabel } = props;
    let headingId = (0, utils_dist_import/* useId */.Me)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a visual label for the nested group.
            id: headingId,
            role: "presentation"
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}






//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@react-stately/form/dist/import.mjs
var form_dist_import = __webpack_require__(1562);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/import.mjs
var menu_dist_import = __webpack_require__(9403);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/import.mjs
var textfield_dist_import = __webpack_require__(8543);
;// CONCATENATED MODULE: ./node_modules/@react-aria/combobox/dist/import.mjs













function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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





var $de5926a92e8ebc5b$exports = {};
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = {
    "buttonLabel": `\u{639}\u{631}\u{636} \u{627}\u{644}\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
        })} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${args.groupTitle}, \u{645}\u{639} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{645}\u{62D}\u{62F}\u{62F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{645}\u{642}\u{62A}\u{631}\u{62D}\u{627}\u{62A}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`
};


var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{436}\u{438} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
        })} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`
};


var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = {
    "buttonLabel": `Zobrazit doporu\u{10D}en\xed`,
    "countAnnouncement": (args, formatter)=>`K dispozici ${formatter.plural(args.optionCount, {
            one: ()=>`je ${formatter.number(args.optionCount)} mo\u{17E}nost`,
            other: ()=>`jsou/je ${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina \u{201E}${args.groupTitle}\u{201C} ${formatter.plural(args.groupCount, {
                    one: ()=>`s ${formatter.number(args.groupCount)} mo\u{17E}nost\xed`,
                    other: ()=>`se ${formatter.number(args.groupCount)} mo\u{17E}nostmi`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: ` (vybr\xe1no)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybr\xe1no`
};


var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mulighed tilg\xe6ngelig`,
            other: ()=>`${formatter.number(args.optionCount)} muligheder tilg\xe6ngelige`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angivet gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mulighed`,
                    other: ()=>`${formatter.number(args.groupCount)} muligheder`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};


var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = {
    "buttonLabel": `Empfehlungen anzeigen`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} Option`,
            other: ()=>`${formatter.number(args.optionCount)} Optionen`
        })} verf\xfcgbar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Eingetretene Gruppe ${args.groupTitle}, mit ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} Option`,
                    other: ()=>`${formatter.number(args.groupCount)} Optionen`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, ausgew\xe4hlt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Empfehlungen`,
    "selectedAnnouncement": (args)=>`${args.optionText}, ausgew\xe4hlt`
};


var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = {
    "buttonLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3B2}\u{3BF}\u{3BB}\u{3AE} \u{3C0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3C9}\u{3BD}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `
        })} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${args.groupTitle}, \u{3BC}\u{3B5} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{3A0}\u{3C1}\u{3BF}\u{3C4}\u{3AC}\u{3C3}\u{3B5}\u{3B9}\u{3C2}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`
};


var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = {
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Entered group ${args.groupTitle}, with ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selected`,
            other: ``
        }, args.isSelected)}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} available.`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selected`,
    "buttonLabel": `Show suggestions`,
    "listboxLabel": `Suggestions`
};


var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = {
    "buttonLabel": `Mostrar sugerencias`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opci\xf3n`,
            other: ()=>`${formatter.number(args.optionCount)} opciones`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Se ha unido al grupo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opci\xf3n`,
                    other: ()=>`${formatter.number(args.groupCount)} opciones`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seleccionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugerencias`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seleccionado`
};


var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = {
    "buttonLabel": `Kuva soovitused`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} valik`,
            other: ()=>`${formatter.number(args.optionCount)} valikud`
        })} saadaval.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Sisestatud r\xfchm ${args.groupTitle}, valikuga ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} valik`,
                    other: ()=>`${formatter.number(args.groupCount)} valikud`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valitud`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Soovitused`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valitud`
};


var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = {
    "buttonLabel": `N\xe4yt\xe4 ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehdot`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Mentiin ryhm\xe4\xe4n ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`
                })} kanssa.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};


var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} saisi, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, s\xe9lectionn\xe9(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, s\xe9lectionn\xe9`
};


var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = {
    "buttonLabel": `\u{5D4}\u{5E6}\u{5D2} \u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.optionCount)}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
        })} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${args.groupTitle}, \u{5E2}\u{5DD} ${formatter.plural(args.groupCount, {
                    one: ()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${formatter.number(args.groupCount)}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5D4}\u{5E6}\u{5E2}\u{5D5}\u{5EA}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`
};


var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = {
    "buttonLabel": `Prika\u{17E}i prijedloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, odabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Prijedlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, odabrano`
};


var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = {
    "buttonLabel": `Javaslatok megjelen\xedt\xe9se`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`,
            other: ()=>`${formatter.number(args.optionCount)} lehet\u{151}s\xe9g`
        })} \xe1ll rendelkez\xe9sre.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Bel\xe9pett a(z) ${args.groupTitle} csoportba, amely ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`,
                    other: ()=>`${formatter.number(args.groupCount)} lehet\u{151}s\xe9get`
                })} tartalmaz. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, kijel\xf6lve`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Javaslatok`,
    "selectedAnnouncement": (args)=>`${args.optionText}, kijel\xf6lve`
};


var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = {
    "buttonLabel": `Mostra suggerimenti`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opzione disponibile`,
            other: ()=>`${formatter.number(args.optionCount)} opzioni disponibili`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingresso nel gruppo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opzione`,
                    other: ()=>`${formatter.number(args.groupCount)} opzioni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selezionato`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggerimenti`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selezionato`
};


var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = {
    "buttonLabel": `\u{5019}\u{88DC}\u{3092}\u{8868}\u{793A}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
        })}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${args.groupTitle}\u{3001}${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`
                })}\u{3092}\u{542B}\u{3080}\u{3002}`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5019}\u{88DC}`,
    "selectedAnnouncement": (args)=>`${args.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`
};


var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = {
    "buttonLabel": `\u{C81C}\u{C548} \u{C0AC}\u{D56D} \u{D45C}\u{C2DC}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`,
            other: ()=>`${formatter.number(args.optionCount)}\u{AC1C} \u{C635}\u{C158}`
        })}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`,
                    other: ()=>`${formatter.number(args.groupCount)}\u{AC1C} \u{C635}\u{C158}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{C120}\u{D0DD}\u{B428}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{C81C}\u{C548}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{C120}\u{D0DD}\u{B428}`
};


var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = {
    "buttonLabel": `Rodyti pasi\u{16B}lymus`,
    "countAnnouncement": (args, formatter)=>`Yra ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} parinktis`,
            other: ()=>`${formatter.number(args.optionCount)} parinktys (-i\u{173})`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{12E}vesta grup\u{117} ${args.groupTitle}, su ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} parinktimi`,
                    other: ()=>`${formatter.number(args.groupCount)} parinktimis (-i\u{173})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, pasirinkta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Pasi\u{16B}lymai`,
    "selectedAnnouncement": (args)=>`${args.optionText}, pasirinkta`
};


var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = {
    "buttonLabel": `R\u{101}d\u{12B}t ieteikumus`,
    "countAnnouncement": (args, formatter)=>`Pieejamo opciju skaits: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcijas`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ievad\u{12B}ta grupa ${args.groupTitle}, ar ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opciju`,
                    other: ()=>`${formatter.number(args.groupCount)} opcij\u{101}m`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, atlas\u{12B}ta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ieteikumi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, atlas\u{12B}ta`
};


var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativer`
        })} finnes.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angitt gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativer`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};


var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = {
    "buttonLabel": `Suggesties weergeven`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} optie`,
            other: ()=>`${formatter.number(args.optionCount)} opties`
        })} beschikbaar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groep ${args.groupTitle} ingevoerd met ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} optie`,
                    other: ()=>`${formatter.number(args.groupCount)} opties`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, geselecteerd`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggesties`,
    "selectedAnnouncement": (args)=>`${args.optionText}, geselecteerd`
};


var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = {
    "buttonLabel": `Wy\u{15B}wietlaj sugestie`,
    "countAnnouncement": (args, formatter)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcja`,
            other: ()=>`${formatter.number(args.optionCount)} opcje(-i)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Do\u{142}\u{105}czono do grupy ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcj\u{105}`,
                    other: ()=>`${formatter.number(args.groupCount)} opcjami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, wybrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestie`,
    "selectedAnnouncement": (args)=>`${args.optionText}, wybrano`
};


var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = {
    "buttonLabel": `Mostrar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo inserido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};


var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = {
    "buttonLabel": `Apresentar sugest\xf5es`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\xe7\xe3o`,
            other: ()=>`${formatter.number(args.optionCount)} op\xe7\xf5es`
        })} dispon\xedvel.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo introduzido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\xe7\xe3o`,
                    other: ()=>`${formatter.number(args.groupCount)} op\xe7\xf5es`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugest\xf5es`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};


var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = {
    "buttonLabel": `Afi\u{219}are sugestii`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} op\u{21B}iune`,
            other: ()=>`${formatter.number(args.optionCount)} op\u{21B}iuni`
        })} disponibile.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grup ${args.groupTitle} introdus, cu ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} op\u{21B}iune`,
                    other: ()=>`${formatter.number(args.groupCount)} op\u{21B}iuni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selectat`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestii`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selectat`
};


var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{44C} \u{43F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${args.groupTitle}, \u{441} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{43C}\u{438}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{435}\u{434}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{44F}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};


var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = {
    "buttonLabel": `Zobrazi\u{165} n\xe1vrhy`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nos\u{165}`,
            other: ()=>`${formatter.number(args.optionCount)} mo\u{17E}nosti/-\xed`
        })} k dispoz\xedcii.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadan\xe1 skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ou`,
                    other: ()=>`${formatter.number(args.groupCount)} mo\u{17E}nos\u{165}ami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, vybrat\xe9`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `N\xe1vrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybrat\xe9`
};


var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Na voljo je ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Vnesena skupina ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcija`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izbrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlogi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izbrano`
};


var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = {
    "buttonLabel": `Prika\u{17E}i predloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno jo\u{161}: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena grupa ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} optione/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izabrano`
};


var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = {
    "buttonLabel": `Visa f\xf6rslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativ`
        })} tillg\xe4ngliga.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingick i gruppen ${args.groupTitle} med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativ`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valda`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `F\xf6rslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valda`
};


var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = {
    "buttonLabel": `\xd6nerileri g\xf6ster`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} se\xe7enek`,
            other: ()=>`${formatter.number(args.optionCount)} se\xe7enekler`
        })} kullan\u{131}labilir.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Girilen grup ${args.groupTitle}, ile ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} se\xe7enek`,
                    other: ()=>`${formatter.number(args.groupCount)} se\xe7enekler`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, se\xe7ildi`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\xd6neriler`,
    "selectedAnnouncement": (args)=>`${args.optionText}, se\xe7ildi`
};


var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = {
    "buttonLabel": `\u{41F}\u{43E}\u{43A}\u{430}\u{437}\u{430}\u{442}\u{438} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
        })} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${args.groupTitle}, \u{437} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{41F}\u{440}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{457}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`
};


var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = {
    "buttonLabel": `\u{663E}\u{793A}\u{5EFA}\u{8BAE}`,
    "countAnnouncement": (args, formatter)=>`\u{6709} ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{4E2A}\u{9009}\u{9879}`
        })}\u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8FDB}\u{5165}\u{4E86} ${args.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{4E2A}\u{9009}\u{9879}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9009}\u{62E9}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8BAE}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9009}\u{62E9}`
};


var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = {
    "buttonLabel": `\u{986F}\u{793A}\u{5EFA}\u{8B70}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`,
            other: ()=>`${formatter.number(args.optionCount)} \u{9078}\u{9805}`
        })} \u{53EF}\u{7528}\u{3002}`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${args.groupTitle}, \u{6709} ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`,
                    other: ()=>`${formatter.number(args.groupCount)} \u{9078}\u{9805}`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, \u{5DF2}\u{9078}\u{53D6}`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `\u{5EFA}\u{8B70}`,
    "selectedAnnouncement": (args)=>`${args.optionText}, \u{5DF2}\u{9078}\u{53D6}`
};


$de5926a92e8ebc5b$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};







function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef, popoverRef: popoverRef, inputRef: inputRef, listBoxRef: listBoxRef, keyboardDelegate: keyboardDelegate, shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap, isReadOnly: isReadOnly, isDisabled: isDisabled } = props;
    let stringFormatter = (0, real_module/* useLocalizedStringFormatter */.qb)((0, (/*@__PURE__*/$parcel$interopDefault($de5926a92e8ebc5b$exports))));
    let { menuTriggerProps: menuTriggerProps, menuProps: menuProps } = (0, menu_dist_import/* useMenuTrigger */.u4)({
        type: "listbox",
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, $b1f0cad8af73213b$export$3585ede4d035bf14).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = (0, react_.useMemo)(()=>keyboardDelegate || new (0, selection_dist_import/* ListKeyboardDelegate */.dp)(state.collection, state.disabledKeys, listBoxRef), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps } = (0, selection_dist_import/* useSelectableCollection */.gq)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    let router = (0, utils_dist_import/* useRouter */.tv)();
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Enter":
            case "Tab":
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === "Enter") e.preventDefault();
                // If the focused item is a link, trigger opening it. Items that are links are not selectable.
                if (state.isOpen && state.selectionManager.focusedKey != null && state.selectionManager.isLink(state.selectionManager.focusedKey)) {
                    if (e.key === "Enter") {
                        let item = listBoxRef.current.querySelector(`[data-key="${state.selectionManager.focusedKey}"]`);
                        if (item instanceof HTMLAnchorElement) router.open(item, e);
                    }
                    state.close();
                } else state.commit();
                break;
            case "Escape":
                if (state.selectedKey !== null || state.inputValue === "" || props.allowsCustomValue) e.continuePropagation();
                state.revert();
                break;
            case "ArrowDown":
                state.open("first", "manual");
                break;
            case "ArrowUp":
                state.open("last", "manual");
                break;
            case "ArrowLeft":
            case "ArrowRight":
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var _popoverRef_current;
        // Ignore blur if focused moved to the button or into the popover.
        if (e.relatedTarget === (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) || ((_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(e.relatedTarget))) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = state.displayValidation;
    let { labelProps: labelProps, inputProps: inputProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, textfield_dist_import/* useTextField */.E)({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && (0, utils_dist_import/* chain */.tS)(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: "off",
        validate: undefined,
        [(0, form_dist_import/* privateValidationStateProp */.tL)]: state
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === "touch") {
            // Focus the input field in case it isn't focused yet
            inputRef.current.focus();
            state.toggle(null, "manual");
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== "touch") {
            inputRef.current.focus();
            state.toggle(e.pointerType === "keyboard" || e.pointerType === "virtual" ? "first" : null, "manual");
        }
    };
    let triggerLabelProps = (0, utils_dist_import/* useLabels */.bE)({
        id: menuTriggerProps.id,
        "aria-label": stringFormatter.format("buttonLabel"),
        "aria-labelledby": props["aria-labelledby"] || labelProps.id
    });
    let listBoxProps = (0, utils_dist_import/* useLabels */.bE)({
        id: menuProps.id,
        "aria-label": stringFormatter.format("listboxLabel"),
        "aria-labelledby": props["aria-labelledby"] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, react_.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + .5 * rect.width);
        let centerY = Math.ceil(rect.top + .5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current.focus();
            state.toggle(null, "manual");
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var _focusedItem_parentKey;
    let sectionKey = (_focusedItem_parentKey = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && _focusedItem_parentKey !== void 0 ? _focusedItem_parentKey : null;
    var _state_selectionManager_focusedKey;
    let itemKey = (_state_selectionManager_focusedKey = state.selectionManager.focusedKey) !== null && _state_selectionManager_focusedKey !== void 0 ? _state_selectionManager_focusedKey : null;
    let lastSection = (0, react_.useRef)(sectionKey);
    let lastItem = (0, react_.useRef)(itemKey);
    (0, react_.useEffect)(()=>{
        if ((0, utils_dist_import/* isAppleDevice */.ad)() && focusedItem != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section["aria-label"]) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === "string" ? section.rendered : "") || "";
            let announcement = stringFormatter.format("focusAnnouncement", {
                isGroupChange: section && sectionKey !== lastSection.current,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, collections_dist_import/* getChildNodes */._P)(section, state.collection)
                ].length : 0,
                optionText: focusedItem["aria-label"] || focusedItem.textValue || "",
                isSelected: isSelected
            });
            (0, $319e236875307eab$export$a9b970dcc4ae71a9)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, collections_dist_import/* getItemCount */.is)(state.collection);
    let lastSize = (0, react_.useRef)(optionCount);
    let lastOpen = (0, react_.useRef)(state.isOpen);
    (0, react_.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, utils_dist_import/* isAppleDevice */.ad)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format("countAnnouncement", {
                optionCount: optionCount
            });
            (0, $319e236875307eab$export$a9b970dcc4ae71a9)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = (0, react_.useRef)(state.selectedKey);
    (0, react_.useEffect)(()=>{
        if ((0, utils_dist_import/* isAppleDevice */.ad)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem["aria-label"] || state.selectedItem.textValue || "";
            let announcement = stringFormatter.format("selectedAnnouncement", {
                optionText: optionText
            });
            (0, $319e236875307eab$export$a9b970dcc4ae71a9)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, react_.useEffect)(()=>{
        if (state.isOpen) return (0, dist_import/* ariaHideOutside */.RP)([
            inputRef.current,
            popoverRef.current
        ]);
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: (0, utils_dist_import/* mergeProps */.dG)(inputProps, {
            role: "combobox",
            "aria-expanded": menuTriggerProps["aria-expanded"],
            "aria-controls": state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            "aria-autocomplete": "list",
            "aria-activedescendant": focusedItem ? (0, $b1f0cad8af73213b$export$9145995848b05025)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: "off",
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: "false"
        }),
        listBoxProps: (0, utils_dist_import/* mergeProps */.dG)(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            linkBehavior: "selection"
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/selection/dist/import.mjs
var _react_stately_selection_dist_import = __webpack_require__(4196);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var _react_stately_utils_dist_import = __webpack_require__(3522);
;// CONCATENATED MODULE: ./node_modules/@react-stately/list/dist/import.mjs





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
 */ class $a02d57049d202695$export$d085fb9e920b5ca7 {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key);
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
    }
    constructor(nodes){
        this.keyMap = new Map();
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === "section") for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === "item") node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last === null || last === void 0 ? void 0 : last.key;
    }
}





function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
    let { filter: filter } = props;
    let selectionState = (0, _react_stately_selection_dist_import/* useMultipleSelectionState */.q)(props);
    let disabledKeys = (0, react_.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react_.useCallback)((nodes)=>filter ? new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(filter(nodes)) : new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(nodes), [
        filter
    ]);
    let context = (0, react_.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, collections_dist_import/* useCollection */.Kx)(props, factory, context);
    let selectionManager = (0, react_.useMemo)(()=>new (0, _react_stately_selection_dist_import/* SelectionManager */.Z)(collection, selectionState), [
        collection,
        selectionState
    ]);
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react_.useRef)(null);
    (0, react_.useEffect)(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
            const startItem = cachedCollection.current.getItem(selectionState.focusedKey);
            const cachedItemNodes = [
                ...cachedCollection.current.getKeys()
            ].map((key)=>{
                const itemNode = cachedCollection.current.getItem(key);
                return itemNode.type === "item" ? itemNode : null;
            }).filter((node)=>node !== null);
            const itemNodes = [
                ...collection.getKeys()
            ].map((key)=>{
                const itemNode = collection.getItem(key);
                return itemNode.type === "item" ? itemNode : null;
            }).filter((node)=>node !== null);
            const diff = cachedItemNodes.length - itemNodes.length;
            let index = Math.min(diff > 1 ? Math.max(startItem.index - diff + 1, 0) : startItem.index, itemNodes.length - 1);
            let newNode;
            while(index >= 0){
                if (!selectionManager.isDisabled(itemNodes[index].key)) {
                    newNode = itemNodes[index];
                    break;
                }
                // Find next, not disabled item.
                if (index < itemNodes.length - 1) index++;
                else {
                    if (index > startItem.index) index = startItem.index;
                    index--;
                }
            }
            selectionState.setFocusedKey(newNode ? newNode.key : null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager,
        selectionState,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}


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
 */ 


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils_dist_import/* useControlledState */.zk)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react_.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection, disabledKeys: disabledKeys, selectionManager: selectionManager } = (0, $e72dd72e1c76a225$export$2f645645f7bca764)({
        ...props,
        selectionMode: "single",
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            var _keys_values_next_value;
            let key = (_keys_values_next_value = keys.values().next().value) !== null && _keys_values_next_value !== void 0 ? _keys_values_next_value : null;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}






//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/menu/dist/import.mjs
var _react_stately_menu_dist_import = __webpack_require__(9275);
;// CONCATENATED MODULE: ./node_modules/@react-stately/combobox/dist/import.mjs







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





function $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e(props) {
    var _collection_getItem, _collection_getItem1;
    let { defaultFilter: defaultFilter, menuTrigger: menuTrigger = "input", allowsEmptyCollection: allowsEmptyCollection = false, allowsCustomValue: allowsCustomValue, shouldCloseOnBlur: shouldCloseOnBlur = true } = props;
    let [showAllItems, setShowAllItems] = (0, react_.useState)(false);
    let [isFocused, setFocusedState] = (0, react_.useState)(false);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            closeMenu();
        }
    };
    var _props_items;
    let { collection: collection, selectionManager: selectionManager, selectedKey: selectedKey, setSelectedKey: setSelectedKey, selectedItem: selectedItem, disabledKeys: disabledKeys } = (0, $a0d645289fe9b86b$export$e7f05e985daf4b5f)({
        ...props,
        onSelectionChange: onSelectionChange,
        items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
    });
    var _props_defaultInputValue, _ref;
    let [inputValue, setInputValue] = (0, _react_stately_utils_dist_import/* useControlledState */.zk)(props.inputValue, (_ref = (_props_defaultInputValue = props.defaultInputValue) !== null && _props_defaultInputValue !== void 0 ? _props_defaultInputValue : (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _ref !== void 0 ? _ref : "", props.onInputChange);
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, react_.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, defaultFilter), [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    let [lastCollection, setLastCollection] = (0, react_.useState)(filteredCollection);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = (0, react_.useRef)("focus");
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
        selectionManager.setFocused(open);
        if (!open) selectionManager.setFocusedKey(null);
    };
    let triggerState = (0, _react_stately_menu_dist_import/* useMenuTriggerState */.W)({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === "manual" || trigger === "focus" && menuTrigger === "focus";
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            triggerState.open(focusStrategy);
        }
    };
    let toggle = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === "manual" || trigger === "focus" && menuTrigger === "focus";
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        toggleMenu(focusStrategy);
    };
    // If menu is going to close, save the current collection so we can freeze the displayed collection when the
    // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
    let toggleMenu = (0, react_.useCallback)((focusStrategy)=>{
        if (triggerState.isOpen) setLastCollection(filteredCollection);
        triggerState.toggle(focusStrategy);
    }, [
        triggerState,
        filteredCollection
    ]);
    let closeMenu = (0, react_.useCallback)(()=>{
        if (triggerState.isOpen) {
            setLastCollection(filteredCollection);
            triggerState.close();
        }
    }, [
        triggerState,
        filteredCollection
    ]);
    let [lastValue, setLastValue] = (0, react_.useState)(inputValue);
    let resetInputValue = ()=>{
        var _collection_getItem;
        var _collection_getItem_textValue;
        let itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
        setLastValue(itemText);
        setInputValue(itemText);
    };
    var _props_selectedKey, _ref1;
    let lastSelectedKey = (0, react_.useRef)((_ref1 = (_props_selectedKey = props.selectedKey) !== null && _props_selectedKey !== void 0 ? _props_selectedKey : props.defaultSelectedKey) !== null && _ref1 !== void 0 ? _ref1 : null);
    var _collection_getItem_textValue;
    let lastSelectedKeyText = (0, react_.useRef)((_collection_getItem_textValue = (_collection_getItem1 = collection.getItem(selectedKey)) === null || _collection_getItem1 === void 0 ? void 0 : _collection_getItem1.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "");
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react_.useEffect)(()=>{
        var _collection_getItem;
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue && menuTrigger !== "manual") open(null, "input");
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) closeMenu();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === "" && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else if (lastValue !== inputValue) setLastValue(inputValue);
        var _collection_getItem_textValue;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                setLastValue(selectedItemText);
                setInputValue(selectedItemText);
            }
        }
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    let validation = (0, form_dist_import/* useFormValidationState */.Q3)({
        ...props,
        value: (0, react_.useMemo)(()=>({
                inputValue: inputValue,
                selectedKey: selectedKey
            }), [
            inputValue,
            selectedKey
        ])
    });
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        closeMenu();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            var _collection_getItem;
            props.onSelectionChange(selectedKey);
            var _collection_getItem_textValue;
            // Stop menu from reopening from useEffect
            let itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
            setLastValue(itemText);
            closeMenu();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            closeMenu();
        }
    };
    const commitValue = ()=>{
        if (allowsCustomValue) {
            var _collection_getItem;
            var _collection_getItem_textValue;
            const itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else commitValue();
    };
    let valueOnFocus = (0, react_.useRef)(inputValue);
    let setFocused = (isFocused)=>{
        if (isFocused) {
            valueOnFocus.current = inputValue;
            if (menuTrigger === "focus") open(null, "focus");
        } else {
            if (shouldCloseOnBlur) commitValue();
            if (inputValue !== valueOnFocus.current) validation.commitValidation();
        }
        setFocusedState(isFocused);
    };
    let displayedCollection = (0, react_.useMemo)(()=>{
        if (triggerState.isOpen) {
            if (showAllItems) return originalCollection;
            else return filteredCollection;
        } else return lastCollection;
    }, [
        triggerState.isOpen,
        originalCollection,
        filteredCollection,
        showAllItems,
        lastCollection
    ]);
    return {
        ...validation,
        ...triggerState,
        toggle: toggle,
        open: open,
        close: commitValue,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: displayedCollection,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, filter) {
    return new (0, $a02d57049d202695$export$d085fb9e920b5ca7)($a9e7382a7d111cb5$var$filterNodes(collection, collection, inputValue, filter));
}
function $a9e7382a7d111cb5$var$filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === "section" && node.hasChildNodes) {
            let filtered = $a9e7382a7d111cb5$var$filterNodes(collection, (0, collections_dist_import/* getChildNodes */._P)(node, collection), inputValue, filter);
            if ([
                ...filtered
            ].some((node)=>node.type === "item")) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type === "item" && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
        else if (node.type !== "item") filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(1145);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(7241);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/dist/chunk-SGJY6NTV.mjs
"use client";

// src/use-autocomplete.ts









function useAutocomplete(originalProps) {
  var _a, _b, _c;
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, autocomplete.variantKeys);
  const disableAnimation = (_a = originalProps.disableAnimation) != null ? _a : false;
  const isClearable = originalProps.disableClearable !== void 0 ? !originalProps.disableClearable : originalProps.isClearable;
  const {
    ref,
    as,
    label,
    isLoading,
    menuTrigger = "focus",
    filterOptions = {
      sensitivity: "base"
    },
    children,
    selectorIcon,
    clearIcon,
    scrollRef: scrollRefProp,
    defaultFilter,
    endContent,
    allowsEmptyCollection = true,
    shouldCloseOnBlur = true,
    popoverProps = {},
    inputProps: userInputProps = {},
    scrollShadowProps = {},
    listboxProps = {},
    selectorButtonProps = {},
    clearButtonProps = {},
    showScrollIndicators = true,
    allowsCustomValue = false,
    className,
    classNames,
    onOpenChange,
    onClose,
    ...otherProps
  } = props;
  const { contains } = (0,real_module/* useFilter */.L0)(filterOptions);
  const state = $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e({
    ...originalProps,
    children,
    menuTrigger,
    shouldCloseOnBlur,
    allowsEmptyCollection,
    defaultFilter: defaultFilter && typeof defaultFilter === "function" ? defaultFilter : contains,
    onOpenChange: (open, menuTrigger2) => {
      onOpenChange == null ? void 0 : onOpenChange(open, menuTrigger2);
      if (!open) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const buttonRef = (0,react_.useRef)(null);
  const inputWrapperRef = (0,react_.useRef)(null);
  const listBoxRef = (0,react_.useRef)(null);
  const popoverRef = (0,react_.useRef)(null);
  const inputRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const scrollShadowRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(scrollRefProp);
  const slotsProps = {
    inputProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        label,
        ref: inputRef,
        wrapperRef: inputWrapperRef,
        onClick: () => {
          if (!state.isOpen && !!state.selectedItem) {
            state.open();
          }
        },
        isClearable: false,
        disableAnimation
      },
      userInputProps
    ),
    popoverProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        offset: 5,
        placement: "bottom",
        triggerScaleOnOpen: false,
        disableAnimation
      },
      popoverProps
    ),
    scrollShadowProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        ref: scrollShadowRef,
        isEnabled: (_b = showScrollIndicators && state.collection.size > 5) != null ? _b : true,
        hideScrollBar: true,
        offset: 15
      },
      scrollShadowProps
    ),
    listboxProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        hideEmptyContent: allowsCustomValue,
        emptyContent: "No results found.",
        disableAnimation
      },
      listboxProps
    ),
    selectorButtonProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        isLoading,
        size: "sm",
        variant: "light",
        radius: "full",
        color: (originalProps == null ? void 0 : originalProps.isInvalid) ? "danger" : originalProps == null ? void 0 : originalProps.color,
        isIconOnly: true,
        disableAnimation
      },
      selectorButtonProps
    ),
    clearButtonProps: (0,utils_dist_import/* mergeProps */.dG)(
      {
        size: "sm",
        variant: "light",
        radius: "full",
        color: (originalProps == null ? void 0 : originalProps.isInvalid) ? "danger" : originalProps == null ? void 0 : originalProps.color,
        isIconOnly: true,
        disableAnimation
      },
      clearButtonProps
    )
  };
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const isOpen = ((_c = slotsProps.listboxProps) == null ? void 0 : _c.hideEmptyContent) ? state.isOpen && !!state.collection.size : state.isOpen;
  (0,react_.useEffect)(() => {
    if (isOpen && popoverRef.current && inputWrapperRef.current) {
      let rect = inputWrapperRef.current.getBoundingClientRect();
      let popover = popoverRef.current;
      popover.style.width = rect.width + "px";
    }
  }, [isOpen]);
  (0,react_.useEffect)(() => {
    if (!isOpen && !state.selectedItem && inputRef.current && !allowsCustomValue) {
      inputRef.current.blur();
    }
  }, [isOpen, allowsCustomValue]);
  const { buttonProps, inputProps, listBoxProps } = $c350ade66beef0af$export$8c18d1b4f7232bbf(
    {
      ...originalProps,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef
    },
    state
  );
  const Component = as || "div";
  const slots = (0,react_.useMemo)(
    () => autocomplete({
      ...variantProps,
      isClearable,
      disableAnimation,
      className
    }),
    [...Object.values(variantProps), isClearable, disableAnimation, className]
  );
  const onClear = (0,react_.useCallback)(() => {
    state.setInputValue("");
    state.setSelectedKey(null);
  }, [state]);
  const onFocus = (0,react_.useCallback)(
    (isFocused) => {
      var _a2;
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      state.setFocused(isFocused);
    },
    [state, inputRef]
  );
  const getBaseProps = () => ({
    "data-invalid": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps == null ? void 0 : originalProps.isInvalid),
    "data-open": (0,chunk_MCFSCOSB/* dataAttr */.PB)(state.isOpen),
    className: slots.base({ class: baseStyles })
  });
  const getSelectorButtonProps = () => {
    var _a2;
    return {
      ref: buttonRef,
      ...(0,utils_dist_import/* mergeProps */.dG)(buttonProps, slotsProps.selectorButtonProps),
      "data-open": (0,chunk_MCFSCOSB/* dataAttr */.PB)(state.isOpen),
      className: slots.selectorButton({
        class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.selectorButton, (_a2 = slotsProps.selectorButtonProps) == null ? void 0 : _a2.className)
      })
    };
  };
  const getClearButtonProps = () => {
    var _a2, _b2;
    return {
      ...(0,utils_dist_import/* mergeProps */.dG)(buttonProps, slotsProps.clearButtonProps),
      onPress: (e) => {
        var _a3, _b3;
        (_b3 = (_a3 = slotsProps.clearButtonProps) == null ? void 0 : _a3.onPress) == null ? void 0 : _b3.call(_a3, e);
        if (state.selectedItem) {
          onClear();
        } else {
          const inputFocused = inputRef.current === document.activeElement;
          allowsCustomValue && state.setInputValue("");
          !inputFocused && onFocus(true);
        }
      },
      "data-visible": !!state.selectedItem || ((_a2 = state.inputValue) == null ? void 0 : _a2.length) > 0,
      className: slots.clearButton({
        class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.clearButton, (_b2 = slotsProps.clearButtonProps) == null ? void 0 : _b2.className)
      })
    };
  };
  const getInputProps = () => ({
    ...slotsProps.inputProps,
    ...otherProps,
    ...inputProps,
    onClick: (0,utils_dist_import/* chain */.tS)(slotsProps.inputProps.onClick, otherProps.onClick)
  });
  const getListBoxProps = () => ({
    state,
    ref: listBoxRef,
    shouldHighlightOnFocus: true,
    ...(0,utils_dist_import/* mergeProps */.dG)(slotsProps.listboxProps, listBoxProps)
  });
  const getPopoverProps = (props2 = {}) => {
    var _a2, _b2;
    return {
      state,
      ref: popoverRef,
      triggerRef: inputWrapperRef,
      scrollRef: listBoxRef,
      triggerType: "listbox",
      ...(0,utils_dist_import/* mergeProps */.dG)(slotsProps.popoverProps, props2),
      classNames: {
        content: slots.popoverContent({
          class: (0,chunk_6BQDBGF4/* clsx */.W)(
            classNames == null ? void 0 : classNames.popoverContent,
            (_b2 = (_a2 = slotsProps.popoverProps) == null ? void 0 : _a2.classNames) == null ? void 0 : _b2["content"],
            props2.className
          )
        })
      }
    };
  };
  const getListBoxWrapperProps = (props2 = {}) => {
    var _a2;
    return {
      ...(0,utils_dist_import/* mergeProps */.dG)(slotsProps.scrollShadowProps, props2),
      className: slots.listboxWrapper({
        class: (0,chunk_6BQDBGF4/* clsx */.W)(
          classNames == null ? void 0 : classNames.listboxWrapper,
          (_a2 = slotsProps.scrollShadowProps) == null ? void 0 : _a2.className,
          props2 == null ? void 0 : props2.className
        )
      })
    };
  };
  const getEndContentWrapperProps = (props2 = {}) => ({
    className: slots.endContentWrapper({
      class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.endContentWrapper, props2 == null ? void 0 : props2.className)
    }),
    onClick: (e) => {
      const inputFocused = inputRef.current === document.activeElement;
      if (!inputFocused && !state.isFocused && e.currentTarget === e.target) {
        onFocus(true);
      }
    }
  });
  return {
    Component,
    inputRef,
    label,
    state,
    slots,
    classNames,
    isLoading,
    clearIcon,
    isOpen,
    endContent,
    isClearable,
    disableAnimation,
    allowsCustomValue,
    selectorIcon,
    getBaseProps,
    getInputProps,
    getListBoxProps,
    getPopoverProps,
    getClearButtonProps,
    getSelectorButtonProps,
    getListBoxWrapperProps,
    getEndContentWrapperProps
  };
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/popover/dist/chunk-3YBC73XM.mjs + 3 modules
var chunk_3YBC73XM = __webpack_require__(9146);
// EXTERNAL MODULE: ./node_modules/@nextui-org/popover/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(945);
// EXTERNAL MODULE: ./node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
var chunk_WQVQ7P2I = __webpack_require__(1863);
// EXTERNAL MODULE: ./node_modules/@nextui-org/framer-transitions/dist/chunk-WUWNKKWR.mjs
var chunk_WUWNKKWR = __webpack_require__(2382);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-RT4RASLE.mjs
"use client";


// src/free-solo-popover.tsx








var FreeSoloPopoverWrapper = ({
  children,
  motionProps,
  placement,
  disableAnimation,
  style = {},
  ...otherProps
}) => {
  return disableAnimation ? /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...otherProps, children }) : /* @__PURE__ */ (0,jsx_runtime_.jsx)(
    motion/* motion */.E.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "initial",
      style: {
        ...style,
        ...(0,chunk_WQVQ7P2I/* getTransformOrigins */.VS)(placement === "center" ? "top" : placement)
      },
      variants: chunk_WUWNKKWR/* TRANSITION_VARIANTS */.y7.scaleSpringOpacity,
      ...(0,utils_dist_import/* mergeProps */.dG)(otherProps, motionProps),
      children
    }
  );
};
var FreeSoloPopover = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const {
    Component,
    state,
    children,
    placement,
    backdrop,
    portalContainer,
    disableAnimation,
    motionProps,
    isNonModal,
    getPopoverProps,
    getBackdropProps,
    getDialogProps,
    getContentProps
  } = (0,chunk_3YBC73XM/* usePopover */.S)({
    ...props,
    shouldCloseOnInteractOutside: void 0,
    ref
  });
  const backdropContent = react_.useMemo(() => {
    if (backdrop === "transparent") {
      return null;
    }
    if (disableAnimation) {
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getBackdropProps() });
    }
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      motion/* motion */.E.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "exit",
        variants: chunk_WUWNKKWR/* TRANSITION_VARIANTS */.y7.fade,
        ...getBackdropProps()
      }
    );
  }, [backdrop, disableAnimation, getBackdropProps]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(dist_import/* Overlay */.aV, { portalContainer, children: [
    !isNonModal && backdropContent,
    /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ...getPopoverProps(), children: /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
      FreeSoloPopoverWrapper,
      {
        disableAnimation,
        motionProps,
        placement,
        tabIndex: -1,
        ...getDialogProps(),
        children: [
          !isNonModal && /* @__PURE__ */ (0,jsx_runtime_.jsx)(dist_import/* DismissButton */.U4, { onDismiss: state.close }),
          /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getContentProps(), children }),
          /* @__PURE__ */ (0,jsx_runtime_.jsx)(dist_import/* DismissButton */.U4, { onDismiss: state.close })
        ]
      }
    ) })
  ] });
});
FreeSoloPopover.displayName = "NextUI.FreeSoloPopover";
var free_solo_popover_default = FreeSoloPopover;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-4JBYJQSP.mjs


// src/components/scroll-shadow.ts
var verticalShadow = [
  "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var horizontalShadow = [
  "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"
];
var scrollShadow = (0,chunk_6AEINX52.tv)({
  base: [],
  variants: {
    orientation: {
      vertical: ["overflow-y-auto", ...verticalShadow],
      horizontal: ["overflow-x-auto", ...horizontalShadow]
    },
    hideScrollBar: {
      true: "scrollbar-hide",
      false: ""
    }
  },
  defaultVariants: {
    orientation: "vertical",
    hideScrollBar: false
  }
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-EB2I5ZVA.mjs
var chunk_EB2I5ZVA = __webpack_require__(1665);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-data-scroll-overflow/dist/index.mjs
// src/index.ts


function useDataScrollOverflow(props = {}) {
  const {
    domRef,
    isEnabled = true,
    overflowCheck = "vertical",
    visibility = "auto",
    offset = 0,
    onVisibilityChange,
    updateDeps = []
  } = props;
  const visibleRef = (0,react_.useRef)(visibility);
  (0,react_.useEffect)(() => {
    const el = domRef == null ? void 0 : domRef.current;
    if (!el || !isEnabled)
      return;
    const setAttributes = (direction, hasBefore, hasAfter, prefix, suffix) => {
      if (visibility === "auto") {
        const both = `${prefix}${(0,chunk_EB2I5ZVA/* capitalize */.kC)(suffix)}Scroll`;
        if (hasBefore && hasAfter) {
          el.dataset[both] = "true";
          el.removeAttribute(`data-${prefix}-scroll`);
          el.removeAttribute(`data-${suffix}-scroll`);
        } else {
          el.dataset[`${prefix}Scroll`] = hasBefore.toString();
          el.dataset[`${suffix}Scroll`] = hasAfter.toString();
          el.removeAttribute(`data-${prefix}-${suffix}-scroll`);
        }
      } else {
        const next = hasBefore && hasAfter ? "both" : hasBefore ? prefix : hasAfter ? suffix : "none";
        if (next !== visibleRef.current) {
          onVisibilityChange == null ? void 0 : onVisibilityChange(next);
          visibleRef.current = next;
        }
      }
    };
    const checkOverflow = () => {
      const directions = [
        { type: "vertical", prefix: "top", suffix: "bottom" },
        { type: "horizontal", prefix: "left", suffix: "right" }
      ];
      for (const { type, prefix, suffix } of directions) {
        if (overflowCheck === type || overflowCheck === "both") {
          const hasBefore = type === "vertical" ? el.scrollTop > offset : el.scrollLeft > offset;
          const hasAfter = type === "vertical" ? el.scrollTop + el.clientHeight + offset < el.scrollHeight : el.scrollLeft + el.clientWidth + offset < el.scrollWidth;
          setAttributes(type, hasBefore, hasAfter, prefix, suffix);
        }
      }
    };
    const clearOverflow = () => {
      ["top", "bottom", "topBottom", "left", "right", "leftRight"].forEach((attr) => {
        el.removeAttribute(`data-${attr}-scroll`);
      });
    };
    checkOverflow();
    el.addEventListener("scroll", checkOverflow);
    if (visibility !== "auto") {
      clearOverflow();
      if (visibility === "both") {
        el.dataset.topBottomScroll = String(overflowCheck === "vertical");
        el.dataset.leftRightScroll = String(overflowCheck === "horizontal");
      } else {
        el.dataset.topBottomScroll = "false";
        el.dataset.leftRightScroll = "false";
        ["top", "bottom", "left", "right"].forEach((attr) => {
          el.dataset[`${attr}Scroll`] = String(visibility === attr);
        });
      }
    }
    return () => {
      el.removeEventListener("scroll", checkOverflow);
      clearOverflow();
    };
  }, [...updateDeps, isEnabled, visibility, overflowCheck, onVisibilityChange, domRef]);
}


;// CONCATENATED MODULE: ./node_modules/@nextui-org/scroll-shadow/dist/chunk-4FKOB7FP.mjs
"use client";

// src/use-scroll-shadow.ts





function useScrollShadow(originalProps) {
  var _a;
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, scrollShadow.variantKeys);
  const {
    ref,
    as,
    children,
    className,
    style,
    size = 40,
    offset = 0,
    visibility = "auto",
    isEnabled = true,
    onVisibilityChange,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  useDataScrollOverflow({
    domRef,
    offset,
    visibility,
    isEnabled,
    onVisibilityChange,
    updateDeps: [children],
    overflowCheck: (_a = originalProps.orientation) != null ? _a : "vertical"
  });
  const styles = (0,react_.useMemo)(
    () => scrollShadow({
      ...variantProps,
      className
    }),
    [...Object.values(variantProps), className]
  );
  const getBaseProps = (props2 = {}) => {
    var _a2;
    return {
      ref: domRef,
      className: styles,
      "data-orientation": (_a2 = originalProps.orientation) != null ? _a2 : "vertical",
      style: {
        "--scroll-shadow-size": `${size}px`,
        ...style,
        ...props2.style
      },
      ...otherProps,
      ...props2
    };
  };
  return { Component, styles, domRef, children, getBaseProps };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/scroll-shadow/dist/chunk-4QI2XQ5W.mjs
"use client";


// src/scroll-shadow.tsx


var ScrollShadow = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { Component, children, getBaseProps } = useScrollShadow({ ...props, ref });
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ...getBaseProps(), children });
});
ScrollShadow.displayName = "NextUI.ScrollShadow";
var scroll_shadow_default = ScrollShadow;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-icons/dist/chunk-7F3ZLNJ6.mjs
// src/chevron-down.tsx

var ChevronDownIcon = ({ strokeWidth = 1.5, ...props }) => /* @__PURE__ */ (0,jsx_runtime_.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0,jsx_runtime_.jsx)("path", { d: "m6 9 6 6 6-6" })
  }
);



// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-icons/dist/chunk-HV2L33LJ.mjs
var chunk_HV2L33LJ = __webpack_require__(8691);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-65JTUBIW.mjs
"use client";

// src/listbox-selected-icon.tsx

function ListboxSelectedIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      "data-selected": isSelected,
      role: "presentation",
      viewBox: "0 0 17 18",
      ...otherProps,
      children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
        "polyline",
        {
          fill: "none",
          points: "1 9 7 14 15 4",
          stroke: "currentColor",
          strokeDasharray: 22,
          strokeDashoffset: isSelected ? 44 : 66,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          style: !disableAnimation ? {
            transition: "stroke-dashoffset 200ms ease"
          } : {}
        }
      )
    }
  );
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-DXTDUHS5.mjs
var chunk_DXTDUHS5 = __webpack_require__(2507);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(4997);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs + 1 modules
var chunk_BSXPKUBX = __webpack_require__(4480);
// EXTERNAL MODULE: ./node_modules/@nextui-org/use-aria-press/dist/index.mjs + 5 modules
var dist = __webpack_require__(9816);
// EXTERNAL MODULE: ./node_modules/@nextui-org/use-is-mobile/dist/index.mjs
var use_is_mobile_dist = __webpack_require__(2304);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-W6BLGMUE.mjs
"use client";

// src/use-listbox-item.ts











function useListboxItem(originalProps) {
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, chunk_DXTDUHS5/* menuItem */.D9.variantKeys);
  const {
    as,
    item,
    state,
    description,
    startContent,
    endContent,
    isVirtualized,
    selectedIcon,
    className,
    classNames,
    autoFocus,
    onPress,
    onClick,
    shouldHighlightOnFocus,
    hideSelectedIcon = false,
    isReadOnly = false,
    ...otherProps
  } = props;
  const disableAnimation = originalProps.disableAnimation;
  const domRef = (0,react_.useRef)(null);
  const Component = as || (originalProps.href ? "a" : "li");
  const shouldFilterDOMProps = typeof Component === "string";
  const { rendered, key } = item;
  const isDisabled = state.disabledKeys.has(key) || originalProps.isDisabled;
  const isSelectable = state.selectionManager.selectionMode !== "none";
  const isMobile = (0,use_is_mobile_dist/* useIsMobile */.d)();
  const { pressProps, isPressed } = (0,dist/* usePress */.r)({
    ref: domRef,
    isDisabled,
    onPress
  });
  const { isHovered, hoverProps } = (0,interactions_dist_import/* useHover */.XI)({
    isDisabled
  });
  const { isFocusVisible, focusProps } = (0,focus_dist_import/* useFocusRing */.Fx)({
    autoFocus
  });
  const { isFocused, isSelected, optionProps, labelProps, descriptionProps } = $293f70390ea03370$export$497855f14858aa34(
    {
      key,
      isDisabled,
      "aria-label": props["aria-label"],
      isVirtualized
    },
    state,
    domRef
  );
  let itemProps = optionProps;
  const slots = (0,react_.useMemo)(
    () => (0,chunk_DXTDUHS5/* menuItem */.D9)({
      ...variantProps,
      isDisabled,
      disableAnimation
    }),
    [...Object.values(variantProps), isDisabled, disableAnimation]
  );
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  if (isReadOnly) {
    itemProps = (0,chunk_EB2I5ZVA/* removeEvents */.Os)(itemProps);
  }
  const isHighlighted = (0,react_.useMemo)(() => {
    if (shouldHighlightOnFocus && isFocused) {
      return true;
    }
    return isMobile ? isHovered || isPressed : isHovered;
  }, [isHovered, isPressed, isFocused, isMobile, shouldHighlightOnFocus]);
  const getItemProps = (props2 = {}) => ({
    ref: domRef,
    ...(0,utils_dist_import/* mergeProps */.dG)(
      { onClick },
      itemProps,
      isReadOnly ? {} : (0,utils_dist_import/* mergeProps */.dG)(focusProps, pressProps),
      hoverProps,
      (0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      props2
    ),
    "data-selectable": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isSelectable),
    "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
    "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isHighlighted),
    "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
    "data-selected": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isSelected),
    "data-pressed": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isPressed),
    "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
    className: slots.base({ class: (0,chunk_6BQDBGF4/* clsx */.W)(baseStyles, props2.className) })
  });
  const getLabelProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(labelProps, props2),
    "data-label": (0,chunk_MCFSCOSB/* dataAttr */.PB)(true),
    className: slots.title({ class: classNames == null ? void 0 : classNames.title })
  });
  const getDescriptionProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(descriptionProps, props2),
    className: slots.description({ class: classNames == null ? void 0 : classNames.description })
  });
  const getWrapperProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(props2),
    className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper })
  });
  const getSelectedIconProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        "aria-hidden": (0,chunk_MCFSCOSB/* dataAttr */.PB)(true),
        "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
        className: slots.selectedIcon({ class: classNames == null ? void 0 : classNames.selectedIcon }),
        ...props2
      };
    },
    [isDisabled, slots, classNames]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    isSelectable,
    isSelected,
    isDisabled,
    rendered,
    description,
    startContent,
    endContent,
    selectedIcon,
    hideSelectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getSelectedIconProps
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-T466JFA5.mjs
"use client";



// src/listbox-item.tsx



var ListboxItem = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, _) => {
  const {
    Component,
    rendered,
    description,
    isSelectable,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    hideSelectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getSelectedIconProps
  } = useListboxItem(props);
  const selectedContent = (0,react_.useMemo)(() => {
    const defaultIcon = /* @__PURE__ */ (0,jsx_runtime_.jsx)(ListboxSelectedIcon, { disableAnimation, isSelected });
    if (typeof selectedIcon === "function") {
      return selectedIcon({ icon: defaultIcon, isSelected, isDisabled });
    }
    if (selectedIcon)
      return selectedIcon;
    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getItemProps(), children: [
    startContent,
    description ? /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ...getWrapperProps(), children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getLabelProps(), children: rendered }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getDescriptionProps(), children: description })
    ] }) : /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getLabelProps(), children: rendered }),
    isSelectable && !hideSelectedIcon && /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getSelectedIconProps(), children: selectedContent }),
    endContent
  ] });
});
ListboxItem.displayName = "NextUI.ListboxItem";
var listbox_item_default = ListboxItem;



// EXTERNAL MODULE: ./node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs + 3 modules
var chunk_44JHHBS2 = __webpack_require__(4494);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-YLJCYQVW.mjs
"use client";


// src/listbox-section.tsx








var ListboxSection = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(
  ({
    item,
    state,
    as,
    variant,
    color,
    disableAnimation,
    className,
    classNames,
    hideSelectedIcon,
    showDivider = false,
    dividerProps = {},
    itemClasses,
    title,
    ...otherProps
  }, _) => {
    const Component = as || "li";
    const slots = (0,react_.useMemo)(() => (0,chunk_DXTDUHS5/* menuSection */.Dk)(), []);
    const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
    const dividerStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.divider, dividerProps == null ? void 0 : dividerProps.className);
    const { itemProps, headingProps, groupProps } = $af383d3bef1cfdc9$export$c3f9f39876e4bc7({
      heading: item.rendered,
      "aria-label": item["aria-label"]
    });
    return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
      Component,
      {
        "data-slot": "base",
        ...(0,utils_dist_import/* mergeProps */.dG)(itemProps, otherProps),
        className: slots.base({ class: baseStyles }),
        children: [
          item.rendered && /* @__PURE__ */ (0,jsx_runtime_.jsx)(
            "span",
            {
              ...headingProps,
              className: slots.heading({ class: classNames == null ? void 0 : classNames.heading }),
              "data-slot": "heading",
              children: item.rendered
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
            "ul",
            {
              ...groupProps,
              className: slots.group({ class: classNames == null ? void 0 : classNames.group }),
              "data-has-title": !!item.rendered,
              "data-slot": "group",
              children: [
                [...item.childNodes].map((node) => {
                  const { key: nodeKey, props: nodeProps } = node;
                  let listboxItem = /* @__PURE__ */ (0,jsx_runtime_.jsx)(
                    listbox_item_default,
                    {
                      classNames: itemClasses,
                      color,
                      disableAnimation,
                      hideSelectedIcon,
                      item: node,
                      state,
                      variant,
                      ...nodeProps
                    },
                    nodeKey
                  );
                  if (node.wrapper) {
                    listboxItem = node.wrapper(listboxItem);
                  }
                  return listboxItem;
                }),
                showDivider && /* @__PURE__ */ (0,jsx_runtime_.jsx)(
                  chunk_44JHHBS2/* divider_default */.j,
                  {
                    as: "li",
                    className: slots.divider({
                      class: dividerStyles
                    }),
                    ...dividerProps
                  }
                )
              ]
            }
          )
        ]
      },
      item.key
    );
  }
);
ListboxSection.displayName = "NextUI.ListboxSection";
var listbox_section_default = ListboxSection;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-P7Z6AEJN.mjs
"use client";

// src/use-listbox.ts






function useListbox(props) {
  const {
    ref,
    as,
    state: propState,
    variant,
    color,
    onAction,
    children,
    onSelectionChange,
    disableAnimation,
    itemClasses,
    className,
    topContent,
    bottomContent,
    emptyContent = "No items.",
    hideSelectedIcon = false,
    hideEmptyContent = false,
    shouldHighlightOnFocus = false,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "ul";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const innerState = $e72dd72e1c76a225$export$2f645645f7bca764({ ...props, children, onSelectionChange });
  const state = propState || innerState;
  const { listBoxProps } = $c132121280ec012d$export$50eacbbf140a3141({ ...props, onAction }, state, domRef);
  const slots = (0,react_.useMemo)(() => (0,chunk_DXTDUHS5/* menu */.GI)({ className }), [, className]);
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "base",
      className: slots.base({ class: baseStyles }),
      ...(0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      ...props2
    };
  };
  const getListProps = (props2 = {}) => {
    return {
      "data-slot": "list",
      className: slots.list({ class: classNames == null ? void 0 : classNames.list }),
      ...listBoxProps,
      ...props2
    };
  };
  const getEmptyContentProps = (props2 = {}) => {
    return {
      "data-slot": "empty-content",
      children: emptyContent,
      className: slots.emptyContent({ class: classNames == null ? void 0 : classNames.emptyContent }),
      ...props2
    };
  };
  return {
    Component,
    state,
    variant,
    color,
    slots,
    classNames,
    topContent,
    bottomContent,
    emptyContent,
    hideEmptyContent,
    shouldHighlightOnFocus,
    hideSelectedIcon,
    disableAnimation,
    className,
    itemClasses,
    getBaseProps,
    getListProps,
    getEmptyContentProps
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/listbox/dist/chunk-LWSOAJRL.mjs
"use client";




// src/listbox.tsx



function Listbox(props, ref) {
  const {
    Component,
    state,
    color,
    variant,
    itemClasses,
    getBaseProps,
    topContent,
    bottomContent,
    hideEmptyContent,
    hideSelectedIcon,
    shouldHighlightOnFocus,
    disableAnimation,
    getEmptyContentProps,
    getListProps
  } = useListbox({ ...props, ref });
  const content = /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getListProps(), children: [
    !state.collection.size && !hideEmptyContent && /* @__PURE__ */ (0,jsx_runtime_.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getEmptyContentProps() }) }),
    [...state.collection].map((item) => {
      var _a;
      const itemProps = {
        color,
        item,
        state,
        variant,
        disableAnimation,
        hideSelectedIcon,
        ...item.props
      };
      if (item.type === "section") {
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(listbox_section_default, { ...itemProps, itemClasses }, item.key);
      }
      let listboxItem = /* @__PURE__ */ (0,jsx_runtime_.jsx)(
        listbox_item_default,
        {
          ...itemProps,
          classNames: (0,utils_dist_import/* mergeProps */.dG)(itemClasses, (_a = item.props) == null ? void 0 : _a.classNames),
          shouldHighlightOnFocus
        },
        item.key
      );
      if (item.wrapper) {
        listboxItem = item.wrapper(listboxItem);
      }
      return listboxItem;
    })
  ] });
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ...getBaseProps(), children: [
    topContent,
    content,
    bottomContent
  ] });
}
Listbox.displayName = "NextUI.Listbox";
var listbox_default = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(Listbox);
Listbox.displayName = "NextUI.Listbox";



// EXTERNAL MODULE: ./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs + 217 modules
var chunk_NXTXE2B3 = __webpack_require__(5843);
// EXTERNAL MODULE: ./node_modules/@nextui-org/input/dist/chunk-TC4QW7OA.mjs
var chunk_TC4QW7OA = __webpack_require__(4032);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/is-browser.mjs
const isBrowser = typeof document !== "undefined";



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs



const useIsomorphicLayoutEffect = isBrowser ? react_.useLayoutEffect : react_.useEffect;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react_.useRef)(false);
    useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/noop.mjs
const noop_noop = (any) => any;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/frameloop/render-step.mjs
class Queue {
    constructor() {
        this.order = [];
        this.scheduled = new Set();
    }
    add(process) {
        if (!this.scheduled.has(process)) {
            this.scheduled.add(process);
            this.order.push(process);
            return true;
        }
    }
    remove(process) {
        const index = this.order.indexOf(process);
        if (index !== -1) {
            this.order.splice(index, 1);
            this.scheduled.delete(process);
        }
    }
    clear() {
        this.order.length = 0;
        this.scheduled.clear();
    }
}
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Queue();
    let nextFrame = new Queue();
    let numToRun = 0;
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (queue.add(callback) && addToCurrentFrame && isProcessing) {
                // If we're adding it to the currently running queue, update its measured size
                numToRun = thisFrame.order.length;
            }
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.remove(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            numToRun = thisFrame.order.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = thisFrame.order[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/frameloop/batcher.mjs


const stepsOrder = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0,
        timestamp: 0,
        isProcessing: false,
    };
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(() => (runNextFrame = true));
        return acc;
    }, {});
    const processStep = (stepId) => steps[stepId].process(state);
    const processBatch = () => {
        const timestamp = performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        stepsOrder.forEach(processStep);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => stepsOrder.forEach((key) => steps[key].cancel(process));
    return { schedule, cancel, state, steps };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/frameloop/frame.mjs



const { schedule: frame_frame, cancel: cancelFrame, state: frameData, steps, } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop_noop, true);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react_.useState)(0);
    const forceRender = (0,react_.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react_.useCallback)(() => frame_frame.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/context/PresenceContext.mjs


/**
 * @public
 */
const PresenceContext = (0,react_.createContext)(null);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/use-constant.mjs


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react_.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react_.useId)();
    const ref = (0,react_.useRef)(null);
    const size = (0,react_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react_.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react_.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react_.cloneElement(children, { ref })));
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = (0,react_.useId)();
    const context = (0,react_.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react_.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react_.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react_.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (react_.createElement(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs


const LayoutGroupContext = (0,react_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


function useUnmountEffect(callback) {
    return (0,react_.useEffect)(() => () => callback(), []);
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/utils/errors.mjs


let warning = (/* unused pure expression or super */ null && (noop));
let invariant = noop_noop;
if (false) {}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react_.Children.forEach(children, (child) => {
        if ((0,react_.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = (0,react_.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = (0,react_.useRef)(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react_.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react_.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react_.useRef)(true);
    useIsomorphicLayoutEffect(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (react_.createElement(react_.Fragment, null, childrenToRender.map((child) => (react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                allChildren.delete(key);
                exitingChildren.delete(key);
                // Remove this child from the present children
                const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
                presentChildren.current.splice(removeIndex, 1);
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    presentChildren.current = filteredChildren;
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (react_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (false) {}
    return (react_.createElement(react_.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react_.cloneElement)(child))));
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/autocomplete/dist/chunk-OYGNMYN6.mjs
"use client";


// src/autocomplete.tsx









function Autocomplete(props, ref) {
  const {
    Component,
    state,
    isOpen,
    disableAnimation,
    selectorIcon = /* @__PURE__ */ (0,jsx_runtime_.jsx)(ChevronDownIcon, {}),
    clearIcon = /* @__PURE__ */ (0,jsx_runtime_.jsx)(chunk_HV2L33LJ/* CloseIcon */.T, {}),
    endContent,
    getBaseProps,
    getSelectorButtonProps,
    getInputProps,
    getListBoxProps,
    getPopoverProps,
    getClearButtonProps,
    getListBoxWrapperProps,
    getEndContentWrapperProps
  } = useAutocomplete({ ...props, ref });
  const popoverContent = isOpen ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(free_solo_popover_default, { ...getPopoverProps(), state, children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(scroll_shadow_default, { ...getListBoxWrapperProps(), children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(listbox_default, { ...getListBoxProps() }) }) }) : null;
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getBaseProps(), children: [
    /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      chunk_TC4QW7OA/* input_default */.Y,
      {
        ...getInputProps(),
        endContent: /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ...getEndContentWrapperProps(), children: [
          endContent || /* @__PURE__ */ (0,jsx_runtime_.jsx)(chunk_NXTXE2B3/* button_default */.A, { ...getClearButtonProps(), children: clearIcon }),
          /* @__PURE__ */ (0,jsx_runtime_.jsx)(chunk_NXTXE2B3/* button_default */.A, { ...getSelectorButtonProps(), children: selectorIcon })
        ] })
      }
    ),
    disableAnimation ? popoverContent : /* @__PURE__ */ (0,jsx_runtime_.jsx)(AnimatePresence, { children: popoverContent })
  ] });
}
var autocomplete_default = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(Autocomplete);
Autocomplete.displayName = "NextUI.Autocomplete";




/***/ }),

/***/ 682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ listbox_item_base_default)
/* harmony export */ });
/* harmony import */ var _nextui_org_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2049);
"use client";

// src/base/listbox-item-base.tsx

var ListboxItemBase = _nextui_org_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .Item */ .ck;
var listbox_item_base_default = ListboxItemBase;




/***/ }),

/***/ 8084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ pagination_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(8973);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-SDEB5NXU.mjs
"use client";

// src/pagination-cursor.tsx



var PaginationCursor = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { as, activePage, ...otherProps } = props;
  const Component = as || "span";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ref: domRef, "aria-hidden": true, ...otherProps, children: activePage });
});
PaginationCursor.displayName = "NextUI.PaginationCursor";
var pagination_cursor_default = PaginationCursor;



// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(7241);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(1145);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@nextui-org/use-aria-press/dist/index.mjs + 5 modules
var dist = __webpack_require__(9816);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs + 1 modules
var chunk_BSXPKUBX = __webpack_require__(4480);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(4997);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-PHSAT6TX.mjs
"use client";

// src/use-pagination-item.ts







function usePaginationItem(props) {
  const {
    as,
    ref,
    value,
    children,
    isActive,
    isDisabled,
    onPress,
    onClick,
    getAriaLabel,
    className,
    ...otherProps
  } = props;
  const isLink = !!(props == null ? void 0 : props.href);
  const Component = as || isLink ? "a" : "li";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const router = (0,dist_import/* useRouter */.tv)();
  const ariaLabel = (0,react_.useMemo)(
    () => isActive ? `${getAriaLabel == null ? void 0 : getAriaLabel(value)} active` : getAriaLabel == null ? void 0 : getAriaLabel(value),
    [value, isActive]
  );
  const { isPressed, pressProps } = (0,dist/* usePress */.r)({
    isDisabled,
    onPress
  });
  const { focusProps, isFocused, isFocusVisible } = (0,focus_dist_import/* useFocusRing */.Fx)({});
  const { isHovered, hoverProps } = (0,interactions_dist_import/* useHover */.XI)({ isDisabled });
  const getItemProps = (props2 = {}) => {
    return {
      ref: domRef,
      role: "button",
      tabIndex: isDisabled ? -1 : 0,
      "aria-label": ariaLabel,
      "aria-current": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isActive),
      "aria-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
      "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
      "data-active": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isActive),
      "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
      "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isHovered),
      "data-pressed": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isPressed),
      "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
      ...(0,dist_import/* mergeProps */.dG)(
        props2,
        pressProps,
        focusProps,
        hoverProps,
        (0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
          enabled: shouldFilterDOMProps
        })
      ),
      className: (0,chunk_6BQDBGF4/* clsx */.W)(className, props2.className),
      onClick: (e) => {
        (0,dist_import/* chain */.tS)(pressProps == null ? void 0 : pressProps.onClick, onClick)(e);
        if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0,dist_import/* shouldClientNavigate */.b0)(e.currentTarget, e)) {
          e.preventDefault();
          router.open(e.currentTarget, e);
        }
      }
    };
  };
  return {
    Component,
    children,
    ariaLabel,
    isFocused,
    isFocusVisible,
    getItemProps
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-GZBXWWAC.mjs
"use client";


// src/pagination-item.tsx


var PaginationItem = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { Component, children, getItemProps } = usePaginationItem({ ...props, ref });
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ...getItemProps(), children });
});
PaginationItem.displayName = "NextUI.PaginationItem";
var pagination_item_default = PaginationItem;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-SMHVABSV.mjs
// src/numbers.ts
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}
function clampPercentage(value, max = 100) {
  return Math.min(Math.max(value, 0), max);
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-pagination/dist/index.mjs
// src/index.ts


var PaginationItemType = /* @__PURE__ */ ((PaginationItemType2) => {
  PaginationItemType2["DOTS"] = "dots";
  PaginationItemType2["PREV"] = "prev";
  PaginationItemType2["NEXT"] = "next";
  return PaginationItemType2;
})(PaginationItemType || {});
function usePagination(props) {
  const {
    page,
    total,
    siblings = 1,
    boundaries = 1,
    initialPage = 1,
    showControls = false,
    onChange
  } = props;
  const [activePage, setActivePage] = (0,react_.useState)(page || initialPage);
  const onChangeActivePage = (newPage) => {
    setActivePage(newPage);
    onChange && onChange(newPage);
  };
  (0,react_.useEffect)(() => {
    if (page && page !== activePage) {
      setActivePage(page);
    }
  }, [page]);
  const setPage = (0,react_.useCallback)(
    (pageNumber) => {
      if (pageNumber <= 0) {
        onChangeActivePage(1);
      } else if (pageNumber > total) {
        onChangeActivePage(total);
      } else {
        onChangeActivePage(pageNumber);
      }
    },
    [total, activePage]
  );
  const next = () => setPage(activePage + 1);
  const previous = () => setPage(activePage - 1);
  const first = () => setPage(1);
  const last = () => setPage(total);
  const formatRange = (0,react_.useCallback)(
    (range2) => {
      if (showControls) {
        return ["prev" /* PREV */, ...range2, "next" /* NEXT */];
      }
      return range2;
    },
    [showControls]
  );
  const paginationRange = (0,react_.useMemo)(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= total) {
      return formatRange(range(1, total));
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return formatRange([
        ...range(1, leftItemCount),
        "dots" /* DOTS */,
        ...range(total - (boundaries - 1), total)
      ]);
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return formatRange([
        ...range(1, boundaries),
        "dots" /* DOTS */,
        ...range(total - rightItemCount, total)
      ]);
    }
    return formatRange([
      ...range(1, boundaries),
      "dots" /* DOTS */,
      ...range(leftSiblingIndex, rightSiblingIndex),
      "dots" /* DOTS */,
      ...range(total - boundaries + 1, total)
    ]);
  }, [total, activePage, siblings, boundaries, formatRange]);
  return {
    range: paginationRange,
    activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}


;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.js
const t=t=>"object"==typeof t&&null!=t&&1===t.nodeType,e=(t,e)=>(!e||"hidden"!==t)&&("visible"!==t&&"clip"!==t),n=(t,n)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const o=getComputedStyle(t,null);return e(o.overflowY,n)||e(o.overflowX,n)||(t=>{const e=(t=>{if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}})(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)})(t)}return!1},o=(t,e,n,o,l,r,i,s)=>r<t&&i>e||r>t&&i<e?0:r<=t&&s<=n||i>=e&&s>=n?r-t-o:i>e&&s<n||r<t&&s>n?i-e+l:0,l=t=>{const e=t.parentElement;return null==e?t.getRootNode().host||null:e},dist_r=(e,r)=>{var i,s,d,h;if("undefined"==typeof document)return[];const{scrollMode:c,block:f,inline:u,boundary:a,skipOverflowHiddenElements:g}=r,p="function"==typeof a?a:t=>t!==a;if(!t(e))throw new TypeError("Invalid target");const m=document.scrollingElement||document.documentElement,w=[];let W=e;for(;t(W)&&p(W);){if(W=l(W),W===m){w.push(W);break}null!=W&&W===document.body&&n(W)&&!n(document.documentElement)||null!=W&&n(W,g)&&w.push(W)}const b=null!=(s=null==(i=window.visualViewport)?void 0:i.width)?s:innerWidth,H=null!=(h=null==(d=window.visualViewport)?void 0:d.height)?h:innerHeight,{scrollX:y,scrollY:M}=window,{height:v,width:E,top:x,right:C,bottom:I,left:R}=e.getBoundingClientRect(),{top:T,right:B,bottom:F,left:V}=(t=>{const e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}})(e);let k="start"===f||"nearest"===f?x-T:"end"===f?I+F:x+v/2-T+F,D="center"===u?R+E/2-V+B:"end"===u?C+B:R-V;const L=[];for(let t=0;t<w.length;t++){const e=w[t],{height:n,width:l,top:r,right:i,bottom:s,left:d}=e.getBoundingClientRect();if("if-needed"===c&&x>=0&&R>=0&&I<=H&&C<=b&&x>=r&&I<=s&&R>=d&&C<=i)return L;const h=getComputedStyle(e),a=parseInt(h.borderLeftWidth,10),g=parseInt(h.borderTopWidth,10),p=parseInt(h.borderRightWidth,10),W=parseInt(h.borderBottomWidth,10);let T=0,B=0;const F="offsetWidth"in e?e.offsetWidth-e.clientWidth-a-p:0,V="offsetHeight"in e?e.offsetHeight-e.clientHeight-g-W:0,S="offsetWidth"in e?0===e.offsetWidth?0:l/e.offsetWidth:0,X="offsetHeight"in e?0===e.offsetHeight?0:n/e.offsetHeight:0;if(m===e)T="start"===f?k:"end"===f?k-H:"nearest"===f?o(M,M+H,H,g,W,M+k,M+k+v,v):k-H/2,B="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:o(y,y+b,b,a,p,y+D,y+D+E,E),T=Math.max(0,T+M),B=Math.max(0,B+y);else{T="start"===f?k-r-g:"end"===f?k-s+W+V:"nearest"===f?o(r,s,n,g,W+V,k,k+v,v):k-(r+n/2)+V/2,B="start"===u?D-d-a:"center"===u?D-(d+l/2)+F/2:"end"===u?D-i+p+F:o(d,i,l,a,p+F,D,D+E,E);const{scrollLeft:t,scrollTop:h}=e;T=0===X?0:Math.max(0,Math.min(h+T/X,e.scrollHeight-n/X+V)),B=0===S?0:Math.max(0,Math.min(t+B/S,e.scrollWidth-l/S+F)),k+=h-T,D+=t-B}L.push({el:e,top:T,left:B})}return L};//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/scroll-into-view-if-needed/dist/index.js
const dist_o=e=>!1===e?{block:"end",inline:"nearest"}:(e=>e===Object(e)&&0!==Object.keys(e).length)(e)?e:{block:"start",inline:"nearest"};function dist_t(t,n){if(!t.isConnected||!(e=>{let o=e;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(t))return;if((e=>"object"==typeof e&&"function"==typeof e.behavior)(n))return n.behavior(dist_r(t,n));const r="boolean"==typeof n||null==n?void 0:n.behavior;for(const{el:i,top:a,left:l}of dist_r(t,dist_o(n)))i.scroll({top:a,left:l,behavior:r})}//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-2PIR7DFM.mjs
var chunk_2PIR7DFM = __webpack_require__(8737);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(7364);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var chunk_XHQUSKIE = __webpack_require__(6313);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-SPRRISBY.mjs




// src/components/pagination.ts
var pagination = (0,chunk_6AEINX52.tv)({
  slots: {
    base: ["p-2.5", "-m-2.5", "overflow-x-scroll", "scrollbar-hide"],
    wrapper: [
      "flex",
      "flex-nowrap",
      "h-fit",
      "max-w-fit",
      "relative",
      "gap-1",
      "items-center",
      "overflow-visible"
    ],
    item: ["tap-highlight-transparent", "select-none", "touch-none"],
    prev: "",
    next: "",
    cursor: [
      "absolute",
      "flex",
      "overflow-visible",
      "items-center",
      "justify-center",
      "origin-center",
      "left-0",
      "select-none",
      "touch-none",
      "pointer-events-none",
      "z-20"
    ],
    forwardIcon: "hidden group-hover:block group-data-[focus-visible=true]:block data-[before=true]:rotate-180",
    ellipsis: "group-hover:hidden group-data-[focus-visible=true]:hidden",
    chevronNext: "rotate-180"
  },
  variants: {
    variant: {
      bordered: {
        item: [
          "border-medium",
          "border-default",
          "bg-transparent",
          "data-[hover=true]:bg-default-100"
        ]
      },
      light: {
        item: "bg-transparent"
      },
      flat: {},
      faded: {
        item: ["border-medium", "border-default"]
      }
    },
    color: {
      default: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.default
      },
      primary: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.primary
      },
      secondary: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.secondary
      },
      success: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.success
      },
      warning: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.warning
      },
      danger: {
        cursor: chunk_2PIR7DFM/* colorVariants */.J.solid.danger
      }
    },
    size: {
      sm: {},
      md: {},
      lg: {}
    },
    radius: {
      none: {},
      sm: {},
      md: {},
      lg: {},
      full: {}
    },
    isCompact: {
      true: {
        wrapper: "gap-0 shadow-sm",
        item: [
          "shadow-none",
          "first-of-type:rounded-r-none",
          "last-of-type:rounded-l-none",
          "[&:not(:first-of-type):not(:last-of-type)]:rounded-none"
        ],
        prev: "!rounded-r-none",
        next: "!rounded-l-none"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    showShadow: {
      true: {}
    },
    disableCursorAnimation: {
      true: {
        cursor: "hidden"
      }
    },
    disableAnimation: {
      true: {
        item: "transition-none",
        cursor: "transition-none"
      },
      false: {
        item: ["data-[pressed=true]:scale-[0.97]", "transition-transform-background"],
        cursor: [
          "data-[moving=true]:transition-transform",
          "!data-[moving=true]:duration-300",
          "opacity-0",
          "data-[moving]:opacity-100"
        ]
      }
    }
  },
  defaultVariants: {
    variant: "flat",
    color: "primary",
    size: "md",
    radius: "md",
    isCompact: false,
    isDisabled: false,
    showShadow: false,
    disableAnimation: false,
    disableCursorAnimation: false
  },
  compoundVariants: [
    {
      showShadow: true,
      color: "default",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.default, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "primary",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.primary, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "secondary",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.secondary, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "success",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.success, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "warning",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.warning, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "danger",
      class: {
        cursor: [chunk_2PIR7DFM/* colorVariants */.J.shadow.danger, "shadow-md"]
      }
    },
    {
      isCompact: true,
      variant: "bordered",
      class: {
        item: "[&:not(:first-of-type)]:ml-[calc(theme(borderWidth.2)*-1)]"
      }
    },
    {
      disableCursorAnimation: true,
      color: "default",
      class: {
        item: [
          "data-[active=true]:bg-default-400",
          "data-[active=true]:border-default-400",
          "data-[active=true]:text-default-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "primary",
      class: {
        item: [
          "data-[active=true]:bg-primary",
          "data-[active=true]:border-primary",
          "data-[active=true]:text-primary-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "secondary",
      class: {
        item: [
          "data-[active=true]:bg-secondary",
          "data-[active=true]:border-secondary",
          "data-[active=true]:text-secondary-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "success",
      class: {
        item: [
          "data-[active=true]:bg-success",
          "data-[active=true]:border-success",
          "data-[active=true]:text-success-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "warning",
      class: {
        item: [
          "data-[active=true]:bg-warning",
          "data-[active=true]:border-warning",
          "data-[active=true]:text-warning-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "danger",
      class: {
        item: [
          "data-[active=true]:bg-danger",
          "data-[active=true]:border-danger",
          "data-[active=true]:text-danger-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "default",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-default/50"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "primary",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-primary/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "secondary",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-secondary/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "success",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-success/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "warning",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-warning/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "danger",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-danger/40"]
      }
    }
  ],
  compoundSlots: [
    {
      slots: ["item", "prev", "next"],
      class: [
        "flex",
        "flex-wrap",
        "truncate",
        "box-border",
        "outline-none",
        "items-center",
        "justify-center",
        "text-default-foreground",
        ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh,
        "data-[disabled=true]:text-default-300",
        "data-[disabled=true]:pointer-events-none"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: ["flat", "bordered", "faded"],
      class: ["shadow-sm"]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "flat",
      class: [
        "bg-default-100",
        "[&[data-hover=true]:not([data-active=true])]:bg-default-200",
        "active:bg-default-300"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "faded",
      class: [
        "bg-default-50",
        "[&[data-hover=true]:not([data-active=true])]:bg-default-100",
        "active:bg-default-200"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "light",
      class: [
        "[&[data-hover=true]:not([data-active=true])]:bg-default-100",
        "active:bg-default-200"
      ]
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "sm",
      class: "min-w-8 w-8 h-8 text-tiny"
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "md",
      class: "min-w-9 w-9 h-9 text-small"
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "lg",
      class: "min-w-10 w-10 h-10 text-medium"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "none",
      class: "rounded-none"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "sm",
      class: "rounded-small"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "md",
      class: "rounded-medium"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "lg",
      class: "rounded-large"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "full",
      class: "rounded-full"
    }
  ]
});



;// CONCATENATED MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-TNTFQBEK.mjs
"use client";

// src/use-pagination.ts








var CURSOR_TRANSITION_TIMEOUT = 300;
function chunk_TNTFQBEK_usePagination(originalProps) {
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, pagination.variantKeys);
  const {
    as,
    ref,
    classNames,
    dotsJump = 5,
    loop = false,
    showControls = false,
    total = 1,
    initialPage = 1,
    page,
    siblings,
    boundaries,
    onChange,
    className,
    renderItem,
    getItemAriaLabel: getItemAriaLabelProp,
    ...otherProps
  } = props;
  const Component = as || "nav";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const cursorRef = (0,react_.useRef)(null);
  const itemsRef = (0,react_.useRef)();
  const cursorTimer = (0,react_.useRef)();
  function getItemsRefMap() {
    if (!itemsRef.current) {
      itemsRef.current = /* @__PURE__ */ new Map();
    }
    return itemsRef.current;
  }
  function getItemRef(node, value) {
    const map = getItemsRefMap();
    if (node) {
      map.set(value, node);
    } else {
      map.delete(value);
    }
  }
  function scrollTo(value, skipAnimation) {
    const map = getItemsRefMap();
    const node = map.get(value);
    if (!node || !cursorRef.current)
      return;
    cursorTimer.current && clearTimeout(cursorTimer.current);
    dist_t(node, {
      scrollMode: "always",
      behavior: "smooth",
      block: "start",
      inline: "start",
      boundary: domRef.current
    });
    const { offsetLeft } = node;
    if (skipAnimation) {
      cursorRef.current.setAttribute("data-moving", "false");
      cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      return;
    }
    cursorRef.current.setAttribute("data-moving", "true");
    cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1.1)`;
    cursorTimer.current = setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      }
      cursorTimer.current = setTimeout(() => {
        var _a;
        (_a = cursorRef.current) == null ? void 0 : _a.setAttribute("data-moving", "false");
        cursorTimer.current && clearTimeout(cursorTimer.current);
      }, CURSOR_TRANSITION_TIMEOUT);
    }, CURSOR_TRANSITION_TIMEOUT);
  }
  const { range, activePage, setPage, previous, next, first, last } = usePagination({
    page,
    total,
    initialPage,
    siblings,
    boundaries,
    showControls,
    onChange
  });
  const activePageRef = (0,react_.useRef)(activePage);
  (0,react_.useEffect)(() => {
    if (activePage && !originalProps.disableAnimation) {
      scrollTo(activePage, activePage === activePageRef.current);
    }
    activePageRef.current = activePage;
  }, [
    activePage,
    originalProps.disableAnimation,
    originalProps.disableCursorAnimation,
    originalProps.dotsJump,
    originalProps.isCompact,
    originalProps.showControls
  ]);
  const slots = (0,react_.useMemo)(
    () => pagination({
      ...variantProps,
      disableCursorAnimation: originalProps.disableCursorAnimation || originalProps.disableAnimation
    }),
    [...Object.values(variantProps)]
  );
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const onNext = () => {
    if (loop && activePage === total) {
      return first();
    }
    return next();
  };
  const onPrevious = () => {
    if (loop && activePage === 1) {
      return last();
    }
    return previous();
  };
  const getBaseProps = (props2 = {}) => {
    return {
      ...props2,
      ref: domRef,
      role: "navigation",
      "aria-label": props2["aria-label"] || "pagination navigation",
      "data-slot": "base",
      "data-controls": (0,chunk_MCFSCOSB/* dataAttr */.PB)(showControls),
      "data-loop": (0,chunk_MCFSCOSB/* dataAttr */.PB)(loop),
      "data-dots-jump": dotsJump,
      "data-total": total,
      "data-active-page": activePage,
      className: slots.base({ class: (0,chunk_6BQDBGF4/* clsx */.W)(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...otherProps
    };
  };
  const getWrapperProps = (props2 = {}) => {
    return {
      ...props2,
      "data-slot": "wrapper",
      className: slots.wrapper({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
    };
  };
  const getItemAriaLabel = (page2) => {
    if (!page2)
      return;
    if (getItemAriaLabelProp) {
      return getItemAriaLabelProp(page2);
    }
    switch (page2) {
      case PaginationItemType.DOTS:
        return "dots element";
      case PaginationItemType.PREV:
        return "previous page button";
      case PaginationItemType.NEXT:
        return "next page button";
      case "first":
        return "first page button";
      case "last":
        return "last page button";
      default:
        return `pagination item ${page2}`;
    }
  };
  const getItemProps = (props2 = {}) => {
    return {
      ...props2,
      ref: (node) => getItemRef(node, props2.value),
      "data-slot": "item",
      isActive: props2.value === activePage,
      className: slots.item({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.item, props2 == null ? void 0 : props2.className) }),
      onPress: () => {
        if (props2.value !== activePage) {
          setPage(props2.value);
        }
      }
    };
  };
  const getCursorProps = (props2 = {}) => {
    return {
      ...props2,
      ref: cursorRef,
      activePage,
      "data-slot": "cursor",
      className: slots.cursor({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.cursor, props2 == null ? void 0 : props2.className) })
    };
  };
  return {
    Component,
    showControls,
    dotsJump,
    slots,
    classNames,
    loop,
    total,
    range,
    activePage,
    getItemRef,
    disableCursorAnimation: originalProps.disableCursorAnimation,
    disableAnimation: originalProps.disableAnimation,
    setPage,
    onPrevious,
    onNext,
    renderItem,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps,
    getItemAriaLabel
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-icons/dist/chunk-OH2E76JR.mjs
// src/chevron.tsx

var ChevronIcon = (props) => /* @__PURE__ */ (0,jsx_runtime_.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      "path",
      {
        d: "M15.5 19l-7-7 7-7",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }
    )
  }
);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-icons/dist/chunk-BU32PI3O.mjs
// src/ellipsis.tsx

var EllipsisIcon = (props) => /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    shapeRendering: "geometricPrecision",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("circle", { cx: "12", cy: "12", fill: "currentColor", r: "1" }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("circle", { cx: "19", cy: "12", fill: "currentColor", r: "1" }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("circle", { cx: "5", cy: "12", fill: "currentColor", r: "1" })
    ]
  }
);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-icons/dist/chunk-M5FBVHRQ.mjs
// src/forward.tsx

var ForwardIcon = (props) => /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    shapeRendering: "geometricPrecision",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("path", { d: "M13 17l5-5-5-5" }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("path", { d: "M6 17l5-5-5-5" })
    ]
  }
);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/pagination/dist/chunk-BIN3WWJN.mjs
"use client";




// src/pagination.tsx







var Pagination = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const {
    Component,
    dotsJump,
    slots,
    classNames,
    total,
    range,
    loop,
    activePage,
    disableCursorAnimation,
    disableAnimation,
    renderItem: renderItemProp,
    onNext,
    onPrevious,
    setPage,
    getItemAriaLabel,
    getItemRef,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps
  } = chunk_TNTFQBEK_usePagination({ ...props, ref });
  const renderItem = (0,react_.useCallback)(
    (value, index) => {
      const isBefore = index < range.indexOf(activePage);
      if (renderItemProp && typeof renderItemProp === "function") {
        let page = typeof value == "number" ? value : index;
        if (value === PaginationItemType.NEXT) {
          page = activePage + 1;
        }
        if (value === PaginationItemType.PREV) {
          page = activePage - 1;
        }
        if (value === PaginationItemType.DOTS) {
          page = isBefore ? activePage - dotsJump >= 1 ? activePage - dotsJump : 1 : activePage + dotsJump <= total ? activePage + dotsJump : total;
        }
        const itemChildren = {
          [PaginationItemType.PREV]: /* @__PURE__ */ (0,jsx_runtime_.jsx)(ChevronIcon, {}),
          [PaginationItemType.NEXT]: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
            ChevronIcon,
            {
              className: slots.chevronNext({
                class: classNames == null ? void 0 : classNames.chevronNext
              })
            }
          ),
          [PaginationItemType.DOTS]: /* @__PURE__ */ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, { children: [
            /* @__PURE__ */ (0,jsx_runtime_.jsx)(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
            /* @__PURE__ */ (0,jsx_runtime_.jsx)(
              ForwardIcon,
              {
                className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                "data-before": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isBefore)
              }
            )
          ] })
        };
        return renderItemProp({
          value,
          index,
          key: `${value}-${index}`,
          page,
          total,
          children: typeof value === "number" ? value : itemChildren[value],
          activePage,
          dotsJump,
          isBefore,
          isActive: value === activePage,
          isPrevious: value === activePage - 1,
          isNext: value === activePage + 1,
          isFirst: value === 1,
          isLast: value === total,
          onNext,
          onPrevious,
          setPage,
          onPress: () => setPage(page),
          ref: typeof value === "number" ? (node) => getItemRef(node, value) : void 0,
          className: slots.item({ class: classNames == null ? void 0 : classNames.item }),
          getAriaLabel: getItemAriaLabel
        });
      }
      if (value === PaginationItemType.PREV) {
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          pagination_item_default,
          {
            className: slots.prev({
              class: classNames == null ? void 0 : classNames.prev
            }),
            "data-slot": "prev",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === 1,
            value,
            onPress: onPrevious,
            children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(ChevronIcon, {})
          },
          PaginationItemType.PREV
        );
      }
      if (value === PaginationItemType.NEXT) {
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
          pagination_item_default,
          {
            className: slots.next({
              class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.next)
            }),
            "data-slot": "next",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === total,
            value,
            onPress: onNext,
            children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
              ChevronIcon,
              {
                className: slots.chevronNext({
                  class: classNames == null ? void 0 : classNames.chevronNext
                })
              }
            )
          },
          PaginationItemType.NEXT
        );
      }
      if (value === PaginationItemType.DOTS) {
        return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
          pagination_item_default,
          {
            className: slots.item({
              class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.item, "group")
            }),
            "data-slot": "item",
            getAriaLabel: getItemAriaLabel,
            value,
            onPress: () => isBefore ? setPage(activePage - dotsJump >= 1 ? activePage - dotsJump : 1) : setPage(activePage + dotsJump <= total ? activePage + dotsJump : total),
            children: [
              /* @__PURE__ */ (0,jsx_runtime_.jsx)(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
              /* @__PURE__ */ (0,jsx_runtime_.jsx)(
                ForwardIcon,
                {
                  className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                  "data-before": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isBefore)
                }
              )
            ]
          },
          PaginationItemType.DOTS + isBefore
        );
      }
      return /* @__PURE__ */ (0,react_.createElement)(pagination_item_default, { ...getItemProps({ value }), key: value, getAriaLabel: getItemAriaLabel }, value);
    },
    [activePage, dotsJump, getItemProps, loop, range, renderItemProp, slots, classNames, total]
  );
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ...getBaseProps(), children: /* @__PURE__ */ (0,jsx_runtime_.jsxs)("ul", { ...getWrapperProps(), children: [
    !disableCursorAnimation && !disableAnimation && /* @__PURE__ */ (0,jsx_runtime_.jsx)(pagination_cursor_default, { ...getCursorProps() }),
    range.map(renderItem)
  ] }) });
});
Pagination.displayName = "NextUI.Pagination";
var pagination_default = Pagination;




/***/ }),

/***/ 8691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
// src/close.tsx

var CloseIcon = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M18 6L6 18M6 6l12 12" })
  }
);




/***/ })

};
;