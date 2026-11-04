import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, Progress as p, RadioGroup as m, Select as h, Separator as g, Slider as _, Slot as v, Switch as y, Tabs as b, Toggle as ee, ToggleGroup as te, Tooltip as x } from "radix-ui";
import { ArrowClockwiseIcon as S, ArrowsOutCardinalIcon as ne, CalendarBlankIcon as C, CaretDownIcon as w, CaretDownIcon as T, CaretLeftIcon as re, CaretLeftIcon as ie, CaretRightIcon as ae, CaretRightIcon as E, CaretRightIcon as D, CaretUpDownIcon as oe, CaretUpIcon as se, CaretUpIcon as O, CheckCircleIcon as k, CheckCircleIcon as ce, CheckIcon as le, CheckIcon as A, CircleIcon as ue, ClockIcon as j, DotsThreeIcon as de, DotsThreeIcon as fe, DotsThreeIcon as M, DownloadSimpleIcon as pe, EnvelopeSimpleIcon as N, EyeIcon as me, FileIcon as he, FunnelIcon as ge, FunnelSimpleIcon as _e, InfoIcon as ve, ListBulletsIcon as ye, MagnifyingGlassIcon as be, MagnifyingGlassIcon as xe, PlusIcon as Se, ProhibitIcon as Ce, RowsIcon as we, SidebarSimpleIcon as Te, SignOutIcon as P, SortAscendingIcon as Ee, SpinnerIcon as F, SpinnerIcon as De, SquaresFourIcon as Oe, StarIcon as ke, TableIcon as Ae, TagIcon as je, TrashIcon as Me, UploadSimpleIcon as Ne, UsersIcon as Pe, WarningCircleIcon as Fe, WarningIcon as Ie, XCircleIcon as I, XIcon as Le, XIcon as Re } from "@phosphor-icons/react";
import { enUS as ze } from "react-day-picker/locale/en-US";
import { DayPicker as Be, getDefaultClassNames as Ve } from "react-day-picker";
import * as He from "recharts";
import { Controller as Ue, FormProvider as We, useForm as L, useFormContext as Ge, useFormState as R } from "react-hook-form";
import { Toaster as Ke, toast as qe } from "sonner";
import { zodResolver as Je } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Command as B } from "cmdk";
import { columnFacetingFeature as Ye, columnFilteringFeature as Xe, columnGroupingFeature as Ze, columnVisibilityFeature as Qe, createExpandedRowModel as $e, createFacetedRowModel as et, createFacetedUniqueValues as tt, createFilteredRowModel as nt, createGroupedRowModel as rt, createPaginatedRowModel as it, createSortedRowModel as V, globalFilteringFeature as at, rowExpandingFeature as ot, rowPaginationFeature as st, rowSortingFeature as ct, tableFeatures as H, useTable as lt } from "@tanstack/react-table";
import { useVirtualizer as ut } from "@tanstack/react-virtual";
import { pt as dt } from "react-day-picker/locale/pt";
//#region src/lib/utils.ts
function U(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var ft = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
function W({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: U(ft({ variant: t }), e),
		...n
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: U("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: U("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function mt(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function ht({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: U("group/avatar relative flex size-8 shrink-0 overflow-hidden rounded-full select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function gt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: U("aspect-square size-full", e),
		...t
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: U("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: U("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function yt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: U("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: U("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
function xt({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(ht, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(gt, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(_t, { children: n ?? mt(e) })]
	});
}
function St({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(yt, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(xt, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(bt, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var Ct = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3", {
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
function wt({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? v.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: U(Ct({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/lib/strings.tsx
var Tt = new Intl.NumberFormat(), K = (e) => Tt.format(e), Et = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), Dt = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }), Ot = new Intl.DateTimeFormat(void 0, {
	dateStyle: "medium",
	timeStyle: "short"
});
function kt(e, t, n = [
	"B",
	"KB",
	"MB",
	"GB"
]) {
	let r = e, i = 0;
	for (; r >= 1024 && i < n.length - 1;) r /= 1024, i++;
	return `${t(i === 0 || r >= 10 ? Math.round(r) : Math.round(r * 10) / 10)}\u00A0${n[i]}`;
}
var At = {
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
		zoomLevel: (e) => `${K(e)}%`
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
		hidden: (e) => `${K(e)} hidden`,
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
		sortCount: (e) => `${K(e)} sorts`,
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
		rowCount: (e) => e === 1 ? "1 row" : `${K(e)} rows`,
		pageOf: (e, t) => `Page ${K(e)} of ${K(t)}`,
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
		number: K,
		date: (e) => Dt.format(e),
		dateTime: (e) => Ot.format(e),
		fileSize: (e) => kt(e, K)
	},
	dashboard: {
		change: (e) => Et.format(e / 100),
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
		locale: ze
	},
	upload: {
		dropHere: "Drop files here or",
		dropFile: "Drop a file here or",
		browse: "browse",
		limits: ({ accept: e, maxSize: t, maxFiles: n }) => [
			e,
			t && `up to ${t} each`,
			n && n > 1 && `${K(n)} files at most`
		].filter(Boolean).join(" · "),
		tooLarge: (e, t) => `${e} is larger than ${t}.`,
		wrongType: (e) => `${e} is not a type this accepts.`,
		tooMany: (e) => e === 1 ? "Only one file." : `${K(e)} files at most.`,
		remove: (e) => `Remove ${e}`,
		uploading: "Uploading…",
		failed: "Upload failed",
		retry: "Retry",
		optional: "Optional"
	}
};
function jt(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function Mt(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) jt(n, e, t, r);
	return n;
}
var Nt = e.createContext(At);
function Pt({ strings: t, children: n }) {
	let r = e.useContext(Nt), i = e.useMemo(() => Mt(r, t), [r, t]);
	return /* @__PURE__ */ a(Nt.Provider, {
		value: i,
		children: n
	});
}
function q() {
	return e.useContext(Nt);
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function Ft({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": q().ui.breadcrumb,
		"data-slot": "breadcrumb",
		...e
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: U("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function Lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: U("inline-flex items-center gap-1.5", e),
		...t
	});
}
function Rt({ asChild: e, className: t, ...n }) {
	let r = e ? v.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: U("transition-colors hover:text-foreground", t),
		...n
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: U("font-normal text-foreground", e),
		...t
	});
}
function Bt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: U("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(E, {})
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: U("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(fe, {
			"aria-hidden": "true",
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: q().ui.more
		})]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var Ht = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98] active:shadow-[inset_0_0_0_100vmax_rgb(0_0_0/0.08)]", {
	variants: {
		variant: {
			default: "bg-primary-button text-primary-button-foreground hover:brightness-95",
			danger: "bg-danger-button text-danger-button-foreground hover:brightness-95 focus-visible:ring-danger/40",
			success: "bg-success-button text-success-button-foreground hover:brightness-95 focus-visible:ring-success/40",
			warning: "bg-warning-button text-warning-button-foreground hover:brightness-95 focus-visible:ring-warning/40",
			destructive: "bg-danger-button text-danger-button-foreground hover:brightness-95 focus-visible:ring-danger/40",
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
function J({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let o = r ? v.Root : "button";
	return /* @__PURE__ */ a(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: U(Ht({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/calendar.tsx
function Ut({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", formatters: o, components: s, locale: c, ...l }) {
	let u = Ve(), d = q().datePicker.locale, f = c ?? d;
	return /* @__PURE__ */ a(Be, {
		showOutsideDays: n,
		className: U("group/calendar bg-background p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: r,
		locale: f,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(f.code, { month: "short" }),
			...o
		},
		classNames: {
			root: U("w-fit", u.root),
			months: U("relative flex flex-col gap-4 md:flex-row", u.months),
			month: U("flex w-full flex-col gap-4", u.month),
			nav: U("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", u.nav),
			button_previous: U(Ht({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: U(Ht({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
			month_caption: U("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", u.month_caption),
			dropdowns: U("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", u.dropdowns),
			dropdown_root: U("relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50", u.dropdown_root),
			dropdown: U("absolute inset-0 bg-popover opacity-0", u.dropdown),
			caption_label: U("font-medium select-none", r === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", u.caption_label),
			month_grid: U("w-full border-collapse", u.month_grid),
			weekdays: U("flex", u.weekdays),
			weekday: U("flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none", u.weekday),
			week: U("mt-2 flex w-full", u.week),
			week_number_header: U("w-(--cell-size) select-none", u.week_number_header),
			week_number: U("text-[0.8rem] text-muted-foreground select-none", u.week_number),
			day: U("group/day relative aspect-square h-full w-full p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-md", l.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md", u.day),
			range_start: U("rounded-l-md bg-accent", u.range_start),
			range_middle: U("rounded-none", u.range_middle),
			range_end: U("rounded-r-md bg-accent", u.range_end),
			today: U("rounded-md bg-accent text-accent-foreground data-[selected=true]:rounded-none", u.today),
			outside: U("text-muted-foreground aria-selected:text-muted-foreground", u.outside),
			disabled: U("text-muted-foreground opacity-50", u.disabled),
			hidden: U("invisible", u.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ a("div", {
				"data-slot": "calendar",
				ref: t,
				className: U(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => a(t === "left" ? ie : t === "right" ? D : T, {
				className: U("size-4", e),
				...n
			}),
			DayButton: Wt,
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
function Wt({ className: t, day: n, modifiers: r, ...i }) {
	let o = Ve(), s = e.useRef(null);
	return e.useEffect(() => {
		r.focused && s.current?.focus();
	}, [r.focused]), /* @__PURE__ */ a(J, {
		ref: s,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: U("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-accent-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...i
	});
}
//#endregion
//#region src/components/ui/chart.tsx
var Gt = {
	width: 320,
	height: 200
}, Kt = e.createContext(null);
function qt() {
	let t = e.useContext(Kt);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function Jt({ id: t, className: n, children: r, config: i, initialDimension: s = Gt, ...c }) {
	let l = e.useId(), u = `chart-${t ?? l.replace(/:/g, "")}`;
	return /* @__PURE__ */ a(Kt.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ o("div", {
			"data-slot": "chart",
			"data-chart": u,
			className: U("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...c,
			children: [/* @__PURE__ */ a(Yt, {
				id: u,
				config: i
			}), /* @__PURE__ */ a(He.ResponsiveContainer, {
				initialDimension: s,
				children: r
			})]
		})
	});
}
var Yt = ({ id: e, config: t }) => {
	let n = Object.entries(t).flatMap(([e, t]) => t.color ? ["--color-" + e + ": " + t.color + ";"] : []);
	return n.length ? /* @__PURE__ */ a("style", { dangerouslySetInnerHTML: { __html: "[data-chart=" + e + "] {" + n.join(" ") + "}" } }) : null;
}, Xt = He.Tooltip;
function Zt({ active: t, payload: n, className: r, indicator: s = "dot", hideLabel: c = !1, hideIndicator: l = !1, label: u, labelFormatter: d, labelClassName: f, formatter: p, color: m, nameKey: h, labelKey: g }) {
	let { config: _ } = qt(), v = q().format, y = e.useMemo(() => {
		if (c || !n?.length) return null;
		let [e] = n, t = `${g ?? e?.dataKey ?? e?.name ?? "value"}`, r = en(_, e, t), i = !g && typeof u == "string" ? _[u]?.label ?? u : r?.label;
		return d ? /* @__PURE__ */ a("div", {
			className: U("font-medium", f),
			children: d(i, n)
		}) : i ? /* @__PURE__ */ a("div", {
			className: U("font-medium", f),
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
		className: U("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", r),
		children: [b ? null : y, /* @__PURE__ */ a("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${h ?? e.name ?? e.dataKey ?? "value"}`, r = en(_, e, n), c = m ?? e.payload?.fill ?? e.color;
				return /* @__PURE__ */ a("div", {
					className: U("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", s === "dot" && "items-center"),
					children: p && e?.value !== void 0 && e.name ? p(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ o(i, { children: [r?.icon ? /* @__PURE__ */ a(r.icon, {}) : !l && /* @__PURE__ */ a("div", {
						className: U("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
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
						className: U("flex flex-1 justify-between leading-none", b ? "items-end" : "items-center"),
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
var Qt = He.Legend;
function $t({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: s } = qt();
	return n?.length ? /* @__PURE__ */ a("div", {
		className: U("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, c = en(s, e, r);
			return /* @__PURE__ */ o("div", {
				className: U("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), c?.label]
			}, n);
		})
	}) : null;
}
function en(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region src/components/ui/card.tsx
function tn({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		"data-variant": t,
		className: U("flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm", t === "glass" && "border-[var(--surface-glass-border)] bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl", e),
		...n
	});
}
function nn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: U("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function rn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: U("leading-none font-semibold", e),
		...t
	});
}
function an({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: U("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function sn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: U("px-6", e),
		...t
	});
}
function cn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: U("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function ln({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: U("peer relative size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(A, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function un({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function dn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function fn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function pn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: U("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function hn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(fn, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(mn, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: U("fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-6 shadow-[var(--surface-shadow)] backdrop-blur-xl duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(Re, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: q().ui.close
				})]
			})]
		})]
	});
}
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: U("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function _n({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: U("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ a(l.Close, {
			asChild: !0,
			children: /* @__PURE__ */ a(J, {
				variant: "outline",
				children: q().ui.close
			})
		})]
	});
}
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: U("text-lg leading-none font-semibold", e),
		...t
	});
}
function yn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function bn({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function xn({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Sn({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Cn({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: U("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function wn({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Tn({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: U("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger/10 data-[variant=destructive]:focus:text-danger-fg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function En({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(A, { className: "size-4" }) })
		}), t]
	});
}
function Dn({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function On({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(ue, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function kn({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: U("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: U("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: U("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function Mn({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Nn({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: U("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(D, { className: "ml-auto size-4" })]
	});
}
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: U("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: U("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var In = We, Ln = e.createContext({}), Rn = ({ ...e }) => /* @__PURE__ */ a(Ln.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(Ue, { ...e })
}), zn = () => {
	let t = e.useContext(Ln), n = e.useContext(Bn);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = Ge(), i = R({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, Bn = e.createContext({});
function Vn({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(Bn.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: U("grid gap-2", t),
			...n
		})
	});
}
function Hn({ className: e, ...t }) {
	let { error: n, formItemId: r } = zn();
	return /* @__PURE__ */ a(Fn, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: U("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function Un({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = zn();
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function Wn({ className: e, ...t }) {
	let { formDescriptionId: n } = zn();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
function Gn({ className: e, ...t }) {
	let { error: n, formMessageId: r } = zn(), i = n ? String(n?.message ?? "") : t.children;
	return i ? /* @__PURE__ */ a("p", {
		"data-slot": "form-message",
		id: r,
		role: n ? "alert" : void 0,
		className: U("text-sm text-danger-fg", e),
		...t,
		children: i
	}) : null;
}
//#endregion
//#region src/lib/field-variants.ts
var Kn = {
	ghost: "rounded-sm border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, qn = t(U("h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20"), {
	variants: { variant: {
		default: "border border-input bg-transparent shadow-xs focus-visible:border-ring",
		ghost: Kn.ghost,
		cell: `h-8 px-2 ${Kn.cell}`
	} },
	defaultVariants: { variant: "default" }
});
function Y({ className: e, type: t, variant: n, ...r }) {
	return /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		className: U(qn({ variant: n }), e),
		...r
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": q().ui.pagination,
		"data-slot": "pagination",
		className: U("mx-auto flex w-full justify-center", e),
		...t
	});
}
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: U("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function Xn({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function Zn({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: U(Ht({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function Qn({ className: e, ...t }) {
	let n = q().ui;
	return /* @__PURE__ */ o(Zn, {
		"aria-label": n.goToPreviousPage,
		size: "default",
		className: U("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(ie, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.previous
		})]
	});
}
function $n({ className: e, ...t }) {
	let n = q().ui;
	return /* @__PURE__ */ o(Zn, {
		"aria-label": n.goToNextPage,
		size: "default",
		className: U("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.next
		}), /* @__PURE__ */ a(D, {})]
	});
}
function er({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: U("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(M, {
			"aria-hidden": !0,
			className: "size-4"
		}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: q().ui.morePages
		})]
	});
}
//#endregion
//#region src/components/ui/popover.tsx
function tr({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function nr({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function rr({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: U("z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-md border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-4 text-popover-foreground shadow-[var(--surface-shadow)] backdrop-blur-xl outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...r
	}) });
}
function ir({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: U("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: U("font-medium", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: U("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/progress.tsx
function cr({ className: e, value: t, ...n }) {
	return /* @__PURE__ */ a(p.Root, {
		"data-slot": "progress",
		className: U("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", e),
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
function lr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "radio-group",
		className: U("grid gap-3", e),
		...t
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Item, {
		"data-slot": "radio-group-item",
		className: U("relative aspect-square size-4 shrink-0 rounded-full border border-input text-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20", e),
		...t,
		children: /* @__PURE__ */ a(m.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(ue, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function dr({ ...e }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "select",
		...e
	});
}
function fr({ ...e }) {
	return /* @__PURE__ */ a(h.Group, {
		"data-slot": "select-group",
		...e
	});
}
function pr({ ...e }) {
	return /* @__PURE__ */ a(h.Value, {
		"data-slot": "select-value",
		...e
	});
}
function mr({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(h.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: U("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? Kn[r] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...i,
		children: [n, /* @__PURE__ */ a(h.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(T, { className: "size-4 opacity-50" })
		})]
	});
}
function hr({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
		"data-slot": "select-content",
		className: U("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ a(yr, {}),
			/* @__PURE__ */ a(h.Viewport, {
				className: U("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(br, {})
		]
	}) });
}
function gr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Label, {
		"data-slot": "select-label",
		className: U("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function _r({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(h.Item, {
		"data-slot": "select-item",
		className: U("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(A, { className: "size-4" }) })
		}), /* @__PURE__ */ a(h.ItemText, { children: t })]
	});
}
function vr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Separator, {
		"data-slot": "select-separator",
		className: U("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: U("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(O, { className: "size-4" })
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: U("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(T, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function xr({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: U("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/components/ui/sheet.tsx
function Sr({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Cr({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function wr({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Tr({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Er({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "sheet-overlay",
		className: U("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function Dr({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ o(Tr, { children: [/* @__PURE__ */ a(Er, {}), /* @__PURE__ */ o(l.Content, {
		"data-slot": "sheet-content",
		className: U("fixed z-50 flex flex-col bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500", n === "right" && "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm", n === "left" && "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", n === "top" && "inset-x-0 top-0 h-auto max-h-dvh border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", n === "bottom" && "inset-x-0 bottom-0 h-auto max-h-dvh border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", e),
		...i,
		children: [/* @__PURE__ */ a("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain",
			children: t
		}), r && /* @__PURE__ */ o(l.Close, {
			className: "absolute top-4 right-4 -m-3.5 rounded-xs p-3.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary sm:-m-2 sm:p-2",
			children: [/* @__PURE__ */ a(Re, { className: "size-4" }), /* @__PURE__ */ a("span", {
				className: "sr-only",
				children: q().ui.close
			})]
		})]
	})] });
}
function Or({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-header",
		className: U("flex flex-col gap-1.5 p-4", e),
		...t
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sheet-footer",
		className: U("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Ar({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "sheet-title",
		className: U("font-semibold text-foreground", e),
		...t
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "sheet-description",
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var Mr = 768;
function Nr() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < Mr);
		};
		return e.addEventListener("change", t), n(window.innerWidth < Mr), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: U("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function Fr({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(x.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Ir({ ...e }) {
	return /* @__PURE__ */ a(Fr, { children: /* @__PURE__ */ a(x.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function Lr({ ...e }) {
	return /* @__PURE__ */ a(x.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Rr({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ a(x.Portal, { children: /* @__PURE__ */ o(x.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: U("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-tooltip px-3 py-1.5 text-xs text-balance text-tooltip-foreground fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ a(x.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-tooltip fill-tooltip" })]
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var zr = "sidebar_state", Br = 604800, Vr = "16rem", Hr = "18rem", Ur = "3rem", Wr = "b", Gr = e.createContext(null);
function Kr() {
	let t = e.useContext(Gr);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function qr({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = Nr(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${zr}=${t}; path=/; max-age=${Br}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === Wr && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(Gr.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": Vr,
				"--sidebar-width-icon": Ur,
				...o
			},
			className: U("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function Jr({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: l, state: u, openMobile: d, setOpenMobile: f } = Kr(), p = q().ui;
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: U("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (l) return /* @__PURE__ */ a(Sr, {
		open: d,
		onOpenChange: f,
		...c,
		children: /* @__PURE__ */ o(Dr, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": Hr },
			side: e,
			children: [/* @__PURE__ */ o(Or, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Ar, { children: p.sidebarTitle }), /* @__PURE__ */ a(jr, { children: p.sidebarDescription })]
			}), /* @__PURE__ */ a("div", {
				className: "flex h-full w-full flex-col",
				children: s
			})]
		})
	});
	let m = n === "offcanvas";
	return /* @__PURE__ */ o("div", {
		className: U("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": u,
		"data-collapsible": u === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: U("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", m ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: U("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", m ? ["transition-transform duration-200 ease-linear", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-linear", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
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
function Yr({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = Kr();
	return /* @__PURE__ */ o(J, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: U("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(Te, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: q().ui.toggleSidebar
		})]
	});
}
function Xr({ className: e, ...t }) {
	let { toggleSidebar: n } = Kr(), r = q().ui;
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": r.toggleSidebar,
		tabIndex: -1,
		onClick: n,
		title: r.toggleSidebar,
		className: U("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-transform ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ a("main", {
		"data-slot": "sidebar-inset",
		className: U("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ a(Y, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: U("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function $r({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: U("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: U("flex flex-col gap-2 p-2", e),
		...t
	});
}
function ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(xr, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: U("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: U("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function ri({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: U("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function ii({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: U("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-opacity duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function ai({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: U("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function oi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: U("w-full text-sm", e),
		...t
	});
}
function si({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: U("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function ci({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: U("group/menu-item relative", e),
		...t
	});
}
var li = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function ui({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? v.Root : "button", { isMobile: u, state: d } = Kr(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: U(li({
			variant: n,
			size: r
		}), s),
		...c
	});
	return !i || d !== "collapsed" || u ? f : (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(Ir, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(Lr, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(Rr, {
			side: "right",
			align: "center",
			...i
		})]
	}));
}
function di({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? v.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: U("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function fi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: U("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function pi({ className: t, showIcon: n = !1, ...r }) {
	let i = e.useId(), s = e.useMemo(() => {
		let e = 0;
		for (let t = 0; t < i.length; t++) e = e * 31 + i.charCodeAt(t) | 0;
		return `${Math.abs(e) % 41 + 50}%`;
	}, [i]);
	return /* @__PURE__ */ o("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: U("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ a(Pr, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Pr, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function mi({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: U("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function hi({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: U("group/menu-sub-item relative", e),
		...t
	});
}
function gi({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? v.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: U("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/components/ui/slider.tsx
function _i({ className: t, defaultValue: n, value: r, min: i = 0, max: s = 100, ...c }) {
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
		className: U("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", t),
		...c,
		children: [/* @__PURE__ */ a(_.Track, {
			"data-slot": "slider-track",
			className: U("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ a(_.Range, {
				"data-slot": "slider-range",
				className: U("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: l.length }, (e, t) => /* @__PURE__ */ a(_.Thumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, t))]
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var vi = ({ theme: e, ...t }) => /* @__PURE__ */ a(Ke, {
	theme: "light",
	className: "toaster group",
	closeButton: !0,
	icons: {
		success: /* @__PURE__ */ a(ce, { className: "size-4" }),
		info: /* @__PURE__ */ a(ve, { className: "size-4" }),
		warning: /* @__PURE__ */ a(Ie, { className: "size-4" }),
		error: /* @__PURE__ */ a(I, { className: "size-4" }),
		loading: /* @__PURE__ */ a(De, { className: "size-4 animate-spin" })
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
function yi({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(y.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: U("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-[background-color,border-color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e),
		...n,
		children: /* @__PURE__ */ a(y.Thumb, {
			"data-slot": "switch-thumb",
			className: U("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function bi({ className: e, containerClassName: t, containerRef: n, ...r }) {
	return /* @__PURE__ */ a("div", {
		ref: n,
		"data-slot": "table-container",
		className: U("relative w-full overflow-x-auto", t),
		children: /* @__PURE__ */ a("table", {
			"data-slot": "table",
			className: U("w-full caption-bottom text-sm", e),
			...r
		})
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: U("[&_tr]:border-b", e),
		...t
	});
}
function Si({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: U("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: U("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function X({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: U("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: U("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Ti({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: U("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: U("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Di({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(b.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: U("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Oi = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function ki({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(b.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: U(Oi({ variant: t }), e),
		...n
	});
}
function Ai({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Trigger, {
		"data-slot": "tabs-trigger",
		className: U("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-[color,background-color,border-color,box-shadow] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", e),
		...t
	});
}
function ji({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Content, {
		"data-slot": "tabs-content",
		className: U("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Mi({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: U("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm", t ? Kn[t] : "border border-input bg-transparent shadow-xs focus-visible:border-ring", e),
		...n
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
var Ni = t("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function Pi({ className: e, variant: t, size: n, ...r }) {
	return /* @__PURE__ */ a(ee.Root, {
		"data-slot": "toggle",
		className: U(Ni({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
//#endregion
//#region src/components/ui/toggle-group.tsx
var Fi = e.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function Ii({ className: e, variant: t, size: n, spacing: r = 0, children: i, ...o }) {
	return /* @__PURE__ */ a(te.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		style: { "--gap": r },
		className: U("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
		...o,
		children: /* @__PURE__ */ a(Fi.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r
			},
			children: i
		})
	});
}
function Li({ className: t, children: n, variant: r, size: i, ...o }) {
	let s = e.useContext(Fi);
	return /* @__PURE__ */ a(te.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": s.variant || r,
		"data-size": s.size || i,
		"data-spacing": s.spacing,
		className: U(Ni({
			variant: s.variant || r,
			size: s.size || i
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", t),
		...o,
		children: n
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
function Ri({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: U("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
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
var zi = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Bi({ component: e, children: t }) {
	return /* @__PURE__ */ a(zi.Provider, {
		value: e,
		children: t
	});
}
function Z(t) {
	let n = e.useContext(zi);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var Vi = (e) => z.object({
	email: z.email(e.invalidEmail),
	password: z.string().min(1, e.passwordRequired)
});
function Hi({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = q().auth, f = e.useMemo(() => Vi(d), [d]), p = L({
		resolver: Je(f),
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
	return /* @__PURE__ */ o(tn, { children: [/* @__PURE__ */ o(nn, {
		className: "text-center",
		children: [/* @__PURE__ */ a(rn, {
			className: "text-xl",
			children: r ?? d.loginTitle
		}), /* @__PURE__ */ a(an, { children: s ?? d.loginDescription })]
	}), /* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(In, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(W, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(G, { children: n })
				}),
				/* @__PURE__ */ a(Rn, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Vn, { children: [
						/* @__PURE__ */ a(Hn, { children: d.email }),
						/* @__PURE__ */ a(Un, { children: /* @__PURE__ */ a(Y, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(Gn, {})
					] })
				}),
				/* @__PURE__ */ a(Rn, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(Vn, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(Hn, { children: d.password }), l && /* @__PURE__ */ a(Z, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(Un, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(Y, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(Gn, {})
					] })
				}),
				/* @__PURE__ */ o(J, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(F, { className: "animate-spin" }), d.signIn]
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
						/* @__PURE__ */ a(Z, {
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
var Ui = (e) => z.object({
	name: z.string().min(2, e.nameTooShort),
	email: z.email(e.invalidEmail),
	password: z.string().min(8, e.passwordTooShort),
	confirmPassword: z.string()
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
});
function Wi({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l }) {
	let u = q().auth, d = e.useMemo(() => Ui(u), [u]), f = L({
		resolver: Je(d),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		}
	}), p = f.formState.isSubmitting, m = (e, t, n, r) => /* @__PURE__ */ a(Rn, {
		control: f.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(Vn, { children: [
			/* @__PURE__ */ a(Hn, { children: t }),
			/* @__PURE__ */ a(Un, { children: /* @__PURE__ */ a(Y, {
				...n,
				...e
			}) }),
			r && /* @__PURE__ */ a(Wn, { children: r }),
			/* @__PURE__ */ a(Gn, {})
		] })
	});
	return /* @__PURE__ */ o(tn, { children: [/* @__PURE__ */ o(nn, {
		className: "text-center",
		children: [/* @__PURE__ */ a(rn, {
			className: "text-xl",
			children: r ?? u.registerTitle
		}), /* @__PURE__ */ a(an, { children: s ?? u.registerDescription })]
	}), /* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(In, {
		...f,
		children: /* @__PURE__ */ o("form", {
			onSubmit: f.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(W, {
					variant: "danger",
					children: /* @__PURE__ */ a(G, { children: n })
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
				/* @__PURE__ */ o(J, {
					type: "submit",
					className: "w-full",
					disabled: p,
					children: [p && /* @__PURE__ */ a(F, { className: "animate-spin" }), u.createAccount]
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
						/* @__PURE__ */ a(Z, {
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
var Gi = (e) => z.object({ email: z.email(e.invalidEmail) });
function Ki({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = q().auth, c = e.useMemo(() => Gi(s), [s]), l = L({
		resolver: Je(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(tn, { children: [/* @__PURE__ */ o(nn, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(N, { className: "size-8 text-primary" }),
			/* @__PURE__ */ a(rn, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(an, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(sn, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(Z, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(tn, { children: [/* @__PURE__ */ o(nn, {
		className: "text-center",
		children: [/* @__PURE__ */ a(rn, {
			className: "text-xl",
			children: s.resetTitle
		}), /* @__PURE__ */ a(an, { children: s.resetDescription })]
	}), /* @__PURE__ */ a(sn, { children: /* @__PURE__ */ a(In, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(W, {
					variant: "danger",
					children: /* @__PURE__ */ a(G, { children: n })
				}),
				/* @__PURE__ */ a(Rn, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(Vn, { children: [
						/* @__PURE__ */ a(Hn, { children: s.email }),
						/* @__PURE__ */ a(Un, { children: /* @__PURE__ */ a(Y, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(Gn, {})
					] })
				}),
				/* @__PURE__ */ o(J, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(F, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(Z, {
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
function qi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B, {
		"data-slot": "command",
		className: U("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function Ji({ title: e, description: t, children: n, className: r, showCloseButton: i = !0, ...s }) {
	let c = q().ui;
	return /* @__PURE__ */ a(un, {
		...s,
		children: /* @__PURE__ */ o(hn, {
			className: U("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(gn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(vn, { children: e ?? c.commandTitle }), /* @__PURE__ */ a(yn, { children: t ?? c.commandDescription })]
			}), /* @__PURE__ */ a(qi, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})]
		})
	});
}
function Yi({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(xe, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(B.Input, {
			"data-slot": "command-input",
			className: U("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function Xi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.List, {
		"data-slot": "command-list",
		className: U("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function Zi({ ...e }) {
	return /* @__PURE__ */ a(B.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function Qi({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Group, {
		"data-slot": "command-group",
		className: U("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function $i({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Separator, {
		"data-slot": "command-separator",
		className: U("-mx-1 h-px bg-border", e),
		...t
	});
}
function ea({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Item, {
		"data-slot": "command-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function ta({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: U("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function na({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
	let u = q().search, [d, f] = e.useState(!1), p = n ?? d, m = r ?? f;
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
	]), /* @__PURE__ */ o(Ji, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(Yi, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(Xi, { children: [/* @__PURE__ */ a(Zi, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a($i, {}), /* @__PURE__ */ a(Qi, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(ea, {
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
					e.shortcut && /* @__PURE__ */ a(ta, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function ra({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = q().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: U("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", n),
		...r,
		children: [
			/* @__PURE__ */ a(be, { className: "size-4 shrink-0" }),
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
function ia({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = q().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [ee, te] = e.useState(0), x = e.useRef(null), S = t.length === 0 ? -1 : Math.min(ee, t.length - 1), ne = S >= 0 ? `${h}-option-${S}` : void 0;
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
		className: U("relative", p),
		children: [/* @__PURE__ */ a(Y, {
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
			className: "absolute z-50 mt-1 max-h-64 w-full overflow-y-auto overscroll-contain rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
			children: [t.map((e, t) => /* @__PURE__ */ o("li", {
				id: `${h}-option-${t}`,
				role: "option",
				"aria-selected": t === S,
				"data-active": t === S,
				onMouseDown: (t) => {
					t.preventDefault(), w(e);
				},
				onMouseEnter: () => te(t),
				className: U("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === S && "bg-accent text-accent-foreground"),
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
var aa = (e) => e === "," ? ";" : ",", oa = /^[=+\-@\t\r]/;
function sa(e, t) {
	let n = oa.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function ca(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function la(e, t, n = ".") {
	let r = aa(n), i = (e) => e.map((e) => sa(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => ca(t.value(e), n))))].join("\r\n");
}
function ua(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/data/types.ts
var da = "—", Q = (e) => e == null || e === "" ? "" : String(e);
function fa(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var pa = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, ma = (e) => Array.isArray(e) ? e.map(Q) : [Q(e)], ha = (e) => (t, n) => {
	if (!e.order) return fa(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, ga = (e) => !!e.header;
function _a(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function va(e, t) {
	if (pa(t)) return e.header;
	let n = ma(t).map((t) => _a(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function ya(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || pa(e.value) ? [] : [[t, ma(e.value)]];
		}))
	};
}
//#endregion
//#region src/lib/storage.ts
var ba = "ziku", xa = ba;
function Sa(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (xa !== ba && xa !== e) throw Error(`Storage prefix is already "${xa}", cannot change it to "${e}"`);
	xa = e;
}
var Ca = () => xa, wa = (...e) => [xa, ...e].join("."), Ta = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], Ea = (e) => wa("views", e);
function Da(e, t, n = At.dataTable.allView) {
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
function Oa(e, t, n, r) {
	let i = Da(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(Ea(e)), n = t ? JSON.parse(t) : null;
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
var ka = 800, Aa = (e) => e.shared !== void 0;
function ja(t, n, r, i, a) {
	let o = q().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = Oa(r, t, n, o);
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
			let e = s.filter((e) => !Aa(e));
			localStorage.setItem(Ea(r), JSON.stringify({
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
			let a = new Set(Da(t, n).map((e) => e.id)), o = s.filter((e) => !Aa(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => Aa(e) || !u.has(e.name)),
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
		}, ka)));
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
			return r && Aa(r) && g(r.id, t(e(r))), {
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
				icon: Ta[n.views.length % Ta.length],
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
			t && Aa(t) && p.current?.remove(t.id).catch(() => {});
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
var Ma = {
	table: Ae,
	list: ye,
	board: Oe,
	star: ke,
	funnel: ge,
	clock: j,
	users: Pe,
	tag: je,
	eye: me
};
function Na({ name: e, className: t }) {
	let n = Ma[e] ?? Ae;
	return /* @__PURE__ */ a(n, { className: t });
}
function Pa({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(tr, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(nr, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(rr, {
			align: r,
			className: U("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function Fa({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(Pa, {
		align: "end",
		width: r,
		className: U("relative shrink-0 rounded-md p-1.5 outline-none transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50", n ? "text-link" : "text-muted-foreground hover:text-foreground"),
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
var Ia = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function La({ columns: t, onPick: n, empty: r }) {
	let { dataTable: s, common: c } = q(), [l, u] = e.useState(""), d = t.filter((e) => e.header.toLowerCase().includes(l.toLowerCase()));
	return /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ a(Y, {
			className: "mb-1 h-8",
			placeholder: s.findColumn,
			autoFocus: !0,
			value: l,
			onChange: (e) => u(e.target.value)
		}),
		r && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: r.onPick,
			className: U(Ia, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Ce, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? Ae;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: Ia,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function Ra({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
	let { dataTable: l, common: u } = q(), [d, f] = e.useState(""), p = Array.isArray(r) ? r : [], m = n.filter((e) => e.label.toLowerCase().includes(d.toLowerCase()));
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
			children: /* @__PURE__ */ a(Me, { className: "size-3.5" })
		})]
	}), t.facet ? /* @__PURE__ */ o(i, { children: [
		n.length >= 8 && /* @__PURE__ */ a(Y, {
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
			children: [/* @__PURE__ */ a(ln, {
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
	] }) : /* @__PURE__ */ a(Y, {
		className: "h-8",
		placeholder: l.typeAValue,
		autoFocus: !0,
		value: Array.isArray(r) ? "" : r,
		onChange: (e) => s(e.target.value)
	})] });
}
function za({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = q().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(dr, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(mr, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(pr, {})
					}), /* @__PURE__ */ a(hr, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(_r, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(dr, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(mr, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(pr, {})
					}), /* @__PURE__ */ o(hr, { children: [/* @__PURE__ */ a(_r, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(_r, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-danger-fg",
					children: /* @__PURE__ */ a(Le, {
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
			className: U(Ia, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Se, {
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
			className: U(Ia, "text-danger-fg hover:bg-danger/10"),
			children: [
				/* @__PURE__ */ a(Me, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function Ba({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(ga).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(ln, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function Va({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a(Pa, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(Ha, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function Ha({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
	let { dataTable: c } = q(), [l, u] = e.useState(!1), d = e.useId();
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
				children: [/* @__PURE__ */ a(Y, {
					name: "name",
					className: "h-8",
					required: !0,
					autoFocus: !0,
					defaultValue: t,
					"aria-invalid": l || void 0,
					"aria-describedby": l ? d : void 0,
					onChange: () => u(!1)
				}), /* @__PURE__ */ a(J, {
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
function Ua({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = q(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
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
				children: /* @__PURE__ */ a(Le, {
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
				className: U("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Na, {
					name: n,
					className: "size-4"
				})
			}), /* @__PURE__ */ a(Y, {
				className: "h-8 min-w-0 flex-1 font-medium",
				value: t,
				onChange: (e) => s(e.target.value),
				"aria-label": d.viewName
			})]
		}),
		h && /* @__PURE__ */ a("div", {
			className: "mb-2 flex flex-wrap gap-1 rounded-md bg-muted p-1.5",
			children: Ta.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: U("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(Na, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: Ia,
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
var Wa = "application/x-ziku-card", Ga = {
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
function Ka({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, className: l }) {
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
			let n = t.dataTransfer.getData(Wa), a = m.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return /* @__PURE__ */ a("div", {
		className: U("flex items-start gap-4 overflow-x-auto pb-4", l),
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(Ja, {
			col: e,
			state: g(e.key),
			drop: _(e.key)
		}, e.key) : /* @__PURE__ */ o("div", {
			..._(e.key),
			style: { maxHeight: c },
			className: U("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
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
							d(l), e.dataTransfer.setData(Wa, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							d(null), p(null);
						},
						className: U("group/card relative transition-opacity", f ? "cursor-grab active:cursor-grabbing" : "cursor-default", h && "select-none", u === l && "opacity-30"),
						children: [n(c), f && /* @__PURE__ */ a(qa, {
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
function qa({ columns: e, from: t, onPick: n }) {
	let r = q().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(bn, { children: [/* @__PURE__ */ a(Sn, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: U("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ne, { size: 14 })
	}), /* @__PURE__ */ a(Cn, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(Tn, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function Ja({ col: e, state: t, drop: n }) {
	let r = e.tile, i = Ga[r.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: U("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? U("border-solid", i.over) : U("border-dashed", i.idle)),
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
var Ya = H({
	rowSortingFeature: ct,
	sortedRowModel: V(),
	columnFilteringFeature: Xe,
	filteredRowModel: nt(),
	globalFilteringFeature: at,
	columnFacetingFeature: Ye,
	facetedRowModel: et(),
	facetedUniqueValues: tt(),
	columnGroupingFeature: Ze,
	groupedRowModel: rt(),
	rowExpandingFeature: ot,
	expandedRowModel: $e(),
	columnVisibilityFeature: Qe,
	rowPaginationFeature: st,
	paginatedRowModel: it()
});
function Xa({ columns: t, data: n, loading: r, empty: s, rowId: c, search: l = !0, searchPlaceholder: u, toolbar: d, onRowClick: f, pageSize: p = 0, defaultSort: m, defaultHidden: h, defaultFilters: g, defaultGroup: _ = "", defaultMode: v = "table", renderCard: y, boardSubtitle: b, presets: ee = [], viewKey: te, onStateChange: x, view: S, viewsBackend: ne, paged: C, csv: T, className: re }) {
	let ie = q(), E = ie.dataTable, D = ie.common, oe = e.useMemo(() => n ?? [], [n]), O = !!C, k = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), ce = e.useMemo(() => ({
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
		sorting: (e.sorting ?? []).filter((e) => k[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => k[e.id]).map((e) => k[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: pa(e.value) ? [] : [Q(e.value)]
		} : e).map((e) => {
			let t = k[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Q(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => k[e])
	}), [k]), A = ja(ce, ee, te, ne, S), { views: ue, active: j, isPreset: fe, patch: M } = A, N = e.useMemo(() => le(j.state), [j.state, le]);
	e.useEffect(() => {
		x?.(N, j.id);
	}, [
		N,
		j.id,
		x
	]);
	let he = (e) => (t) => M({ [e]: typeof t == "function" ? t(N[e]) : t }), ve = e.useMemo(() => t.map((e) => ({
		id: e.key,
		header: e.header,
		accessorFn: (t) => {
			let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
			return n == null || n === "" ? void 0 : n;
		},
		cell: (t) => e.render ? e.render(t.row.original) : _a(e, Q(t.getValue())) || "—",
		enableSorting: e.sortable !== !1 && (!O || !!e.sortKey),
		enableGlobalFilter: e.sortable !== !1,
		enableGrouping: !!e.facet,
		enableHiding: ga(e),
		sortUndefined: "last",
		sortFn: (t, n, r) => e.order ? ha(e)(Q(t.getValue(r)), Q(n.getValue(r))) : fa(t.getValue(r), n.getValue(r)),
		filterFn: (e, t, n) => {
			if (pa(n)) return !0;
			let r = Q(e.getValue(t));
			return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
		}
	})), [t, O]), [ye, xe] = e.useState(!0), [Ce, Te] = e.useState(0), P = N.grouping[0] ?? "", F = t.filter((e) => e.facet), De = !!(y && F.length && c), ke = N.mode === "board" && De, je = p > 0 && !P && !ke && !O, Ne = e.useMemo(() => N.columnFilters.filter((e) => !pa(e.value) && !k[e.id]?.filterKey), [N.columnFilters, k]), Fe = O && (Ne.length > 0 || N.grouping.length > 0 || ke), Ie = e.useMemo(() => P && !N.sorting.some((e) => e.id === P) ? [{
		id: P,
		desc: !1
	}, ...N.sorting] : N.sorting, [P, N.sorting]), I = lt({
		features: Ya,
		data: oe,
		columns: ve,
		state: {
			sorting: Ie,
			columnFilters: O ? Ne : N.columnFilters,
			globalFilter: O ? "" : N.globalFilter,
			columnVisibility: N.columnVisibility,
			grouping: N.grouping,
			expanded: ye,
			pagination: {
				pageIndex: je ? Ce : 0,
				pageSize: je ? p : 2 ** 53 - 1
			}
		},
		onSortingChange: he("sorting"),
		onColumnFiltersChange: he("columnFilters"),
		onGlobalFilterChange: he("globalFilter"),
		onColumnVisibilityChange: he("columnVisibility"),
		onGroupingChange: he("grouping"),
		onExpandedChange: xe,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: Ce,
				pageSize: je ? p : 2 ** 53 - 1
			}) : e;
			Te(t.pageIndex);
		},
		manualSorting: O && !P,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Q(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), Re = I.getFilteredRowModel().rows;
	function ze() {
		if (!T) return;
		let e = T.decimal ?? ".", t = I.getVisibleLeafColumns().map((e) => k[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = I.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		ua(T.filename, la(n, t, e));
	}
	e.useEffect(() => {
		Te(0);
	}, [
		N.columnFilters,
		N.globalFilter,
		N.grouping
	]);
	let Be = oo(N.globalFilter, ao), Ve = JSON.stringify(ya(t, {
		...N,
		globalFilter: Be
	})), He = e.useRef(C?.setQuery);
	e.useEffect(() => {
		He.current = C?.setQuery;
	}), e.useEffect(() => {
		He.current?.(JSON.parse(Ve));
	}, [Ve]);
	let Ue = e.useRef(null), We = C?.more, L = C?.hasMore ?? !1, Ge = C?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = Ue.current;
		if (!e || !We || !L || Ge) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && We();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		We,
		L,
		Ge
	]), e.useEffect(() => {
		Fe && L && !Ge && We?.();
	}, [
		Fe,
		L,
		Ge,
		We
	]);
	let R = N.columnFilters, Ke = Object.values(N.columnVisibility).filter((e) => e === !1).length, qe = R.length > 0 || !!N.globalFilter || N.grouping.length > 0 || N.sorting.length > 0 || Ke > 0, Je = qe && (oe.length > 0 || O), z = t.filter((e) => ga(e) && e.sortable !== !1 && !R.some((t) => t.id === e.key)), B = t.filter((e) => ga(e) && e.sortable !== !1 && (!O || !!e.sortKey)), Ye = (e) => M({ columnFilters: [...R, {
		id: e,
		value: k[e]?.facet ? [] : ""
	}] }), Xe = (e) => M({ columnFilters: R.filter((t) => t.id !== e) }), Ze = (e, t) => M({ columnFilters: R.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function Qe(e) {
		if (!e.facet) return [];
		let t = O && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: _a(e, t)
		})) : [...I.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => ha(e)(Q(t[0]), Q(n[0]))).map(([n, r]) => ({
			value: Q(n),
			label: t ? _a(e, Q(n)) : `${_a(e, Q(n))} (${r})`
		}));
	}
	let $e = (e) => M({
		mode: e,
		grouping: e === "board" && !P ? [F[0].key] : N.grouping
	}), et = /* @__PURE__ */ a(Ba, {
		columns: t,
		visibility: N.columnVisibility,
		onToggle: (e, t) => M({ columnVisibility: {
			...N.columnVisibility,
			[e]: t
		} })
	}), tt = /* @__PURE__ */ a(za, {
		sorting: N.sorting,
		sortable: B,
		byKey: k,
		onChange: (e) => M({ sorting: e })
	}), nt = (e) => /* @__PURE__ */ a(La, {
		columns: F,
		empty: {
			label: E.noGrouping,
			onPick: () => {
				M({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			M({ grouping: [t] }), e?.();
		}
	}), rt = /* @__PURE__ */ o(i, { children: [
		R.map((e) => {
			let t = k[e.id];
			if (!t) return null;
			let n = t.icon ?? ge;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: va(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => Xe(e.id),
						"aria-label": E.removeFilterFor(t.header),
						className: "shrink-0 rounded-md p-1 text-muted-foreground hover:bg-danger/10 hover:text-danger-fg",
						children: /* @__PURE__ */ a(Le, {
							className: "size-3",
							weight: "bold"
						})
					})
				]
			}, e.id);
		}),
		R.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(La, {
			columns: z,
			onPick: Ye
		})
	] }), it = [
		...De ? [{
			key: "layout",
			icon: Ae,
			label: E.layout,
			value: N.mode === "board" ? E.board : E.table,
			panel: /* @__PURE__ */ a(i, { children: [[
				"table",
				we,
				E.table
			], [
				"board",
				Oe,
				E.board
			]].map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => $e(e),
				className: U("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", N.mode === e && "font-medium"),
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
			label: E.visibleColumns,
			value: Ke ? E.hidden(Ke) : E.allView,
			panel: et
		},
		{
			key: "filter",
			icon: _e,
			label: E.filters,
			value: R.length ? String(R.length) : void 0,
			panel: rt
		},
		{
			key: "sort",
			icon: Ee,
			label: E.sorting,
			value: N.sorting.length ? N.sorting.length === 1 ? k[N.sorting[0].id]?.header : String(N.sorting.length) : void 0,
			panel: tt
		},
		...F.length ? [{
			key: "group",
			icon: we,
			label: E.groupBy,
			value: P ? k[P]?.header : D.none,
			panel: nt()
		}] : []
	], V = P ? k[P] : null, at = (e) => e && e !== "—" ? _a(V ?? void 0, e) : "—", ot = e.useMemo(() => {
		if (!ke || !V) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of Re) {
			let n = Q(t.getValue(P)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...V.order ?? [], ...e.keys()])].sort(ha(V)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: at(t),
				items: n,
				subtitle: b?.(n),
				tile: V.boardTile?.(t)
			};
		});
	}, [
		ke,
		V,
		Re,
		P,
		b
	]), st = I.getVisibleLeafColumns().length, ct = I.getRowModel().rows, H = ct.length > Za, dt = e.useRef(null), ft = ut({
		count: ct.length,
		enabled: H,
		getScrollElement: () => dt.current,
		estimateSize: () => Qa,
		overscan: $a,
		initialRect: {
			width: 0,
			height: eo
		},
		measureElement: (e) => e.getBoundingClientRect().height || Qa,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || eo
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), W = ft.getVirtualItems(), pt = H ? W.map((e) => ({
		row: ct[e.index],
		index: e.index
	})) : ct.map((e, t) => ({
		row: e,
		index: t
	})), G = H && W.length > 0 ? W[0].start : 0, mt = H && W.length > 0 ? ft.getTotalSize() - W[W.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: U("overflow-hidden rounded-md border bg-card", re),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [ue.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => A.select(e.id),
						className: U("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === j.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(Na, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: E.sharedBy(e.ownerName),
								"aria-label": E.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(Pe, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(Va, {
						align: "start",
						title: E.saveView,
						className: "shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
						trigger: /* @__PURE__ */ a(Se, {
							className: "size-4",
							weight: "bold"
						}),
						defaultValue: E.newView,
						confirmLabel: E.createView,
						onSubmit: A.add,
						shareLabel: A.sharable ? E.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						d,
						l && /* @__PURE__ */ a(Fa, {
							icon: be,
							label: D.search,
							active: !!N.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(Y, {
								className: "h-8",
								placeholder: u ?? D.searchPlaceholder,
								autoFocus: !0,
								value: N.globalFilter,
								onChange: (e) => M({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(Fa, {
							icon: _e,
							label: E.filter,
							active: R.length > 0,
							children: (e) => /* @__PURE__ */ a(La, {
								columns: z,
								onPick: (t) => {
									Ye(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(Fa, {
							icon: Ee,
							label: E.sort,
							active: N.sorting.length > 0,
							width: "w-88",
							children: tt
						}),
						F.length > 0 && /* @__PURE__ */ a(Fa, {
							icon: we,
							label: E.group,
							active: !!P,
							children: (e) => nt(e)
						}),
						/* @__PURE__ */ a(Fa, {
							icon: me,
							label: E.visibleColumns,
							active: Ke > 0,
							width: "w-52",
							children: et
						}),
						De && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: [[
								"table",
								we,
								E.table
							], [
								"board",
								Oe,
								E.board
							]].map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								onClick: () => $e(e),
								className: U("px-2 py-1", N.mode === e ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(Pa, {
							align: "end",
							width: "w-72",
							className: "ml-1 rounded-md p-1.5 text-muted-foreground outline-none hover:bg-accent hover:text-foreground",
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": E.viewSettings,
								children: /* @__PURE__ */ a(de, {
									className: "size-4",
									weight: "bold"
								})
							}),
							children: (e) => /* @__PURE__ */ a(Ua, {
								name: j.name,
								icon: j.icon,
								onIcon: A.setIcon,
								onRename: A.rename,
								onClose: e,
								rows: it,
								footer: /* @__PURE__ */ o(i, { children: [T && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										ze(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(pe, { className: "size-4 text-muted-foreground" }), E.exportCsv]
								}), !fe && j.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										A.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger/10",
									children: [
										/* @__PURE__ */ a(Me, { className: "size-4" }),
										" ",
										E.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(R.length > 0 || N.sorting.length > 0 || P) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-1.5 border-b bg-muted/50 px-3 py-2",
				children: [
					N.sorting.length > 0 && /* @__PURE__ */ a(Pa, {
						width: "w-88",
						className: ro,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Ee, {
									className: "size-3.5",
									weight: "bold"
								}),
								N.sorting.length === 1 ? `${k[N.sorting[0].id]?.header ?? N.sorting[0].id} ${N.sorting[0].desc ? "↓" : "↑"}` : E.sortCount(N.sorting.length),
								/* @__PURE__ */ a(w, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: tt
					}),
					P && /* @__PURE__ */ a(Pa, {
						className: ro,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(we, {
									className: "size-3.5",
									weight: "bold"
								}),
								E.groupedBy(k[P]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(w, {
									className: "size-2.5 opacity-60",
									weight: "bold"
								})
							]
						}),
						children: (e) => nt(e)
					}),
					R.map((e) => {
						let t = k[e.id];
						if (!t) return null;
						let n = t.icon ?? ge;
						return /* @__PURE__ */ a(Pa, {
							className: pa(e.value) ? io : ro,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, {
										className: "size-3.5",
										weight: "bold"
									}),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: va(t, e.value)
									}),
									/* @__PURE__ */ a(w, {
										className: "size-2.5 opacity-60",
										weight: "bold"
									})
								]
							}),
							children: (n) => /* @__PURE__ */ a(Ra, {
								col: t,
								options: Qe(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => Ze(e.id, t),
								onRemove: () => {
									Xe(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(Pa, {
						className: "rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-card hover:text-foreground",
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ a(Se, {
									className: "size-3",
									weight: "bold"
								}),
								" ",
								E.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(La, {
							columns: z,
							onPick: (t) => {
								Ye(t), e();
							}
						})
					}),
					qe && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: A.reset,
						className: "ml-auto flex items-center gap-1 text-xs text-link hover:underline",
						children: [
							/* @__PURE__ */ a(Le, {
								className: "size-3",
								weight: "bold"
							}),
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
				children: /* @__PURE__ */ o(bi, { children: [/* @__PURE__ */ a(xi, { children: /* @__PURE__ */ a(X, {
					className: "bg-muted/50 hover:bg-muted/50",
					children: I.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(wi, {
						className: U("whitespace-nowrap", k[e.id]?.className),
						children: k[e.id]?.header
					}, e.id))
				}) }), /* @__PURE__ */ a(Si, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(X, {
					className: "hover:bg-transparent",
					children: I.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Ti, {
						className: k[e.id]?.className,
						children: /* @__PURE__ */ a(Pr, { className: "h-4 w-full" })
					}, e.id))
				}, t)) })] })
			}) : Re.length === 0 ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: Je ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: E.noMatches }), /* @__PURE__ */ o(J, {
						variant: "outline",
						size: "sm",
						onClick: A.reset,
						children: [/* @__PURE__ */ a(Le, {
							className: "size-3.5",
							weight: "bold"
						}), E.clearAllFilters]
					})]
				}) : s ?? D.noResults
			}) : ke ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(Ka, {
					columns: ot,
					itemKey: c,
					renderCard: y,
					onDrop: V?.onSet ? (e, t) => V.onSet(e, t) : void 0,
					canDrag: (e) => !!V?.onSet && (V?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(bi, {
					containerRef: dt,
					containerClassName: U(H && `${to} overflow-y-auto`),
					"aria-rowcount": ct.length + 1,
					children: [/* @__PURE__ */ a(xi, { children: I.getHeaderGroups().map((e) => /* @__PURE__ */ a(X, {
						"aria-rowindex": 1,
						className: "bg-muted/50",
						children: e.headers.map((e) => {
							let t = k[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? se : n === "desc" ? w : Ee, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, {
								className: "size-3.5",
								weight: "bold"
							}), /* @__PURE__ */ a(I.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(wi, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: U("whitespace-nowrap", H && "sticky top-0 z-10 bg-[color-mix(in_oklab,var(--muted)_50%,var(--card))]", t?.className),
								children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.column.getToggleSortingHandler(),
									className: U("inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"),
									children: [c, /* @__PURE__ */ a(s, {
										className: U("size-3", n ? "text-foreground" : "opacity-40"),
										weight: "bold"
									})]
								}) : /* @__PURE__ */ a("span", {
									className: "inline-flex items-center gap-1.5",
									children: c
								})
							}, e.id);
						})
					}, e.id)) }), /* @__PURE__ */ o(Si, { children: [
						G > 0 && /* @__PURE__ */ a(X, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ti, {
								colSpan: st,
								className: "p-0",
								style: { height: G }
							})
						}),
						pt.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(X, {
							ref: H ? ft.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(wi, {
								colSpan: st,
								className: "bg-muted/50 text-xs font-semibold tracking-wide uppercase",
								children: /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.getToggleExpandedHandler(),
									"aria-expanded": e.getIsExpanded(),
									className: "inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
									children: [
										e.getIsExpanded() ? /* @__PURE__ */ a(w, {
											className: "size-3",
											weight: "bold"
										}) : /* @__PURE__ */ a(ae, {
											className: "size-3",
											weight: "bold"
										}),
										at(Q(e.getValue(P))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(X, {
							ref: H ? ft.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: f ? "button" : void 0,
							tabIndex: f ? 0 : void 0,
							onClick: f ? () => f(e.original) : void 0,
							onKeyDown: f ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), f(e.original));
							} : void 0,
							className: f ? "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Ti, {
								className: k[e.column.id]?.className,
								children: /* @__PURE__ */ a(I.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						mt > 0 && /* @__PURE__ */ a(X, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ti, {
								colSpan: st,
								className: "p-0",
								style: { height: mt }
							})
						}),
						L && /* @__PURE__ */ a(X, {
							ref: Ue,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ti, {
								colSpan: st,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: Ge ? E.loadingMore : null
							})
						})
					] })]
				})
			}),
			je && !r && Re.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-4 border-t px-3 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: E.rowCount(Re.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: E.pageOf(Ce + 1, Math.max(I.getPageCount(), 1)) }),
						/* @__PURE__ */ a(J, {
							variant: "outline",
							size: "sm",
							onClick: () => I.previousPage(),
							disabled: !I.getCanPreviousPage(),
							children: E.previousPage
						}),
						/* @__PURE__ */ a(J, {
							variant: "outline",
							size: "sm",
							onClick: () => I.nextPage(),
							disabled: !I.getCanNextPage(),
							children: E.nextPage
						})
					]
				})]
			})
		]
	});
}
var Za = 100, Qa = 37, $a = 12, eo = 640, to = "max-h-[70dvh]", no = "rounded-md border px-2 py-1.5 text-sm outline-none", ro = `${no} border-ring/60 bg-accent font-medium text-foreground`, io = `${no} border-border bg-card text-muted-foreground`, ao = 300;
function oo(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function so({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = q().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(tr, { children: [/* @__PURE__ */ o(nr, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: U("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(wt, {
				variant: "secondary",
				className: U("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(w, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(rr, {
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
						/* @__PURE__ */ a(ln, {
							checked: n,
							tabIndex: -1,
							"aria-hidden": !0,
							className: "pointer-events-none"
						}),
						e.className ? /* @__PURE__ */ a(wt, {
							variant: "secondary",
							className: U("truncate", e.className),
							children: e.label
						}) : /* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
						e.className && /* @__PURE__ */ a("span", { className: "min-w-0 flex-1" }),
						n && /* @__PURE__ */ a(le, {
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
var co = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function lo(e) {
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
function uo(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of co) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode === "board" && n.set("mode", "board"), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function fo(e, t) {
	return uo(e).toString() === uo(t).toString();
}
function po(e, t) {
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
function mo(e) {
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
function ho({ brand: e, brandHref: t = "/", sidebarHeader: n, sidebarFooter: r, nav: s, currentPath: c, user: l, userMenu: u, onSignOut: d, headerActions: f, headerContent: p, classNames: m, bleed: h = !1, children: g }) {
	let _ = q().shell;
	return /* @__PURE__ */ o(qr, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: _.skipToContent
		}),
		/* @__PURE__ */ o(Jr, {
			collapsible: "icon",
			rootClassName: m?.sidebar,
			children: [
				/* @__PURE__ */ o($r, { children: [/* @__PURE__ */ a(si, { children: /* @__PURE__ */ a(ci, { children: t === null ? /* @__PURE__ */ a("div", {
					className: "flex h-12 items-center gap-2 p-2 text-sm",
					children: e
				}) : /* @__PURE__ */ a(ui, {
					size: "lg",
					asChild: !0,
					children: /* @__PURE__ */ a(Z, {
						href: t,
						children: e
					})
				}) }) }), n && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				})] }),
				/* @__PURE__ */ a(ni, { children: s.map((e, t) => /* @__PURE__ */ o(ri, { children: [e.label && /* @__PURE__ */ a(ii, { children: e.label }), /* @__PURE__ */ a(oi, { children: /* @__PURE__ */ a(si, { children: e.items.map((e) => /* @__PURE__ */ o(ci, { children: [/* @__PURE__ */ a(ui, {
					asChild: !0,
					isActive: c === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(Z, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(fi, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				(l || r) && /* @__PURE__ */ o(ei, { children: [l && /* @__PURE__ */ a(si, { children: /* @__PURE__ */ a(ci, { children: /* @__PURE__ */ o(bn, { children: [/* @__PURE__ */ a(Sn, {
					asChild: !0,
					children: /* @__PURE__ */ o(ui, {
						size: "lg",
						className: "data-[state=open]:bg-sidebar-accent",
						children: [
							/* @__PURE__ */ a(xt, {
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
							/* @__PURE__ */ a(oe, { className: "ml-auto size-4" })
						]
					})
				}), /* @__PURE__ */ o(Cn, {
					side: "top",
					align: "start",
					className: "w-(--radix-dropdown-menu-trigger-width) min-w-56",
					children: [
						/* @__PURE__ */ o(kn, {
							className: "font-normal",
							children: [/* @__PURE__ */ a("div", {
								className: "text-sm font-medium",
								children: l.name
							}), /* @__PURE__ */ a("div", {
								className: "text-xs text-muted-foreground",
								children: l.email
							})]
						}),
						u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(An, {}), u] }),
						d && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(An, {}), /* @__PURE__ */ o(Tn, {
							onSelect: d,
							children: [/* @__PURE__ */ a(P, {}), _.signOut]
						})] })
					]
				})] }) }) }), r && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: r
				})] })
			]
		}),
		/* @__PURE__ */ o(Zr, { children: [/* @__PURE__ */ o("header", {
			className: U("flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl", m?.header),
			children: [
				/* @__PURE__ */ a(Yr, { className: "-ml-1" }),
				/* @__PURE__ */ a(xr, {
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
			className: U("flex flex-1 flex-col outline-none", h ? "gap-0" : "gap-6 p-4 md:p-6", m?.main),
			children: g
		})] })
	] });
}
//#endregion
//#region src/lib/preferences.ts
var go = 75, _o = 150, vo = 100, yo = [
	75,
	90,
	100,
	110,
	125,
	150
];
function bo(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function xo(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
var So = (e) => Math.min(150, Math.max(75, Math.round(e))), Co = /* @__PURE__ */ new Set(), wo, To = () => {
	if (wo === void 0) {
		let e = Number(bo(wa("zoom")));
		wo = Number.isFinite(e) && e > 0 ? So(e) : 100;
	}
	return wo;
}, Eo = (e) => {
	wo = So(e), xo(wa("zoom"), String(wo)), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(wo / 100)), Co.forEach((e) => e());
}, Do = (e) => (Co.add(e), typeof document < "u" && document.documentElement.style.setProperty("--app-zoom", String(To() / 100)), () => Co.delete(e));
function Oo() {
	return {
		zoom: e.useSyncExternalStore(Do, To, () => 100),
		setZoom: Eo
	};
}
function ko(e = Ca()) {
	return `(function(){try{var z=parseFloat(localStorage.getItem(${JSON.stringify(e)}+".zoom"));if(z>=75&&z<=150)document.documentElement.style.setProperty("--app-zoom",String(z/100))}catch(e){}})()`;
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
function Ao({ side: e, align: t = "end", className: n }) {
	let r = q().preferences, { zoom: i, setZoom: s } = Oo();
	return /* @__PURE__ */ o(bn, { children: [/* @__PURE__ */ a(Sn, {
		asChild: !0,
		children: /* @__PURE__ */ a(J, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": r.zoom,
			className: n,
			children: /* @__PURE__ */ a(be, {})
		})
	}), /* @__PURE__ */ o(Cn, {
		side: e,
		align: t,
		className: "min-w-40",
		children: [/* @__PURE__ */ a(kn, { children: r.zoom }), /* @__PURE__ */ a(Dn, {
			value: String(i),
			onValueChange: (e) => s(Number(e)),
			children: yo.map((e) => /* @__PURE__ */ a(On, {
				value: String(e),
				children: r.zoomLevel(e)
			}, e))
		})]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var jo = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function Mo({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = q().modal;
	return /* @__PURE__ */ a(un, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(hn, {
			showCloseButton: !1,
			className: U("flex max-h-[92dvh] flex-col gap-0 p-0", jo[s], c),
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(vn, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(yn, { children: r })]
					}), /* @__PURE__ */ a(pn, {
						"aria-label": u.close,
						className: "-mr-1 rounded-md p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none",
						children: /* @__PURE__ */ a(Le, {
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
var No = 0, Po = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function Fo({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: No++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: No++,
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
	return /* @__PURE__ */ o(Po.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(Io, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function Io({ pending: t, onAnswer: n }) {
	let r = q().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(Mo, {
		open: !0,
		onOpenChange: (e) => {
			e || n(c);
		},
		size: "sm",
		title: s.title,
		description: s.description,
		footer: /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(J, {
			variant: "outline",
			onClick: () => n(c),
			children: s.cancelLabel ?? r.cancel
		}), /* @__PURE__ */ a(J, {
			variant: s.danger ? "danger" : "default",
			onClick: f,
			children: s.confirmLabel ?? r.confirm
		})] }),
		children: t.kind === "prompt" && /* @__PURE__ */ o("form", {
			className: "grid gap-2",
			onSubmit: (e) => {
				e.preventDefault(), f();
			},
			children: [/* @__PURE__ */ a(Fn, {
				htmlFor: d,
				children: t.options.label ?? s.title
			}), /* @__PURE__ */ a(Y, {
				id: d,
				autoFocus: !0,
				value: l,
				placeholder: t.options.placeholder,
				onChange: (e) => u(e.target.value)
			})]
		})
	});
}
function Lo() {
	return e.useContext(Po);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function Ro({ title: e, description: t, actions: n, className: r, ...i }) {
	return /* @__PURE__ */ o("div", {
		className: U("flex flex-wrap items-start justify-between gap-4", r),
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
function zo({ icon: e, title: t, description: n, action: r, className: i, ...s }) {
	return /* @__PURE__ */ o("div", {
		className: U("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", i),
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
function Bo({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = Fe, className: s }) {
	let c = q().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(J, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(W, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(G, {
			className: "flex items-center justify-between gap-4",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(zo, {
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/error-boundary.tsx
function Vo({ reset: e }) {
	let t = q().common;
	return /* @__PURE__ */ a(Bo, {
		title: t.crashed,
		onRetry: e
	});
}
var Ho = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(Vo, {
			error: e,
			reset: this.reset
		}) : t;
	}
}, Uo = "text-xs font-medium tracking-wider text-muted-foreground uppercase";
function Wo({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: U(Uo, t),
		...n
	});
}
var Go = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function Ko({ label: e, value: t, hint: n, icon: r, change: i, trend: s, className: c, ...l }) {
	let u = q().dashboard, d = s ?? (i === void 0 || i === 0 ? "flat" : i > 0 ? "up" : "down");
	return /* @__PURE__ */ o("div", {
		"data-slot": "stat-tile",
		className: U("rounded-lg border border-[var(--surface-glass-border)] bg-[var(--surface-glass)] p-4 shadow-[var(--surface-shadow)] backdrop-blur-xl", c),
		...l,
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ a("span", {
					className: Uo,
					children: e
				}), r && /* @__PURE__ */ a(r, { className: "size-4 shrink-0 text-muted-foreground" })]
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 text-2xl font-semibold tabular-nums",
				children: t
			}),
			(n || i !== void 0) && /* @__PURE__ */ o("div", {
				className: U("mt-1 flex flex-wrap gap-x-1 text-xs", Go[d]),
				children: [i !== void 0 && /* @__PURE__ */ a("span", {
					className: "font-medium tabular-nums",
					children: u.change(i)
				}), n && /* @__PURE__ */ a("span", { children: n })]
			})
		]
	});
}
//#endregion
//#region src/blocks/dashboard/dashboard.tsx
function qo({ title: e, description: t, actions: n, stats: r, children: i, className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dashboard",
		className: U("flex flex-col gap-6", s),
		...c,
		children: [
			/* @__PURE__ */ a(Ro, {
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
function Jo({ title: t, description: n, action: r, span: i = "half", className: s, children: c, ...l }) {
	let u = e.useId();
	return /* @__PURE__ */ o("section", {
		"data-slot": "dashboard-panel",
		"aria-labelledby": u,
		className: U("flex min-w-0 flex-col gap-3 rounded-lg border border-[var(--surface-glass-border)] bg-card p-4", i === "full" && "lg:col-span-2", s),
		...l,
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ o("div", {
				className: "grid gap-0.5",
				children: [/* @__PURE__ */ a("h2", {
					id: u,
					className: "text-sm font-semibold",
					children: t
				}), n && /* @__PURE__ */ a("p", {
					className: "text-xs text-muted-foreground",
					children: n
				})]
			}), r && /* @__PURE__ */ a("div", {
				className: "text-sm",
				children: r
			})]
		}), c]
	});
}
function Yo({ items: e, className: t, ...n }) {
	let r = q();
	return e.length === 0 ? /* @__PURE__ */ a("p", {
		className: "py-4 text-sm text-muted-foreground",
		children: r.dashboard.noActivity
	}) : /* @__PURE__ */ a("ol", {
		"data-slot": "activity-list",
		className: U("flex flex-col divide-y", t),
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
function Xo(e, t) {
	if (e && t && e > t) throw Error("DatePicker: min is after max, " + e.toISOString() + " > " + t.toISOString());
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}
function Zo({ empty: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ o(J, {
		variant: "outline",
		"data-empty": e,
		className: U("justify-start font-normal data-[empty=true]:text-muted-foreground", n),
		...r,
		children: [/* @__PURE__ */ a(C, { "aria-hidden": !0 }), /* @__PURE__ */ a("span", {
			className: "truncate",
			children: t
		})]
	});
}
function Qo({ value: t, onChange: n, placeholder: r, disabled: i, min: s, max: c, className: l, ...u }) {
	let d = q(), [f, p] = e.useState(!1);
	return /* @__PURE__ */ o(tr, {
		open: f,
		onOpenChange: p,
		children: [/* @__PURE__ */ a(nr, {
			asChild: !0,
			children: /* @__PURE__ */ a(Zo, {
				empty: !t,
				disabled: i,
				className: l,
				...u,
				children: t ? d.format.date(t) : r ?? d.datePicker.placeholder
			})
		}), /* @__PURE__ */ a(rr, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ a(Ut, {
				mode: "single",
				selected: t,
				defaultMonth: t,
				disabled: Xo(s, c),
				onSelect: (e) => {
					n(e), p(!1);
				}
			})
		})]
	});
}
var $o = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function es(e) {
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
				from: $o(e, -6),
				to: e
			})
		},
		{
			label: e.last30Days,
			range: (e) => ({
				from: $o(e, -29),
				to: e
			})
		},
		{
			label: e.last90Days,
			range: (e) => ({
				from: $o(e, -89),
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
function ts({ value: t, onChange: n, presets: r, placeholder: i, disabled: s, min: c, max: l, className: u, ...d }) {
	let f = q(), p = Nr(), [m, h] = e.useState(!1), g = r === !1 ? [] : r ?? es(f.datePicker), _ = t?.from ? t.to ? `${f.format.date(t.from)}${f.datePicker.rangeSeparator}${f.format.date(t.to)}` : f.format.date(t.from) : i ?? f.datePicker.rangePlaceholder;
	return /* @__PURE__ */ o(tr, {
		open: m,
		onOpenChange: h,
		children: [/* @__PURE__ */ a(nr, {
			asChild: !0,
			children: /* @__PURE__ */ a(Zo, {
				empty: !t?.from,
				disabled: s,
				className: u,
				...d,
				children: _
			})
		}), /* @__PURE__ */ a(rr, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ o("div", {
				className: "flex flex-col sm:flex-row",
				children: [g.length > 0 && /* @__PURE__ */ a("div", {
					className: "flex flex-wrap gap-1 border-b p-2 sm:w-36 sm:flex-col sm:flex-nowrap sm:border-r sm:border-b-0",
					children: g.map((e) => /* @__PURE__ */ a(J, {
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
					children: [/* @__PURE__ */ a(Ut, {
						mode: "range",
						selected: t,
						defaultMonth: t?.from,
						numberOfMonths: p ? 1 : 2,
						disabled: Xo(c, l),
						onSelect: n
					}), t?.from && /* @__PURE__ */ a("div", {
						className: "flex justify-end border-t p-2",
						children: /* @__PURE__ */ a(J, {
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
function ns(e, { accept: t, maxSize: n, maxFiles: r }) {
	if (n !== void 0 && !(n > 0)) throw Error("validateFiles: maxSize must be a positive number of bytes");
	if (r !== void 0 && !(Number.isInteger(r) && r >= 0)) throw Error("validateFiles: maxFiles must be a whole number, 0 or more");
	let i = (t ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean), a = [], o = [];
	for (let t of e) i.length > 0 && !i.some((e) => rs(t, e)) ? o.push({
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
function rs(e, t) {
	if (t.startsWith(".")) return e.name.toLowerCase().endsWith(t);
	let n = e.type.toLowerCase();
	return t.endsWith("/*") ? n.startsWith(t.slice(0, -1)) : n === t;
}
//#endregion
//#region src/blocks/upload/file-drop.tsx
function is({ accept: t, maxSize: n, maxFiles: r, onFiles: i, onReject: s, disabled: c, className: l, id: u }) {
	let d = q(), [f, p] = e.useState(!1), [m, h] = e.useState([]);
	function g(e) {
		if (!e || e.length === 0) return;
		let a = ns(Array.from(e), {
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
		className: U("grid gap-2", l),
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
				/* @__PURE__ */ a(Ne, {
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
function as({ items: e, onRemove: t, onRetry: n, className: r, ...i }) {
	let s = q();
	return e.length === 0 ? null : /* @__PURE__ */ a("ul", {
		"data-slot": "upload-list",
		className: U("grid gap-2", r),
		...i,
		children: e.map((e) => /* @__PURE__ */ o("li", {
			className: "flex items-center gap-3 rounded-md border bg-card px-3 py-2",
			children: [
				/* @__PURE__ */ a(os, { item: e }),
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
						e.status === "uploading" && /* @__PURE__ */ a(cr, {
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
				e.status === "failed" && n && /* @__PURE__ */ a(J, {
					variant: "ghost",
					size: "icon",
					"aria-label": s.upload.retry,
					onClick: () => n(e.id),
					children: /* @__PURE__ */ a(S, {})
				}),
				t && /* @__PURE__ */ a(J, {
					variant: "ghost",
					size: "icon",
					"aria-label": s.upload.remove(e.name),
					onClick: () => t(e.id),
					children: /* @__PURE__ */ a(Le, {})
				})
			]
		}, e.id))
	});
}
function os({ item: e }) {
	switch (e.status) {
		case "uploading": return /* @__PURE__ */ a(he, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-muted-foreground"
		});
		case "done": return /* @__PURE__ */ a(k, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(Fe, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-danger-fg"
		});
		default: throw Error("UploadList: unknown status " + JSON.stringify(e));
	}
}
//#endregion
//#region src/blocks/upload/upload-slots.tsx
function ss({ slots: t, value: n, onFile: r, onReject: i, onRemove: s, onRetry: c, disabled: l, className: u }) {
	let d = q(), f = e.useId(), p = new Set(t.map((e) => e.id));
	if (p.size !== t.length) throw Error("UploadSlots: slot ids must be unique");
	let m = Object.keys(n).filter((e) => !p.has(e));
	if (m.length) throw Error("UploadSlots: value has keys no slot declares: " + m.join(", "));
	return /* @__PURE__ */ a("div", {
		"data-slot": "upload-slots",
		className: U("grid gap-4 sm:grid-cols-2", u),
		children: t.map((e) => {
			let t = f + e.id, u = n[e.id];
			return /* @__PURE__ */ o("div", {
				className: "grid content-start gap-2",
				children: [/* @__PURE__ */ o("div", {
					className: "grid gap-0.5",
					children: [/* @__PURE__ */ o(Fn, {
						htmlFor: t,
						children: [e.label, e.optional && /* @__PURE__ */ a("span", {
							className: "font-normal text-muted-foreground",
							children: d.upload.optional
						})]
					}), e.description && /* @__PURE__ */ a("p", {
						className: "text-xs text-muted-foreground",
						children: e.description
					})]
				}), u ? /* @__PURE__ */ a(as, {
					items: [u],
					onRemove: s && (() => s(e.id)),
					onRetry: c && (() => c(e.id))
				}) : /* @__PURE__ */ a(is, {
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
var cs = new Intl.NumberFormat("pt-PT"), $ = (e) => cs.format(e), ls = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), us = new Intl.DateTimeFormat("pt-PT", { dateStyle: "medium" }), ds = new Intl.DateTimeFormat("pt-PT", {
	dateStyle: "medium",
	timeStyle: "short"
}), fs = {
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
		date: (e) => us.format(e),
		dateTime: (e) => ds.format(e),
		fileSize: (e) => kt(e, $)
	},
	dashboard: {
		change: (e) => ls.format(e / 100),
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
			...dt,
			options: {
				...dt.options,
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
export { Yo as ActivityList, W as Alert, G as AlertDescription, pt as AlertTitle, ho as AppShell, Ri as AuthLayout, ht as Avatar, vt as AvatarBadge, _t as AvatarFallback, yt as AvatarGroup, bt as AvatarGroupCount, gt as AvatarImage, St as AvatarStack, wt as Badge, Ft as Breadcrumb, Vt as BreadcrumbEllipsis, Lt as BreadcrumbItem, Rt as BreadcrumbLink, It as BreadcrumbList, zt as BreadcrumbPage, Bt as BreadcrumbSeparator, J as Button, Ut as Calendar, Wt as CalendarDayButton, tn as Card, on as CardAction, sn as CardContent, an as CardDescription, cn as CardFooter, nn as CardHeader, rn as CardTitle, Jt as ChartContainer, Qt as ChartLegend, $t as ChartLegendContent, Yt as ChartStyle, Xt as ChartTooltip, Zt as ChartTooltipContent, ln as Checkbox, so as ChipPicker, ia as Combobox, na as CommandMenu, Fo as ConfirmProvider, qo as Dashboard, Jo as DashboardPanel, Xa as DataTable, Qo as DatePicker, ts as DateRangePicker, un as Dialog, pn as DialogClose, hn as DialogContent, yn as DialogDescription, _n as DialogFooter, gn as DialogHeader, mn as DialogOverlay, fn as DialogPortal, vn as DialogTitle, dn as DialogTrigger, bn as DropdownMenu, En as DropdownMenuCheckboxItem, Cn as DropdownMenuContent, wn as DropdownMenuGroup, Tn as DropdownMenuItem, kn as DropdownMenuLabel, xn as DropdownMenuPortal, Dn as DropdownMenuRadioGroup, On as DropdownMenuRadioItem, An as DropdownMenuSeparator, jn as DropdownMenuShortcut, Mn as DropdownMenuSub, Pn as DropdownMenuSubContent, Nn as DropdownMenuSubTrigger, Sn as DropdownMenuTrigger, zo as EmptyState, Ho as ErrorBoundary, Bo as ErrorState, is as FileDrop, Ki as ForgotPasswordForm, In as Form, Un as FormControl, Wn as FormDescription, Rn as FormField, Vn as FormItem, Hn as FormLabel, Gn as FormMessage, Y as Input, Ka as Kanban, co as LIST_PARAMS, Fn as Label, Z as Link, Bi as LinkProvider, Hi as LoginForm, Mo as Modal, da as NONE, Ro as PageHeader, Jn as Pagination, Yn as PaginationContent, er as PaginationEllipsis, Xn as PaginationItem, Zn as PaginationLink, $n as PaginationNext, Qn as PaginationPrevious, tr as Popover, ir as PopoverAnchor, rr as PopoverContent, sr as PopoverDescription, ar as PopoverHeader, or as PopoverTitle, nr as PopoverTrigger, cr as Progress, lr as RadioGroup, ur as RadioGroupItem, Wi as RegisterForm, ra as SearchTrigger, Wo as SectionLabel, dr as Select, hr as SelectContent, fr as SelectGroup, _r as SelectItem, gr as SelectLabel, br as SelectScrollDownButton, yr as SelectScrollUpButton, vr as SelectSeparator, mr as SelectTrigger, pr as SelectValue, xr as Separator, Sr as Sheet, wr as SheetClose, Dr as SheetContent, jr as SheetDescription, kr as SheetFooter, Or as SheetHeader, Ar as SheetTitle, Cr as SheetTrigger, Jr as Sidebar, ni as SidebarContent, ei as SidebarFooter, ri as SidebarGroup, ai as SidebarGroupAction, oi as SidebarGroupContent, ii as SidebarGroupLabel, $r as SidebarHeader, Qr as SidebarInput, Zr as SidebarInset, si as SidebarMenu, di as SidebarMenuAction, fi as SidebarMenuBadge, ui as SidebarMenuButton, ci as SidebarMenuItem, pi as SidebarMenuSkeleton, mi as SidebarMenuSub, gi as SidebarMenuSubButton, hi as SidebarMenuSubItem, qr as SidebarProvider, Xr as SidebarRail, ti as SidebarSeparator, Yr as SidebarTrigger, Pr as Skeleton, _i as Slider, Ko as StatTile, yi as Switch, bi as Table, Si as TableBody, Ei as TableCaption, Ti as TableCell, Ci as TableFooter, wi as TableHead, xi as TableHeader, X as TableRow, Di as Tabs, ji as TabsContent, ki as TabsList, Ai as TabsTrigger, Mi as Textarea, vi as Toaster, Pi as Toggle, Ii as ToggleGroup, Li as ToggleGroupItem, Ir as Tooltip, Rr as TooltipContent, Fr as TooltipProvider, Lr as TooltipTrigger, Pt as UIStringsProvider, as as UploadList, ss as UploadSlots, xt as UserAvatar, Ta as VIEW_ICON_NAMES, vo as ZOOM_DEFAULT, _o as ZOOM_MAX, go as ZOOM_MIN, yo as ZOOM_STEPS, Ao as ZoomMenu, ko as antiFlashScript, Ct as badgeVariants, Ht as buttonVariants, va as chipLabel, U as cn, fa as compare, aa as csvDelimiter, ca as csvValue, Ya as dataTableFeatures, es as defaultRangePresets, At as defaultStrings, ua as downloadCsv, _a as facetText, Gi as forgotPasswordSchema, mt as initials, qn as inputVariants, pa as isBlankFilter, ma as labelsOf, po as listUrlOf, mo as listUrlProps, Vi as loginSchema, ga as named, lo as parseListUrl, fs as ptPT, ha as rank, Ui as registerSchema, fo as sameListUrl, Sa as setStoragePrefix, wa as storageKey, Ca as storagePrefix, Q as str, Oi as tabsListVariants, la as toCsv, uo as toListUrl, ya as toQuery, qe as toast, Ni as toggleVariants, Lo as useConfirm, ja as useDataTableViews, zn as useFormField, Nr as useIsMobile, Kr as useSidebar, q as useStrings, Oo as useZoom, ns as validateFiles };
