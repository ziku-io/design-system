import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { ArrowsOutCardinalIcon as ee, CaretDownIcon as te, CaretDownIcon as ne, CaretLeftIcon as re, CaretLeftIcon as ie, CaretRightIcon as ae, CaretRightIcon as oe, CaretRightIcon as b, CaretUpDownIcon as se, CaretUpIcon as ce, CaretUpIcon as le, CheckCircleIcon as ue, CheckIcon as x, CircleIcon as S, ClockIcon as de, DotsThreeIcon as fe, DotsThreeIcon as C, DotsThreeIcon as w, DownloadSimpleIcon as pe, EnvelopeSimpleIcon as me, EyeIcon as he, FunnelIcon as ge, FunnelSimpleIcon as _e, InfoIcon as ve, ListBulletsIcon as T, MagnifyingGlassIcon as ye, MagnifyingGlassIcon as be, PlusIcon as xe, ProhibitIcon as E, RowsIcon as Se, SidebarSimpleIcon as Ce, SignOutIcon as D, SortAscendingIcon as we, SpinnerIcon as O, SpinnerIcon as k, SquaresFourIcon as Te, StarIcon as Ee, TableIcon as De, TagIcon as Oe, TrashIcon as ke, UsersIcon as Ae, WarningIcon as je, XCircleIcon as Me, XIcon as Ne, XIcon as Pe } from "@phosphor-icons/react";
import { Controller as A, FormProvider as j, useForm as M, useFormContext as N, useFormState as Fe } from "react-hook-form";
import { Toaster as Ie, toast as Le } from "sonner";
import { zodResolver as Re } from "@hookform/resolvers/zod";
import { z as P } from "zod";
import { Command as F } from "cmdk";
import { columnFacetingFeature as ze, columnFilteringFeature as Be, columnGroupingFeature as Ve, columnVisibilityFeature as He, createExpandedRowModel as Ue, createFacetedRowModel as I, createFacetedUniqueValues as L, createFilteredRowModel as R, createGroupedRowModel as z, createPaginatedRowModel as We, createSortedRowModel as Ge, globalFilteringFeature as Ke, rowExpandingFeature as qe, rowPaginationFeature as Je, rowSortingFeature as Ye, tableFeatures as Xe, useTable as Ze } from "@tanstack/react-table";
//#region src/lib/utils.ts
function B(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var Qe = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		danger: "border-danger-border bg-danger-subtle text-danger-fg",
		warning: "border-warning-border bg-warning-subtle text-warning-fg",
		success: "border-success-border bg-success-subtle text-success-fg",
		info: "border-info-border bg-info-subtle text-info-fg",
		destructive: "border-danger-border bg-danger-subtle text-danger-fg"
	} },
	defaultVariants: { variant: "default" }
});
function V({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: B(Qe({ variant: t }), e),
		...n
	});
}
function $e({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: B("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function H({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: B("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/components/ui/avatar.tsx
function et({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: B("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function tt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: B("aspect-square size-full", e),
		...t
	});
}
function nt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: B("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: B("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: B("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function it({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: B("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var at = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		danger: "bg-danger text-danger-foreground [a&]:hover:bg-danger/90",
		warning: "bg-warning text-warning-foreground [a&]:hover:bg-warning/90",
		success: "bg-success text-success-foreground [a&]:hover:bg-success/90",
		info: "bg-info text-info-foreground [a&]:hover:bg-info/90",
		destructive: "bg-danger text-danger-foreground [a&]:hover:bg-danger/90",
		outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		link: "text-primary underline-offset-4 [a&]:hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function ot({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? g.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: B(at({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function st({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: B("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: B("inline-flex items-center gap-1.5", e),
		...t
	});
}
function ut({ asChild: e, className: t, ...n }) {
	let r = e ? g.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: B("transition-colors hover:text-foreground", t),
		...n
	});
}
function dt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: B("font-normal text-foreground", e),
		...t
	});
}
function ft({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: B("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(oe, {})
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: B("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(C, { className: "size-4" }), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var mt = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			danger: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			success: "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/40",
			warning: "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/40",
			destructive: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function W({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? g.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: B(mt({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/card.tsx
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		className: B("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", e),
		...t
	});
}
function gt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: B("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: B("leading-none font-semibold", e),
		...t
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
function yt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: B("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: B("px-6", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: B("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function St({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: B("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(x, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function Ct({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function wt({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Tt({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Et({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Ot({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(Tt, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(Dt, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: B("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(Pe, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: B("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function At({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: B("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(W, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: B("text-lg leading-none font-semibold", e),
		...t
	});
}
function Mt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Nt({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Pt({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Ft({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function It({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: B("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Lt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Rt({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg dark:data-[variant=destructive]:focus:bg-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function zt({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(x, { className: "size-4" }) })
		}), t]
	});
}
function Bt({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Vt({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(S, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function Ht({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: B("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: B("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Wt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Gt({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Kt({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: B("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(b, { className: "ml-auto size-4" })]
	});
}
function qt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: B("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Jt({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: B("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var Yt = j, Xt = e.createContext({}), Zt = ({ ...e }) => /* @__PURE__ */ a(Xt.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(A, { ...e })
}), Qt = () => {
	let t = e.useContext(Xt), n = e.useContext($t);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = N(), i = Fe({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, $t = e.createContext({});
function en({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a($t.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: B("grid gap-2", t),
			...n
		})
	});
}
function G({ className: e, ...t }) {
	let { error: n, formItemId: r } = Qt();
	return /* @__PURE__ */ a(Jt, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: B("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function tn({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = Qt();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function nn({ className: e, ...t }) {
	let { formDescriptionId: n } = Qt();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
function rn({ className: e, ...t }) {
	let { error: n, formMessageId: r } = Qt(), i = n ? String(n?.message ?? "") : t.children;
	return i ? /* @__PURE__ */ a("p", {
		"data-slot": "form-message",
		id: r,
		className: B("text-sm text-danger-fg", e),
		...t,
		children: i
	}) : null;
}
//#endregion
//#region src/components/ui/input.tsx
function K({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		className: B("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", e),
		...n
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function an({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: B("mx-auto flex w-full justify-center", e),
		...t
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: B("flex flex-row items-center gap-1", e),
		...t
	});
}
function sn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function cn({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: B(mt({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function ln({ className: e, ...t }) {
	return /* @__PURE__ */ o(cn, {
		"aria-label": "Go to previous page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(ie, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function un({ className: e, ...t }) {
	return /* @__PURE__ */ o(cn, {
		"aria-label": "Go to next page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(b, {})]
	});
}
function dn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: B("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(w, { className: "size-4" }), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function fn({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function pn({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function mn({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: B("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function hn({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: B("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: B("font-medium", e),
		...t
	});
}
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: B("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function yn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: B("grid gap-3", e),
		...t
	});
}
function bn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Item, {
		"data-slot": "radio-group-item",
		className: B("aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t,
		children: /* @__PURE__ */ a(p.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(S, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function xn({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function Sn({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function Cn({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function wn({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: B("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(ne, { className: "size-4 opacity-50" })
		})]
	});
}
function Tn({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: B("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(kn, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: B("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(An, {})
		]
	}) });
}
function En({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: B("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function Dn({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(m.Item, {
		"data-slot": "select-item",
		className: B("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(m.ItemIndicator, { children: /* @__PURE__ */ a(x, { className: "size-4" }) })
		}), /* @__PURE__ */ a(m.ItemText, { children: t })]
	});
}
function On({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: B("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(le, { className: "size-4" })
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(ne, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function jn({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: B("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Mn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Nn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Pn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Fn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function In({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Ln({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Fn, { children: [/* @__PURE__ */ a(In, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: B("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [t, r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ a(Pe, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: B("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function zn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: B("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Bn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: B("font-semibold text-foreground", e),
		...t
	});
}
function Vn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Hn = 768;
function Un() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Hn);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Hn), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Wn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: B("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Gn({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Kn({ ...e }) {
	return /* @__PURE__ */ a(Gn, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function qn({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Jn({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ o(y.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: B("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-tooltip px-3 py-1.5 text-xs text-balance text-tooltip-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ a(y.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-tooltip fill-tooltip" })]
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var Yn = "sidebar_state", Xn = 604800, Zn = "16rem", Qn = "18rem", $n = "3rem", er = "b", tr = e.createContext(null);
function nr() {
	let t = e.useContext(tr);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function rr({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Un(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${Yn}=${t}; path=/; max-age=${Xn}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === er && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [g]);
	let _ = m ? "expanded" : "collapsed", v = e.useMemo(() => ({
		state: _,
		open: m,
		setOpen: h,
		isMobile: l,
		openMobile: u,
		setOpenMobile: d,
		toggleSidebar: g
	}), [
		_,
		m,
		h,
		l,
		u,
		d,
		g
	]);
	return /* @__PURE__ */ a(tr.Provider, {
		value: v,
		children: /* @__PURE__ */ a(Gn, {
			delayDuration: 0,
			children: /* @__PURE__ */ a("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": Zn,
					"--sidebar-width-icon": $n,
					...o
				},
				className: B("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
				...c,
				children: s
			})
		})
	});
}
function ir({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, ...s }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = nr();
	return n === "none" ? /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: B("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...s,
		children: i
	}) : c ? /* @__PURE__ */ a(Mn, {
		open: u,
		onOpenChange: d,
		...s,
		children: /* @__PURE__ */ o(Ln, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": Qn },
			side: e,
			children: [/* @__PURE__ */ o(Rn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Bn, { children: "Sidebar" }), /* @__PURE__ */ a(Vn, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ a("div", {
				className: "flex h-full w-full flex-col",
				children: i
			})]
		})
	}) : /* @__PURE__ */ o("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": l,
		"data-collapsible": l === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: B("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: B("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
			...s,
			children: /* @__PURE__ */ a("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
				children: i
			})
		})]
	});
}
function ar({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = nr();
	return /* @__PURE__ */ o(W, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: B("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(Ce, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function or({ className: e, ...t }) {
	let { toggleSidebar: n } = nr();
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: n,
		title: "Toggle Sidebar",
		className: B("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: B("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ a(K, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: B("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function dr({ className: e, ...t }) {
	return /* @__PURE__ */ a(jn, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: B("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function fr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: B("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: B("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function mr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: B("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function hr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: B("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function gr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: B("w-full text-sm", e),
		...t
	});
}
function _r({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: B("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function vr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: B("group/menu-item relative", e),
		...t
	});
}
var yr = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function br({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = nr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: B(yr({
			variant: n,
			size: r
		}), s),
		...c
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(Kn, { children: [/* @__PURE__ */ a(qn, {
		asChild: !0,
		children: f
	}), /* @__PURE__ */ a(Jn, {
		side: "right",
		align: "center",
		hidden: d !== "collapsed" || u,
		...i
	})] })) : f;
}
function xr({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: B("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: B("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Cr({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: B("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a(Wn, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Wn, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: B("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Tr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: B("group/menu-sub-item relative", e),
		...t
	});
}
function Er({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? g.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: B("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/hooks/use-theme.ts
var Dr = () => typeof document < "u" && document.documentElement.classList.contains("light") ? "light" : "dark";
function Or() {
	let [t, n] = e.useState(Dr);
	return e.useEffect(() => {
		n(Dr());
		let e = new MutationObserver(() => n(Dr()));
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []), t;
}
//#endregion
//#region src/components/ui/sonner.tsx
var kr = ({ theme: e, ...t }) => {
	let n = Or();
	return /* @__PURE__ */ a(Ie, {
		theme: e ?? n,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ a(ue, { className: "size-4" }),
			info: /* @__PURE__ */ a(ve, { className: "size-4" }),
			warning: /* @__PURE__ */ a(je, { className: "size-4" }),
			error: /* @__PURE__ */ a(Me, { className: "size-4" }),
			loading: /* @__PURE__ */ a(k, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		...t
	});
};
//#endregion
//#region src/components/ui/switch.tsx
function Ar({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(_.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: B("peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", e),
		...n,
		children: /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "switch-thumb",
			className: B("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ a("table", {
			"data-slot": "table",
			className: B("w-full caption-bottom text-sm", e),
			...t
		})
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: B("[&_tr]:border-b", e),
		...t
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: B("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: B("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function Fr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: B("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function Ir({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: B("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: B("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: B("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function zr({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: B("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Br = t("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Vr({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: B(Br({ variant: t }), e),
		...n
	});
}
function Hr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: B("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Ur({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: B("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		className: B("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Gr({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: B("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
		...i,
		children: /* @__PURE__ */ o("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: [
				e && /* @__PURE__ */ a("div", {
					className: "flex justify-center",
					children: e
				}),
				r,
				t && /* @__PURE__ */ a("p", {
					className: "text-balance px-6 text-center text-xs text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4",
					children: t
				})
			]
		})
	});
}
//#endregion
//#region src/lib/link.tsx
var Kr = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function qr({ component: e, children: t }) {
	return /* @__PURE__ */ a(Kr.Provider, {
		value: e,
		children: t
	});
}
function q(t) {
	let n = e.useContext(Kr);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/lib/strings.tsx
var Jr = {
	common: {
		close: "Close",
		cancel: "Cancel",
		create: "Create",
		search: "Search",
		searchPlaceholder: "Search…",
		noResults: "No results.",
		all: "All",
		none: "None"
	},
	auth: {
		loginTitle: "Welcome back",
		loginDescription: "Sign in to your account",
		email: "Email",
		emailPlaceholder: "you@company.com",
		password: "Password",
		forgotPassword: "Forgot password?",
		signIn: "Sign in",
		orContinueWith: "or continue with",
		noAccount: "No account?",
		createOne: "Create one",
		registerTitle: "Create an account",
		registerDescription: "Get started in under a minute",
		name: "Name",
		namePlaceholder: "Ada Lovelace",
		passwordHint: "At least 8 characters",
		confirmPassword: "Confirm password",
		createAccount: "Create account",
		haveAccount: "Already have an account?",
		resetTitle: "Reset your password",
		resetDescription: "Enter your email and we'll send you a link",
		sendResetLink: "Send reset link",
		backToSignIn: "Back to sign in",
		sentTitle: "Check your inbox",
		sentDescription: (e) => `If an account exists for ${e}, we sent a reset link.`,
		thatEmail: "that email",
		invalidEmail: "Enter a valid email",
		passwordRequired: "Password is required",
		nameTooShort: "Enter your name",
		passwordTooShort: "At least 8 characters",
		passwordsDoNotMatch: "Passwords do not match"
	},
	shell: { signOut: "Sign out" },
	dataTable: {
		allView: "All",
		newView: "New view",
		createView: "Create",
		saveView: "Save the current filters as a new view",
		deleteView: "Delete view",
		viewSettings: "View settings",
		viewName: "View name",
		changeIcon: "Change the icon",
		back: "Back",
		layout: "Layout",
		table: "Table",
		board: "Board",
		visibleColumns: "Visible columns",
		hidden: (e) => `${e} hidden`,
		filters: "Filters",
		filter: "Filter",
		addFilter: "Filter",
		removeFilter: "Remove filter",
		clearFilters: "Clear",
		clearSelection: "Clear selection",
		is: "is",
		contains: "contains",
		findColumn: "Find a column…",
		typeAValue: "Type a value…",
		sorting: "Sorting",
		sort: "Sort",
		ascending: "Ascending",
		descending: "Descending",
		addSort: "Add sort",
		removeSort: "Remove",
		removeSorting: "Remove sorting",
		group: "Group",
		groupBy: "Group by",
		groupedBy: (e) => `Grouped by ${e}`,
		moveCard: "Move to",
		exportCsv: "Export CSV",
		shareView: "Share with everyone",
		sharedBy: (e) => `Shared by ${e}`,
		noGrouping: "No grouping",
		loadingMore: "Loading more…",
		rowCount: (e) => `${e} row(s)`,
		pageOf: (e, t) => `Page ${e} of ${t}`,
		previousPage: "Previous",
		nextPage: "Next"
	},
	search: {
		placeholder: "Search…",
		empty: "No results found."
	},
	modal: { close: "Close" }
};
function Yr(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function Xr(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) Yr(n, e, t, r);
	return n;
}
var Zr = e.createContext(Jr);
function Qr({ strings: t, children: n }) {
	let r = e.useContext(Zr), i = e.useMemo(() => Xr(r, t), [r, t]);
	return /* @__PURE__ */ a(Zr.Provider, {
		value: i,
		children: n
	});
}
function J() {
	return e.useContext(Zr);
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var $r = (e) => P.object({
	email: P.email(e.invalidEmail),
	password: P.string().min(1, e.passwordRequired)
});
function ei({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = J().auth, f = e.useMemo(() => $r(d), [d]), p = M({
		resolver: Re(f),
		defaultValues: {
			email: "",
			password: ""
		}
	}), m = p.formState.isSubmitting;
	return /* @__PURE__ */ o(ht, { children: [/* @__PURE__ */ o(gt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(_t, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(vt, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(bt, { children: /* @__PURE__ */ a(Yt, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(V, {
					variant: "danger",
					children: /* @__PURE__ */ a(H, { children: n })
				}),
				/* @__PURE__ */ a(Zt, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(en, { children: [
						/* @__PURE__ */ a(G, { children: d.email }),
						/* @__PURE__ */ a(tn, { children: /* @__PURE__ */ a(K, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(rn, {})
					] })
				}),
				/* @__PURE__ */ a(Zt, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(en, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(G, { children: d.password }), l && /* @__PURE__ */ a(q, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(tn, { children: /* @__PURE__ */ a(K, {
							type: "password",
							autoComplete: "current-password",
							...e
						}) }),
						/* @__PURE__ */ a(rn, {})
					] })
				}),
				/* @__PURE__ */ o(W, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(O, { className: "animate-spin" }), d.signIn]
				}),
				u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: d.orContinueWith
					})
				}), /* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: u
				})] }),
				c && /* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						d.noAccount,
						" ",
						/* @__PURE__ */ a(q, {
							href: c,
							className: "text-link underline underline-offset-4",
							children: d.createOne
						})
					]
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/blocks/auth/register-form.tsx
var ti = (e) => P.object({
	name: P.string().min(2, e.nameTooShort),
	email: P.email(e.invalidEmail),
	password: P.string().min(8, e.passwordTooShort),
	confirmPassword: P.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function ni({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = J().auth, d = e.useMemo(() => ti(u), [u]), f = M({
		resolver: Re(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(Zt, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(en, { children: [
			/* @__PURE__ */ a(G, { children: t }),
			/* @__PURE__ */ a(tn, { children: /* @__PURE__ */ a(K, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(nn, { children: r }),
			/* @__PURE__ */ a(rn, {})
		] })
	});
	return /* @__PURE__ */ o(ht, { children: [/* @__PURE__ */ o(gt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(_t, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(vt, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(bt, { children: /* @__PURE__ */ a(Yt, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(V, {
					variant: "danger",
					children: /* @__PURE__ */ a(H, { children: n })
				}),
				m("name", u.name, {
					autoComplete: "name",
					placeholder: u.namePlaceholder
				}),
				m("email", u.email, {
					type: "email",
					autoComplete: "email",
					placeholder: u.emailPlaceholder
				}),
				m("password", u.password, {
					type: "password",
					autoComplete: "new-password"
				}, u.passwordHint),
				m("confirmPassword", u.confirmPassword, {
					type: "password",
					autoComplete: "new-password"
				}),
				/* @__PURE__ */ o(W, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(O, { className: "animate-spin" }), u.createAccount]
				}),
				l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: u.orContinueWith
					})
				}), /* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: l
				})] }),
				c && /* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						u.haveAccount,
						" ",
						/* @__PURE__ */ a(q, {
							href: c,
							className: "text-link underline underline-offset-4",
							children: u.signIn
						})
					]
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/blocks/auth/forgot-password-form.tsx
var ri = (e) => P.object({ email: P.email(e.invalidEmail) });
function ii({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = J().auth, c = e.useMemo(() => ri(s), [s]), l = M({
		resolver: Re(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(ht, { children: [/* @__PURE__ */ o(gt, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(me, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(_t, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(vt, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(bt, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(q, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(ht, { children: [/* @__PURE__ */ o(gt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(_t, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(vt, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(bt, { children: /* @__PURE__ */ a(Yt, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(V, {
					variant: "danger",
					children: /* @__PURE__ */ a(H, { children: n })
				}),
				/* @__PURE__ */ a(Zt, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(en, { children: [
						/* @__PURE__ */ a(G, { children: s.email }),
						/* @__PURE__ */ a(tn, { children: /* @__PURE__ */ a(K, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(rn, {})
					] })
				}),
				/* @__PURE__ */ o(W, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(O, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(q, {
						href: i,
						className: "text-link underline underline-offset-4",
						children: s.backToSignIn
					})
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/components/ui/command.tsx
function ai({ className: e, ...t }) {
	return /* @__PURE__ */ a(F, {
		"data-slot": "command",
		className: B("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function oi({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ o(Ct, {
		...s,
		children: [/* @__PURE__ */ o(kt, {
			className: "sr-only",
			children: [/* @__PURE__ */ a(jt, { children: e }), /* @__PURE__ */ a(Mt, { children: t })]
		}), /* @__PURE__ */ a(Ot, {
			className: B("overflow-hidden p-0", r),
			showCloseButton: i,
			children: /* @__PURE__ */ a(ai, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})
		})]
	});
}
function si({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(be, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(F.Input, {
			"data-slot": "command-input",
			className: B("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
			...t
		})]
	});
}
function ci({ className: e, ...t }) {
	return /* @__PURE__ */ a(F.List, {
		"data-slot": "command-list",
		className: B("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function li({ ...e }) {
	return /* @__PURE__ */ a(F.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function ui({ className: e, ...t }) {
	return /* @__PURE__ */ a(F.Group, {
		"data-slot": "command-group",
		className: B("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function di({ className: e, ...t }) {
	return /* @__PURE__ */ a(F.Separator, {
		"data-slot": "command-separator",
		className: B("-mx-1 h-px bg-border", e),
		...t
	});
}
function fi({ className: e, ...t }) {
	return /* @__PURE__ */ a(F.Item, {
		"data-slot": "command-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function pi({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function mi({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
	let u = J().search, [d, f] = e.useState(!1), p = n ?? d, m = r ?? f;
	return e.useEffect(() => {
		if (l) return;
		let e = (e) => {
			e.key === "k" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), m(!p));
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		l,
		p,
		m
	]), /* @__PURE__ */ o(oi, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(si, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(ci, { children: [/* @__PURE__ */ a(li, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(di, {}), /* @__PURE__ */ a(ui, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(fi, {
				value: `${e.label} ${e.keywords?.join(" ") ?? ""}`,
				onSelect: () => {
					e.onSelect?.(), m(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ a("span", { children: e.label }),
					e.shortcut && /* @__PURE__ */ a(pi, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function hi({ placeholder: e, shortcut: t = "⌘K", className: n, ...r }) {
	let i = J().search;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: B("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(ye, { className: "size-4 shrink-0" }),
			/* @__PURE__ */ a("span", {
				className: "flex-1 text-left",
				children: e ?? i.placeholder
			}),
			t && /* @__PURE__ */ a("kbd", {
				className: "pointer-events-none hidden h-5 items-center gap-1 rounded border border-border px-1.5 font-sans text-[10px] font-medium sm:inline-flex",
				children: t
			})
		]
	});
}
//#endregion
//#region src/blocks/data/csv.ts
var gi = (e) => e === "," ? ";" : ",", _i = /^[=+\-@\t\r]/;
function vi(e, t) {
	let n = _i.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function yi(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function bi(e, t, n = ".") {
	let r = gi(n), i = (e) => e.map((e) => vi(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => yi(t.value(e), n))))].join("\r\n");
}
function xi(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var Si = "—", Y = (e) => e == null || e === "" ? "" : String(e);
function Ci(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var X = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, wi = (e) => Array.isArray(e) ? e.map(Y) : [Y(e)], Ti = (e) => (t, n) => {
	if (!e.order) return Ci(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Ei = (e) => !!e.header;
function Z(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Di(e, t) {
	if (X(t)) return e.header;
	let n = wi(t).map((t) => Z(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Oi(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || X(e.value) ? [] : [[t, wi(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var ki = "ziku", Q = ki;
function Ai(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Q !== ki && Q !== e) throw Error(`Storage prefix is already "${Q}", cannot change it to "${e}"`);
	Q = e;
}
var ji = () => Q, Mi = (...e) => [Q, ...e].join("."), Ni = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Pi = (e) => Mi("views", e);
function Fi(e, t, n = Jr.dataTable.allView) {
	return [{
		id: "default",
		name: n,
		icon: "table",
		state: e
	}, ...t.map((t) => ({
		...t,
		state: {
			...e,
			...t.state
		}
	}))];
}
function Ii(e, t, n, r) {
	let i = Fi(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Pi(e)), n = t ? JSON.parse(t) : null;
		if (!n?.views?.length) return a;
		let r = n, o = [...i.map((e) => {
			let t = r.views.find((t) => t.id === e.id);
			return t ? {
				...e,
				state: t.state
			} : e;
		}), ...r.views.filter((e) => !i.some((t) => t.id === e.id))];
		return {
			views: o,
			activeId: o.some((e) => e.id === r.activeId) ? r.activeId : o[0].id
		};
	} catch {
		return a;
	}
}
var Li = 800, Ri = (e) => e.shared !== void 0;
function zi(t, n, r, i) {
	let a = J().dataTable.allView, [{ views: o, activeId: s }, c] = e.useState(() => Ii(r, t, n, a)), [l, u] = e.useState(!i), d = o.find((e) => e.id === s) ?? o[0], f = e.useRef(i);
	f.current = i, e.useEffect(() => {
		if (r && typeof localStorage < "u") {
			let e = o.filter((e) => !Ri(e));
			localStorage.setItem(Pi(r), JSON.stringify({
				views: e,
				activeId: s
			}));
		}
	}, [
		o,
		s,
		r
	]), e.useEffect(() => {
		let e = f.current;
		if (!e) return;
		let r = !0;
		return (async () => {
			let i = [];
			try {
				i = await e.list();
			} catch {
				r && u(!0);
				return;
			}
			if (!r) return;
			let a = new Set(Fi(t, n).map((e) => e.id)), s = o.filter((e) => !Ri(e) && !a.has(e.id)), l = [];
			for (let t of s) if (!i.some((e) => e.name === t.name)) try {
				l.push(await e.create({
					...t,
					shared: !1
				}));
			} catch {}
			if (!r) return;
			let d = /* @__PURE__ */ new Set([...s.map((e) => e.name)]);
			c((e) => ({
				views: [
					...e.views.filter((e) => Ri(e) || !d.has(e.name)),
					...i,
					...l
				],
				activeId: e.activeId
			})), u(!0);
		})(), () => {
			r = !1;
		};
	}, []);
	let p = e.useRef(/* @__PURE__ */ new Map()), m = e.useCallback((e, t) => {
		let n = f.current;
		n && (clearTimeout(p.current.get(e)), p.current.set(e, setTimeout(() => {
			p.current.delete(e), n.update(e, t).catch(() => {});
		}, Li)));
	}, []);
	e.useEffect(() => {
		let e = p.current;
		return () => {
			for (let t of e.values()) clearTimeout(t);
			e.clear();
		};
	}, []);
	let h = e.useCallback((e, t) => {
		c((n) => {
			let r = n.views.find((e) => e.id === n.activeId);
			return r && Ri(r) && m(r.id, t(e(r))), {
				...n,
				views: n.views.map((t) => t.id === n.activeId ? e(t) : t)
			};
		});
	}, [m]), g = e.useCallback((e) => h((t) => ({
		...t,
		state: {
			...t.state,
			...e
		}
	}), (e) => ({ state: e.state })), [h]);
	return {
		views: o,
		active: d,
		loaded: l,
		sharable: !!i,
		isPreset: d.id === "default" || n.some((e) => e.id === d.id),
		patch: g,
		select: (e) => c((t) => ({
			...t,
			activeId: e
		})),
		add: (e, t) => c((n) => {
			let r = n.views.find((e) => e.id === n.activeId) ?? n.views[0], i = {
				name: e,
				icon: Ni[n.views.length % Ni.length],
				state: { ...r.state }
			}, a = `v${n.views.length}-${e.replace(/\W+/g, "-").toLowerCase()}`, o = f.current;
			return o ? (o.create({
				...i,
				shared: !!t
			}).then((e) => c((t) => ({
				views: t.views.map((t) => t.id === a ? e : t),
				activeId: t.activeId === a ? e.id : t.activeId
			}))).catch(() => c((e) => ({
				views: e.views.filter((e) => e.id !== a),
				activeId: e.activeId === a ? e.views[0].id : e.activeId
			}))), {
				views: [...n.views, {
					...i,
					id: a,
					shared: !!t
				}],
				activeId: a
			}) : {
				views: [...n.views, {
					...i,
					id: a
				}],
				activeId: a
			};
		}),
		rename: (e) => h((t) => ({
			...t,
			name: e
		}), () => ({ name: e })),
		setIcon: (e) => h((t) => ({
			...t,
			icon: e
		}), () => ({ icon: e })),
		remove: () => c((e) => {
			let t = e.views.find((t) => t.id === e.activeId);
			t && Ri(t) && f.current?.remove(t.id).catch(() => {});
			let n = e.views.filter((t) => t.id !== e.activeId);
			return {
				views: n,
				activeId: n[0].id
			};
		}),
		reset: () => g({
			...t,
			...n.find((e) => e.id === d.id)?.state
		})
	};
}
//#endregion
//#region src/blocks/data/data-table-panels.tsx
var Bi = {
	table: De,
	list: T,
	board: Te,
	star: Ee,
	funnel: ge,
	clock: de,
	users: Ae,
	tag: Oe,
	eye: he
};
function Vi({ name: e, className: t }) {
	let n = Bi[e] ?? De;
	return /* @__PURE__ */ a(n, { className: t });
}
function $({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(fn, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(pn, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(mn, {
			align: r,
			className: B("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function Hi({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a($, {
		align: "end",
		width: r,
		className: B("relative shrink-0 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50", n ? "text-link" : "text-muted-foreground hover:text-foreground"),
		trigger: /* @__PURE__ */ o("span", {
			title: t,
			"aria-label": t,
			children: [/* @__PURE__ */ a(e, {
				className: "size-4",
				weight: n ? "bold" : "regular"
			}), n && /* @__PURE__ */ a("span", { className: "absolute top-0.5 right-0.5 size-1.5 rounded-full bg-link" })]
		}),
		children: i
	});
}
var Ui = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function Wi({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = J(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(K, {
			className: "mb-1 h-8",
			placeholder: s.findColumn,
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: B(Ui, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(E, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? De;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: Ui,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function Gi({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let { dataTable: l, common: u } = J(), [d, f] = e.useState(""), p = Array.isArray(r) ? r : [], m = n.filter((e) => e.label.toLowerCase().includes(d.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center justify-between gap-2 border-b px-1 pb-1.5",
		children: [/* @__PURE__ */ o("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: [
				t.header,
				" ",
				t.facet ? l.is : l.contains
			]
		}), /* @__PURE__ */ a("button", {
			type: "button",
			onClick: c,
			title: l.removeFilter,
			className: "rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
			children: /* @__PURE__ */ a(ke, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(K, {
			className: "mb-1 h-8",
			placeholder: u.searchPlaceholder,
			autoFocus: !0,
			value: d,
			onChange: (e) => f(e.target.value)
		}),
		m.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: u.noResults
		}),
		m.map((e) => /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
			children: [/* @__PURE__ */ a(St, {
				checked: p.includes(e.value),
				onCheckedChange: () => s(p.includes(e.value) ? p.filter((t) => t !== e.value) : [...p, e.value])
			}), /* @__PURE__ */ a("span", {
				className: "truncate",
				children: e.label
			})]
		}, e.value)),
		p.length > 0 && /* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => s([]),
			className: "mt-1 w-full border-t px-2 pt-2 text-left text-xs text-link hover:underline",
			children: l.clearSelection
		})
	] }) : /* @__PURE__ */ a(K, {
		className: "h-8",
		placeholder: l.typeAValue,
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function Ki({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = J().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(xn, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(wn, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(Cn, {})
					}), /* @__PURE__ */ a(Tn, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(Dn, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(xn, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(wn, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(Cn, {})
					}), /* @__PURE__ */ o(Tn, { children: [/* @__PURE__ */ a(Dn, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(Dn, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(Ne, {
						className: "size-3.5",
						weight: "bold"
					})
				})
			]
		}, t.id)),
		c.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([...e, {
				id: c[0].key,
				desc: !1
			}]),
			className: B(Ui, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(xe, {
					className: "size-3.5",
					weight: "bold"
				}),
				" ",
				s.addSort
			]
		}),
		e.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([]),
			className: B(Ui, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(ke, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function qi({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Ei).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(St, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function Ji({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: s, onSubmit: c, shareLabel: l }) {
	return /* @__PURE__ */ a($, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ o("form", {
			className: "space-y-2",
			onSubmit: (t) => {
				t.preventDefault();
				let n = new FormData(t.currentTarget), r = String(n.get("name") ?? "").trim();
				r && c(r, n.get("shared") === "on"), e();
			},
			children: [/* @__PURE__ */ o("div", {
				className: "flex gap-1.5",
				children: [/* @__PURE__ */ a(K, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: i
				}), /* @__PURE__ */ a(W, {
					type: "submit",
					size: "sm",
					className: "shrink-0",
					children: s
				})]
			}), l && /* @__PURE__ */ o("label", {
				className: "flex items-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("input", {
					type: "checkbox",
					name: "shared",
					className: "accent-primary"
				}), l]
			})]
		})
	});
}
function Yi({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = J(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
	return _ ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => m(null),
			"aria-label": d.back,
			className: "rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
			children: /* @__PURE__ */ a(re, {
				className: "size-3.5",
				weight: "bold"
			})
		}), /* @__PURE__ */ a("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: _.label
		})]
	}), _.panel] }) : /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ a("span", {
				className: "text-xs font-medium text-muted-foreground",
				children: d.viewSettings
			}), /* @__PURE__ */ a("button", {
				type: "button",
				onClick: u,
				"aria-label": f.close,
				className: "rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
				children: /* @__PURE__ */ a(Ne, {
					className: "size-3",
					weight: "bold"
				})
			})]
		}),
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center gap-2",
			children: [/* @__PURE__ */ a("button", {
				type: "button",
				title: d.changeIcon,
				onClick: () => g((e) => !e),
				className: B("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Vi, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(K, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": d.viewName
			})]
		}),
		h && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: Ni.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: B("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Vi, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: Ui,
			children: [
				/* @__PURE__ */ a(e.icon, { className: "size-4 shrink-0 text-muted-foreground" }),
				/* @__PURE__ */ a("span", {
					className: "flex-1 truncate",
					children: e.label
				}),
				e.value && /* @__PURE__ */ a("span", {
					className: "shrink-0 truncate text-xs text-muted-foreground",
					children: e.value
				}),
				/* @__PURE__ */ a(ae, { className: "size-3 shrink-0 text-muted-foreground" })
			]
		}, e.key)),
		l && /* @__PURE__ */ a("div", {
			className: "mt-1 border-t pt-1",
			children: l
		})
	] });
}
//#endregion
//#region src/blocks/data/kanban.tsx
var Xi = "application/x-ziku-card", Zi = {
	success: {
		idle: "border-success/60 bg-success-subtle text-success-fg",
		over: "border-success bg-success-subtle text-success-fg"
	},
	danger: {
		idle: "border-danger/60 bg-danger-subtle text-danger-fg",
		over: "border-danger bg-danger-subtle text-danger-fg"
	},
	warning: {
		idle: "border-warning/60 bg-warning-subtle text-warning-fg",
		over: "border-warning bg-warning-subtle text-warning-fg"
	}
};
function Qi({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
	let [u, d] = e.useState(null), [f, p] = e.useState(null), m = t.flatMap((e) => e.items), h = u !== null, g = (e) => f === e ? "over" : h ? "ready" : "idle", _ = (e) => ({
		onDragOver: (t) => {
			i && (t.preventDefault(), t.dataTransfer.dropEffect = "move", p(e));
		},
		onDragLeave: () => p(null),
		onDrop: (t) => {
			if (!i) return;
			t.preventDefault(), p(null), d(null);
			let n = t.dataTransfer.getData(Xi), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: B("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(ea, {
			col: e,
			state: g(e.key),
			drop: _(e.key)
		}, e.key) : /* @__PURE__ */ o("div", {
			..._(e.key),
			style: { maxHeight: c },
			className: B("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
				idle: "border-border bg-muted/50",
				ready: "border-ring/50 bg-muted/50",
				over: "border-ring bg-accent"
			}[g(e.key)]),
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-baseline justify-between px-2 py-1.5",
				children: [/* @__PURE__ */ a("span", {
					className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
					children: e.title
				}), /* @__PURE__ */ a("span", {
					className: "text-xs text-muted-foreground",
					children: e.subtitle ? `${e.items.length} · ${e.subtitle}` : e.items.length
				})]
			}), /* @__PURE__ */ a("div", {
				className: "min-h-10 space-y-2 overflow-y-auto",
				children: e.items.map((c) => {
					let l = r(c), f = !!i && (!s || s(c));
					return /* @__PURE__ */ o("div", {
						draggable: f,
						onDragStart: (e) => {
							if (!f) return;
							d(l), e.dataTransfer.setData(Xi, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: B("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a($i, {
							columns: t,
							from: e.key,
							onPick: (e) => i?.(c, e)
						})]
					}, l);
				})
			})]
		}, e.key))
	});
}
function $i({ columns: e, from: t, onPick: n }) {
	let r = J().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Nt, { children: [/* @__PURE__ */ a(Ft, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: B("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ee, { size: 14 })
	}), /* @__PURE__ */ a(It, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(Rt, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function ea({ col: e, state: t, drop: n }) {
	let r = e.tile, i = Zi[r.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: B("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? B("border-solid", i.over) : B("border-dashed", i.idle)),
		children: [
			/* @__PURE__ */ a(r.icon, {
				size: 22,
				weight: "duotone"
			}),
			/* @__PURE__ */ a("span", {
				className: "text-xs font-semibold tracking-wide uppercase",
				children: e.title
			}),
			/* @__PURE__ */ a("span", {
				className: "text-lg leading-none font-bold",
				children: e.items.length
			}),
			e.subtitle && /* @__PURE__ */ a("span", {
				className: "text-xs opacity-80",
				children: e.subtitle
			})
		]
	});
}
//#endregion
//#region src/blocks/data/data-table.tsx
var ta = Xe({
	rowSortingFeature: Ye,
	sortedRowModel: Ge(),
	columnFilteringFeature: Be,
	filteredRowModel: R(),
	globalFilteringFeature: Ke,
	columnFacetingFeature: ze,
	facetedRowModel: I(),
	facetedUniqueValues: L(),
	columnGroupingFeature: Ve,
	groupedRowModel: z(),
	rowExpandingFeature: qe,
	expandedRowModel: Ue(),
	columnVisibilityFeature: He,
	rowPaginationFeature: Je,
	paginatedRowModel: We()
});
function na({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: ee, presets: ne = [], viewKey: re, onStateChange: ie, viewsBackend: oe, paged: b, csv: se, className: le }) {
	let ue = J(), x = ue.dataTable, S = ue.common, de = e.useMemo(() => n ?? [], [n]), C = !!b, w = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), me = e.useMemo(() => ({
		sorting: m ? [{
			id: m.key,
			desc: m.dir === "desc"
		}] : [],
		columnFilters: g ?? [],
		globalFilter: "",
		columnVisibility: Object.fromEntries((h ?? []).map((e) => [e, !1])),
		grouping: _ ? [_] : [],
		mode: v
	}), [
		m,
		_,
		v
	]), ve = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => w[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => w[e.id]).map((e) => w[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: X(e.value) ? [] : [Y(e.value)]
		} : e).map((e) => {
			let t = w[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Y(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => w[e])
	}), [w]), T = zi(me, ne, re, oe), { views: be, active: E, isPreset: Ce, patch: D } = T, O = e.useMemo(() => ve(E.state), [E.state, ve]);
	e.useEffect(() => {
		ie?.(O);
	}, [O, ie]);
	let k = (e) => (t) => D({ [e]: typeof t == "function" ? t(O[e]) : t }), Ee = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : Z(e, Y(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!C || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: Ei(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? Ti(e)(Y(t.getValue(r)), Y(n.getValue(r))) : Ci(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (X(n)) return !0;
			let r = Y(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, C]), [Oe, je] = e.useState(!0), [Me, Pe] = e.useState(0), A = O.grouping[0] ?? "", j = t.filter((e) => e.facet), M = !!(y && j.length && c), N = O.mode === "board" && M, Fe = p > 0 && !A && !N && !C, Ie = e.useMemo(() => O.columnFilters.filter((e) => !X(e.value) && !w[e.id]?.filterKey), [O.columnFilters, w]), Le = C && (Ie.length > 0 || O.grouping.length > 0 || N), Re = e.useMemo(() => A && !O.sorting.some((e) => e.id === A) ? [{
		id: A,
		desc: !1
	}, ...O.sorting] : O.sorting, [A, O.sorting]), P = Ze({
		features: ta,
		data: de,
		columns: Ee,
		state: {
			sorting: Re,
			columnFilters: C ? Ie : O.columnFilters,
			globalFilter: C ? "" : O.globalFilter,
			columnVisibility: O.columnVisibility,
			grouping: O.grouping,
			expanded: Oe,
			pagination: {
				pageIndex: Fe ? Me : 0,
				pageSize: Fe ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: k("sorting"),
		onColumnFiltersChange: k("columnFilters"),
		onGlobalFilterChange: k("globalFilter"),
		onColumnVisibilityChange: k("columnVisibility"),
		onGroupingChange: k("grouping"),
		onExpandedChange: je,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: Me,
				pageSize: Fe ? p : 2 ** 53 - 1
			}) : e;
			Pe(t.pageIndex);
		},
		manualSorting: C && !A,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Y(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), F = P.getFilteredRowModel().rows;
	function ze() {
		if (!se) return;
		let e = se.decimal ?? ".", t = P.getVisibleLeafColumns().map((e) => w[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = P.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		xi(se.filename, bi(n, t, e));
	}
	e.useEffect(() => {
		Pe(0);
	}, [
		O.columnFilters,
		O.globalFilter,
		O.grouping
	]);
	let Be = sa(O.globalFilter, oa), Ve = JSON.stringify(Oi(t, {
		...O,
		globalFilter: Be
	})), He = e.useRef(b?.setQuery);
	e.useEffect(() => {
		He.current = b?.setQuery;
	}), e.useEffect(() => {
		He.current?.(JSON.parse(Ve));
	}, [Ve]);
	let Ue = e.useRef(null), I = b?.more, L = b?.hasMore ?? !1, R = b?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = Ue.current;
		if (!e || !I || !L || R) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && I();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		I,
		L,
		R
	]), e.useEffect(() => {
		Le && L && !R && I?.();
	}, [
		Le,
		L,
		R,
		I
	]);
	let z = O.columnFilters, We = Object.values(O.columnVisibility).filter((e) => e === !1).length, Ge = z.length > 0 || !!O.globalFilter || O.grouping.length > 0 || O.sorting.length > 0 || We > 0, Ke = t.filter((e) => Ei(e) && e.sortable !== !1 && !z.some((t) => t.id === e.key)), qe = t.filter((e) => Ei(e) && e.sortable !== !1 && (!C || !!e.sortKey)), Je = (e) => D({ columnFilters: [...z, {
		id: e,
		value: w[e]?.facet ? [] : ""
	}] }), Ye = (e) => D({ columnFilters: z.filter((t) => t.id !== e) }), Xe = (e, t) => D({ columnFilters: z.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function Qe(e) {
		if (!e.facet) return [];
		let t = C && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: Z(e, t)
		})) : [...P.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Ti(e)(Y(t[0]), Y(n[0]))).map(([n, r]) => ({
			value: Y(n),
			label: t ? Z(e, Y(n)) : `${Z(e, Y(n))} (${r})`
		}));
	}
	let V = (e) => D({
		mode: e,
		grouping: e === "board" && !A ? [j[0].key] : O.grouping
	}), $e = /* @__PURE__ */ a(qi, {
		columns: t,
		visibility: O.columnVisibility,
		onToggle: (e, t) => D({ columnVisibility: {
			...O.columnVisibility,
			[e]: t
		} })
	}), H = /* @__PURE__ */ a(Ki, {
		sorting: O.sorting,
		sortable: qe,
		byKey: w,
		onChange: (e) => D({ sorting: e })
	}), et = (e) => /* @__PURE__ */ a(Wi, {
		columns: j,
		empty: {
			label: x.noGrouping,
			onPick: () => {
				D({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			D({ grouping: [t] }), e?.();
		}
	}), tt = /* @__PURE__ */ o(i, { children: [
		z.map((e) => {
			let t = w[e.id];
			if (!t) return null;
			let n = t.icon ?? ge;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Di(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => Ye(e.id),
						"aria-label": `Remove ${t.header}`,
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(Ne, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		z.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(Wi, {
			columns: Ke,
			onPick: Je
		})
	] }), nt = [
		...M ? [{
			key: "layout",
			icon: De,
			label: x.layout,
			value: O.mode === "board" ? x.board : x.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				Se,
				x.table
			], [
				"board",
				Te,
				x.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => V(e),
				className: B("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", O.mode === e && "font-medium"),
				children: [
					/* @__PURE__ */ a(t, { className: "size-4 text-muted-foreground" }),
					" ",
					n
				]
			}, e)) })
		}] : [],
		{
			key: "columns",
			icon: he,
			label: x.visibleColumns,
			value: We ? x.hidden(We) : x.allView,
			panel: $e
		},
		{
			key: "filter",
			icon: _e,
			label: x.filters,
			value: z.length ? String(z.length) : void 0,
			panel: tt
		},
		{
			key: "sort",
			icon: we,
			label: x.sorting,
			value: O.sorting.length ? O.sorting.length === 1 ? w[O.sorting[0].id]?.header : String(O.sorting.length) : void 0,
			panel: H
		},
		...j.length ? [{
			key: "group",
			icon: Se,
			label: x.groupBy,
			value: A ? w[A]?.header : S.none,
			panel: et()
		}] : []
	], U = A ? w[A] : null, rt = (e) => e && e !== "—" ? Z(U ?? void 0, e) : "—", it = e.useMemo(() => {
		if (!N || !U) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of F) {
			let n = Y(t.getValue(A)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...U.order ?? [], ...e.keys()])].sort(Ti(U)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: rt(t),
				items: n,
				subtitle: ee?.(n),
				tile: U.boardTile?.(t)
			};
		});
	}, [
		N,
		U,
		F,
		A,
		ee
	]), at = P.getVisibleLeafColumns().length;
	return /* @__PURE__ */ o("div", {
		className: B("overflow-hidden rounded-md border bg-card", le),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [be.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => T.select(e.id),
						className: B("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === E.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(Vi, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: x.sharedBy(e.ownerName),
								"aria-label": x.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(Ae, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(Ji, {
						align: "start",
						title: x.saveView,
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(xe, {
							className: "size-4",
							weight: "bold"
						}),
						defaultValue: x.newView,
						confirmLabel: x.createView,
						onSubmit: T.add,
						shareLabel: T.sharable ? x.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(Hi, {
							icon: ye,
							label: S.search,
							active: !!O.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(K, {
								className: "h-8",
								placeholder: u ?? S.searchPlaceholder,
								autoFocus: !0,
								value: O.globalFilter,
								onChange: (e) => D({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(Hi, {
							icon: _e,
							label: x.filter,
							active: z.length > 0,
							children: (e) => /* @__PURE__ */ a(Wi, {
								columns: Ke,
								onPick: (t) => {
									Je(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(Hi, {
							icon: we,
							label: x.sort,
							active: O.sorting.length > 0,
							width: "w-88",
							children: H
						}),
						j.length > 0 && /* @__PURE__ */ a(Hi, {
							icon: Se,
							label: x.group,
							active: !!A,
							children: (e) => et(e)
						}),
						/* @__PURE__ */ a(Hi, {
							icon: he,
							label: x.visibleColumns,
							active: We > 0,
							width: "w-52",
							children: $e
						}),
						M && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								Se,
								x.table
							], [
								"board",
								Te,
								x.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => V(e),
								className: B("px-2 py-1", O.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a($, {
							align: "end",
							width: "w-72",
							className: "ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground",
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": x.viewSettings,
								children: /* @__PURE__ */ a(fe, {
									className: "size-4",
									weight: "bold"
								})
							}),
							children: (e) => /* @__PURE__ */ a(Yi, {
								name: E.name,
								icon: E.icon,
								onIcon: T.setIcon,
								onRename: T.rename,
								onClose: e,
								rows: nt,
								footer: /* @__PURE__ */ o(i, { children: [se && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										ze(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(pe, { className: "size-4 text-muted-foreground" }), x.exportCsv]
								}), !Ce && E.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										T.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [
										/* @__PURE__ */ a(ke, { className: "size-4" }),
										" ",
										x.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(z.length > 0 || O.sorting.length > 0 || A) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					O.sorting.length > 0 && /* @__PURE__ */ a($, {
						width: "w-88",
						className: ia,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(we, {
									className: "size-3.5",
									weight: "bold"
								}),
								O.sorting.length === 1 ? `${w[O.sorting[0].id]?.header ?? O.sorting[0].id} ${O.sorting[0].desc ? "↓" : "↑"}` : `${O.sorting.length} sorts`,
								/* @__PURE__ */ a(te, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: H
					}),
					A && /* @__PURE__ */ a($, {
						className: ia,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Se, {
									className: "size-3.5",
									weight: "bold"
								}),
								x.groupedBy(w[A]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(te, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => et(e)
					}),
					z.map((e) => {
						let t = w[e.id];
						if (!t) return null;
						let n = t.icon ?? ge;
						return /* @__PURE__ */ a($, {
							className: X(e.value) ? aa : ia,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Di(t, e.value)
									}),
									/* @__PURE__ */ a(te, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(Gi, {
								col: t,
								options: Qe(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => Xe(e.id, t),
								onRemove: () => {
									Ye(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a($, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(xe, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								x.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(Wi, {
							columns: Ke,
							onPick: (t) => {
								Je(t), e();
							}
						})
					}),
					Ge && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: T.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(Ne, {
								className: "size-3",
								weight: "bold"
							}),
							" ",
							x.clearFilters
						]
					})
				]
			}),
			r ? /* @__PURE__ */ a("div", {
				className: "grid gap-2 p-4",
				children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(Wn, { className: "h-8 w-full" }, t))
			}) : F.length === 0 ? /* @__PURE__ */ a("div", {
				className: "p-12 text-center text-sm text-muted-foreground",
				children: s ?? S.noResults
			}) : N ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(Qi, {
					columns: it,
					itemKey: c,
					renderCard: y,
					onDrop: U?.onSet ? (e, t) => U.onSet(e, t) : void 0,
					canDrag: (e) => !!U?.onSet && (U?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(jr, { children: [/* @__PURE__ */ a(Mr, { children: P.getHeaderGroups().map((e) => /* @__PURE__ */ a(Fr, {
					className: "bg-muted/50",
					children: e.headers.map((e) => {
						let t = w[e.column.id], n = e.column.getIsSorted(), r = t?.icon, i = n === "asc" ? ce : n === "desc" ? te : we;
						return /* @__PURE__ */ a(Ir, {
							onClick: e.column.getToggleSortingHandler(),
							className: B("whitespace-nowrap", e.column.getCanSort() && "cursor-pointer select-none hover:text-foreground", t?.className),
							children: /* @__PURE__ */ o("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									r && /* @__PURE__ */ a(r, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a(P.FlexRender, { header: e }),
									e.column.getCanSort() && /* @__PURE__ */ a(i, {
										className: B("size-3", n ? "text-foreground" : "opacity-40"),
										weight: "bold"
									})
								]
							})
						}, e.id);
					})
				}, e.id)) }), /* @__PURE__ */ o(Nr, { children: [P.getRowModel().rows.map((e) => e.getIsGrouped() ? /* @__PURE__ */ a(Fr, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(Ir, {
						colSpan: at,
						onClick: e.getToggleExpandedHandler(),
						className: "cursor-pointer bg-muted/50 text-xs font-semibold tracking-wide uppercase",
						children: /* @__PURE__ */ o("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								e.getIsExpanded() ? /* @__PURE__ */ a(te, {
									className: "size-3",
									weight: "bold"
								}) : /* @__PURE__ */ a(ae, {
									className: "size-3",
									weight: "bold"
								}),
								rt(Y(e.getValue(A))),
								/* @__PURE__ */ a("span", {
									className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
									children: e.subRows.length
								})
							]
						})
					})
				}, e.id) : /* @__PURE__ */ a(Fr, {
					onClick: f ? () => f(e.original) : void 0,
					className: f ? "cursor-pointer" : void 0,
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Lr, {
						className: w[e.column.id]?.className,
						children: /* @__PURE__ */ a(P.FlexRender, { cell: e })
					}, e.id))
				}, e.id)), L && /* @__PURE__ */ a(Fr, {
					ref: Ue,
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(Lr, {
						colSpan: at,
						className: "text-center text-xs text-muted-foreground",
						children: R ? x.loadingMore : null
					})
				})] })] })
			}),
			Fe && !r && F.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", { children: x.rowCount(F.length) }), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: x.pageOf(Me + 1, Math.max(P.getPageCount(), 1)) }),
						/* @__PURE__ */ a(W, {
							variant: "outline",
							size: "sm",
							onClick: () => P.previousPage(),
							disabled: !P.getCanPreviousPage(),
							children: x.previousPage
						}),
						/* @__PURE__ */ a(W, {
							variant: "outline",
							size: "sm",
							onClick: () => P.nextPage(),
							disabled: !P.getCanNextPage(),
							children: x.nextPage
						})
					]
				})]
			})
		]
	});
}
var ra = "rounded-md border px-2 py-1.5 text-sm outline-none", ia = `${ra} border-ring/60 bg-accent font-medium text-foreground`, aa = `${ra} border-border bg-card text-muted-foreground`, oa = 300;
function sa(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/shell/app-shell.tsx
function ca(e) {
	return e.split(" ").map((e) => e[0]).slice(0, 2).join("").toUpperCase();
}
function la({ brand: e, nav: t, currentPath: n, user: r, userMenu: s, onSignOut: c, headerActions: l, headerContent: u, children: d }) {
	let f = J().shell;
	return /* @__PURE__ */ o(rr, { children: [/* @__PURE__ */ o(ir, {
		collapsible: "icon",
		children: [
			/* @__PURE__ */ a(lr, { children: /* @__PURE__ */ a(_r, { children: /* @__PURE__ */ a(vr, { children: /* @__PURE__ */ a(br, {
				size: "lg",
				asChild: !0,
				children: /* @__PURE__ */ a(q, {
					href: "/",
					children: e
				})
			}) }) }) }),
			/* @__PURE__ */ a(fr, { children: t.map((e, t) => /* @__PURE__ */ o(pr, { children: [e.label && /* @__PURE__ */ a(mr, { children: e.label }), /* @__PURE__ */ a(gr, { children: /* @__PURE__ */ a(_r, { children: e.items.map((e) => /* @__PURE__ */ a(vr, { children: /* @__PURE__ */ a(br, {
				asChild: !0,
				isActive: n === e.href,
				tooltip: e.title,
				children: /* @__PURE__ */ o(q, {
					href: e.href,
					children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
				})
			}) }, e.href)) }) })] }, e.label ?? t)) }),
			r && /* @__PURE__ */ a(ur, { children: /* @__PURE__ */ a(_r, { children: /* @__PURE__ */ a(vr, { children: /* @__PURE__ */ o(Nt, { children: [/* @__PURE__ */ a(Ft, {
				asChild: !0,
				children: /* @__PURE__ */ o(br, {
					size: "lg",
					className: "data-[state=open]:bg-sidebar-accent",
					children: [
						/* @__PURE__ */ o(et, {
							className: "size-8 rounded-lg",
							children: [/* @__PURE__ */ a(tt, {
								src: r.avatarUrl,
								alt: r.name
							}), /* @__PURE__ */ a(nt, {
								className: "rounded-lg",
								children: ca(r.name)
							})]
						}),
						/* @__PURE__ */ o("div", {
							className: "grid flex-1 text-left text-sm leading-tight",
							children: [/* @__PURE__ */ a("span", {
								className: "truncate font-medium",
								children: r.name
							}), /* @__PURE__ */ a("span", {
								className: "truncate text-xs text-muted-foreground",
								children: r.role ?? r.email
							})]
						}),
						/* @__PURE__ */ a(se, { className: "ml-auto size-4" })
					]
				})
			}), /* @__PURE__ */ o(It, {
				side: "top",
				align: "start",
				className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
				children: [
					/* @__PURE__ */ o(Ht, {
						className: "font-normal",
						children: [/* @__PURE__ */ a("div", {
							className: "text-sm font-medium",
							children: r.name
						}), /* @__PURE__ */ a("div", {
							className: "text-xs text-muted-foreground",
							children: r.email
						})]
					}),
					s && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Ut, {}), s] }),
					c && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Ut, {}), /* @__PURE__ */ o(Rt, {
						onSelect: c,
						children: [/* @__PURE__ */ a(D, {}), f.signOut]
					})] })
				]
			})] }) }) }) })
		]
	}), /* @__PURE__ */ o(sr, { children: [/* @__PURE__ */ o("header", {
		className: "flex h-14 shrink-0 items-center gap-2 border-b px-4",
		children: [
			/* @__PURE__ */ a(ar, { className: "-ml-1" }),
			/* @__PURE__ */ a(jn, {
				orientation: "vertical",
				className: "mr-2 data-[orientation=vertical]:h-4"
			}),
			/* @__PURE__ */ a("div", {
				className: "flex flex-1 items-center gap-2",
				children: u
			}),
			l && /* @__PURE__ */ a("div", {
				className: "flex items-center gap-2",
				children: l
			})
		]
	}), /* @__PURE__ */ a("div", {
		className: "flex flex-1 flex-col gap-6 p-6",
		children: d
	})] })] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var ua = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function da({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = J().modal;
	return /* @__PURE__ */ a(Ct, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Ot, {
			showCloseButton: !1,
			className: B("flex max-h-[92dvh] flex-col gap-0 p-0", ua[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(jt, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(Mt, { children: r })]
					}), /* @__PURE__ */ a(Et, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(Ne, {
							className: "size-4",
							weight: "bold"
						})
					})]
				}),
				l != null && /* @__PURE__ */ a("div", {
					className: "min-h-0 flex-1 overflow-y-auto px-5 py-4",
					children: l
				}),
				i && /* @__PURE__ */ a("div", {
					className: "flex shrink-0 flex-wrap justify-end gap-2 border-t bg-muted/40 px-5 py-3",
					children: i
				})
			]
		})
	});
}
//#endregion
//#region src/blocks/page/page-header.tsx
function fa({ title: e, description: t, actions: n, className: r, ...i }) {
	return /* @__PURE__ */ o("div", {
		className: B("flex flex-wrap items-start justify-between gap-4", r),
		...i,
		children: [/* @__PURE__ */ o("div", {
			className: "grid gap-1",
			children: [/* @__PURE__ */ a("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: e
			}), t && /* @__PURE__ */ a("p", {
				className: "text-sm text-muted-foreground",
				children: t
			})]
		}), n && /* @__PURE__ */ a("div", {
			className: "flex items-center gap-2",
			children: n
		})]
	});
}
//#endregion
//#region src/blocks/page/empty-state.tsx
function pa({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
	return /* @__PURE__ */ o("div", {
		className: B("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-12 text-center", i),
		...s,
		children: [
			e && /* @__PURE__ */ a("div", {
				className: "flex size-12 items-center justify-center rounded-full bg-muted",
				children: /* @__PURE__ */ a(e, { className: "size-6 text-muted-foreground" })
			}),
			/* @__PURE__ */ a("h3", {
				className: "text-lg font-medium",
				children: t
			}),
			n && /* @__PURE__ */ a("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: n
			}),
			r && /* @__PURE__ */ a("div", {
				className: "mt-2",
				children: r
			})
		]
	});
}
//#endregion
export { V as Alert, H as AlertDescription, $e as AlertTitle, la as AppShell, Gr as AuthLayout, et as Avatar, U as AvatarBadge, nt as AvatarFallback, rt as AvatarGroup, it as AvatarGroupCount, tt as AvatarImage, ot as Badge, st as Breadcrumb, pt as BreadcrumbEllipsis, lt as BreadcrumbItem, ut as BreadcrumbLink, ct as BreadcrumbList, dt as BreadcrumbPage, ft as BreadcrumbSeparator, W as Button, ht as Card, yt as CardAction, bt as CardContent, vt as CardDescription, xt as CardFooter, gt as CardHeader, _t as CardTitle, St as Checkbox, mi as CommandMenu, na as DataTable, Ct as Dialog, Et as DialogClose, Ot as DialogContent, Mt as DialogDescription, At as DialogFooter, kt as DialogHeader, Dt as DialogOverlay, Tt as DialogPortal, jt as DialogTitle, wt as DialogTrigger, Nt as DropdownMenu, zt as DropdownMenuCheckboxItem, It as DropdownMenuContent, Lt as DropdownMenuGroup, Rt as DropdownMenuItem, Ht as DropdownMenuLabel, Pt as DropdownMenuPortal, Bt as DropdownMenuRadioGroup, Vt as DropdownMenuRadioItem, Ut as DropdownMenuSeparator, Wt as DropdownMenuShortcut, Gt as DropdownMenuSub, qt as DropdownMenuSubContent, Kt as DropdownMenuSubTrigger, Ft as DropdownMenuTrigger, pa as EmptyState, ii as ForgotPasswordForm, Yt as Form, tn as FormControl, nn as FormDescription, Zt as FormField, en as FormItem, G as FormLabel, rn as FormMessage, K as Input, Qi as Kanban, Jt as Label, q as Link, qr as LinkProvider, ei as LoginForm, da as Modal, Si as NONE, fa as PageHeader, an as Pagination, on as PaginationContent, dn as PaginationEllipsis, sn as PaginationItem, cn as PaginationLink, un as PaginationNext, ln as PaginationPrevious, fn as Popover, hn as PopoverAnchor, mn as PopoverContent, vn as PopoverDescription, gn as PopoverHeader, _n as PopoverTitle, pn as PopoverTrigger, yn as RadioGroup, bn as RadioGroupItem, ni as RegisterForm, hi as SearchTrigger, xn as Select, Tn as SelectContent, Sn as SelectGroup, Dn as SelectItem, En as SelectLabel, An as SelectScrollDownButton, kn as SelectScrollUpButton, On as SelectSeparator, wn as SelectTrigger, Cn as SelectValue, jn as Separator, Mn as Sheet, Pn as SheetClose, Ln as SheetContent, Vn as SheetDescription, zn as SheetFooter, Rn as SheetHeader, Bn as SheetTitle, Nn as SheetTrigger, ir as Sidebar, fr as SidebarContent, ur as SidebarFooter, pr as SidebarGroup, hr as SidebarGroupAction, gr as SidebarGroupContent, mr as SidebarGroupLabel, lr as SidebarHeader, cr as SidebarInput, sr as SidebarInset, _r as SidebarMenu, xr as SidebarMenuAction, Sr as SidebarMenuBadge, br as SidebarMenuButton, vr as SidebarMenuItem, Cr as SidebarMenuSkeleton, wr as SidebarMenuSub, Er as SidebarMenuSubButton, Tr as SidebarMenuSubItem, rr as SidebarProvider, or as SidebarRail, dr as SidebarSeparator, ar as SidebarTrigger, Wn as Skeleton, Ar as Switch, jr as Table, Nr as TableBody, Rr as TableCaption, Lr as TableCell, Pr as TableFooter, Ir as TableHead, Mr as TableHeader, Fr as TableRow, zr as Tabs, Ur as TabsContent, Vr as TabsList, Hr as TabsTrigger, Wr as Textarea, kr as Toaster, Kn as Tooltip, Jn as TooltipContent, Gn as TooltipProvider, qn as TooltipTrigger, Qr as UIStringsProvider, Ni as VIEW_ICON_NAMES, at as badgeVariants, mt as buttonVariants, Di as chipLabel, B as cn, Ci as compare, gi as csvDelimiter, yi as csvValue, ta as dataTableFeatures, Jr as defaultStrings, xi as downloadCsv, Z as facetText, ri as forgotPasswordSchema, X as isBlankFilter, wi as labelsOf, $r as loginSchema, Ei as named, Ti as rank, ti as registerSchema, Ai as setStoragePrefix, Mi as storageKey, ji as storagePrefix, Y as str, Br as tabsListVariants, bi as toCsv, Oi as toQuery, Le as toast, zi as useDataTableViews, Qt as useFormField, Un as useIsMobile, nr as useSidebar, J as useStrings, Or as useTheme };
