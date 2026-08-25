import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { CaretDownIcon as b, CaretDownIcon as ee, CaretLeftIcon as te, CaretLeftIcon as ne, CaretRightIcon as re, CaretRightIcon as ie, CaretRightIcon as ae, CaretUpDownIcon as oe, CaretUpIcon as se, CaretUpIcon as x, CheckCircleIcon as ce, CheckIcon as le, CircleIcon as S, ClockIcon as ue, DotsThreeIcon as de, DotsThreeIcon as C, DotsThreeIcon as fe, EnvelopeSimpleIcon as w, EyeIcon as pe, FunnelIcon as me, FunnelSimpleIcon as he, InfoIcon as T, ListBulletsIcon as E, MagnifyingGlassIcon as ge, MagnifyingGlassIcon as _e, PlusIcon as ve, ProhibitIcon as ye, RowsIcon as D, SidebarSimpleIcon as be, SignOutIcon as xe, SortAscendingIcon as Se, SpinnerIcon as Ce, SpinnerIcon as O, SquaresFourIcon as we, StarIcon as k, TableIcon as Te, TagIcon as Ee, TrashIcon as De, UsersIcon as A, WarningIcon as j, XCircleIcon as Oe, XIcon as ke, XIcon as M } from "@phosphor-icons/react";
import { Controller as N, FormProvider as P, useForm as F, useFormContext as Ae, useFormState as je } from "react-hook-form";
import { Toaster as Me, toast as Ne } from "sonner";
import { zodResolver as I } from "@hookform/resolvers/zod";
import { z as L } from "zod";
import { Command as R } from "cmdk";
import { columnFacetingFeature as Pe, columnFilteringFeature as Fe, columnGroupingFeature as Ie, columnVisibilityFeature as Le, createExpandedRowModel as Re, createFacetedRowModel as z, createFacetedUniqueValues as ze, createFilteredRowModel as Be, createGroupedRowModel as Ve, createPaginatedRowModel as He, createSortedRowModel as Ue, globalFilteringFeature as We, rowExpandingFeature as Ge, rowPaginationFeature as Ke, rowSortingFeature as qe, tableFeatures as Je, useTable as Ye } from "@tanstack/react-table";
//#region src/lib/utils.ts
function B(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var Xe = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
function Ze({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: B(Xe({ variant: t }), e),
		...n
	});
}
function Qe({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: B("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function $e({ className: e, ...t }) {
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
function rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: B("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function it({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: B("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function at({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: B("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var ot = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
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
function st({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? g.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: B(ot({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function ct({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: B("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function ut({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: B("inline-flex items-center gap-1.5", e),
		...t
	});
}
function dt({ asChild: e, className: t, ...n }) {
	let r = e ? g.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: B("transition-colors hover:text-foreground", t),
		...n
	});
}
function ft({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: B("font-normal text-foreground", e),
		...t
	});
}
function pt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: B("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(ie, {})
	});
}
function mt({ className: e, ...t }) {
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
var ht = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function V({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? g.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: B(ht({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/card.tsx
function H({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		className: B("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", e),
		...t
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: B("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function W({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: B("leading-none font-semibold", e),
		...t
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
function gt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: B("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: B("px-6", e),
		...t
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: B("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: B("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(le, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function yt({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function bt({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function xt({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function St({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function Ct({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function wt({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(xt, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(Ct, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: B("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(M, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: B("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Et({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: B("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(V, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: B("text-lg leading-none font-semibold", e),
		...t
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function kt({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function At({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function jt({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Mt({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: B("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Nt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Pt({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg dark:data-[variant=destructive]:focus:bg-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function Ft({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(le, { className: "size-4" }) })
		}), t]
	});
}
function It({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Lt({ className: e, children: t, ...n }) {
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
function Rt({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: B("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: B("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Vt({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Ht({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: B("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(ae, { className: "ml-auto size-4" })]
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: B("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Wt({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: B("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var Gt = P, Kt = e.createContext({}), q = ({ ...e }) => /* @__PURE__ */ a(Kt.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(N, { ...e })
}), J = () => {
	let t = e.useContext(Kt), n = e.useContext(qt);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = Ae(), i = je({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, qt = e.createContext({});
function Jt({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(qt.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: B("grid gap-2", t),
			...n
		})
	});
}
function Yt({ className: e, ...t }) {
	let { error: n, formItemId: r } = J();
	return /* @__PURE__ */ a(Wt, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: B("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function Xt({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = J();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function Zt({ className: e, ...t }) {
	let { formDescriptionId: n } = J();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
function Qt({ className: e, ...t }) {
	let { error: n, formMessageId: r } = J(), i = n ? String(n?.message ?? "") : t.children;
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
function Y({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		className: B("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", e),
		...n
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function $t({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: B("mx-auto flex w-full justify-center", e),
		...t
	});
}
function en({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: B("flex flex-row items-center gap-1", e),
		...t
	});
}
function tn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function nn({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: B(ht({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function rn({ className: e, ...t }) {
	return /* @__PURE__ */ o(nn, {
		"aria-label": "Go to previous page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(ne, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function an({ className: e, ...t }) {
	return /* @__PURE__ */ o(nn, {
		"aria-label": "Go to next page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(ae, {})]
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: B("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(fe, { className: "size-4" }), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function sn({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function cn({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function ln({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: B("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function un({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function dn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: B("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function fn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: B("font-medium", e),
		...t
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: B("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: B("grid gap-3", e),
		...t
	});
}
function hn({ className: e, ...t }) {
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
function gn({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function _n({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function vn({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function yn({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: B("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(ee, { className: "size-4 opacity-50" })
		})]
	});
}
function bn({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: B("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(wn, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: B("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Tn, {})
		]
	}) });
}
function xn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: B("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function Sn({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(m.Item, {
		"data-slot": "select-item",
		className: B("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(m.ItemIndicator, { children: /* @__PURE__ */ a(le, { className: "size-4" }) })
		}), /* @__PURE__ */ a(m.ItemText, { children: t })]
	});
}
function Cn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: B("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function wn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(x, { className: "size-4" })
	});
}
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(ee, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function En({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
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
function Dn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function On({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function kn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function An({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Mn({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(An, { children: [/* @__PURE__ */ a(jn, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: B("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [t, r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ a(M, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: B("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: B("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: B("font-semibold text-foreground", e),
		...t
	});
}
function In({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Ln = 768;
function Rn() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Ln);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Ln), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function zn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: B("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Bn({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Vn({ ...e }) {
	return /* @__PURE__ */ a(Bn, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function Hn({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Un({ className: e, sideOffset: t = 0, children: n, ...r }) {
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
var Wn = "sidebar_state", Gn = 604800, Kn = "16rem", qn = "18rem", Jn = "3rem", Yn = "b", Xn = e.createContext(null);
function Zn() {
	let t = e.useContext(Xn);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function Qn({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Rn(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${Wn}=${t}; path=/; max-age=${Gn}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === Yn && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(Xn.Provider, {
		value: v,
		children: /* @__PURE__ */ a(Bn, {
			delayDuration: 0,
			children: /* @__PURE__ */ a("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": Kn,
					"--sidebar-width-icon": Jn,
					...o
				},
				className: B("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
				...c,
				children: s
			})
		})
	});
}
function $n({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, ...s }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = Zn();
	return n === "none" ? /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: B("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...s,
		children: i
	}) : c ? /* @__PURE__ */ a(Dn, {
		open: u,
		onOpenChange: d,
		...s,
		children: /* @__PURE__ */ o(Mn, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": qn },
			side: e,
			children: [/* @__PURE__ */ o(Nn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Fn, { children: "Sidebar" }), /* @__PURE__ */ a(In, { children: "Displays the mobile sidebar." })]
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
function er({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = Zn();
	return /* @__PURE__ */ o(V, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: B("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(be, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function tr({ className: e, ...t }) {
	let { toggleSidebar: n } = Zn();
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
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: B("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function rr({ className: e, ...t }) {
	return /* @__PURE__ */ a(Y, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: B("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function ir({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ a(En, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: B("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: B("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: B("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function lr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: B("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function ur({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: B("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function dr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: B("w-full text-sm", e),
		...t
	});
}
function fr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: B("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: B("group/menu-item relative", e),
		...t
	});
}
var mr = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function hr({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = Zn(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: B(mr({
			variant: n,
			size: r
		}), s),
		...c
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(Vn, { children: [/* @__PURE__ */ a(Hn, {
		asChild: !0,
		children: f
	}), /* @__PURE__ */ a(Un, {
		side: "right",
		align: "center",
		hidden: d !== "collapsed" || u,
		...i
	})] })) : f;
}
function gr({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: B("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function _r({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: B("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function vr({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: B("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a(zn, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(zn, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: B("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: B("group/menu-sub-item relative", e),
		...t
	});
}
function xr({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
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
var Sr = () => typeof document < "u" && document.documentElement.classList.contains("light") ? "light" : "dark";
function Cr() {
	let [t, n] = e.useState(Sr);
	return e.useEffect(() => {
		n(Sr());
		let e = new MutationObserver(() => n(Sr()));
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []), t;
}
//#endregion
//#region src/components/ui/sonner.tsx
var wr = ({ theme: e, ...t }) => {
	let n = Cr();
	return /* @__PURE__ */ a(Me, {
		theme: e ?? n,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ a(ce, { className: "size-4" }),
			info: /* @__PURE__ */ a(T, { className: "size-4" }),
			warning: /* @__PURE__ */ a(j, { className: "size-4" }),
			error: /* @__PURE__ */ a(Oe, { className: "size-4" }),
			loading: /* @__PURE__ */ a(O, { className: "size-4 animate-spin" })
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
function Tr({ className: e, size: t = "default", ...n }) {
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
function Er({ className: e, ...t }) {
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
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: B("[&_tr]:border-b", e),
		...t
	});
}
function Or({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: B("[&_tr:last-child]:border-0", e),
		...t
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: B("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function Ar({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: B("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: B("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: B("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: B("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Pr({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: B("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Fr = t("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Ir({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: B(Fr({ variant: t }), e),
		...n
	});
}
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: B("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: B("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		className: B("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Br({ logo: e, footer: t, className: n, children: r, ...i }) {
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
var Vr = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Hr({ component: e, children: t }) {
	return /* @__PURE__ */ a(Vr.Provider, {
		value: e,
		children: t
	});
}
function X(t) {
	let n = e.useContext(Vr);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var Ur = L.object({
	email: L.email("Enter a valid email"),
	password: L.string().min(1, "Password is required")
});
function Wr({ onSubmit: e, error: t, title: n = "Welcome back", description: r = "Sign in to your account", registerHref: s = "/register", forgotPasswordHref: c = "/forgot-password", providers: l }) {
	let u = F({
		resolver: I(Ur),
		defaultValues: {
			email: "",
			password: ""
		}
	}), d = u.formState.isSubmitting;
	return /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: n
		}), /* @__PURE__ */ a(G, { children: r })]
	}), /* @__PURE__ */ a(K, { children: /* @__PURE__ */ a(Gt, {
		...u,
		children: /* @__PURE__ */ o("form", {
			onSubmit: u.handleSubmit(e),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				t && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: t })
				}),
				/* @__PURE__ */ a(q, {
					control: u.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Jt, { children: [
						/* @__PURE__ */ a(Yt, { children: "Email" }),
						/* @__PURE__ */ a(Xt, { children: /* @__PURE__ */ a(Y, {
							type: "email",
							autoComplete: "email",
							placeholder: "you@company.com",
							...e
						}) }),
						/* @__PURE__ */ a(Qt, {})
					] })
				}),
				/* @__PURE__ */ a(q, {
					control: u.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(Jt, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(Yt, { children: "Password" }), /* @__PURE__ */ a(X, {
								href: c,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: "Forgot password?"
							})]
						}),
						/* @__PURE__ */ a(Xt, { children: /* @__PURE__ */ a(Y, {
							type: "password",
							autoComplete: "current-password",
							...e
						}) }),
						/* @__PURE__ */ a(Qt, {})
					] })
				}),
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: d,
					children: [d && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), "Sign in"]
				}),
				l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: "or continue with"
					})
				}), /* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: l
				})] }),
				/* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						"No account?",
						" ",
						/* @__PURE__ */ a(X, {
							href: s,
							className: "text-link underline underline-offset-4",
							children: "Create one"
						})
					]
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/blocks/auth/register-form.tsx
var Gr = L.object({
	name: L.string().min(2, "Enter your name"),
	email: L.email("Enter a valid email"),
	password: L.string().min(8, "At least 8 characters"),
	confirmPassword: L.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: "Passwords do not match"
});
function Kr({ onSubmit: e, error: t, title: n = "Create an account", description: r = "Get started in under a minute", loginHref: s = "/login", providers: c }) {
	let l = F({
		resolver: I(Gr),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), u = l.formState.isSubmitting, d = (e, t, n, r) => /* @__PURE__ */ a(q, {
		control: l.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(Jt, { children: [
			/* @__PURE__ */ a(Yt, { children: t }),
			/* @__PURE__ */ a(Xt, { children: /* @__PURE__ */ a(Y, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(Zt, { children: r }),
			/* @__PURE__ */ a(Qt, {})
		] })
	});
	return /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: n
		}), /* @__PURE__ */ a(G, { children: r })]
	}), /* @__PURE__ */ a(K, { children: /* @__PURE__ */ a(Gt, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(e),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				t && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: t })
				}),
				d("name", "Name", {
					autoComplete: "name",
					placeholder: "Ada Lovelace"
				}),
				d("email", "Email", {
					type: "email",
					autoComplete: "email",
					placeholder: "you@company.com"
				}),
				d("password", "Password", {
					type: "password",
					autoComplete: "new-password"
				}, "At least 8 characters"),
				d("confirmPassword", "Confirm password", {
					type: "password",
					autoComplete: "new-password"
				}),
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), "Create account"]
				}),
				c && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: "or continue with"
					})
				}), /* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: c
				})] }),
				/* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						"Already have an account?",
						" ",
						/* @__PURE__ */ a(X, {
							href: s,
							className: "text-link underline underline-offset-4",
							children: "Sign in"
						})
					]
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/blocks/auth/forgot-password-form.tsx
var qr = L.object({ email: L.email("Enter a valid email") });
function Jr({ onSubmit: e, error: t, sent: n, loginHref: r = "/login" }) {
	let i = F({
		resolver: I(qr),
		defaultValues: { email: "" }
	}), s = i.formState.isSubmitting;
	return n ? /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(w, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(W, {
				className: "text-xl",
				children: "Check your inbox"
			}),
			/* @__PURE__ */ o(G, { children: [
				"If an account exists for ",
				i.getValues("email") || "that email",
				", we sent a reset link."
			] })
		]
	}), /* @__PURE__ */ a(K, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(X, {
			href: r,
			className: "text-link underline underline-offset-4",
			children: "Back to sign in"
		})
	})] }) : /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: "Reset your password"
		}), /* @__PURE__ */ a(G, { children: "Enter your email and we'll send you a link" })]
	}), /* @__PURE__ */ a(K, { children: /* @__PURE__ */ a(Gt, {
		...i,
		children: /* @__PURE__ */ o("form", {
			onSubmit: i.handleSubmit(e),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				t && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: t })
				}),
				/* @__PURE__ */ a(q, {
					control: i.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Jt, { children: [
						/* @__PURE__ */ a(Yt, { children: "Email" }),
						/* @__PURE__ */ a(Xt, { children: /* @__PURE__ */ a(Y, {
							type: "email",
							autoComplete: "email",
							placeholder: "you@company.com",
							...e
						}) }),
						/* @__PURE__ */ a(Qt, {})
					] })
				}),
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: s,
					children: [s && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), "Send reset link"]
				}),
				/* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(X, {
						href: r,
						className: "text-link underline underline-offset-4",
						children: "Back to sign in"
					})
				})
			]
		})
	}) })] });
}
//#endregion
//#region src/components/ui/command.tsx
function Yr({ className: e, ...t }) {
	return /* @__PURE__ */ a(R, {
		"data-slot": "command",
		className: B("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function Xr({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ o(yt, {
		...s,
		children: [/* @__PURE__ */ o(Tt, {
			className: "sr-only",
			children: [/* @__PURE__ */ a(Dt, { children: e }), /* @__PURE__ */ a(Ot, { children: t })]
		}), /* @__PURE__ */ a(wt, {
			className: B("overflow-hidden p-0", r),
			showCloseButton: i,
			children: /* @__PURE__ */ a(Yr, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})
		})]
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(_e, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(R.Input, {
			"data-slot": "command-input",
			className: B("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
			...t
		})]
	});
}
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.List, {
		"data-slot": "command-list",
		className: B("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function $r({ ...e }) {
	return /* @__PURE__ */ a(R.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function ei({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Group, {
		"data-slot": "command-group",
		className: B("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Separator, {
		"data-slot": "command-separator",
		className: B("-mx-1 h-px bg-border", e),
		...t
	});
}
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Item, {
		"data-slot": "command-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function ri({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function ii({ groups: t, open: n, onOpenChange: r, placeholder: i = "Search…", emptyMessage: s = "No results found.", onQueryChange: c, disableShortcut: l }) {
	let [u, d] = e.useState(!1), f = n ?? u, p = r ?? d;
	return e.useEffect(() => {
		if (l) return;
		let e = (e) => {
			e.key === "k" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), p(!f));
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		l,
		f,
		p
	]), /* @__PURE__ */ o(Xr, {
		open: f,
		onOpenChange: p,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(Zr, {
			placeholder: i,
			onValueChange: c
		}), /* @__PURE__ */ o(Qr, { children: [/* @__PURE__ */ a($r, { children: s }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(ti, {}), /* @__PURE__ */ a(ei, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(ni, {
				value: `${e.label} ${e.keywords?.join(" ") ?? ""}`,
				onSelect: () => {
					e.onSelect?.(), p(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ a("span", { children: e.label }),
					e.shortcut && /* @__PURE__ */ a(ri, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function ai({ placeholder: e = "Search…", shortcut: t = "⌘K", className: n, ...r }) {
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: B("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(ge, { className: "size-4 shrink-0" }),
			/* @__PURE__ */ a("span", {
				className: "flex-1 text-left",
				children: e
			}),
			t && /* @__PURE__ */ a("kbd", {
				className: "pointer-events-none hidden h-5 items-center gap-1 rounded border border-border px-1.5 font-sans text-[10px] font-medium sm:inline-flex",
				children: t
			})
		]
	});
}
//#endregion
//#region src/blocks/data/types.ts
var oi = "—", Z = (e) => e == null || e === "" ? "" : String(e);
function si(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var Q = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, ci = (e) => Array.isArray(e) ? e.map(Z) : [Z(e)], li = (e) => (t, n) => {
	if (!e.order) return si(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, ui = (e) => !!e.header;
function di(e, t) {
	if (Q(t)) return e.header;
	let n = ci(t), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
//#endregion
//#region src/blocks/data/use-data-table-views.ts
var fi = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], pi = (e) => `ziku.views.${e}`;
function mi(e, t) {
	return [{
		id: "default",
		name: "All",
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
function hi(e, t, n) {
	let r = mi(t, n), i = {
		views: r,
		activeId: r[0].id
	};
	if (!e || typeof localStorage > "u") return i;
	try {
		let t = localStorage.getItem(pi(e)), n = t ? JSON.parse(t) : null;
		if (!n?.views?.length) return i;
		let a = n, o = [...r.map((e) => {
			let t = a.views.find((t) => t.id === e.id);
			return t ? {
				...e,
				state: t.state
			} : e;
		}), ...a.views.filter((e) => !r.some((t) => t.id === e.id))];
		return {
			views: o,
			activeId: o.some((e) => e.id === a.activeId) ? a.activeId : o[0].id
		};
	} catch {
		return i;
	}
}
function gi(t, n, r, i) {
	let [{ views: a, activeId: o }, s] = e.useState(() => hi(r, t, n)), c = a.find((e) => e.id === o) ?? a[0];
	e.useEffect(() => {
		r && typeof localStorage < "u" && localStorage.setItem(pi(r), JSON.stringify({
			views: a,
			activeId: o
		}));
	}, [
		a,
		o,
		r
	]);
	let l = e.useCallback((e) => {
		s((t) => ({
			...t,
			views: t.views.map((n) => n.id === t.activeId ? {
				...n,
				state: {
					...n.state,
					...e
				}
			} : n)
		}));
	}, []);
	return {
		views: a,
		active: c,
		isPreset: c.id === "default" || n.some((e) => e.id === c.id),
		patch: l,
		select: (e) => s((t) => ({
			...t,
			activeId: e
		})),
		add: (e) => s((t) => {
			let n = `v${t.views.length}-${e.replace(/\W+/g, "-").toLowerCase()}`;
			return {
				views: [...t.views, {
					id: n,
					name: e,
					icon: fi[t.views.length % fi.length],
					state: { ...i }
				}],
				activeId: n
			};
		}),
		rename: (e) => s((t) => ({
			...t,
			views: t.views.map((n) => n.id === t.activeId ? {
				...n,
				name: e
			} : n)
		})),
		setIcon: (e) => s((t) => ({
			...t,
			views: t.views.map((n) => n.id === t.activeId ? {
				...n,
				icon: e
			} : n)
		})),
		remove: () => s((e) => {
			let t = e.views.filter((t) => t.id !== e.activeId);
			return {
				views: t,
				activeId: t[0].id
			};
		}),
		reset: () => l({
			...t,
			...n.find((e) => e.id === c.id)?.state
		})
	};
}
//#endregion
//#region src/blocks/data/data-table-panels.tsx
var _i = {
	table: Te,
	list: E,
	board: we,
	star: k,
	funnel: me,
	clock: ue,
	users: A,
	tag: Ee,
	eye: pe
};
function vi({ name: e, className: t }) {
	let n = _i[e] ?? Te;
	return /* @__PURE__ */ a(n, { className: t });
}
function $({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(sn, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(cn, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(ln, {
			align: r,
			className: B("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function yi({ icon: e, label: t, active: n, width: r, children: i }) {
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
var bi = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function xi({ columns: t, onPick: n, empty: r }) {
	let [s, c] = e.useState(""), l = t.filter((e) => e.header.toLowerCase().includes(s.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(Y, {
			className: "mb-1 h-8",
			placeholder: "Find a column…",
			autoFocus: !0,
			value: s,
			onChange: (e) => c(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: B(bi, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(ye, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		l.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: "No results."
		}),
		l.map((e) => {
			let t = e.icon ?? Te;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: bi,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function Si({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let [l, u] = e.useState(""), d = Array.isArray(r) ? r : [], f = n.filter((e) => e.label.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center justify-between gap-2 border-b px-1 pb-1.5",
		children: [/* @__PURE__ */ o("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: [
				t.header,
				" ",
				t.facet ? "is" : "contains"
			]
		}), /* @__PURE__ */ a("button", {
			type: "button",
			onClick: c,
			title: "Remove filter",
			className: "rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
			children: /* @__PURE__ */ a(De, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(Y, {
			className: "mb-1 h-8",
			placeholder: "Search…",
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		f.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: "No results."
		}),
		f.map((e) => /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
			children: [/* @__PURE__ */ a(vt, {
				checked: d.includes(e.value),
				onCheckedChange: () => s(d.includes(e.value) ? d.filter((t) => t !== e.value) : [...d, e.value])
			}), /* @__PURE__ */ a("span", {
				className: "truncate",
				children: e.label
			})]
		}, e.value)),
		d.length > 0 && /* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => s([]),
			className: "mt-1 w-full border-t px-2 pt-2 text-left text-xs text-link hover:underline",
			children: "Clear selection"
		})
	] }) : /* @__PURE__ */ a(Y, {
		className: "h-8",
		placeholder: "Type a value…",
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function Ci({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(gn, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(yn, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(vn, {})
					}), /* @__PURE__ */ a(bn, { children: [n[t.id], ...s].filter(Boolean).map((e) => /* @__PURE__ */ a(Sn, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(gn, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(yn, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(vn, {})
					}), /* @__PURE__ */ o(bn, { children: [/* @__PURE__ */ a(Sn, {
						value: "asc",
						children: "Ascending"
					}), /* @__PURE__ */ a(Sn, {
						value: "desc",
						children: "Descending"
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: "Remove",
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(ke, {
						className: "size-3.5",
						weight: "bold"
					})
				})
			]
		}, t.id)),
		s.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([...e, {
				id: s[0].key,
				desc: !1
			}]),
			className: B(bi, "text-muted-foreground"),
			children: [/* @__PURE__ */ a(ve, {
				className: "size-3.5",
				weight: "bold"
			}), " Add sort"]
		}),
		e.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([]),
			className: B(bi, "text-danger-fg hover:bg-danger/10"),
			children: [/* @__PURE__ */ a(De, { className: "size-3.5" }), " Remove sorting"]
		})
	] });
}
function wi({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(ui).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(vt, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function Ti({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: s, onSubmit: c }) {
	return /* @__PURE__ */ a($, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ o("form", {
			className: "flex gap-1.5",
			onSubmit: (t) => {
				t.preventDefault();
				let n = String(new FormData(t.currentTarget).get("name") ?? "").trim();
				n && c(n), e();
			},
			children: [/* @__PURE__ */ a(Y, {
				name: "name",
				className: "h-8",
				required: !0,
				autoFocus: !0,
				defaultValue: i
			}), /* @__PURE__ */ a(V, {
				type: "submit",
				size: "sm",
				className: "shrink-0",
				children: s
			})]
		})
	});
}
function Ei({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let [d, f] = e.useState(null), [p, m] = e.useState(!1), h = c.find((e) => e.key === d);
	return h ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => f(null),
			"aria-label": "Back",
			className: "rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
			children: /* @__PURE__ */ a(te, {
				className: "size-3.5",
				weight: "bold"
			})
		}), /* @__PURE__ */ a("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: h.label
		})]
	}), h.panel] }) : /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ a("span", {
				className: "text-xs font-medium text-muted-foreground",
				children: "View settings"
			}), /* @__PURE__ */ a("button", {
				type: "button",
				onClick: u,
				"aria-label": "Close",
				className: "rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
				children: /* @__PURE__ */ a(ke, {
					className: "size-3",
					weight: "bold"
				})
			})]
		}),
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center gap-2",
			children: [/* @__PURE__ */ a("button", {
				type: "button",
				title: "Change the icon",
				onClick: () => m((e) => !e),
				className: B("shrink-0 rounded-md border p-2 hover:bg-accent", p ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(vi, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(Y, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": "View name"
			})]
		}),
		p && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: fi.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), m(!1);
				},
				className: B("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(vi, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => f(e.key),
			className: bi,
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
				/* @__PURE__ */ a(re, { className: "size-3 shrink-0 text-muted-foreground" })
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
var Di = "application/x-ziku-card";
function Oi({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
	let [u, d] = e.useState(null), [f, p] = e.useState(null), m = t.flatMap((e) => e.items), h = u !== null, g = (e) => f === e ? "over" : h ? "ready" : "idle", _ = (e) => ({
		onDragOver: (t) => {
			i && (t.preventDefault(), t.dataTransfer.dropEffect = "move", p(e));
		},
		onDragLeave: () => p(null),
		onDrop: (t) => {
			if (!i) return;
			t.preventDefault(), p(null), d(null);
			let n = t.dataTransfer.getData(Di), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: B("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => /* @__PURE__ */ o("div", {
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
				children: e.items.map((e) => {
					let t = r(e), o = !!i && (!s || s(e));
					return /* @__PURE__ */ a("div", {
						draggable: o,
						onDragStart: (e) => {
							if (!o) return;
							d(t), e.dataTransfer.setData(Di, t), e.dataTransfer.effectAllowed = "move";
							let n = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - n.left, e.clientY - n.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: B("transition-opacity", o ? "cursor-grab active:cursor-grabbing" : "cursor-default", u === t && "opacity-30"),
						children: n(e)
					}, t);
				})
			})]
		}, e.key))
	});
}
//#endregion
//#region src/blocks/data/data-table.tsx
var ki = Je({
	rowSortingFeature: qe,
	sortedRowModel: Ue(),
	columnFilteringFeature: Fe,
	filteredRowModel: Be(),
	globalFilteringFeature: We,
	columnFacetingFeature: Pe,
	facetedRowModel: z(),
	facetedUniqueValues: ze(),
	columnGroupingFeature: Ie,
	groupedRowModel: Ve(),
	rowExpandingFeature: Ge,
	expandedRowModel: Re(),
	columnVisibilityFeature: Le,
	rowPaginationFeature: Ke,
	paginatedRowModel: He()
});
function Ai({ columns: t, data: n, loading: r, empty: s = "No results.", rowId: c, search: l = !0, searchPlaceholder: u = "Search…", toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: ee, presets: te = [], viewKey: ne, onStateChange: ie, className: ae }) {
	let oe = e.useMemo(() => n ?? [], [n]), x = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), ce = e.useMemo(() => ({
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
	]), le = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => x[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => x[e.id]).map((e) => x[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: Q(e.value) ? [] : [Z(e.value)]
		} : e).map((e) => {
			let t = x[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Z(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => x[e])
	}), [x]), S = gi(ce, te, ne, ce), { views: ue, active: C, isPreset: fe, patch: w } = S, T = e.useMemo(() => le(C.state), [C.state, le]);
	e.useEffect(() => {
		ie?.(T);
	}, [T, ie]);
	let E = (e) => (t) => w({ [e]: typeof t == "function" ? t(T[e]) : t }), _e = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : Z(t.getValue()) || "—",
		enableSorting: e.sortable !== !1,
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: ui(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? li(e)(Z(t.getValue(r)), Z(n.getValue(r))) : si(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (Q(n)) return !0;
			let r = Z(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t]), [ye, be] = e.useState(!0), [xe, Ce] = e.useState(0), O = T.grouping[0] ?? "", k = t.filter((e) => e.facet), Ee = !!(y && k.length && c), A = T.mode === "board" && Ee, j = p > 0 && !O && !A, Oe = e.useMemo(() => O && !T.sorting.some((e) => e.id === O) ? [{
		id: O,
		desc: !1
	}, ...T.sorting] : T.sorting, [O, T.sorting]), M = Ye({
		features: ki,
		data: oe,
		columns: _e,
		state: {
			sorting: Oe,
			columnFilters: T.columnFilters,
			globalFilter: T.globalFilter,
			columnVisibility: T.columnVisibility,
			grouping: T.grouping,
			expanded: ye,
			pagination: {
				pageIndex: j ? xe : 0,
				pageSize: j ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: E("sorting"),
		onColumnFiltersChange: E("columnFilters"),
		onGlobalFilterChange: E("globalFilter"),
		onColumnVisibilityChange: E("columnVisibility"),
		onGroupingChange: E("grouping"),
		onExpandedChange: be,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: xe,
				pageSize: j ? p : 2 ** 53 - 1
			}) : e;
			Ce(t.pageIndex);
		},
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Z(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), N = M.getFilteredRowModel().rows;
	e.useEffect(() => {
		Ce(0);
	}, [
		T.columnFilters,
		T.globalFilter,
		T.grouping
	]);
	let P = T.columnFilters, F = Object.values(T.columnVisibility).filter((e) => e === !1).length, Ae = P.length > 0 || !!T.globalFilter || T.grouping.length > 0 || T.sorting.length > 0 || F > 0, je = t.filter((e) => ui(e) && e.sortable !== !1 && !P.some((t) => t.id === e.key)), Me = t.filter((e) => ui(e) && e.sortable !== !1), Ne = (e) => w({ columnFilters: [...P, {
		id: e,
		value: x[e]?.facet ? [] : ""
	}] }), I = (e) => w({ columnFilters: P.filter((t) => t.id !== e) });
	function L(e) {
		return e.facet ? [...M.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => li(e)(Z(t[0]), Z(n[0]))).map(([e, t]) => ({
			value: Z(e),
			label: `${Z(e)} (${t})`
		})) : [];
	}
	let R = (e) => w({
		mode: e,
		grouping: e === "board" && !O ? [k[0].key] : T.grouping
	}), Pe = /* @__PURE__ */ a(wi, {
		columns: t,
		visibility: T.columnVisibility,
		onToggle: (e, t) => w({ columnVisibility: {
			...T.columnVisibility,
			[e]: t
		} })
	}), Fe = /* @__PURE__ */ a(Ci, {
		sorting: T.sorting,
		sortable: Me,
		byKey: x,
		onChange: (e) => w({ sorting: e })
	}), Ie = (e) => /* @__PURE__ */ a(xi, {
		columns: k,
		empty: {
			label: "No grouping",
			onPick: () => {
				w({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			w({ grouping: [t] }), e?.();
		}
	}), Le = /* @__PURE__ */ o(i, { children: [
		P.map((e) => {
			let t = x[e.id];
			if (!t) return null;
			let n = t.icon ?? me;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: di(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => I(e.id),
						"aria-label": `Remove ${t.header}`,
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(ke, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		P.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(xi, {
			columns: je,
			onPick: Ne
		})
	] }), Re = [
		...Ee ? [{
			key: "layout",
			icon: Te,
			label: "Layout",
			value: T.mode === "board" ? "Board" : "Table",
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				D,
				"Table"
			], [
				"board",
				we,
				"Board"
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => R(e),
				className: B("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", T.mode === e && "font-medium"),
				children: [
					/* @__PURE__ */ a(t, { className: "size-4 text-muted-foreground" }),
					" ",
					n
				]
			}, e)) })
		}] : [],
		{
			key: "columns",
			icon: pe,
			label: "Visible columns",
			value: F ? `${F} hidden` : "All",
			panel: Pe
		},
		{
			key: "filter",
			icon: he,
			label: "Filters",
			value: P.length ? String(P.length) : void 0,
			panel: Le
		},
		{
			key: "sort",
			icon: Se,
			label: "Sorting",
			value: T.sorting.length ? T.sorting.length === 1 ? x[T.sorting[0].id]?.header : String(T.sorting.length) : void 0,
			panel: Fe
		},
		...k.length ? [{
			key: "group",
			icon: D,
			label: "Group by",
			value: O ? x[O]?.header : "None",
			panel: Ie()
		}] : []
	], z = O ? x[O] : null, ze = e.useMemo(() => {
		if (!A || !z) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of N) {
			let n = Z(t.getValue(O)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...z.order ?? [], ...e.keys()])].sort(li(z)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: t,
				items: n,
				subtitle: ee?.(n)
			};
		});
	}, [
		A,
		z,
		N,
		O,
		ee
	]), Be = M.getVisibleLeafColumns().length;
	return /* @__PURE__ */ o("div", {
		className: B("overflow-hidden rounded-md border bg-card", ae),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [ue.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => S.select(e.id),
						className: B("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === C.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [/* @__PURE__ */ a(vi, {
							name: e.icon,
							className: "size-4"
						}), e.name]
					}, e.id)), /* @__PURE__ */ a(Ti, {
						align: "start",
						title: "Save the current filters as a new view",
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(ve, {
							className: "size-4",
							weight: "bold"
						}),
						defaultValue: "New view",
						confirmLabel: "Create",
						onSubmit: S.add
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(yi, {
							icon: ge,
							label: "Search",
							active: !!T.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(Y, {
								className: "h-8",
								placeholder: u,
								autoFocus: !0,
								value: T.globalFilter,
								onChange: (e) => w({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(yi, {
							icon: he,
							label: "Filter",
							active: P.length > 0,
							children: (e) => /* @__PURE__ */ a(xi, {
								columns: je,
								onPick: (t) => {
									Ne(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(yi, {
							icon: Se,
							label: "Sort",
							active: T.sorting.length > 0,
							width: "w-88",
							children: Fe
						}),
						k.length > 0 && /* @__PURE__ */ a(yi, {
							icon: D,
							label: "Group",
							active: !!O,
							children: (e) => Ie(e)
						}),
						/* @__PURE__ */ a(yi, {
							icon: pe,
							label: "Columns",
							active: F > 0,
							width: "w-52",
							children: Pe
						}),
						Ee && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								D,
								"Table"
							], [
								"board",
								we,
								"Board"
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => R(e),
								className: B("px-2 py-1", T.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a($, {
							align: "end",
							width: "w-72",
							className: "ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground",
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": "View settings",
								children: /* @__PURE__ */ a(de, {
									className: "size-4",
									weight: "bold"
								})
							}),
							children: (e) => /* @__PURE__ */ a(Ei, {
								name: C.name,
								icon: C.icon,
								onIcon: S.setIcon,
								onRename: S.rename,
								onClose: e,
								rows: Re,
								footer: !fe && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										S.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [/* @__PURE__ */ a(De, { className: "size-4" }), " Delete view"]
								})
							})
						})
					]
				})]
			}),
			(P.length > 0 || T.sorting.length > 0 || O) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					T.sorting.length > 0 && /* @__PURE__ */ a($, {
						width: "w-88",
						className: Mi,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Se, {
									className: "size-3.5",
									weight: "bold"
								}),
								T.sorting.length === 1 ? `${x[T.sorting[0].id]?.header ?? T.sorting[0].id} ${T.sorting[0].desc ? "↓" : "↑"}` : `${T.sorting.length} sorts`,
								/* @__PURE__ */ a(b, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: Fe
					}),
					O && /* @__PURE__ */ a($, {
						className: Mi,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(D, {
									className: "size-3.5",
									weight: "bold"
								}),
								"Grouped by ",
								x[O]?.header.toLowerCase(),
								/* @__PURE__ */ a(b, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => Ie(e)
					}),
					P.map((e) => {
						let t = x[e.id];
						if (!t) return null;
						let n = t.icon ?? me;
						return /* @__PURE__ */ a($, {
							className: Q(e.value) ? Ni : Mi,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: di(t, e.value)
									}),
									/* @__PURE__ */ a(b, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(Si, {
								col: t,
								options: L(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => M.getColumn(e.id)?.setFilterValue(t),
								onRemove: () => {
									I(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a($, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ a(ve, {
								className: "size-3",
								weight: "bold"
							}), " Filter"]
						}),
						children: (e) => /* @__PURE__ */ a(xi, {
							columns: je,
							onPick: (t) => {
								Ne(t), e();
							}
						})
					}),
					Ae && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: S.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [/* @__PURE__ */ a(ke, {
							className: "size-3",
							weight: "bold"
						}), " Clear"]
					})
				]
			}),
			r ? /* @__PURE__ */ a("div", {
				className: "grid gap-2 p-4",
				children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(zn, { className: "h-8 w-full" }, t))
			}) : N.length === 0 ? /* @__PURE__ */ a("div", {
				className: "p-12 text-center text-sm text-muted-foreground",
				children: s
			}) : A ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(Oi, {
					columns: ze,
					itemKey: c,
					renderCard: y,
					onDrop: z?.onSet ? (e, t) => z.onSet(e, t) : void 0,
					canDrag: (e) => !!z?.onSet && (z?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Er, { children: [/* @__PURE__ */ a(Dr, { children: M.getHeaderGroups().map((e) => /* @__PURE__ */ a(Ar, {
					className: "bg-muted/50",
					children: e.headers.map((e) => {
						let t = x[e.column.id], n = e.column.getIsSorted(), r = t?.icon, i = n === "asc" ? se : n === "desc" ? b : Se;
						return /* @__PURE__ */ a(jr, {
							onClick: e.column.getToggleSortingHandler(),
							className: B("whitespace-nowrap", e.column.getCanSort() && "cursor-pointer select-none hover:text-foreground", t?.className),
							children: /* @__PURE__ */ o("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									r && /* @__PURE__ */ a(r, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a(M.FlexRender, { header: e }),
									e.column.getCanSort() && /* @__PURE__ */ a(i, {
										className: B("size-3", n ? "text-foreground" : "opacity-40"),
										weight: "bold"
									})
								]
							})
						}, e.id);
					})
				}, e.id)) }), /* @__PURE__ */ a(Or, { children: M.getRowModel().rows.map((e) => e.getIsGrouped() ? /* @__PURE__ */ a(Ar, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(jr, {
						colSpan: Be,
						onClick: e.getToggleExpandedHandler(),
						className: "cursor-pointer bg-muted/50 text-xs font-semibold tracking-wide uppercase",
						children: /* @__PURE__ */ o("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								e.getIsExpanded() ? /* @__PURE__ */ a(b, {
									className: "size-3",
									weight: "bold"
								}) : /* @__PURE__ */ a(re, {
									className: "size-3",
									weight: "bold"
								}),
								Z(e.getValue(O)) || "—",
								/* @__PURE__ */ a("span", {
									className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
									children: e.subRows.length
								})
							]
						})
					})
				}, e.id) : /* @__PURE__ */ a(Ar, {
					onClick: f ? () => f(e.original) : void 0,
					className: f ? "cursor-pointer" : void 0,
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Mr, {
						className: x[e.column.id]?.className,
						children: /* @__PURE__ */ a(M.FlexRender, { cell: e })
					}, e.id))
				}, e.id)) })] })
			}),
			j && !r && N.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ o("span", { children: [N.length, " row(s)"] }), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ o("span", { children: [
							"Page ",
							xe + 1,
							" of ",
							Math.max(M.getPageCount(), 1)
						] }),
						/* @__PURE__ */ a(V, {
							variant: "outline",
							size: "sm",
							onClick: () => M.previousPage(),
							disabled: !M.getCanPreviousPage(),
							children: "Previous"
						}),
						/* @__PURE__ */ a(V, {
							variant: "outline",
							size: "sm",
							onClick: () => M.nextPage(),
							disabled: !M.getCanNextPage(),
							children: "Next"
						})
					]
				})]
			})
		]
	});
}
var ji = "rounded-md border px-2 py-1.5 text-sm outline-none", Mi = `${ji} border-ring/60 bg-accent font-medium text-foreground`, Ni = `${ji} border-border bg-card text-muted-foreground`;
//#endregion
//#region src/blocks/shell/app-shell.tsx
function Pi(e) {
	return e.split(" ").map((e) => e[0]).slice(0, 2).join("").toUpperCase();
}
function Fi({ brand: e, nav: t, currentPath: n, user: r, userMenu: s, onSignOut: c, headerActions: l, headerContent: u, children: d }) {
	return /* @__PURE__ */ o(Qn, { children: [/* @__PURE__ */ o($n, {
		collapsible: "icon",
		children: [
			/* @__PURE__ */ a(ir, { children: /* @__PURE__ */ a(fr, { children: /* @__PURE__ */ a(pr, { children: /* @__PURE__ */ a(hr, {
				size: "lg",
				asChild: !0,
				children: /* @__PURE__ */ a(X, {
					href: "/",
					children: e
				})
			}) }) }) }),
			/* @__PURE__ */ a(sr, { children: t.map((e, t) => /* @__PURE__ */ o(cr, { children: [e.label && /* @__PURE__ */ a(lr, { children: e.label }), /* @__PURE__ */ a(dr, { children: /* @__PURE__ */ a(fr, { children: e.items.map((e) => /* @__PURE__ */ a(pr, { children: /* @__PURE__ */ a(hr, {
				asChild: !0,
				isActive: n === e.href,
				tooltip: e.title,
				children: /* @__PURE__ */ o(X, {
					href: e.href,
					children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
				})
			}) }, e.href)) }) })] }, e.label ?? t)) }),
			r && /* @__PURE__ */ a(ar, { children: /* @__PURE__ */ a(fr, { children: /* @__PURE__ */ a(pr, { children: /* @__PURE__ */ o(kt, { children: [/* @__PURE__ */ a(jt, {
				asChild: !0,
				children: /* @__PURE__ */ o(hr, {
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
								children: Pi(r.name)
							})]
						}),
						/* @__PURE__ */ o("div", {
							className: "grid flex-1 text-left text-sm leading-tight",
							children: [/* @__PURE__ */ a("span", {
								className: "truncate font-medium",
								children: r.name
							}), /* @__PURE__ */ a("span", {
								className: "truncate text-xs text-muted-foreground",
								children: r.email
							})]
						}),
						/* @__PURE__ */ a(oe, { className: "ml-auto size-4" })
					]
				})
			}), /* @__PURE__ */ o(Mt, {
				side: "top",
				align: "start",
				className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
				children: [
					/* @__PURE__ */ o(Rt, {
						className: "font-normal",
						children: [/* @__PURE__ */ a("div", {
							className: "text-sm font-medium",
							children: r.name
						}), /* @__PURE__ */ a("div", {
							className: "text-xs text-muted-foreground",
							children: r.email
						})]
					}),
					s && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(zt, {}), s] }),
					c && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(zt, {}), /* @__PURE__ */ o(Pt, {
						onSelect: c,
						children: [/* @__PURE__ */ a(xe, {}), "Sign out"]
					})] })
				]
			})] }) }) }) })
		]
	}), /* @__PURE__ */ o(nr, { children: [/* @__PURE__ */ o("header", {
		className: "flex h-14 shrink-0 items-center gap-2 border-b px-4",
		children: [
			/* @__PURE__ */ a(er, { className: "-ml-1" }),
			/* @__PURE__ */ a(En, {
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
//#region src/blocks/page/page-header.tsx
function Ii({ title: e, description: t, actions: n, className: r, ...i }) {
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
function Li({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
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
export { Ze as Alert, $e as AlertDescription, Qe as AlertTitle, Fi as AppShell, Br as AuthLayout, et as Avatar, rt as AvatarBadge, nt as AvatarFallback, it as AvatarGroup, at as AvatarGroupCount, tt as AvatarImage, st as Badge, ct as Breadcrumb, mt as BreadcrumbEllipsis, ut as BreadcrumbItem, dt as BreadcrumbLink, lt as BreadcrumbList, ft as BreadcrumbPage, pt as BreadcrumbSeparator, V as Button, H as Card, gt as CardAction, K as CardContent, G as CardDescription, _t as CardFooter, U as CardHeader, W as CardTitle, vt as Checkbox, ii as CommandMenu, Ai as DataTable, yt as Dialog, St as DialogClose, wt as DialogContent, Ot as DialogDescription, Et as DialogFooter, Tt as DialogHeader, Ct as DialogOverlay, xt as DialogPortal, Dt as DialogTitle, bt as DialogTrigger, kt as DropdownMenu, Ft as DropdownMenuCheckboxItem, Mt as DropdownMenuContent, Nt as DropdownMenuGroup, Pt as DropdownMenuItem, Rt as DropdownMenuLabel, At as DropdownMenuPortal, It as DropdownMenuRadioGroup, Lt as DropdownMenuRadioItem, zt as DropdownMenuSeparator, Bt as DropdownMenuShortcut, Vt as DropdownMenuSub, Ut as DropdownMenuSubContent, Ht as DropdownMenuSubTrigger, jt as DropdownMenuTrigger, Li as EmptyState, Jr as ForgotPasswordForm, Gt as Form, Xt as FormControl, Zt as FormDescription, q as FormField, Jt as FormItem, Yt as FormLabel, Qt as FormMessage, Y as Input, Oi as Kanban, Wt as Label, X as Link, Hr as LinkProvider, Wr as LoginForm, oi as NONE, Ii as PageHeader, $t as Pagination, en as PaginationContent, on as PaginationEllipsis, tn as PaginationItem, nn as PaginationLink, an as PaginationNext, rn as PaginationPrevious, sn as Popover, un as PopoverAnchor, ln as PopoverContent, pn as PopoverDescription, dn as PopoverHeader, fn as PopoverTitle, cn as PopoverTrigger, mn as RadioGroup, hn as RadioGroupItem, Kr as RegisterForm, ai as SearchTrigger, gn as Select, bn as SelectContent, _n as SelectGroup, Sn as SelectItem, xn as SelectLabel, Tn as SelectScrollDownButton, wn as SelectScrollUpButton, Cn as SelectSeparator, yn as SelectTrigger, vn as SelectValue, En as Separator, Dn as Sheet, kn as SheetClose, Mn as SheetContent, In as SheetDescription, Pn as SheetFooter, Nn as SheetHeader, Fn as SheetTitle, On as SheetTrigger, $n as Sidebar, sr as SidebarContent, ar as SidebarFooter, cr as SidebarGroup, ur as SidebarGroupAction, dr as SidebarGroupContent, lr as SidebarGroupLabel, ir as SidebarHeader, rr as SidebarInput, nr as SidebarInset, fr as SidebarMenu, gr as SidebarMenuAction, _r as SidebarMenuBadge, hr as SidebarMenuButton, pr as SidebarMenuItem, vr as SidebarMenuSkeleton, yr as SidebarMenuSub, xr as SidebarMenuSubButton, br as SidebarMenuSubItem, Qn as SidebarProvider, tr as SidebarRail, or as SidebarSeparator, er as SidebarTrigger, zn as Skeleton, Tr as Switch, Er as Table, Or as TableBody, Nr as TableCaption, Mr as TableCell, kr as TableFooter, jr as TableHead, Dr as TableHeader, Ar as TableRow, Pr as Tabs, Rr as TabsContent, Ir as TabsList, Lr as TabsTrigger, zr as Textarea, wr as Toaster, Vn as Tooltip, Un as TooltipContent, Bn as TooltipProvider, Hn as TooltipTrigger, fi as VIEW_ICON_NAMES, ot as badgeVariants, ht as buttonVariants, di as chipLabel, B as cn, si as compare, ki as dataTableFeatures, qr as forgotPasswordSchema, Q as isBlankFilter, ci as labelsOf, Ur as loginSchema, ui as named, li as rank, Gr as registerSchema, Z as str, Fr as tabsListVariants, Ne as toast, gi as useDataTableViews, J as useFormField, Rn as useIsMobile, Zn as useSidebar, Cr as useTheme };
