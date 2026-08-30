import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { CaretDownIcon as ee, CaretDownIcon as te, CaretLeftIcon as ne, CaretLeftIcon as re, CaretRightIcon as ie, CaretRightIcon as ae, CaretRightIcon as oe, CaretUpDownIcon as se, CaretUpIcon as ce, CaretUpIcon as b, CheckCircleIcon as x, CheckIcon as le, CircleIcon as S, ClockIcon as ue, DotsThreeIcon as de, DotsThreeIcon as fe, DotsThreeIcon as C, EnvelopeSimpleIcon as pe, EyeIcon as me, FunnelIcon as he, FunnelSimpleIcon as ge, InfoIcon as w, ListBulletsIcon as _e, MagnifyingGlassIcon as ve, MagnifyingGlassIcon as T, PlusIcon as ye, ProhibitIcon as E, RowsIcon as D, SidebarSimpleIcon as O, SignOutIcon as be, SortAscendingIcon as xe, SpinnerIcon as Se, SpinnerIcon as Ce, SquaresFourIcon as we, StarIcon as Te, TableIcon as Ee, TagIcon as De, TrashIcon as Oe, UsersIcon as k, WarningIcon as A, XCircleIcon as ke, XIcon as Ae, XIcon as j } from "@phosphor-icons/react";
import { Controller as je, FormProvider as Me, useForm as M, useFormContext as N, useFormState as P } from "react-hook-form";
import { Toaster as F, toast as Ne } from "sonner";
import { zodResolver as I } from "@hookform/resolvers/zod";
import { z as L } from "zod";
import { Command as R } from "cmdk";
import { columnFacetingFeature as Pe, columnFilteringFeature as Fe, columnGroupingFeature as Ie, columnVisibilityFeature as Le, createExpandedRowModel as Re, createFacetedRowModel as ze, createFacetedUniqueValues as Be, createFilteredRowModel as Ve, createGroupedRowModel as z, createPaginatedRowModel as He, createSortedRowModel as Ue, globalFilteringFeature as We, rowExpandingFeature as Ge, rowPaginationFeature as Ke, rowSortingFeature as qe, tableFeatures as Je, useTable as Ye } from "@tanstack/react-table";
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
		children: e ?? /* @__PURE__ */ a(ae, {})
	});
}
function mt({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: B("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(fe, { className: "size-4" }), /* @__PURE__ */ a("span", {
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
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: B("px-6", e),
		...t
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: B("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function yt({ className: e, ...t }) {
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
function bt({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function xt({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function St({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Ct({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Tt({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(St, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(wt, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: B("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(j, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: B("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Dt({ className: e, showCloseButton: t = !1, children: n, ...r }) {
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
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: B("text-lg leading-none font-semibold", e),
		...t
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function At({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function jt({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Mt({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Nt({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: B("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Pt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Ft({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg dark:data-[variant=destructive]:focus:bg-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function It({ className: e, children: t, checked: n, ...r }) {
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
function Lt({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Rt({ className: e, children: t, ...n }) {
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
function zt({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: B("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: B("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Ht({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Ut({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: B("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(oe, { className: "ml-auto size-4" })]
	});
}
function Wt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: B("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Gt({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: B("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var Kt = Me, qt = e.createContext({}), K = ({ ...e }) => /* @__PURE__ */ a(qt.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(je, { ...e })
}), Jt = () => {
	let t = e.useContext(qt), n = e.useContext(Yt);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = N(), i = P({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, Yt = e.createContext({});
function Xt({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(Yt.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: B("grid gap-2", t),
			...n
		})
	});
}
function Zt({ className: e, ...t }) {
	let { error: n, formItemId: r } = Jt();
	return /* @__PURE__ */ a(Gt, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: B("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function Qt({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = Jt();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function $t({ className: e, ...t }) {
	let { formDescriptionId: n } = Jt();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
function en({ className: e, ...t }) {
	let { error: n, formMessageId: r } = Jt(), i = n ? String(n?.message ?? "") : t.children;
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
function q({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		className: B("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", e),
		...n
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function tn({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: B("mx-auto flex w-full justify-center", e),
		...t
	});
}
function nn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: B("flex flex-row items-center gap-1", e),
		...t
	});
}
function rn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function an({ className: e, isActive: t, size: n = "icon", ...r }) {
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
function on({ className: e, ...t }) {
	return /* @__PURE__ */ o(an, {
		"aria-label": "Go to previous page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(re, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function sn({ className: e, ...t }) {
	return /* @__PURE__ */ o(an, {
		"aria-label": "Go to next page",
		size: "default",
		className: B("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(oe, {})]
	});
}
function cn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: B("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(C, { className: "size-4" }), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function ln({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function un({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function dn({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: B("z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function fn({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: B("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: B("font-medium", e),
		...t
	});
}
function hn({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: B("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: B("grid gap-3", e),
		...t
	});
}
function _n({ className: e, ...t }) {
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
function vn({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function yn({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function bn({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function xn({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: B("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(te, { className: "size-4 opacity-50" })
		})]
	});
}
function Sn({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: B("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(En, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: B("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Dn, {})
		]
	}) });
}
function Cn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: B("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function wn({ className: e, children: t, ...n }) {
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
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: B("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function En({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(b, { className: "size-4" })
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: B("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(te, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function On({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
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
function kn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function An({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function jn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Mn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: B("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Pn({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ a(Nn, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: B("fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [t, r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ a(j, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: B("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function In({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: B("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Ln({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: B("font-semibold text-foreground", e),
		...t
	});
}
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: B("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var zn = 768;
function Bn() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < zn);
		};
		return e.addEventListener("change", t), n(window.innerWidth < zn), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Vn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: B("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Hn({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Un({ ...e }) {
	return /* @__PURE__ */ a(Hn, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function Wn({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Gn({ className: e, sideOffset: t = 0, children: n, ...r }) {
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
var Kn = "sidebar_state", qn = 604800, Jn = "16rem", Yn = "18rem", Xn = "3rem", Zn = "b", Qn = e.createContext(null);
function $n() {
	let t = e.useContext(Qn);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function er({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Bn(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${Kn}=${t}; path=/; max-age=${qn}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === Zn && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(Qn.Provider, {
		value: v,
		children: /* @__PURE__ */ a(Hn, {
			delayDuration: 0,
			children: /* @__PURE__ */ a("div", {
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": Jn,
					"--sidebar-width-icon": Xn,
					...o
				},
				className: B("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
				...c,
				children: s
			})
		})
	});
}
function tr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, ...s }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = $n();
	return n === "none" ? /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: B("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...s,
		children: i
	}) : c ? /* @__PURE__ */ a(kn, {
		open: u,
		onOpenChange: d,
		...s,
		children: /* @__PURE__ */ o(Pn, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": Yn },
			side: e,
			children: [/* @__PURE__ */ o(Fn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Ln, { children: "Sidebar" }), /* @__PURE__ */ a(Rn, { children: "Displays the mobile sidebar." })]
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
function nr({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = $n();
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
		children: [/* @__PURE__ */ a(O, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function rr({ className: e, ...t }) {
	let { toggleSidebar: n } = $n();
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
function ir({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: B("relative flex w-full flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ a(q, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: B("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: B("flex flex-col gap-2 p-2", e),
		...t
	});
}
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ a(On, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: B("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: B("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: B("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function dr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: B("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function fr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: B("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: B("w-full text-sm", e),
		...t
	});
}
function mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: B("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function hr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: B("group/menu-item relative", e),
		...t
	});
}
var gr = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function _r({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = $n(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: B(gr({
			variant: n,
			size: r
		}), s),
		...c
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(Un, { children: [/* @__PURE__ */ a(Wn, {
		asChild: !0,
		children: f
	}), /* @__PURE__ */ a(Gn, {
		side: "right",
		align: "center",
		hidden: d !== "collapsed" || u,
		...i
	})] })) : f;
}
function vr({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: B("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: B("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function br({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: B("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a(Vn, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Vn, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function xr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: B("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: B("group/menu-sub-item relative", e),
		...t
	});
}
function Cr({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
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
var wr = () => typeof document < "u" && document.documentElement.classList.contains("light") ? "light" : "dark";
function Tr() {
	let [t, n] = e.useState(wr);
	return e.useEffect(() => {
		n(wr());
		let e = new MutationObserver(() => n(wr()));
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []), t;
}
//#endregion
//#region src/components/ui/sonner.tsx
var Er = ({ theme: e, ...t }) => {
	let n = Tr();
	return /* @__PURE__ */ a(F, {
		theme: e ?? n,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ a(x, { className: "size-4" }),
			info: /* @__PURE__ */ a(w, { className: "size-4" }),
			warning: /* @__PURE__ */ a(A, { className: "size-4" }),
			error: /* @__PURE__ */ a(ke, { className: "size-4" }),
			loading: /* @__PURE__ */ a(Ce, { className: "size-4 animate-spin" })
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
function Dr({ className: e, size: t = "default", ...n }) {
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
function Or({ className: e, ...t }) {
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
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: B("[&_tr]:border-b", e),
		...t
	});
}
function Ar({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: B("[&_tr:last-child]:border-0", e),
		...t
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: B("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: B("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: B("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: B("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Fr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: B("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Ir({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: B("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Lr = t("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Rr({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: B(Lr({ variant: t }), e),
		...n
	});
}
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: B("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: B("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		className: B("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Hr({ logo: e, footer: t, className: n, children: r, ...i }) {
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
var Ur = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Wr({ component: e, children: t }) {
	return /* @__PURE__ */ a(Ur.Provider, {
		value: e,
		children: t
	});
}
function J(t) {
	let n = e.useContext(Ur);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/lib/strings.tsx
var Gr = {
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
		noGrouping: "No grouping",
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
function Kr(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function qr(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) Kr(n, e, t, r);
	return n;
}
var Jr = e.createContext(Gr);
function Yr({ strings: t, children: n }) {
	let r = e.useContext(Jr), i = e.useMemo(() => qr(r, t), [r, t]);
	return /* @__PURE__ */ a(Jr.Provider, {
		value: i,
		children: n
	});
}
function Y() {
	return e.useContext(Jr);
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var Xr = (e) => L.object({
	email: L.email(e.invalidEmail),
	password: L.string().min(1, e.passwordRequired)
});
function Zr({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = Y().auth, f = e.useMemo(() => Xr(d), [d]), p = M({
		resolver: I(f),
		defaultValues: {
			email: "",
			password: ""
		}
	}), m = p.formState.isSubmitting;
	return /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(G, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(_t, { children: /* @__PURE__ */ a(Kt, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: n })
				}),
				/* @__PURE__ */ a(K, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Xt, { children: [
						/* @__PURE__ */ a(Zt, { children: d.email }),
						/* @__PURE__ */ a(Qt, { children: /* @__PURE__ */ a(q, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(en, {})
					] })
				}),
				/* @__PURE__ */ a(K, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(Xt, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(Zt, { children: d.password }), l && /* @__PURE__ */ a(J, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(Qt, { children: /* @__PURE__ */ a(q, {
							type: "password",
							autoComplete: "current-password",
							...e
						}) }),
						/* @__PURE__ */ a(en, {})
					] })
				}),
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(Se, { className: "animate-spin" }), d.signIn]
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
						/* @__PURE__ */ a(J, {
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
var Qr = (e) => L.object({
	name: L.string().min(2, e.nameTooShort),
	email: L.email(e.invalidEmail),
	password: L.string().min(8, e.passwordTooShort),
	confirmPassword: L.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function $r({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = Y().auth, d = e.useMemo(() => Qr(u), [u]), f = M({
		resolver: I(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(K, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(Xt, { children: [
			/* @__PURE__ */ a(Zt, { children: t }),
			/* @__PURE__ */ a(Qt, { children: /* @__PURE__ */ a(q, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a($t, { children: r }),
			/* @__PURE__ */ a(en, {})
		] })
	});
	return /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(G, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(_t, { children: /* @__PURE__ */ a(Kt, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: n })
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
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(Se, { className: "animate-spin" }), u.createAccount]
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
						/* @__PURE__ */ a(J, {
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
var ei = (e) => L.object({ email: L.email(e.invalidEmail) });
function ti({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = Y().auth, c = e.useMemo(() => ei(s), [s]), l = M({
		resolver: I(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(pe, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(W, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(G, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(_t, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(J, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(H, { children: [/* @__PURE__ */ o(U, {
		className: "text-center",
		children: [/* @__PURE__ */ a(W, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(G, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(_t, { children: /* @__PURE__ */ a(Kt, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(Ze, {
					variant: "danger",
					children: /* @__PURE__ */ a($e, { children: n })
				}),
				/* @__PURE__ */ a(K, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Xt, { children: [
						/* @__PURE__ */ a(Zt, { children: s.email }),
						/* @__PURE__ */ a(Qt, { children: /* @__PURE__ */ a(q, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(en, {})
					] })
				}),
				/* @__PURE__ */ o(V, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(Se, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(J, {
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
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ a(R, {
		"data-slot": "command",
		className: B("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function ri({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ o(bt, {
		...s,
		children: [/* @__PURE__ */ o(Et, {
			className: "sr-only",
			children: [/* @__PURE__ */ a(Ot, { children: e }), /* @__PURE__ */ a(kt, { children: t })]
		}), /* @__PURE__ */ a(Tt, {
			className: B("overflow-hidden p-0", r),
			showCloseButton: i,
			children: /* @__PURE__ */ a(ni, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})
		})]
	});
}
function ii({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(T, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(R.Input, {
			"data-slot": "command-input",
			className: B("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
			...t
		})]
	});
}
function ai({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.List, {
		"data-slot": "command-list",
		className: B("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function oi({ ...e }) {
	return /* @__PURE__ */ a(R.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function si({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Group, {
		"data-slot": "command-group",
		className: B("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function ci({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Separator, {
		"data-slot": "command-separator",
		className: B("-mx-1 h-px bg-border", e),
		...t
	});
}
function li({ className: e, ...t }) {
	return /* @__PURE__ */ a(R.Item, {
		"data-slot": "command-item",
		className: B("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function ui({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: B("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function di({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
	let u = Y().search, [d, f] = e.useState(!1), p = n ?? d, m = r ?? f;
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
	]), /* @__PURE__ */ o(ri, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(ii, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(ai, { children: [/* @__PURE__ */ a(oi, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(ci, {}), /* @__PURE__ */ a(si, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(li, {
				value: `${e.label} ${e.keywords?.join(" ") ?? ""}`,
				onSelect: () => {
					e.onSelect?.(), m(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ a("span", { children: e.label }),
					e.shortcut && /* @__PURE__ */ a(ui, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function fi({ placeholder: e, shortcut: t = "⌘K", className: n, ...r }) {
	let i = Y().search;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: B("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(ve, { className: "size-4 shrink-0" }),
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
//#region src/blocks/data/types.ts
var pi = "—", X = (e) => e == null || e === "" ? "" : String(e);
function mi(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var hi = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, gi = (e) => Array.isArray(e) ? e.map(X) : [X(e)], _i = (e) => (t, n) => {
	if (!e.order) return mi(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, vi = (e) => !!e.header;
function yi(e, t) {
	if (hi(t)) return e.header;
	let n = gi(t), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
//#endregion
//#region src/lib/storage.ts
var bi = "ziku", Z = bi;
function xi(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Z !== bi && Z !== e) throw Error(`Storage prefix is already "${Z}", cannot change it to "${e}"`);
	Z = e;
}
var Si = () => Z, Ci = (...e) => [Z, ...e].join("."), wi = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Ti = (e) => Ci("views", e);
function Ei(e, t, n = Gr.dataTable.allView) {
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
function Di(e, t, n, r) {
	let i = Ei(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Ti(e)), n = t ? JSON.parse(t) : null;
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
function Oi(t, n, r, i) {
	let a = Y().dataTable.allView, [{ views: o, activeId: s }, c] = e.useState(() => Di(r, t, n, a)), l = o.find((e) => e.id === s) ?? o[0];
	e.useEffect(() => {
		r && typeof localStorage < "u" && localStorage.setItem(Ti(r), JSON.stringify({
			views: o,
			activeId: s
		}));
	}, [
		o,
		s,
		r
	]);
	let u = e.useCallback((e) => {
		c((t) => ({
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
		views: o,
		active: l,
		isPreset: l.id === "default" || n.some((e) => e.id === l.id),
		patch: u,
		select: (e) => c((t) => ({
			...t,
			activeId: e
		})),
		add: (e) => c((t) => {
			let n = `v${t.views.length}-${e.replace(/\W+/g, "-").toLowerCase()}`;
			return {
				views: [...t.views, {
					id: n,
					name: e,
					icon: wi[t.views.length % wi.length],
					state: { ...i }
				}],
				activeId: n
			};
		}),
		rename: (e) => c((t) => ({
			...t,
			views: t.views.map((n) => n.id === t.activeId ? {
				...n,
				name: e
			} : n)
		})),
		setIcon: (e) => c((t) => ({
			...t,
			views: t.views.map((n) => n.id === t.activeId ? {
				...n,
				icon: e
			} : n)
		})),
		remove: () => c((e) => {
			let t = e.views.filter((t) => t.id !== e.activeId);
			return {
				views: t,
				activeId: t[0].id
			};
		}),
		reset: () => u({
			...t,
			...n.find((e) => e.id === l.id)?.state
		})
	};
}
//#endregion
//#region src/blocks/data/data-table-panels.tsx
var ki = {
	table: Ee,
	list: _e,
	board: we,
	star: Te,
	funnel: he,
	clock: ue,
	users: k,
	tag: De,
	eye: me
};
function Ai({ name: e, className: t }) {
	let n = ki[e] ?? Ee;
	return /* @__PURE__ */ a(n, { className: t });
}
function Q({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(ln, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(un, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(dn, {
			align: r,
			className: B("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function ji({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(Q, {
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
var $ = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function Mi({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = Y(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(q, {
			className: "mb-1 h-8",
			placeholder: s.findColumn,
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: B($, "text-muted-foreground"),
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
			let t = e.icon ?? Ee;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: $,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function Ni({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let { dataTable: l, common: u } = Y(), [d, f] = e.useState(""), p = Array.isArray(r) ? r : [], m = n.filter((e) => e.label.toLowerCase().includes(d.toLowerCase()));
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
			children: /* @__PURE__ */ a(Oe, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(q, {
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
			children: [/* @__PURE__ */ a(yt, {
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
	] }) : /* @__PURE__ */ a(q, {
		className: "h-8",
		placeholder: l.typeAValue,
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function Pi({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = Y().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(vn, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(xn, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(bn, {})
					}), /* @__PURE__ */ a(Sn, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(wn, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(vn, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(xn, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(bn, {})
					}), /* @__PURE__ */ o(Sn, { children: [/* @__PURE__ */ a(wn, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(wn, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(Ae, {
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
			className: B($, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(ye, {
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
			className: B($, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(Oe, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function Fi({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(vi).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(yt, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function Ii({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: s, onSubmit: c }) {
	return /* @__PURE__ */ a(Q, {
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
			children: [/* @__PURE__ */ a(q, {
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
function Li({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = Y(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
	return _ ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => m(null),
			"aria-label": d.back,
			className: "rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
			children: /* @__PURE__ */ a(ne, {
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
				children: /* @__PURE__ */ a(Ae, {
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
				children: /* @__PURE__ */ a(Ai, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(q, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": d.viewName
			})]
		}),
		h && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: wi.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: B("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Ai, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: $,
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
				/* @__PURE__ */ a(ie, { className: "size-3 shrink-0 text-muted-foreground" })
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
var Ri = "application/x-ziku-card", zi = {
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
function Bi({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
	let [u, d] = e.useState(null), [f, p] = e.useState(null), m = t.flatMap((e) => e.items), h = u !== null, g = (e) => f === e ? "over" : h ? "ready" : "idle", _ = (e) => ({
		onDragOver: (t) => {
			i && (t.preventDefault(), t.dataTransfer.dropEffect = "move", p(e));
		},
		onDragLeave: () => p(null),
		onDrop: (t) => {
			if (!i) return;
			t.preventDefault(), p(null), d(null);
			let n = t.dataTransfer.getData(Ri), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: B("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(Vi, {
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
				children: e.items.map((e) => {
					let t = r(e), o = !!i && (!s || s(e));
					return /* @__PURE__ */ a("div", {
						draggable: o,
						onDragStart: (e) => {
							if (!o) return;
							d(t), e.dataTransfer.setData(Ri, t), e.dataTransfer.effectAllowed = "move";
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
function Vi({ col: e, state: t, drop: n }) {
	let r = e.tile, i = zi[r.tone];
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
var Hi = Je({
	rowSortingFeature: qe,
	sortedRowModel: Ue(),
	columnFilteringFeature: Fe,
	filteredRowModel: Ve(),
	globalFilteringFeature: We,
	columnFacetingFeature: Pe,
	facetedRowModel: ze(),
	facetedUniqueValues: Be(),
	columnGroupingFeature: Ie,
	groupedRowModel: z(),
	rowExpandingFeature: Ge,
	expandedRowModel: Re(),
	columnVisibilityFeature: Le,
	rowPaginationFeature: Ke,
	paginatedRowModel: He()
});
function Ui({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: te, presets: ne = [], viewKey: re, onStateChange: ae, className: oe }) {
	let se = Y(), b = se.dataTable, x = se.common, le = e.useMemo(() => n ?? [], [n]), S = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), ue = e.useMemo(() => ({
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
	]), fe = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => S[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => S[e.id]).map((e) => S[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: hi(e.value) ? [] : [X(e.value)]
		} : e).map((e) => {
			let t = S[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(X(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => S[e])
	}), [S]), C = Oi(ue, ne, re, ue), { views: pe, active: w, isPreset: _e, patch: T } = C, E = e.useMemo(() => fe(w.state), [w.state, fe]);
	e.useEffect(() => {
		ae?.(E);
	}, [E, ae]);
	let O = (e) => (t) => T({ [e]: typeof t == "function" ? t(E[e]) : t }), be = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : X(t.getValue()) || "—",
		enableSorting: e.sortable !== !1,
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: vi(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? _i(e)(X(t.getValue(r)), X(n.getValue(r))) : mi(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (hi(n)) return !0;
			let r = X(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t]), [Se, Ce] = e.useState(!0), [Te, De] = e.useState(0), k = E.grouping[0] ?? "", A = t.filter((e) => e.facet), ke = !!(y && A.length && c), j = E.mode === "board" && ke, je = p > 0 && !k && !j, Me = e.useMemo(() => k && !E.sorting.some((e) => e.id === k) ? [{
		id: k,
		desc: !1
	}, ...E.sorting] : E.sorting, [k, E.sorting]), M = Ye({
		features: Hi,
		data: le,
		columns: be,
		state: {
			sorting: Me,
			columnFilters: E.columnFilters,
			globalFilter: E.globalFilter,
			columnVisibility: E.columnVisibility,
			grouping: E.grouping,
			expanded: Se,
			pagination: {
				pageIndex: je ? Te : 0,
				pageSize: je ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: O("sorting"),
		onColumnFiltersChange: O("columnFilters"),
		onGlobalFilterChange: O("globalFilter"),
		onColumnVisibilityChange: O("columnVisibility"),
		onGroupingChange: O("grouping"),
		onExpandedChange: Ce,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: Te,
				pageSize: je ? p : 2 ** 53 - 1
			}) : e;
			De(t.pageIndex);
		},
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => X(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), N = M.getFilteredRowModel().rows;
	e.useEffect(() => {
		De(0);
	}, [
		E.columnFilters,
		E.globalFilter,
		E.grouping
	]);
	let P = E.columnFilters, F = Object.values(E.columnVisibility).filter((e) => e === !1).length, Ne = P.length > 0 || !!E.globalFilter || E.grouping.length > 0 || E.sorting.length > 0 || F > 0, I = t.filter((e) => vi(e) && e.sortable !== !1 && !P.some((t) => t.id === e.key)), L = t.filter((e) => vi(e) && e.sortable !== !1), R = (e) => T({ columnFilters: [...P, {
		id: e,
		value: S[e]?.facet ? [] : ""
	}] }), Pe = (e) => T({ columnFilters: P.filter((t) => t.id !== e) });
	function Fe(e) {
		return e.facet ? [...M.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => _i(e)(X(t[0]), X(n[0]))).map(([e, t]) => ({
			value: X(e),
			label: `${X(e)} (${t})`
		})) : [];
	}
	let Ie = (e) => T({
		mode: e,
		grouping: e === "board" && !k ? [A[0].key] : E.grouping
	}), Le = /* @__PURE__ */ a(Fi, {
		columns: t,
		visibility: E.columnVisibility,
		onToggle: (e, t) => T({ columnVisibility: {
			...E.columnVisibility,
			[e]: t
		} })
	}), Re = /* @__PURE__ */ a(Pi, {
		sorting: E.sorting,
		sortable: L,
		byKey: S,
		onChange: (e) => T({ sorting: e })
	}), ze = (e) => /* @__PURE__ */ a(Mi, {
		columns: A,
		empty: {
			label: b.noGrouping,
			onPick: () => {
				T({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			T({ grouping: [t] }), e?.();
		}
	}), Be = /* @__PURE__ */ o(i, { children: [
		P.map((e) => {
			let t = S[e.id];
			if (!t) return null;
			let n = t.icon ?? he;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: yi(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => Pe(e.id),
						"aria-label": `Remove ${t.header}`,
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(Ae, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		P.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(Mi, {
			columns: I,
			onPick: R
		})
	] }), Ve = [
		...ke ? [{
			key: "layout",
			icon: Ee,
			label: b.layout,
			value: E.mode === "board" ? b.board : b.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				D,
				b.table
			], [
				"board",
				we,
				b.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => Ie(e),
				className: B("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", E.mode === e && "font-medium"),
				children: [
					/* @__PURE__ */ a(t, { className: "size-4 text-muted-foreground" }),
					" ",
					n
				]
			}, e)) })
		}] : [],
		{
			key: "columns",
			icon: me,
			label: b.visibleColumns,
			value: F ? b.hidden(F) : b.allView,
			panel: Le
		},
		{
			key: "filter",
			icon: ge,
			label: b.filters,
			value: P.length ? String(P.length) : void 0,
			panel: Be
		},
		{
			key: "sort",
			icon: xe,
			label: b.sorting,
			value: E.sorting.length ? E.sorting.length === 1 ? S[E.sorting[0].id]?.header : String(E.sorting.length) : void 0,
			panel: Re
		},
		...A.length ? [{
			key: "group",
			icon: D,
			label: b.groupBy,
			value: k ? S[k]?.header : x.none,
			panel: ze()
		}] : []
	], z = k ? S[k] : null, He = e.useMemo(() => {
		if (!j || !z) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of N) {
			let n = X(t.getValue(k)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...z.order ?? [], ...e.keys()])].sort(_i(z)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: t,
				items: n,
				subtitle: te?.(n),
				tile: z.boardTile?.(t)
			};
		});
	}, [
		j,
		z,
		N,
		k,
		te
	]), Ue = M.getVisibleLeafColumns().length;
	return /* @__PURE__ */ o("div", {
		className: B("overflow-hidden rounded-md border bg-card", oe),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [pe.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => C.select(e.id),
						className: B("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === w.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [/* @__PURE__ */ a(Ai, {
							name: e.icon,
							className: "size-4"
						}), e.name]
					}, e.id)), /* @__PURE__ */ a(Ii, {
						align: "start",
						title: b.saveView,
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(ye, {
							className: "size-4",
							weight: "bold"
						}),
						defaultValue: b.newView,
						confirmLabel: b.createView,
						onSubmit: C.add
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(ji, {
							icon: ve,
							label: x.search,
							active: !!E.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(q, {
								className: "h-8",
								placeholder: u ?? x.searchPlaceholder,
								autoFocus: !0,
								value: E.globalFilter,
								onChange: (e) => T({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(ji, {
							icon: ge,
							label: b.filter,
							active: P.length > 0,
							children: (e) => /* @__PURE__ */ a(Mi, {
								columns: I,
								onPick: (t) => {
									R(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(ji, {
							icon: xe,
							label: b.sort,
							active: E.sorting.length > 0,
							width: "w-88",
							children: Re
						}),
						A.length > 0 && /* @__PURE__ */ a(ji, {
							icon: D,
							label: b.group,
							active: !!k,
							children: (e) => ze(e)
						}),
						/* @__PURE__ */ a(ji, {
							icon: me,
							label: b.visibleColumns,
							active: F > 0,
							width: "w-52",
							children: Le
						}),
						ke && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								D,
								b.table
							], [
								"board",
								we,
								b.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => Ie(e),
								className: B("px-2 py-1", E.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(Q, {
							align: "end",
							width: "w-72",
							className: "ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground",
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": b.viewSettings,
								children: /* @__PURE__ */ a(de, {
									className: "size-4",
									weight: "bold"
								})
							}),
							children: (e) => /* @__PURE__ */ a(Li, {
								name: w.name,
								icon: w.icon,
								onIcon: C.setIcon,
								onRename: C.rename,
								onClose: e,
								rows: Ve,
								footer: !_e && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										C.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [
										/* @__PURE__ */ a(Oe, { className: "size-4" }),
										" ",
										b.deleteView
									]
								})
							})
						})
					]
				})]
			}),
			(P.length > 0 || E.sorting.length > 0 || k) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					E.sorting.length > 0 && /* @__PURE__ */ a(Q, {
						width: "w-88",
						className: Gi,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(xe, {
									className: "size-3.5",
									weight: "bold"
								}),
								E.sorting.length === 1 ? `${S[E.sorting[0].id]?.header ?? E.sorting[0].id} ${E.sorting[0].desc ? "↓" : "↑"}` : `${E.sorting.length} sorts`,
								/* @__PURE__ */ a(ee, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: Re
					}),
					k && /* @__PURE__ */ a(Q, {
						className: Gi,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(D, {
									className: "size-3.5",
									weight: "bold"
								}),
								b.groupedBy(S[k]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(ee, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => ze(e)
					}),
					P.map((e) => {
						let t = S[e.id];
						if (!t) return null;
						let n = t.icon ?? he;
						return /* @__PURE__ */ a(Q, {
							className: hi(e.value) ? Ki : Gi,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: yi(t, e.value)
									}),
									/* @__PURE__ */ a(ee, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(Ni, {
								col: t,
								options: Fe(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => M.getColumn(e.id)?.setFilterValue(t),
								onRemove: () => {
									Pe(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(Q, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(ye, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								b.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(Mi, {
							columns: I,
							onPick: (t) => {
								R(t), e();
							}
						})
					}),
					Ne && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: C.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(Ae, {
								className: "size-3",
								weight: "bold"
							}),
							" ",
							b.clearFilters
						]
					})
				]
			}),
			r ? /* @__PURE__ */ a("div", {
				className: "grid gap-2 p-4",
				children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(Vn, { className: "h-8 w-full" }, t))
			}) : N.length === 0 ? /* @__PURE__ */ a("div", {
				className: "p-12 text-center text-sm text-muted-foreground",
				children: s ?? x.noResults
			}) : j ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(Bi, {
					columns: He,
					itemKey: c,
					renderCard: y,
					onDrop: z?.onSet ? (e, t) => z.onSet(e, t) : void 0,
					canDrag: (e) => !!z?.onSet && (z?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ a(kr, { children: M.getHeaderGroups().map((e) => /* @__PURE__ */ a(Mr, {
					className: "bg-muted/50",
					children: e.headers.map((e) => {
						let t = S[e.column.id], n = e.column.getIsSorted(), r = t?.icon, i = n === "asc" ? ce : n === "desc" ? ee : xe;
						return /* @__PURE__ */ a(Nr, {
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
				}, e.id)) }), /* @__PURE__ */ a(Ar, { children: M.getRowModel().rows.map((e) => e.getIsGrouped() ? /* @__PURE__ */ a(Mr, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(Nr, {
						colSpan: Ue,
						onClick: e.getToggleExpandedHandler(),
						className: "cursor-pointer bg-muted/50 text-xs font-semibold tracking-wide uppercase",
						children: /* @__PURE__ */ o("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								e.getIsExpanded() ? /* @__PURE__ */ a(ee, {
									className: "size-3",
									weight: "bold"
								}) : /* @__PURE__ */ a(ie, {
									className: "size-3",
									weight: "bold"
								}),
								X(e.getValue(k)) || "—",
								/* @__PURE__ */ a("span", {
									className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
									children: e.subRows.length
								})
							]
						})
					})
				}, e.id) : /* @__PURE__ */ a(Mr, {
					onClick: f ? () => f(e.original) : void 0,
					className: f ? "cursor-pointer" : void 0,
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Pr, {
						className: S[e.column.id]?.className,
						children: /* @__PURE__ */ a(M.FlexRender, { cell: e })
					}, e.id))
				}, e.id)) })] })
			}),
			je && !r && N.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", { children: b.rowCount(N.length) }), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: b.pageOf(Te + 1, Math.max(M.getPageCount(), 1)) }),
						/* @__PURE__ */ a(V, {
							variant: "outline",
							size: "sm",
							onClick: () => M.previousPage(),
							disabled: !M.getCanPreviousPage(),
							children: b.previousPage
						}),
						/* @__PURE__ */ a(V, {
							variant: "outline",
							size: "sm",
							onClick: () => M.nextPage(),
							disabled: !M.getCanNextPage(),
							children: b.nextPage
						})
					]
				})]
			})
		]
	});
}
var Wi = "rounded-md border px-2 py-1.5 text-sm outline-none", Gi = `${Wi} border-ring/60 bg-accent font-medium text-foreground`, Ki = `${Wi} border-border bg-card text-muted-foreground`;
//#endregion
//#region src/blocks/shell/app-shell.tsx
function qi(e) {
	return e.split(" ").map((e) => e[0]).slice(0, 2).join("").toUpperCase();
}
function Ji({ brand: e, nav: t, currentPath: n, user: r, userMenu: s, onSignOut: c, headerActions: l, headerContent: u, children: d }) {
	let f = Y().shell;
	return /* @__PURE__ */ o(er, { children: [/* @__PURE__ */ o(tr, {
		collapsible: "icon",
		children: [
			/* @__PURE__ */ a(or, { children: /* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ a(_r, {
				size: "lg",
				asChild: !0,
				children: /* @__PURE__ */ a(J, {
					href: "/",
					children: e
				})
			}) }) }) }),
			/* @__PURE__ */ a(lr, { children: t.map((e, t) => /* @__PURE__ */ o(ur, { children: [e.label && /* @__PURE__ */ a(dr, { children: e.label }), /* @__PURE__ */ a(pr, { children: /* @__PURE__ */ a(mr, { children: e.items.map((e) => /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ a(_r, {
				asChild: !0,
				isActive: n === e.href,
				tooltip: e.title,
				children: /* @__PURE__ */ o(J, {
					href: e.href,
					children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
				})
			}) }, e.href)) }) })] }, e.label ?? t)) }),
			r && /* @__PURE__ */ a(sr, { children: /* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(hr, { children: /* @__PURE__ */ o(At, { children: [/* @__PURE__ */ a(Mt, {
				asChild: !0,
				children: /* @__PURE__ */ o(_r, {
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
								children: qi(r.name)
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
			}), /* @__PURE__ */ o(Nt, {
				side: "top",
				align: "start",
				className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
				children: [
					/* @__PURE__ */ o(zt, {
						className: "font-normal",
						children: [/* @__PURE__ */ a("div", {
							className: "text-sm font-medium",
							children: r.name
						}), /* @__PURE__ */ a("div", {
							className: "text-xs text-muted-foreground",
							children: r.email
						})]
					}),
					s && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Bt, {}), s] }),
					c && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Bt, {}), /* @__PURE__ */ o(Ft, {
						onSelect: c,
						children: [/* @__PURE__ */ a(be, {}), f.signOut]
					})] })
				]
			})] }) }) }) })
		]
	}), /* @__PURE__ */ o(ir, { children: [/* @__PURE__ */ o("header", {
		className: "flex h-14 shrink-0 items-center gap-2 border-b px-4",
		children: [
			/* @__PURE__ */ a(nr, { className: "-ml-1" }),
			/* @__PURE__ */ a(On, {
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
var Yi = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function Xi({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = Y().modal;
	return /* @__PURE__ */ a(bt, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Tt, {
			showCloseButton: !1,
			className: B("flex max-h-[92dvh] flex-col gap-0 p-0", Yi[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Ot, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(kt, { children: r })]
					}), /* @__PURE__ */ a(Ct, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(Ae, {
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
function Zi({ title: e, description: t, actions: n, className: r, ...i }) {
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
function Qi({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
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
export { Ze as Alert, $e as AlertDescription, Qe as AlertTitle, Ji as AppShell, Hr as AuthLayout, et as Avatar, rt as AvatarBadge, nt as AvatarFallback, it as AvatarGroup, at as AvatarGroupCount, tt as AvatarImage, st as Badge, ct as Breadcrumb, mt as BreadcrumbEllipsis, ut as BreadcrumbItem, dt as BreadcrumbLink, lt as BreadcrumbList, ft as BreadcrumbPage, pt as BreadcrumbSeparator, V as Button, H as Card, gt as CardAction, _t as CardContent, G as CardDescription, vt as CardFooter, U as CardHeader, W as CardTitle, yt as Checkbox, di as CommandMenu, Ui as DataTable, bt as Dialog, Ct as DialogClose, Tt as DialogContent, kt as DialogDescription, Dt as DialogFooter, Et as DialogHeader, wt as DialogOverlay, St as DialogPortal, Ot as DialogTitle, xt as DialogTrigger, At as DropdownMenu, It as DropdownMenuCheckboxItem, Nt as DropdownMenuContent, Pt as DropdownMenuGroup, Ft as DropdownMenuItem, zt as DropdownMenuLabel, jt as DropdownMenuPortal, Lt as DropdownMenuRadioGroup, Rt as DropdownMenuRadioItem, Bt as DropdownMenuSeparator, Vt as DropdownMenuShortcut, Ht as DropdownMenuSub, Wt as DropdownMenuSubContent, Ut as DropdownMenuSubTrigger, Mt as DropdownMenuTrigger, Qi as EmptyState, ti as ForgotPasswordForm, Kt as Form, Qt as FormControl, $t as FormDescription, K as FormField, Xt as FormItem, Zt as FormLabel, en as FormMessage, q as Input, Bi as Kanban, Gt as Label, J as Link, Wr as LinkProvider, Zr as LoginForm, Xi as Modal, pi as NONE, Zi as PageHeader, tn as Pagination, nn as PaginationContent, cn as PaginationEllipsis, rn as PaginationItem, an as PaginationLink, sn as PaginationNext, on as PaginationPrevious, ln as Popover, fn as PopoverAnchor, dn as PopoverContent, hn as PopoverDescription, pn as PopoverHeader, mn as PopoverTitle, un as PopoverTrigger, gn as RadioGroup, _n as RadioGroupItem, $r as RegisterForm, fi as SearchTrigger, vn as Select, Sn as SelectContent, yn as SelectGroup, wn as SelectItem, Cn as SelectLabel, Dn as SelectScrollDownButton, En as SelectScrollUpButton, Tn as SelectSeparator, xn as SelectTrigger, bn as SelectValue, On as Separator, kn as Sheet, jn as SheetClose, Pn as SheetContent, Rn as SheetDescription, In as SheetFooter, Fn as SheetHeader, Ln as SheetTitle, An as SheetTrigger, tr as Sidebar, lr as SidebarContent, sr as SidebarFooter, ur as SidebarGroup, fr as SidebarGroupAction, pr as SidebarGroupContent, dr as SidebarGroupLabel, or as SidebarHeader, ar as SidebarInput, ir as SidebarInset, mr as SidebarMenu, vr as SidebarMenuAction, yr as SidebarMenuBadge, _r as SidebarMenuButton, hr as SidebarMenuItem, br as SidebarMenuSkeleton, xr as SidebarMenuSub, Cr as SidebarMenuSubButton, Sr as SidebarMenuSubItem, er as SidebarProvider, rr as SidebarRail, cr as SidebarSeparator, nr as SidebarTrigger, Vn as Skeleton, Dr as Switch, Or as Table, Ar as TableBody, Fr as TableCaption, Pr as TableCell, jr as TableFooter, Nr as TableHead, kr as TableHeader, Mr as TableRow, Ir as Tabs, Br as TabsContent, Rr as TabsList, zr as TabsTrigger, Vr as Textarea, Er as Toaster, Un as Tooltip, Gn as TooltipContent, Hn as TooltipProvider, Wn as TooltipTrigger, Yr as UIStringsProvider, wi as VIEW_ICON_NAMES, ot as badgeVariants, ht as buttonVariants, yi as chipLabel, B as cn, mi as compare, Hi as dataTableFeatures, Gr as defaultStrings, ei as forgotPasswordSchema, hi as isBlankFilter, gi as labelsOf, Xr as loginSchema, vi as named, _i as rank, Qr as registerSchema, xi as setStoragePrefix, Ci as storageKey, Si as storagePrefix, X as str, Lr as tabsListVariants, Ne as toast, Oi as useDataTableViews, Jt as useFormField, Bn as useIsMobile, $n as useSidebar, Y as useStrings, Tr as useTheme };
