"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 8922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ useInput)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(8973);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var dist_import = __webpack_require__(4997);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(7364);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var chunk_XHQUSKIE = __webpack_require__(6313);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-GOHT67J3.mjs



// src/components/input.ts
var input = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "group flex flex-col",
    label: [
      "absolute",
      "z-10",
      "pointer-events-none",
      "origin-top-left",
      "subpixel-antialiased",
      "block",
      "text-small",
      "text-foreground-500"
    ],
    mainWrapper: "h-full",
    inputWrapper: "relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3",
    innerWrapper: "inline-flex w-full items-center h-full box-border",
    input: [
      "w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none",
      "data-[has-start-content=true]:ps-1.5",
      "data-[has-end-content=true]:pe-1.5"
    ],
    clearButton: [
      "p-2",
      "-m-2",
      "z-10",
      "hidden",
      "absolute",
      "right-3",
      "appearance-none",
      "outline-none",
      "select-none",
      "opacity-0",
      "hover:!opacity-100",
      "cursor-pointer",
      "active:!opacity-70",
      "rounded-full",
      ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh
    ],
    helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
    description: "text-tiny text-foreground-400",
    errorMessage: "text-tiny text-danger"
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: [
          "bg-default-100",
          "data-[hover=true]:bg-default-200",
          "group-data-[focus=true]:bg-default-100"
        ]
      },
      faded: {
        inputWrapper: [
          "bg-default-100",
          "border-medium",
          "border-default-200",
          "data-[hover=true]:border-default-400"
        ],
        value: "group-data-[has-value=true]:text-default-foreground"
      },
      bordered: {
        inputWrapper: [
          "border-medium",
          "border-default-200",
          "data-[hover=true]:border-default-400",
          "group-data-[focus=true]:border-default-foreground"
        ]
      },
      underlined: {
        inputWrapper: [
          "!px-1",
          "!pb-0",
          "!gap-0",
          "relative",
          "box-border",
          "border-b-medium",
          "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "border-default-200",
          "!rounded-none",
          "hover:border-default-300",
          "after:content-['']",
          "after:w-0",
          "after:origin-center",
          "after:bg-default-foreground",
          "after:absolute",
          "after:left-1/2",
          "after:-translate-x-1/2",
          "after:-bottom-[2px]",
          "after:h-[2px]",
          "group-data-[focus=true]:after:w-full"
        ],
        innerWrapper: "pb-1",
        label: "group-data-[filled-within=true]:text-foreground"
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        label: "text-tiny",
        inputWrapper: "h-unit-8 min-h-unit-8 px-2 rounded-small",
        input: "text-small",
        clearButton: "text-medium"
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10 rounded-medium",
        input: "text-small",
        clearButton: "text-large"
      },
      lg: {
        inputWrapper: "h-unit-12 min-h-unit-12 rounded-large",
        input: "text-medium",
        clearButton: "text-large"
      }
    },
    radius: {
      none: {
        inputWrapper: "rounded-none"
      },
      sm: {
        inputWrapper: "rounded-small"
      },
      md: {
        inputWrapper: "rounded-medium"
      },
      lg: {
        inputWrapper: "rounded-large"
      },
      full: {
        inputWrapper: "rounded-full"
      }
    },
    labelPlacement: {
      outside: {
        mainWrapper: "flex flex-col"
      },
      "outside-left": {
        base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
        inputWrapper: "flex-1",
        mainWrapper: "flex flex-col",
        label: "relative text-foreground pr-2"
      },
      inside: {
        label: "text-tiny cursor-text",
        inputWrapper: "flex-col items-start justify-center gap-0",
        innerWrapper: "group-data-[has-label=true]:items-end"
      }
    },
    fullWidth: {
      true: {
        base: "w-full"
      }
    },
    isClearable: {
      true: {
        input: "peer pr-6",
        clearButton: "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
        inputWrapper: "pointer-events-none",
        label: "pointer-events-none"
      }
    },
    isInvalid: {
      true: {
        label: "!text-danger",
        input: "!placeholder:text-danger !text-danger"
      }
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5"
      }
    },
    isMultiline: {
      true: {
        label: "relative",
        inputWrapper: "!h-auto",
        innerWrapper: "items-start group-data-[has-label=true]:items-start",
        input: "resize-none data-[hide-scroll=true]:scrollbar-hide"
      }
    },
    disableAnimation: {
      true: {
        input: "transition-none",
        inputWrapper: "transition-none",
        label: "transition-none"
      },
      false: {
        inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
        label: [
          "will-change-auto",
          "!duration-200",
          "!ease-out",
          "motion-reduce:transition-none",
          "transition-[transform,color,left,opacity]"
        ],
        clearButton: ["transition-opacity", "motion-reduce:transition-none"]
      }
    }
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    fullWidth: true,
    labelPlacement: "inside",
    isDisabled: false,
    isMultiline: false,
    disableAnimation: false
  },
  compoundVariants: [
    {
      variant: "flat",
      color: "default",
      class: {
        input: "group-data-[has-value=true]:text-default-foreground"
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        inputWrapper: [
          "bg-primary-50",
          "data-[hover=true]:bg-primary-100",
          "text-primary",
          "group-data-[focus=true]:bg-primary-50",
          "placeholder:text-primary"
        ],
        input: "placeholder:text-primary",
        label: "text-primary"
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        inputWrapper: [
          "bg-secondary-50",
          "text-secondary",
          "data-[hover=true]:bg-secondary-100",
          "group-data-[focus=true]:bg-secondary-50",
          "placeholder:text-secondary"
        ],
        input: "placeholder:text-secondary",
        label: "text-secondary"
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        inputWrapper: [
          "bg-success-50",
          "text-success-600",
          "dark:text-success",
          "placeholder:text-success-600",
          "dark:placeholder:text-success",
          "data-[hover=true]:bg-success-100",
          "group-data-[focus=true]:bg-success-50"
        ],
        input: "placeholder:text-success-600 dark:placeholder:text-success",
        label: "text-success-600 dark:text-success"
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        inputWrapper: [
          "bg-warning-50",
          "text-warning-600",
          "dark:text-warning",
          "placeholder:text-warning-600",
          "dark:placeholder:text-warning",
          "data-[hover=true]:bg-warning-100",
          "group-data-[focus=true]:bg-warning-50"
        ],
        input: "placeholder:text-warning-600 dark:placeholder:text-warning",
        label: "text-warning-600 dark:text-warning"
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        inputWrapper: [
          "bg-danger-50",
          "text-danger",
          "dark:text-danger-500",
          "placeholder:text-danger",
          "dark:placeholder:text-danger-500",
          "data-[hover=true]:bg-danger-100",
          "group-data-[focus=true]:bg-danger-50"
        ],
        input: "placeholder:text-danger dark:placeholder:text-danger-500",
        label: "text-danger dark:text-danger-500"
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        label: "text-primary",
        inputWrapper: "data-[hover=true]:border-primary focus-within:border-primary"
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        label: "text-secondary",
        inputWrapper: "data-[hover=true]:border-secondary focus-within:border-secondary"
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        label: "text-success",
        inputWrapper: "data-[hover=true]:border-success focus-within:border-success"
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        label: "text-warning",
        inputWrapper: "data-[hover=true]:border-warning focus-within:border-warning"
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        label: "text-danger",
        inputWrapper: "data-[hover=true]:border-danger focus-within:border-danger"
      }
    },
    {
      variant: "underlined",
      color: "default",
      class: {
        input: "group-data-[has-value=true]:text-foreground"
      }
    },
    {
      variant: "underlined",
      color: "primary",
      class: {
        inputWrapper: "after:bg-primary",
        label: "text-primary"
      }
    },
    {
      variant: "underlined",
      color: "secondary",
      class: {
        inputWrapper: "after:bg-secondary",
        label: "text-secondary"
      }
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        inputWrapper: "after:bg-success",
        label: "text-success"
      }
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        inputWrapper: "after:bg-warning",
        label: "text-warning"
      }
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        inputWrapper: "after:bg-danger",
        label: "text-danger"
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        inputWrapper: "group-data-[focus=true]:border-primary",
        label: "text-primary"
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        inputWrapper: "group-data-[focus=true]:border-secondary",
        label: "text-secondary"
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        inputWrapper: "group-data-[focus=true]:border-success",
        label: "text-success"
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        inputWrapper: "group-data-[focus=true]:border-warning",
        label: "text-warning"
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        inputWrapper: "group-data-[focus=true]:border-danger",
        label: "text-danger"
      }
    },
    {
      labelPlacement: "inside",
      color: "default",
      class: {
        label: "group-data-[filled-within=true]:text-default-600"
      }
    },
    {
      labelPlacement: "outside",
      color: "default",
      class: {
        label: "group-data-[filled-within=true]:text-foreground"
      }
    },
    {
      radius: "full",
      size: ["sm"],
      class: {
        inputWrapper: "px-3"
      }
    },
    {
      radius: "full",
      size: "md",
      class: {
        inputWrapper: "px-4"
      }
    },
    {
      radius: "full",
      size: "lg",
      class: {
        inputWrapper: "px-5"
      }
    },
    {
      disableAnimation: false,
      variant: ["faded", "bordered"],
      class: {
        inputWrapper: "transition-colors motion-reduce:transition-none"
      }
    },
    {
      disableAnimation: false,
      variant: "underlined",
      class: {
        inputWrapper: "after:transition-width motion-reduce:after:transition-none"
      }
    },
    {
      variant: ["flat", "faded"],
      class: {
        inputWrapper: [
          ...chunk_XHQUSKIE/* groupDataFocusVisibleClasses */.ID
        ]
      }
    },
    {
      isInvalid: true,
      variant: "flat",
      class: {
        inputWrapper: [
          "bg-danger-50",
          "data-[hover=true]:bg-danger-100",
          "group-data-[focus=true]:bg-danger-50"
        ]
      }
    },
    {
      isInvalid: true,
      variant: "bordered",
      class: {
        inputWrapper: "!border-danger group-data-[focus=true]:border-danger"
      }
    },
    {
      isInvalid: true,
      variant: "underlined",
      class: {
        inputWrapper: "after:bg-danger"
      }
    },
    {
      labelPlacement: "inside",
      size: "sm",
      class: {
        inputWrapper: "h-12 py-1.5 px-3"
      }
    },
    {
      labelPlacement: "inside",
      size: "md",
      class: {
        inputWrapper: "h-14 py-2"
      }
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: {
        label: "text-small",
        inputWrapper: "h-16 py-2.5 gap-0"
      }
    },
    {
      labelPlacement: "inside",
      size: "sm",
      variant: ["bordered", "faded"],
      class: {
        inputWrapper: "py-1"
      }
    },
    {
      labelPlacement: ["inside", "outside"],
      class: {
        label: ["group-data-[filled-within=true]:pointer-events-auto"]
      }
    },
    {
      labelPlacement: ["outside", "outside-left"],
      class: {
        input: "h-full"
      }
    },
    {
      labelPlacement: "outside",
      isMultiline: false,
      class: {
        base: "group relative justify-end",
        label: [
          "pb-0",
          "z-20",
          "top-1/2",
          "-translate-y-1/2",
          "group-data-[filled-within=true]:left-0"
        ]
      }
    },
    {
      labelPlacement: ["inside"],
      class: {
        label: ["group-data-[filled-within=true]:scale-85"]
      }
    },
    {
      labelPlacement: ["inside"],
      variant: "flat",
      class: {
        innerWrapper: "pb-0.5"
      }
    },
    {
      variant: "underlined",
      size: "sm",
      class: {
        innerWrapper: "pb-1"
      }
    },
    {
      variant: "underlined",
      size: ["md", "lg"],
      class: {
        innerWrapper: "pb-1.5"
      }
    },
    {
      labelPlacement: "inside",
      size: ["sm", "md"],
      class: {
        label: "text-small"
      }
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "lg",
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      isMultiline: false,
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      isMultiline: false,
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: ["faded", "bordered"],
      isMultiline: false,
      size: "lg",
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: "underlined",
      isMultiline: false,
      size: "sm",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: "underlined",
      isMultiline: false,
      size: "md",
      class: {
        label: [
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]"
        ]
      }
    },
    {
      labelPlacement: "inside",
      variant: "underlined",
      size: "lg",
      isMultiline: false,
      class: {
        label: [
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]"
        ]
      }
    },
    {
      labelPlacement: "outside",
      size: "sm",
      isMultiline: false,
      class: {
        label: [
          "left-2",
          "text-tiny",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]"
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]"
      }
    },
    {
      labelPlacement: "outside",
      size: "md",
      isMultiline: false,
      class: {
        label: [
          "left-3",
          "text-small",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]"
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]"
      }
    },
    {
      labelPlacement: "outside",
      size: "lg",
      isMultiline: false,
      class: {
        label: [
          "left-3",
          "text-medium",
          "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]"
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]"
      }
    },
    {
      labelPlacement: "outside-left",
      size: "sm",
      class: {
        label: "group-data-[has-helper=true]:pt-2"
      }
    },
    {
      labelPlacement: "outside-left",
      size: "md",
      class: {
        label: "group-data-[has-helper=true]:pt-3"
      }
    },
    {
      labelPlacement: "outside-left",
      size: "lg",
      class: {
        label: "group-data-[has-helper=true]:pt-4"
      }
    },
    {
      labelPlacement: ["outside", "outside-left"],
      isMultiline: true,
      class: {
        inputWrapper: "py-2"
      }
    },
    {
      labelPlacement: "outside",
      isMultiline: true,
      class: {
        label: "pb-1.5"
      }
    },
    {
      labelPlacement: "inside",
      isMultiline: true,
      class: {
        label: "pb-0.5",
        input: "pt-0"
      }
    },
    {
      isMultiline: true,
      disableAnimation: false,
      class: {
        input: "transition-height !duration-100 motion-reduce:transition-none"
      }
    },
    {
      labelPlacement: ["inside", "outside"],
      class: {
        label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"]
      }
    },
    {
      isMultiline: true,
      radius: "full",
      class: {
        inputWrapper: "data-[has-multiple-rows=true]:rounded-large"
      }
    }
  ]
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs + 1 modules
var chunk_BSXPKUBX = __webpack_require__(4480);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(1145);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-CAFRINWI.mjs
var chunk_CAFRINWI = __webpack_require__(2727);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(7241);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(3522);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var _react_aria_utils_dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-aria/textfield/dist/import.mjs
var textfield_dist_import = __webpack_require__(8543);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/input/dist/chunk-LY2CD73K.mjs
"use client";

// src/use-input.ts










function useInput(originalProps) {
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, input.variantKeys);
  const {
    ref,
    as,
    label,
    baseRef,
    wrapperRef,
    description,
    errorMessage,
    className,
    classNames,
    autoFocus,
    startContent,
    endContent,
    onClear,
    onChange,
    validationState,
    innerWrapperRef: innerWrapperRefProp,
    onValueChange = () => {
    },
    ...otherProps
  } = props;
  const handleValueChange = (0,react_.useCallback)(
    (value) => {
      onValueChange(value != null ? value : "");
    },
    [onValueChange]
  );
  const [inputValue, setInputValue] = (0,utils_dist_import/* useControlledState */.zk)(
    props.value,
    props.defaultValue,
    handleValueChange
  );
  const [isFocusWithin, setFocusWithin] = (0,react_.useState)(false);
  const Component = as || "div";
  const isFilled = !!inputValue;
  const isFilledWithin = isFilled || isFocusWithin;
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className, isFilled ? "is-filled" : "");
  const isMultiline = originalProps.isMultiline;
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const baseDomRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(baseRef);
  const inputWrapperRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(wrapperRef);
  const innerWrapperRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(innerWrapperRefProp);
  const handleClear = (0,react_.useCallback)(() => {
    setInputValue("");
    if (domRef.current) {
      domRef.current.value = "";
      domRef.current.focus();
    }
    onClear == null ? void 0 : onClear();
  }, [domRef, setInputValue, onClear]);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = (0,textfield_dist_import/* useTextField */.E)(
    {
      ...originalProps,
      "aria-label": (0,chunk_CAFRINWI/* safeAriaLabel */.x)(
        originalProps == null ? void 0 : originalProps["aria-label"],
        originalProps == null ? void 0 : originalProps.label,
        originalProps == null ? void 0 : originalProps.placeholder
      ),
      inputElementType: isMultiline ? "textarea" : "input",
      onChange: setInputValue
    },
    domRef
  );
  const { isFocusVisible, isFocused, focusProps } = (0,dist_import/* useFocusRing */.Fx)({
    autoFocus,
    isTextInput: true
  });
  const { isHovered, hoverProps } = (0,interactions_dist_import/* useHover */.XI)({ isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled) });
  const { focusProps: clearFocusProps, isFocusVisible: isClearButtonFocusVisible } = (0,dist_import/* useFocusRing */.Fx)();
  const { focusWithinProps } = (0,interactions_dist_import/* useFocusWithin */.L_)({
    onFocusWithinChange: setFocusWithin
  });
  const { pressProps: clearPressProps } = (0,interactions_dist_import/* usePress */.r7)({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: handleClear
  });
  const isInvalid = validationState === "invalid" || originalProps.isInvalid;
  const labelPlacement = (0,react_.useMemo)(() => {
    var _a;
    if ((!originalProps.labelPlacement || originalProps.labelPlacement === "inside") && !label) {
      return "outside";
    }
    return (_a = originalProps.labelPlacement) != null ? _a : "inside";
  }, [originalProps.labelPlacement, label]);
  const isClearable = !!onClear || originalProps.isClearable;
  const hasElements = !!label || !!description || !!errorMessage;
  const hasPlaceholder = !!props.placeholder;
  const hasLabel = !!label;
  const hasHelper = !!description || !!errorMessage;
  const shouldLabelBeOutside = labelPlacement === "outside" || labelPlacement === "outside-left";
  const shouldLabelBeInside = labelPlacement === "inside";
  const isPlaceholderShown = domRef.current ? (!domRef.current.value || domRef.current.value === "" || !inputValue || inputValue === "") && hasPlaceholder : false;
  const isOutsideLeft = labelPlacement === "outside-left";
  const hasStartContent = !!startContent;
  const isLabelOutside = shouldLabelBeOutside ? labelPlacement === "outside-left" || hasPlaceholder || labelPlacement === "outside" && hasStartContent : false;
  const isLabelOutsideAsPlaceholder = labelPlacement === "outside" && !hasPlaceholder && !hasStartContent;
  const slots = (0,react_.useMemo)(
    () => input({
      ...variantProps,
      isInvalid,
      isClearable
    }),
    [...Object.values(variantProps), isInvalid, isClearable, hasStartContent]
  );
  const getBaseProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ref: baseDomRef,
        className: slots.base({ class: baseStyles }),
        "data-slot": "base",
        "data-filled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(
          isFilled || hasPlaceholder || hasStartContent || isPlaceholderShown
        ),
        "data-filled-within": (0,chunk_MCFSCOSB/* dataAttr */.PB)(
          isFilledWithin || hasPlaceholder || hasStartContent || isPlaceholderShown
        ),
        "data-focus-within": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusWithin),
        "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
        "data-readonly": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps.isReadOnly),
        "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
        "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isHovered),
        "data-required": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps.isRequired),
        "data-invalid": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isInvalid),
        "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps.isDisabled),
        "data-has-elements": (0,chunk_MCFSCOSB/* dataAttr */.PB)(hasElements),
        "data-has-helper": (0,chunk_MCFSCOSB/* dataAttr */.PB)(hasHelper),
        "data-has-label": (0,chunk_MCFSCOSB/* dataAttr */.PB)(hasLabel),
        "data-has-value": (0,chunk_MCFSCOSB/* dataAttr */.PB)(!isPlaceholderShown),
        ...focusWithinProps,
        ...props2
      };
    },
    [
      slots,
      baseStyles,
      isFilled,
      isFocused,
      isHovered,
      isInvalid,
      hasHelper,
      hasLabel,
      hasElements,
      isPlaceholderShown,
      hasStartContent,
      isFocusWithin,
      isFocusVisible,
      isFilledWithin,
      hasPlaceholder,
      focusWithinProps,
      originalProps.isReadOnly,
      originalProps.isRequired,
      originalProps.isDisabled
    ]
  );
  const getLabelProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        "data-slot": "label",
        className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
        ...labelProps,
        ...props2
      };
    },
    [slots, labelProps, classNames == null ? void 0 : classNames.label]
  );
  const getInputProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ref: domRef,
        "data-slot": "input",
        "data-filled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFilled),
        "data-filled-within": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFilledWithin),
        "data-has-start-content": (0,chunk_MCFSCOSB/* dataAttr */.PB)(hasStartContent),
        "data-has-end-content": (0,chunk_MCFSCOSB/* dataAttr */.PB)(!!endContent),
        className: slots.input({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.input, !!inputValue ? "is-filled" : "") }),
        ...(0,_react_aria_utils_dist_import/* mergeProps */.dG)(
          focusProps,
          inputProps,
          (0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
            enabled: true,
            labelable: true,
            omitEventNames: new Set(Object.keys(inputProps))
          }),
          props2
        ),
        required: originalProps.isRequired,
        "aria-readonly": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps.isReadOnly),
        "aria-required": (0,chunk_MCFSCOSB/* dataAttr */.PB)(originalProps.isRequired),
        onChange: (0,_react_aria_utils_dist_import/* chain */.tS)(inputProps.onChange, onChange)
      };
    },
    [
      slots,
      inputValue,
      focusProps,
      inputProps,
      otherProps,
      isFilled,
      isFilledWithin,
      hasStartContent,
      endContent,
      classNames == null ? void 0 : classNames.input,
      originalProps.isReadOnly,
      originalProps.isRequired,
      onChange
    ]
  );
  const getInputWrapperProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ref: inputWrapperRef,
        "data-slot": "input-wrapper",
        "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isHovered),
        "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
        "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
        className: slots.inputWrapper({
          class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.inputWrapper, !!inputValue ? "is-filled" : "")
        }),
        ...(0,_react_aria_utils_dist_import/* mergeProps */.dG)(props2, hoverProps),
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        style: {
          cursor: "text",
          ...props2.style
        }
      };
    },
    [slots, isHovered, isFocusVisible, isFocused, inputValue, classNames == null ? void 0 : classNames.inputWrapper]
  );
  const getInnerWrapperProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ref: innerWrapperRef,
        "data-slot": "inner-wrapper",
        onClick: (e) => {
          if (domRef.current && e.currentTarget === e.target) {
            domRef.current.focus();
          }
        },
        className: slots.innerWrapper({
          class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.innerWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.innerWrapper]
  );
  const getMainWrapperProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "main-wrapper",
        className: slots.mainWrapper({
          class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.mainWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.mainWrapper]
  );
  const getHelperWrapperProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        "data-slot": "helper-wrapper",
        className: slots.helperWrapper({
          class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.helperWrapper, props2 == null ? void 0 : props2.className)
        })
      };
    },
    [slots, classNames == null ? void 0 : classNames.helperWrapper]
  );
  const getDescriptionProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...descriptionProps,
        "data-slot": "description",
        className: slots.description({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.description, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, classNames == null ? void 0 : classNames.description]
  );
  const getErrorMessageProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        ...errorMessageProps,
        "data-slot": "error-message",
        className: slots.errorMessage({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.errorMessage, props2 == null ? void 0 : props2.className) })
      };
    },
    [slots, errorMessageProps, classNames == null ? void 0 : classNames.errorMessage]
  );
  const getClearButtonProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        ...props2,
        role: "button",
        tabIndex: 0,
        "data-slot": "clear-button",
        "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isClearButtonFocusVisible),
        className: slots.clearButton({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.clearButton, props2 == null ? void 0 : props2.className) }),
        ...(0,_react_aria_utils_dist_import/* mergeProps */.dG)(clearPressProps, clearFocusProps)
      };
    },
    [slots, isClearButtonFocusVisible, clearPressProps, clearFocusProps, classNames == null ? void 0 : classNames.clearButton]
  );
  return {
    Component,
    classNames,
    domRef,
    label,
    description,
    startContent,
    endContent,
    labelPlacement,
    isClearable,
    isInvalid,
    hasHelper,
    hasStartContent,
    isLabelOutside,
    isOutsideLeft,
    isLabelOutsideAsPlaceholder,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    hasPlaceholder,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getMainWrapperProps,
    getInputWrapperProps,
    getInnerWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps
  };
}




/***/ }),

/***/ 2727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ safeText),
/* harmony export */   x: () => (/* binding */ safeAriaLabel)
/* harmony export */ });
// src/text.ts
var safeText = (text) => {
  if ((text == null ? void 0 : text.length) <= 4)
    return text;
  return text == null ? void 0 : text.slice(0, 3);
};
var safeAriaLabel = (...texts) => {
  let ariaLabel = " ";
  for (const text of texts) {
    if (typeof text === "string" && text.length > 0) {
      ariaLabel = text;
      break;
    }
  }
  return ariaLabel;
};




/***/ }),

/***/ 8726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ $e93e671b31057976$export$b8473d3665f3a75a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5459);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);




/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
    let { validationBehavior: validationBehavior, focus: focus } = props;
    // This is a useLayoutEffect so that it runs before the useEffect in useFormValidationState, which commits the validation change.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current)) {
            let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            ref.current.setCustomValidity(errorMessage);
            // Prevent default tooltip for validation message.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=605277
            if (!ref.current.hasAttribute("title")) ref.current.title = "";
            if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
        }
    });
    let onReset = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)(()=>{
        state.resetValidation();
    });
    let onInvalid = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        var _ref_current;
        // Only commit validation if we are not already displaying one.
        // This avoids clearing server errors that the user didn't actually fix.
        if (!state.displayValidation.isInvalid) state.commitValidation();
        // Auto focus the first invalid input in a form, unless the error already had its default prevented.
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
            var _ref_current1;
            if (focus) focus();
            else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
            // Always show focus ring.
            (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .setInteractionModality */ ._w)("keyboard");
        }
        // Prevent default browser error UI from appearing.
        e.preventDefault();
    });
    let onChange = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)(()=>{
        state.commitValidation();
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let input = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!input) return;
        let form = input.form;
        input.addEventListener("invalid", onInvalid);
        input.addEventListener("change", onChange);
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
        return ()=>{
            input.removeEventListener("invalid", onInvalid);
            input.removeEventListener("change", onChange);
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
        };
    }, [
        ref,
        onInvalid,
        onChange,
        onReset,
        validationBehavior
    ]);
}
function $e93e671b31057976$var$getValidity(input) {
    // The native ValidityState object is live, meaning each property is a getter that returns the current state.
    // We need to create a snapshot of the validity state at the time this function is called to avoid unpredictable React renders.
    let validity = input.validity;
    return {
        badInput: validity.badInput,
        customError: validity.customError,
        patternMismatch: validity.patternMismatch,
        rangeOverflow: validity.rangeOverflow,
        rangeUnderflow: validity.rangeUnderflow,
        stepMismatch: validity.stepMismatch,
        tooLong: validity.tooLong,
        tooShort: validity.tooShort,
        typeMismatch: validity.typeMismatch,
        valueMissing: validity.valueMissing,
        valid: validity.valid
    };
}
function $e93e671b31057976$var$getNativeValidity(input) {
    return {
        isInvalid: !input.validity.valid,
        validationDetails: $e93e671b31057976$var$getValidity(input),
        validationErrors: input.validationMessage ? [
            input.validationMessage
        ] : []
    };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
    for(let i = 0; i < form.elements.length; i++){
        let element = form.elements[i];
        if (!element.validity.valid) return element;
    }
    return null;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 5995:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ $d191a55c9702f145$export$8467354a121f1b9f),
/* harmony export */   U: () => (/* binding */ $2baaea4c71418dea$export$294aa081a6c6f55d)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5243);


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
 * Copyright 2021 Adobe. All rights reserved.
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
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id, label: label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType: labelElementType = "label" } = props;
    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Me)(id);
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useId */ .Me)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === "label" ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
    let fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useLabels */ .bE)({
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description, errorMessage: errorMessage, isInvalid: isInvalid, validationState: validationState } = props;
    let { labelProps: labelProps, fieldProps: fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useSlotId */ .mp)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    let errorMessageId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .useSlotId */ .mp)([
        Boolean(description),
        Boolean(errorMessage),
        isInvalid,
        validationState
    ]);
    fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .mergeProps */ .dG)(fieldProps, {
        "aria-describedby": [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props["aria-describedby"]
        ].filter(Boolean).join(" ") || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ 8543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* unused harmony export useFormattedTextField */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5243);
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3522);
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5995);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4997);
/* harmony import */ var _react_aria_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8726);
/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1562);








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






function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = "input", isDisabled: isDisabled = false, isRequired: isRequired = false, isReadOnly: isReadOnly = false, type: type = "text", validationBehavior: validationBehavior = "aria" } = props;
    let [value, setValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__/* .useControlledState */ .zk)(props.value, props.defaultValue || "", props.onChange);
    let { focusableProps: focusableProps } = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_2__/* .useFocusable */ .kc)(props, ref);
    let validationState = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__/* .useFormValidationState */ .Q3)({
        ...props,
        value: value
    });
    let { isInvalid: isInvalid, validationErrors: validationErrors, validationDetails: validationDetails } = validationState.displayValidation;
    let { labelProps: labelProps, fieldProps: fieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_4__/* .useField */ .U)({
        ...props,
        isInvalid: isInvalid,
        errorMessage: props.errorMessage || validationErrors
    });
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .filterDOMProps */ .zL)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .useFormReset */ .y$)(ref, value, setValue);
    (0, _react_aria_form__WEBPACK_IMPORTED_MODULE_6__/* .useFormValidation */ .Q)(props, validationState, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // This works around a React/Chrome bug that prevents textarea elements from validating when controlled.
        // We prevent React from updating defaultValue (i.e. children) of textarea when `value` changes,
        // which causes Chrome to skip validation. Only updating `value` is ok in our case since our
        // textareas are always controlled. React is planning on removing this synchronization in a
        // future major version.
        // https://github.com/facebook/react/issues/19474
        // https://github.com/facebook/react/issues/11896
        if (ref.current instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .getOwnerWindow */ .kR)(ref.current).HTMLTextAreaElement) {
            let input = ref.current;
            Object.defineProperty(input, "defaultValue", {
                get: ()=>input.value,
                set: ()=>{},
                configurable: true
            });
        }
    }, [
        ref
    ]);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__/* .mergeProps */ .dG)(domProps, inputElementType === "input" && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            required: isRequired && validationBehavior === "native",
            "aria-required": isRequired && validationBehavior === "aria" || undefined,
            "aria-invalid": isInvalid || undefined,
            "aria-errormessage": props["aria-errormessage"],
            "aria-activedescendant": props["aria-activedescendant"],
            "aria-autocomplete": props["aria-autocomplete"],
            "aria-haspopup": props["aria-haspopup"],
            value: value,
            onChange: (e)=>setValue(e.target.value),
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        isInvalid: isInvalid,
        validationErrors: validationErrors,
        validationDetails: validationDetails
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
    return typeof window !== "undefined" && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === "function";
}
function $d841c8010a73d545$export$4f384c9210e583c3(props, state, inputRef) {
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    let onBeforeInputFallback = (0, $kOq5K$useEffectEvent)((e)=>{
        let input = inputRef.current;
        // Compute the next value of the input if the event is allowed to proceed.
        // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
        let nextValue;
        switch(e.inputType){
            case "historyUndo":
            case "historyRedo":
                // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                // because presumably the input would have already been validated previously.
                return;
            case "deleteContent":
            case "deleteByCut":
            case "deleteByDrag":
                nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentForward":
                // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                // If we support additional locales in the future, this may need to change.
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentBackward":
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteSoftLineBackward":
            case "deleteHardLineBackward":
                nextValue = input.value.slice(input.selectionStart);
                break;
            default:
                if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                break;
        }
        // If we did not compute a value, or the new value is invalid, prevent the event
        // so that the browser does not update the input text, move the selection, or add to
        // the undo/redo stack.
        if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    });
    (0, $kOq5K$useEffect)(()=>{
        if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        input.addEventListener("beforeinput", onBeforeInputFallback, false);
        return ()=>{
            input.removeEventListener("beforeinput", onBeforeInputFallback, false);
        };
    }, [
        inputRef,
        onBeforeInputFallback
    ]);
    let onBeforeInput = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps, inputProps: textFieldProps, descriptionProps: descriptionProps, errorMessageProps: errorMessageProps, ...validation } = (0, $2d73ec29415bd339$export$712718f7aec83d5)(props, inputRef);
    let compositionStartState = (0, $kOq5K$useRef)(null);
    return {
        inputProps: (0, $kOq5K$mergeProps)(textFieldProps, {
            onBeforeInput: onBeforeInput,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value, selectionStart: selectionStart, selectionEnd: selectionEnd } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps,
        ...validation
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 1562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PS: () => (/* binding */ $e5be200c675c3b3a$export$dad6ae84456c676a),
/* harmony export */   Q3: () => (/* binding */ $e5be200c675c3b3a$export$fc1a364ae1f3ff10),
/* harmony export */   W0: () => (/* binding */ $e5be200c675c3b3a$export$75ee7c75d68f5b0e),
/* harmony export */   tL: () => (/* binding */ $e5be200c675c3b3a$export$a763b9476acd3eb)
/* harmony export */ });
/* unused harmony exports FormValidationContext, VALID_VALIDITY_STATE */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
    ...$e5be200c675c3b3a$export$aca958c65c314e6c,
    customError: true,
    valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
    isInvalid: false,
    validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
    validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
    // Private prop for parent components to pass state to children.
    if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
        let { realtimeValidation: realtimeValidation, displayValidation: displayValidation, updateValidation: updateValidation, resetValidation: resetValidation, commitValidation: commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
        return {
            realtimeValidation: realtimeValidation,
            displayValidation: displayValidation,
            updateValidation: updateValidation,
            resetValidation: resetValidation,
            commitValidation: commitValidation
        };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
    let { isInvalid: isInvalid, validationState: validationState, name: name, value: value, builtinValidation: builtinValidation, validate: validate, validationBehavior: validationBehavior = "aria" } = props;
    // backward compatibility.
    if (validationState) isInvalid || (isInvalid = validationState === "invalid");
    // If the isInvalid prop is true, update validation result in realtime (controlled).
    let controlledError = isInvalid ? {
        isInvalid: true,
        validationErrors: [],
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
    // Perform custom client side validation.
    let clientError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult($e5be200c675c3b3a$var$runValidate(validate, value)), [
        validate,
        value
    ]);
    if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = null;
    // Get relevant server errors from the form.
    let serverErrors = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e5be200c675c3b3a$export$571b5131b7e65c11);
    let serverErrorMessages = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (name) return Array.isArray(name) ? name.flatMap((name)=>$e5be200c675c3b3a$var$asArray(serverErrors[name])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
        return [];
    }, [
        serverErrors,
        name
    ]);
    // Show server errors when the form gets a new value, and clear when the user changes the value.
    let [lastServerErrors, setLastServerErrors] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(serverErrors);
    let [isServerErrorCleared, setServerErrorCleared] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    if (serverErrors !== lastServerErrors) {
        setLastServerErrors(serverErrors);
        setServerErrorCleared(false);
    }
    let serverError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
        isServerErrorCleared,
        serverErrorMessages
    ]);
    // Track the next validation state in a ref until commitValidation is called.
    let nextValidation = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let [currentValidity, setCurrentValidity] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let lastError = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)($e5be200c675c3b3a$export$dad6ae84456c676a);
    let commitValidation = ()=>{
        if (!commitQueued) return;
        setCommitQueued(false);
        let error = clientError || builtinValidation || nextValidation.current;
        if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
            lastError.current = error;
            setCurrentValidity(error);
        }
    };
    let [commitQueued, setCommitQueued] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(commitValidation);
    // realtimeValidation is used to update the native input element's state based on custom validation logic.
    // displayValidation is the currently displayed validation state that the user sees (e.g. on input change/form submit).
    // With validationBehavior="aria", all errors are displayed in realtime rather than on submit.
    let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
    let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
    return {
        realtimeValidation: realtimeValidation,
        displayValidation: displayValidation,
        updateValidation (value) {
            // If validationBehavior is 'aria', update in realtime. Otherwise, store in a ref until commit.
            if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value)) setCurrentValidity(value);
            else nextValidation.current = value;
        },
        resetValidation () {
            // Update the currently displayed validation state to valid on form reset,
            // even if the native validity says it isn't. It'll show again on the next form submit.
            let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
            if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
                lastError.current = error;
                setCurrentValidity(error);
            }
            // Do not commit validation after the next render. This avoids a condition where
            // useSelect calls commitValidation inside an onReset handler.
            if (validationBehavior === "native") setCommitQueued(false);
            setServerErrorCleared(true);
        },
        commitValidation () {
            // Commit validation state so the user sees it on blur/change/submit. Also clear any server errors.
            // Wait until after the next render to commit so that the latest value has been validated.
            if (validationBehavior === "native") setCommitQueued(true);
            setServerErrorCleared(true);
        }
    };
}
function $e5be200c675c3b3a$var$asArray(v) {
    if (!v) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
    if (typeof validate === "function") {
        let e = validate(value);
        if (e && typeof e !== "boolean") return $e5be200c675c3b3a$var$asArray(e);
    }
    return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
    return errors.length ? {
        isInvalid: true,
        validationErrors: errors,
        validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
    } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
    if (a === b) return true;
    return a && b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a, i)=>a === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v])=>b.validationDetails[k] === v);
}
function $e5be200c675c3b3a$export$75ee7c75d68f5b0e(...results) {
    let errors = new Set();
    let isInvalid = false;
    let validationDetails = {
        ...$e5be200c675c3b3a$export$aca958c65c314e6c
    };
    for (let v of results){
        var _validationDetails, _key;
        for (let e of v.validationErrors)errors.add(e);
        // Only these properties apply for checkboxes.
        isInvalid || (isInvalid = v.isInvalid);
        for(let key in validationDetails)(_validationDetails = validationDetails)[_key = key] || (_validationDetails[_key] = v.validationDetails[key]);
    }
    validationDetails.valid = !isInvalid;
    return {
        isInvalid: isInvalid,
        validationErrors: [
            ...errors
        ],
        validationDetails: validationDetails
    };
}





//# sourceMappingURL=module.js.map


/***/ })

};
;