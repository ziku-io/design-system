import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { ArrowsOutCardinalIcon as b, CaretDownIcon as x, CaretDownIcon as S, CaretLeftIcon as ee, CaretLeftIcon as C, CaretRightIcon as te, CaretRightIcon as ne, CaretRightIcon as re, CaretUpDownIcon as w, CaretUpIcon as ie, CaretUpIcon as ae, CheckCircleIcon as oe, CheckIcon as se, CheckIcon as T, CircleIcon as ce, ClockIcon as le, DesktopIcon as E, DotsThreeIcon as ue, DotsThreeIcon as D, DotsThreeIcon as de, DownloadSimpleIcon as fe, EnvelopeSimpleIcon as pe, EyeIcon as me, FunnelIcon as he, FunnelSimpleIcon as ge, InfoIcon as O, ListBulletsIcon as _e, MagnifyingGlassIcon as ve, MagnifyingGlassIcon as k, MoonIcon as ye, PlusIcon as be, ProhibitIcon as A, RowsIcon as xe, SidebarSimpleIcon as j, SignOutIcon as M, SortAscendingIcon as Se, SpinnerIcon as Ce, SpinnerIcon as we, SquaresFourIcon as Te, StarIcon as Ee, SunIcon as De, TableIcon as Oe, TagIcon as ke, TrashIcon as Ae, UsersIcon as je, WarningCircleIcon as N, WarningIcon as P, XCircleIcon as Me, XIcon as F, XIcon as I } from "@phosphor-icons/react";
import { Controller as Ne, FormProvider as Pe, useForm as Fe, useFormContext as Ie, useFormState as L } from "react-hook-form";
import { Toaster as R, toast as Le } from "sonner";
import { zodResolver as Re } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Command as B } from "cmdk";
import { columnFacetingFeature as ze, columnFilteringFeature as Be, columnGroupingFeature as Ve, columnVisibilityFeature as He, createExpandedRowModel as V, createFacetedRowModel as Ue, createFacetedUniqueValues as We, createFilteredRowModel as Ge, createGroupedRowModel as Ke, createPaginatedRowModel as qe, createSortedRowModel as Je, globalFilteringFeature as Ye, rowExpandingFeature as Xe, rowPaginationFeature as Ze, rowSortingFeature as Qe, tableFeatures as $e, useTable as et } from "@tanstack/react-table";
//#region src/lib/utils.ts
function H(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var tt = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
function U({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: H(tt({ variant: t }), e),
		...n
	});
}
function nt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: H("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: H("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function W(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function it({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: H("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function at({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: H("aspect-square size-full", e),
		...t
	});
}
function ot({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: H("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function st({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: H("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: H("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: H("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
function ut({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(it, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(at, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(ot, { children: n ?? W(e) })]
	});
}
function dt({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(ct, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(ut, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(lt, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var ft = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
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
function pt({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? g.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: H(ft({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function mt({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: H("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function gt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: H("inline-flex items-center gap-1.5", e),
		...t
	});
}
function _t({ asChild: e, className: t, ...n }) {
	let r = e ? g.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: H("transition-colors hover:text-foreground", t),
		...n
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: H("font-normal text-foreground", e),
		...t
	});
}
function yt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: H("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(ne, {})
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: H("flex size-9 items-center justify-center", e),
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
var xt = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:shadow-[inset_0_0_0_100vmax_rgb(0_0_0/0.08)]", {
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
function G({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? g.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: H(xt({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/card.tsx
function St({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		className: H("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", e),
		...t
	});
}
function Ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: H("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: H("leading-none font-semibold", e),
		...t
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: H("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: H("px-6", e),
		...t
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: H("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: H("peer relative size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", e),
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
function At({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function jt({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Mt({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Nt({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function Pt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: H("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Ft({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(Mt, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(Pt, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: H("fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(I, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: H("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Lt({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: H("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(G, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: H("text-lg leading-none font-semibold", e),
		...t
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Bt({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Vt({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Ht({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Ut({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: H("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Wt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Gt({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg dark:data-[variant=destructive]:focus:bg-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function Kt({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(T, { className: "size-4" }) })
		}), t]
	});
}
function qt({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Jt({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(ce, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function Yt({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: H("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function Xt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: H("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Zt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Qt({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function $t({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: H("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(re, { className: "ml-auto size-4" })]
	});
}
function en({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: H("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function tn({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: H("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var nn = Pe, rn = e.createContext({}), an = ({ ...e }) => /* @__PURE__ */ a(rn.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(Ne, { ...e })
}), on = () => {
	let t = e.useContext(rn), n = e.useContext(sn);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = Ie(), i = L({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, sn = e.createContext({});
function cn({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(sn.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: H("grid gap-2", t),
			...n
		})
	});
}
function ln({ className: e, ...t }) {
	let { error: n, formItemId: r } = on();
	return /* @__PURE__ */ a(tn, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: H("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function un({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = on();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function dn({ className: e, ...t }) {
	let { formDescriptionId: n } = on();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function fn({ className: e, ...t }) {
	let { error: n, formMessageId: r } = on(), i = n ? String(n?.message ?? "") : t.children;
	return i ? /* @__PURE__ */ a("p", {
		"data-slot": "form-message",
		id: r,
		role: n ? "alert" : void 0,
		className: H("text-sm text-danger-fg", e),
		...t,
		children: i
	}) : null;
}
//#endregion
//#region src/components/ui/input.tsx
var pn = t(H("h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"), {
	variants: { variant: {
		default: "border border-input bg-transparent shadow-xs focus-visible:border-ring dark:bg-input/30",
		ghost: "border border-transparent bg-transparent hover:border-input focus-visible:border-ring",
		cell: "h-8 rounded-none border-0 bg-transparent px-2 shadow-none hover:bg-accent/40 focus-visible:bg-background focus-visible:ring-inset"
	} },
	defaultVariants: { variant: "default" }
});
function K({ className: e, type: t, variant: n, ...r }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		className: H(pn({ variant: n }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: H("mx-auto flex w-full justify-center", e),
		...t
	});
}
function hn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: H("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function gn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function _n({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: H(xt({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ o(_n, {
		"aria-label": "Go to previous page",
		size: "default",
		className: H("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(C, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Previous"
		})]
	});
}
function yn({ className: e, ...t }) {
	return /* @__PURE__ */ o(_n, {
		"aria-label": "Go to next page",
		size: "default",
		className: H("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: "Next"
		}), /* @__PURE__ */ a(re, {})]
	});
}
function bn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: H("flex size-9 items-center justify-center", e),
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
function xn({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function Sn({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function Cn({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: H("z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function wn({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: H("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function En({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: H("font-medium", e),
		...t
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: H("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function On({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: H("grid gap-3", e),
		...t
	});
}
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Item, {
		"data-slot": "radio-group-item",
		className: H("relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
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
function An({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function jn({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function Mn({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Nn({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: H("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(S, { className: "size-4 opacity-50" })
		})]
	});
}
function Pn({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: H("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(Rn, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: H("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(zn, {})
		]
	}) });
}
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: H("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function In({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(m.Item, {
		"data-slot": "select-item",
		className: H("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(m.ItemIndicator, { children: /* @__PURE__ */ a(T, { className: "size-4" }) })
		}), /* @__PURE__ */ a(m.ItemText, { children: t })]
	});
}
function Ln({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: H("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(ae, { className: "size-4" })
	});
}
function zn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(S, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Bn({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: H("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Vn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Hn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Un({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Wn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Gn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: H("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Kn({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Wn, { children: [/* @__PURE__ */ a(Gn, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: H("fixed z-50 flex flex-col bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto max-h-dvh border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto max-h-dvh border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [/* @__PURE__ */ a("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain",
			children: t
		}), r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary sm:-m-2 sm:p-2",
			children: [/* @__PURE__ */ a(I, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function qn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: H("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: H("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: H("font-semibold text-foreground", e),
		...t
	});
}
function Xn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Zn = 768;
function Qn() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Zn);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Zn), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function $n({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: H("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function er({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function tr({ ...e }) {
	return /* @__PURE__ */ a(er, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function nr({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function rr({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ o(y.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: H("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-tooltip px-3 py-1.5 text-xs text-balance text-tooltip-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ a(y.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-tooltip fill-tooltip" })]
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var ir = "sidebar_state", ar = 604800, or = "16rem", sr = "18rem", cr = "3rem", lr = "b", ur = e.createContext(null);
function dr() {
	let t = e.useContext(ur);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function fr({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Qn(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${ir}=${t}; path=/; max-age=${ar}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === lr && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(ur.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": or,
				"--sidebar-width-icon": cr,
				...o
			},
			className: H("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function pr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: l, state: u, openMobile: d, setOpenMobile: f } = dr();
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: H("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (l) return /* @__PURE__ */ a(Vn, {
		open: d,
		onOpenChange: f,
		...c,
		children: /* @__PURE__ */ o(Kn, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": sr },
			side: e,
			children: [/* @__PURE__ */ o(qn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Yn, { children: "Sidebar" }), /* @__PURE__ */ a(Xn, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ a("div", {
				className: "flex h-full w-full flex-col",
				children: s
			})]
		})
	});
	let p = n === "offcanvas";
	return /* @__PURE__ */ o("div", {
		className: H("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": u,
		"data-collapsible": u === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: H("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", p ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: H("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", p ? ["transition-transform duration-200 ease-linear", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
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
function mr({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = dr();
	return /* @__PURE__ */ o(G, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: H("size-7", e),
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
function hr({ className: e, ...t }) {
	let { toggleSidebar: n } = dr();
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: n,
		title: "Toggle Sidebar",
		className: H("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-transform ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function gr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: H("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function _r({ className: e, ...t }) {
	return /* @__PURE__ */ a(K, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: H("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function vr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ a(Bn, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: H("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function xr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: H("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: H("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function Cr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: H("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-opacity duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function wr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: H("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function Tr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: H("w-full text-sm", e),
		...t
	});
}
function Er({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: H("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: H("group/menu-item relative", e),
		...t
	});
}
var Or = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function kr({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = dr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: H(Or({
			variant: n,
			size: r
		}), s),
		...c
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(tr, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(nr, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(rr, {
			side: "right",
			align: "center",
			hidden: d !== "collapsed" || u,
			...i
		})]
	})) : f;
}
function Ar({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: H("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: H("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Mr({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useId(), s = e.useMemo(() => {
		let e = 0;
		for (let t = 0; t < i.length; t++) e = e * 31 + i.charCodeAt(t) | 0;
		return `${Math.abs(e) % 41 + 50}%`;
	}, [i]);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: H("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a($n, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a($n, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: H("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: H("group/menu-sub-item relative", e),
		...t
	});
}
function Fr({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? g.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: H("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/hooks/use-theme.ts
var Ir = () => typeof document < "u" && document.documentElement.classList.contains("light") ? "light" : "dark";
function Lr() {
	let [t, n] = e.useState(Ir);
	return e.useEffect(() => {
		n(Ir());
		let e = new MutationObserver(() => n(Ir()));
		return e.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"]
		}), () => e.disconnect();
	}, []), t;
}
//#endregion
//#region src/components/ui/sonner.tsx
var Rr = ({ theme: e, ...t }) => {
	let n = Lr();
	return /* @__PURE__ */ a(R, {
		theme: e ?? n,
		className: "toaster group",
		closeButton: !0,
		icons: {
			success: /* @__PURE__ */ a(oe, { className: "size-4" }),
			info: /* @__PURE__ */ a(O, { className: "size-4" }),
			warning: /* @__PURE__ */ a(P, { className: "size-4" }),
			error: /* @__PURE__ */ a(Me, { className: "size-4" }),
			loading: /* @__PURE__ */ a(we, { className: "size-4 animate-spin" })
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
function zr({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(_.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: H("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-[background-color,border-color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", e),
		...n,
		children: /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "switch-thumb",
			className: H("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ a("table", {
			"data-slot": "table",
			className: H("w-full caption-bottom text-sm", e),
			...t
		})
	});
}
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: H("[&_tr]:border-b", e),
		...t
	});
}
function Hr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: H("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Ur({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: H("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: H("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function Wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: H("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Gr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: H("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: H("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function qr({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: H("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Jr = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Yr({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: H(Jr({ variant: t }), e),
		...n
	});
}
function Xr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: H("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: H("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		className: H("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function $r({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: H("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
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
var ei = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function ti({ component: e, children: t }) {
	return /* @__PURE__ */ a(ei.Provider, {
		value: e,
		children: t
	});
}
function J(t) {
	let n = e.useContext(ei);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/lib/strings.tsx
var ni = new Intl.NumberFormat(), ri = (e) => ni.format(e), ii = {
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
		zoomLevel: (e) => `${ri(e)}%`
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
		hidden: (e) => `${ri(e)} hidden`,
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
		sortCount: (e) => `${ri(e)} sorts`,
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
		rowCount: (e) => e === 1 ? "1 row" : `${ri(e)} rows`,
		pageOf: (e, t) => `Page ${ri(e)} of ${ri(t)}`,
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
function ai(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function oi(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) ai(n, e, t, r);
	return n;
}
var si = e.createContext(ii);
function ci({ strings: t, children: n }) {
	let r = e.useContext(si), i = e.useMemo(() => oi(r, t), [r, t]);
	return /* @__PURE__ */ a(si.Provider, {
		value: i,
		children: n
	});
}
function Y() {
	return e.useContext(si);
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var li = (e) => z.object({
	email: z.email(e.invalidEmail),
	password: z.string().min(1, e.passwordRequired)
});
function ui({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = Y().auth, f = e.useMemo(() => li(d), [d]), p = Fe({
		resolver: Re(f),
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
	return /* @__PURE__ */ o(St, { children: [/* @__PURE__ */ o(Ct, {
		className: "text-center",
		children: [/* @__PURE__ */ a(wt, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(Tt, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(Dt, { children: /* @__PURE__ */ a(nn, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(rt, { children: n })
				}),
				/* @__PURE__ */ a(an, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(cn, { children: [
						/* @__PURE__ */ a(ln, { children: d.email }),
						/* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(K, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(fn, {})
					] })
				}),
				/* @__PURE__ */ a(an, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(cn, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(ln, { children: d.password }), l && /* @__PURE__ */ a(J, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(un, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(K, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(fn, {})
					] })
				}),
				/* @__PURE__ */ o(G, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), d.signIn]
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
var di = (e) => z.object({
	name: z.string().min(2, e.nameTooShort),
	email: z.email(e.invalidEmail),
	password: z.string().min(8, e.passwordTooShort),
	confirmPassword: z.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function fi({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = Y().auth, d = e.useMemo(() => di(u), [u]), f = Fe({
		resolver: Re(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(an, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(cn, { children: [
			/* @__PURE__ */ a(ln, { children: t }),
			/* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(K, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(dn, { children: r }),
			/* @__PURE__ */ a(fn, {})
		] })
	});
	return /* @__PURE__ */ o(St, { children: [/* @__PURE__ */ o(Ct, {
		className: "text-center",
		children: [/* @__PURE__ */ a(wt, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(Tt, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(Dt, { children: /* @__PURE__ */ a(nn, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(rt, { children: n })
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
				/* @__PURE__ */ o(G, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), u.createAccount]
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
var pi = (e) => z.object({ email: z.email(e.invalidEmail) });
function mi({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = Y().auth, c = e.useMemo(() => pi(s), [s]), l = Fe({
		resolver: Re(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(St, { children: [/* @__PURE__ */ o(Ct, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(pe, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(wt, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(Tt, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(Dt, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(J, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(St, { children: [/* @__PURE__ */ o(Ct, {
		className: "text-center",
		children: [/* @__PURE__ */ a(wt, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(Tt, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(Dt, { children: /* @__PURE__ */ a(nn, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(rt, { children: n })
				}),
				/* @__PURE__ */ a(an, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(cn, { children: [
						/* @__PURE__ */ a(ln, { children: s.email }),
						/* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(K, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(fn, {})
					] })
				}),
				/* @__PURE__ */ o(G, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(Ce, { className: "animate-spin" }), s.sendResetLink]
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
function hi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B, {
		"data-slot": "command",
		className: H("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function gi({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ a(At, {
		...s,
		children: /* @__PURE__ */ o(Ft, {
			className: H("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(It, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Rt, { children: e }), /* @__PURE__ */ a(zt, { children: t })]
			}), /* @__PURE__ */ a(hi, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})]
		})
	});
}
function _i({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(k, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(B.Input, {
			"data-slot": "command-input",
			className: H("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.List, {
		"data-slot": "command-list",
		className: H("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function yi({ ...e }) {
	return /* @__PURE__ */ a(B.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Group, {
		"data-slot": "command-group",
		className: H("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Separator, {
		"data-slot": "command-separator",
		className: H("-mx-1 h-px bg-border", e),
		...t
	});
}
function Si({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Item, {
		"data-slot": "command-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function wi({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
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
	]), /* @__PURE__ */ o(gi, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(_i, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(vi, { children: [/* @__PURE__ */ a(yi, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(xi, {}), /* @__PURE__ */ a(bi, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(Si, {
				value: `${e.label} ${e.keywords?.join(" ") ?? ""}`,
				onSelect: () => {
					e.onSelect?.(), m(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ a("span", { children: e.label }),
					e.shortcut && /* @__PURE__ */ a(Ci, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function Ti({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = Y().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: H("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
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
function Ei({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = Y().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [x, S] = e.useState(0), ee = e.useRef(null), C = t.length === 0 ? -1 : Math.min(x, t.length - 1), te = C >= 0 ? `${h}-option-${C}` : void 0;
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
		className: H("relative", p),
		children: [/* @__PURE__ */ a(K, {
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
				className: H("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === C && "bg-accent text-accent-foreground"),
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
var Di = (e) => e === "," ? ";" : ",", Oi = /^[=+\-@\t\r]/;
function ki(e, t) {
	let n = Oi.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function Ai(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function ji(e, t, n = ".") {
	let r = Di(n), i = (e) => e.map((e) => ki(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => Ai(t.value(e), n))))].join("\r\n");
}
function Mi(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var Ni = "—", X = (e) => e == null || e === "" ? "" : String(e);
function Pi(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var Z = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, Fi = (e) => Array.isArray(e) ? e.map(X) : [X(e)], Ii = (e) => (t, n) => {
	if (!e.order) return Pi(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Li = (e) => !!e.header;
function Q(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Ri(e, t) {
	if (Z(t)) return e.header;
	let n = Fi(t).map((t) => Q(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function zi(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || Z(e.value) ? [] : [[t, Fi(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var Bi = "ziku", Vi = Bi;
function Hi(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Vi !== Bi && Vi !== e) throw Error(`Storage prefix is already "${Vi}", cannot change it to "${e}"`);
	Vi = e;
}
var Ui = () => Vi, Wi = (...e) => [Vi, ...e].join("."), Gi = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Ki = (e) => Wi("views", e);
function qi(e, t, n = ii.dataTable.allView) {
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
function Ji(e, t, n, r) {
	let i = qi(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Ki(e)), n = t ? JSON.parse(t) : null;
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
var Yi = 800, Xi = (e) => e.shared !== void 0;
function Zi(t, n, r, i, a) {
	let o = Y().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = Ji(r, t, n, o);
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
			let e = s.filter((e) => !Xi(e));
			localStorage.setItem(Ki(r), JSON.stringify({
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
			let a = new Set(qi(t, n).map((e) => e.id)), o = s.filter((e) => !Xi(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => Xi(e) || !u.has(e.name)),
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
		}, Yi)));
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
			return r && Xi(r) && g(r.id, t(e(r))), {
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
				icon: Gi[n.views.length % Gi.length],
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
			t && Xi(t) && p.current?.remove(t.id).catch(() => {});
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
var Qi = {
	table: Oe,
	list: _e,
	board: Te,
	star: Ee,
	funnel: he,
	clock: le,
	users: je,
	tag: ke,
	eye: me
};
function $i({ name: e, className: t }) {
	let n = Qi[e] ?? Oe;
	return /* @__PURE__ */ a(n, { className: t });
}
function $({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(xn, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(Sn, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(Cn, {
			align: r,
			className: H("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function ea({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a($, {
		align: "end",
		width: r,
		className: H("relative shrink-0 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50", n ? "text-link" : "text-muted-foreground hover:text-foreground"),
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
var ta = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function na({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = Y(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
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
			className: H(ta, "text-muted-foreground"),
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
			let t = e.icon ?? Oe;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: ta,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function ra({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
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
			children: /* @__PURE__ */ a(Ae, { className: "size-3.5" })
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
			children: [/* @__PURE__ */ a(kt, {
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
function ia({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = Y().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(An, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(Nn, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(Mn, {})
					}), /* @__PURE__ */ a(Pn, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(In, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(An, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(Nn, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(Mn, {})
					}), /* @__PURE__ */ o(Pn, { children: [/* @__PURE__ */ a(In, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(In, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(F, {
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
			className: H(ta, "text-muted-foreground"),
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
			className: H(ta, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(Ae, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function aa({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Li).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(kt, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function oa({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a($, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(sa, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function sa({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
	let { dataTable: c } = Y(), [l, u] = e.useState(!1), d = e.useId();
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
				children: [/* @__PURE__ */ a(K, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: t,
					"aria-invalid": l || void 0,
					"aria-describedby": l ? d : void 0,
					onChange: () => u(!1)
				}), /* @__PURE__ */ a(G, {
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
function ca({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = Y(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
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
				children: /* @__PURE__ */ a(F, {
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
				className: H("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a($i, {
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
			children: Gi.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: H("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a($i, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: ta,
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
var la = "application/x-ziku-card", ua = {
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
function da({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
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
			let n = t.dataTransfer.getData(la), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: H("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(pa, {
			col: e,
			state: g(e.key),
			drop: _(e.key)
		}, e.key) : /* @__PURE__ */ o("div", {
			..._(e.key),
			style: { maxHeight: c },
			className: H("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
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
							d(l), e.dataTransfer.setData(la, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: H("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", h && "select-none", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a(fa, {
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
function fa({ columns: e, from: t, onPick: n }) {
	let r = Y().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Bt, { children: [/* @__PURE__ */ a(Ht, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: H("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(b, { size: 14 })
	}), /* @__PURE__ */ a(Ut, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(Gt, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function pa({ col: e, state: t, drop: n }) {
	let r = e.tile, i = ua[r.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: H("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? H("border-solid", i.over) : H("border-dashed", i.idle)),
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
var ma = $e({
	rowSortingFeature: Qe,
	sortedRowModel: Je(),
	columnFilteringFeature: Be,
	filteredRowModel: Ge(),
	globalFilteringFeature: Ye,
	columnFacetingFeature: ze,
	facetedRowModel: Ue(),
	facetedUniqueValues: We(),
	columnGroupingFeature: Ve,
	groupedRowModel: Ke(),
	rowExpandingFeature: Xe,
	expandedRowModel: V(),
	columnVisibilityFeature: He,
	rowPaginationFeature: Ze,
	paginatedRowModel: qe()
});
function ha({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: b, presets: S = [], viewKey: ee, onStateChange: C, view: ne, viewsBackend: re, paged: w, csv: ae, className: oe }) {
	let se = Y(), T = se.dataTable, ce = se.common, le = e.useMemo(() => n ?? [], [n]), E = !!w, D = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), de = e.useMemo(() => ({
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
			value: Z(e.value) ? [] : [X(e.value)]
		} : e).map((e) => {
			let t = D[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(X(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => D[e])
	}), [D]), O = Zi(de, S, ee, re, ne), { views: _e, active: k, isPreset: ye, patch: A } = O, j = e.useMemo(() => pe(k.state), [k.state, pe]);
	e.useEffect(() => {
		C?.(j, k.id);
	}, [
		j,
		k.id,
		C
	]);
	let M = (e) => (t) => A({ [e]: typeof t == "function" ? t(j[e]) : t }), Ce = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : Q(e, X(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!E || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: Li(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? Ii(e)(X(t.getValue(r)), X(n.getValue(r))) : Pi(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (Z(n)) return !0;
			let r = X(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, E]), [we, Ee] = e.useState(!0), [De, ke] = e.useState(0), N = j.grouping[0] ?? "", P = t.filter((e) => e.facet), Me = !!(y && P.length && c), I = j.mode === "board" && Me, Ne = p > 0 && !N && !I && !E, Pe = e.useMemo(() => j.columnFilters.filter((e) => !Z(e.value) && !D[e.id]?.filterKey), [j.columnFilters, D]), Fe = E && (Pe.length > 0 || j.grouping.length > 0 || I), Ie = e.useMemo(() => N && !j.sorting.some((e) => e.id === N) ? [{
		id: N,
		desc: !1
	}, ...j.sorting] : j.sorting, [N, j.sorting]), L = et({
		features: ma,
		data: le,
		columns: Ce,
		state: {
			sorting: Ie,
			columnFilters: E ? Pe : j.columnFilters,
			globalFilter: E ? "" : j.globalFilter,
			columnVisibility: j.columnVisibility,
			grouping: j.grouping,
			expanded: we,
			pagination: {
				pageIndex: Ne ? De : 0,
				pageSize: Ne ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: M("sorting"),
		onColumnFiltersChange: M("columnFilters"),
		onGlobalFilterChange: M("globalFilter"),
		onColumnVisibilityChange: M("columnVisibility"),
		onGroupingChange: M("grouping"),
		onExpandedChange: Ee,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: De,
				pageSize: Ne ? p : 2 ** 53 - 1
			}) : e;
			ke(t.pageIndex);
		},
		manualSorting: E && !N,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => X(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), R = L.getFilteredRowModel().rows;
	function Le() {
		if (!ae) return;
		let e = ae.decimal ?? ".", t = L.getVisibleLeafColumns().map((e) => D[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = L.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		Mi(ae.filename, ji(n, t, e));
	}
	e.useEffect(() => {
		ke(0);
	}, [
		j.columnFilters,
		j.globalFilter,
		j.grouping
	]);
	let Re = ba(j.globalFilter, ya), z = JSON.stringify(zi(t, {
		...j,
		globalFilter: Re
	})), B = e.useRef(w?.setQuery);
	e.useEffect(() => {
		B.current = w?.setQuery;
	}), e.useEffect(() => {
		B.current?.(JSON.parse(z));
	}, [z]);
	let ze = e.useRef(null), Be = w?.more, Ve = w?.hasMore ?? !1, He = w?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = ze.current;
		if (!e || !Be || !Ve || He) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && Be();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		Be,
		Ve,
		He
	]), e.useEffect(() => {
		Fe && Ve && !He && Be?.();
	}, [
		Fe,
		Ve,
		He,
		Be
	]);
	let V = j.columnFilters, Ue = Object.values(j.columnVisibility).filter((e) => e === !1).length, We = V.length > 0 || !!j.globalFilter || j.grouping.length > 0 || j.sorting.length > 0 || Ue > 0, Ge = We && (le.length > 0 || E), Ke = t.filter((e) => Li(e) && e.sortable !== !1 && !V.some((t) => t.id === e.key)), qe = t.filter((e) => Li(e) && e.sortable !== !1 && (!E || !!e.sortKey)), Je = (e) => A({ columnFilters: [...V, {
		id: e,
		value: D[e]?.facet ? [] : ""
	}] }), Ye = (e) => A({ columnFilters: V.filter((t) => t.id !== e) }), Xe = (e, t) => A({ columnFilters: V.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function Ze(e) {
		if (!e.facet) return [];
		let t = E && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: Q(e, t)
		})) : [...L.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Ii(e)(X(t[0]), X(n[0]))).map(([n, r]) => ({
			value: X(n),
			label: t ? Q(e, X(n)) : `${Q(e, X(n))} (${r})`
		}));
	}
	let Qe = (e) => A({
		mode: e,
		grouping: e === "board" && !N ? [P[0].key] : j.grouping
	}), $e = /* @__PURE__ */ a(aa, {
		columns: t,
		visibility: j.columnVisibility,
		onToggle: (e, t) => A({ columnVisibility: {
			...j.columnVisibility,
			[e]: t
		} })
	}), tt = /* @__PURE__ */ a(ia, {
		sorting: j.sorting,
		sortable: qe,
		byKey: D,
		onChange: (e) => A({ sorting: e })
	}), U = (e) => /* @__PURE__ */ a(na, {
		columns: P,
		empty: {
			label: T.noGrouping,
			onPick: () => {
				A({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			A({ grouping: [t] }), e?.();
		}
	}), nt = /* @__PURE__ */ o(i, { children: [
		V.map((e) => {
			let t = D[e.id];
			if (!t) return null;
			let n = t.icon ?? he;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Ri(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => Ye(e.id),
						"aria-label": T.removeFilterFor(t.header),
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(F, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		V.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(na, {
			columns: Ke,
			onPick: Je
		})
	] }), rt = [
		...Me ? [{
			key: "layout",
			icon: Oe,
			label: T.layout,
			value: j.mode === "board" ? T.board : T.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				xe,
				T.table
			], [
				"board",
				Te,
				T.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => Qe(e),
				className: H("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", j.mode === e && "font-medium"),
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
			value: Ue ? T.hidden(Ue) : T.allView,
			panel: $e
		},
		{
			key: "filter",
			icon: ge,
			label: T.filters,
			value: V.length ? String(V.length) : void 0,
			panel: nt
		},
		{
			key: "sort",
			icon: Se,
			label: T.sorting,
			value: j.sorting.length ? j.sorting.length === 1 ? D[j.sorting[0].id]?.header : String(j.sorting.length) : void 0,
			panel: tt
		},
		...P.length ? [{
			key: "group",
			icon: xe,
			label: T.groupBy,
			value: N ? D[N]?.header : ce.none,
			panel: U()
		}] : []
	], W = N ? D[N] : null, it = (e) => e && e !== "—" ? Q(W ?? void 0, e) : "—", at = e.useMemo(() => {
		if (!I || !W) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of R) {
			let n = X(t.getValue(N)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...W.order ?? [], ...e.keys()])].sort(Ii(W)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: it(t),
				items: n,
				subtitle: b?.(n),
				tile: W.boardTile?.(t)
			};
		});
	}, [
		I,
		W,
		R,
		N,
		b
	]), ot = L.getVisibleLeafColumns().length;
	return /* @__PURE__ */ o("div", {
		className: H("overflow-hidden rounded-md border bg-card", oe),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [_e.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => O.select(e.id),
						className: H("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === k.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a($i, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: T.sharedBy(e.ownerName),
								"aria-label": T.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(je, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(oa, {
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
						l && /* @__PURE__ */ a(ea, {
							icon: ve,
							label: ce.search,
							active: !!j.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(K, {
								className: "h-8",
								placeholder: u ?? ce.searchPlaceholder,
								autoFocus: !0,
								value: j.globalFilter,
								onChange: (e) => A({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(ea, {
							icon: ge,
							label: T.filter,
							active: V.length > 0,
							children: (e) => /* @__PURE__ */ a(na, {
								columns: Ke,
								onPick: (t) => {
									Je(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(ea, {
							icon: Se,
							label: T.sort,
							active: j.sorting.length > 0,
							width: "w-88",
							children: tt
						}),
						P.length > 0 && /* @__PURE__ */ a(ea, {
							icon: xe,
							label: T.group,
							active: !!N,
							children: (e) => U(e)
						}),
						/* @__PURE__ */ a(ea, {
							icon: me,
							label: T.visibleColumns,
							active: Ue > 0,
							width: "w-52",
							children: $e
						}),
						Me && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								xe,
								T.table
							], [
								"board",
								Te,
								T.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => Qe(e),
								className: H("px-2 py-1", j.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
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
							children: (e) => /* @__PURE__ */ a(ca, {
								name: k.name,
								icon: k.icon,
								onIcon: O.setIcon,
								onRename: O.rename,
								onClose: e,
								rows: rt,
								footer: /* @__PURE__ */ o(i, { children: [ae && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										Le(), e();
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
										/* @__PURE__ */ a(Ae, { className: "size-4" }),
										" ",
										T.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(V.length > 0 || j.sorting.length > 0 || N) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					j.sorting.length > 0 && /* @__PURE__ */ a($, {
						width: "w-88",
						className: _a,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Se, {
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
						children: tt
					}),
					N && /* @__PURE__ */ a($, {
						className: _a,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(xe, {
									className: "size-3.5",
									weight: "bold"
								}),
								T.groupedBy(D[N]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(x, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => U(e)
					}),
					V.map((e) => {
						let t = D[e.id];
						if (!t) return null;
						let n = t.icon ?? he;
						return /* @__PURE__ */ a($, {
							className: Z(e.value) ? va : _a,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Ri(t, e.value)
									}),
									/* @__PURE__ */ a(x, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(ra, {
								col: t,
								options: Ze(t),
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
								/* @__PURE__ */ a(be, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								T.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(na, {
							columns: Ke,
							onPick: (t) => {
								Je(t), e();
							}
						})
					}),
					We && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: O.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(F, {
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
				children: /* @__PURE__ */ o(Br, { children: [/* @__PURE__ */ a(Vr, { children: /* @__PURE__ */ a(q, {
					className: "bg-muted/50 hover:bg-muted/50",
					children: L.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Wr, {
						className: H("whitespace-nowrap", D[e.id]?.className),
						children: D[e.id]?.header
					}, e.id))
				}) }), /* @__PURE__ */ a(Hr, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(q, {
					className: "hover:bg-transparent",
					children: L.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Gr, {
						className: D[e.id]?.className,
						children: /* @__PURE__ */ a($n, { className: "h-4 w-full" })
					}, e.id))
				}, t)) })] })
			}) : R.length === 0 ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: Ge ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: T.noMatches }), /* @__PURE__ */ o(G, {
						variant: "outline",
						size: "sm",
						onClick: O.reset,
						children: [/* @__PURE__ */ a(F, {
							className: "size-3.5",
							weight: "bold"
						}), T.clearAllFilters]
					})]
				}) : s ?? ce.noResults
			}) : I ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(da, {
					columns: at,
					itemKey: c,
					renderCard: y,
					onDrop: W?.onSet ? (e, t) => W.onSet(e, t) : void 0,
					canDrag: (e) => !!W?.onSet && (W?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Br, { children: [/* @__PURE__ */ a(Vr, { children: L.getHeaderGroups().map((e) => /* @__PURE__ */ a(q, {
					className: "bg-muted/50",
					children: e.headers.map((e) => {
						let t = D[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ie : n === "desc" ? x : Se, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, {
							className: "size-3.5",
							weight: "bold"
						}), /* @__PURE__ */ a(L.FlexRender, { header: e })] });
						return /* @__PURE__ */ a(Wr, {
							"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
							className: H("whitespace-nowrap", t?.className),
							children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
								type: "button",
								onClick: e.column.getToggleSortingHandler(),
								className: H("inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"),
								children: [c, /* @__PURE__ */ a(s, {
									className: H("size-3", n ? "text-foreground" : "opacity-40"),
									weight: "bold"
								})]
							}) : /* @__PURE__ */ a("span", {
								className: "inline-flex items-center gap-1.5",
								children: c
							})
						}, e.id);
					})
				}, e.id)) }), /* @__PURE__ */ o(Hr, { children: [L.getRowModel().rows.map((e) => e.getIsGrouped() ? /* @__PURE__ */ a(q, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(Wr, {
						colSpan: ot,
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
								it(X(e.getValue(N))),
								/* @__PURE__ */ a("span", {
									className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
									children: e.subRows.length
								})
							]
						})
					})
				}, e.id) : /* @__PURE__ */ a(q, {
					role: f ? "button" : void 0,
					tabIndex: f ? 0 : void 0,
					onClick: f ? () => f(e.original) : void 0,
					onKeyDown: f ? (t) => {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), f(e.original));
					} : void 0,
					className: f ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" : void 0,
					children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Gr, {
						className: D[e.column.id]?.className,
						children: /* @__PURE__ */ a(L.FlexRender, { cell: e })
					}, e.id))
				}, e.id)), Ve && /* @__PURE__ */ a(q, {
					ref: ze,
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ a(Gr, {
						colSpan: ot,
						role: "status",
						"aria-live": "polite",
						className: "text-center text-xs text-muted-foreground",
						children: He ? T.loadingMore : null
					})
				})] })] })
			}),
			Ne && !r && R.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: T.rowCount(R.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: T.pageOf(De + 1, Math.max(L.getPageCount(), 1)) }),
						/* @__PURE__ */ a(G, {
							variant: "outline",
							size: "sm",
							onClick: () => L.previousPage(),
							disabled: !L.getCanPreviousPage(),
							children: T.previousPage
						}),
						/* @__PURE__ */ a(G, {
							variant: "outline",
							size: "sm",
							onClick: () => L.nextPage(),
							disabled: !L.getCanNextPage(),
							children: T.nextPage
						})
					]
				})]
			})
		]
	});
}
var ga = "rounded-md border px-2 py-1.5 text-sm outline-none", _a = `${ga} border-ring/60 bg-accent font-medium text-foreground`, va = `${ga} border-border bg-card text-muted-foreground`, ya = 300;
function ba(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function xa({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = Y().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(xn, { children: [/* @__PURE__ */ o(Sn, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: H("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(pt, {
				variant: "secondary",
				className: "max-w-40 truncate",
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(x, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(Cn, {
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
						/* @__PURE__ */ a(kt, {
							checked: n,
							tabIndex: -1,
							"aria-hidden": !0,
							className: "pointer-events-none"
						}),
						/* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
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
var Sa = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function Ca(e) {
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
function wa(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of Sa) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode === "board" && n.set("mode", "board"), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function Ta(e, t) {
	return wa(e).toString() === wa(t).toString();
}
function Ea(e, t) {
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
function Da(e) {
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
function Oa({ brand: e, brandHref: t = "/", sidebarHeader: n, nav: r, currentPath: s, user: c, userMenu: l, onSignOut: u, headerActions: d, headerContent: f, classNames: p, bleed: m = !1, children: h }) {
	let g = Y().shell;
	return /* @__PURE__ */ o(fr, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: g.skipToContent
		}),
		/* @__PURE__ */ o(pr, {
			collapsible: "icon",
			rootClassName: p?.sidebar,
			children: [
				/* @__PURE__ */ o(vr, { children: [/* @__PURE__ */ a(Er, { children: /* @__PURE__ */ a(Dr, { children: t === null ? /* @__PURE__ */ a("div", {
					className: "flex h-12 items-center gap-2 p-2 text-sm",
					children: e
				}) : /* @__PURE__ */ a(kr, {
					size: "lg",
					asChild: !0,
					children: /* @__PURE__ */ a(J, {
						href: t,
						children: e
					})
				}) }) }), n && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				})] }),
				/* @__PURE__ */ a(xr, { children: r.map((e, t) => /* @__PURE__ */ o(Sr, { children: [e.label && /* @__PURE__ */ a(Cr, { children: e.label }), /* @__PURE__ */ a(Tr, { children: /* @__PURE__ */ a(Er, { children: e.items.map((e) => /* @__PURE__ */ o(Dr, { children: [/* @__PURE__ */ a(kr, {
					asChild: !0,
					isActive: s === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(J, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(jr, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				c && /* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(Er, { children: /* @__PURE__ */ a(Dr, { children: /* @__PURE__ */ o(Bt, { children: [/* @__PURE__ */ a(Ht, {
					asChild: !0,
					children: /* @__PURE__ */ o(kr, {
						size: "lg",
						className: "data-[state=open]:bg-sidebar-accent",
						children: [
							/* @__PURE__ */ a(ut, {
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
				}), /* @__PURE__ */ o(Ut, {
					side: "top",
					align: "start",
					className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
					children: [
						/* @__PURE__ */ o(Yt, {
							className: "font-normal",
							children: [/* @__PURE__ */ a("div", {
								className: "text-sm font-medium",
								children: c.name
							}), /* @__PURE__ */ a("div", {
								className: "text-xs text-muted-foreground",
								children: c.email
							})]
						}),
						l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Xt, {}), l] }),
						u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Xt, {}), /* @__PURE__ */ o(Gt, {
							onSelect: u,
							children: [/* @__PURE__ */ a(M, {}), g.signOut]
						})] })
					]
				})] }) }) }) })
			]
		}),
		/* @__PURE__ */ o(gr, { children: [/* @__PURE__ */ o("header", {
			className: H("flex h-14 shrink-0 items-center gap-2 border-b px-4", p?.header),
			children: [
				/* @__PURE__ */ a(mr, { className: "-ml-1" }),
				/* @__PURE__ */ a(Bn, {
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
			className: H("flex flex-1 flex-col outline-none", m ? "gap-0" : "gap-6 p-4 md:p-6", p?.main),
			children: h
		})] })
	] });
}
//#endregion
//#region src/lib/preferences.ts
var ka = [
	"system",
	"light",
	"dark"
], Aa = 75, ja = 150, Ma = 100, Na = [
	75,
	90,
	100,
	110,
	125,
	150
];
function Pa(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Fa(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
function Ia(e, t, n) {
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
var La = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: light)").matches, Ra = (e) => e === "system" ? La() ? "light" : "dark" : e, za = Ia(() => {
	let e = Pa(Wi("theme"));
	return ka.includes(e) ? e : "system";
}, (e) => Fa(Wi("theme"), e), (e) => {
	if (typeof document > "u") return;
	let t = document.documentElement;
	t.classList.remove("light", "dark"), t.classList.add(Ra(e));
}), Ba = (e) => Math.min(150, Math.max(75, Math.round(e))), Va = Ia(() => {
	let e = Number(Pa(Wi("zoom")));
	return Number.isFinite(e) && e > 0 ? Ba(e) : 100;
}, (e) => Fa(Wi("zoom"), String(e)), (e) => {
	typeof document > "u" || document.documentElement.style.setProperty("--app-zoom", String(e / 100));
});
typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
	za.get() === "system" && za.refresh();
});
function Ha() {
	let t = e.useSyncExternalStore(za.subscribe, za.get, () => "system");
	return {
		theme: t,
		resolved: Ra(t),
		setTheme: za.set
	};
}
function Ua() {
	return {
		zoom: e.useSyncExternalStore(Va.subscribe, Va.get, () => 100),
		setZoom: (e) => Va.set(Ba(e))
	};
}
function Wa(e = Ui()) {
	return `(function(){try{var d=document.documentElement,g=function(k){try{return localStorage.getItem(${JSON.stringify(e)}+"."+k)}catch(e){return null}};var t=g("theme")||"system",l=t==="light"||(t==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches);d.classList.remove("light","dark");d.classList.add(l?"light":"dark");var z=parseFloat(g("zoom"));if(z>=75&&z<=150)d.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`;
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
var Ga = {
	system: E,
	light: De,
	dark: ye
};
function Ka({ side: e, align: t = "end", className: n }) {
	let r = Y().preferences, { theme: i, setTheme: s } = Ha(), c = Ga[i], l = {
		system: r.system,
		light: r.light,
		dark: r.dark
	};
	return /* @__PURE__ */ o(Bt, { children: [/* @__PURE__ */ a(Ht, {
		asChild: !0,
		children: /* @__PURE__ */ a(G, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.appearance,
			className: n,
			children: /* @__PURE__ */ a(c, {})
		})
	}), /* @__PURE__ */ o(Ut, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Yt, { children: r.appearance }), /* @__PURE__ */ a(qt, {
			value: i,
			onValueChange: (e) => s(e),
			children: Object.keys(l).map((e) => {
				let t = Ga[e];
				return /* @__PURE__ */ o(Jt, {
					value: e,
					children: [/* @__PURE__ */ a(t, {}), l[e]]
				}, e);
			})
		})]
	})] });
}
function qa({ side: e, align: t = "end", className: n }) {
	let r = Y().preferences, { zoom: i, setZoom: s } = Ua();
	return /* @__PURE__ */ o(Bt, { children: [/* @__PURE__ */ a(Ht, {
		asChild: !0,
		children: /* @__PURE__ */ a(G, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.zoom,
			className: n,
			children: /* @__PURE__ */ a(ve, {})
		})
	}), /* @__PURE__ */ o(Ut, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Yt, { children: r.zoom }), /* @__PURE__ */ a(qt, {
			value: String(i),
			onValueChange: (e) => s(Number(e)),
			children: Na.map((e) => /* @__PURE__ */ a(Jt, {
				value: String(e),
				children: r.zoomLevel(e)
			}, e))
		})]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var Ja = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function Ya({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = Y().modal;
	return /* @__PURE__ */ a(At, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Ft, {
			showCloseButton: !1,
			className: H("flex max-h-[92dvh] flex-col gap-0 p-0", Ja[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Rt, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(zt, { children: r })]
					}), /* @__PURE__ */ a(Nt, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(F, {
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
var Xa = 0, Za = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function Qa({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Xa++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Xa++,
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
	return /* @__PURE__ */ o(Za.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a($a, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function $a({ pending: t, onAnswer: n }) {
	let r = Y().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(Ya, {
		open: !0,
		onOpenChange: (e) => {
			e || n(c);
		},
		size: "sm",
		title: s.title,
		description: s.description,
		footer: /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(G, {
			variant: "outline",
			onClick: () => n(c),
			children: s.cancelLabel ?? r.cancel
		}), /* @__PURE__ */ a(G, {
			variant: s.danger ? "danger" : "default",
			onClick: f,
			children: s.confirmLabel ?? r.confirm
		})] }),
		children: t.kind === "prompt" && /* @__PURE__ */ o("form", {
			className: "grid gap-2",
			onSubmit: (e) => {
				e.preventDefault(), f();
			},
			children: [/* @__PURE__ */ a(tn, {
				htmlFor: d,
				children: t.options.label ?? s.title
			}), /* @__PURE__ */ a(K, {
				id: d,
				autoFocus: !0,
				value: l,
				placeholder: t.options.placeholder,
				onChange: (e) => u(e.target.value)
			})]
		})
	});
}
function eo() {
	return e.useContext(Za);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function to({ title: e, description: t, actions: n, className: r, ...i }) {
	return /* @__PURE__ */ o("div", {
		className: H("flex flex-wrap items-start justify-between gap-4", r),
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
function no({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
	return /* @__PURE__ */ o("div", {
		className: H("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", i),
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
function ro({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = N, className: s }) {
	let c = Y().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(G, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(U, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(rt, {
			className: "flex items-center justify-between gap-4",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(no, {
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/error-boundary.tsx
function io({ reset: e }) {
	let t = Y().common;
	return /* @__PURE__ */ a(ro, {
		title: t.crashed,
		onRetry: e
	});
}
var ao = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(io, {
			error: e,
			reset: this.reset
		}) : t;
	}
}, oo = "text-xs font-medium tracking-wider text-muted-foreground uppercase";
function so({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: H(oo, t),
		...n
	});
}
var co = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function lo({ label: e, value: t, hint: n, icon: r, trend: i = "flat", className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "stat-tile",
		className: H("rounded-lg border bg-card p-4", s),
		...c,
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ a("span", {
					className: oo,
					children: e
				}), r && /* @__PURE__ */ a(r, { className: "size-4 shrink-0 text-muted-foreground" })]
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 text-2xl font-semibold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ a("div", {
				className: H("mt-1 text-xs", co[i]),
				children: n
			})
		]
	});
}
//#endregion
export { U as Alert, rt as AlertDescription, nt as AlertTitle, Oa as AppShell, $r as AuthLayout, it as Avatar, st as AvatarBadge, ot as AvatarFallback, ct as AvatarGroup, lt as AvatarGroupCount, at as AvatarImage, dt as AvatarStack, pt as Badge, mt as Breadcrumb, bt as BreadcrumbEllipsis, gt as BreadcrumbItem, _t as BreadcrumbLink, ht as BreadcrumbList, vt as BreadcrumbPage, yt as BreadcrumbSeparator, G as Button, St as Card, Et as CardAction, Dt as CardContent, Tt as CardDescription, Ot as CardFooter, Ct as CardHeader, wt as CardTitle, kt as Checkbox, xa as ChipPicker, Ei as Combobox, wi as CommandMenu, Qa as ConfirmProvider, ha as DataTable, At as Dialog, Nt as DialogClose, Ft as DialogContent, zt as DialogDescription, Lt as DialogFooter, It as DialogHeader, Pt as DialogOverlay, Mt as DialogPortal, Rt as DialogTitle, jt as DialogTrigger, Bt as DropdownMenu, Kt as DropdownMenuCheckboxItem, Ut as DropdownMenuContent, Wt as DropdownMenuGroup, Gt as DropdownMenuItem, Yt as DropdownMenuLabel, Vt as DropdownMenuPortal, qt as DropdownMenuRadioGroup, Jt as DropdownMenuRadioItem, Xt as DropdownMenuSeparator, Zt as DropdownMenuShortcut, Qt as DropdownMenuSub, en as DropdownMenuSubContent, $t as DropdownMenuSubTrigger, Ht as DropdownMenuTrigger, no as EmptyState, ao as ErrorBoundary, ro as ErrorState, mi as ForgotPasswordForm, nn as Form, un as FormControl, dn as FormDescription, an as FormField, cn as FormItem, ln as FormLabel, fn as FormMessage, K as Input, da as Kanban, Sa as LIST_PARAMS, tn as Label, J as Link, ti as LinkProvider, ui as LoginForm, Ya as Modal, Ni as NONE, to as PageHeader, mn as Pagination, hn as PaginationContent, bn as PaginationEllipsis, gn as PaginationItem, _n as PaginationLink, yn as PaginationNext, vn as PaginationPrevious, xn as Popover, wn as PopoverAnchor, Cn as PopoverContent, Dn as PopoverDescription, Tn as PopoverHeader, En as PopoverTitle, Sn as PopoverTrigger, On as RadioGroup, kn as RadioGroupItem, fi as RegisterForm, Ti as SearchTrigger, so as SectionLabel, An as Select, Pn as SelectContent, jn as SelectGroup, In as SelectItem, Fn as SelectLabel, zn as SelectScrollDownButton, Rn as SelectScrollUpButton, Ln as SelectSeparator, Nn as SelectTrigger, Mn as SelectValue, Bn as Separator, Vn as Sheet, Un as SheetClose, Kn as SheetContent, Xn as SheetDescription, Jn as SheetFooter, qn as SheetHeader, Yn as SheetTitle, Hn as SheetTrigger, pr as Sidebar, xr as SidebarContent, yr as SidebarFooter, Sr as SidebarGroup, wr as SidebarGroupAction, Tr as SidebarGroupContent, Cr as SidebarGroupLabel, vr as SidebarHeader, _r as SidebarInput, gr as SidebarInset, Er as SidebarMenu, Ar as SidebarMenuAction, jr as SidebarMenuBadge, kr as SidebarMenuButton, Dr as SidebarMenuItem, Mr as SidebarMenuSkeleton, Nr as SidebarMenuSub, Fr as SidebarMenuSubButton, Pr as SidebarMenuSubItem, fr as SidebarProvider, hr as SidebarRail, br as SidebarSeparator, mr as SidebarTrigger, $n as Skeleton, lo as StatTile, zr as Switch, Br as Table, Hr as TableBody, Kr as TableCaption, Gr as TableCell, Ur as TableFooter, Wr as TableHead, Vr as TableHeader, q as TableRow, qr as Tabs, Zr as TabsContent, Yr as TabsList, Xr as TabsTrigger, Qr as Textarea, Ka as ThemeMenu, Rr as Toaster, tr as Tooltip, rr as TooltipContent, er as TooltipProvider, nr as TooltipTrigger, ci as UIStringsProvider, ut as UserAvatar, Gi as VIEW_ICON_NAMES, Ma as ZOOM_DEFAULT, ja as ZOOM_MAX, Aa as ZOOM_MIN, Na as ZOOM_STEPS, qa as ZoomMenu, Wa as antiFlashScript, ft as badgeVariants, xt as buttonVariants, Ri as chipLabel, H as cn, Pi as compare, Di as csvDelimiter, Ai as csvValue, ma as dataTableFeatures, ii as defaultStrings, Mi as downloadCsv, Q as facetText, pi as forgotPasswordSchema, W as initials, pn as inputVariants, Z as isBlankFilter, Fi as labelsOf, Ea as listUrlOf, Da as listUrlProps, li as loginSchema, Li as named, Ca as parseListUrl, Ii as rank, di as registerSchema, Ra as resolveTheme, Ta as sameListUrl, Hi as setStoragePrefix, Wi as storageKey, Ui as storagePrefix, X as str, Jr as tabsListVariants, ji as toCsv, wa as toListUrl, zi as toQuery, Le as toast, eo as useConfirm, Zi as useDataTableViews, on as useFormField, Qn as useIsMobile, dr as useSidebar, Y as useStrings, Lr as useTheme, Ha as useThemePreference, Ua as useZoom };
