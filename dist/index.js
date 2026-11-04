import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, Progress as p, RadioGroup as m, Select as h, Separator as g, Slider as _, Slot as v, Switch as y, Tabs as b, Toggle as ee, ToggleGroup as te, Tooltip as x } from "radix-ui";
import { ArrowClockwiseIcon as S, ArrowsOutCardinalIcon as ne, CalendarBlankIcon as C, CaretDownIcon as w, CaretDownIcon as T, CaretLeftIcon as re, CaretLeftIcon as ie, CaretRightIcon as ae, CaretRightIcon as E, CaretRightIcon as oe, CaretUpDownIcon as se, CaretUpIcon as ce, CaretUpIcon as D, CheckCircleIcon as O, CheckCircleIcon as le, CheckIcon as ue, CheckIcon as k, CircleIcon as de, ClockIcon as A, DotsThreeIcon as fe, DotsThreeIcon as pe, DotsThreeIcon as j, DownloadSimpleIcon as me, EnvelopeSimpleIcon as M, EyeIcon as he, FileIcon as ge, FunnelIcon as _e, FunnelSimpleIcon as ve, InfoIcon as ye, ListBulletsIcon as be, MagnifyingGlassIcon as xe, MagnifyingGlassIcon as Se, PlusIcon as Ce, ProhibitIcon as we, RowsIcon as Te, SidebarSimpleIcon as Ee, SignOutIcon as N, SortAscendingIcon as De, SpinnerIcon as P, SpinnerIcon as Oe, SquaresFourIcon as ke, StarIcon as Ae, TableIcon as je, TagIcon as Me, TrashIcon as Ne, UploadSimpleIcon as Pe, UsersIcon as Fe, WarningCircleIcon as Ie, WarningIcon as Le, XCircleIcon as F, XIcon as Re, XIcon as ze } from "@phosphor-icons/react";
import { enUS as Be } from "react-day-picker/locale/en-US";
import { DayPicker as Ve, getDefaultClassNames as He } from "react-day-picker";
import * as Ue from "recharts";
import { Controller as We, FormProvider as Ge, useForm as I, useFormContext as Ke, useFormState as L } from "react-hook-form";
import { Toaster as qe, toast as Je } from "sonner";
import { zodResolver as Ye } from "@hookform/resolvers/zod";
import { z as R } from "zod";
import { Command as z } from "cmdk";
import { columnFacetingFeature as Xe, columnFilteringFeature as Ze, columnGroupingFeature as Qe, columnVisibilityFeature as $e, createExpandedRowModel as et, createFacetedRowModel as tt, createFacetedUniqueValues as nt, createFilteredRowModel as rt, createGroupedRowModel as it, createPaginatedRowModel as at, createSortedRowModel as B, globalFilteringFeature as ot, rowExpandingFeature as st, rowPaginationFeature as ct, rowSortingFeature as lt, tableFeatures as V, useTable as ut } from "@tanstack/react-table";
import { useVirtualizer as dt } from "@tanstack/react-virtual";
import { pt as ft } from "react-day-picker/locale/pt";
//#region src/lib/utils.ts
function H(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var pt = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
		className: H(pt({ variant: t }), e),
		...n
	});
}
function mt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: H("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: H("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function gt(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function _t({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: H("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: H("aspect-square size-full", e),
		...t
	});
}
function yt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: H("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: H("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: H("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: H("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
function Ct({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(_t, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(vt, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(yt, { children: n ?? gt(e) })]
	});
}
function wt({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(xt, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(Ct, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(St, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var Tt = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3", {
	variants: { variant: {
		default: "bg-primary-button text-primary-button-foreground [a&]:hover:brightness-95",
		secondary: "bg-secondary text-secondary-foreground [a&]:hover:brightness-95",
		danger: "border-danger-border bg-danger-subtle text-danger-fg [a&]:hover:brightness-95",
		warning: "border-warning-border bg-warning-subtle text-warning-fg [a&]:hover:brightness-95",
		success: "border-success-border bg-success-subtle text-success-fg [a&]:hover:brightness-95",
		info: "border-info-border bg-info-subtle text-info-fg [a&]:hover:brightness-95",
		destructive: "border-danger-border bg-danger-subtle text-danger-fg [a&]:hover:brightness-95",
		outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		link: "text-link underline-offset-4 [a&]:hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Et({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? v.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: H(Tt({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/lib/strings.tsx
var Dt = new Intl.NumberFormat(), W = (e) => Dt.format(e), Ot = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), kt = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }), At = new Intl.DateTimeFormat(void 0, {
	dateStyle: "medium",
	timeStyle: "short"
});
function jt(e, t, n = [
	"B",
	"KB",
	"MB",
	"GB"
]) {
	let r = e, i = 0;
	for (; r >= 1024 && i < n.length - 1;) r /= 1024, i++;
	return `${t(i === 0 || r >= 10 ? Math.round(r) : Math.round(r * 10) / 10)}\u00A0${n[i]}`;
}
var Mt = {
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
		zoomLevel: (e) => `${W(e)}%`
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
		hidden: (e) => `${W(e)} hidden`,
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
		sortCount: (e) => `${W(e)} sorts`,
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
		rowCount: (e) => e === 1 ? "1 row" : `${W(e)} rows`,
		pageOf: (e, t) => `Page ${W(e)} of ${W(t)}`,
		previousPage: "Previous",
		nextPage: "Next"
	},
	search: {
		placeholder: "Search…",
		empty: "No results found.",
		shortcut: "⌘\xA0K"
	},
	modal: { close: "Close" },
	ui: {
		close: "Close",
		breadcrumb: "Breadcrumb",
		more: "More",
		pagination: "Pagination",
		previous: "Previous",
		next: "Next",
		goToPreviousPage: "Go to previous page",
		goToNextPage: "Go to next page",
		morePages: "More pages",
		toggleSidebar: "Toggle sidebar",
		sidebarTitle: "Sidebar",
		sidebarDescription: "Displays the mobile sidebar.",
		commandTitle: "Command palette",
		commandDescription: "Search for a command to run…"
	},
	format: {
		number: W,
		date: (e) => kt.format(e),
		dateTime: (e) => At.format(e),
		fileSize: (e) => jt(e, W)
	},
	dashboard: {
		change: (e) => Ot.format(e / 100),
		noActivity: "Nothing has happened yet."
	},
	datePicker: {
		placeholder: "Pick a date",
		rangePlaceholder: "Pick a period",
		rangeSeparator: " – ",
		clear: "Clear",
		today: "Today",
		last7Days: "Last 7 days",
		last30Days: "Last 30 days",
		last90Days: "Last 90 days",
		thisMonth: "This month",
		thisYear: "This year",
		locale: Be
	},
	upload: {
		dropHere: "Drop files here or",
		dropFile: "Drop a file here or",
		browse: "browse",
		limits: ({ accept: e, maxSize: t, maxFiles: n }) => [
			e,
			t && `up to ${t} each`,
			n && n > 1 && `${W(n)} files at most`
		].filter(Boolean).join(" · "),
		tooLarge: (e, t) => `${e} is larger than ${t}.`,
		wrongType: (e) => `${e} is not a type this accepts.`,
		tooMany: (e) => e === 1 ? "Only one file." : `${W(e)} files at most.`,
		remove: (e) => `Remove ${e}`,
		uploading: "Uploading…",
		failed: "Upload failed",
		retry: "Retry",
		optional: "Optional"
	}
};
function Nt(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function Pt(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) Nt(n, e, t, r);
	return n;
}
var Ft = e.createContext(Mt);
function It({ strings: t, children: n }) {
	let r = e.useContext(Ft), i = e.useMemo(() => Pt(r, t), [r, t]);
	return /* @__PURE__ */ a(Ft.Provider, {
		value: i,
		children: n
	});
}
function G() {
	return e.useContext(Ft);
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function Lt({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": G().ui.breadcrumb,
		"data-slot": "breadcrumb",
		...e
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: H("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: H("inline-flex items-center gap-1.5", e),
		...t
	});
}
function Bt({ asChild: e, className: t, ...n }) {
	let r = e ? v.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: H("transition-colors hover:text-foreground", t),
		...n
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: H("font-normal text-foreground", e),
		...t
	});
}
function Ht({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: H("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(E, {})
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: H("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(pe, {
			"aria-hidden": "true",
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: G().ui.more
		})]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var K = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98] active:brightness-90", {
	variants: {
		variant: {
			default: "bg-primary-button text-primary-button-foreground hover:brightness-95",
			danger: "bg-danger-button text-danger-button-foreground hover:brightness-95 focus-visible:ring-danger/40",
			success: "bg-success-button text-success-button-foreground hover:brightness-95 focus-visible:ring-success/40",
			warning: "bg-warning-button text-warning-button-foreground hover:brightness-95 focus-visible:ring-warning/40",
			destructive: "bg-danger-button text-danger-button-foreground hover:brightness-95 focus-visible:ring-danger/40",
			outline: "border bg-card hover:bg-accent hover:text-accent-foreground",
			glass: "border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] text-foreground shadow-[var(--surface-shadow)] backdrop-blur-xl hover:bg-[var(--surface-glass)]/90",
			secondary: "bg-secondary text-secondary-foreground hover:brightness-95",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-link underline-offset-4 hover:underline active:scale-100 active:brightness-100"
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
function q({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? v.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: H(K({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/calendar.tsx
function Wt({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", formatters: o, components: s, locale: c, ...l }) {
	let u = He(), d = G().datePicker.locale, f = c ?? d;
	return /* @__PURE__ */ a(Ve, {
		showOutsideDays: n,
		className: H("group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: r,
		locale: f,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(f.code, { month: "short" }),
			...o
		},
		classNames: {
			root: H("w-fit", u.root),
			months: H("relative flex flex-col gap-4 md:flex-row", u.months),
			month: H("flex w-full flex-col gap-4", u.month),
			nav: H("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", u.nav),
			button_previous: H(K({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: H(K({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
			month_caption: H("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", u.month_caption),
			dropdowns: H("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", u.dropdowns),
			dropdown_root: H("relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", u.dropdown_root),
			dropdown: H("absolute inset-0 bg-popover opacity-0", u.dropdown),
			caption_label: H("font-medium select-none", r === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", u.caption_label),
			month_grid: H("w-full border-collapse", u.month_grid),
			weekdays: H("flex", u.weekdays),
			weekday: H("flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none", u.weekday),
			week: H("mt-2 flex w-full", u.week),
			week_number_header: H("w-(--cell-size) select-none", u.week_number_header),
			week_number: H("text-[0.8rem] text-muted-foreground select-none", u.week_number),
			day: H("group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md", l.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md", u.day),
			range_start: H("rounded-l-md bg-accent", u.range_start),
			range_middle: H("rounded-none", u.range_middle),
			range_end: H("rounded-r-md bg-accent", u.range_end),
			today: H("rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none", u.today),
			outside: H("text-muted-foreground aria-selected:text-muted-foreground", u.outside),
			disabled: H("text-muted-foreground opacity-50", u.disabled),
			hidden: H("invisible", u.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ a("div", {
				"data-slot": "calendar",
				ref: t,
				className: H(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => a(t === "left" ? ie : t === "right" ? oe : T, {
				className: H("size-4", e),
				...n
			}),
			DayButton: Gt,
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ a("td", {
				...t,
				children: /* @__PURE__ */ a("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...s
		},
		...l
	});
}
function Gt({ className: t, day: n, modifiers: r, ...i }) {
	let o = He(), s = e.useRef(null);
	return e.useEffect(() => {
		r.focused && s.current?.focus();
	}, [r.focused]), /* @__PURE__ */ a(q, {
		ref: s,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: H("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...i
	});
}
//#endregion
//#region src/lib/surfaces.ts
var Kt = "border bg-popover text-popover-foreground shadow-overlay", qt = "rounded-lg border bg-card text-card-foreground", Jt = {
	width: 320,
	height: 200
}, Yt = e.createContext(null);
function Xt() {
	let t = e.useContext(Yt);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function Zt({ id: t, className: n, children: r, config: i, initialDimension: s = Jt, ...c }) {
	let l = e.useId(), u = `chart-${t ?? l.replace(/:/g, "")}`;
	return /* @__PURE__ */ a(Yt.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ o("div", {
			"data-slot": "chart",
			"data-chart": u,
			className: H("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...c,
			children: [/* @__PURE__ */ a(Qt, {
				id: u,
				config: i
			}), /* @__PURE__ */ a(Ue.ResponsiveContainer, {
				initialDimension: s,
				children: r
			})]
		})
	});
}
var Qt = ({ id: e, config: t }) => {
	let n = Object.entries(t).flatMap(([e, t]) => t.color ? ["--color-" + e + ": " + t.color + ";"] : []);
	return n.length ? /* @__PURE__ */ a("style", { dangerouslySetInnerHTML: { __html: "[data-chart=" + e + "] {" + n.join(" ") + "}" } }) : null;
}, $t = Ue.Tooltip;
function en({ active: t, payload: n, className: r, indicator: s = "dot", hideLabel: c = !1, hideIndicator: l = !1, label: u, labelFormatter: d, labelClassName: f, formatter: p, color: m, nameKey: h, labelKey: g }) {
	let { config: _ } = Xt(), v = G().format, y = e.useMemo(() => {
		if (c || !n?.length) return null;
		let [e] = n, t = `${g ?? e?.dataKey ?? e?.name ?? "value"}`, r = rn(_, e, t), i = !g && typeof u == "string" ? _[u]?.label ?? u : r?.label;
		return d ? /* @__PURE__ */ a("div", {
			className: H("font-medium", f),
			children: d(i, n)
		}) : i ? /* @__PURE__ */ a("div", {
			className: H("font-medium", f),
			children: i
		}) : null;
	}, [
		u,
		d,
		n,
		c,
		f,
		_,
		g
	]);
	if (!t || !n?.length) return null;
	let b = n.length === 1 && s !== "dot";
	return /* @__PURE__ */ o("div", {
		className: H(Kt, "grid min-w-[8rem] items-start gap-1.5 rounded-lg px-2.5 py-1.5 text-xs", r),
		children: [b ? null : y, /* @__PURE__ */ a("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${h ?? e.name ?? e.dataKey ?? "value"}`, r = rn(_, e, n), c = m ?? e.payload?.fill ?? e.color;
				return /* @__PURE__ */ a("div", {
					className: H("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", s === "dot" && "items-center"),
					children: p && e?.value !== void 0 && e.name ? p(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ o(i, { children: [r?.icon ? /* @__PURE__ */ a(r.icon, {}) : !l && /* @__PURE__ */ a("div", {
						className: H("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": s === "dot",
							"w-1": s === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": s === "dashed",
							"my-0.5": b && s === "dashed"
						}),
						style: {
							"--color-bg": c,
							"--color-border": c
						}
					}), /* @__PURE__ */ o("div", {
						className: H("flex flex-1 justify-between leading-none", b ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ o("div", {
							className: "grid gap-1.5",
							children: [b ? y : null, /* @__PURE__ */ a("span", {
								className: "text-muted-foreground",
								children: r?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ a("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof e.value == "number" ? v.number(e.value) : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
var tn = Ue.Legend;
function nn({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: s } = Xt();
	return n?.length ? /* @__PURE__ */ a("div", {
		className: H("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, c = rn(s, e, r);
			return /* @__PURE__ */ o("div", {
				className: H("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), c?.label]
			}, n);
		})
	}) : null;
}
function rn(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region src/components/ui/card.tsx
function an({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		"data-variant": t,
		className: H(qt, "flex flex-col gap-6 py-6", t === "glass" && "border-[var(--surface-glass-border)] bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl", e),
		...n
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: H("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function sn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: H("leading-none font-semibold", e),
		...t
	});
}
function cn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function ln({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: H("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function un({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: H("px-6", e),
		...t
	});
}
function dn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: H("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function fn({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: H("peer relative size-4 shrink-0 rounded-xs border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(k, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function pn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function mn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function hn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function gn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: H("fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function vn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(hn, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(_n, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: H(Kt, "fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg p-6 duration-250 ease-settle outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-md p-3.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-hidden disabled:pointer-events-none sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(ze, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: G().ui.close
				})]
			})]
		})]
	});
}
function yn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: H("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function bn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: H("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(q, {
				variant: "outline",
				children: G().ui.close
			})
		})]
	});
}
function xn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: H("text-base leading-none font-semibold", e),
		...t
	});
}
function Sn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Cn({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function wn({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Tn({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function En({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: H(Kt, "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function Dn({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function On({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger-subtle data-[variant=destructive]:focus:text-danger-fg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function kn({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(k, { className: "size-4" }) })
		}), t]
	});
}
function An({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function jn({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(de, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function Mn({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: H("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: H("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Fn({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function In({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: H("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(oe, { className: "ml-auto size-4" })]
	});
}
function Ln({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: H(Kt, "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: H("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var zn = Ge, Bn = e.createContext({}), Vn = ({ ...e }) => /* @__PURE__ */ a(Bn.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(We, { ...e })
}), Hn = () => {
	let t = e.useContext(Bn), n = e.useContext(Un);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = Ke(), i = L({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, Un = e.createContext({});
function Wn({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(Un.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: H("grid gap-2", t),
			...n
		})
	});
}
function Gn({ className: e, ...t }) {
	let { error: n, formItemId: r } = Hn();
	return /* @__PURE__ */ a(Rn, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: H("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function Kn({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = Hn();
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function qn({ className: e, ...t }) {
	let { formDescriptionId: n } = Hn();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function Jn({ className: e, ...t }) {
	let { error: n, formMessageId: r } = Hn(), i = n ? String(n?.message ?? "") : t.children;
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
//#region src/lib/field-variants.ts
var Yn = {
	ghost: "rounded-md border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, Xn = t(H("h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20"), {
	variants: { variant: {
		default: "border border-input bg-transparent shadow-xs focus-visible:border-ring",
		ghost: Yn.ghost,
		cell: `h-8 px-2 ${Yn.cell}`
	} },
	defaultVariants: { variant: "default" }
});
function J({ className: e, type: t, variant: n, ...r }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		className: H(Xn({ variant: n }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function Zn({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": G().ui.pagination,
		"data-slot": "pagination",
		className: H("mx-auto flex w-full justify-center", e),
		...t
	});
}
function Qn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: H("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function $n({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function er({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: H(K({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function tr({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(er, {
		"aria-label": n.goToPreviousPage,
		size: "default",
		className: H("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(ie, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.previous
		})]
	});
}
function nr({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(er, {
		"aria-label": n.goToNextPage,
		size: "default",
		className: H("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.next
		}), /* @__PURE__ */ a(oe, {})]
	});
}
function rr({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: H("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(j, {
			"aria-hidden": !0,
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: G().ui.morePages
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function ir({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function ar({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function or({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: H(Kt, "z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-lg p-4 outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function sr({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: H("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: H("font-medium", e),
		...t
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: H("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/progress.tsx
function dr({ className: e, value: t, ...n }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "progress",
		className: H("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", e),
		...n,
		children: /* @__PURE__ */ a(p.Indicator, {
			"data-slot": "progress-indicator",
			className: "h-full w-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (t || 0)}%)` }
		})
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function fr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "radio-group",
		className: H("grid gap-3", e),
		...t
	});
}
function pr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Item, {
		"data-slot": "radio-group-item",
		className: H("relative aspect-square size-4 shrink-0 rounded-full border border-input data-[state=checked]:border-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20", e),
		...t,
		children: /* @__PURE__ */ a(m.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(de, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function mr({ ...e }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "select",
		...e
	});
}
function hr({ ...e }) {
	return /* @__PURE__ */ a(h.Group, {
		"data-slot": "select-group",
		...e
	});
}
function gr({ ...e }) {
	return /* @__PURE__ */ a(h.Value, {
		"data-slot": "select-value",
		...e
	});
}
function _r({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(h.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: H("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? Yn[r] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...i,
		children: [n, /* @__PURE__ */ a(h.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(T, { className: "size-4 opacity-50" })
		})]
	});
}
function vr({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
		"data-slot": "select-content",
		className: H(Kt, "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(Sr, {}),
			/* @__PURE__ */ a(h.Viewport, {
				className: H("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Cr, {})
		]
	}) });
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Label, {
		"data-slot": "select-label",
		className: H("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function br({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(h.Item, {
		"data-slot": "select-item",
		className: H("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(k, { className: "size-4" }) })
		}), /* @__PURE__ */ a(h.ItemText, { children: t })]
	});
}
function xr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Separator, {
		"data-slot": "select-separator",
		className: H("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(D, { className: "size-4" })
	});
}
function Cr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(T, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function wr({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: H("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Tr({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Er({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Dr({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Or({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: H("fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Ar({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ a(kr, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: H("bg-popover text-popover-foreground shadow-overlay", "fixed z-50 flex flex-col transition ease-settle data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-250", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto max-h-dvh border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto max-h-dvh border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [/* @__PURE__ */ a("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain",
			children: t
		}), r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 -m-3.5 rounded-md p-3.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-hidden disabled:pointer-events-none sm:-m-2 sm:p-2",
			children: [/* @__PURE__ */ a(ze, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: G().ui.close
			})]
		})]
	})] });
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: H("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: H("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: H("font-semibold text-foreground", e),
		...t
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Fr = 768;
function Ir() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Fr);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Fr), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: H("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Rr({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(x.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function zr({ ...e }) {
	return /* @__PURE__ */ a(Rr, { children: /* @__PURE__ */ a(x.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function Br({ ...e }) {
	return /* @__PURE__ */ a(x.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Vr({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ a(x.Portal, { children: /* @__PURE__ */ o(x.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: H("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-tooltip px-3 py-1.5 text-xs text-balance text-tooltip-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ a(x.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-tooltip fill-tooltip" })]
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var Hr = "sidebar_state", Ur = 604800, Wr = "16rem", Gr = "18rem", Kr = "3rem", qr = "b", Jr = e.createContext(null);
function Yr() {
	let t = e.useContext(Jr);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function Xr({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Ir(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${Hr}=${t}; path=/; max-age=${Ur}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === qr && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(Jr.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": Wr,
				"--sidebar-width-icon": Kr,
				...o
			},
			className: H("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function Zr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: l, state: u, openMobile: d, setOpenMobile: f } = Yr(), p = G().ui;
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: H("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (l) return /* @__PURE__ */ a(Tr, {
		open: d,
		onOpenChange: f,
		...c,
		children: /* @__PURE__ */ o(Ar, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": Gr },
			side: e,
			children: [/* @__PURE__ */ o(jr, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Nr, { children: p.sidebarTitle }), /* @__PURE__ */ a(Pr, { children: p.sidebarDescription })]
			}), /* @__PURE__ */ a("div", {
				className: "flex h-full w-full flex-col",
				children: s
			})]
		})
	});
	let m = n === "offcanvas";
	return /* @__PURE__ */ o("div", {
		className: H("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": u,
		"data-collapsible": u === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: H("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", m ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: H("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", m ? ["transition-transform duration-200 ease-settle", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
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
function Qr({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = Yr();
	return /* @__PURE__ */ o(q, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: H("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(Ee, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: G().ui.toggleSidebar
		})]
	});
}
function $r({ className: e, ...t }) {
	let { toggleSidebar: n } = Yr(), r = G().ui;
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": r.toggleSidebar,
		tabIndex: -1,
		onClick: n,
		title: r.toggleSidebar,
		className: H("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-transform ease-settle group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: H("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(J, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: H("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ri({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ii({ className: e, ...t }) {
	return /* @__PURE__ */ a(wr, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: H("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function ai({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: H("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function oi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: H("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function si({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: H("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-ring/50 outline-hidden transition-opacity duration-200 ease-settle focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function ci({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: H("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/50 outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function li({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: H("w-full text-sm", e),
		...t
	});
}
function ui({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: H("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function di({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: H("group/menu-item relative", e),
		...t
	});
}
var fi = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-ring/50 outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[3px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function pi({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? v.Root : "button", { isMobile: u, state: d } = Yr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: H(fi({
			variant: n,
			size: r
		}), s),
		...c
	});
	return !i || d !== "collapsed" || u ? f : (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(zr, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(Br, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(Vr, {
			side: "right",
			align: "center",
			...i
		})]
	}));
}
function mi({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? v.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: H("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/50 outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function hi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: H("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function gi({ className: t, showIcon: n = !1, ...r }) {
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
		children: [n && /* @__PURE__ */ a(Lr, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Lr, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function _i({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: H("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: H("group/menu-sub-item relative", e),
		...t
	});
}
function yi({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? v.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: H("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-ring/50 outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[3px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/components/ui/slider.tsx
function bi({ className: t, defaultValue: n, value: r, min: i = 0, max: s = 100, ...c }) {
	let l = e.useMemo(() => Array.isArray(r) ? r : Array.isArray(n) ? n : [i, s], [
		r,
		n,
		i,
		s
	]);
	return /* @__PURE__ */ o(_.Root, {
		"data-slot": "slider",
		defaultValue: n,
		value: r,
		min: i,
		max: s,
		className: H("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", t),
		...c,
		children: [/* @__PURE__ */ a(_.Track, {
			"data-slot": "slider-track",
			className: H("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ a(_.Range, {
				"data-slot": "slider-range",
				className: H("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: l.length }, (e, t) => /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-card ring-ring/50 transition-[color,box-shadow] hover:ring-[3px] focus-visible:ring-[3px] focus-visible:outline-hidden"
		}, t))]
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var xi = ({ theme: e, ...t }) => /* @__PURE__ */ a(qe, {
	theme: "light",
	className: "toaster group",
	closeButton: !0,
	icons: {
		success: /* @__PURE__ */ a(le, { className: "size-4" }),
		info: /* @__PURE__ */ a(ye, { className: "size-4" }),
		warning: /* @__PURE__ */ a(Le, { className: "size-4" }),
		error: /* @__PURE__ */ a(F, { className: "size-4" }),
		loading: /* @__PURE__ */ a(Oe, { className: "size-4 animate-spin" })
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
function Si({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(y.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: H("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-[background-color,border-color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
		...n,
		children: /* @__PURE__ */ a(y.Thumb, {
			"data-slot": "switch-thumb",
			className: H("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function Ci({ className: e, containerClassName: t, containerRef: n, ...r }) {
	return /* @__PURE__ */ a("div", {
		ref: n,
		"data-slot": "table-container",
		className: H("relative w-full overflow-x-auto", t),
		children: /* @__PURE__ */ a("table", {
			"data-slot": "table",
			className: H("w-full caption-bottom text-sm", e),
			...r
		})
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: H("[&_tr]:border-b", e),
		...t
	});
}
function Ti({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: H("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: H("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function Y({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: H("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-accent", e),
		...t
	});
}
function Di({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: H("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Oi({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: H("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function ki({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: H("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Ai({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(b.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: H("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var ji = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Mi({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(b.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: H(ji({ variant: t }), e),
		...n
	});
}
function Ni({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Trigger, {
		"data-slot": "tabs-trigger",
		className: H("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function Pi({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Content, {
		"data-slot": "tabs-content",
		className: H("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Fi({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: H("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm", t ? Yn[t] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...n
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
var Ii = t("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 min-w-9 px-2",
			sm: "h-8 min-w-8 px-1.5",
			lg: "h-10 min-w-10 px-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Li({ className: e, variant: t, size: n, ...r }) {
	return /* @__PURE__ */ a(ee.Root, {
		"data-slot": "toggle",
		className: H(Ii({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
//#endregion
//#region src/components/ui/toggle-group.tsx
var Ri = e.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function zi({ className: e, variant: t, size: n, spacing: r = 0, children: i, ...o }) {
	return /* @__PURE__ */ a(te.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		style: { "--gap": r },
		className: H("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
		...o,
		children: /* @__PURE__ */ a(Ri.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r
			},
			children: i
		})
	});
}
function Bi({ className: t, children: n, variant: r, size: i, ...o }) {
	let s = e.useContext(Ri);
	return /* @__PURE__ */ a(te.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": s.variant || r,
		"data-size": s.size || i,
		"data-spacing": s.spacing,
		className: H(Ii({
			variant: s.variant || r,
			size: s.size || i
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", t),
		...o,
		children: n
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Vi({ logo: e, footer: t, className: n, children: r, ...i }) {
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
var Hi = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Ui({ component: e, children: t }) {
	return /* @__PURE__ */ a(Hi.Provider, {
		value: e,
		children: t
	});
}
function X(t) {
	let n = e.useContext(Hi);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var Wi = (e) => R.object({
	email: R.email(e.invalidEmail),
	password: R.string().min(1, e.passwordRequired)
});
function Gi({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = G().auth, f = e.useMemo(() => Wi(d), [d]), p = I({
		resolver: Ye(f),
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
	return /* @__PURE__ */ o(an, { children: [/* @__PURE__ */ o(on, {
		className: "text-center",
		children: [/* @__PURE__ */ a(sn, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(cn, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(zn, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(ht, { children: n })
				}),
				/* @__PURE__ */ a(Vn, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Wn, { children: [
						/* @__PURE__ */ a(Gn, { children: d.email }),
						/* @__PURE__ */ a(Kn, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(Jn, {})
					] })
				}),
				/* @__PURE__ */ a(Vn, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(Wn, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(Gn, { children: d.password }), l && /* @__PURE__ */ a(X, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(Kn, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(J, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(Jn, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(P, { className: "animate-spin" }), d.signIn]
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
						/* @__PURE__ */ a(X, {
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
var Ki = (e) => R.object({
	name: R.string().min(2, e.nameTooShort),
	email: R.email(e.invalidEmail),
	password: R.string().min(8, e.passwordTooShort),
	confirmPassword: R.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function qi({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = G().auth, d = e.useMemo(() => Ki(u), [u]), f = I({
		resolver: Ye(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(Vn, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(Wn, { children: [
			/* @__PURE__ */ a(Gn, { children: t }),
			/* @__PURE__ */ a(Kn, { children: /* @__PURE__ */ a(J, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(qn, { children: r }),
			/* @__PURE__ */ a(Jn, {})
		] })
	});
	return /* @__PURE__ */ o(an, { children: [/* @__PURE__ */ o(on, {
		className: "text-center",
		children: [/* @__PURE__ */ a(sn, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(cn, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(zn, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(ht, { children: n })
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
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(P, { className: "animate-spin" }), u.createAccount]
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
						/* @__PURE__ */ a(X, {
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
var Ji = (e) => R.object({ email: R.email(e.invalidEmail) });
function Yi({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = G().auth, c = e.useMemo(() => Ji(s), [s]), l = I({
		resolver: Ye(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(an, { children: [/* @__PURE__ */ o(on, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(M, {
				"aria-hidden": !0,
				className: "size-6 text-success-fg"
			}),
			/* @__PURE__ */ a(sn, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(cn, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(un, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(X, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(an, { children: [/* @__PURE__ */ o(on, {
		className: "text-center",
		children: [/* @__PURE__ */ a(sn, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(cn, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(un, { children: /* @__PURE__ */ a(zn, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(ht, { children: n })
				}),
				/* @__PURE__ */ a(Vn, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Wn, { children: [
						/* @__PURE__ */ a(Gn, { children: s.email }),
						/* @__PURE__ */ a(Kn, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(Jn, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(P, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(X, {
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
function Xi({ className: e, ...t }) {
	return /* @__PURE__ */ a(z, {
		"data-slot": "command",
		className: H("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function Zi({ title: e, description: t, children: n, className: r, showCloseButton: i = !0, ...s }) {
	let c = G().ui;
	return /* @__PURE__ */ a(pn, {
		...s,
		children: /* @__PURE__ */ o(vn, {
			className: H("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(yn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(xn, { children: e ?? c.commandTitle }), /* @__PURE__ */ a(Sn, { children: t ?? c.commandDescription })]
			}), /* @__PURE__ */ a(Xi, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]_svg]:size-4",
				children: n
			})]
		})
	});
}
function Qi({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(Se, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(z.Input, {
			"data-slot": "command-input",
			className: H("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function $i({ className: e, ...t }) {
	return /* @__PURE__ */ a(z.List, {
		"data-slot": "command-list",
		className: H("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function ea({ ...e }) {
	return /* @__PURE__ */ a(z.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function ta({ className: e, ...t }) {
	return /* @__PURE__ */ a(z.Group, {
		"data-slot": "command-group",
		className: H("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function na({ className: e, ...t }) {
	return /* @__PURE__ */ a(z.Separator, {
		"data-slot": "command-separator",
		className: H("-mx-1 h-px bg-border", e),
		...t
	});
}
function ra({ className: e, ...t }) {
	return /* @__PURE__ */ a(z.Item, {
		"data-slot": "command-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function ia({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function aa({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
	let u = G().search, [d, f] = e.useState(!1), p = n ?? d, m = r ?? f;
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
	]), /* @__PURE__ */ o(Zi, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(Qi, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o($i, { children: [/* @__PURE__ */ a(ea, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(na, {}), /* @__PURE__ */ a(ta, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(ra, {
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
					e.shortcut && /* @__PURE__ */ a(ia, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function oa({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = G().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: H("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(xe, {
				"aria-hidden": !0,
				className: "size-4 shrink-0"
			}),
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
function sa({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = G().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [ee, te] = e.useState(0), x = e.useRef(null), S = t.length === 0 ? -1 : Math.min(ee, t.length - 1), ne = S >= 0 ? `${h}-option-${S}` : void 0;
	e.useEffect(() => {
		x.current?.querySelector("[data-active=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [S, y]);
	let C = (e) => {
		s === void 0 && _(e), c?.(e), te(0), b(!0);
	}, w = (e) => {
		n(e), b(!1);
	}, T = y && (u || t.length > 0 || v.length > 0);
	function re(e) {
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
			te((e) => (Math.min(e, t.length - 1) + n + t.length) % t.length);
			return;
		}
		if (e.key === "Home" || e.key === "End") {
			if (!y || t.length === 0) return;
			e.preventDefault(), te(e.key === "Home" ? 0 : t.length - 1);
			return;
		}
		if (e.key === "Enter") {
			let n = S >= 0 ? t[S] : void 0;
			if (!y || !n) return;
			e.preventDefault(), w(n);
		}
	}
	return /* @__PURE__ */ o("div", {
		className: H("relative", p),
		children: [/* @__PURE__ */ a(J, {
			id: h,
			role: "combobox",
			type: "text",
			autoComplete: "off",
			"aria-label": r,
			"aria-expanded": T,
			"aria-controls": `${h}-list`,
			"aria-autocomplete": "list",
			"aria-activedescendant": T ? ne : void 0,
			value: v,
			placeholder: i,
			autoFocus: d,
			disabled: f,
			onChange: (e) => C(e.target.value),
			onFocus: () => b(!0),
			onBlur: (e) => {
				e.currentTarget.parentElement?.contains(e.relatedTarget) || b(!1);
			},
			onKeyDown: re
		}), /* @__PURE__ */ o("ul", {
			ref: x,
			id: `${h}-list`,
			role: "listbox",
			"aria-label": r,
			hidden: !T,
			className: H(Kt, "absolute z-50 mt-1 max-h-64 w-full overflow-y-auto overscroll-contain rounded-lg p-1"),
			children: [t.map((e, t) => /* @__PURE__ */ o("li", {
				id: `${h}-option-${t}`,
				role: "option",
				"aria-selected": t === S,
				"data-active": t === S,
				onMouseDown: (t) => {
					t.preventDefault(), w(e);
				},
				onMouseEnter: () => te(t),
				className: H("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === S && "bg-accent text-accent-foreground"),
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
//#region src/blocks/page/stat-tile.tsx
var ca = "text-xs font-medium tracking-wider text-muted-foreground uppercase", la = ca;
function ua({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: H(la, t),
		...n
	});
}
var da = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function fa({ label: e, value: t, hint: n, icon: r, change: i, trend: s, className: c, ...l }) {
	let u = G().dashboard, d = s ?? (i === void 0 || i === 0 ? "flat" : i > 0 ? "up" : "down");
	return /* @__PURE__ */ o("div", {
		"data-slot": "stat-tile",
		className: H(qt, "p-4", c),
		...l,
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ a("span", {
					className: la,
					children: e
				}), r && /* @__PURE__ */ a(r, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-muted-foreground"
				})]
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 text-2xl font-semibold tabular-nums",
				children: t
			}),
			(n || i !== void 0) && /* @__PURE__ */ o("div", {
				className: H("mt-1 flex flex-wrap gap-x-1 text-xs", da[d]),
				children: [i !== void 0 && /* @__PURE__ */ a("span", {
					className: "font-medium tabular-nums",
					children: u.change(i)
				}), n && /* @__PURE__ */ a("span", { children: n })]
			})
		]
	});
}
//#endregion
//#region src/blocks/data/csv.ts
var pa = (e) => e === "," ? ";" : ",", ma = /^[=+\-@\t\r]/;
function ha(e, t) {
	let n = ma.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function ga(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function _a(e, t, n = ".") {
	let r = pa(n), i = (e) => e.map((e) => ha(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => ga(t.value(e), n))))].join("\r\n");
}
function va(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var ya = "—", Z = (e) => e == null || e === "" ? "" : String(e);
function ba(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var xa = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, Sa = (e) => Array.isArray(e) ? e.map(Z) : [Z(e)], Ca = (e) => (t, n) => {
	if (!e.order) return ba(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, wa = (e) => !!e.header;
function Q(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Ta(e, t) {
	if (xa(t)) return e.header;
	let n = Sa(t).map((t) => Q(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Ea(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || xa(e.value) ? [] : [[t, Sa(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var Da = "ziku", Oa = Da;
function ka(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Oa !== Da && Oa !== e) throw Error(`Storage prefix is already "${Oa}", cannot change it to "${e}"`);
	Oa = e;
}
var Aa = () => Oa, ja = (...e) => [Oa, ...e].join("."), Ma = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Na = (e) => ja("views", e);
function Pa(e, t, n = Mt.dataTable.allView) {
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
function Fa(e, t, n, r) {
	let i = Pa(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Na(e)), n = t ? JSON.parse(t) : null;
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
var Ia = 800, La = (e) => e.shared !== void 0;
function Ra(t, n, r, i, a) {
	let o = G().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = Fa(r, t, n, o);
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
			let e = s.filter((e) => !La(e));
			localStorage.setItem(Na(r), JSON.stringify({
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
			let a = new Set(Pa(t, n).map((e) => e.id)), o = s.filter((e) => !La(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => La(e) || !u.has(e.name)),
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
		}, Ia)));
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
			return r && La(r) && g(r.id, t(e(r))), {
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
				icon: Ma[n.views.length % Ma.length],
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
			t && La(t) && p.current?.remove(t.id).catch(() => {});
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
var za = {
	table: je,
	list: be,
	board: ke,
	star: Ae,
	funnel: _e,
	clock: A,
	users: Fe,
	tag: Me,
	eye: he
};
function Ba({ name: e, className: t }) {
	let n = za[e] ?? je;
	return /* @__PURE__ */ a(n, { className: t });
}
function Va({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(ir, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(ar, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(or, {
			align: r,
			className: H("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function Ha({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(Va, {
		align: "end",
		width: r,
		className: H(K({
			variant: "ghost",
			size: "icon-sm"
		}), "relative shrink-0", n ? "text-link" : "text-muted-foreground hover:text-foreground"),
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
var Ua = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function Wa({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = G(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(J, {
			className: "mb-1 h-8",
			placeholder: s.findColumn,
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: H(Ua, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(we, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? je;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: Ua,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function Ga({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let { dataTable: l, common: u } = G(), [d, f] = e.useState(""), p = Array.isArray(r) ? r : [], m = n.filter((e) => e.label.toLowerCase().includes(d.toLowerCase()));
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
			className: H(K({
				variant: "ghost",
				size: "icon-xs"
			}), "text-muted-foreground hover:text-danger-fg"),
			children: /* @__PURE__ */ a(Ne, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(J, {
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
			children: [/* @__PURE__ */ a(fn, {
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
	] }) : /* @__PURE__ */ a(J, {
		className: "h-8",
		placeholder: l.typeAValue,
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function Ka({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = G().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(mr, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(_r, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(gr, {})
					}), /* @__PURE__ */ a(vr, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(br, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(mr, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(_r, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(gr, {})
					}), /* @__PURE__ */ o(vr, { children: [/* @__PURE__ */ a(br, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(br, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: H(K({
						variant: "ghost",
						size: "icon-xs"
					}), "shrink-0 text-muted-foreground hover:text-danger-fg"),
					children: /* @__PURE__ */ a(Re, { className: "size-3.5" })
				})
			]
		}, t.id)),
		c.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([...e, {
				id: c[0].key,
				desc: !1
			}]),
			className: H(Ua, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Ce, { className: "size-3.5" }),
				" ",
				s.addSort
			]
		}),
		e.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([]),
			className: H(Ua, "text-danger-fg hover:bg-danger-subtle"),
			children: [
				/* @__PURE__ */ a(Ne, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function qa({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(wa).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(fn, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function Ja({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a(Va, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(Ya, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function Ya({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
	let { dataTable: c } = G(), [l, u] = e.useState(!1), d = e.useId();
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
				children: [/* @__PURE__ */ a(J, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: t,
					"aria-invalid": l || void 0,
					"aria-describedby": l ? d : void 0,
					onChange: () => u(!1)
				}), /* @__PURE__ */ a(q, {
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
function Xa({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = G(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
	return _ ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => m(null),
			"aria-label": d.back,
			className: H(K({
				variant: "ghost",
				size: "icon-xs"
			}), "text-muted-foreground"),
			children: /* @__PURE__ */ a(re, { className: "size-3.5" })
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
				children: /* @__PURE__ */ a(Re, { className: "size-3.5" })
			})]
		}),
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center gap-2",
			children: [/* @__PURE__ */ a("button", {
				type: "button",
				title: d.changeIcon,
				onClick: () => g((e) => !e),
				className: H("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Ba, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(J, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": d.viewName
			})]
		}),
		h && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: Ma.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: H("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Ba, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: Ua,
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
				/* @__PURE__ */ a(ae, { className: "size-3.5 shrink-0 text-muted-foreground" })
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
var Za = "application/x-ziku-card", Qa = {
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
function $a({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
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
			let n = t.dataTransfer.getData(Za), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: H("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(to, {
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
					className: ca,
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
							d(l), e.dataTransfer.setData(Za, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: H("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", h && "select-none", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a(eo, {
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
function eo({ columns: e, from: t, onPick: n }) {
	let r = G().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Cn, { children: [/* @__PURE__ */ a(Tn, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: H("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ne, { className: "size-3.5" })
	}), /* @__PURE__ */ a(En, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(On, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function to({ col: e, state: t, drop: n }) {
	let r = e.tile, i = Qa[r.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: H("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? H("border-solid", i.over) : H("border-dashed", i.idle)),
		children: [
			/* @__PURE__ */ a(r.icon, {
				"aria-hidden": !0,
				className: "size-6"
			}),
			/* @__PURE__ */ a("span", {
				className: H(ca, "text-current"),
				children: e.title
			}),
			/* @__PURE__ */ a("span", {
				className: "text-lg leading-none font-semibold tabular-nums",
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
var no = V({
	rowSortingFeature: lt,
	sortedRowModel: B(),
	columnFilteringFeature: Ze,
	filteredRowModel: rt(),
	globalFilteringFeature: ot,
	columnFacetingFeature: Xe,
	facetedRowModel: tt(),
	facetedUniqueValues: nt(),
	columnGroupingFeature: Qe,
	groupedRowModel: it(),
	rowExpandingFeature: st,
	expandedRowModel: et(),
	columnVisibilityFeature: $e,
	rowPaginationFeature: ct,
	paginatedRowModel: at()
});
function ro({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: b, presets: ee = [], viewKey: te, onStateChange: x, view: S, viewsBackend: ne, paged: C, csv: T, className: re }) {
	let ie = G(), E = ie.dataTable, oe = ie.common, se = e.useMemo(() => n ?? [], [n]), D = !!C, O = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), le = e.useMemo(() => ({
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
	]), ue = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => O[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => O[e.id]).map((e) => O[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: xa(e.value) ? [] : [Z(e.value)]
		} : e).map((e) => {
			let t = O[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Z(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => O[e])
	}), [O]), k = Ra(le, ee, te, ne, S), { views: de, active: A, isPreset: pe, patch: j } = k, M = e.useMemo(() => ue(A.state), [A.state, ue]);
	e.useEffect(() => {
		x?.(M, A.id);
	}, [
		M,
		A.id,
		x
	]);
	let ge = (e) => (t) => j({ [e]: typeof t == "function" ? t(M[e]) : t }), ye = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : Q(e, Z(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!D || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: wa(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? Ca(e)(Z(t.getValue(r)), Z(n.getValue(r))) : ba(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (xa(n)) return !0;
			let r = Z(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, D]), [be, Se] = e.useState(!0), [we, Ee] = e.useState(0), N = M.grouping[0] ?? "", P = t.filter((e) => e.facet), Oe = !!(y && P.length && c), Ae = M.mode === "board" && Oe, Me = p > 0 && !N && !Ae && !D, Pe = e.useMemo(() => M.columnFilters.filter((e) => !xa(e.value) && !O[e.id]?.filterKey), [M.columnFilters, O]), Ie = D && (Pe.length > 0 || M.grouping.length > 0 || Ae), Le = e.useMemo(() => N && !M.sorting.some((e) => e.id === N) ? [{
		id: N,
		desc: !1
	}, ...M.sorting] : M.sorting, [N, M.sorting]), F = ut({
		features: no,
		data: se,
		columns: ye,
		state: {
			sorting: Le,
			columnFilters: D ? Pe : M.columnFilters,
			globalFilter: D ? "" : M.globalFilter,
			columnVisibility: M.columnVisibility,
			grouping: M.grouping,
			expanded: be,
			pagination: {
				pageIndex: Me ? we : 0,
				pageSize: Me ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: ge("sorting"),
		onColumnFiltersChange: ge("columnFilters"),
		onGlobalFilterChange: ge("globalFilter"),
		onColumnVisibilityChange: ge("columnVisibility"),
		onGroupingChange: ge("grouping"),
		onExpandedChange: Se,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: we,
				pageSize: Me ? p : 2 ** 53 - 1
			}) : e;
			Ee(t.pageIndex);
		},
		manualSorting: D && !N,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Z(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), ze = F.getFilteredRowModel().rows;
	function Be() {
		if (!T) return;
		let e = T.decimal ?? ".", t = F.getVisibleLeafColumns().map((e) => O[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = F.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		va(T.filename, _a(n, t, e));
	}
	e.useEffect(() => {
		Ee(0);
	}, [
		M.columnFilters,
		M.globalFilter,
		M.grouping
	]);
	let Ve = mo(M.globalFilter, po), He = JSON.stringify(Ea(t, {
		...M,
		globalFilter: Ve
	})), Ue = e.useRef(C?.setQuery);
	e.useEffect(() => {
		Ue.current = C?.setQuery;
	}), e.useEffect(() => {
		Ue.current?.(JSON.parse(He));
	}, [He]);
	let We = e.useRef(null), Ge = C?.more, I = C?.hasMore ?? !1, Ke = C?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = We.current;
		if (!e || !Ge || !I || Ke) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && Ge();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		Ge,
		I,
		Ke
	]), e.useEffect(() => {
		Ie && I && !Ke && Ge?.();
	}, [
		Ie,
		I,
		Ke,
		Ge
	]);
	let L = M.columnFilters, qe = Object.values(M.columnVisibility).filter((e) => e === !1).length, Je = L.length > 0 || !!M.globalFilter || M.grouping.length > 0 || M.sorting.length > 0 || qe > 0, Ye = Je && (se.length > 0 || D), R = t.filter((e) => wa(e) && e.sortable !== !1 && !L.some((t) => t.id === e.key)), z = t.filter((e) => wa(e) && e.sortable !== !1 && (!D || !!e.sortKey)), Xe = (e) => j({ columnFilters: [...L, {
		id: e,
		value: O[e]?.facet ? [] : ""
	}] }), Ze = (e) => j({ columnFilters: L.filter((t) => t.id !== e) }), Qe = (e, t) => j({ columnFilters: L.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function $e(e) {
		if (!e.facet) return [];
		let t = D && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: Q(e, t)
		})) : [...F.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Ca(e)(Z(t[0]), Z(n[0]))).map(([n, r]) => ({
			value: Z(n),
			label: t ? Q(e, Z(n)) : `${Q(e, Z(n))} (${r})`
		}));
	}
	let et = (e) => j({
		mode: e,
		grouping: e === "board" && !N ? [P[0].key] : M.grouping
	}), tt = /* @__PURE__ */ a(qa, {
		columns: t,
		visibility: M.columnVisibility,
		onToggle: (e, t) => j({ columnVisibility: {
			...M.columnVisibility,
			[e]: t
		} })
	}), nt = /* @__PURE__ */ a(Ka, {
		sorting: M.sorting,
		sortable: z,
		byKey: O,
		onChange: (e) => j({ sorting: e })
	}), rt = (e) => /* @__PURE__ */ a(Wa, {
		columns: P,
		empty: {
			label: E.noGrouping,
			onPick: () => {
				j({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			j({ grouping: [t] }), e?.();
		}
	}), it = /* @__PURE__ */ o(i, { children: [
		L.map((e) => {
			let t = O[e.id];
			if (!t) return null;
			let n = t.icon ?? _e;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Ta(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => Ze(e.id),
						"aria-label": E.removeFilterFor(t.header),
						className: H(K({
							variant: "ghost",
							size: "icon-xs"
						}), "shrink-0 text-muted-foreground hover:text-danger-fg"),
						children: /* @__PURE__ */ a(Re, { className: "size-3.5" })
					})
				]
			}, e.id);
		}),
		L.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(Wa, {
			columns: R,
			onPick: Xe
		})
	] }), at = [
		...Oe ? [{
			key: "layout",
			icon: je,
			label: E.layout,
			value: M.mode === "board" ? E.board : E.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				Te,
				E.table
			], [
				"board",
				ke,
				E.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => et(e),
				className: H("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", M.mode === e && "font-medium"),
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
			label: E.visibleColumns,
			value: qe ? E.hidden(qe) : E.allView,
			panel: tt
		},
		{
			key: "filter",
			icon: ve,
			label: E.filters,
			value: L.length ? String(L.length) : void 0,
			panel: it
		},
		{
			key: "sort",
			icon: De,
			label: E.sorting,
			value: M.sorting.length ? M.sorting.length === 1 ? O[M.sorting[0].id]?.header : String(M.sorting.length) : void 0,
			panel: nt
		},
		...P.length ? [{
			key: "group",
			icon: Te,
			label: E.groupBy,
			value: N ? O[N]?.header : oe.none,
			panel: rt()
		}] : []
	], B = N ? O[N] : null, ot = (e) => e && e !== "—" ? Q(B ?? void 0, e) : "—", st = e.useMemo(() => {
		if (!Ae || !B) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of ze) {
			let n = Z(t.getValue(N)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...B.order ?? [], ...e.keys()])].sort(Ca(B)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: ot(t),
				items: n,
				subtitle: b?.(n),
				tile: B.boardTile?.(t)
			};
		});
	}, [
		Ae,
		B,
		ze,
		N,
		b
	]), ct = F.getVisibleLeafColumns().length, lt = F.getRowModel().rows, V = lt.length > io, ft = e.useRef(null), pt = dt({
		count: lt.length,
		enabled: V,
		getScrollElement: () => ft.current,
		estimateSize: () => ao,
		overscan: oo,
		initialRect: {
			width: 0,
			height: so
		},
		measureElement: (e) => e.getBoundingClientRect().height || ao,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || so
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), U = pt.getVirtualItems(), mt = V ? U.map((e) => ({
		row: lt[e.index],
		index: e.index
	})) : lt.map((e, t) => ({
		row: e,
		index: t
	})), ht = V && U.length > 0 ? U[0].start : 0, gt = V && U.length > 0 ? pt.getTotalSize() - U[U.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: H("overflow-hidden rounded-md border bg-card", re),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [de.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => k.select(e.id),
						className: H("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === A.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(Ba, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: E.sharedBy(e.ownerName),
								"aria-label": E.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(Fe, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(Ja, {
						align: "start",
						title: E.saveView,
						className: H(K({
							variant: "ghost",
							size: "icon-sm"
						}), "shrink-0 text-muted-foreground"),
						trigger: /* @__PURE__ */ a(Ce, { className: "size-4" }),
						defaultValue: E.newView,
						confirmLabel: E.createView,
						onSubmit: k.add,
						shareLabel: k.sharable ? E.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(Ha, {
							icon: xe,
							label: oe.search,
							active: !!M.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(J, {
								className: "h-8",
								placeholder: u ?? oe.searchPlaceholder,
								autoFocus: !0,
								value: M.globalFilter,
								onChange: (e) => j({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(Ha, {
							icon: ve,
							label: E.filter,
							active: L.length > 0,
							children: (e) => /* @__PURE__ */ a(Wa, {
								columns: R,
								onPick: (t) => {
									Xe(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(Ha, {
							icon: De,
							label: E.sort,
							active: M.sorting.length > 0,
							width: "w-88",
							children: nt
						}),
						P.length > 0 && /* @__PURE__ */ a(Ha, {
							icon: Te,
							label: E.group,
							active: !!N,
							children: (e) => rt(e)
						}),
						/* @__PURE__ */ a(Ha, {
							icon: he,
							label: E.visibleColumns,
							active: qe > 0,
							width: "w-52",
							children: tt
						}),
						Oe && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								Te,
								E.table
							], [
								"board",
								ke,
								E.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => et(e),
								className: H("px-2 py-1", M.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(Va, {
							align: "end",
							width: "w-72",
							className: H(K({
								variant: "ghost",
								size: "icon-sm"
							}), "ml-1 text-muted-foreground"),
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": E.viewSettings,
								children: /* @__PURE__ */ a(fe, { className: "size-4" })
							}),
							children: (e) => /* @__PURE__ */ a(Xa, {
								name: A.name,
								icon: A.icon,
								onIcon: k.setIcon,
								onRename: k.rename,
								onClose: e,
								rows: at,
								footer: /* @__PURE__ */ o(i, { children: [T && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										Be(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(me, { className: "size-4 text-muted-foreground" }), E.exportCsv]
								}), !pe && A.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										k.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger-subtle",
									children: [
										/* @__PURE__ */ a(Ne, { className: "size-4" }),
										" ",
										E.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(L.length > 0 || M.sorting.length > 0 || N) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					M.sorting.length > 0 && /* @__PURE__ */ a(Va, {
						width: "w-88",
						className: uo,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(De, { className: "size-3.5" }),
								M.sorting.length === 1 ? `${O[M.sorting[0].id]?.header ?? M.sorting[0].id} ${M.sorting[0].desc ? "↓" : "↑"}` : E.sortCount(M.sorting.length),
								/* @__PURE__ */ a(w, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: nt
					}),
					N && /* @__PURE__ */ a(Va, {
						className: uo,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Te, { className: "size-3.5" }),
								E.groupedBy(O[N]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(w, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: (e) => rt(e)
					}),
					L.map((e) => {
						let t = O[e.id];
						if (!t) return null;
						let n = t.icon ?? _e;
						return /* @__PURE__ */ a(Va, {
							className: xa(e.value) ? fo : uo,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, { className: "size-3.5" }),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Ta(t, e.value)
									}),
									/* @__PURE__ */ a(w, { className: "size-3.5 text-muted-foreground" })
								]
							}),
							children: (n) => /* @__PURE__ */ a(Ga, {
								col: t,
								options: $e(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => Qe(e.id, t),
								onRemove: () => {
									Ze(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(Va, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(Ce, { className: "size-3.5" }),
								" ",
								E.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(Wa, {
							columns: R,
							onPick: (t) => {
								Xe(t), e();
							}
						})
					}),
					Je && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: k.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(Re, { className: "size-3.5" }),
							" ",
							E.clearFilters
						]
					})
				]
			}),
			r ? /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				children: /* @__PURE__ */ o(Ci, { children: [/* @__PURE__ */ a(wi, { children: /* @__PURE__ */ a(Y, {
					className: "bg-muted/50 hover:bg-muted/50",
					children: F.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Di, {
						className: H("whitespace-nowrap", O[e.id]?.className),
						children: O[e.id]?.header
					}, e.id))
				}) }), /* @__PURE__ */ a(Ti, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(Y, {
					className: "hover:bg-transparent",
					children: F.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Oi, {
						className: O[e.id]?.className,
						children: /* @__PURE__ */ a(Lr, { className: "h-4 w-full" })
					}, e.id))
				}, t)) })] })
			}) : ze.length === 0 ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: Ye ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: E.noMatches }), /* @__PURE__ */ o(q, {
						variant: "outline",
						size: "sm",
						onClick: k.reset,
						children: [/* @__PURE__ */ a(Re, { className: "size-3.5" }), E.clearAllFilters]
					})]
				}) : s ?? oe.noResults
			}) : Ae ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a($a, {
					columns: st,
					itemKey: c,
					renderCard: y,
					onDrop: B?.onSet ? (e, t) => B.onSet(e, t) : void 0,
					canDrag: (e) => !!B?.onSet && (B?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(Ci, {
					containerRef: ft,
					containerClassName: H(V && `${co} overflow-y-auto`),
					"aria-rowcount": lt.length + 1,
					children: [/* @__PURE__ */ a(wi, { children: F.getHeaderGroups().map((e) => /* @__PURE__ */ a(Y, {
						"aria-rowindex": 1,
						className: "bg-muted/50",
						children: e.headers.map((e) => {
							let t = O[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ce : n === "desc" ? w : De, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, { className: "size-3.5" }), /* @__PURE__ */ a(F.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(Di, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: H("whitespace-nowrap", V && "sticky top-0 z-10 bg-[color-mix(in_oklab,var(--muted)_50%,var(--card))]", t?.className),
								children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.column.getToggleSortingHandler(),
									className: H("inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"),
									children: [c, /* @__PURE__ */ a(s, { className: H("size-3.5", n ? "text-foreground" : "text-muted-foreground") })]
								}) : /* @__PURE__ */ a("span", {
									className: "inline-flex items-center gap-1.5",
									children: c
								})
							}, e.id);
						})
					}, e.id)) }), /* @__PURE__ */ o(Ti, { children: [
						ht > 0 && /* @__PURE__ */ a(Y, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Oi, {
								colSpan: ct,
								className: "p-0",
								style: { height: ht }
							})
						}),
						mt.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(Y, {
							ref: V ? pt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Di, {
								colSpan: ct,
								className: H("bg-muted/50", ca),
								children: /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.getToggleExpandedHandler(),
									"aria-expanded": e.getIsExpanded(),
									className: "inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
									children: [
										e.getIsExpanded() ? /* @__PURE__ */ a(w, { className: "size-3.5" }) : /* @__PURE__ */ a(ae, { className: "size-3.5" }),
										ot(Z(e.getValue(N))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(Y, {
							ref: V ? pt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: f ? "button" : void 0,
							tabIndex: f ? 0 : void 0,
							onClick: f ? () => f(e.original) : void 0,
							onKeyDown: f ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), f(e.original));
							} : void 0,
							className: f ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Oi, {
								className: O[e.column.id]?.className,
								children: /* @__PURE__ */ a(F.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						gt > 0 && /* @__PURE__ */ a(Y, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Oi, {
								colSpan: ct,
								className: "p-0",
								style: { height: gt }
							})
						}),
						I && /* @__PURE__ */ a(Y, {
							ref: We,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Oi, {
								colSpan: ct,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: Ke ? E.loadingMore : null
							})
						})
					] })]
				})
			}),
			Me && !r && ze.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: E.rowCount(ze.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: E.pageOf(we + 1, Math.max(F.getPageCount(), 1)) }),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => F.previousPage(),
							disabled: !F.getCanPreviousPage(),
							children: E.previousPage
						}),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => F.nextPage(),
							disabled: !F.getCanNextPage(),
							children: E.nextPage
						})
					]
				})]
			})
		]
	});
}
var io = 100, ao = 37, oo = 12, so = 640, co = "max-h-[70dvh]", lo = "rounded-md border px-2 py-1.5 text-sm outline-none", uo = `${lo} border-ring/60 bg-accent font-medium text-foreground`, fo = `${lo} border-border bg-card text-muted-foreground`, po = 300;
function mo(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function ho({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = G().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(ir, { children: [/* @__PURE__ */ o(ar, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: H("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(Et, {
				variant: "secondary",
				className: H("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(w, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(or, {
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
						/* @__PURE__ */ a(fn, {
							checked: n,
							tabIndex: -1,
							"aria-hidden": !0,
							className: "pointer-events-none"
						}),
						e.className ? /* @__PURE__ */ a(Et, {
							variant: "secondary",
							className: H("truncate", e.className),
							children: e.label
						}) : /* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
						e.className && /* @__PURE__ */ a("span", { className: "min-w-0 flex-1" }),
						n && /* @__PURE__ */ a(ue, { className: "size-3.5 shrink-0" })
					]
				}, e.value);
			})]
		})
	})] });
}
//#endregion
//#region src/blocks/data/list-url.ts
var go = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function _o(e) {
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
function vo(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of go) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode === "board" && n.set("mode", "board"), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function yo(e, t) {
	return vo(e).toString() === vo(t).toString();
}
function bo(e, t) {
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
function xo(e) {
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
function So({ brand: e, brandHref: t = "/", sidebarHeader: n, sidebarFooter: r, nav: s, currentPath: c, user: l, userMenu: u, onSignOut: d, headerActions: f, headerContent: p, classNames: m, bleed: h = !1, children: g }) {
	let _ = G().shell;
	return /* @__PURE__ */ o(Xr, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: _.skipToContent
		}),
		/* @__PURE__ */ o(Zr, {
			collapsible: "icon",
			rootClassName: m?.sidebar,
			children: [
				/* @__PURE__ */ o(ni, { children: [/* @__PURE__ */ a(ui, { children: /* @__PURE__ */ a(di, { children: t === null ? /* @__PURE__ */ a("div", {
					className: "flex h-12 items-center gap-2 p-2 text-sm",
					children: e
				}) : /* @__PURE__ */ a(pi, {
					size: "lg",
					asChild: !0,
					children: /* @__PURE__ */ a(X, {
						href: t,
						children: e
					})
				}) }) }), n && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				})] }),
				/* @__PURE__ */ a(ai, { children: s.map((e, t) => /* @__PURE__ */ o(oi, { children: [e.label && /* @__PURE__ */ a(si, { children: e.label }), /* @__PURE__ */ a(li, { children: /* @__PURE__ */ a(ui, { children: e.items.map((e) => /* @__PURE__ */ o(di, { children: [/* @__PURE__ */ a(pi, {
					asChild: !0,
					isActive: c === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(X, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(hi, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				(l || r) && /* @__PURE__ */ o(ri, { children: [l && /* @__PURE__ */ a(ui, { children: /* @__PURE__ */ a(di, { children: /* @__PURE__ */ o(Cn, { children: [/* @__PURE__ */ a(Tn, {
					asChild: !0,
					children: /* @__PURE__ */ o(pi, {
						size: "lg",
						className: "data-[state=open]:bg-sidebar-accent",
						children: [
							/* @__PURE__ */ a(Ct, {
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
							/* @__PURE__ */ a(se, { className: "ml-auto size-4" })
						]
					})
				}), /* @__PURE__ */ o(En, {
					side: "top",
					align: "start",
					className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
					children: [
						/* @__PURE__ */ o(Mn, {
							className: "font-normal",
							children: [/* @__PURE__ */ a("div", {
								className: "text-sm font-medium",
								children: l.name
							}), /* @__PURE__ */ a("div", {
								className: "text-xs text-muted-foreground",
								children: l.email
							})]
						}),
						u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Nn, {}), u] }),
						d && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Nn, {}), /* @__PURE__ */ o(On, {
							onSelect: d,
							children: [/* @__PURE__ */ a(N, {}), _.signOut]
						})] })
					]
				})] }) }) }), r && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: r
				})] })
			]
		}),
		/* @__PURE__ */ o(ei, { children: [/* @__PURE__ */ o("header", {
			className: H("flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl", m?.header),
			children: [
				/* @__PURE__ */ a(Qr, { className: "-ml-1" }),
				/* @__PURE__ */ a(wr, {
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
			className: H("flex flex-1 flex-col outline-none", h ? "gap-0" : "gap-6 p-4 md:p-6", m?.main),
			children: g
		})] })
	] });
}
//#endregion
//#region src/lib/preferences.ts
var Co = 75, wo = 150, To = 100, Eo = [
	75,
	90,
	100,
	110,
	125,
	150
];
function Do(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Oo(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
var ko = (e) => Math.min(150, Math.max(75, Math.round(e))), Ao = /* @__PURE__ */ new Set(), jo, Mo = () => {
	if (jo === void 0) {
		let e = Number(Do(ja("zoom")));
		jo = Number.isFinite(e) && e > 0 ? ko(e) : 100;
	}
	return jo;
}, No = (e) => {
	jo = ko(e), Oo(ja("zoom"), String(jo)), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(jo / 100)), Ao.forEach((e) => e());
}, Po = (e) => (Ao.add(e), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(Mo() / 100)), () => Ao.delete(e));
function Fo() {
	return {
		zoom: e.useSyncExternalStore(Po, Mo, () => 100),
		setZoom: No
	};
}
function Io(e = Aa()) {
	return `(function(){try{var z=parseFloat(localStorage.getItem(${JSON.stringify(e)}+".zoom"));if(z>=75&&z<=150)document.documentElement.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`;
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
function Lo({ side: e, align: t = "end", className: n }) {
	let r = G().preferences, { zoom: i, setZoom: s } = Fo();
	return /* @__PURE__ */ o(Cn, { children: [/* @__PURE__ */ a(Tn, {
		asChild: !0,
		children: /* @__PURE__ */ a(q, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.zoom,
			className: n,
			children: /* @__PURE__ */ a(xe, {})
		})
	}), /* @__PURE__ */ o(En, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(Mn, { children: r.zoom }), /* @__PURE__ */ a(An, {
			value: String(i),
			onValueChange: (e) => s(Number(e)),
			children: Eo.map((e) => /* @__PURE__ */ a(jn, {
				value: String(e),
				children: r.zoomLevel(e)
			}, e))
		})]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var Ro = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function zo({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = G().modal;
	return /* @__PURE__ */ a(pn, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(vn, {
			showCloseButton: !1,
			className: H("flex max-h-[92dvh] flex-col gap-0 p-0", Ro[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(xn, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(Sn, { children: r })]
					}), /* @__PURE__ */ a(gn, {
						"aria-label": u.close,
						className: H(K({
							variant: "ghost",
							size: "icon-xs"
						}), "-mr-1 text-muted-foreground"),
						children: /* @__PURE__ */ a(Re, { className: "size-4" })
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
var Bo = 0, Vo = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function Ho({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Bo++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: Bo++,
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
	return /* @__PURE__ */ o(Vo.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(Uo, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function Uo({ pending: t, onAnswer: n }) {
	let r = G().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(zo, {
		open: !0,
		onOpenChange: (e) => {
			e || n(c);
		},
		size: "sm",
		title: s.title,
		description: s.description,
		footer: /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(q, {
			variant: "outline",
			onClick: () => n(c),
			children: s.cancelLabel ?? r.cancel
		}), /* @__PURE__ */ a(q, {
			variant: s.danger ? "danger" : "default",
			onClick: f,
			children: s.confirmLabel ?? r.confirm
		})] }),
		children: t.kind === "prompt" && /* @__PURE__ */ o("form", {
			className: "grid gap-2",
			onSubmit: (e) => {
				e.preventDefault(), f();
			},
			children: [/* @__PURE__ */ a(Rn, {
				htmlFor: d,
				children: t.options.label ?? s.title
			}), /* @__PURE__ */ a(J, {
				id: d,
				autoFocus: !0,
				value: l,
				placeholder: t.options.placeholder,
				onChange: (e) => u(e.target.value)
			})]
		})
	});
}
function Wo() {
	return e.useContext(Vo);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function Go({ title: e, description: t, actions: n, className: r, ...i }) {
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
			className: "flex flex-wrap items-center gap-2",
			children: n
		})]
	});
}
//#endregion
//#region src/blocks/page/empty-state.tsx
function Ko({ icon: e, title: t, as: n = "h2", description: r, action: i, className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		className: H("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", s),
		...c,
		children: [
			e && /* @__PURE__ */ a("div", {
				className: "flex size-12 items-center justify-center rounded-full bg-muted",
				children: /* @__PURE__ */ a(e, {
					"aria-hidden": !0,
					className: "size-6 text-muted-foreground"
				})
			}),
			/* @__PURE__ */ a(n, {
				className: "text-base font-semibold",
				children: t
			}),
			r && /* @__PURE__ */ a("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: r
			}),
			i && /* @__PURE__ */ a("div", {
				className: "mt-2",
				children: i
			})
		]
	});
}
//#endregion
//#region src/blocks/page/error-state.tsx
function qo({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = Ie, className: s }) {
	let c = G().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(q, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(U, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(ht, {
			className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(Ko, {
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/error-boundary.tsx
function Jo({ reset: e }) {
	let t = G().common;
	return /* @__PURE__ */ a(qo, {
		title: t.crashed,
		onRetry: e
	});
}
var Yo = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(Jo, {
			error: e,
			reset: this.reset
		}) : t;
	}
};
//#endregion
//#region src/blocks/dashboard/dashboard.tsx
function Xo({ title: e, description: t, actions: n, stats: r, children: i, className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dashboard",
		className: H("flex flex-col gap-6", s),
		...c,
		children: [
			/* @__PURE__ */ a(Go, {
				title: e,
				description: t,
				actions: n
			}),
			r && /* @__PURE__ */ a("div", {
				"data-slot": "dashboard-stats",
				className: "grid grid-cols-[repeat(auto-fit,minmax(min(11rem,100%),1fr))] gap-3",
				children: r
			}),
			i && /* @__PURE__ */ a("div", {
				"data-slot": "dashboard-panels",
				className: "grid gap-4 lg:grid-cols-2",
				children: i
			})
		]
	});
}
function Zo({ title: t, description: n, action: r, span: i = "half", className: s, children: c, ...l }) {
	let u = e.useId();
	return /* @__PURE__ */ o("section", {
		"data-slot": "dashboard-panel",
		"aria-labelledby": u,
		className: H(qt, "flex min-w-0 flex-col gap-3 p-4", i === "full" && "lg:col-span-2", s),
		...l,
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ o("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ a("h2", {
					id: u,
					className: "text-sm font-semibold",
					children: t
				}), n && /* @__PURE__ */ a("p", {
					className: "text-sm text-muted-foreground",
					children: n
				})]
			}), r && /* @__PURE__ */ a("div", {
				className: "text-sm",
				children: r
			})]
		}), c]
	});
}
function Qo({ items: e, className: t, ...n }) {
	let r = G();
	return e.length === 0 ? /* @__PURE__ */ a("p", {
		className: "py-4 text-sm text-muted-foreground",
		children: r.dashboard.noActivity
	}) : /* @__PURE__ */ a("ol", {
		"data-slot": "activity-list",
		className: H("flex flex-col divide-y", t),
		...n,
		children: e.map(({ id: e, title: t, description: n, at: i, icon: s }) => /* @__PURE__ */ o("li", {
			className: "flex items-start gap-3 py-2.5 first:pt-0 last:pb-0",
			children: [
				s && /* @__PURE__ */ a(s, {
					"aria-hidden": !0,
					className: "mt-0.5 size-4 shrink-0 text-muted-foreground"
				}),
				/* @__PURE__ */ o("div", {
					className: "grid min-w-0 flex-1 gap-0.5",
					children: [/* @__PURE__ */ a("span", {
						className: "text-sm",
						children: t
					}), n && /* @__PURE__ */ a("span", {
						className: "truncate text-xs text-muted-foreground",
						children: n
					})]
				}),
				/* @__PURE__ */ a("time", {
					dateTime: i.toISOString(),
					className: "shrink-0 text-xs text-muted-foreground tabular-nums",
					children: r.format.dateTime(i)
				})
			]
		}, e))
	});
}
//#endregion
//#region src/blocks/date/date-picker.tsx
function $o(e, t) {
	if (e && t && e > t) throw Error("DatePicker: min is after max, " + e.toISOString() + " > " + t.toISOString());
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}
function es({ empty: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ o(q, {
		variant: "outline",
		"data-empty": e,
		className: H("justify-start font-normal data-[empty=true]:text-muted-foreground", n),
		...r,
		children: [/* @__PURE__ */ a(C, { "aria-hidden": !0 }), /* @__PURE__ */ a("span", {
			className: "truncate",
			children: t
		})]
	});
}
function ts({ value: t, onChange: n, placeholder: r, disabled: i, min: s, max: c, className: l, ...u }) {
	let d = G(), [f, p] = e.useState(!1);
	return /* @__PURE__ */ o(ir, {
		open: f,
		onOpenChange: p,
		children: [/* @__PURE__ */ a(ar, {
			asChild: !0,
			children: /* @__PURE__ */ a(es, {
				empty: !t,
				disabled: i,
				className: l,
				...u,
				children: t ? d.format.date(t) : r ?? d.datePicker.placeholder
			})
		}), /* @__PURE__ */ a(or, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ a(Wt, {
				mode: "single",
				selected: t,
				defaultMonth: t,
				disabled: $o(s, c),
				onSelect: (e) => {
					n(e), p(!1);
				}
			})
		})]
	});
}
var ns = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function rs(e) {
	return [
		{
			label: e.today,
			range: (e) => ({
				from: e,
				to: e
			})
		},
		{
			label: e.last7Days,
			range: (e) => ({
				from: ns(e, -6),
				to: e
			})
		},
		{
			label: e.last30Days,
			range: (e) => ({
				from: ns(e, -29),
				to: e
			})
		},
		{
			label: e.last90Days,
			range: (e) => ({
				from: ns(e, -89),
				to: e
			})
		},
		{
			label: e.thisMonth,
			range: (e) => ({
				from: new Date(e.getFullYear(), e.getMonth(), 1),
				to: e
			})
		},
		{
			label: e.thisYear,
			range: (e) => ({
				from: new Date(e.getFullYear(), 0, 1),
				to: e
			})
		}
	];
}
function is({ value: t, onChange: n, presets: r, placeholder: i, disabled: s, min: c, max: l, className: u, ...d }) {
	let f = G(), p = Ir(), [m, h] = e.useState(!1), g = r === !1 ? [] : r ?? rs(f.datePicker), _ = t?.from ? t.to ? `${f.format.date(t.from)}${f.datePicker.rangeSeparator}${f.format.date(t.to)}` : f.format.date(t.from) : i ?? f.datePicker.rangePlaceholder;
	return /* @__PURE__ */ o(ir, {
		open: m,
		onOpenChange: h,
		children: [/* @__PURE__ */ a(ar, {
			asChild: !0,
			children: /* @__PURE__ */ a(es, {
				empty: !t?.from,
				disabled: s,
				className: u,
				...d,
				children: _
			})
		}), /* @__PURE__ */ a(or, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ o("div", {
				className: "flex flex-col sm:flex-row",
				children: [g.length > 0 && /* @__PURE__ */ a("div", {
					className: "flex flex-wrap gap-1 border-b p-2 sm:w-36 sm:flex-col sm:flex-nowrap sm:border-r sm:border-b-0",
					children: g.map((e) => /* @__PURE__ */ a(q, {
						variant: "ghost",
						size: "sm",
						className: "justify-start",
						onClick: () => {
							let t = /* @__PURE__ */ new Date();
							n(e.range(new Date(t.getFullYear(), t.getMonth(), t.getDate()))), h(!1);
						},
						children: e.label
					}, e.label))
				}), /* @__PURE__ */ o("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ a(Wt, {
						mode: "range",
						selected: t,
						defaultMonth: t?.from,
						numberOfMonths: p ? 1 : 2,
						disabled: $o(c, l),
						onSelect: n
					}), t?.from && /* @__PURE__ */ a("div", {
						className: "flex justify-end border-t p-2",
						children: /* @__PURE__ */ a(q, {
							variant: "ghost",
							size: "sm",
							onClick: () => n(void 0),
							children: f.datePicker.clear
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/blocks/upload/validate-files.ts
function as(e, { accept: t, maxSize: n, maxFiles: r }) {
	if (n !== void 0 && !(n > 0)) throw Error("validateFiles: maxSize must be a positive number of bytes");
	if (r !== void 0 && !(Number.isInteger(r) && r >= 0)) throw Error("validateFiles: maxFiles must be a whole number, 0 or more");
	let i = (t ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean), a = [], o = [];
	for (let t of e) i.length > 0 && !i.some((e) => os(t, e)) ? o.push({
		file: t,
		reason: "type"
	}) : n !== void 0 && t.size > n ? o.push({
		file: t,
		reason: "size"
	}) : r !== void 0 && a.length >= r ? o.push({
		file: t,
		reason: "count"
	}) : a.push(t);
	return {
		accepted: a,
		rejected: o
	};
}
function os(e, t) {
	if (t.startsWith(".")) return e.name.toLowerCase().endsWith(t);
	let n = e.type.toLowerCase();
	return t.endsWith("/*") ? n.startsWith(t.slice(0, -1)) : n === t;
}
//#endregion
//#region src/blocks/upload/file-drop.tsx
function ss({ accept: t, maxSize: n, maxFiles: r, onFiles: i, onReject: s, disabled: c, className: l, id: u }) {
	let d = G(), [f, p] = e.useState(!1), [m, h] = e.useState([]);
	function g(e) {
		if (!e || e.length === 0) return;
		let a = as(Array.from(e), {
			accept: t,
			maxSize: n,
			maxFiles: r
		});
		h(a.rejected), a.accepted.length > 0 && i(a.accepted), a.rejected.length > 0 && s?.(a.rejected);
	}
	let _ = n === void 0 ? void 0 : d.format.fileSize(n), v = d.upload.limits({
		accept: t?.split(",").join(", "),
		maxSize: _,
		maxFiles: r
	}), y = (e) => e.reason === "type" ? d.upload.wrongType(e.file.name) : e.reason === "size" ? d.upload.tooLarge(e.file.name, _ ?? "") : d.upload.tooMany(r ?? 0);
	return /* @__PURE__ */ o("div", {
		className: H("grid gap-2", l),
		children: [/* @__PURE__ */ o("label", {
			"data-slot": "file-drop",
			"data-dragging": f,
			"data-disabled": c,
			className: "flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed bg-card p-6 text-center transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 hover:bg-accent/50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[dragging=true]:border-primary data-[dragging=true]:bg-accent",
			onDragOver: (e) => {
				e.preventDefault(), c || p(!0);
			},
			onDragLeave: () => p(!1),
			onDrop: (e) => {
				e.preventDefault(), p(!1), c || g(e.dataTransfer.files);
			},
			children: [
				/* @__PURE__ */ a(Pe, {
					"aria-hidden": !0,
					className: "size-6 text-muted-foreground"
				}),
				/* @__PURE__ */ o("span", {
					className: "text-sm",
					children: [
						r === 1 ? d.upload.dropFile : d.upload.dropHere,
						" ",
						/* @__PURE__ */ a("span", {
							className: "text-link underline underline-offset-4",
							children: d.upload.browse
						})
					]
				}),
				v && /* @__PURE__ */ a("span", {
					className: "text-xs text-muted-foreground",
					children: v
				}),
				/* @__PURE__ */ a("input", {
					id: u,
					type: "file",
					className: "sr-only",
					accept: t,
					multiple: r !== 1,
					disabled: c,
					onChange: (e) => {
						g(e.target.files), e.target.value = "";
					}
				})
			]
		}), m.length > 0 && /* @__PURE__ */ a("ul", {
			role: "alert",
			className: "grid gap-1 text-xs text-danger-fg",
			children: m.map((e, t) => /* @__PURE__ */ a("li", { children: y(e) }, `${e.file.name}-${t}`))
		})]
	});
}
function cs({ items: e, onRemove: t, onRetry: n, className: r, ...i }) {
	let s = G();
	return e.length === 0 ? null : /* @__PURE__ */ a("ul", {
		"data-slot": "upload-list",
		className: H("grid gap-2", r),
		...i,
		children: e.map((e) => /* @__PURE__ */ o("li", {
			className: "flex items-center gap-3 rounded-md border bg-card px-3 py-2",
			children: [
				/* @__PURE__ */ a(ls, { item: e }),
				/* @__PURE__ */ o("div", {
					className: "grid min-w-0 flex-1 gap-1",
					children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-baseline justify-between gap-2 text-sm",
							children: [/* @__PURE__ */ a("span", {
								className: "truncate",
								children: e.name
							}), /* @__PURE__ */ a("span", {
								className: "shrink-0 text-xs text-muted-foreground tabular-nums",
								children: s.format.fileSize(e.size)
							})]
						}),
						e.status === "uploading" && /* @__PURE__ */ a(dr, {
							value: e.progress,
							"aria-label": s.upload.uploading,
							className: "h-1"
						}),
						e.status === "failed" && /* @__PURE__ */ a("span", {
							className: "text-xs text-danger-fg",
							children: e.error ?? s.upload.failed
						})
					]
				}),
				e.status === "failed" && n && /* @__PURE__ */ a(q, {
					variant: "ghost",
					size: "icon",
					"aria-label": s.upload.retry,
					onClick: () => n(e.id),
					children: /* @__PURE__ */ a(S, {})
				}),
				t && /* @__PURE__ */ a(q, {
					variant: "ghost",
					size: "icon",
					"aria-label": s.upload.remove(e.name),
					onClick: () => t(e.id),
					children: /* @__PURE__ */ a(Re, {})
				})
			]
		}, e.id))
	});
}
function ls({ item: e }) {
	switch (e.status) {
		case "uploading": return /* @__PURE__ */ a(ge, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-muted-foreground"
		});
		case "done": return /* @__PURE__ */ a(O, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(Ie, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-danger-fg"
		});
		default: throw Error("UploadList: unknown status " + JSON.stringify(e));
	}
}
//#endregion
//#region src/blocks/upload/upload-slots.tsx
function us({ slots: t, value: n, onFile: r, onReject: i, onRemove: s, onRetry: c, disabled: l, className: u }) {
	let d = G(), f = e.useId(), p = new Set(t.map((e) => e.id));
	if (p.size !== t.length) throw Error("UploadSlots: slot ids must be unique");
	let m = Object.keys(n).filter((e) => !p.has(e));
	if (m.length) throw Error("UploadSlots: value has keys no slot declares: " + m.join(", "));
	return /* @__PURE__ */ a("div", {
		"data-slot": "upload-slots",
		className: H("grid gap-4 sm:grid-cols-2", u),
		children: t.map((e) => {
			let t = f + e.id, u = n[e.id];
			return /* @__PURE__ */ o("div", {
				className: "grid content-start gap-2",
				children: [/* @__PURE__ */ o("div", {
					className: "grid gap-0.5",
					children: [/* @__PURE__ */ o(Rn, {
						htmlFor: t,
						children: [e.label, e.optional && /* @__PURE__ */ a("span", {
							className: "font-normal text-muted-foreground",
							children: d.upload.optional
						})]
					}), e.description && /* @__PURE__ */ a("p", {
						className: "text-sm text-muted-foreground",
						children: e.description
					})]
				}), u ? /* @__PURE__ */ a(cs, {
					items: [u],
					onRemove: s && (() => s(e.id)),
					onRetry: c && (() => c(e.id))
				}) : /* @__PURE__ */ a(ss, {
					id: t,
					accept: e.accept,
					maxSize: e.maxSize,
					maxFiles: 1,
					disabled: l,
					onFiles: ([t]) => r(e.id, t),
					onReject: i && ((t) => i(e.id, t))
				})]
			}, e.id);
		})
	});
}
//#endregion
//#region src/lib/strings-pt.ts
var ds = new Intl.NumberFormat("pt-PT"), $ = (e) => ds.format(e), fs = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), ps = new Intl.DateTimeFormat("pt-PT", { dateStyle: "medium" }), ms = new Intl.DateTimeFormat("pt-PT", {
	dateStyle: "medium",
	timeStyle: "short"
}), hs = {
	common: {
		close: "Fechar",
		cancel: "Cancelar",
		create: "Criar",
		search: "Pesquisar",
		searchPlaceholder: "Pesquisar…",
		noResults: "Sem resultados.",
		all: "Todos",
		none: "Nenhum",
		loadFailed: "Não foi possível carregar.",
		retry: "Tentar novamente",
		crashed: "Algo correu mal neste ecrã.",
		confirm: "Confirmar"
	},
	auth: {
		loginTitle: "Bem-vindo de volta",
		loginDescription: "Inicie sessão na sua conta",
		email: "Email",
		emailPlaceholder: "nome@empresa.pt",
		password: "Palavra-passe",
		forgotPassword: "Esqueceu-se da palavra-passe?",
		signIn: "Iniciar sessão",
		orContinueWith: "ou continue com",
		noAccount: "Não tem conta?",
		createOne: "Criar conta",
		registerTitle: "Criar uma conta",
		registerDescription: "Comece em menos de um minuto",
		name: "Nome",
		namePlaceholder: "Ana Silva",
		passwordHint: "Pelo menos 8 caracteres",
		confirmPassword: "Confirmar palavra-passe",
		createAccount: "Criar conta",
		haveAccount: "Já tem conta?",
		resetTitle: "Repor a palavra-passe",
		resetDescription: "Indique o seu email e enviamos-lhe uma ligação",
		sendResetLink: "Enviar ligação",
		backToSignIn: "Voltar ao início de sessão",
		sentTitle: "Verifique a sua caixa de correio",
		sentDescription: (e) => `Se existir uma conta para ${e}, enviámos uma ligação para repor a palavra-passe.`,
		thatEmail: "esse email",
		invalidEmail: "Indique um email válido",
		passwordRequired: "A palavra-passe é obrigatória",
		nameTooShort: "Indique o seu nome",
		passwordTooShort: "Pelo menos 8 caracteres",
		passwordsDoNotMatch: "As palavras-passe não coincidem"
	},
	shell: {
		signOut: "Terminar sessão",
		skipToContent: "Saltar para o conteúdo"
	},
	preferences: {
		zoom: "Zoom",
		zoomLevel: (e) => `${$(e)}%`
	},
	dataTable: {
		allView: "Todos",
		newView: "Nova vista",
		createView: "Criar",
		saveView: "Guardar os filtros atuais como nova vista",
		deleteView: "Eliminar vista",
		viewSettings: "Definições da vista",
		viewName: "Nome da vista",
		changeIcon: "Mudar o ícone",
		back: "Voltar",
		layout: "Esquema",
		table: "Tabela",
		board: "Quadro",
		visibleColumns: "Colunas visíveis",
		hidden: (e) => `${$(e)} ocultas`,
		filters: "Filtros",
		filter: "Filtro",
		addFilter: "Filtrar",
		removeFilter: "Remover filtro",
		removeFilterFor: (e) => `Remover filtro de ${e}`,
		clearFilters: "Limpar",
		clearSelection: "Limpar seleção",
		is: "é",
		contains: "contém",
		findColumn: "Procurar coluna…",
		typeAValue: "Escreva um valor…",
		sorting: "Ordenação",
		sort: "Ordenar",
		ascending: "Ascendente",
		descending: "Descendente",
		addSort: "Adicionar ordenação",
		removeSort: "Remover",
		removeSorting: "Remover ordenação",
		sortCount: (e) => `${$(e)} ordenações`,
		group: "Agrupar",
		groupBy: "Agrupar por",
		groupedBy: (e) => `Agrupado por ${e}`,
		moveCard: "Mover para",
		exportCsv: "Exportar CSV",
		shareView: "Partilhar com todos",
		sharedBy: (e) => `Partilhada por ${e}`,
		noGrouping: "Sem agrupamento",
		loadingMore: "A carregar mais…",
		noMatches: "Nada corresponde a estas condições.",
		clearAllFilters: "Limpar filtros",
		viewNameRequired: "Dê um nome à vista.",
		rowCount: (e) => e === 1 ? "1 linha" : `${$(e)} linhas`,
		pageOf: (e, t) => `Página ${$(e)} de ${$(t)}`,
		previousPage: "Anterior",
		nextPage: "Seguinte"
	},
	search: {
		placeholder: "Pesquisar…",
		empty: "Sem resultados.",
		shortcut: "⌘\xA0K"
	},
	modal: { close: "Fechar" },
	ui: {
		close: "Fechar",
		breadcrumb: "Navegação estrutural",
		more: "Mais",
		pagination: "Paginação",
		previous: "Anterior",
		next: "Seguinte",
		goToPreviousPage: "Ir para a página anterior",
		goToNextPage: "Ir para a página seguinte",
		morePages: "Mais páginas",
		toggleSidebar: "Mostrar ou ocultar a barra lateral",
		sidebarTitle: "Barra lateral",
		sidebarDescription: "Mostra a barra lateral em ecrãs pequenos.",
		commandTitle: "Paleta de comandos",
		commandDescription: "Procure um comando para executar…"
	},
	format: {
		number: $,
		date: (e) => ps.format(e),
		dateTime: (e) => ms.format(e),
		fileSize: (e) => jt(e, $)
	},
	dashboard: {
		change: (e) => fs.format(e / 100),
		noActivity: "Ainda não aconteceu nada."
	},
	datePicker: {
		placeholder: "Escolha uma data",
		rangePlaceholder: "Escolha um período",
		rangeSeparator: " – ",
		clear: "Limpar",
		today: "Hoje",
		last7Days: "Últimos 7 dias",
		last30Days: "Últimos 30 dias",
		last90Days: "Últimos 90 dias",
		thisMonth: "Este mês",
		thisYear: "Este ano",
		locale: {
			...ft,
			options: {
				...ft.options,
				weekStartsOn: 1
			}
		}
	},
	upload: {
		dropHere: "Largue os ficheiros aqui ou",
		dropFile: "Largue um ficheiro aqui ou",
		browse: "procure",
		limits: ({ accept: e, maxSize: t, maxFiles: n }) => [
			e,
			t && `até ${t} cada`,
			n && n > 1 && `${$(n)} ficheiros no máximo`
		].filter(Boolean).join(" · "),
		tooLarge: (e, t) => `${e} tem mais de ${t}.`,
		wrongType: (e) => `${e} não é de um tipo aceite.`,
		tooMany: (e) => e === 1 ? "Apenas um ficheiro." : `${$(e)} ficheiros no máximo.`,
		remove: (e) => `Remover ${e}`,
		uploading: "A carregar…",
		failed: "Falhou o carregamento",
		retry: "Tentar novamente",
		optional: "Opcional"
	}
};
//#endregion
export { Qo as ActivityList, U as Alert, ht as AlertDescription, mt as AlertTitle, So as AppShell, Vi as AuthLayout, _t as Avatar, bt as AvatarBadge, yt as AvatarFallback, xt as AvatarGroup, St as AvatarGroupCount, vt as AvatarImage, wt as AvatarStack, Et as Badge, Lt as Breadcrumb, Ut as BreadcrumbEllipsis, zt as BreadcrumbItem, Bt as BreadcrumbLink, Rt as BreadcrumbList, Vt as BreadcrumbPage, Ht as BreadcrumbSeparator, q as Button, Wt as Calendar, Gt as CalendarDayButton, an as Card, ln as CardAction, un as CardContent, cn as CardDescription, dn as CardFooter, on as CardHeader, sn as CardTitle, Zt as ChartContainer, tn as ChartLegend, nn as ChartLegendContent, Qt as ChartStyle, $t as ChartTooltip, en as ChartTooltipContent, fn as Checkbox, ho as ChipPicker, sa as Combobox, aa as CommandMenu, Ho as ConfirmProvider, Xo as Dashboard, Zo as DashboardPanel, ro as DataTable, ts as DatePicker, is as DateRangePicker, pn as Dialog, gn as DialogClose, vn as DialogContent, Sn as DialogDescription, bn as DialogFooter, yn as DialogHeader, _n as DialogOverlay, hn as DialogPortal, xn as DialogTitle, mn as DialogTrigger, Cn as DropdownMenu, kn as DropdownMenuCheckboxItem, En as DropdownMenuContent, Dn as DropdownMenuGroup, On as DropdownMenuItem, Mn as DropdownMenuLabel, wn as DropdownMenuPortal, An as DropdownMenuRadioGroup, jn as DropdownMenuRadioItem, Nn as DropdownMenuSeparator, Pn as DropdownMenuShortcut, Fn as DropdownMenuSub, Ln as DropdownMenuSubContent, In as DropdownMenuSubTrigger, Tn as DropdownMenuTrigger, Ko as EmptyState, Yo as ErrorBoundary, qo as ErrorState, ss as FileDrop, Yi as ForgotPasswordForm, zn as Form, Kn as FormControl, qn as FormDescription, Vn as FormField, Wn as FormItem, Gn as FormLabel, Jn as FormMessage, J as Input, $a as Kanban, ca as LABEL_CLASS, go as LIST_PARAMS, Rn as Label, X as Link, Ui as LinkProvider, Gi as LoginForm, zo as Modal, ya as NONE, Go as PageHeader, Zn as Pagination, Qn as PaginationContent, rr as PaginationEllipsis, $n as PaginationItem, er as PaginationLink, nr as PaginationNext, tr as PaginationPrevious, ir as Popover, sr as PopoverAnchor, or as PopoverContent, ur as PopoverDescription, cr as PopoverHeader, lr as PopoverTitle, ar as PopoverTrigger, dr as Progress, fr as RadioGroup, pr as RadioGroupItem, qi as RegisterForm, oa as SearchTrigger, ua as SectionLabel, mr as Select, vr as SelectContent, hr as SelectGroup, br as SelectItem, yr as SelectLabel, Cr as SelectScrollDownButton, Sr as SelectScrollUpButton, xr as SelectSeparator, _r as SelectTrigger, gr as SelectValue, wr as Separator, Tr as Sheet, Dr as SheetClose, Ar as SheetContent, Pr as SheetDescription, Mr as SheetFooter, jr as SheetHeader, Nr as SheetTitle, Er as SheetTrigger, Zr as Sidebar, ai as SidebarContent, ri as SidebarFooter, oi as SidebarGroup, ci as SidebarGroupAction, li as SidebarGroupContent, si as SidebarGroupLabel, ni as SidebarHeader, ti as SidebarInput, ei as SidebarInset, ui as SidebarMenu, mi as SidebarMenuAction, hi as SidebarMenuBadge, pi as SidebarMenuButton, di as SidebarMenuItem, gi as SidebarMenuSkeleton, _i as SidebarMenuSub, yi as SidebarMenuSubButton, vi as SidebarMenuSubItem, Xr as SidebarProvider, $r as SidebarRail, ii as SidebarSeparator, Qr as SidebarTrigger, Lr as Skeleton, bi as Slider, fa as StatTile, Si as Switch, Ci as Table, Ti as TableBody, ki as TableCaption, Oi as TableCell, Ei as TableFooter, Di as TableHead, wi as TableHeader, Y as TableRow, Ai as Tabs, Pi as TabsContent, Mi as TabsList, Ni as TabsTrigger, Fi as Textarea, xi as Toaster, Li as Toggle, zi as ToggleGroup, Bi as ToggleGroupItem, zr as Tooltip, Vr as TooltipContent, Rr as TooltipProvider, Br as TooltipTrigger, It as UIStringsProvider, cs as UploadList, us as UploadSlots, Ct as UserAvatar, Ma as VIEW_ICON_NAMES, To as ZOOM_DEFAULT, wo as ZOOM_MAX, Co as ZOOM_MIN, Eo as ZOOM_STEPS, Lo as ZoomMenu, Io as antiFlashScript, Tt as badgeVariants, K as buttonVariants, Ta as chipLabel, H as cn, ba as compare, pa as csvDelimiter, ga as csvValue, no as dataTableFeatures, rs as defaultRangePresets, Mt as defaultStrings, va as downloadCsv, Q as facetText, Ji as forgotPasswordSchema, gt as initials, Xn as inputVariants, xa as isBlankFilter, Sa as labelsOf, bo as listUrlOf, xo as listUrlProps, Wi as loginSchema, wa as named, _o as parseListUrl, hs as ptPT, Ca as rank, Ki as registerSchema, yo as sameListUrl, ka as setStoragePrefix, ja as storageKey, Aa as storagePrefix, Z as str, ji as tabsListVariants, _a as toCsv, vo as toListUrl, Ea as toQuery, Je as toast, Ii as toggleVariants, Wo as useConfirm, Ra as useDataTableViews, Hn as useFormField, Ir as useIsMobile, Yr as useSidebar, G as useStrings, Fo as useZoom, as as validateFiles };
