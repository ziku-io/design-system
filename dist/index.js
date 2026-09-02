import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { ArrowsOutCardinalIcon as b, CaretDownIcon as x, CaretDownIcon as S, CaretLeftIcon as ee, CaretLeftIcon as C, CaretRightIcon as te, CaretRightIcon as ne, CaretRightIcon as re, CaretUpDownIcon as w, CaretUpIcon as ie, CaretUpIcon as ae, CheckCircleIcon as oe, CheckIcon as se, CheckIcon as T, CircleIcon as ce, ClockIcon as le, DesktopIcon as E, DotsThreeIcon as ue, DotsThreeIcon as D, DotsThreeIcon as de, DownloadSimpleIcon as fe, EnvelopeSimpleIcon as pe, EyeIcon as me, FunnelIcon as he, FunnelSimpleIcon as ge, InfoIcon as O, ListBulletsIcon as _e, MagnifyingGlassIcon as ve, MagnifyingGlassIcon as k, MoonIcon as ye, PlusIcon as be, ProhibitIcon as A, RowsIcon as xe, SidebarSimpleIcon as j, SignOutIcon as Se, SortAscendingIcon as Ce, SpinnerIcon as we, SpinnerIcon as Te, SquaresFourIcon as Ee, StarIcon as De, SunIcon as Oe, TableIcon as ke, TagIcon as Ae, TrashIcon as je, UsersIcon as Me, WarningCircleIcon as M, WarningIcon as Ne, XCircleIcon as Pe, XIcon as Fe, XIcon as N } from "@phosphor-icons/react";
import { Controller as Ie, FormProvider as Le, useForm as Re, useFormContext as ze, useFormState as P } from "react-hook-form";
import { Toaster as Be, toast as Ve } from "sonner";
import { zodResolver as He } from "@hookform/resolvers/zod";
import { z as F } from "zod";
import { Command as I } from "cmdk";
import { columnFacetingFeature as Ue, columnFilteringFeature as We, columnGroupingFeature as Ge, columnVisibilityFeature as Ke, createExpandedRowModel as L, createFacetedRowModel as qe, createFacetedUniqueValues as Je, createFilteredRowModel as Ye, createGroupedRowModel as Xe, createPaginatedRowModel as Ze, createSortedRowModel as Qe, globalFilteringFeature as $e, rowExpandingFeature as et, rowPaginationFeature as tt, rowSortingFeature as nt, tableFeatures as rt, useTable as it } from "@tanstack/react-table";
import { useVirtualizer as at } from "@tanstack/react-virtual";
//#region src/lib/utils.ts
function R(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var ot = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
function z({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: R(ot({ variant: t }), e),
		...n
	});
}
function st({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: R("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: R("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function B(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function lt({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: R("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function ut({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: R("aspect-square size-full", e),
		...t
	});
}
function dt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: R("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function ft({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: R("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function V({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: R("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: R("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
function H({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(lt, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(ut, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(dt, { children: n ?? B(e) })]
	});
}
function U({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(V, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(H, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(pt, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var mt = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
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
function ht({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? g.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: R(mt({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function gt({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: R("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: R("inline-flex items-center gap-1.5", e),
		...t
	});
}
function yt({ asChild: e, className: t, ...n }) {
	let r = e ? g.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: R("transition-colors hover:text-foreground", t),
		...n
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: R("font-normal text-foreground", e),
		...t
	});
}
function xt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: R("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(ne, {})
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: R("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(D, {
			"aria-hidden": "true",
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var Ct = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:shadow-[inset_0_0_0_100vmax_rgb(0_0_0/0.08)]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			danger: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			success: "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/40",
			warning: "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/40",
			destructive: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline active:shadow-none"
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
		className: R(Ct({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/card.tsx
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		className: R("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", e),
		...t
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: R("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: R("leading-none font-semibold", e),
		...t
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: R("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: R("px-6", e),
		...t
	});
}
function At({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: R("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: R("peer relative size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(T, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function Mt({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function Nt({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Pt({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Ft({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: R("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Lt({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(Pt, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(It, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: R("fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(N, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: R("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function zt({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: R("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
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
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: R("text-lg leading-none font-semibold", e),
		...t
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Ht({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Ut({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Wt({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Gt({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: R("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Kt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function qt({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: R("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg dark:data-[variant=destructive]:focus:bg-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function Jt({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: R("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(T, { className: "size-4" }) })
		}), t]
	});
}
function Yt({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Xt({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: R("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(ce, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function Zt({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: R("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function Qt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: R("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function $t({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: R("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function en({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function tn({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: R("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(re, { className: "ml-auto size-4" })]
	});
}
function nn({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: R("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function rn({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: R("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var an = Le, on = e.createContext({}), sn = ({ ...e }) => /* @__PURE__ */ a(on.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(Ie, { ...e })
}), cn = () => {
	let t = e.useContext(on), n = e.useContext(ln);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = ze(), i = P({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, ln = e.createContext({});
function un({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(ln.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: R("grid gap-2", t),
			...n
		})
	});
}
function dn({ className: e, ...t }) {
	let { error: n, formItemId: r } = cn();
	return /* @__PURE__ */ a(rn, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: R("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function fn({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = cn();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function pn({ className: e, ...t }) {
	let { formDescriptionId: n } = cn();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
function mn({ className: e, ...t }) {
	let { error: n, formMessageId: r } = cn(), i = n ? String(n?.message ?? "") : t.children;
	return i ? /* @__PURE__ */ a("p", {
		"data-slot": "form-message",
		id: r,
		role: n ? "alert" : void 0,
		className: R("text-sm text-danger-fg", e),
		...t,
		children: i
	}) : null;
}
//#endregion
//#region src/lib/field-variants.ts
var hn = {
	ghost: "rounded-sm border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, gn = t(R("h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"), {
	variants: { variant: {
		default: "border border-input bg-transparent shadow-xs focus-visible:border-ring dark:bg-input/30",
		ghost: hn.ghost,
		cell: `h-8 px-2 ${hn.cell}`
	} },
	defaultVariants: { variant: "default" }
});
function G({ className: e, type: t, variant: n, ...r }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		className: R(gn({ variant: n }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: R("mx-auto flex w-full justify-center", e),
		...t
	});
}
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: R("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function yn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function bn({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: R(Ct({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function xn({ className: e, ...t }) {
	return /* @__PURE__ */ o(bn, {
		"aria-label": "Go to previous page",
		size: "default",
		className: R("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(C, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function Sn({ className: e, ...t }) {
	return /* @__PURE__ */ o(bn, {
		"aria-label": "Go to next page",
		size: "default",
		className: R("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(re, {})]
	});
}
function Cn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: R("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(de, {
			"aria-hidden": !0,
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function wn({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function Tn({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function En({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: R("z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function Dn({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function On({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: R("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: R("font-medium", e),
		...t
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: R("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: R("grid gap-3", e),
		...t
	});
}
function Mn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Item, {
		"data-slot": "radio-group-item",
		className: R("relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t,
		children: /* @__PURE__ */ a(p.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(ce, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function Nn({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function Pn({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function Fn({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function In({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: R("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? hn[r] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...i,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(S, { className: "size-4 opacity-50" })
		})]
	});
}
function Ln({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: R("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(Vn, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: R("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Hn, {})
		]
	}) });
}
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: R("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function zn({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(m.Item, {
		"data-slot": "select-item",
		className: R("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(m.ItemIndicator, { children: /* @__PURE__ */ a(T, { className: "size-4" }) })
		}), /* @__PURE__ */ a(m.ItemText, { children: t })]
	});
}
function Bn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: R("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Vn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: R("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(ae, { className: "size-4" })
	});
}
function Hn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: R("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(S, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Un({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: R("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Wn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Gn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Kn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function qn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: R("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Yn({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(qn, { children: [/* @__PURE__ */ a(Jn, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: R("fixed z-50 flex flex-col bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto max-h-dvh border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto max-h-dvh border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [/* @__PURE__ */ a("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain",
			children: t
		}), r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary sm:-m-2 sm:p-2",
			children: [/* @__PURE__ */ a(N, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function Xn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: R("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function Zn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: R("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Qn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: R("font-semibold text-foreground", e),
		...t
	});
}
function $n({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var er = 768;
function tr() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < er);
		};
		return e.addEventListener("change", t), n(window.innerWidth < er), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: R("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function rr({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function ir({ ...e }) {
	return /* @__PURE__ */ a(rr, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function ar({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function or({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ o(y.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: R("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-tooltip px-3 py-1.5 text-xs text-balance text-tooltip-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ a(y.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-tooltip fill-tooltip" })]
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var sr = "sidebar_state", cr = 604800, lr = "16rem", ur = "18rem", dr = "3rem", fr = "b", pr = e.createContext(null);
function mr() {
	let t = e.useContext(pr);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function hr({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = tr(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${sr}=${t}; path=/; max-age=${cr}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === fr && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(pr.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": lr,
				"--sidebar-width-icon": dr,
				...o
			},
			className: R("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function gr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: l, state: u, openMobile: d, setOpenMobile: f } = mr();
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: R("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (l) return /* @__PURE__ */ a(Wn, {
		open: d,
		onOpenChange: f,
		...c,
		children: /* @__PURE__ */ o(Yn, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": ur },
			side: e,
			children: [/* @__PURE__ */ o(Xn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Qn, { children: "Sidebar" }), /* @__PURE__ */ a($n, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ a("div", {
				className: "flex h-full w-full flex-col",
				children: s
			})]
		})
	});
	let p = n === "offcanvas";
	return /* @__PURE__ */ o("div", {
		className: R("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": u,
		"data-collapsible": u === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: R("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", p ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: R("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", p ? ["transition-transform duration-200 ease-linear", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
			...c,
			children: /* @__PURE__ */ a("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm",
				children: s
			})
		})]
	});
}
function _r({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = mr();
	return /* @__PURE__ */ o(W, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: R("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(j, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function vr({ className: e, ...t }) {
	let { toggleSidebar: n } = mr();
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: n,
		title: "Toggle Sidebar",
		className: R("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-transform ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: R("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ a(G, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: R("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function xr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: R("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: R("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Cr({ className: e, ...t }) {
	return /* @__PURE__ */ a(Un, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: R("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: R("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function Tr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: R("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function Er({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: R("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-opacity duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function Dr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: R("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function Or({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: R("w-full text-sm", e),
		...t
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: R("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function Ar({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: R("group/menu-item relative", e),
		...t
	});
}
var jr = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function Mr({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = mr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: R(jr({
			variant: n,
			size: r
		}), s),
		...c
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(ir, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(ar, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(or, {
			side: "right",
			align: "center",
			hidden: d !== "collapsed" || u,
			...i
		})]
	})) : f;
}
function Nr({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: R("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: R("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Fr({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useId(), s = e.useMemo(() => {
		let e = 0;
		for (let t = 0; t < i.length; t++) e = e * 31 + i.charCodeAt(t) | 0;
		return `${Math.abs(e) % 41 + 50}%`;
	}, [i]);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: R("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a(nr, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(nr, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function Ir({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: R("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: R("group/menu-sub-item relative", e),
		...t
	});
}
function Rr({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? g.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: R("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/hooks/use-theme.ts
var zr = () => typeof document < "u" && document.documentElement.classList.contains("light") ? "light" : "dark";
function Br() {
	let [t, n] = e.useState(zr);
	return e.useEffect(() => {
		n(zr());
		let e = new MutationObserver(() => n(zr()));
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []), t;
}
//#endregion
//#region src/components/ui/sonner.tsx
var Vr = ({ theme: e, ...t }) => {
	let n = Br();
	return /* @__PURE__ */ a(Be, {
		theme: e ?? n,
		className: "toaster group",
		closeButton: !0,
		icons: {
			success: /* @__PURE__ */ a(oe, { className: "size-4" }),
			info: /* @__PURE__ */ a(O, { className: "size-4" }),
			warning: /* @__PURE__ */ a(Ne, { className: "size-4" }),
			error: /* @__PURE__ */ a(Pe, { className: "size-4" }),
			loading: /* @__PURE__ */ a(Te, { className: "size-4 animate-spin" })
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
function Hr({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(_.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: R("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-[background-color,border-color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", e),
		...n,
		children: /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "switch-thumb",
			className: R("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function Ur({ className: e, containerClassName: t, containerRef: n, ...r }) {
	return /* @__PURE__ */ a("div", {
		ref: n,
		"data-slot": "table-container",
		className: R("relative w-full overflow-x-auto", t),
		children: /* @__PURE__ */ a("table", {
			"data-slot": "table",
			className: R("w-full caption-bottom text-sm", e),
			...r
		})
	});
}
function Wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: R("[&_tr]:border-b", e),
		...t
	});
}
function Gr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: R("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: R("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: R("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: R("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: R("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: R("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Xr({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: R("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Zr = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Qr({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: R(Zr({ variant: t }), e),
		...n
	});
}
function $r({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: R("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function ei({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: R("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function ti({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: R("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40", t ? hn[t] : "border border-input bg-transparent shadow-xs focus-visible:border-ring dark:bg-input/30", e),
		...n
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function ni({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: R("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
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
var ri = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function ii({ component: e, children: t }) {
	return /* @__PURE__ */ a(ri.Provider, {
		value: e,
		children: t
	});
}
function q(t) {
	let n = e.useContext(ri);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/lib/strings.tsx
var ai = new Intl.NumberFormat(), oi = (e) => ai.format(e), si = {
	common: {
		close: "Close",
		cancel: "Cancel",
		create: "Create",
		search: "Search",
		searchPlaceholder: "Search…",
		noResults: "No results.",
		all: "All",
		none: "None",
		loadFailed: "This did not load.",
		retry: "Try again",
		crashed: "Something went wrong on this screen.",
		confirm: "Confirm"
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
	shell: {
		signOut: "Sign out",
		skipToContent: "Skip to content"
	},
	preferences: {
		appearance: "Appearance",
		system: "System",
		light: "Light",
		dark: "Dark",
		zoom: "Zoom",
		zoomLevel: (e) => `${oi(e)}%`
	},
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
		hidden: (e) => `${oi(e)} hidden`,
		filters: "Filters",
		filter: "Filter",
		addFilter: "Filter",
		removeFilter: "Remove filter",
		removeFilterFor: (e) => `Remove ${e} filter`,
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
		sortCount: (e) => `${oi(e)} sorts`,
		group: "Group",
		groupBy: "Group by",
		groupedBy: (e) => `Grouped by ${e}`,
		moveCard: "Move to",
		exportCsv: "Export CSV",
		shareView: "Share with everyone",
		sharedBy: (e) => `Shared by ${e}`,
		noGrouping: "No grouping",
		loadingMore: "Loading more…",
		noMatches: "Nothing matches these conditions.",
		clearAllFilters: "Clear filters",
		viewNameRequired: "Give the view a name.",
		rowCount: (e) => e === 1 ? "1 row" : `${oi(e)} rows`,
		pageOf: (e, t) => `Page ${oi(e)} of ${oi(t)}`,
		previousPage: "Previous",
		nextPage: "Next"
	},
	search: {
		placeholder: "Search…",
		empty: "No results found.",
		shortcut: "⌘\xA0K"
	},
	modal: { close: "Close" }
};
function ci(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function li(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) ci(n, e, t, r);
	return n;
}
var ui = e.createContext(si);
function di({ strings: t, children: n }) {
	let r = e.useContext(ui), i = e.useMemo(() => li(r, t), [r, t]);
	return /* @__PURE__ */ a(ui.Provider, {
		value: i,
		children: n
	});
}
function J() {
	return e.useContext(ui);
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var fi = (e) => F.object({
	email: F.email(e.invalidEmail),
	password: F.string().min(1, e.passwordRequired)
});
function pi({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = J().auth, f = e.useMemo(() => fi(d), [d]), p = Re({
		resolver: He(f),
		defaultValues: {
			email: "",
			password: ""
		}
	}), m = p.formState.isSubmitting, h = e.useId();
	e.useEffect(() => {
		n && p.setFocus("password");
	}, [n, p]);
	let g = async (e) => {
		try {
			await t(e);
		} catch (e) {
			throw p.setFocus("password"), e;
		}
	};
	return /* @__PURE__ */ o(wt, { children: [/* @__PURE__ */ o(Tt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(Et, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(Dt, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(kt, { children: /* @__PURE__ */ a(an, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(ct, { children: n })
				}),
				/* @__PURE__ */ a(sn, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(un, { children: [
						/* @__PURE__ */ a(dn, { children: d.email }),
						/* @__PURE__ */ a(fn, { children: /* @__PURE__ */ a(G, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(mn, {})
					] })
				}),
				/* @__PURE__ */ a(sn, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(un, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(dn, { children: d.password }), l && /* @__PURE__ */ a(q, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(fn, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(G, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(mn, {})
					] })
				}),
				/* @__PURE__ */ o(W, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(we, { className: "animate-spin" }), d.signIn]
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
var mi = (e) => F.object({
	name: F.string().min(2, e.nameTooShort),
	email: F.email(e.invalidEmail),
	password: F.string().min(8, e.passwordTooShort),
	confirmPassword: F.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function hi({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = J().auth, d = e.useMemo(() => mi(u), [u]), f = Re({
		resolver: He(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(sn, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(un, { children: [
			/* @__PURE__ */ a(dn, { children: t }),
			/* @__PURE__ */ a(fn, { children: /* @__PURE__ */ a(G, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(pn, { children: r }),
			/* @__PURE__ */ a(mn, {})
		] })
	});
	return /* @__PURE__ */ o(wt, { children: [/* @__PURE__ */ o(Tt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(Et, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(Dt, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(kt, { children: /* @__PURE__ */ a(an, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					children: /* @__PURE__ */ a(ct, { children: n })
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
					children: [p && /* @__PURE__ */ a(we, { className: "animate-spin" }), u.createAccount]
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
var gi = (e) => F.object({ email: F.email(e.invalidEmail) });
function _i({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = J().auth, c = e.useMemo(() => gi(s), [s]), l = Re({
		resolver: He(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(wt, { children: [/* @__PURE__ */ o(Tt, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(pe, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(Et, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(Dt, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(kt, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(q, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(wt, { children: [/* @__PURE__ */ o(Tt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(Et, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(Dt, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(kt, { children: /* @__PURE__ */ a(an, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					children: /* @__PURE__ */ a(ct, { children: n })
				}),
				/* @__PURE__ */ a(sn, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(un, { children: [
						/* @__PURE__ */ a(dn, { children: s.email }),
						/* @__PURE__ */ a(fn, { children: /* @__PURE__ */ a(G, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(mn, {})
					] })
				}),
				/* @__PURE__ */ o(W, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(we, { className: "animate-spin" }), s.sendResetLink]
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
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I, {
		"data-slot": "command",
		className: R("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function yi({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ a(Mt, {
		...s,
		children: /* @__PURE__ */ o(Lt, {
			className: R("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(Rt, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Bt, { children: e }), /* @__PURE__ */ a(Vt, { children: t })]
			}), /* @__PURE__ */ a(vi, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})]
		})
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(k, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(I.Input, {
			"data-slot": "command-input",
			className: R("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.List, {
		"data-slot": "command-list",
		className: R("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function Si({ ...e }) {
	return /* @__PURE__ */ a(I.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Group, {
		"data-slot": "command-group",
		className: R("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Separator, {
		"data-slot": "command-separator",
		className: R("-mx-1 h-px bg-border", e),
		...t
	});
}
function Ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Item, {
		"data-slot": "command-item",
		className: R("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function Ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: R("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function Di({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
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
	]), /* @__PURE__ */ o(yi, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(bi, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(xi, { children: [/* @__PURE__ */ a(Si, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(wi, {}), /* @__PURE__ */ a(Ci, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(Ti, {
				value: `${e.label} ${e.keywords?.join(" ") ?? ""}`,
				onSelect: () => {
					e.onSelect?.(), m(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ a("span", { children: e.label }),
					e.shortcut && /* @__PURE__ */ a(Ei, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function Oi({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = J().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: R("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(ve, { className: "size-4 shrink-0" }),
			/* @__PURE__ */ a("span", {
				className: "flex-1 text-left",
				children: e ?? i.placeholder
			}),
			s && /* @__PURE__ */ a("kbd", {
				className: "pointer-events-none hidden h-5 items-center gap-1 rounded border border-border px-1.5 font-sans text-[10px] font-medium sm:inline-flex",
				children: s
			})
		]
	});
}
//#endregion
//#region src/blocks/search/combobox.tsx
function ki({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = J().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [x, S] = e.useState(0), ee = e.useRef(null), C = t.length === 0 ? -1 : Math.min(x, t.length - 1), te = C >= 0 ? `${h}-option-${C}` : void 0;
	e.useEffect(() => {
		ee.current?.querySelector("[data-active=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [C, y]);
	let ne = (e) => {
		s === void 0 && _(e), c?.(e), S(0), b(!0);
	}, re = (e) => {
		n(e), b(!1);
	}, w = y && (u || t.length > 0 || v.length > 0);
	function ie(e) {
		if (e.key === "Escape") {
			b(!1);
			return;
		}
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			if (e.preventDefault(), !y) {
				b(!0);
				return;
			}
			if (t.length === 0) return;
			let n = e.key === "ArrowDown" ? 1 : -1;
			S((e) => (Math.min(e, t.length - 1) + n + t.length) % t.length);
			return;
		}
		if (e.key === "Home" || e.key === "End") {
			if (!y || t.length === 0) return;
			e.preventDefault(), S(e.key === "Home" ? 0 : t.length - 1);
			return;
		}
		if (e.key === "Enter") {
			let n = C >= 0 ? t[C] : void 0;
			if (!y || !n) return;
			e.preventDefault(), re(n);
		}
	}
	return /* @__PURE__ */ o("div", {
		className: R("relative", p),
		children: [/* @__PURE__ */ a(G, {
			id: h,
			role: "combobox",
			type: "text",
			autoComplete: "off",
			"aria-label": r,
			"aria-expanded": w,
			"aria-controls": `${h}-list`,
			"aria-autocomplete": "list",
			"aria-activedescendant": w ? te : void 0,
			value: v,
			placeholder: i,
			autoFocus: d,
			disabled: f,
			onChange: (e) => ne(e.target.value),
			onFocus: () => b(!0),
			onBlur: (e) => {
				e.currentTarget.parentElement?.contains(e.relatedTarget) || b(!1);
			},
			onKeyDown: ie
		}), /* @__PURE__ */ o("ul", {
			ref: ee,
			id: `${h}-list`,
			role: "listbox",
			"aria-label": r,
			hidden: !w,
			className: "absolute z-50 mt-1 max-h-64 w-full overflow-y-auto overscroll-contain rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
			children: [t.map((e, t) => /* @__PURE__ */ o("li", {
				id: `${h}-option-${t}`,
				role: "option",
				"aria-selected": t === C,
				"data-active": t === C,
				onMouseDown: (t) => {
					t.preventDefault(), re(e);
				},
				onMouseEnter: () => S(t),
				className: R("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === C && "bg-accent text-accent-foreground"),
				children: [/* @__PURE__ */ a("div", {
					className: "truncate",
					children: e.label
				}), e.hint && /* @__PURE__ */ a("div", {
					className: "truncate text-xs text-muted-foreground",
					children: e.hint
				})]
			}, e.id)), !u && t.length === 0 && /* @__PURE__ */ a("li", {
				className: "px-2 py-1.5 text-sm text-muted-foreground",
				children: l ?? m.noResults
			})]
		})]
	});
}
//#endregion
//#region src/blocks/data/csv.ts
var Ai = (e) => e === "," ? ";" : ",", ji = /^[=+\-@\t\r]/;
function Mi(e, t) {
	let n = ji.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function Ni(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function Pi(e, t, n = ".") {
	let r = Ai(n), i = (e) => e.map((e) => Mi(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => Ni(t.value(e), n))))].join("\r\n");
}
function Fi(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var Ii = "—", Y = (e) => e == null || e === "" ? "" : String(e);
function Li(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var X = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, Ri = (e) => Array.isArray(e) ? e.map(Y) : [Y(e)], zi = (e) => (t, n) => {
	if (!e.order) return Li(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Bi = (e) => !!e.header;
function Z(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Vi(e, t) {
	if (X(t)) return e.header;
	let n = Ri(t).map((t) => Z(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Hi(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || X(e.value) ? [] : [[t, Ri(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var Ui = "ziku", Wi = Ui;
function Gi(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Wi !== Ui && Wi !== e) throw Error(`Storage prefix is already "${Wi}", cannot change it to "${e}"`);
	Wi = e;
}
var Ki = () => Wi, Q = (...e) => [Wi, ...e].join("."), qi = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Ji = (e) => Q("views", e);
function Yi(e, t, n = si.dataTable.allView) {
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
function Xi(e, t, n, r) {
	let i = Yi(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Ji(e)), n = t ? JSON.parse(t) : null;
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
var Zi = 800, Qi = (e) => e.shared !== void 0;
function $i(t, n, r, i, a) {
	let o = J().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = Xi(r, t, n, o);
		return a && e.views.some((e) => e.id === a) ? {
			...e,
			activeId: a
		} : e;
	}), [u, d] = e.useState(!i), f = s.find((e) => e.id === c) ?? s[0], p = e.useRef(i);
	p.current = i;
	let m = e.useRef(!1);
	e.useEffect(() => {
		!a || m.current || l((e) => e.activeId === a || !e.views.some((e) => e.id === a) ? e : {
			...e,
			activeId: a
		});
	}, [a, s]), e.useEffect(() => {
		if (r && typeof localStorage < "u") {
			let e = s.filter((e) => !Qi(e));
			localStorage.setItem(Ji(r), JSON.stringify({
				views: e,
				activeId: c
			}));
		}
	}, [
		s,
		c,
		r
	]), e.useEffect(() => {
		let e = p.current;
		if (!e) return;
		let r = !0;
		return (async () => {
			let i = [];
			try {
				i = await e.list();
			} catch {
				r && d(!0);
				return;
			}
			if (!r) return;
			let a = new Set(Yi(t, n).map((e) => e.id)), o = s.filter((e) => !Qi(e) && !a.has(e.id)), c = [];
			for (let t of o) if (!i.some((e) => e.name === t.name)) try {
				c.push(await e.create({
					...t,
					shared: !1
				}));
			} catch {}
			if (!r) return;
			let u = /* @__PURE__ */ new Set([...o.map((e) => e.name)]);
			l((e) => ({
				views: [
					...e.views.filter((e) => Qi(e) || !u.has(e.name)),
					...i,
					...c
				],
				activeId: e.activeId
			})), d(!0);
		})(), () => {
			r = !1;
		};
	}, []);
	let h = e.useRef(/* @__PURE__ */ new Map()), g = e.useCallback((e, t) => {
		let n = p.current;
		n && (clearTimeout(h.current.get(e)), h.current.set(e, setTimeout(() => {
			h.current.delete(e), n.update(e, t).catch(() => {});
		}, Zi)));
	}, []);
	e.useEffect(() => {
		let e = h.current;
		return () => {
			for (let t of e.values()) clearTimeout(t);
			e.clear();
		};
	}, []);
	let _ = e.useCallback((e, t) => {
		l((n) => {
			let r = n.views.find((e) => e.id === n.activeId);
			return r && Qi(r) && g(r.id, t(e(r))), {
				...n,
				views: n.views.map((t) => t.id === n.activeId ? e(t) : t)
			};
		});
	}, [g]), v = e.useCallback((e) => _((t) => ({
		...t,
		state: {
			...t.state,
			...e
		}
	}), (e) => ({ state: e.state })), [_]);
	return {
		views: s,
		active: f,
		loaded: u,
		sharable: !!i,
		isPreset: f.id === "default" || n.some((e) => e.id === f.id),
		patch: v,
		select: (e) => {
			m.current = !0, l((t) => ({
				...t,
				activeId: e
			}));
		},
		add: (e, t) => l((n) => {
			let r = n.views.find((e) => e.id === n.activeId) ?? n.views[0], i = {
				name: e,
				icon: qi[n.views.length % qi.length],
				state: { ...r.state }
			}, a = `v${n.views.length}-${e.replace(/\W+/g, "-").toLowerCase()}`, o = p.current;
			return o ? (o.create({
				...i,
				shared: !!t
			}).then((e) => l((t) => ({
				views: t.views.map((t) => t.id === a ? e : t),
				activeId: t.activeId === a ? e.id : t.activeId
			}))).catch(() => l((e) => ({
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
		rename: (e) => _((t) => ({
			...t,
			name: e
		}), () => ({ name: e })),
		setIcon: (e) => _((t) => ({
			...t,
			icon: e
		}), () => ({ icon: e })),
		remove: () => l((e) => {
			let t = e.views.find((t) => t.id === e.activeId);
			t && Qi(t) && p.current?.remove(t.id).catch(() => {});
			let n = e.views.filter((t) => t.id !== e.activeId);
			return {
				views: n,
				activeId: n[0].id
			};
		}),
		reset: () => v({
			...t,
			...n.find((e) => e.id === f.id)?.state
		})
	};
}
//#endregion
//#region src/blocks/data/data-table-panels.tsx
var ea = {
	table: ke,
	list: _e,
	board: Ee,
	star: De,
	funnel: he,
	clock: le,
	users: Me,
	tag: Ae,
	eye: me
};
function ta({ name: e, className: t }) {
	let n = ea[e] ?? ke;
	return /* @__PURE__ */ a(n, { className: t });
}
function $({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(wn, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(Tn, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(En, {
			align: r,
			className: R("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function na({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a($, {
		align: "end",
		width: r,
		className: R("relative shrink-0 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50", n ? "text-link" : "text-muted-foreground hover:text-foreground"),
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
var ra = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function ia({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = J(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(G, {
			className: "mb-1 h-8",
			placeholder: s.findColumn,
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: R(ra, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(A, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? ke;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: ra,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function aa({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
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
			children: /* @__PURE__ */ a(je, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(G, {
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
			children: [/* @__PURE__ */ a(jt, {
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
	] }) : /* @__PURE__ */ a(G, {
		className: "h-8",
		placeholder: l.typeAValue,
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function oa({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = J().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(Nn, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(In, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(Fn, {})
					}), /* @__PURE__ */ a(Ln, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(zn, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(Nn, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(In, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(Fn, {})
					}), /* @__PURE__ */ o(Ln, { children: [/* @__PURE__ */ a(zn, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(zn, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(Fe, {
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
			className: R(ra, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(be, {
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
			className: R(ra, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(je, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function sa({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Bi).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(jt, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function ca({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a($, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(la, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function la({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
	let { dataTable: c } = J(), [l, u] = e.useState(!1), d = e.useId();
	return /* @__PURE__ */ o("form", {
		className: "space-y-2",
		onSubmit: (e) => {
			e.preventDefault();
			let t = new FormData(e.currentTarget), n = String(t.get("name") ?? "").trim();
			if (!n) {
				u(!0);
				return;
			}
			i(n, t.get("shared") === "on"), s();
		},
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex gap-1.5",
				children: [/* @__PURE__ */ a(G, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: t,
					"aria-invalid": l || void 0,
					"aria-describedby": l ? d : void 0,
					onChange: () => u(!1)
				}), /* @__PURE__ */ a(W, {
					type: "submit",
					size: "sm",
					className: "shrink-0",
					children: n
				})]
			}),
			l && /* @__PURE__ */ a("p", {
				id: d,
				role: "alert",
				className: "text-xs text-danger-fg",
				children: c.viewNameRequired
			}),
			r && /* @__PURE__ */ o("label", {
				className: "flex items-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("input", {
					type: "checkbox",
					name: "shared",
					className: "accent-primary"
				}), r]
			})
		]
	});
}
function ua({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = J(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
	return _ ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => m(null),
			"aria-label": d.back,
			className: "rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-foreground",
			children: /* @__PURE__ */ a(ee, {
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
				children: /* @__PURE__ */ a(Fe, {
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
				className: R("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(ta, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(G, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": d.viewName
			})]
		}),
		h && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: qi.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: R("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(ta, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: ra,
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
				/* @__PURE__ */ a(te, { className: "size-3 shrink-0 text-muted-foreground" })
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
var da = "application/x-ziku-card", fa = {
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
function pa({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
	let [u, d] = e.useState(null), [f, p] = e.useState(null), m = t.flatMap((e) => e.items), h = u !== null, g = (e) => f === e ? "over" : h ? "ready" : "idle", _ = (e) => ({
		onDragOver: (t) => {
			i && (t.preventDefault(), t.dataTransfer.dropEffect = "move", p(e));
		},
		onDragLeave: (e) => {
			e.currentTarget.contains(e.relatedTarget) || p(null);
		},
		onDrop: (t) => {
			if (!i) return;
			t.preventDefault(), p(null), d(null);
			let n = t.dataTransfer.getData(da), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: R("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(ha, {
			col: e,
			state: g(e.key),
			drop: _(e.key)
		}, e.key) : /* @__PURE__ */ o("div", {
			..._(e.key),
			style: { maxHeight: c },
			className: R("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
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
							d(l), e.dataTransfer.setData(da, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: R("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", h && "select-none", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a(ma, {
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
function ma({ columns: e, from: t, onPick: n }) {
	let r = J().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Ht, { children: [/* @__PURE__ */ a(Wt, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: R("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(b, { size: 14 })
	}), /* @__PURE__ */ a(Gt, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(qt, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function ha({ col: e, state: t, drop: n }) {
	let r = e.tile, i = fa[r.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: R("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? R("border-solid", i.over) : R("border-dashed", i.idle)),
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
var ga = rt({
	rowSortingFeature: nt,
	sortedRowModel: Qe(),
	columnFilteringFeature: We,
	filteredRowModel: Ye(),
	globalFilteringFeature: $e,
	columnFacetingFeature: Ue,
	facetedRowModel: qe(),
	facetedUniqueValues: Je(),
	columnGroupingFeature: Ge,
	groupedRowModel: Xe(),
	rowExpandingFeature: et,
	expandedRowModel: L(),
	columnVisibilityFeature: Ke,
	rowPaginationFeature: tt,
	paginatedRowModel: Ze()
});
function _a({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: b, presets: S = [], viewKey: ee, onStateChange: C, view: ne, viewsBackend: re, paged: w, csv: ae, className: oe }) {
	let se = J(), T = se.dataTable, ce = se.common, le = e.useMemo(() => n ?? [], [n]), E = !!w, D = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), de = e.useMemo(() => ({
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
	]), pe = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => D[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => D[e.id]).map((e) => D[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: X(e.value) ? [] : [Y(e.value)]
		} : e).map((e) => {
			let t = D[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Y(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => D[e])
	}), [D]), O = $i(de, S, ee, re, ne), { views: _e, active: k, isPreset: ye, patch: A } = O, j = e.useMemo(() => pe(k.state), [k.state, pe]);
	e.useEffect(() => {
		C?.(j, k.id);
	}, [
		j,
		k.id,
		C
	]);
	let Se = (e) => (t) => A({ [e]: typeof t == "function" ? t(j[e]) : t }), we = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : Z(e, Y(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!E || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: Bi(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? zi(e)(Y(t.getValue(r)), Y(n.getValue(r))) : Li(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (X(n)) return !0;
			let r = Y(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, E]), [Te, De] = e.useState(!0), [Oe, Ae] = e.useState(0), M = j.grouping[0] ?? "", Ne = t.filter((e) => e.facet), Pe = !!(y && Ne.length && c), N = j.mode === "board" && Pe, Ie = p > 0 && !M && !N && !E, Le = e.useMemo(() => j.columnFilters.filter((e) => !X(e.value) && !D[e.id]?.filterKey), [j.columnFilters, D]), Re = E && (Le.length > 0 || j.grouping.length > 0 || N), ze = e.useMemo(() => M && !j.sorting.some((e) => e.id === M) ? [{
		id: M,
		desc: !1
	}, ...j.sorting] : j.sorting, [M, j.sorting]), P = it({
		features: ga,
		data: le,
		columns: we,
		state: {
			sorting: ze,
			columnFilters: E ? Le : j.columnFilters,
			globalFilter: E ? "" : j.globalFilter,
			columnVisibility: j.columnVisibility,
			grouping: j.grouping,
			expanded: Te,
			pagination: {
				pageIndex: Ie ? Oe : 0,
				pageSize: Ie ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: Se("sorting"),
		onColumnFiltersChange: Se("columnFilters"),
		onGlobalFilterChange: Se("globalFilter"),
		onColumnVisibilityChange: Se("columnVisibility"),
		onGroupingChange: Se("grouping"),
		onExpandedChange: De,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: Oe,
				pageSize: Ie ? p : 2 ** 53 - 1
			}) : e;
			Ae(t.pageIndex);
		},
		manualSorting: E && !M,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Y(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), Be = P.getFilteredRowModel().rows;
	function Ve() {
		if (!ae) return;
		let e = ae.decimal ?? ".", t = P.getVisibleLeafColumns().map((e) => D[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = P.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		Fi(ae.filename, Pi(n, t, e));
	}
	e.useEffect(() => {
		Ae(0);
	}, [
		j.columnFilters,
		j.globalFilter,
		j.grouping
	]);
	let He = Da(j.globalFilter, Ea), F = JSON.stringify(Hi(t, {
		...j,
		globalFilter: He
	})), I = e.useRef(w?.setQuery);
	e.useEffect(() => {
		I.current = w?.setQuery;
	}), e.useEffect(() => {
		I.current?.(JSON.parse(F));
	}, [F]);
	let Ue = e.useRef(null), We = w?.more, Ge = w?.hasMore ?? !1, Ke = w?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = Ue.current;
		if (!e || !We || !Ge || Ke) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && We();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		We,
		Ge,
		Ke
	]), e.useEffect(() => {
		Re && Ge && !Ke && We?.();
	}, [
		Re,
		Ge,
		Ke,
		We
	]);
	let L = j.columnFilters, qe = Object.values(j.columnVisibility).filter((e) => e === !1).length, Je = L.length > 0 || !!j.globalFilter || j.grouping.length > 0 || j.sorting.length > 0 || qe > 0, Ye = Je && (le.length > 0 || E), Xe = t.filter((e) => Bi(e) && e.sortable !== !1 && !L.some((t) => t.id === e.key)), Ze = t.filter((e) => Bi(e) && e.sortable !== !1 && (!E || !!e.sortKey)), Qe = (e) => A({ columnFilters: [...L, {
		id: e,
		value: D[e]?.facet ? [] : ""
	}] }), $e = (e) => A({ columnFilters: L.filter((t) => t.id !== e) }), et = (e, t) => A({ columnFilters: L.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function tt(e) {
		if (!e.facet) return [];
		let t = E && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: Z(e, t)
		})) : [...P.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => zi(e)(Y(t[0]), Y(n[0]))).map(([n, r]) => ({
			value: Y(n),
			label: t ? Z(e, Y(n)) : `${Z(e, Y(n))} (${r})`
		}));
	}
	let nt = (e) => A({
		mode: e,
		grouping: e === "board" && !M ? [Ne[0].key] : j.grouping
	}), rt = /* @__PURE__ */ a(sa, {
		columns: t,
		visibility: j.columnVisibility,
		onToggle: (e, t) => A({ columnVisibility: {
			...j.columnVisibility,
			[e]: t
		} })
	}), ot = /* @__PURE__ */ a(oa, {
		sorting: j.sorting,
		sortable: Ze,
		byKey: D,
		onChange: (e) => A({ sorting: e })
	}), z = (e) => /* @__PURE__ */ a(ia, {
		columns: Ne,
		empty: {
			label: T.noGrouping,
			onPick: () => {
				A({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			A({ grouping: [t] }), e?.();
		}
	}), st = /* @__PURE__ */ o(i, { children: [
		L.map((e) => {
			let t = D[e.id];
			if (!t) return null;
			let n = t.icon ?? he;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Vi(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => $e(e.id),
						"aria-label": T.removeFilterFor(t.header),
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(Fe, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		L.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(ia, {
			columns: Xe,
			onPick: Qe
		})
	] }), ct = [
		...Pe ? [{
			key: "layout",
			icon: ke,
			label: T.layout,
			value: j.mode === "board" ? T.board : T.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				xe,
				T.table
			], [
				"board",
				Ee,
				T.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => nt(e),
				className: R("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", j.mode === e && "font-medium"),
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
			label: T.visibleColumns,
			value: qe ? T.hidden(qe) : T.allView,
			panel: rt
		},
		{
			key: "filter",
			icon: ge,
			label: T.filters,
			value: L.length ? String(L.length) : void 0,
			panel: st
		},
		{
			key: "sort",
			icon: Ce,
			label: T.sorting,
			value: j.sorting.length ? j.sorting.length === 1 ? D[j.sorting[0].id]?.header : String(j.sorting.length) : void 0,
			panel: ot
		},
		...Ne.length ? [{
			key: "group",
			icon: xe,
			label: T.groupBy,
			value: M ? D[M]?.header : ce.none,
			panel: z()
		}] : []
	], B = M ? D[M] : null, lt = (e) => e && e !== "—" ? Z(B ?? void 0, e) : "—", ut = e.useMemo(() => {
		if (!N || !B) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of Be) {
			let n = Y(t.getValue(M)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...B.order ?? [], ...e.keys()])].sort(zi(B)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: lt(t),
				items: n,
				subtitle: b?.(n),
				tile: B.boardTile?.(t)
			};
		});
	}, [
		N,
		B,
		Be,
		M,
		b
	]), dt = P.getVisibleLeafColumns().length, ft = P.getRowModel().rows, V = ft.length > va, pt = e.useRef(null), H = at({
		count: ft.length,
		enabled: V,
		getScrollElement: () => pt.current,
		estimateSize: () => ya,
		overscan: ba,
		initialRect: {
			width: 0,
			height: xa
		},
		measureElement: (e) => e.getBoundingClientRect().height || ya,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || xa
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), U = H.getVirtualItems(), mt = V ? U.map((e) => ({
		row: ft[e.index],
		index: e.index
	})) : ft.map((e, t) => ({
		row: e,
		index: t
	})), ht = V && U.length > 0 ? U[0].start : 0, gt = V && U.length > 0 ? H.getTotalSize() - U[U.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: R("overflow-hidden rounded-md border bg-card", oe),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [_e.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => O.select(e.id),
						className: R("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === k.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(ta, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: T.sharedBy(e.ownerName),
								"aria-label": T.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(Me, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(ca, {
						align: "start",
						title: T.saveView,
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(be, {
							className: "size-4",
							weight: "bold"
						}),
						defaultValue: T.newView,
						confirmLabel: T.createView,
						onSubmit: O.add,
						shareLabel: O.sharable ? T.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(na, {
							icon: ve,
							label: ce.search,
							active: !!j.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(G, {
								className: "h-8",
								placeholder: u ?? ce.searchPlaceholder,
								autoFocus: !0,
								value: j.globalFilter,
								onChange: (e) => A({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(na, {
							icon: ge,
							label: T.filter,
							active: L.length > 0,
							children: (e) => /* @__PURE__ */ a(ia, {
								columns: Xe,
								onPick: (t) => {
									Qe(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(na, {
							icon: Ce,
							label: T.sort,
							active: j.sorting.length > 0,
							width: "w-88",
							children: ot
						}),
						Ne.length > 0 && /* @__PURE__ */ a(na, {
							icon: xe,
							label: T.group,
							active: !!M,
							children: (e) => z(e)
						}),
						/* @__PURE__ */ a(na, {
							icon: me,
							label: T.visibleColumns,
							active: qe > 0,
							width: "w-52",
							children: rt
						}),
						Pe && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								xe,
								T.table
							], [
								"board",
								Ee,
								T.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => nt(e),
								className: R("px-2 py-1", j.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a($, {
							align: "end",
							width: "w-72",
							className: "ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground",
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": T.viewSettings,
								children: /* @__PURE__ */ a(ue, {
									className: "size-4",
									weight: "bold"
								})
							}),
							children: (e) => /* @__PURE__ */ a(ua, {
								name: k.name,
								icon: k.icon,
								onIcon: O.setIcon,
								onRename: O.rename,
								onClose: e,
								rows: ct,
								footer: /* @__PURE__ */ o(i, { children: [ae && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										Ve(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(fe, { className: "size-4 text-muted-foreground" }), T.exportCsv]
								}), !ye && k.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										O.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [
										/* @__PURE__ */ a(je, { className: "size-4" }),
										" ",
										T.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(L.length > 0 || j.sorting.length > 0 || M) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					j.sorting.length > 0 && /* @__PURE__ */ a($, {
						width: "w-88",
						className: wa,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Ce, {
									className: "size-3.5",
									weight: "bold"
								}),
								j.sorting.length === 1 ? `${D[j.sorting[0].id]?.header ?? j.sorting[0].id} ${j.sorting[0].desc ? "↓" : "↑"}` : T.sortCount(j.sorting.length),
								/* @__PURE__ */ a(x, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: ot
					}),
					M && /* @__PURE__ */ a($, {
						className: wa,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(xe, {
									className: "size-3.5",
									weight: "bold"
								}),
								T.groupedBy(D[M]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(x, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => z(e)
					}),
					L.map((e) => {
						let t = D[e.id];
						if (!t) return null;
						let n = t.icon ?? he;
						return /* @__PURE__ */ a($, {
							className: X(e.value) ? Ta : wa,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Vi(t, e.value)
									}),
									/* @__PURE__ */ a(x, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(aa, {
								col: t,
								options: tt(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => et(e.id, t),
								onRemove: () => {
									$e(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a($, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(be, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								T.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(ia, {
							columns: Xe,
							onPick: (t) => {
								Qe(t), e();
							}
						})
					}),
					Je && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: O.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(Fe, {
								className: "size-3",
								weight: "bold"
							}),
							" ",
							T.clearFilters
						]
					})
				]
			}),
			r ? /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				children: /* @__PURE__ */ o(Ur, { children: [/* @__PURE__ */ a(Wr, { children: /* @__PURE__ */ a(K, {
					className: "bg-muted/50 hover:bg-muted/50",
					children: P.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(qr, {
						className: R("whitespace-nowrap", D[e.id]?.className),
						children: D[e.id]?.header
					}, e.id))
				}) }), /* @__PURE__ */ a(Gr, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(K, {
					className: "hover:bg-transparent",
					children: P.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Jr, {
						className: D[e.id]?.className,
						children: /* @__PURE__ */ a(nr, { className: "h-4 w-full" })
					}, e.id))
				}, t)) })] })
			}) : Be.length === 0 ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: Ye ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: T.noMatches }), /* @__PURE__ */ o(W, {
						variant: "outline",
						size: "sm",
						onClick: O.reset,
						children: [/* @__PURE__ */ a(Fe, {
							className: "size-3.5",
							weight: "bold"
						}), T.clearAllFilters]
					})]
				}) : s ?? ce.noResults
			}) : N ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(pa, {
					columns: ut,
					itemKey: c,
					renderCard: y,
					onDrop: B?.onSet ? (e, t) => B.onSet(e, t) : void 0,
					canDrag: (e) => !!B?.onSet && (B?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Ur, {
					containerRef: pt,
					containerClassName: R(V && `${Sa} overflow-y-auto`),
					"aria-rowcount": ft.length + 1,
					children: [/* @__PURE__ */ a(Wr, { children: P.getHeaderGroups().map((e) => /* @__PURE__ */ a(K, {
						"aria-rowindex": 1,
						className: "bg-muted/50",
						children: e.headers.map((e) => {
							let t = D[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ie : n === "desc" ? x : Ce, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, {
								className: "size-3.5",
								weight: "bold"
							}), /* @__PURE__ */ a(P.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(qr, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: R("whitespace-nowrap", V && "sticky top-0 z-10 bg-[color-mix(in_oklab,var(--muted)_50%,var(--card))]", t?.className),
								children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.column.getToggleSortingHandler(),
									className: R("inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"),
									children: [c, /* @__PURE__ */ a(s, {
										className: R("size-3", n ? "text-foreground" : "opacity-40"),
										weight: "bold"
									})]
								}) : /* @__PURE__ */ a("span", {
									className: "inline-flex items-center gap-1.5",
									children: c
								})
							}, e.id);
						})
					}, e.id)) }), /* @__PURE__ */ o(Gr, { children: [
						ht > 0 && /* @__PURE__ */ a(K, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Jr, {
								colSpan: dt,
								className: "p-0",
								style: { height: ht }
							})
						}),
						mt.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(K, {
							ref: V ? H.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(qr, {
								colSpan: dt,
								className: "bg-muted/50 text-xs font-semibold tracking-wide uppercase",
								children: /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.getToggleExpandedHandler(),
									"aria-expanded": e.getIsExpanded(),
									className: "inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
									children: [
										e.getIsExpanded() ? /* @__PURE__ */ a(x, {
											className: "size-3",
											weight: "bold"
										}) : /* @__PURE__ */ a(te, {
											className: "size-3",
											weight: "bold"
										}),
										lt(Y(e.getValue(M))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(K, {
							ref: V ? H.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: f ? "button" : void 0,
							tabIndex: f ? 0 : void 0,
							onClick: f ? () => f(e.original) : void 0,
							onKeyDown: f ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), f(e.original));
							} : void 0,
							className: f ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Jr, {
								className: D[e.column.id]?.className,
								children: /* @__PURE__ */ a(P.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						gt > 0 && /* @__PURE__ */ a(K, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Jr, {
								colSpan: dt,
								className: "p-0",
								style: { height: gt }
							})
						}),
						Ge && /* @__PURE__ */ a(K, {
							ref: Ue,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Jr, {
								colSpan: dt,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: Ke ? T.loadingMore : null
							})
						})
					] })]
				})
			}),
			Ie && !r && Be.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: T.rowCount(Be.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: T.pageOf(Oe + 1, Math.max(P.getPageCount(), 1)) }),
						/* @__PURE__ */ a(W, {
							variant: "outline",
							size: "sm",
							onClick: () => P.previousPage(),
							disabled: !P.getCanPreviousPage(),
							children: T.previousPage
						}),
						/* @__PURE__ */ a(W, {
							variant: "outline",
							size: "sm",
							onClick: () => P.nextPage(),
							disabled: !P.getCanNextPage(),
							children: T.nextPage
						})
					]
				})]
			})
		]
	});
}
var va = 100, ya = 37, ba = 12, xa = 640, Sa = "max-h-[70dvh]", Ca = "rounded-md border px-2 py-1.5 text-sm outline-none", wa = `${Ca} border-ring/60 bg-accent font-medium text-foreground`, Ta = `${Ca} border-border bg-card text-muted-foreground`, Ea = 300;
function Da(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function Oa({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = J().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(wn, { children: [/* @__PURE__ */ o(Tn, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: R("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(ht, {
				variant: "secondary",
				className: R("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(x, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(En, {
		align: "start",
		className: "w-56 p-1",
		children: /* @__PURE__ */ o("div", {
			role: "listbox",
			"aria-multiselectable": !0,
			"aria-label": r,
			children: [e.length === 0 && /* @__PURE__ */ a("p", {
				className: "px-2 py-1.5 text-sm text-muted-foreground",
				children: l.noResults
			}), e.map((e) => {
				let n = t.includes(e.value);
				return /* @__PURE__ */ o("button", {
					type: "button",
					role: "option",
					"aria-selected": n,
					onClick: () => p(e.value),
					className: "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:outline-none",
					children: [
						/* @__PURE__ */ a(jt, {
							checked: n,
							tabIndex: -1,
							"aria-hidden": !0,
							className: "pointer-events-none"
						}),
						e.className ? /* @__PURE__ */ a(ht, {
							variant: "secondary",
							className: R("truncate", e.className),
							children: e.label
						}) : /* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
						e.className && /* @__PURE__ */ a("span", { className: "min-w-0 flex-1" }),
						n && /* @__PURE__ */ a(se, {
							className: "size-3.5 shrink-0",
							weight: "bold"
						})
					]
				}, e.value);
			})]
		})
	})] });
}
//#endregion
//#region src/blocks/data/list-url.ts
var ka = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function Aa(e) {
	let t = typeof e == "string" ? new URLSearchParams(e) : e, n = {
		q: t.get("q") ?? "",
		filters: {}
	}, r = t.get("sort");
	if (r) {
		let e = r.startsWith("-"), t = e ? r.slice(1) : r;
		t && (n.sort = {
			key: t,
			dir: e ? "desc" : "asc"
		});
	}
	for (let e of (t.get("filter") ?? "").split(";")) {
		let t = e.indexOf(":");
		if (t < 1) continue;
		let r = e.slice(0, t), i = e.slice(t + 1).split(",").filter((e) => e !== "");
		i.length > 0 && (n.filters[r] = i);
	}
	let i = t.get("group");
	i && (n.group = i), t.get("mode") === "board" && (n.mode = "board");
	let a = t.get("view");
	return a && (n.view = a), n;
}
function ja(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of ka) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode === "board" && n.set("mode", "board"), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function Ma(e, t) {
	return ja(e).toString() === ja(t).toString();
}
function Na(e, t) {
	let [n] = e.sorting;
	return {
		q: e.globalFilter ?? "",
		sort: n ? {
			key: n.id,
			dir: n.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(e.columnFilters.map((e) => [e.id, Array.isArray(e.value) ? e.value : []])),
		group: e.grouping[0],
		mode: e.mode === "board" ? "board" : void 0,
		view: t
	};
}
function Pa(e) {
	return {
		defaultSort: e.sort,
		defaultFilters: Object.entries(e.filters).map(([e, t]) => ({
			id: e,
			value: t
		})),
		defaultGroup: e.group,
		defaultMode: e.mode ?? "table",
		view: e.view
	};
}
//#endregion
//#region src/blocks/shell/app-shell.tsx
function Fa({ brand: e, brandHref: t = "/", sidebarHeader: n, nav: r, currentPath: s, user: c, userMenu: l, onSignOut: u, headerActions: d, headerContent: f, classNames: p, bleed: m = !1, children: h }) {
	let g = J().shell;
	return /* @__PURE__ */ o(hr, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: g.skipToContent
		}),
		/* @__PURE__ */ o(gr, {
			collapsible: "icon",
			rootClassName: p?.sidebar,
			children: [
				/* @__PURE__ */ o(xr, { children: [/* @__PURE__ */ a(kr, { children: /* @__PURE__ */ a(Ar, { children: t === null ? /* @__PURE__ */ a("div", {
					className: "flex h-12 items-center gap-2 p-2 text-sm",
					children: e
				}) : /* @__PURE__ */ a(Mr, {
					size: "lg",
					asChild: !0,
					children: /* @__PURE__ */ a(q, {
						href: t,
						children: e
					})
				}) }) }), n && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				})] }),
				/* @__PURE__ */ a(wr, { children: r.map((e, t) => /* @__PURE__ */ o(Tr, { children: [e.label && /* @__PURE__ */ a(Er, { children: e.label }), /* @__PURE__ */ a(Or, { children: /* @__PURE__ */ a(kr, { children: e.items.map((e) => /* @__PURE__ */ o(Ar, { children: [/* @__PURE__ */ a(Mr, {
					asChild: !0,
					isActive: s === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(q, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(Pr, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				c && /* @__PURE__ */ a(Sr, { children: /* @__PURE__ */ a(kr, { children: /* @__PURE__ */ a(Ar, { children: /* @__PURE__ */ o(Ht, { children: [/* @__PURE__ */ a(Wt, {
					asChild: !0,
					children: /* @__PURE__ */ o(Mr, {
						size: "lg",
						className: "data-[state=open]:bg-sidebar-accent",
						children: [
							/* @__PURE__ */ a(H, {
								name: c.name,
								src: c.avatarUrl,
								className: "size-8 rounded-lg *:rounded-lg"
							}),
							/* @__PURE__ */ o("div", {
								className: "grid flex-1 text-left text-sm leading-tight",
								children: [/* @__PURE__ */ a("span", {
									className: "truncate font-medium",
									children: c.name
								}), /* @__PURE__ */ a("span", {
									className: "truncate text-xs text-muted-foreground",
									children: c.role ?? c.email
								})]
							}),
							/* @__PURE__ */ a(w, { className: "ml-auto size-4" })
						]
					})
				}), /* @__PURE__ */ o(Gt, {
					side: "top",
					align: "start",
					className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
					children: [
						/* @__PURE__ */ o(Zt, {
							className: "font-normal",
							children: [/* @__PURE__ */ a("div", {
								className: "text-sm font-medium",
								children: c.name
							}), /* @__PURE__ */ a("div", {
								className: "text-xs text-muted-foreground",
								children: c.email
							})]
						}),
						l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Qt, {}), l] }),
						u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Qt, {}), /* @__PURE__ */ o(qt, {
							onSelect: u,
							children: [/* @__PURE__ */ a(Se, {}), g.signOut]
						})] })
					]
				})] }) }) }) })
			]
		}),
		/* @__PURE__ */ o(yr, { children: [/* @__PURE__ */ o("header", {
			className: R("flex h-14 shrink-0 items-center gap-2 border-b px-4", p?.header),
			children: [
				/* @__PURE__ */ a(_r, { className: "-ml-1" }),
				/* @__PURE__ */ a(Un, {
					orientation: "vertical",
					className: "mr-2 data-[orientation=vertical]:h-4"
				}),
				/* @__PURE__ */ a("div", {
					className: "flex min-w-0 flex-1 items-center gap-2",
					children: f
				}),
				d && /* @__PURE__ */ a("div", {
					className: "flex items-center gap-2",
					children: d
				})
			]
		}), /* @__PURE__ */ a("main", {
			id: "content",
			tabIndex: -1,
			className: R("flex flex-1 flex-col outline-none", m ? "gap-0" : "gap-6 p-4 md:p-6", p?.main),
			children: h
		})] })
	] });
}
//#endregion
//#region src/lib/preferences.ts
var Ia = [
	"system",
	"light",
	"dark"
], La = 75, Ra = 150, za = 100, Ba = [
	75,
	90,
	100,
	110,
	125,
	150
];
function Va(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Ha(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
function Ua(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i, a = !1, o = () => (i === void 0 && (i = e()), i), s = () => r.forEach((e) => e());
	return {
		get: o,
		set: (e) => {
			i = e, t(e), n(e), s();
		},
		refresh: () => {
			n(o()), s();
		},
		subscribe: (e) => (r.add(e), a || (a = !0, n(o())), () => {
			r.delete(e);
		})
	};
}
var Wa = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: light)").matches, Ga = (e) => e === "system" ? Wa() ? "light" : "dark" : e, Ka = Ua(() => {
	let e = Va(Q("theme"));
	return Ia.includes(e) ? e : "system";
}, (e) => Ha(Q("theme"), e), (e) => {
	if (typeof document > "u") return;
	let t = document.documentElement;
	t.classList.remove("light", "dark"), t.classList.add(Ga(e));
}), qa = (e) => Math.min(150, Math.max(75, Math.round(e))), Ja = Ua(() => {
	let e = Number(Va(Q("zoom")));
	return Number.isFinite(e) && e > 0 ? qa(e) : 100;
}, (e) => Ha(Q("zoom"), String(e)), (e) => {
	typeof document > "u" || document.documentElement.style.setProperty("--app-zoom", String(e / 100));
});
typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
	Ka.get() === "system" && Ka.refresh();
});
function Ya() {
	let t = e.useSyncExternalStore(Ka.subscribe, Ka.get, () => "system");
	return {
		theme: t,
		resolved: Ga(t),
		setTheme: Ka.set
	};
}
function Xa() {
	return {
		zoom: e.useSyncExternalStore(Ja.subscribe, Ja.get, () => 100),
		setZoom: (e) => Ja.set(qa(e))
	};
}
function Za(e = Ki()) {
	return `(function(){try{var d=document.documentElement,g=function(k){try{return localStorage.getItem(${JSON.stringify(e)}+"."+k)}catch(e){return null}};var t=g("theme")||"system",l=t==="light"||(t==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches);d.classList.remove("light","dark");d.classList.add(l?"light":"dark");var z=parseFloat(g("zoom"));if(z>=75&&z<=150)d.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`;
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
var Qa = {
	system: E,
	light: Oe,
	dark: ye
};
function $a({ side: e, align: t = "end", className: n }) {
	let r = J().preferences, { theme: i, setTheme: s } = Ya(), c = Qa[i], l = {
		system: r.system,
		light: r.light,
		dark: r.dark
	};
	return /* @__PURE__ */ o(Ht, { children: [/* @__PURE__ */ a(Wt, {
		asChild: !0,
		children: /* @__PURE__ */ a(W, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.appearance,
			className: n,
			children: /* @__PURE__ */ a(c, {})
		})
	}), /* @__PURE__ */ o(Gt, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Zt, { children: r.appearance }), /* @__PURE__ */ a(Yt, {
			value: i,
			onValueChange: (e) => s(e),
			children: Object.keys(l).map((e) => {
				let t = Qa[e];
				return /* @__PURE__ */ o(Xt, {
					value: e,
					children: [/* @__PURE__ */ a(t, {}), l[e]]
				}, e);
			})
		})]
	})] });
}
function eo({ side: e, align: t = "end", className: n }) {
	let r = J().preferences, { zoom: i, setZoom: s } = Xa();
	return /* @__PURE__ */ o(Ht, { children: [/* @__PURE__ */ a(Wt, {
		asChild: !0,
		children: /* @__PURE__ */ a(W, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.zoom,
			className: n,
			children: /* @__PURE__ */ a(ve, {})
		})
	}), /* @__PURE__ */ o(Gt, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Zt, { children: r.zoom }), /* @__PURE__ */ a(Yt, {
			value: String(i),
			onValueChange: (e) => s(Number(e)),
			children: Ba.map((e) => /* @__PURE__ */ a(Xt, {
				value: String(e),
				children: r.zoomLevel(e)
			}, e))
		})]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var to = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function no({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = J().modal;
	return /* @__PURE__ */ a(Mt, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Lt, {
			showCloseButton: !1,
			className: R("flex max-h-[92dvh] flex-col gap-0 p-0", to[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Bt, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(Vt, { children: r })]
					}), /* @__PURE__ */ a(Ft, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(Fe, {
							className: "size-4",
							weight: "bold"
						})
					})]
				}),
				l != null && /* @__PURE__ */ a("div", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4",
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
//#region src/blocks/modal/confirm.tsx
var ro = 0, io = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function ao({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: ro++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: ro++,
				kind: "prompt",
				options: e,
				settle: t
			}]);
		})
	}), []), c = e.useCallback((e) => {
		r((t) => {
			let [n, ...r] = t;
			return n ? (n.settle(e), r) : t;
		});
	}, []);
	return /* @__PURE__ */ o(io.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(oo, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function oo({ pending: t, onAnswer: n }) {
	let r = J().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(no, {
		open: !0,
		onOpenChange: (e) => {
			e || n(c);
		},
		size: "sm",
		title: s.title,
		description: s.description,
		footer: /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(W, {
			variant: "outline",
			onClick: () => n(c),
			children: s.cancelLabel ?? r.cancel
		}), /* @__PURE__ */ a(W, {
			variant: s.danger ? "danger" : "default",
			onClick: f,
			children: s.confirmLabel ?? r.confirm
		})] }),
		children: t.kind === "prompt" && /* @__PURE__ */ o("form", {
			className: "grid gap-2",
			onSubmit: (e) => {
				e.preventDefault(), f();
			},
			children: [/* @__PURE__ */ a(rn, {
				htmlFor: d,
				children: t.options.label ?? s.title
			}), /* @__PURE__ */ a(G, {
				id: d,
				autoFocus: !0,
				value: l,
				placeholder: t.options.placeholder,
				onChange: (e) => u(e.target.value)
			})]
		})
	});
}
function so() {
	return e.useContext(io);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function co({ title: e, description: t, actions: n, className: r, ...i }) {
	return /* @__PURE__ */ o("div", {
		className: R("flex flex-wrap items-start justify-between gap-4", r),
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
function lo({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
	return /* @__PURE__ */ o("div", {
		className: R("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", i),
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
//#region src/blocks/page/error-state.tsx
function uo({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = M, className: s }) {
	let c = J().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(W, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(z, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(ct, {
			className: "flex items-center justify-between gap-4",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(lo, {
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/error-boundary.tsx
function fo({ reset: e }) {
	let t = J().common;
	return /* @__PURE__ */ a(uo, {
		title: t.crashed,
		onRetry: e
	});
}
var po = class extends e.Component {
	state = { error: null };
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {
		this.props.onError?.(e, t);
	}
	componentDidUpdate(e) {
		if (!this.state.error) return;
		let t = e.resetKeys, n = this.props.resetKeys;
		!t || !n || (t.length !== n.length || n.some((e, n) => !Object.is(e, t[n]))) && this.reset();
	}
	reset = () => {
		this.setState({ error: null });
	};
	render() {
		let { error: e } = this.state;
		if (!e) return this.props.children;
		let { fallback: t } = this.props;
		return typeof t == "function" ? t({
			error: e,
			reset: this.reset
		}) : t === void 0 ? /* @__PURE__ */ a(fo, {
			error: e,
			reset: this.reset
		}) : t;
	}
}, mo = "text-xs font-medium tracking-wider text-muted-foreground uppercase";
function ho({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: R(mo, t),
		...n
	});
}
var go = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function _o({ label: e, value: t, hint: n, icon: r, trend: i = "flat", className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "stat-tile",
		className: R("rounded-lg border bg-card p-4", s),
		...c,
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ a("span", {
					className: mo,
					children: e
				}), r && /* @__PURE__ */ a(r, { className: "size-4 shrink-0 text-muted-foreground" })]
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 text-2xl font-semibold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ a("div", {
				className: R("mt-1 text-xs", go[i]),
				children: n
			})
		]
	});
}
//#endregion
export { z as Alert, ct as AlertDescription, st as AlertTitle, Fa as AppShell, ni as AuthLayout, lt as Avatar, ft as AvatarBadge, dt as AvatarFallback, V as AvatarGroup, pt as AvatarGroupCount, ut as AvatarImage, U as AvatarStack, ht as Badge, gt as Breadcrumb, St as BreadcrumbEllipsis, vt as BreadcrumbItem, yt as BreadcrumbLink, _t as BreadcrumbList, bt as BreadcrumbPage, xt as BreadcrumbSeparator, W as Button, wt as Card, Ot as CardAction, kt as CardContent, Dt as CardDescription, At as CardFooter, Tt as CardHeader, Et as CardTitle, jt as Checkbox, Oa as ChipPicker, ki as Combobox, Di as CommandMenu, ao as ConfirmProvider, _a as DataTable, Mt as Dialog, Ft as DialogClose, Lt as DialogContent, Vt as DialogDescription, zt as DialogFooter, Rt as DialogHeader, It as DialogOverlay, Pt as DialogPortal, Bt as DialogTitle, Nt as DialogTrigger, Ht as DropdownMenu, Jt as DropdownMenuCheckboxItem, Gt as DropdownMenuContent, Kt as DropdownMenuGroup, qt as DropdownMenuItem, Zt as DropdownMenuLabel, Ut as DropdownMenuPortal, Yt as DropdownMenuRadioGroup, Xt as DropdownMenuRadioItem, Qt as DropdownMenuSeparator, $t as DropdownMenuShortcut, en as DropdownMenuSub, nn as DropdownMenuSubContent, tn as DropdownMenuSubTrigger, Wt as DropdownMenuTrigger, lo as EmptyState, po as ErrorBoundary, uo as ErrorState, _i as ForgotPasswordForm, an as Form, fn as FormControl, pn as FormDescription, sn as FormField, un as FormItem, dn as FormLabel, mn as FormMessage, G as Input, pa as Kanban, ka as LIST_PARAMS, rn as Label, q as Link, ii as LinkProvider, pi as LoginForm, no as Modal, Ii as NONE, co as PageHeader, _n as Pagination, vn as PaginationContent, Cn as PaginationEllipsis, yn as PaginationItem, bn as PaginationLink, Sn as PaginationNext, xn as PaginationPrevious, wn as Popover, Dn as PopoverAnchor, En as PopoverContent, An as PopoverDescription, On as PopoverHeader, kn as PopoverTitle, Tn as PopoverTrigger, jn as RadioGroup, Mn as RadioGroupItem, hi as RegisterForm, Oi as SearchTrigger, ho as SectionLabel, Nn as Select, Ln as SelectContent, Pn as SelectGroup, zn as SelectItem, Rn as SelectLabel, Hn as SelectScrollDownButton, Vn as SelectScrollUpButton, Bn as SelectSeparator, In as SelectTrigger, Fn as SelectValue, Un as Separator, Wn as Sheet, Kn as SheetClose, Yn as SheetContent, $n as SheetDescription, Zn as SheetFooter, Xn as SheetHeader, Qn as SheetTitle, Gn as SheetTrigger, gr as Sidebar, wr as SidebarContent, Sr as SidebarFooter, Tr as SidebarGroup, Dr as SidebarGroupAction, Or as SidebarGroupContent, Er as SidebarGroupLabel, xr as SidebarHeader, br as SidebarInput, yr as SidebarInset, kr as SidebarMenu, Nr as SidebarMenuAction, Pr as SidebarMenuBadge, Mr as SidebarMenuButton, Ar as SidebarMenuItem, Fr as SidebarMenuSkeleton, Ir as SidebarMenuSub, Rr as SidebarMenuSubButton, Lr as SidebarMenuSubItem, hr as SidebarProvider, vr as SidebarRail, Cr as SidebarSeparator, _r as SidebarTrigger, nr as Skeleton, _o as StatTile, Hr as Switch, Ur as Table, Gr as TableBody, Yr as TableCaption, Jr as TableCell, Kr as TableFooter, qr as TableHead, Wr as TableHeader, K as TableRow, Xr as Tabs, ei as TabsContent, Qr as TabsList, $r as TabsTrigger, ti as Textarea, $a as ThemeMenu, Vr as Toaster, ir as Tooltip, or as TooltipContent, rr as TooltipProvider, ar as TooltipTrigger, di as UIStringsProvider, H as UserAvatar, qi as VIEW_ICON_NAMES, za as ZOOM_DEFAULT, Ra as ZOOM_MAX, La as ZOOM_MIN, Ba as ZOOM_STEPS, eo as ZoomMenu, Za as antiFlashScript, mt as badgeVariants, Ct as buttonVariants, Vi as chipLabel, R as cn, Li as compare, Ai as csvDelimiter, Ni as csvValue, ga as dataTableFeatures, si as defaultStrings, Fi as downloadCsv, Z as facetText, gi as forgotPasswordSchema, B as initials, gn as inputVariants, X as isBlankFilter, Ri as labelsOf, Na as listUrlOf, Pa as listUrlProps, fi as loginSchema, Bi as named, Aa as parseListUrl, zi as rank, mi as registerSchema, Ga as resolveTheme, Ma as sameListUrl, Gi as setStoragePrefix, Q as storageKey, Ki as storagePrefix, Y as str, Zr as tabsListVariants, Pi as toCsv, ja as toListUrl, Hi as toQuery, Ve as toast, so as useConfirm, $i as useDataTableViews, cn as useFormField, tr as useIsMobile, mr as useSidebar, J as useStrings, Br as useTheme, Ya as useThemePreference, Xa as useZoom };
