import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, RadioGroup as p, Select as m, Separator as h, Slot as g, Switch as _, Tabs as v, Tooltip as y } from "radix-ui";
import { ArrowsOutCardinalIcon as b, CaretDownIcon as x, CaretDownIcon as S, CaretLeftIcon as ee, CaretLeftIcon as C, CaretRightIcon as te, CaretRightIcon as ne, CaretRightIcon as re, CaretUpDownIcon as w, CaretUpIcon as ie, CaretUpIcon as ae, CheckCircleIcon as oe, CheckIcon as se, CheckIcon as T, CircleIcon as ce, ClockIcon as le, DotsThreeIcon as ue, DotsThreeIcon as E, DotsThreeIcon as D, DownloadSimpleIcon as de, EnvelopeSimpleIcon as fe, EyeIcon as pe, FunnelIcon as me, FunnelSimpleIcon as he, InfoIcon as ge, ListBulletsIcon as O, MagnifyingGlassIcon as _e, MagnifyingGlassIcon as ve, PlusIcon as ye, ProhibitIcon as k, RowsIcon as be, SidebarSimpleIcon as xe, SignOutIcon as A, SortAscendingIcon as Se, SpinnerIcon as j, SpinnerIcon as Ce, SquaresFourIcon as we, StarIcon as Te, TableIcon as Ee, TagIcon as De, TrashIcon as Oe, UsersIcon as ke, WarningCircleIcon as Ae, WarningIcon as je, XCircleIcon as Me, XIcon as Ne, XIcon as M } from "@phosphor-icons/react";
import { Controller as Pe, FormProvider as Fe, useForm as N, useFormContext as Ie, useFormState as Le } from "react-hook-form";
import { Toaster as Re, toast as ze } from "sonner";
import { zodResolver as P } from "@hookform/resolvers/zod";
import { z as F } from "zod";
import { Command as I } from "cmdk";
import { columnFacetingFeature as Be, columnFilteringFeature as Ve, columnGroupingFeature as He, columnVisibilityFeature as Ue, createExpandedRowModel as We, createFacetedRowModel as Ge, createFacetedUniqueValues as Ke, createFilteredRowModel as L, createGroupedRowModel as qe, createPaginatedRowModel as Je, createSortedRowModel as Ye, globalFilteringFeature as Xe, rowExpandingFeature as Ze, rowPaginationFeature as Qe, rowSortingFeature as $e, tableFeatures as et, useTable as tt } from "@tanstack/react-table";
import { useVirtualizer as nt } from "@tanstack/react-virtual";
//#region src/lib/utils.ts
function R(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var rt = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
		className: R(rt({ variant: t }), e),
		...n
	});
}
function it({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: R("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function B({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: R("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function at(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function ot({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: R("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function st({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: R("aspect-square size-full", e),
		...t
	});
}
function V({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: R("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: R("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: R("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function ut({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: R("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
function H({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(ot, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(st, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(V, { children: n ?? at(e) })]
	});
}
function U({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(lt, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(H, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(ut, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var dt = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3", {
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
function W({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? g.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: R(dt({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function G({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		...e
	});
}
function ft({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: R("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: R("inline-flex items-center gap-1.5", e),
		...t
	});
}
function mt({ asChild: e, className: t, ...n }) {
	let r = e ? g.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: R("transition-colors hover:text-foreground", t),
		...n
	});
}
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: R("font-normal text-foreground", e),
		...t
	});
}
function gt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: R("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(ne, {})
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: R("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(E, {
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
var vt = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98] active:shadow-[inset_0_0_0_100vmax_rgb(0_0_0/0.08)]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			danger: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			success: "bg-success text-success-foreground hover:bg-success/90 focus-visible:ring-success/40",
			warning: "bg-warning text-warning-foreground hover:bg-warning/90 focus-visible:ring-warning/40",
			destructive: "bg-danger text-danger-foreground hover:bg-danger/90 focus-visible:ring-danger/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
			glass: "border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] text-foreground shadow-[var(--surface-shadow)] backdrop-blur-xl hover:bg-[var(--surface-glass)]/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
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
function K({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? g.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: R(vt({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/card.tsx
function yt({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		"data-variant": t,
		className: R("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", t === "glass" && "border-[var(--surface-glass-border)] bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl", e),
		...n
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: R("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: R("leading-none font-semibold", e),
		...t
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
function Ct({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: R("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: R("px-6", e),
		...t
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: R("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: R("peer relative size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
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
function Dt({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function Ot({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function kt({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function At({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: R("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Mt({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(kt, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(jt, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: R("fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-6 shadow-[var(--surface-shadow)] backdrop-blur-xl duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(M, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function Nt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: R("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Pt({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: R("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(K, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function Ft({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: R("text-lg leading-none font-semibold", e),
		...t
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Lt({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Rt({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function zt({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Bt({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: R("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Vt({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Ht({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: R("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function Ut({ className: e, children: t, checked: n, ...r }) {
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
function Wt({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Gt({ className: e, children: t, ...n }) {
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
function Kt({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: R("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function qt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: R("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Jt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: R("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Yt({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Xt({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: R("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(re, { className: "ml-auto size-4" })]
	});
}
function Zt({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: R("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Qt({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: R("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var $t = Fe, en = e.createContext({}), tn = ({ ...e }) => /* @__PURE__ */ a(en.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(Pe, { ...e })
}), nn = () => {
	let t = e.useContext(en), n = e.useContext(rn);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = Ie(), i = Le({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, rn = e.createContext({});
function an({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(rn.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: R("grid gap-2", t),
			...n
		})
	});
}
function on({ className: e, ...t }) {
	let { error: n, formItemId: r } = nn();
	return /* @__PURE__ */ a(Qt, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: R("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function sn({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = nn();
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function cn({ className: e, ...t }) {
	let { formDescriptionId: n } = nn();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
function ln({ className: e, ...t }) {
	let { error: n, formMessageId: r } = nn(), i = n ? String(n?.message ?? "") : t.children;
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
var un = {
	ghost: "rounded-sm border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, dn = t(R("h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20"), {
	variants: { variant: {
		default: "border border-input bg-transparent shadow-xs focus-visible:border-ring",
		ghost: un.ghost,
		cell: `h-8 px-2 ${un.cell}`
	} },
	defaultVariants: { variant: "default" }
});
function q({ className: e, type: t, variant: n, ...r }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		className: R(dn({ variant: n }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function fn({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: R("mx-auto flex w-full justify-center", e),
		...t
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: R("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function mn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function hn({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: R(vt({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ o(hn, {
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
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ o(hn, {
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
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: R("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(D, {
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
function yn({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function bn({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function xn({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: R("z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-md border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-4 text-popover-foreground shadow-[var(--surface-shadow)] backdrop-blur-xl outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function Sn({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Cn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: R("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function wn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: R("font-medium", e),
		...t
	});
}
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: R("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function En({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "radio-group",
		className: R("grid gap-3", e),
		...t
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ a(p.Item, {
		"data-slot": "radio-group-item",
		className: R("relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20", e),
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
function On({ ...e }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "select",
		...e
	});
}
function kn({ ...e }) {
	return /* @__PURE__ */ a(m.Group, {
		"data-slot": "select-group",
		...e
	});
}
function An({ ...e }) {
	return /* @__PURE__ */ a(m.Value, {
		"data-slot": "select-value",
		...e
	});
}
function jn({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(m.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: R("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? un[r] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...i,
		children: [n, /* @__PURE__ */ a(m.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(S, { className: "size-4 opacity-50" })
		})]
	});
}
function Mn({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(m.Portal, { children: /* @__PURE__ */ o(m.Content, {
		"data-slot": "select-content",
		className: R("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(In, {}),
			/* @__PURE__ */ a(m.Viewport, {
				className: R("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Ln, {})
		]
	}) });
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Label, {
		"data-slot": "select-label",
		className: R("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function Pn({ className: e, children: t, ...n }) {
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
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Separator, {
		"data-slot": "select-separator",
		className: R("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function In({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: R("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(ae, { className: "size-4" })
	});
}
function Ln({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: R("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(S, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Rn({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
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
function zn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Bn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Vn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Hn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Un({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: R("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Wn({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Hn, { children: [/* @__PURE__ */ a(Un, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: R("fixed z-50 flex flex-col bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto max-h-dvh border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto max-h-dvh border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [/* @__PURE__ */ a("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain",
			children: t
		}), r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary sm:-m-2 sm:p-2",
			children: [/* @__PURE__ */ a(M, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function Gn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: R("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function Kn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: R("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function qn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: R("font-semibold text-foreground", e),
		...t
	});
}
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: R("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Yn = 768;
function Xn() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Yn);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Yn), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Zn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: R("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Qn({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(y.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function $n({ ...e }) {
	return /* @__PURE__ */ a(Qn, { children: /* @__PURE__ */ a(y.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function er({ ...e }) {
	return /* @__PURE__ */ a(y.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function tr({ className: e, sideOffset: t = 0, children: n, ...r }) {
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
var nr = "sidebar_state", rr = 604800, ir = "16rem", ar = "18rem", or = "3rem", sr = "b", cr = e.createContext(null);
function lr() {
	let t = e.useContext(cr);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function ur({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Xn(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${nr}=${t}; path=/; max-age=${rr}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === sr && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(cr.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": ir,
				"--sidebar-width-icon": or,
				...o
			},
			className: R("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function dr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: l, state: u, openMobile: d, setOpenMobile: f } = lr();
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: R("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (l) return /* @__PURE__ */ a(zn, {
		open: d,
		onOpenChange: f,
		...c,
		children: /* @__PURE__ */ o(Wn, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": ar },
			side: e,
			children: [/* @__PURE__ */ o(Gn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(qn, { children: "Sidebar" }), /* @__PURE__ */ a(Jn, { children: "Displays the mobile sidebar." })]
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
				className: "flex h-full w-full flex-col border-r border-[var(--surface-glass-border)] bg-[var(--surface-glass)] backdrop-blur-xl group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-[var(--surface-glass-border)] group-data-[variant=floating]:shadow-[var(--surface-shadow)]",
				children: s
			})
		})]
	});
}
function fr({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = lr();
	return /* @__PURE__ */ o(K, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: R("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(xe, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function pr({ className: e, ...t }) {
	let { toggleSidebar: n } = lr();
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
function mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: R("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function hr({ className: e, ...t }) {
	return /* @__PURE__ */ a(q, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: R("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function gr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: R("flex flex-col gap-2 p-2", e),
		...t
	});
}
function _r({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: R("flex flex-col gap-2 p-2", e),
		...t
	});
}
function vr({ className: e, ...t }) {
	return /* @__PURE__ */ a(Rn, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: R("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: R("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: R("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function xr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: R("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-opacity duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function Sr({ className: e, asChild: t = !1, ...n }) {
	let r = t ? g.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: R("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function Cr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: R("w-full text-sm", e),
		...t
	});
}
function wr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: R("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function Tr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: R("group/menu-item relative", e),
		...t
	});
}
var Er = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function Dr({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? g.Root : "button", { isMobile: u, state: d } = lr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: R(Er({
			variant: n,
			size: r
		}), s),
		...c
	});
	return !i || d !== "collapsed" || u ? f : (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o($n, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(er, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(tr, {
			side: "right",
			align: "center",
			...i
		})]
	}));
}
function Or({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? g.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: R("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: R("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Ar({ className: t, showIcon: n = !1, ...r }) {
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
		children: [n && /* @__PURE__ */ a(Zn, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Zn, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: R("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: R("group/menu-sub-item relative", e),
		...t
	});
}
function Nr({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
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
//#region src/components/ui/sonner.tsx
var Pr = ({ theme: e, ...t }) => /* @__PURE__ */ a(Re, {
	theme: "light",
	className: "toaster group",
	closeButton: !0,
	icons: {
		success: /* @__PURE__ */ a(oe, { className: "size-4" }),
		info: /* @__PURE__ */ a(ge, { className: "size-4" }),
		warning: /* @__PURE__ */ a(je, { className: "size-4" }),
		error: /* @__PURE__ */ a(Me, { className: "size-4" }),
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
//#endregion
//#region src/components/ui/switch.tsx
function Fr({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(_.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: R("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-[background-color,border-color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
		...n,
		children: /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "switch-thumb",
			className: R("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function Ir({ className: e, containerClassName: t, containerRef: n, ...r }) {
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
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: R("[&_tr]:border-b", e),
		...t
	});
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: R("[&_tr:last-child]:border-0", e),
		...t
	});
}
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: R("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function J({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: R("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: R("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: R("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Hr({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: R("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Ur({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: R("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Wr = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Gr({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(v.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: R(Wr({ variant: t }), e),
		...n
	});
}
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Trigger, {
		"data-slot": "tabs-trigger",
		className: R("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ a(v.Content, {
		"data-slot": "tabs-content",
		className: R("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Jr({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: R("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm", t ? un[t] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...n
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Yr({ logo: e, footer: t, className: n, children: r, ...i }) {
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
var Xr = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Zr({ component: e, children: t }) {
	return /* @__PURE__ */ a(Xr.Provider, {
		value: e,
		children: t
	});
}
function Y(t) {
	let n = e.useContext(Xr);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/lib/strings.tsx
var Qr = new Intl.NumberFormat(), $r = (e) => Qr.format(e), ei = {
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
		zoom: "Zoom",
		zoomLevel: (e) => `${$r(e)}%`
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
		hidden: (e) => `${$r(e)} hidden`,
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
		sortCount: (e) => `${$r(e)} sorts`,
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
		rowCount: (e) => e === 1 ? "1 row" : `${$r(e)} rows`,
		pageOf: (e, t) => `Page ${$r(e)} of ${$r(t)}`,
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
function ti(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function ni(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) ti(n, e, t, r);
	return n;
}
var ri = e.createContext(ei);
function ii({ strings: t, children: n }) {
	let r = e.useContext(ri), i = e.useMemo(() => ni(r, t), [r, t]);
	return /* @__PURE__ */ a(ri.Provider, {
		value: i,
		children: n
	});
}
function X() {
	return e.useContext(ri);
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var ai = (e) => F.object({
	email: F.email(e.invalidEmail),
	password: F.string().min(1, e.passwordRequired)
});
function oi({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = X().auth, f = e.useMemo(() => ai(d), [d]), p = N({
		resolver: P(f),
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
	return /* @__PURE__ */ o(yt, { children: [/* @__PURE__ */ o(bt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(xt, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(St, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(wt, { children: /* @__PURE__ */ a($t, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(B, { children: n })
				}),
				/* @__PURE__ */ a(tn, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(an, { children: [
						/* @__PURE__ */ a(on, { children: d.email }),
						/* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(q, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(ln, {})
					] })
				}),
				/* @__PURE__ */ a(tn, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(an, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(on, { children: d.password }), l && /* @__PURE__ */ a(Y, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(sn, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(q, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(ln, {})
					] })
				}),
				/* @__PURE__ */ o(K, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(j, { className: "animate-spin" }), d.signIn]
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
						/* @__PURE__ */ a(Y, {
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
var si = (e) => F.object({
	name: F.string().min(2, e.nameTooShort),
	email: F.email(e.invalidEmail),
	password: F.string().min(8, e.passwordTooShort),
	confirmPassword: F.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function ci({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = X().auth, d = e.useMemo(() => si(u), [u]), f = N({
		resolver: P(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(tn, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(an, { children: [
			/* @__PURE__ */ a(on, { children: t }),
			/* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(q, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(cn, { children: r }),
			/* @__PURE__ */ a(ln, {})
		] })
	});
	return /* @__PURE__ */ o(yt, { children: [/* @__PURE__ */ o(bt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(xt, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(St, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(wt, { children: /* @__PURE__ */ a($t, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					children: /* @__PURE__ */ a(B, { children: n })
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
				/* @__PURE__ */ o(K, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(j, { className: "animate-spin" }), u.createAccount]
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
						/* @__PURE__ */ a(Y, {
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
var li = (e) => F.object({ email: F.email(e.invalidEmail) });
function ui({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = X().auth, c = e.useMemo(() => li(s), [s]), l = N({
		resolver: P(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(yt, { children: [/* @__PURE__ */ o(bt, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(fe, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(xt, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(St, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(wt, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(Y, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(yt, { children: [/* @__PURE__ */ o(bt, {
		className: "text-center",
		children: [/* @__PURE__ */ a(xt, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(St, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(wt, { children: /* @__PURE__ */ a($t, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(z, {
					variant: "danger",
					children: /* @__PURE__ */ a(B, { children: n })
				}),
				/* @__PURE__ */ a(tn, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(an, { children: [
						/* @__PURE__ */ a(on, { children: s.email }),
						/* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(q, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(ln, {})
					] })
				}),
				/* @__PURE__ */ o(K, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(j, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(Y, {
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
function di({ className: e, ...t }) {
	return /* @__PURE__ */ a(I, {
		"data-slot": "command",
		className: R("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function fi({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !0, ...s }) {
	return /* @__PURE__ */ a(Dt, {
		...s,
		children: /* @__PURE__ */ o(Mt, {
			className: R("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(Nt, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Ft, { children: e }), /* @__PURE__ */ a(It, { children: t })]
			}), /* @__PURE__ */ a(di, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})]
		})
	});
}
function pi({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(ve, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(I.Input, {
			"data-slot": "command-input",
			className: R("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function mi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.List, {
		"data-slot": "command-list",
		className: R("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function hi({ ...e }) {
	return /* @__PURE__ */ a(I.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function gi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Group, {
		"data-slot": "command-group",
		className: R("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function _i({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Separator, {
		"data-slot": "command-separator",
		className: R("-mx-1 h-px bg-border", e),
		...t
	});
}
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ a(I.Item, {
		"data-slot": "command-item",
		className: R("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function yi({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: R("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function bi({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
	let u = X().search, [d, f] = e.useState(!1), p = n ?? d, m = r ?? f;
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
	]), /* @__PURE__ */ o(fi, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(pi, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(mi, { children: [/* @__PURE__ */ a(hi, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(_i, {}), /* @__PURE__ */ a(gi, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(vi, {
				value: [
					e.label,
					e.description,
					e.meta,
					...e.keywords ?? []
				].filter(Boolean).join(" "),
				onSelect: () => {
					e.onSelect?.(), m(!1);
				},
				children: [
					e.icon && /* @__PURE__ */ a(e.icon, {}),
					/* @__PURE__ */ o("span", {
						className: "flex min-w-0 flex-col",
						children: [/* @__PURE__ */ a("span", {
							className: "truncate",
							children: e.label
						}), e.description && /* @__PURE__ */ a("span", {
							className: "truncate text-xs text-muted-foreground",
							children: e.description
						})]
					}),
					e.meta && /* @__PURE__ */ a("span", {
						className: "ml-auto shrink-0 font-mono text-xs tabular-nums text-muted-foreground",
						children: e.meta
					}),
					e.shortcut && /* @__PURE__ */ a(yi, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function xi({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = X().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: R("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(_e, { className: "size-4 shrink-0" }),
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
function Si({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = X().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [x, S] = e.useState(0), ee = e.useRef(null), C = t.length === 0 ? -1 : Math.min(x, t.length - 1), te = C >= 0 ? `${h}-option-${C}` : void 0;
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
		children: [/* @__PURE__ */ a(q, {
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
var Ci = (e) => e === "," ? ";" : ",", wi = /^[=+\-@\t\r]/;
function Ti(e, t) {
	let n = wi.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function Ei(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function Di(e, t, n = ".") {
	let r = Ci(n), i = (e) => e.map((e) => Ti(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => Ei(t.value(e), n))))].join("\r\n");
}
function Oi(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var ki = "—", Z = (e) => e == null || e === "" ? "" : String(e);
function Ai(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var Q = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, ji = (e) => Array.isArray(e) ? e.map(Z) : [Z(e)], Mi = (e) => (t, n) => {
	if (!e.order) return Ai(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Ni = (e) => !!e.header;
function $(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Pi(e, t) {
	if (Q(t)) return e.header;
	let n = ji(t).map((t) => $(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Fi(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || Q(e.value) ? [] : [[t, ji(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var Ii = "ziku", Li = Ii;
function Ri(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Li !== Ii && Li !== e) throw Error(`Storage prefix is already "${Li}", cannot change it to "${e}"`);
	Li = e;
}
var zi = () => Li, Bi = (...e) => [Li, ...e].join("."), Vi = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Hi = (e) => Bi("views", e);
function Ui(e, t, n = ei.dataTable.allView) {
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
function Wi(e, t, n, r) {
	let i = Ui(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Hi(e)), n = t ? JSON.parse(t) : null;
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
var Gi = 800, Ki = (e) => e.shared !== void 0;
function qi(t, n, r, i, a) {
	let o = X().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = Wi(r, t, n, o);
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
			let e = s.filter((e) => !Ki(e));
			localStorage.setItem(Hi(r), JSON.stringify({
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
			let a = new Set(Ui(t, n).map((e) => e.id)), o = s.filter((e) => !Ki(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => Ki(e) || !u.has(e.name)),
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
		}, Gi)));
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
			return r && Ki(r) && g(r.id, t(e(r))), {
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
				icon: Vi[n.views.length % Vi.length],
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
			t && Ki(t) && p.current?.remove(t.id).catch(() => {});
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
var Ji = {
	table: Ee,
	list: O,
	board: we,
	star: Te,
	funnel: me,
	clock: le,
	users: ke,
	tag: De,
	eye: pe
};
function Yi({ name: e, className: t }) {
	let n = Ji[e] ?? Ee;
	return /* @__PURE__ */ a(n, { className: t });
}
function Xi({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(yn, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(bn, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(xn, {
			align: r,
			className: R("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function Zi({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(Xi, {
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
var Qi = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function $i({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = X(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
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
			className: R(Qi, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(k, { className: "size-3.5" }),
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
				className: Qi,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function ea({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let { dataTable: l, common: u } = X(), [d, f] = e.useState(""), p = Array.isArray(r) ? r : [], m = n.filter((e) => e.label.toLowerCase().includes(d.toLowerCase()));
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
			children: [/* @__PURE__ */ a(Et, {
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
function ta({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = X().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(On, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(jn, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(An, {})
					}), /* @__PURE__ */ a(Mn, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(Pn, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(On, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(jn, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(An, {})
					}), /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ a(Pn, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(Pn, {
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
			className: R(Qi, "text-muted-foreground"),
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
			className: R(Qi, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(Oe, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function na({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Ni).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(Et, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function ra({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a(Xi, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(ia, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function ia({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
	let { dataTable: c } = X(), [l, u] = e.useState(!1), d = e.useId();
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
				children: [/* @__PURE__ */ a(q, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: t,
					"aria-invalid": l || void 0,
					"aria-describedby": l ? d : void 0,
					onChange: () => u(!1)
				}), /* @__PURE__ */ a(K, {
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
function aa({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = X(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
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
				className: R("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Yi, {
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
			children: Vi.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: R("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Yi, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: Qi,
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
var oa = "application/x-ziku-card", sa = {
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
function ca({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
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
			let n = t.dataTransfer.getData(oa), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: R("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(ua, {
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
							d(l), e.dataTransfer.setData(oa, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: R("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", h && "select-none", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a(la, {
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
function la({ columns: e, from: t, onPick: n }) {
	let r = X().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Lt, { children: [/* @__PURE__ */ a(zt, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: R("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(b, { size: 14 })
	}), /* @__PURE__ */ a(Bt, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(Ht, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function ua({ col: e, state: t, drop: n }) {
	let r = e.tile, i = sa[r.tone];
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
var da = et({
	rowSortingFeature: $e,
	sortedRowModel: Ye(),
	columnFilteringFeature: Ve,
	filteredRowModel: L(),
	globalFilteringFeature: Xe,
	columnFacetingFeature: Be,
	facetedRowModel: Ge(),
	facetedUniqueValues: Ke(),
	columnGroupingFeature: He,
	groupedRowModel: qe(),
	rowExpandingFeature: Ze,
	expandedRowModel: We(),
	columnVisibilityFeature: Ue,
	rowPaginationFeature: Qe,
	paginatedRowModel: Je()
});
function fa({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: b, presets: S = [], viewKey: ee, onStateChange: C, view: ne, viewsBackend: re, paged: w, csv: ae, className: oe }) {
	let se = X(), T = se.dataTable, ce = se.common, le = e.useMemo(() => n ?? [], [n]), E = !!w, D = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), fe = e.useMemo(() => ({
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
	]), ge = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => D[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => D[e.id]).map((e) => D[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: Q(e.value) ? [] : [Z(e.value)]
		} : e).map((e) => {
			let t = D[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Z(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => D[e])
	}), [D]), O = qi(fe, S, ee, re, ne), { views: ve, active: k, isPreset: xe, patch: A } = O, j = e.useMemo(() => ge(k.state), [k.state, ge]);
	e.useEffect(() => {
		C?.(j, k.id);
	}, [
		j,
		k.id,
		C
	]);
	let Ce = (e) => (t) => A({ [e]: typeof t == "function" ? t(j[e]) : t }), Te = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : $(e, Z(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!E || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: Ni(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? Mi(e)(Z(t.getValue(r)), Z(n.getValue(r))) : Ai(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (Q(n)) return !0;
			let r = Z(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, E]), [De, Ae] = e.useState(!0), [je, Me] = e.useState(0), M = j.grouping[0] ?? "", Pe = t.filter((e) => e.facet), Fe = !!(y && Pe.length && c), N = j.mode === "board" && Fe, Ie = p > 0 && !M && !N && !E, Le = e.useMemo(() => j.columnFilters.filter((e) => !Q(e.value) && !D[e.id]?.filterKey), [j.columnFilters, D]), Re = E && (Le.length > 0 || j.grouping.length > 0 || N), ze = e.useMemo(() => M && !j.sorting.some((e) => e.id === M) ? [{
		id: M,
		desc: !1
	}, ...j.sorting] : j.sorting, [M, j.sorting]), P = tt({
		features: da,
		data: le,
		columns: Te,
		state: {
			sorting: ze,
			columnFilters: E ? Le : j.columnFilters,
			globalFilter: E ? "" : j.globalFilter,
			columnVisibility: j.columnVisibility,
			grouping: j.grouping,
			expanded: De,
			pagination: {
				pageIndex: Ie ? je : 0,
				pageSize: Ie ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: Ce("sorting"),
		onColumnFiltersChange: Ce("columnFilters"),
		onGlobalFilterChange: Ce("globalFilter"),
		onColumnVisibilityChange: Ce("columnVisibility"),
		onGroupingChange: Ce("grouping"),
		onExpandedChange: Ae,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: je,
				pageSize: Ie ? p : 2 ** 53 - 1
			}) : e;
			Me(t.pageIndex);
		},
		manualSorting: E && !M,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Z(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), F = P.getFilteredRowModel().rows;
	function I() {
		if (!ae) return;
		let e = ae.decimal ?? ".", t = P.getVisibleLeafColumns().map((e) => D[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = P.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		Oi(ae.filename, Di(n, t, e));
	}
	e.useEffect(() => {
		Me(0);
	}, [
		j.columnFilters,
		j.globalFilter,
		j.grouping
	]);
	let Be = Sa(j.globalFilter, xa), Ve = JSON.stringify(Fi(t, {
		...j,
		globalFilter: Be
	})), He = e.useRef(w?.setQuery);
	e.useEffect(() => {
		He.current = w?.setQuery;
	}), e.useEffect(() => {
		He.current?.(JSON.parse(Ve));
	}, [Ve]);
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
	let L = j.columnFilters, qe = Object.values(j.columnVisibility).filter((e) => e === !1).length, Je = L.length > 0 || !!j.globalFilter || j.grouping.length > 0 || j.sorting.length > 0 || qe > 0, Ye = Je && (le.length > 0 || E), Xe = t.filter((e) => Ni(e) && e.sortable !== !1 && !L.some((t) => t.id === e.key)), Ze = t.filter((e) => Ni(e) && e.sortable !== !1 && (!E || !!e.sortKey)), Qe = (e) => A({ columnFilters: [...L, {
		id: e,
		value: D[e]?.facet ? [] : ""
	}] }), $e = (e) => A({ columnFilters: L.filter((t) => t.id !== e) }), et = (e, t) => A({ columnFilters: L.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function rt(e) {
		if (!e.facet) return [];
		let t = E && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: $(e, t)
		})) : [...P.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Mi(e)(Z(t[0]), Z(n[0]))).map(([n, r]) => ({
			value: Z(n),
			label: t ? $(e, Z(n)) : `${$(e, Z(n))} (${r})`
		}));
	}
	let z = (e) => A({
		mode: e,
		grouping: e === "board" && !M ? [Pe[0].key] : j.grouping
	}), it = /* @__PURE__ */ a(na, {
		columns: t,
		visibility: j.columnVisibility,
		onToggle: (e, t) => A({ columnVisibility: {
			...j.columnVisibility,
			[e]: t
		} })
	}), B = /* @__PURE__ */ a(ta, {
		sorting: j.sorting,
		sortable: Ze,
		byKey: D,
		onChange: (e) => A({ sorting: e })
	}), at = (e) => /* @__PURE__ */ a($i, {
		columns: Pe,
		empty: {
			label: T.noGrouping,
			onPick: () => {
				A({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			A({ grouping: [t] }), e?.();
		}
	}), ot = /* @__PURE__ */ o(i, { children: [
		L.map((e) => {
			let t = D[e.id];
			if (!t) return null;
			let n = t.icon ?? me;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Pi(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => $e(e.id),
						"aria-label": T.removeFilterFor(t.header),
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(Ne, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		L.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a($i, {
			columns: Xe,
			onPick: Qe
		})
	] }), st = [
		...Fe ? [{
			key: "layout",
			icon: Ee,
			label: T.layout,
			value: j.mode === "board" ? T.board : T.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				be,
				T.table
			], [
				"board",
				we,
				T.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => z(e),
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
			icon: pe,
			label: T.visibleColumns,
			value: qe ? T.hidden(qe) : T.allView,
			panel: it
		},
		{
			key: "filter",
			icon: he,
			label: T.filters,
			value: L.length ? String(L.length) : void 0,
			panel: ot
		},
		{
			key: "sort",
			icon: Se,
			label: T.sorting,
			value: j.sorting.length ? j.sorting.length === 1 ? D[j.sorting[0].id]?.header : String(j.sorting.length) : void 0,
			panel: B
		},
		...Pe.length ? [{
			key: "group",
			icon: be,
			label: T.groupBy,
			value: M ? D[M]?.header : ce.none,
			panel: at()
		}] : []
	], V = M ? D[M] : null, ct = (e) => e && e !== "—" ? $(V ?? void 0, e) : "—", lt = e.useMemo(() => {
		if (!N || !V) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of F) {
			let n = Z(t.getValue(M)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...V.order ?? [], ...e.keys()])].sort(Mi(V)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: ct(t),
				items: n,
				subtitle: b?.(n),
				tile: V.boardTile?.(t)
			};
		});
	}, [
		N,
		V,
		F,
		M,
		b
	]), ut = P.getVisibleLeafColumns().length, H = P.getRowModel().rows, U = H.length > pa, dt = e.useRef(null), W = nt({
		count: H.length,
		enabled: U,
		getScrollElement: () => dt.current,
		estimateSize: () => ma,
		overscan: ha,
		initialRect: {
			width: 0,
			height: ga
		},
		measureElement: (e) => e.getBoundingClientRect().height || ma,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || ga
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), G = W.getVirtualItems(), ft = U ? G.map((e) => ({
		row: H[e.index],
		index: e.index
	})) : H.map((e, t) => ({
		row: e,
		index: t
	})), pt = U && G.length > 0 ? G[0].start : 0, mt = U && G.length > 0 ? W.getTotalSize() - G[G.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: R("overflow-hidden rounded-md border bg-card", oe),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [ve.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => O.select(e.id),
						className: R("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === k.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(Yi, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: T.sharedBy(e.ownerName),
								"aria-label": T.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(ke, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(ra, {
						align: "start",
						title: T.saveView,
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(ye, {
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
						l && /* @__PURE__ */ a(Zi, {
							icon: _e,
							label: ce.search,
							active: !!j.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(q, {
								className: "h-8",
								placeholder: u ?? ce.searchPlaceholder,
								autoFocus: !0,
								value: j.globalFilter,
								onChange: (e) => A({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(Zi, {
							icon: he,
							label: T.filter,
							active: L.length > 0,
							children: (e) => /* @__PURE__ */ a($i, {
								columns: Xe,
								onPick: (t) => {
									Qe(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(Zi, {
							icon: Se,
							label: T.sort,
							active: j.sorting.length > 0,
							width: "w-88",
							children: B
						}),
						Pe.length > 0 && /* @__PURE__ */ a(Zi, {
							icon: be,
							label: T.group,
							active: !!M,
							children: (e) => at(e)
						}),
						/* @__PURE__ */ a(Zi, {
							icon: pe,
							label: T.visibleColumns,
							active: qe > 0,
							width: "w-52",
							children: it
						}),
						Fe && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								be,
								T.table
							], [
								"board",
								we,
								T.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => z(e),
								className: R("px-2 py-1", j.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(Xi, {
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
							children: (e) => /* @__PURE__ */ a(aa, {
								name: k.name,
								icon: k.icon,
								onIcon: O.setIcon,
								onRename: O.rename,
								onClose: e,
								rows: st,
								footer: /* @__PURE__ */ o(i, { children: [ae && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										I(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(de, { className: "size-4 text-muted-foreground" }), T.exportCsv]
								}), !xe && k.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										O.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [
										/* @__PURE__ */ a(Oe, { className: "size-4" }),
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
					j.sorting.length > 0 && /* @__PURE__ */ a(Xi, {
						width: "w-88",
						className: ya,
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
						children: B
					}),
					M && /* @__PURE__ */ a(Xi, {
						className: ya,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(be, {
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
						children: (e) => at(e)
					}),
					L.map((e) => {
						let t = D[e.id];
						if (!t) return null;
						let n = t.icon ?? me;
						return /* @__PURE__ */ a(Xi, {
							className: Q(e.value) ? ba : ya,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Pi(t, e.value)
									}),
									/* @__PURE__ */ a(x, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(ea, {
								col: t,
								options: rt(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => et(e.id, t),
								onRemove: () => {
									$e(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(Xi, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(ye, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								T.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a($i, {
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
							/* @__PURE__ */ a(Ne, {
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
				children: /* @__PURE__ */ o(Ir, { children: [/* @__PURE__ */ a(Lr, { children: /* @__PURE__ */ a(J, {
					className: "bg-muted/50 hover:bg-muted/50",
					children: P.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Br, {
						className: R("whitespace-nowrap", D[e.id]?.className),
						children: D[e.id]?.header
					}, e.id))
				}) }), /* @__PURE__ */ a(Rr, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(J, {
					className: "hover:bg-transparent",
					children: P.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Vr, {
						className: D[e.id]?.className,
						children: /* @__PURE__ */ a(Zn, { className: "h-4 w-full" })
					}, e.id))
				}, t)) })] })
			}) : F.length === 0 ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: Ye ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: T.noMatches }), /* @__PURE__ */ o(K, {
						variant: "outline",
						size: "sm",
						onClick: O.reset,
						children: [/* @__PURE__ */ a(Ne, {
							className: "size-3.5",
							weight: "bold"
						}), T.clearAllFilters]
					})]
				}) : s ?? ce.noResults
			}) : N ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(ca, {
					columns: lt,
					itemKey: c,
					renderCard: y,
					onDrop: V?.onSet ? (e, t) => V.onSet(e, t) : void 0,
					canDrag: (e) => !!V?.onSet && (V?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Ir, {
					containerRef: dt,
					containerClassName: R(U && `${_a} overflow-y-auto`),
					"aria-rowcount": H.length + 1,
					children: [/* @__PURE__ */ a(Lr, { children: P.getHeaderGroups().map((e) => /* @__PURE__ */ a(J, {
						"aria-rowindex": 1,
						className: "bg-muted/50",
						children: e.headers.map((e) => {
							let t = D[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ie : n === "desc" ? x : Se, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, {
								className: "size-3.5",
								weight: "bold"
							}), /* @__PURE__ */ a(P.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(Br, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: R("whitespace-nowrap", U && "sticky top-0 z-10 bg-[color-mix(in_oklab,var(--muted)_50%,var(--card))]", t?.className),
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
					}, e.id)) }), /* @__PURE__ */ o(Rr, { children: [
						pt > 0 && /* @__PURE__ */ a(J, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Vr, {
								colSpan: ut,
								className: "p-0",
								style: { height: pt }
							})
						}),
						ft.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(J, {
							ref: U ? W.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Br, {
								colSpan: ut,
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
										ct(Z(e.getValue(M))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(J, {
							ref: U ? W.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: f ? "button" : void 0,
							tabIndex: f ? 0 : void 0,
							onClick: f ? () => f(e.original) : void 0,
							onKeyDown: f ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), f(e.original));
							} : void 0,
							className: f ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Vr, {
								className: D[e.column.id]?.className,
								children: /* @__PURE__ */ a(P.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						mt > 0 && /* @__PURE__ */ a(J, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Vr, {
								colSpan: ut,
								className: "p-0",
								style: { height: mt }
							})
						}),
						Ge && /* @__PURE__ */ a(J, {
							ref: Ue,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Vr, {
								colSpan: ut,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: Ke ? T.loadingMore : null
							})
						})
					] })]
				})
			}),
			Ie && !r && F.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: T.rowCount(F.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: T.pageOf(je + 1, Math.max(P.getPageCount(), 1)) }),
						/* @__PURE__ */ a(K, {
							variant: "outline",
							size: "sm",
							onClick: () => P.previousPage(),
							disabled: !P.getCanPreviousPage(),
							children: T.previousPage
						}),
						/* @__PURE__ */ a(K, {
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
var pa = 100, ma = 37, ha = 12, ga = 640, _a = "max-h-[70dvh]", va = "rounded-md border px-2 py-1.5 text-sm outline-none", ya = `${va} border-ring/60 bg-accent font-medium text-foreground`, ba = `${va} border-border bg-card text-muted-foreground`, xa = 300;
function Sa(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function Ca({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = X().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(yn, { children: [/* @__PURE__ */ o(bn, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: R("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(W, {
				variant: "secondary",
				className: R("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(x, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(xn, {
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
						/* @__PURE__ */ a(Et, {
							checked: n,
							tabIndex: -1,
							"aria-hidden": !0,
							className: "pointer-events-none"
						}),
						e.className ? /* @__PURE__ */ a(W, {
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
var wa = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function Ta(e) {
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
function Ea(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of wa) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode === "board" && n.set("mode", "board"), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function Da(e, t) {
	return Ea(e).toString() === Ea(t).toString();
}
function Oa(e, t) {
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
function ka(e) {
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
function Aa({ brand: e, brandHref: t = "/", sidebarHeader: n, sidebarFooter: r, nav: s, currentPath: c, user: l, userMenu: u, onSignOut: d, headerActions: f, headerContent: p, classNames: m, bleed: h = !1, children: g }) {
	let _ = X().shell;
	return /* @__PURE__ */ o(ur, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: _.skipToContent
		}),
		/* @__PURE__ */ o(dr, {
			collapsible: "icon",
			rootClassName: m?.sidebar,
			children: [
				/* @__PURE__ */ o(gr, { children: [/* @__PURE__ */ a(wr, { children: /* @__PURE__ */ a(Tr, { children: t === null ? /* @__PURE__ */ a("div", {
					className: "flex h-12 items-center gap-2 p-2 text-sm",
					children: e
				}) : /* @__PURE__ */ a(Dr, {
					size: "lg",
					asChild: !0,
					children: /* @__PURE__ */ a(Y, {
						href: t,
						children: e
					})
				}) }) }), n && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				})] }),
				/* @__PURE__ */ a(yr, { children: s.map((e, t) => /* @__PURE__ */ o(br, { children: [e.label && /* @__PURE__ */ a(xr, { children: e.label }), /* @__PURE__ */ a(Cr, { children: /* @__PURE__ */ a(wr, { children: e.items.map((e) => /* @__PURE__ */ o(Tr, { children: [/* @__PURE__ */ a(Dr, {
					asChild: !0,
					isActive: c === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(Y, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(kr, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				(l || r) && /* @__PURE__ */ o(_r, { children: [l && /* @__PURE__ */ a(wr, { children: /* @__PURE__ */ a(Tr, { children: /* @__PURE__ */ o(Lt, { children: [/* @__PURE__ */ a(zt, {
					asChild: !0,
					children: /* @__PURE__ */ o(Dr, {
						size: "lg",
						className: "data-[state=open]:bg-sidebar-accent",
						children: [
							/* @__PURE__ */ a(H, {
								name: l.name,
								src: l.avatarUrl,
								className: "size-8 rounded-lg *:rounded-lg"
							}),
							/* @__PURE__ */ o("div", {
								className: "grid flex-1 text-left text-sm leading-tight",
								children: [/* @__PURE__ */ a("span", {
									className: "truncate font-medium",
									children: l.name
								}), /* @__PURE__ */ a("span", {
									className: "truncate text-xs text-muted-foreground",
									children: l.role ?? l.email
								})]
							}),
							/* @__PURE__ */ a(w, { className: "ml-auto size-4" })
						]
					})
				}), /* @__PURE__ */ o(Bt, {
					side: "top",
					align: "start",
					className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
					children: [
						/* @__PURE__ */ o(Kt, {
							className: "font-normal",
							children: [/* @__PURE__ */ a("div", {
								className: "text-sm font-medium",
								children: l.name
							}), /* @__PURE__ */ a("div", {
								className: "text-xs text-muted-foreground",
								children: l.email
							})]
						}),
						u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(qt, {}), u] }),
						d && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(qt, {}), /* @__PURE__ */ o(Ht, {
							onSelect: d,
							children: [/* @__PURE__ */ a(A, {}), _.signOut]
						})] })
					]
				})] }) }) }), r && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: r
				})] })
			]
		}),
		/* @__PURE__ */ o(mr, { children: [/* @__PURE__ */ o("header", {
			className: R("flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl", m?.header),
			children: [
				/* @__PURE__ */ a(fr, { className: "-ml-1" }),
				/* @__PURE__ */ a(Rn, {
					orientation: "vertical",
					className: "mr-2 data-[orientation=vertical]:h-4"
				}),
				/* @__PURE__ */ a("div", {
					className: "flex min-w-0 flex-1 items-center gap-2",
					children: p
				}),
				f && /* @__PURE__ */ a("div", {
					className: "flex items-center gap-2",
					children: f
				})
			]
		}), /* @__PURE__ */ a("main", {
			id: "content",
			tabIndex: -1,
			className: R("flex flex-1 flex-col outline-none", h ? "gap-0" : "gap-6 p-4 md:p-6", m?.main),
			children: g
		})] })
	] });
}
//#endregion
//#region src/lib/preferences.ts
var ja = 75, Ma = 150, Na = 100, Pa = [
	75,
	90,
	100,
	110,
	125,
	150
];
function Fa(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Ia(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
var La = (e) => Math.min(150, Math.max(75, Math.round(e))), Ra = /* @__PURE__ */ new Set(), za, Ba = () => {
	if (za === void 0) {
		let e = Number(Fa(Bi("zoom")));
		za = Number.isFinite(e) && e > 0 ? La(e) : 100;
	}
	return za;
}, Va = (e) => {
	za = La(e), Ia(Bi("zoom"), String(za)), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(za / 100)), Ra.forEach((e) => e());
}, Ha = (e) => (Ra.add(e), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(Ba() / 100)), () => Ra.delete(e));
function Ua() {
	return {
		zoom: e.useSyncExternalStore(Ha, Ba, () => 100),
		setZoom: Va
	};
}
function Wa(e = zi()) {
	return `(function(){try{var z=parseFloat(localStorage.getItem(${JSON.stringify(e)}+".zoom"));if(z>=75&&z<=150)document.documentElement.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`;
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
function Ga({ side: e, align: t = "end", className: n }) {
	let r = X().preferences, { zoom: i, setZoom: s } = Ua();
	return /* @__PURE__ */ o(Lt, { children: [/* @__PURE__ */ a(zt, {
		asChild: !0,
		children: /* @__PURE__ */ a(K, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.zoom,
			className: n,
			children: /* @__PURE__ */ a(_e, {})
		})
	}), /* @__PURE__ */ o(Bt, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Kt, { children: r.zoom }), /* @__PURE__ */ a(Wt, {
			value: String(i),
			onValueChange: (e) => s(Number(e)),
			children: Pa.map((e) => /* @__PURE__ */ a(Gt, {
				value: String(e),
				children: r.zoomLevel(e)
			}, e))
		})]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var Ka = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function qa({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = X().modal;
	return /* @__PURE__ */ a(Dt, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Mt, {
			showCloseButton: !1,
			className: R("flex max-h-[92dvh] flex-col gap-0 p-0", Ka[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Ft, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(It, { children: r })]
					}), /* @__PURE__ */ a(At, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(Ne, {
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
var Ja = 0, Ya = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function Xa({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Ja++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Ja++,
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
	return /* @__PURE__ */ o(Ya.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(Za, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function Za({ pending: t, onAnswer: n }) {
	let r = X().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(qa, {
		open: !0,
		onOpenChange: (e) => {
			e || n(c);
		},
		size: "sm",
		title: s.title,
		description: s.description,
		footer: /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(K, {
			variant: "outline",
			onClick: () => n(c),
			children: s.cancelLabel ?? r.cancel
		}), /* @__PURE__ */ a(K, {
			variant: s.danger ? "danger" : "default",
			onClick: f,
			children: s.confirmLabel ?? r.confirm
		})] }),
		children: t.kind === "prompt" && /* @__PURE__ */ o("form", {
			className: "grid gap-2",
			onSubmit: (e) => {
				e.preventDefault(), f();
			},
			children: [/* @__PURE__ */ a(Qt, {
				htmlFor: d,
				children: t.options.label ?? s.title
			}), /* @__PURE__ */ a(q, {
				id: d,
				autoFocus: !0,
				value: l,
				placeholder: t.options.placeholder,
				onChange: (e) => u(e.target.value)
			})]
		})
	});
}
function Qa() {
	return e.useContext(Ya);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function $a({ title: e, description: t, actions: n, className: r, ...i }) {
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
function eo({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
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
function to({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = Ae, className: s }) {
	let c = X().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(K, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(z, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(B, {
			className: "flex items-center justify-between gap-4",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(eo, {
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/error-boundary.tsx
function no({ reset: e }) {
	let t = X().common;
	return /* @__PURE__ */ a(to, {
		title: t.crashed,
		onRetry: e
	});
}
var ro = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(no, {
			error: e,
			reset: this.reset
		}) : t;
	}
}, io = "text-xs font-medium tracking-wider text-muted-foreground uppercase";
function ao({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: R(io, t),
		...n
	});
}
var oo = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function so({ label: e, value: t, hint: n, icon: r, trend: i = "flat", className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "stat-tile",
		className: R("rounded-lg border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-4 shadow-[var(--surface-shadow)] backdrop-blur-xl", s),
		...c,
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ a("span", {
					className: io,
					children: e
				}), r && /* @__PURE__ */ a(r, { className: "size-4 shrink-0 text-muted-foreground" })]
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 text-2xl font-semibold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ a("div", {
				className: R("mt-1 text-xs", oo[i]),
				children: n
			})
		]
	});
}
//#endregion
export { z as Alert, B as AlertDescription, it as AlertTitle, Aa as AppShell, Yr as AuthLayout, ot as Avatar, ct as AvatarBadge, V as AvatarFallback, lt as AvatarGroup, ut as AvatarGroupCount, st as AvatarImage, U as AvatarStack, W as Badge, G as Breadcrumb, _t as BreadcrumbEllipsis, pt as BreadcrumbItem, mt as BreadcrumbLink, ft as BreadcrumbList, ht as BreadcrumbPage, gt as BreadcrumbSeparator, K as Button, yt as Card, Ct as CardAction, wt as CardContent, St as CardDescription, Tt as CardFooter, bt as CardHeader, xt as CardTitle, Et as Checkbox, Ca as ChipPicker, Si as Combobox, bi as CommandMenu, Xa as ConfirmProvider, fa as DataTable, Dt as Dialog, At as DialogClose, Mt as DialogContent, It as DialogDescription, Pt as DialogFooter, Nt as DialogHeader, jt as DialogOverlay, kt as DialogPortal, Ft as DialogTitle, Ot as DialogTrigger, Lt as DropdownMenu, Ut as DropdownMenuCheckboxItem, Bt as DropdownMenuContent, Vt as DropdownMenuGroup, Ht as DropdownMenuItem, Kt as DropdownMenuLabel, Rt as DropdownMenuPortal, Wt as DropdownMenuRadioGroup, Gt as DropdownMenuRadioItem, qt as DropdownMenuSeparator, Jt as DropdownMenuShortcut, Yt as DropdownMenuSub, Zt as DropdownMenuSubContent, Xt as DropdownMenuSubTrigger, zt as DropdownMenuTrigger, eo as EmptyState, ro as ErrorBoundary, to as ErrorState, ui as ForgotPasswordForm, $t as Form, sn as FormControl, cn as FormDescription, tn as FormField, an as FormItem, on as FormLabel, ln as FormMessage, q as Input, ca as Kanban, wa as LIST_PARAMS, Qt as Label, Y as Link, Zr as LinkProvider, oi as LoginForm, qa as Modal, ki as NONE, $a as PageHeader, fn as Pagination, pn as PaginationContent, vn as PaginationEllipsis, mn as PaginationItem, hn as PaginationLink, _n as PaginationNext, gn as PaginationPrevious, yn as Popover, Sn as PopoverAnchor, xn as PopoverContent, Tn as PopoverDescription, Cn as PopoverHeader, wn as PopoverTitle, bn as PopoverTrigger, En as RadioGroup, Dn as RadioGroupItem, ci as RegisterForm, xi as SearchTrigger, ao as SectionLabel, On as Select, Mn as SelectContent, kn as SelectGroup, Pn as SelectItem, Nn as SelectLabel, Ln as SelectScrollDownButton, In as SelectScrollUpButton, Fn as SelectSeparator, jn as SelectTrigger, An as SelectValue, Rn as Separator, zn as Sheet, Vn as SheetClose, Wn as SheetContent, Jn as SheetDescription, Kn as SheetFooter, Gn as SheetHeader, qn as SheetTitle, Bn as SheetTrigger, dr as Sidebar, yr as SidebarContent, _r as SidebarFooter, br as SidebarGroup, Sr as SidebarGroupAction, Cr as SidebarGroupContent, xr as SidebarGroupLabel, gr as SidebarHeader, hr as SidebarInput, mr as SidebarInset, wr as SidebarMenu, Or as SidebarMenuAction, kr as SidebarMenuBadge, Dr as SidebarMenuButton, Tr as SidebarMenuItem, Ar as SidebarMenuSkeleton, jr as SidebarMenuSub, Nr as SidebarMenuSubButton, Mr as SidebarMenuSubItem, ur as SidebarProvider, pr as SidebarRail, vr as SidebarSeparator, fr as SidebarTrigger, Zn as Skeleton, so as StatTile, Fr as Switch, Ir as Table, Rr as TableBody, Hr as TableCaption, Vr as TableCell, zr as TableFooter, Br as TableHead, Lr as TableHeader, J as TableRow, Ur as Tabs, qr as TabsContent, Gr as TabsList, Kr as TabsTrigger, Jr as Textarea, Pr as Toaster, $n as Tooltip, tr as TooltipContent, Qn as TooltipProvider, er as TooltipTrigger, ii as UIStringsProvider, H as UserAvatar, Vi as VIEW_ICON_NAMES, Na as ZOOM_DEFAULT, Ma as ZOOM_MAX, ja as ZOOM_MIN, Pa as ZOOM_STEPS, Ga as ZoomMenu, Wa as antiFlashScript, dt as badgeVariants, vt as buttonVariants, Pi as chipLabel, R as cn, Ai as compare, Ci as csvDelimiter, Ei as csvValue, da as dataTableFeatures, ei as defaultStrings, Oi as downloadCsv, $ as facetText, li as forgotPasswordSchema, at as initials, dn as inputVariants, Q as isBlankFilter, ji as labelsOf, Oa as listUrlOf, ka as listUrlProps, ai as loginSchema, Ni as named, Ta as parseListUrl, Mi as rank, si as registerSchema, Da as sameListUrl, Ri as setStoragePrefix, Bi as storageKey, zi as storagePrefix, Z as str, Wr as tabsListVariants, Di as toCsv, Ea as toListUrl, Fi as toQuery, ze as toast, Qa as useConfirm, qi as useDataTableViews, nn as useFormField, Xn as useIsMobile, lr as useSidebar, X as useStrings, Ua as useZoom };
