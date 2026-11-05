import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, Progress as p, RadioGroup as m, Select as h, Separator as g, Slider as _, Slot as v, Switch as y, Tabs as b, Toggle as x, ToggleGroup as S, Tooltip as C } from "radix-ui";
import { AppleLogoIcon as w, ArrowClockwiseIcon as T, ArrowCounterClockwiseIcon as E, ArrowDownIcon as D, ArrowUpIcon as ee, ArrowsDownUpIcon as te, ArrowsOutCardinalIcon as ne, CalendarBlankIcon as re, CalendarDotsIcon as ie, CaretDownIcon as O, CaretDownIcon as k, CaretLeftIcon as ae, CaretLeftIcon as oe, CaretRightIcon as se, CaretRightIcon as ce, CaretRightIcon as le, CaretUpIcon as A, ChartBarHorizontalIcon as ue, CheckCircleIcon as j, CheckIcon as de, CheckIcon as M, CircleDashedIcon as N, CircleIcon as fe, ClockIcon as pe, CopyIcon as me, DesktopIcon as he, DotsThreeIcon as ge, DotsThreeIcon as _e, DotsThreeIcon as ve, DownloadSimpleIcon as ye, EnvelopeSimpleIcon as P, EyeIcon as be, FileIcon as F, FunnelIcon as xe, FunnelSimpleIcon as Se, GearSixIcon as Ce, GithubLogoIcon as we, GoogleLogoIcon as Te, InfoIcon as Ee, ListBulletsIcon as De, MagnifyingGlassIcon as Oe, MagnifyingGlassIcon as ke, MinusIcon as I, MoonIcon as Ae, PencilSimpleIcon as je, PlusIcon as Me, ProhibitIcon as Ne, RowsIcon as Pe, SidebarSimpleIcon as Fe, SignOutIcon as Ie, SortAscendingIcon as Le, SpinnerIcon as Re, SquaresFourIcon as ze, StarIcon as Be, SunIcon as Ve, TableIcon as He, TagIcon as Ue, TrashIcon as We, UploadSimpleIcon as Ge, UsersIcon as Ke, WarningCircleIcon as qe, WarningIcon as Je, WindowsLogoIcon as L, XCircleIcon as Ye, XIcon as R, XIcon as Xe } from "@phosphor-icons/react";
import { enUS as Ze } from "react-day-picker/locale/en-US";
import { DayPicker as Qe, getDefaultClassNames as $e } from "react-day-picker";
import * as et from "recharts";
import { Controller as tt, FormProvider as nt, useForm as rt, useFormContext as it, useFormState as at } from "react-hook-form";
import { Toaster as ot, toast as st } from "sonner";
import { zodResolver as ct } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Command as B } from "cmdk";
import { columnFacetingFeature as V, columnFilteringFeature as lt, columnGroupingFeature as ut, columnVisibilityFeature as dt, createExpandedRowModel as ft, createFacetedRowModel as pt, createFacetedUniqueValues as mt, createFilteredRowModel as ht, createGroupedRowModel as gt, createPaginatedRowModel as _t, createSortedRowModel as vt, globalFilteringFeature as yt, rowExpandingFeature as bt, rowPaginationFeature as xt, rowSortingFeature as St, tableFeatures as Ct, useTable as wt } from "@tanstack/react-table";
import { useVirtualizer as Tt } from "@tanstack/react-virtual";
import { pt as H } from "react-day-picker/locale/pt";
//#region src/lib/utils.ts
function U(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var Et = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
function Dt({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert",
		role: "alert",
		className: U(Et({ variant: t }), e),
		...n
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: U("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: U("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function At(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function jt({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: U("group/avatar relative flex size-8 shrink-0 rounded-full border border-border bg-muted select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function Mt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: U("aspect-square size-full rounded-full object-cover", e),
		...t
	});
}
function Nt({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: U("flex size-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground group-data-[size=lg]/avatar:text-sm group-data-[size=sm]/avatar:text-[0.625rem]", e),
		...t
	});
}
function Pt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: U("absolute -right-0.5 -bottom-0.5 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-card select-none", "group-data-[size=sm]/avatar:size-2.5 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-3 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3.5 group-data-[size=lg]/avatar:[&>svg]:size-2.5", e),
		...t
	});
}
function Ft({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: U("group/avatar-group flex -space-x-1.5 has-data-[size=sm]:-space-x-1 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card", e),
		...t
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: U("relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground tabular-nums ring-2 ring-card group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:text-sm group-has-data-[size=sm]/avatar-group:text-[0.625rem] group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3.5", e),
		...t
	});
}
var Lt = [
	"bg-slot-1-subtle text-slot-1",
	"bg-slot-2-subtle text-slot-2",
	"bg-slot-3-subtle text-slot-3",
	"bg-slot-4-subtle text-slot-4",
	"bg-slot-5-subtle text-slot-5"
];
function Rt(e) {
	let t = 0;
	for (let n of e) t = t * 31 + n.codePointAt(0) | 0;
	return Lt[Math.abs(t) % Lt.length];
}
function zt({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(jt, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(Mt, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(Nt, {
			className: Rt(e),
			children: n ?? At(e)
		})]
	});
}
function Bt({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(Ft, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(zt, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(It, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var Vt = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3.5", {
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
function Ht({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? v.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: U(Vt({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/lib/strings.tsx
var Ut = new Intl.NumberFormat(), W = (e) => Ut.format(e), Wt = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), Gt = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 0
}), Kt = new Intl.DateTimeFormat(void 0, {
	month: "long",
	year: "numeric"
}), qt = new Intl.DateTimeFormat(void 0, { month: "long" }), Jt = new Intl.DateTimeFormat(void 0, { weekday: "short" }), Yt = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }), Xt = new Intl.DateTimeFormat(void 0, {
	dateStyle: "medium",
	timeStyle: "short"
});
function Zt(e, t, n = [
	"B",
	"KB",
	"MB",
	"GB"
]) {
	let r = e, i = 0;
	for (; r >= 1024 && i < n.length - 1;) r /= 1024, i++;
	return `${t(i === 0 || r >= 10 ? Math.round(r) : Math.round(r * 10) / 10)}\u00A0${n[i]}`;
}
var Qt = {
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
		confirm: "Confirm",
		loading: "Loading…"
	},
	auth: {
		email: "Email",
		emailPlaceholder: "you@company.com",
		password: "Password",
		forgotPassword: "Forgot password?",
		signIn: "Sign in",
		or: "or",
		continueWith: (e) => `Continue with ${e}`,
		noAccount: "No account?",
		createOne: "Create one",
		registerTitle: "Create an account",
		name: "Name",
		namePlaceholder: "Jay Oak",
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
		passwordsDoNotMatch: "Passwords do not match",
		phone: "Phone",
		optional: "(optional)",
		phoneRequired: "Enter your phone number",
		invalidPhone: "Enter a valid phone number",
		consentRequired: "You need to accept this to continue."
	},
	shell: {
		signOut: "Sign out",
		skipToContent: "Skip to content",
		accountMenu: "Account menu"
	},
	preferences: {
		title: "Preferences",
		appearance: "Appearance",
		themes: {
			light: "Light",
			dark: "Dark",
			system: "System"
		},
		language: "Language",
		zoom: "Zoom",
		zoomIn: "Zoom in",
		zoomOut: "Zoom out",
		zoomPercent: "Zoom, percent",
		percentSign: "%",
		resetZoom: `Reset to ${W(100)}%`
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
		timeline: "Timeline",
		calendar: "Calendar",
		timelineScale: "Zoom",
		scales: {
			week: "Week",
			month: "Month",
			quarter: "Quarter"
		},
		undated: (e) => `${W(e)} without a date`,
		moreItems: (e) => `+${W(e)} more`,
		previousMonth: "Previous month",
		nextMonth: "Next month",
		previousYear: "Previous year",
		nextYear: "Next year",
		calendarScale: "Calendar scale",
		calendarScales: {
			month: "Month",
			year: "Year"
		},
		rescheduleHint: "Left and right arrows move it by a day. With Shift they move the end.",
		calendarRescheduleHint: "Arrow keys move it: left and right by a day, up and down by a week.",
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
		editCell: (e, t) => t ? `${e} for ${t}` : e,
		loadingMore: "Loading more…",
		noMatches: "Nothing matches these conditions.",
		clearAllFilters: "Clear filters",
		viewNameRequired: "Give the view a name.",
		rowCount: (e) => e === 1 ? "1 row" : `${W(e)} rows`,
		pageOf: (e, t) => `Page ${W(e)} of ${W(t)}`,
		previousPage: "Previous",
		nextPage: "Next",
		addRow: "Add row",
		saveRow: "Save row",
		addRowFailed: "That row did not save. Try again."
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
		commandDescription: "Search for a command to run…",
		notifications: "Notifications",
		closeNotification: "Dismiss notification",
		chooseFile: "Choose a file",
		filesChosen: (e) => `${W(e)} files`
	},
	format: {
		number: W,
		date: (e) => Yt.format(e),
		dateTime: (e) => Xt.format(e),
		fileSize: (e) => Zt(e, W),
		percent: (e) => Gt.format(e / 100),
		month: (e) => Kt.format(e),
		monthName: (e) => qt.format(e),
		weekday: (e) => Jt.format(e)
	},
	dashboard: {
		change: (e) => Wt.format(e / 100),
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
		required: "Pick a date.",
		locale: Ze
	},
	editable: {
		edit: (e) => e ? `Edit ${e}` : "Edit",
		save: "Save",
		required: "This can't be empty.",
		saveFailed: "That did not save. Try again."
	},
	copy: {
		copy: (e) => e ? `Copy ${e}` : "Copy",
		copied: "Copied",
		failed: "Couldn't copy. Select the text and copy it by hand."
	},
	upload: {
		dropHere: "Drop files here or",
		dropFile: "Drop a file here or",
		browse: "browse",
		images: "Images",
		limits: ({ accept: e, maxSize: t, maxFiles: n }) => [
			e,
			t && (n === 1 ? `up to ${t}` : `up to ${t} each`),
			n && n > 1 && `${W(n)} files at most`
		].filter(Boolean).join(" · "),
		tooLarge: (e, t) => `${e} is larger than ${t}.`,
		wrongType: (e) => `${e} is not a type this accepts.`,
		tooMany: (e) => e === 1 ? "Only one file." : `${W(e)} files at most.`,
		remove: (e) => `Remove ${e}`,
		uploading: "Uploading…",
		failed: "Upload failed",
		retry: "Retry",
		optional: "Optional",
		thisFileIs: "This file is",
		pickDocument: "Choose a document",
		documents: "Documents",
		uploadedCount: (e, t) => `${W(e)} of ${W(t)}`,
		missing: "Not uploaded yet",
		allIn: "Every document is in.",
		removeConfirm: (e) => `Remove ${e}? This cannot be undone.`,
		removeAction: "Remove",
		download: (e) => `Download ${e}`,
		downloading: (e) => `Downloading ${e}…`,
		downloadFailed: "The download failed. Try again.",
		uploadedOn: (e) => `Uploaded ${Yt.format(e)}`
	}
};
function $t(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function en(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) $t(n, e, t, r);
	return n;
}
var tn = e.createContext(Qt);
function nn({ strings: t, children: n }) {
	let r = e.useContext(tn), i = e.useMemo(() => en(r, t), [r, t]);
	return /* @__PURE__ */ a(tn.Provider, {
		value: i,
		children: n
	});
}
function G() {
	return e.useContext(tn);
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function rn({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": G().ui.breadcrumb,
		"data-slot": "breadcrumb",
		...e
	});
}
function an({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: U("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function on({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: U("inline-flex items-center gap-1.5", e),
		...t
	});
}
function sn({ asChild: e, className: t, ...n }) {
	let r = e ? v.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: U("transition-colors hover:text-foreground", t),
		...n
	});
}
function cn({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: U("font-normal text-foreground", e),
		...t
	});
}
function ln({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: U("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(ce, {})
	});
}
function un({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: U("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(_e, {
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
var K = t("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98] active:brightness-90", {
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
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3.5",
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
		className: U(K({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
//#endregion
//#region src/components/ui/calendar.tsx
function dn({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", formatters: o, components: s, locale: c, ...l }) {
	let u = $e(), d = G().datePicker.locale, f = c ?? d;
	return /* @__PURE__ */ a(Qe, {
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
			button_previous: U(K({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: U(K({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
			month_caption: U("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", u.month_caption),
			dropdowns: U("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", u.dropdowns),
			dropdown_root: U("relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[1.5px] has-focus:ring-ring/80", u.dropdown_root),
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
			Chevron: ({ className: e, orientation: t, ...n }) => a(t === "left" ? oe : t === "right" ? le : k, {
				className: U("size-4", e),
				...n
			}),
			DayButton: fn,
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
function fn({ className: t, day: n, modifiers: r, ...i }) {
	let o = $e(), s = e.useRef(null);
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
		className: U("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[1.5px] group-data-[focused=true]/day:ring-ring/80 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...i
	});
}
//#endregion
//#region src/lib/surfaces.ts
var pn = "border bg-popover text-popover-foreground shadow-overlay", mn = "rounded-lg border bg-card text-card-foreground", hn = {
	base: "fixed z-50 flex flex-col bg-popover text-popover-foreground shadow-overlay transition ease-settle data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-250",
	right: "inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
	left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
	bottom: "inset-x-0 bottom-0 max-h-[85dvh] rounded-t-lg border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
}, gn = "fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", _n = {
	width: 320,
	height: 200
}, vn = e.createContext(null);
function yn() {
	let t = e.useContext(vn);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function bn({ id: t, className: n, children: r, config: i, initialDimension: s = _n, ...c }) {
	let l = e.useId(), u = `chart-${t ?? l.replace(/:/g, "")}`;
	return /* @__PURE__ */ a(vn.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ o("div", {
			"data-slot": "chart",
			"data-chart": u,
			className: U("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...c,
			children: [/* @__PURE__ */ a(xn, {
				id: u,
				config: i
			}), /* @__PURE__ */ a(et.ResponsiveContainer, {
				initialDimension: s,
				children: r
			})]
		})
	});
}
var xn = ({ id: e, config: t }) => {
	let n = Object.entries(t).flatMap(([e, t]) => t.color ? ["--color-" + e + ": " + t.color + ";"] : []);
	return n.length ? /* @__PURE__ */ a("style", { dangerouslySetInnerHTML: { __html: "[data-chart=" + e + "] {" + n.join(" ") + "}" } }) : null;
}, Sn = et.Tooltip;
function Cn({ active: t, payload: n, className: r, indicator: s = "dot", hideLabel: c = !1, hideIndicator: l = !1, label: u, labelFormatter: d, labelClassName: f, formatter: p, color: m, nameKey: h, labelKey: g }) {
	let { config: _ } = yn(), v = G().format, y = e.useMemo(() => {
		if (c || !n?.length) return null;
		let [e] = n, t = `${g ?? e?.dataKey ?? e?.name ?? "value"}`, r = En(_, e, t), i = !g && typeof u == "string" ? _[u]?.label ?? u : r?.label;
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
		className: U(pn, "grid min-w-[8rem] items-start gap-1.5 rounded-lg px-2.5 py-1.5 text-xs", r),
		children: [b ? null : y, /* @__PURE__ */ a("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${h ?? e.name ?? e.dataKey ?? "value"}`, r = En(_, e, n), c = m ?? e.payload?.fill ?? e.color;
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
var wn = et.Legend;
function Tn({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: s } = yn();
	return n?.length ? /* @__PURE__ */ a("div", {
		className: U("flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, c = En(s, e, r);
			return /* @__PURE__ */ o("div", {
				className: U("flex items-center gap-1.5 whitespace-nowrap text-muted-foreground [&>svg]:size-3.5"),
				children: [c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), c?.label]
			}, n);
		})
	}) : null;
}
function En(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region src/components/ui/card.tsx
function Dn({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		"data-variant": t,
		className: U(mn, "flex flex-col gap-6 py-6", t === "glass" && "border-[var(--surface-glass-border)] bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl", e),
		...n
	});
}
function On({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: U("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: U("leading-none font-semibold", e),
		...t
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: U("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Mn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: U("px-6", e),
		...t
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: U("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: U("peer relative size-4 shrink-0 rounded-xs border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(M, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function Fn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function In({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Ln({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Rn({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function zn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: U(gn, e),
		...t
	});
}
function Bn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(Ln, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(zn, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: U(pn, "fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg p-6 duration-250 ease-settle outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-md p-3.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 focus-visible:outline-hidden disabled:pointer-events-none sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a(Xe, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: G().ui.close
				})]
			})]
		})]
	});
}
function Vn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: U("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Hn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dialog-footer",
		className: U("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
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
function Un({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: U("text-base leading-none font-semibold", e),
		...t
	});
}
function Wn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Gn({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Kn({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function qn({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Jn({ className: e, align: t = "start", sideOffset: n = 4, collisionPadding: r = 16, ...i }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		align: t,
		sideOffset: n,
		collisionPadding: r,
		className: U(pn, "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...i
	}) });
}
function Yn({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Xn({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: U("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger-subtle data-[variant=destructive]:focus:text-danger-fg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function Zn({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(M, { className: "size-4" }) })
		}), t]
	});
}
function Qn({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function $n({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function er({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: U("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function tr({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: U("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: U("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function rr({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function ir({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: U("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(le, { className: "ml-auto size-4" })]
	});
}
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: U(pn, "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function or({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: U("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var sr = nt, cr = e.createContext({}), lr = ({ ...e }) => /* @__PURE__ */ a(cr.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(tt, { ...e })
}), ur = () => {
	let t = e.useContext(cr), n = e.useContext(dr);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = it(), i = at({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, dr = e.createContext({});
function fr({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(dr.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: U("grid gap-2", t),
			...n
		})
	});
}
function pr({ className: e, ...t }) {
	let { error: n, formItemId: r } = ur();
	return /* @__PURE__ */ a(or, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: U("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function mr({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = ur();
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function hr({ className: e, ...t }) {
	let { formDescriptionId: n } = ur();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: U("text-sm text-muted-foreground", e),
		...t
	});
}
function gr({ className: e, ...t }) {
	let { error: n, formMessageId: r } = ur(), i = n ? String(n?.message ?? "") : t.children;
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
var _r = "border border-input bg-field focus-visible:border-ring", vr = {
	ghost: "rounded-md border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, yr = t(U("w-full min-w-0 rounded-md py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[1.5px] focus-visible:ring-ring/80", "aria-invalid:border-destructive aria-invalid:ring-destructive/20"), {
	variants: {
		variant: {
			default: _r,
			ghost: vr.ghost,
			cell: `px-2 ${vr.cell}`
		},
		size: {
			default: "h-9 px-3",
			sm: "h-8 px-2.5"
		}
	},
	compoundVariants: [{
		variant: "cell",
		className: "h-8 px-2"
	}],
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function J({ className: e, type: t, variant: n, size: r, ...i }) {
	return t === "file" ? /* @__PURE__ */ a(br, {
		className: e,
		variant: n,
		size: r,
		...i
	}) : /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		"data-size": r ?? "default",
		className: U(yr({
			variant: n,
			size: r
		}), e),
		...i
	});
}
function br({ className: t, variant: n, size: r, onChange: i, disabled: s, ...c }) {
	let l = G().ui, [u, d] = e.useState([]), f = u.length === 0 ? l.chooseFile : u.length === 1 ? u[0] : l.filesChosen(u.length);
	return /* @__PURE__ */ o("label", {
		"data-slot": "input",
		"data-variant": n ?? "default",
		"data-size": r ?? "default",
		"data-disabled": s || void 0,
		className: U(yr({
			variant: n,
			size: r
		}), "flex cursor-pointer items-center gap-2 pl-1.5", "focus-within:border-ring focus-within:ring-[1.5px] focus-within:ring-ring/80", "has-[[aria-invalid=true]]:border-destructive", "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", t),
		children: [
			/* @__PURE__ */ a("span", {
				"aria-hidden": !0,
				className: U("flex shrink-0 items-center justify-center rounded-sm bg-primary-button text-primary-button-foreground", r === "sm" ? "size-5" : "size-6"),
				children: /* @__PURE__ */ a(Ge, { className: "size-3.5" })
			}),
			/* @__PURE__ */ a("span", {
				className: U("min-w-0 truncate text-sm", u.length === 0 && "text-muted-foreground"),
				children: f
			}),
			/* @__PURE__ */ a("input", {
				type: "file",
				className: "sr-only",
				disabled: s,
				onChange: (e) => {
					d(Array.from(e.target.files ?? [], (e) => e.name)), i?.(e);
				},
				...c
			})
		]
	});
}
//#endregion
//#region src/components/ui/pagination.tsx
function xr({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": G().ui.pagination,
		"data-slot": "pagination",
		className: U("mx-auto flex w-full justify-center", e),
		...t
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: U("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function Cr({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function wr({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ a("a", {
		"aria-current": t ? "page" : void 0,
		"data-slot": "pagination-link",
		"data-active": t,
		className: U(K({
			variant: t ? "outline" : "ghost",
			size: n
		}), e),
		...r
	});
}
function Tr({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(wr, {
		"aria-label": n.goToPreviousPage,
		size: "default",
		className: U("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(oe, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.previous
		})]
	});
}
function Er({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(wr, {
		"aria-label": n.goToNextPage,
		size: "default",
		className: U("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.next
		}), /* @__PURE__ */ a(le, {})]
	});
}
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: U("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(ve, {
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
function Or({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function kr({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function Y({ className: e, align: t = "start", sideOffset: n = 4, collisionPadding: r = 16, ...i }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		collisionPadding: r,
		className: U(pn, "z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-lg p-4 outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...i
	}) });
}
function Ar({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function jr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: U("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: U("font-medium", e),
		...t
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: U("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/progress.tsx
var Pr = {
	default: {
		fill: "bg-primary",
		track: "bg-primary/15",
		stroke: "stroke-primary"
	},
	success: {
		fill: "bg-success",
		track: "bg-success/15",
		stroke: "stroke-success"
	},
	info: {
		fill: "bg-info",
		track: "bg-info/15",
		stroke: "stroke-info"
	},
	warning: {
		fill: "bg-warning",
		track: "bg-warning/20",
		stroke: "stroke-warning"
	},
	danger: {
		fill: "bg-danger",
		track: "bg-danger/15",
		stroke: "stroke-danger"
	}
}, Fr = {
	sm: "h-1",
	default: "h-2",
	lg: "h-3"
}, Ir = "after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:bg-linear-to-r after:from-transparent after:via-card/20 after:to-transparent after:animate-progress-shimmer motion-reduce:after:hidden", Lr = (e) => Math.min(100, Math.max(0, e));
function Rr({ className: e, value: t, variant: n = "default", size: r = "default", shimmer: i, label: s, showValue: c, ...l }) {
	let u = G().format, d = Pr[n], f = t != null, m = /* @__PURE__ */ a(p.Root, {
		"data-slot": "progress",
		"data-variant": n,
		value: f ? Lr(t) : null,
		className: U("relative w-full overflow-hidden rounded-full", Fr[r], d.track, e),
		...l,
		children: /* @__PURE__ */ a(p.Indicator, {
			"data-slot": "progress-indicator",
			className: U("h-full rounded-full", d.fill, f ? "transition-[width] duration-500 ease-settle" : "w-1/3 animate-progress-indeterminate motion-reduce:w-full motion-reduce:animate-none motion-reduce:opacity-60", i && f && U("relative overflow-hidden", Ir)),
			style: f ? { width: `${Lr(t)}%` } : void 0
		})
	});
	return !s && !c ? m : /* @__PURE__ */ o("div", {
		"data-slot": "progress-field",
		className: "grid w-full gap-1.5",
		children: [/* @__PURE__ */ o("div", {
			className: "flex items-baseline justify-between gap-3 text-sm",
			children: [/* @__PURE__ */ a("span", {
				className: "min-w-0 truncate font-medium",
				children: s
			}), c && f && /* @__PURE__ */ a("span", {
				className: "shrink-0 text-xs text-muted-foreground tabular-nums",
				children: u.percent(Lr(t))
			})]
		}), m]
	});
}
function zr({ value: e, variant: t = "default", size: n = 40, thickness: r = 4, showValue: i, className: s, style: c, ...l }) {
	let u = G().format, d = Pr[t], f = e != null, p = (n - r) / 2, m = 2 * Math.PI * p, h = f ? Lr(e) : 25;
	return /* @__PURE__ */ o("div", {
		"data-slot": "progress-ring",
		"data-variant": t,
		role: "progressbar",
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": f ? Lr(e) : void 0,
		className: U("relative inline-grid shrink-0 place-items-center", s),
		style: {
			width: n,
			height: n,
			...c
		},
		...l,
		children: [/* @__PURE__ */ o("svg", {
			viewBox: `0 0 ${n} ${n}`,
			className: U("absolute inset-0 -rotate-90", !f && "animate-spin [animation-duration:1.1s] motion-reduce:animate-none"),
			"aria-hidden": !0,
			children: [/* @__PURE__ */ a("circle", {
				cx: n / 2,
				cy: n / 2,
				r: p,
				fill: "none",
				strokeWidth: r,
				className: U(d.stroke, "opacity-15")
			}), /* @__PURE__ */ a("circle", {
				cx: n / 2,
				cy: n / 2,
				r: p,
				fill: "none",
				strokeWidth: r,
				strokeLinecap: "round",
				strokeDasharray: m,
				strokeDashoffset: m * (1 - h / 100),
				className: U(d.stroke, "transition-[stroke-dashoffset] duration-500 ease-settle")
			})]
		}), i && f && n >= 40 && /* @__PURE__ */ a("span", {
			className: "relative text-[0.65rem] font-medium tabular-nums",
			children: u.percent(Lr(e))
		})]
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "radio-group",
		className: U("grid gap-3", e),
		...t
	});
}
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Item, {
		"data-slot": "radio-group-item",
		className: U("peer relative aspect-square size-4 shrink-0 rounded-full border border-input data-[state=checked]:border-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20", e),
		...t,
		children: /* @__PURE__ */ a(m.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(fe, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function Hr({ ...e }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "select",
		...e
	});
}
function Ur({ ...e }) {
	return /* @__PURE__ */ a(h.Group, {
		"data-slot": "select-group",
		...e
	});
}
function Wr({ ...e }) {
	return /* @__PURE__ */ a(h.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Gr({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(h.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: U("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? vr[r] : U(_r, "enabled:hover:bg-accent"), e),
		...i,
		children: [n, /* @__PURE__ */ a(h.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(k, { className: "size-4 text-muted-foreground" })
		})]
	});
}
function Kr({ className: e, children: t, position: n = "popper", align: r = "start", sideOffset: i = 4, collisionPadding: s = 16, ...c }) {
	return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
		"data-slot": "select-content",
		className: U(pn, "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "min-w-(--radix-select-trigger-width)", e),
		position: n,
		align: r,
		sideOffset: i,
		collisionPadding: s,
		...c,
		children: [
			/* @__PURE__ */ a(Xr, {}),
			/* @__PURE__ */ a(h.Viewport, {
				className: U("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(Zr, {})
		]
	}) });
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Label, {
		"data-slot": "select-label",
		className: U("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function Jr({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(h.Item, {
		"data-slot": "select-item",
		className: U("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(M, { className: "size-4" }) })
		}), /* @__PURE__ */ a(h.ItemText, { children: t })]
	});
}
function Yr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Separator, {
		"data-slot": "select-separator",
		className: U("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Xr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: U("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(A, { className: "size-4" })
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: U("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(k, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function Qr({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: U("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var $r = 768;
function ei() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < $r);
		};
		return e.addEventListener("change", t), n(window.innerWidth < $r), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/lib/focus.ts
function ti(e) {
	e.preventDefault();
	let t = e.currentTarget;
	if (!(t instanceof HTMLElement)) throw Error("focusFirstField: expected the panel element as currentTarget");
	(t.querySelector("[data-overlay-body] :is(input, textarea, select, [role=combobox]):not(:disabled)") ?? t).focus();
}
//#endregion
//#region src/components/ui/skeleton.tsx
function X({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: U("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function ni({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(C.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function ri({ ...e }) {
	return /* @__PURE__ */ a(ni, { children: /* @__PURE__ */ a(C.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function ii({ ...e }) {
	return /* @__PURE__ */ a(C.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function ai({ className: e, sideOffset: t = 4, collisionPadding: n = 16, children: r, ...i }) {
	return /* @__PURE__ */ a(C.Portal, { children: /* @__PURE__ */ a(C.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		collisionPadding: n,
		className: U(pn, "z-50 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md px-2.5 py-1.5 text-xs text-balance fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...i,
		children: r
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var oi = "sidebar_state", si = 604800, ci = "16rem", li = "18rem", ui = "3rem", di = "b", fi = e.createContext(null);
function pi() {
	let t = e.useContext(fi);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function mi({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = ei(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${oi}=${t}; path=/; max-age=${si}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === di && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(fi.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": ci,
				"--sidebar-width-icon": ui,
				...o
			},
			className: U("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function hi({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: u, state: d, openMobile: f, setOpenMobile: p } = pi(), m = G().ui;
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: U("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (u) return /* @__PURE__ */ a(l.Root, {
		open: f,
		onOpenChange: p,
		...c,
		children: /* @__PURE__ */ o(l.Portal, { children: [/* @__PURE__ */ a(l.Overlay, { className: gn }), /* @__PURE__ */ o(l.Content, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			onOpenAutoFocus: ti,
			onCloseAutoFocus: (e) => {
				let t = document.querySelector("[data-sidebar=\"trigger\"]");
				t && (e.preventDefault(), t.focus());
			},
			className: U(hn.base, hn[e], "w-(--sidebar-width) bg-sidebar text-sidebar-foreground outline-none"),
			style: { "--sidebar-width": li },
			children: [
				/* @__PURE__ */ a(l.Title, {
					className: "sr-only",
					children: m.sidebarTitle
				}),
				/* @__PURE__ */ a(l.Description, {
					className: "sr-only",
					children: m.sidebarDescription
				}),
				/* @__PURE__ */ a("div", {
					className: "flex h-full w-full flex-col",
					children: s
				})
			]
		})] })
	});
	let h = n === "offcanvas";
	return /* @__PURE__ */ o("div", {
		className: U("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": d,
		"data-collapsible": d === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: U("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", h ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: U("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", h ? ["transition-transform duration-200 ease-settle", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
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
function gi({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = pi();
	return /* @__PURE__ */ o(q, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon",
		className: U("size-7", e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ a(Fe, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: G().ui.toggleSidebar
		})]
	});
}
function _i({ className: e, ...t }) {
	let { toggleSidebar: n } = pi(), r = G().ui;
	return /* @__PURE__ */ a("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": r.toggleSidebar,
		tabIndex: -1,
		onClick: n,
		title: r.toggleSidebar,
		className: U("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-transform ease-settle group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function vi({ className: e, as: t = "main", ...n }) {
	return /* @__PURE__ */ a(t, {
		"data-slot": "sidebar-inset",
		className: U("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...n
	});
}
function yi({ className: e, ...t }) {
	return /* @__PURE__ */ a(J, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: U("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: U("flex flex-col gap-2 p-2", e),
		...t
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: U("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Si({ className: e, ...t }) {
	return /* @__PURE__ */ a(Qr, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: U("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: U("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: U("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function Ti({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: U("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-ring/80 outline-hidden transition-opacity duration-200 ease-settle focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function Ei({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: U("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/80 outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function Di({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: U("w-full text-sm", e),
		...t
	});
}
function Oi({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: U("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function ki({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: U("group/menu-item relative", e),
		...t
	});
}
var Ai = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-ring/80 outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function ji({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? v.Root : "button", { isMobile: u, state: d } = pi(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: U(Ai({
			variant: n,
			size: r
		}), s),
		...c
	});
	return !i || d !== "collapsed" || u ? f : (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(ri, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(ii, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(ai, {
			side: "right",
			align: "center",
			...i
		})]
	}));
}
function Mi({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? v.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: U("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/80 outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function Ni({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: U("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Pi({ className: t, showIcon: n = !1, ...r }) {
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
		children: [n && /* @__PURE__ */ a(X, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(X, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function Fi({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: U("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Ii({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: U("group/menu-sub-item relative", e),
		...t
	});
}
function Li({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? v.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: U("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-ring/80 outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/components/ui/slider.tsx
function Ri({ className: t, defaultValue: n, value: r, min: i = 0, max: s = 100, ...c }) {
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
			className: "block size-4 shrink-0 rounded-full border border-primary bg-card ring-ring/80 transition-[color,box-shadow] hover:ring-[1.5px] focus-visible:ring-[1.5px] focus-visible:outline-hidden"
		}, t))]
	});
}
//#endregion
//#region src/lib/storage.ts
var zi = "ziku", Bi = zi;
function Vi(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Bi !== zi && Bi !== e) throw Error(`Storage prefix is already "${Bi}", cannot change it to "${e}"`);
	Bi = e;
}
var Hi = () => Bi, Ui = (...e) => [Bi, ...e].join("."), Wi = 75, Gi = 150, Ki = 100, qi = [
	75,
	90,
	100,
	110,
	125,
	150
], Ji = [
	"light",
	"dark",
	"system"
], Yi = "system";
function Xi(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Zi(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
function Qi(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i, a = () => i ??= t(Xi(Ui(e)));
	return {
		get: a,
		set: (t) => {
			Object.is(t, a()) || (i = t, Zi(Ui(e), String(t)), n(t), r.forEach((e) => e()));
		},
		subscribe: (e) => (r.add(e), n(a()), () => r.delete(e)),
		notify: () => r.forEach((e) => e())
	};
}
var $i = () => typeof document < "u", ea = (e) => Math.min(150, Math.max(75, Math.round(e))), ta = Qi("zoom", (e) => {
	let t = Number(e);
	return e !== null && Number.isFinite(t) && t > 0 ? ea(t) : 100;
}, (e) => {
	$i() && document.documentElement.style.setProperty("--app-zoom", String(e / 100));
}), na = (e) => ta.set(ea(e));
function ra() {
	return {
		zoom: e.useSyncExternalStore(ta.subscribe, ta.get, () => 100),
		setZoom: na
	};
}
var ia = "(prefers-color-scheme: dark)", aa = () => typeof matchMedia < "u" && matchMedia(ia).matches ? "dark" : "light", oa = (e) => e === "system" ? aa() : e, sa = (e) => {
	if (!$i()) return;
	let t = oa(e);
	document.documentElement.dataset.theme = t, document.documentElement.style.colorScheme = t;
}, ca = Qi("theme", (e) => Ji.find((t) => t === e) ?? "system", sa);
typeof matchMedia < "u" && matchMedia(ia).addEventListener("change", () => {
	ca.get() === "system" && (sa("system"), ca.notify());
});
var la = (e) => {
	if (!Ji.includes(e)) throw Error(`Unknown theme "${e}", expected one of ${Ji.join(", ")}`);
	ca.set(e);
};
function ua() {
	let t = e.useSyncExternalStore(ca.subscribe, ca.get, () => Yi);
	return {
		theme: t,
		resolved: oa(t),
		setTheme: la
	};
}
function da(e = Hi()) {
	let t = JSON.stringify(e);
	return `(function(){try{var d=document.documentElement;var z=parseFloat(localStorage.getItem(${t}+".zoom"));if(z>=75&&z<=150)d.style.setProperty("--app-zoom",String(z/100));var t=localStorage.getItem(${t}+".theme");if(t!=="light"&&t!=="dark")t=matchMedia(${JSON.stringify(ia)}).matches?"dark":"light";d.dataset.theme=t;d.style.colorScheme=t}catch(e){}})()`;
}
//#endregion
//#region src/components/ui/sonner.tsx
var fa = ({ theme: e, ...t }) => {
	let { resolved: n } = ua(), r = G().ui;
	return /* @__PURE__ */ a(ot, {
		theme: n,
		containerAriaLabel: r.notifications,
		position: "bottom-right",
		offset: 16,
		mobileOffset: 16,
		richColors: !0,
		closeButton: !0,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ a(j, { className: "size-4" }),
			info: /* @__PURE__ */ a(Ee, { className: "size-4" }),
			warning: /* @__PURE__ */ a(Je, { className: "size-4" }),
			error: /* @__PURE__ */ a(Ye, { className: "size-4" }),
			loading: /* @__PURE__ */ a(Re, { className: "size-4 animate-spin" })
		},
		style: {
			fontFamily: "var(--font-sans)",
			"--border-radius": "var(--radius-lg)",
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--success-bg": "var(--success-subtle)",
			"--success-text": "var(--success-fg)",
			"--success-border": "var(--toast-success-border)",
			"--info-bg": "var(--info-subtle)",
			"--info-text": "var(--info-fg)",
			"--info-border": "var(--toast-info-border)",
			"--warning-bg": "var(--warning-subtle)",
			"--warning-text": "var(--warning-fg)",
			"--warning-border": "var(--toast-warning-border)",
			"--error-bg": "var(--danger-subtle)",
			"--error-text": "var(--danger-fg)",
			"--error-border": "var(--danger-border)",
			"--toast-close-button-start": "unset",
			"--toast-close-button-end": "0.375rem",
			"--toast-close-button-transform": "translateY(0.375rem)"
		},
		toastOptions: {
			style: { boxShadow: "var(--shadow-overlay)" },
			closeButtonAriaLabel: r.closeNotification,
			classNames: {
				toast: "!pr-9",
				closeButton: "!border-0 !bg-transparent !text-current opacity-60 hover:opacity-100"
			}
		},
		...t
	});
}, pa = Object.assign((...e) => st(...e), st, { danger: st.error });
//#endregion
//#region src/components/ui/switch.tsx
function ma({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(y.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: U("peer group/switch relative inline-flex shrink-0 items-center rounded-full border p-px transition-[background-color,border-color,box-shadow,filter] outline-none before:absolute before:-inset-1 hover:brightness-95 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:border-primary-button-foreground/20 data-[state=checked]:bg-primary-button data-[state=unchecked]:bg-muted", e),
		...n,
		children: /* @__PURE__ */ a(y.Thumb, {
			"data-slot": "switch-thumb",
			className: U("pointer-events-none block rounded-full transition-[translate,background-color] ease-settle group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-[state=checked]:translate-x-4 group-data-[size=sm]/switch:data-[state=checked]:translate-x-3 data-[state=checked]:bg-primary-button-foreground data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-card data-[state=unchecked]:shadow-xs data-[state=unchecked]:ring-1 data-[state=unchecked]:ring-border")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function ha({ className: e, containerClassName: t, containerRef: n, ...r }) {
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
function ga({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: U("[&_tr]:border-b", e),
		...t
	});
}
function _a({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: U("[&_tr:last-child]:border-0", e),
		...t
	});
}
function va({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: U("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function Z({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: U("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-accent", e),
		...t
	});
}
function ya({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: U("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function ba({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: U("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function xa({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: U("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Sa({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(b.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: U("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var Ca = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:gap-0.5 data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted group-data-[orientation=vertical]/tabs:bg-transparent group-data-[orientation=vertical]/tabs:p-0",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function wa({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(b.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: U(Ca({ variant: t }), e),
		...n
	});
}
function Ta({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Trigger, {
		"data-slot": "tabs-trigger",
		className: U("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,background-color,border-color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=default]/tabs-list:data-[state=active]:bg-primary-button group-data-[variant=default]/tabs-list:data-[state=active]:text-primary-button-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-xs", "group-data-[variant=line]/tabs-list:data-[state=active]:text-primary-button-foreground", "after:absolute after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-1.5 group-data-[orientation=vertical]/tabs:after:left-0 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", "group-data-[orientation=vertical]/tabs:h-8 group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:flex-none group-data-[orientation=vertical]/tabs:justify-start group-data-[orientation=vertical]/tabs:px-2.5 group-data-[orientation=vertical]/tabs:hover:bg-accent group-data-[orientation=vertical]/tabs:data-[state=active]:hover:bg-primary-button", e),
		...t
	});
}
function Ea({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Content, {
		"data-slot": "tabs-content",
		className: U("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Da({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: U("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm", t ? vr[t] : _r, e),
		...n
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
var Oa = t("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function ka({ className: e, variant: t, size: n, ...r }) {
	return /* @__PURE__ */ a(x.Root, {
		"data-slot": "toggle",
		className: U(Oa({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
//#endregion
//#region src/components/ui/toggle-group.tsx
var Aa = e.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function ja({ className: e, variant: t, size: n, spacing: r = 0, children: i, ...o }) {
	return /* @__PURE__ */ a(S.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		style: { "--gap": r },
		className: U("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
		...o,
		children: /* @__PURE__ */ a(Aa.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r
			},
			children: i
		})
	});
}
function Ma({ className: t, children: n, variant: r, size: i, ...o }) {
	let s = e.useContext(Aa);
	return /* @__PURE__ */ a(S.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": s.variant || r,
		"data-size": s.size || i,
		"data-spacing": s.spacing,
		className: U(Oa({
			variant: s.variant || r,
			size: s.size || i
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", t),
		...o,
		children: n
	});
}
//#endregion
//#region src/blocks/brand/wordmark.tsx
function Na({ children: e, className: t, ...n }) {
	if (e.trim() === "") throw Error("Wordmark: children must be a non-empty name");
	return /* @__PURE__ */ a("span", {
		"data-slot": "wordmark",
		className: U("inline-block text-xl leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-foreground select-none", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
var Pa = e.createContext({}), Fa = (e) => e != null && e !== !1;
function Ia() {
	let { logo: t } = e.useContext(Pa);
	return Fa(t) ? /* @__PURE__ */ a("div", {
		"data-slot": "auth-logo",
		className: "flex justify-center",
		children: typeof t == "string" ? /* @__PURE__ */ a(Na, {
			className: "text-2xl",
			children: t
		}) : t
	}) : null;
}
function La() {
	let { footer: t } = e.useContext(Pa);
	return Fa(t) ? /* @__PURE__ */ a("p", {
		"data-slot": "auth-footer",
		className: "mt-6 text-balance border-t pt-4 text-center text-xs text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4",
		children: t
	}) : null;
}
function Ra({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: U("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
		...i,
		children: /* @__PURE__ */ a("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: /* @__PURE__ */ a(Pa.Provider, {
				value: {
					logo: e,
					footer: t
				},
				children: r
			})
		})
	});
}
//#endregion
//#region src/lib/link.tsx
var za = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Ba({ component: e, children: t }) {
	return /* @__PURE__ */ a(za.Provider, {
		value: e,
		children: t
	});
}
function Va(t) {
	let n = e.useContext(za);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var Ha = (e) => z.object({
	email: z.email(e.invalidEmail),
	password: z.string().min(1, e.passwordRequired)
});
function Ua({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = G().auth, f = e.useMemo(() => Ha(d), [d]), p = rt({
		resolver: ct(f),
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
	return /* @__PURE__ */ o(Dn, { children: [/* @__PURE__ */ o(On, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ia, {}),
			/* @__PURE__ */ a("h1", {
				className: r ? "text-xl leading-none font-semibold" : "sr-only",
				children: r ?? d.signIn
			}),
			s && /* @__PURE__ */ a(An, { children: s })
		]
	}), /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ a(sr, {
		...p,
		children: /* @__PURE__ */ o("form", {
			onSubmit: p.handleSubmit(g),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: u
				}), /* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: d.or
					})
				})] }),
				n && /* @__PURE__ */ a(Dt, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(kt, { children: n })
				}),
				/* @__PURE__ */ a(lr, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(fr, { children: [
						/* @__PURE__ */ a(pr, { children: d.email }),
						/* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(gr, {})
					] })
				}),
				/* @__PURE__ */ a(lr, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(fr, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(pr, { children: d.password }), l && /* @__PURE__ */ a(Va, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(mr, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(J, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(gr, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(Re, { className: "animate-spin" }), d.signIn]
				}),
				c && /* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						d.noAccount,
						" ",
						/* @__PURE__ */ a(Va, {
							href: c,
							className: "text-link underline underline-offset-4",
							children: d.createOne
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ a(La, {})] })] });
}
//#endregion
//#region src/blocks/auth/register-form.tsx
var Wa = /^[\d\s+\-()]+$/, Ga = (e) => {
	let t = e.replace(/\D/g, "").length;
	return Wa.test(e) && t >= 6 && t <= 20;
}, Ka = ["optional", "required"], qa = (e, t = {}) => z.object({
	name: z.string().min(2, e.nameTooShort),
	email: z.email(e.invalidEmail),
	password: z.string().min(8, e.passwordTooShort),
	confirmPassword: z.string(),
	phone: z.string().trim().optional().superRefine((n, r) => {
		if (t.phone) {
			if (!n) {
				t.phone === "required" && r.addIssue({
					code: "custom",
					message: e.phoneRequired
				});
				return;
			}
			Ga(n) || r.addIssue({
				code: "custom",
				message: e.invalidPhone
			});
		}
	}),
	consent: z.boolean().optional().refine((e) => !t.consent || e === !0, e.consentRequired)
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
}).transform(({ phone: e, consent: n, ...r }) => ({
	...r,
	...t.phone && e ? { phone: e } : {},
	...t.consent ? { consent: !0 } : {}
}));
function Ja({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l, phone: u, consent: d }) {
	let f = G().auth;
	if (u !== void 0 && !Ka.includes(u)) throw Error("RegisterForm: phone must be one of " + Ka.join(", ") + ", got " + JSON.stringify(u));
	let p = d != null, m = e.useMemo(() => qa(f, {
		phone: u,
		consent: p
	}), [
		f,
		u,
		p
	]), h = rt({
		resolver: ct(m),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
			consent: !1
		}
	}), g = h.formState.isSubmitting, _ = (e, t, n, r) => /* @__PURE__ */ a(lr, {
		control: h.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(fr, { children: [
			/* @__PURE__ */ a(pr, { children: t }),
			/* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(J, {
				...n,
				...e,
				value: e.value ?? ""
			}) }),
			r && /* @__PURE__ */ a(hr, { children: r }),
			/* @__PURE__ */ a(gr, {})
		] })
	});
	return /* @__PURE__ */ o(Dn, { children: [/* @__PURE__ */ o(On, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ia, {}),
			/* @__PURE__ */ a(kn, {
				className: "text-xl",
				children: r ?? f.registerTitle
			}),
			s && /* @__PURE__ */ a(An, { children: s })
		]
	}), /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ a(sr, {
		...h,
		children: /* @__PURE__ */ o("form", {
			onSubmit: h.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
					className: "grid gap-2",
					children: l
				}), /* @__PURE__ */ a("div", {
					className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
					children: /* @__PURE__ */ a("span", {
						className: "relative z-10 bg-card px-2 text-muted-foreground",
						children: f.or
					})
				})] }),
				n && /* @__PURE__ */ a(Dt, {
					variant: "danger",
					children: /* @__PURE__ */ a(kt, { children: n })
				}),
				_("name", f.name, {
					autoComplete: "name",
					placeholder: f.namePlaceholder
				}),
				u && _("phone", u === "optional" ? /* @__PURE__ */ o(i, { children: [
					f.phone,
					" ",
					/* @__PURE__ */ a("span", {
						className: "font-normal text-muted-foreground",
						children: f.optional
					})
				] }) : f.phone, {
					type: "tel",
					autoComplete: "tel"
				}),
				_("email", f.email, {
					type: "email",
					autoComplete: "email",
					placeholder: f.emailPlaceholder
				}),
				_("password", f.password, {
					type: "password",
					autoComplete: "new-password"
				}, f.passwordHint),
				_("confirmPassword", f.confirmPassword, {
					type: "password",
					autoComplete: "new-password"
				}),
				p && /* @__PURE__ */ a(lr, {
					control: h.control,
					name: "consent",
					render: ({ field: e }) => /* @__PURE__ */ o(fr, { children: [/* @__PURE__ */ o("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(Pn, {
							className: "mt-0.5",
							checked: e.value === !0,
							onCheckedChange: (t) => e.onChange(t === !0),
							onBlur: e.onBlur,
							ref: e.ref,
							name: e.name
						}) }), /* @__PURE__ */ a(pr, {
							className: "block text-sm leading-snug font-normal",
							children: d
						})]
					}), /* @__PURE__ */ a(gr, {})] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: g,
					children: [g && /* @__PURE__ */ a(Re, { className: "animate-spin" }), f.createAccount]
				}),
				c && /* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						f.haveAccount,
						" ",
						/* @__PURE__ */ a(Va, {
							href: c,
							className: "text-link underline underline-offset-4",
							children: f.signIn
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ a(La, {})] })] });
}
//#endregion
//#region src/blocks/auth/forgot-password-form.tsx
var Ya = (e) => z.object({ email: z.email(e.invalidEmail) });
function Xa({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = G().auth, c = e.useMemo(() => Ya(s), [s]), l = rt({
		resolver: ct(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(Dn, { children: [/* @__PURE__ */ o(On, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(Ia, {}),
			/* @__PURE__ */ a(P, {
				"aria-hidden": !0,
				className: "size-6 text-success-fg"
			}),
			/* @__PURE__ */ a(kn, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(An, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(Mn, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(Va, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(Dn, { children: [/* @__PURE__ */ o(On, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ia, {}),
			/* @__PURE__ */ a(kn, {
				className: "text-xl",
				children: s.resetTitle
			}),
			/* @__PURE__ */ a(An, { children: s.resetDescription })
		]
	}), /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ a(sr, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(Dt, {
					variant: "danger",
					children: /* @__PURE__ */ a(kt, { children: n })
				}),
				/* @__PURE__ */ a(lr, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(fr, { children: [
						/* @__PURE__ */ a(pr, { children: s.email }),
						/* @__PURE__ */ a(mr, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(gr, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(Re, { className: "animate-spin" }), s.sendResetLink]
				}),
				i && /* @__PURE__ */ a("p", {
					className: "text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ a(Va, {
						href: i,
						className: "text-link underline underline-offset-4",
						children: s.backToSignIn
					})
				})
			]
		})
	}), /* @__PURE__ */ a(La, {})] })] });
}
//#endregion
//#region src/components/ui/command.tsx
function Za({ className: e, ...t }) {
	return /* @__PURE__ */ a(B, {
		"data-slot": "command",
		className: U("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function Qa({ title: e, description: t, children: n, className: r, showCloseButton: i = !0, ...s }) {
	let c = G().ui;
	return /* @__PURE__ */ a(Fn, {
		...s,
		children: /* @__PURE__ */ o(Bn, {
			className: U("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(Vn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Un, { children: e ?? c.commandTitle }), /* @__PURE__ */ a(Wn, { children: t ?? c.commandDescription })]
			}), /* @__PURE__ */ a(Za, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]_svg]:size-4",
				children: n
			})]
		})
	});
}
function $a({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(ke, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(B.Input, {
			"data-slot": "command-input",
			className: U("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function eo({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.List, {
		"data-slot": "command-list",
		className: U("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function to({ ...e }) {
	return /* @__PURE__ */ a(B.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function no({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Group, {
		"data-slot": "command-group",
		className: U("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function ro({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Separator, {
		"data-slot": "command-separator",
		className: U("-mx-1 h-px bg-border", e),
		...t
	});
}
function io({ className: e, ...t }) {
	return /* @__PURE__ */ a(B.Item, {
		"data-slot": "command-item",
		className: U("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function ao({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: U("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function oo({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
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
	]), /* @__PURE__ */ o(Qa, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a($a, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(eo, { children: [/* @__PURE__ */ a(to, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(ro, {}), /* @__PURE__ */ a(no, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(io, {
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
					e.shortcut && /* @__PURE__ */ a(ao, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function so({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = G().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: U("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80", n),
		...r,
		children: [
			/* @__PURE__ */ a(Oe, {
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
function co({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
	let m = G().common, h = e.useId(), [g, _] = e.useState(""), v = s ?? g, [y, b] = e.useState(!1), [x, S] = e.useState(0), C = e.useRef(null), w = t.length === 0 ? -1 : Math.min(x, t.length - 1), T = w >= 0 ? `${h}-option-${w}` : void 0;
	e.useEffect(() => {
		C.current?.querySelector("[data-active=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [w, y]);
	let E = (e) => {
		s === void 0 && _(e), c?.(e), S(0), b(!0);
	}, D = (e) => {
		n(e), b(!1);
	}, ee = y && (u || t.length > 0 || v.length > 0);
	function te(e) {
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
			let n = w >= 0 ? t[w] : void 0;
			if (!y || !n) return;
			e.preventDefault(), D(n);
		}
	}
	return /* @__PURE__ */ o(Or, {
		open: ee,
		onOpenChange: (e) => !e && b(!1),
		children: [/* @__PURE__ */ a(Ar, {
			asChild: !0,
			children: /* @__PURE__ */ a("div", {
				className: p,
				children: /* @__PURE__ */ a(J, {
					id: h,
					role: "combobox",
					type: "text",
					autoComplete: "off",
					"aria-label": r,
					"aria-expanded": ee,
					"aria-controls": `${h}-list`,
					"aria-autocomplete": "list",
					"aria-activedescendant": ee ? T : void 0,
					value: v,
					placeholder: i,
					autoFocus: d,
					disabled: f,
					onChange: (e) => E(e.target.value),
					onFocus: () => b(!0),
					onClick: () => b(!0),
					onBlur: () => b(!1),
					onKeyDown: te
				})
			})
		}), /* @__PURE__ */ a(Y, {
			asChild: !0,
			onOpenAutoFocus: (e) => e.preventDefault(),
			onCloseAutoFocus: (e) => e.preventDefault(),
			onInteractOutside: (e) => {
				e.target instanceof Node && document.getElementById(h)?.contains(e.target) && e.preventDefault();
			},
			className: "w-(--radix-popover-trigger-width) max-h-[min(16rem,var(--radix-popover-content-available-height))] overscroll-contain p-1",
			children: /* @__PURE__ */ o("ul", {
				ref: C,
				id: `${h}-list`,
				role: "listbox",
				"aria-label": r,
				"aria-busy": u || void 0,
				onMouseDown: (e) => e.preventDefault(),
				children: [
					t.map((e, t) => /* @__PURE__ */ o("li", {
						id: `${h}-option-${t}`,
						role: "option",
						"aria-selected": t === w,
						"data-active": t === w,
						onMouseDown: (t) => {
							t.preventDefault(), D(e);
						},
						onMouseEnter: () => S(t),
						className: U("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === w && "bg-accent text-accent-foreground"),
						children: [/* @__PURE__ */ a("div", {
							className: "truncate",
							children: e.label
						}), e.hint && /* @__PURE__ */ a("div", {
							className: "truncate text-xs text-muted-foreground",
							children: e.hint
						})]
					}, e.id)),
					u && t.length === 0 && /* @__PURE__ */ a("li", {
						className: "px-2 py-1.5 text-sm text-muted-foreground",
						children: m.loading
					}),
					!u && t.length === 0 && /* @__PURE__ */ a("li", {
						className: "px-2 py-1.5 text-sm text-muted-foreground",
						children: l ?? m.noResults
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/blocks/page/empty-state.tsx
function lo({ icon: e, title: t, as: n = "h2", tone: r = "neutral", description: i, action: s, className: c, ...l }) {
	return /* @__PURE__ */ o("div", {
		className: U("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", c),
		...l,
		children: [
			e && /* @__PURE__ */ a("div", {
				className: U("flex size-12 items-center justify-center rounded-full", r === "danger" ? "bg-danger-subtle" : "bg-muted"),
				children: /* @__PURE__ */ a(e, {
					"aria-hidden": !0,
					className: U("size-6", r === "danger" ? "text-danger-fg" : "text-muted-foreground")
				})
			}),
			/* @__PURE__ */ a(n, {
				className: "text-base font-semibold",
				children: t
			}),
			i && /* @__PURE__ */ a("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: i
			}),
			s && /* @__PURE__ */ a("div", {
				className: "mt-2",
				children: s
			})
		]
	});
}
//#endregion
//#region src/blocks/page/error-state.tsx
function uo(e) {
	return e === !0 ? void 0 : e;
}
function fo({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = qe, className: s }) {
	let c = G().common, l = n ?? c.loadFailed, u = t ?? /* @__PURE__ */ a(q, {
		type: "button",
		variant: "outline",
		size: "sm",
		onClick: () => e?.(),
		children: c.retry
	}), d = t ?? (e ? u : void 0);
	return r === "alert" ? /* @__PURE__ */ a(Dt, {
		variant: "danger",
		className: s,
		children: /* @__PURE__ */ o(kt, {
			className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(lo, {
		tone: "danger",
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/stat-tile.tsx
var po = "text-xs font-medium tracking-wider text-muted-foreground uppercase", mo = po;
function ho({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: U(mo, t),
		...n
	});
}
var go = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function _o({ label: e, value: t, hint: n, icon: r, change: s, trend: c, loading: l, error: u, pressed: d, onPressedChange: f, className: p, ...m }) {
	let h = G(), g = h.dashboard;
	if (d !== void 0 && !f) throw Error("StatTile: pressed needs onPressedChange; pass both, or neither for a plain tile");
	let _ = c ?? (s === void 0 || s === 0 ? "flat" : s > 0 ? "up" : "down"), v = f ? "span" : "div", y = /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ o(v, {
			className: "flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ a("span", {
				className: mo,
				children: e
			}), r && /* @__PURE__ */ a(r, {
				"aria-hidden": !0,
				className: "size-4 shrink-0 text-muted-foreground"
			})]
		}),
		l ? /* @__PURE__ */ o(v, {
			className: "block",
			role: "status",
			"aria-label": h.common.loading,
			children: [/* @__PURE__ */ a(X, { className: "mt-2 h-8 w-24" }), /* @__PURE__ */ a(X, { className: "mt-1.5 h-3 w-32" })]
		}) : u ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(v, {
			className: "mt-2 block text-2xl font-semibold text-muted-foreground",
			"aria-hidden": !0,
			children: "—"
		}), /* @__PURE__ */ a(v, {
			className: "mt-1 block text-xs text-danger-fg",
			children: uo(u) ?? h.common.loadFailed
		})] }) : /* @__PURE__ */ a(v, {
			className: "mt-2 block text-2xl font-semibold tabular-nums",
			children: t
		}),
		!l && !u && (n || s !== void 0) && /* @__PURE__ */ o(v, {
			className: U("mt-1 flex flex-wrap gap-x-1 text-xs", go[_]),
			children: [s !== void 0 && /* @__PURE__ */ a("span", {
				className: "font-medium tabular-nums",
				children: g.change(s)
			}), n && /* @__PURE__ */ a("span", { children: n })]
		})
	] });
	return f ? /* @__PURE__ */ a("button", {
		type: "button",
		"data-slot": "stat-tile",
		"aria-pressed": d ?? !1,
		disabled: l || !!u,
		className: U(mn, "block w-full p-4 text-left transition-colors outline-none", "hover:bg-accent/50 focus-visible:ring-[1.5px] focus-visible:ring-ring/80", "aria-pressed:border-primary aria-pressed:bg-accent", "disabled:pointer-events-none", p),
		...m,
		onClick: (e) => {
			m.onClick?.(e), f(!d);
		},
		children: y
	}) : /* @__PURE__ */ a("div", {
		"data-slot": "stat-tile",
		className: U(mn, "p-4", p),
		...m,
		children: y
	});
}
//#endregion
//#region src/blocks/data/days.ts
var vo = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), yo = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t), bo = (e, t) => Math.round((vo(t).getTime() - vo(e).getTime()) / 864e5), xo = (e, t) => yo(vo(e), -((e.getDay() - t + 7) % 7)), So = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, Co = (e, t) => bo(e, t) === 0;
function wo(e, t) {
	if (!e) return null;
	if (Number.isNaN(e.getTime())) throw Error("dates.start returned an invalid Date");
	let n = vo(e);
	if (!t) return {
		from: n,
		to: n
	};
	if (Number.isNaN(t.getTime())) throw Error("dates.end returned an invalid Date");
	let r = vo(t);
	if (r < n) throw Error("dates.end is before dates.start (" + So(r) + " < " + So(n) + ")");
	return {
		from: n,
		to: r
	};
}
//#endregion
//#region src/blocks/data/timeline.tsx
var To = [
	"week",
	"month",
	"quarter"
], Eo = {
	week: 44,
	month: 22,
	quarter: 8
}, Do = {
	week: 7,
	month: 14,
	quarter: 30
}, Oo = "w-40 sm:w-52", ko = "h-9";
function Ao(e, t, n) {
	if (t === "move") return {
		from: yo(e.from, n),
		to: yo(e.to, n)
	};
	if (t === "start") {
		let t = yo(e.from, n);
		return {
			from: t > e.to ? e.to : t,
			to: e.to
		};
	}
	let r = yo(e.to, n);
	return {
		from: e.from,
		to: r < e.from ? e.from : r
	};
}
function jo(t, n) {
	let [r, i] = e.useState({});
	return {
		pending: r,
		commit: e.useCallback((e, r, a, o) => {
			if (!t || Co(a.from, r.from) && Co(a.to, r.to)) return;
			let s = n(e), c = t(e, {
				start: a.from,
				end: o ? void 0 : a.to
			});
			c instanceof Promise && (i((e) => ({
				...e,
				[s]: a
			})), c.finally(() => i(({ [s]: e, ...t }) => t)));
		}, [t, n])
	};
}
var Mo = 4;
function No({ items: e, start: t, end: n }) {
	let r = [], i = 0;
	for (let a of e) {
		let e = n?.(a), o = wo(t(a), e);
		o ? r.push({
			row: a,
			...o,
			point: !e
		}) : i++;
	}
	return {
		placed: r,
		undated: i
	};
}
function Po({ items: t, itemKey: n, start: r, end: i, label: s, onItemClick: c, onReschedule: l, today: u }) {
	let d = G(), f = d.datePicker.locale.options?.weekStartsOn ?? 0, [p, m] = e.useState("month"), h = e.useRef(null), g = vo(u ?? /* @__PURE__ */ new Date()), { placed: _, undated: v } = No({
		items: t,
		start: r,
		end: i
	}), y = e.useId(), [b, x] = e.useState(null), { pending: S, commit: C } = jo(l, n), w = e.useRef(null), T = e.useRef(!1), E = Eo[p], D = _.reduce((e, t) => t.from < e ? t.from : e, g), ee = _.reduce((e, t) => t.to > e ? t.to : e, g), te = xo(yo(D, -Do[p]), f), ne = bo(te, yo(ee, Do[p])) + 1, re = e.useMemo(() => Array.from({ length: ne }, (e, t) => yo(te, t)), [te.getTime(), ne]), ie = (e) => bo(te, e) * E, O = ie(g), k = [];
	for (let e of re) {
		let t = `${e.getFullYear()}-${e.getMonth()}`, n = k[k.length - 1];
		n?.key === t ? n.days++ : k.push({
			key: t,
			date: e,
			days: 1
		});
	}
	let ae = e.useCallback(() => {
		let e = h.current;
		e && (e.scrollLeft = Math.max(0, O - e.clientWidth / 3));
	}, [O]);
	e.useLayoutEffect(ae, [p, ae]);
	let oe = (e) => e.getDay() === 0 || e.getDay() === 6, se = (e) => p !== "quarter" || e.getDay() === f, ce = p !== "quarter" && /* @__PURE__ */ a("div", {
		"aria-hidden": !0,
		className: "pointer-events-none absolute inset-0",
		children: re.map((e, t) => oe(e) ? /* @__PURE__ */ a("div", {
			className: "absolute inset-y-0 bg-muted/60",
			style: {
				left: t * E,
				width: E
			}
		}, t) : null)
	}), le = /* @__PURE__ */ a("div", {
		"aria-hidden": !0,
		className: "pointer-events-none absolute inset-y-0 z-[1] w-px bg-danger",
		style: { left: O + E / 2 }
	});
	return /* @__PURE__ */ o("div", {
		"data-slot": "timeline",
		className: "flex flex-col",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-center gap-2 border-b px-3 py-2",
			children: [
				/* @__PURE__ */ a(ja, {
					type: "single",
					variant: "outline",
					size: "sm",
					value: p,
					"aria-label": d.dataTable.timelineScale,
					onValueChange: (e) => e && m(e),
					children: To.map((e) => /* @__PURE__ */ a(Ma, {
						value: e,
						className: "px-3",
						children: d.dataTable.scales[e]
					}, e))
				}),
				/* @__PURE__ */ a(q, {
					variant: "outline",
					size: "sm",
					onClick: ae,
					children: d.datePicker.today
				}),
				v > 0 && /* @__PURE__ */ a("span", {
					className: "ml-auto text-xs text-muted-foreground",
					children: d.dataTable.undated(v)
				})
			]
		}), /* @__PURE__ */ a("div", {
			ref: h,
			className: "max-h-[70dvh] overflow-auto overscroll-x-contain",
			children: /* @__PURE__ */ o("div", {
				className: "relative w-max min-w-full",
				children: [
					/* @__PURE__ */ o("div", {
						className: "sticky top-0 z-20 flex border-b bg-card",
						children: [/* @__PURE__ */ a("div", { className: U(Oo, "sticky left-0 z-10 shrink-0 border-r bg-card") }), /* @__PURE__ */ o("div", {
							className: "relative",
							style: { width: ne * E },
							children: [/* @__PURE__ */ a("div", {
								className: "flex h-7 items-end border-b",
								children: k.map((e) => /* @__PURE__ */ a("div", {
									className: "h-full shrink-0 truncate border-l px-2 pt-1.5 text-xs font-medium first:border-l-0",
									style: { width: e.days * E },
									children: d.format.month(e.date)
								}, e.key))
							}), /* @__PURE__ */ a("div", {
								className: "relative flex h-7",
								children: re.map((e, t) => /* @__PURE__ */ a("div", {
									className: U("shrink-0 pt-1.5 text-center text-xs tabular-nums", Co(e, g) ? "font-semibold text-danger-fg" : "text-muted-foreground"),
									style: { width: E },
									children: se(e) && /* @__PURE__ */ a("span", {
										className: p === "quarter" ? "block w-14 text-left" : void 0,
										children: e.getDate()
									})
								}, t))
							})]
						})]
					}),
					l && /* @__PURE__ */ a("p", {
						id: y,
						className: "sr-only",
						children: d.dataTable.rescheduleHint
					}),
					/* @__PURE__ */ a("ul", { children: _.map(({ row: e, from: t, to: r, point: i }) => {
						let u = n(e), f = b?.key === u ? b.span : S[u] ?? {
							from: t,
							to: r
						}, { from: p, to: m } = f, h = ie(p), g = (bo(p, m) + 1) * E, _ = s(e), v = i || Co(p, m) ? d.format.date(p) : `${d.format.date(p)}${d.datePicker.rangeSeparator}${d.format.date(m)}`, D = !!(c || l), ee = D ? "button" : "div", te = (n) => C(e, {
							from: t,
							to: r
						}, n, i), re = l && {
							onPointerDown: (e) => {
								if (e.button !== 0) return;
								let t = e.target.dataset.edge ?? "move";
								e.currentTarget.setPointerCapture(e.pointerId), w.current = {
									key: u,
									edge: t,
									x0: e.clientX,
									span: f,
									moved: !1
								};
							},
							onPointerMove: (e) => {
								let t = w.current;
								if (!t || t.key !== u) return;
								let n = e.clientX - t.x0;
								!t.moved && Math.abs(n) < Mo || (t.moved = !0, x({
									key: u,
									span: Ao(t.span, t.edge, Math.round(n / E))
								}));
							},
							onPointerUp: (e) => {
								let t = w.current;
								w.current = null, !(!t || !t.moved) && (T.current = !0, x(null), te(Ao(t.span, t.edge, Math.round((e.clientX - t.x0) / E))));
							},
							onPointerCancel: () => {
								w.current = null, x(null);
							},
							onKeyDown: (e) => {
								(e.key === "ArrowLeft" || e.key === "ArrowRight") && (e.preventDefault(), te(Ao(f, e.shiftKey && !i ? "end" : "move", e.key === "ArrowLeft" ? -1 : 1)));
							},
							"aria-describedby": y
						}, O = D ? () => {
							if (T.current) {
								T.current = !1;
								return;
							}
							c?.(e);
						} : void 0, k = (e) => /* @__PURE__ */ a("span", {
							"aria-hidden": !0,
							"data-edge": e,
							className: U("absolute inset-y-0 w-2 cursor-ew-resize", e === "start" ? "left-0" : "right-0")
						});
						return /* @__PURE__ */ o("li", {
							className: U("flex border-b last:border-b-0", ko),
							children: [/* @__PURE__ */ a("div", {
								className: U(Oo, "sticky left-0 z-10 flex shrink-0 items-center border-r bg-card px-3 text-sm"),
								children: /* @__PURE__ */ a("span", {
									className: "truncate",
									children: _
								})
							}), /* @__PURE__ */ o("div", {
								className: "relative",
								style: { width: ne * E },
								children: [
									ce,
									le,
									i ? /* @__PURE__ */ o(ee, {
										type: D ? "button" : void 0,
										onClick: O,
										...re,
										title: `${_} · ${v}`,
										"aria-label": `${_}, ${v}`,
										className: U("absolute top-1/2 z-[2] flex -translate-y-1/2 items-center gap-2 rounded-sm outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80", l && "cursor-grab touch-none select-none active:cursor-grabbing"),
										style: { left: h + E / 2 - 6 },
										children: [/* @__PURE__ */ a("span", {
											"aria-hidden": !0,
											className: "size-3 rotate-45 rounded-[2px] bg-primary"
										}), /* @__PURE__ */ a("span", {
											className: "text-xs whitespace-nowrap text-muted-foreground",
											children: _
										})]
									}) : /* @__PURE__ */ o(ee, {
										type: D ? "button" : void 0,
										onClick: O,
										...re,
										title: `${_} · ${v}`,
										"aria-label": `${_}, ${v}`,
										className: U("absolute inset-y-1.5 z-[2] flex items-center overflow-hidden rounded-md border border-ring/40 bg-accent px-2 text-left text-xs text-accent-foreground outline-none", c && "cursor-pointer hover:brightness-95", l && "cursor-grab touch-none select-none active:cursor-grabbing", b?.key === u && "z-[3] shadow-md", "focus-visible:ring-[1.5px] focus-visible:ring-ring/80"),
										style: {
											left: h,
											width: g
										},
										children: [
											/* @__PURE__ */ a("span", {
												className: "pointer-events-none truncate",
												children: _
											}),
											l && k("start"),
											l && k("end")
										]
									})
								]
							})]
						}, u);
					}) })
				]
			})
		})]
	});
}
//#endregion
//#region src/blocks/data/types.ts
var Fo = "—", Q = (e) => e == null || e === "" ? "" : String(e);
function Io(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var Lo = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, Ro = (e) => Array.isArray(e) ? e.map(Q) : [Q(e)], zo = [
	"table",
	"board",
	"timeline",
	"calendar"
], Bo = (e) => (t, n) => {
	if (!e.order) return Io(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Vo = (e) => !!e.header;
function Ho(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Uo(e, t) {
	if (Lo(t)) return e.header;
	let n = Ro(t).map((t) => Ho(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Wo(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || Lo(e.value) ? [] : [[t, Ro(e.value)]];
		}))
	};
}
//#endregion
//#region src/blocks/data/calendar-view.tsx
var Go = 3, Ko = 5, qo = ["month", "year"], Jo = "application/x-ziku-calendar-item";
function Yo({ items: t, itemKey: n, start: r, end: s, label: c, onItemClick: l, onReschedule: u, today: d, defaultScale: f = "month" }) {
	let p = G(), m = p.datePicker.locale.options?.weekStartsOn ?? 0, h = vo(d ?? /* @__PURE__ */ new Date()), [g, _] = e.useState(() => new Date(h.getFullYear(), h.getMonth(), 1)), [v, y] = e.useState(f), { pending: b, commit: x } = jo(u, n), [S, C] = e.useState(null), w = e.useId(), T = e.useRef(null), E = e.useRef(null);
	e.useEffect(() => {
		let e = E.current;
		if (!e) return;
		let t = T.current?.querySelector(`[data-item-key="${CSS.escape(e)}"]`);
		t && (t.focus(), E.current = null);
	});
	let D = xo(g, m), ee = new Date(g.getFullYear(), g.getMonth() + 1, 0), te = Math.ceil((bo(D, ee) + 1) / 7), ne = Array.from({ length: te * 7 }, (e, t) => yo(D, t)), re = ne[ne.length - 1], ie = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = 0;
	for (let e of t) {
		let t = s?.(e), i = wo(r(e), t);
		if (!i) {
			k++;
			continue;
		}
		let a = n(e), o = {
			row: e,
			key: a,
			own: i,
			shown: b[a] ?? i,
			point: !t
		};
		O.set(a, o);
		let c = o.shown.to;
		if (c < D || c > re) continue;
		let l = ie.get(So(c));
		l ? l.push(o) : ie.set(So(c), [o]);
	}
	let oe = (e, t) => x(e.row, e.own, Ao(e.shown, "move", bo(e.shown.to, t)), e.point), ce = v === "year" ? 12 : 1, le = (e) => _((t) => new Date(t.getFullYear(), t.getMonth() + e * ce, 1)), A = Array.from({ length: 12 }, () => []);
	if (v === "year") for (let e of O.values()) e.shown.to.getFullYear() === g.getFullYear() && A[e.shown.to.getMonth()].push(e);
	for (let e of A) e.sort((e, t) => e.shown.to.getTime() - t.shown.to.getTime());
	let ue = (e, t) => u && {
		onDragOver: (t) => {
			t.dataTransfer.types.includes(Jo) && (t.preventDefault(), t.dataTransfer.dropEffect = "move", S !== e && C(e));
		},
		onDragLeave: (e) => {
			e.currentTarget.contains(e.relatedTarget) || C(null);
		},
		onDrop: (e) => {
			e.preventDefault(), C(null);
			let n = O.get(e.dataTransfer.getData(Jo));
			n && oe(n, t(n));
		}
	}, j = ({ row: e, key: t, shown: n, ...r }, s) => {
		let d = c(e), f = /* @__PURE__ */ o(i, { children: [s, d] }), p = "block w-full truncate rounded-sm bg-accent px-1.5 py-0.5 text-left text-xs text-accent-foreground";
		return !l && !u ? /* @__PURE__ */ a("div", {
			title: d,
			className: p,
			children: f
		}) : /* @__PURE__ */ a("button", {
			type: "button",
			"data-item-key": t,
			onClick: l ? () => l(e) : void 0,
			title: d,
			className: U(p, "outline-none hover:brightness-95 focus-visible:ring-[1.5px] focus-visible:ring-ring/80", u && "cursor-grab active:cursor-grabbing"),
			...u && {
				draggable: !0,
				"aria-describedby": w,
				onDragStart: (e) => {
					e.dataTransfer.setData(Jo, t), e.dataTransfer.effectAllowed = "move";
				},
				onKeyDown: (i) => {
					let a = {
						ArrowLeft: -1,
						ArrowRight: 1,
						ArrowUp: -7,
						ArrowDown: 7
					}[i.key];
					if (a === void 0) return;
					i.preventDefault();
					let o = yo(n.to, a);
					E.current = t, (o.getMonth() !== g.getMonth() || o.getFullYear() !== g.getFullYear()) && _(new Date(o.getFullYear(), o.getMonth(), 1)), oe({
						row: e,
						key: t,
						shown: n,
						...r
					}, o);
				}
			},
			children: f
		});
	};
	return /* @__PURE__ */ o("div", {
		"data-slot": "calendar-view",
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 border-b px-3 py-2",
				children: [
					/* @__PURE__ */ a("h3", {
						className: "min-w-0 flex-1 truncate text-sm font-medium",
						"aria-live": "polite",
						children: v === "year" ? g.getFullYear() : p.format.month(g)
					}),
					k > 0 && /* @__PURE__ */ a("span", {
						className: "hidden text-xs text-muted-foreground sm:inline",
						children: p.dataTable.undated(k)
					}),
					/* @__PURE__ */ o("div", {
						className: "flex shrink-0 items-center gap-1",
						children: [
							/* @__PURE__ */ a(ja, {
								type: "single",
								variant: "outline",
								size: "sm",
								value: v,
								"aria-label": p.dataTable.calendarScale,
								onValueChange: (e) => e && y(e),
								children: qo.map((e) => /* @__PURE__ */ a(Ma, {
									value: e,
									className: "px-3",
									children: p.dataTable.calendarScales[e]
								}, e))
							}),
							/* @__PURE__ */ a(q, {
								variant: "outline",
								size: "sm",
								onClick: () => _(new Date(h.getFullYear(), h.getMonth(), 1)),
								children: p.datePicker.today
							}),
							/* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": v === "year" ? p.dataTable.previousYear : p.dataTable.previousMonth,
								onClick: () => le(-1),
								children: /* @__PURE__ */ a(ae, {})
							}),
							/* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": v === "year" ? p.dataTable.nextYear : p.dataTable.nextMonth,
								onClick: () => le(1),
								children: /* @__PURE__ */ a(se, {})
							})
						]
					})
				]
			}),
			u && /* @__PURE__ */ a("p", {
				id: w,
				className: "sr-only",
				children: p.dataTable.calendarRescheduleHint
			}),
			v === "year" ? /* @__PURE__ */ a("ol", {
				ref: T,
				className: "grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: A.map((t, n) => {
					let r = new Date(g.getFullYear(), n, 1), i = So(r), s = n === h.getMonth() && g.getFullYear() === h.getFullYear(), c = t.length - Ko, l = (e) => /* @__PURE__ */ a("span", {
						"aria-hidden": !0,
						className: "mr-1.5 inline-block w-4 text-right tabular-nums opacity-70",
						children: e.shown.to.getDate()
					});
					return /* @__PURE__ */ o("li", {
						...ue(i, (e) => {
							let t = new Date(g.getFullYear(), n + 1, 0).getDate();
							return new Date(g.getFullYear(), n, Math.min(e.shown.to.getDate(), t));
						}),
						className: U("flex min-h-36 min-w-0 flex-col gap-1 rounded-lg border p-2", S === i && "bg-accent/60 ring-1 ring-ring/80 ring-inset"),
						children: [
							/* @__PURE__ */ o("div", {
								className: "flex items-center justify-between gap-2 pb-1",
								children: [/* @__PURE__ */ a("button", {
									type: "button",
									onClick: () => {
										_(r), y("month");
									},
									className: U("truncate rounded-sm text-sm font-medium outline-none hover:underline focus-visible:ring-[1.5px] focus-visible:ring-ring/80", s && "text-link"),
									children: p.format.monthName(r)
								}), t.length > 0 && /* @__PURE__ */ a("span", {
									className: "text-xs text-muted-foreground tabular-nums",
									children: p.format.number(t.length)
								})]
							}),
							t.length === 0 && /* @__PURE__ */ a("span", {
								className: "text-xs text-muted-foreground",
								children: "—"
							}),
							t.slice(0, Ko).map((t) => /* @__PURE__ */ a(e.Fragment, { children: j(t, l(t)) }, t.key)),
							c > 0 && /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ a(kr, {
								className: "truncate rounded-sm px-1.5 text-left text-xs whitespace-nowrap text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
								children: p.dataTable.moreItems(c)
							}), /* @__PURE__ */ a(Y, {
								className: "grid max-h-80 w-64 gap-1 overflow-y-auto p-2",
								children: t.map((t) => /* @__PURE__ */ a(e.Fragment, { children: j(t, l(t)) }, t.key))
							})] })
						]
					}, i);
				})
			}) : /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
				className: "grid grid-cols-7 border-b",
				children: ne.slice(0, 7).map((e) => /* @__PURE__ */ a("div", {
					className: "px-2 py-1.5 text-xs font-medium text-muted-foreground",
					children: p.format.weekday(e)
				}, e.getDay()))
			}), /* @__PURE__ */ a("ol", {
				ref: T,
				className: "grid grid-cols-7",
				children: ne.map((t) => {
					let n = ie.get(So(t)) ?? [], r = t.getMonth() !== g.getMonth(), i = Co(t, h), s = n.length - Go, c = So(t);
					return /* @__PURE__ */ o("li", {
						...ue(c, () => t),
						className: U("flex min-h-20 min-w-0 flex-col gap-1 border-r border-b p-1 sm:min-h-24 [&:nth-child(7n)]:border-r-0", r && "bg-muted/40", S === c && "bg-accent/60 ring-1 ring-ring/80 ring-inset"),
						children: [
							/* @__PURE__ */ a("time", {
								dateTime: So(t),
								"aria-label": p.format.date(t),
								className: U("flex size-6 items-center justify-center self-end rounded-full text-xs tabular-nums", i ? "bg-primary font-medium text-primary-foreground" : r ? "text-muted-foreground" : "text-foreground"),
								children: t.getDate()
							}),
							n.slice(0, Go).map((t) => /* @__PURE__ */ a(e.Fragment, { children: j(t) }, t.key)),
							s > 0 && /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ a(kr, {
								className: "truncate rounded-sm px-1.5 text-left whitespace-nowrap text-xs text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
								children: p.dataTable.moreItems(s)
							}), /* @__PURE__ */ o(Y, {
								className: "grid w-56 gap-1 p-2",
								children: [/* @__PURE__ */ a("div", {
									className: "px-1.5 pb-1 text-xs font-medium text-muted-foreground",
									children: p.format.date(t)
								}), n.map((t) => /* @__PURE__ */ a(e.Fragment, { children: j(t) }, t.key))]
							})] })
						]
					}, c);
				})
			})] })
		]
	});
}
//#endregion
//#region src/blocks/data/csv.ts
var Xo = (e) => e === "," ? ";" : ",", Zo = /^[=+\-@\t\r]/;
function Qo(e, t) {
	let n = Zo.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function $o(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function es(e, t, n = ".") {
	let r = Xo(n), i = (e) => e.map((e) => Qo(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => $o(t.value(e), n))))].join("\r\n");
}
function ts(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/edit/editable-text.tsx
function ns({ value: t, onSave: n, placeholder: r, required: i, inputMode: s, disabled: c, className: l, "aria-label": u }) {
	let d = G().editable, f = G().common, [p, m] = e.useState(!1), [h, g] = e.useState(t), [_, v] = e.useState(null), [y, b] = e.useState(!1), x = e.useRef(null), S = e.useId();
	function C() {
		g(t), v(null), m(!0);
	}
	function w() {
		m(!1), v(null), requestAnimationFrame(() => x.current?.focus());
	}
	async function T() {
		let e = h.trim();
		if (i && e === "") return v(d.required);
		if (e === t) return w();
		b(!0), v(null);
		try {
			await n(e), w();
		} catch (e) {
			console.error(e), v(d.saveFailed);
		} finally {
			b(!1);
		}
	}
	return p ? /* @__PURE__ */ o("span", {
		"data-slot": "editable-text",
		"data-editing": !0,
		className: "inline-grid max-w-full gap-1",
		children: [/* @__PURE__ */ o("span", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ a(J, {
					size: "sm",
					autoFocus: !0,
					inputMode: s,
					value: h,
					placeholder: r,
					"aria-label": u,
					"aria-invalid": _ ? !0 : void 0,
					"aria-describedby": _ ? S : void 0,
					disabled: y,
					onFocus: (e) => e.currentTarget.select(),
					onChange: (e) => {
						g(e.target.value), _ && v(null);
					},
					onKeyDown: (e) => {
						e.key === "Enter" ? (e.preventDefault(), T()) : e.key === "Escape" && (e.stopPropagation(), w());
					},
					className: "min-w-40"
				}),
				/* @__PURE__ */ a(q, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					"aria-label": d.save,
					disabled: y,
					onClick: () => void T(),
					className: "shrink-0 text-success-fg hover:text-success-fg",
					children: y ? /* @__PURE__ */ a(Re, { className: "animate-spin" }) : /* @__PURE__ */ a(de, {})
				}),
				/* @__PURE__ */ a(q, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					"aria-label": f.cancel,
					disabled: y,
					onClick: w,
					className: "shrink-0 text-muted-foreground",
					children: /* @__PURE__ */ a(R, {})
				})
			]
		}), _ && /* @__PURE__ */ a("span", {
			id: S,
			role: "alert",
			className: "text-xs text-danger-fg",
			children: _
		})]
	}) : /* @__PURE__ */ o("span", {
		"data-slot": "editable-text",
		className: "group/editable inline-flex max-w-full items-center gap-1",
		children: [/* @__PURE__ */ a("span", {
			className: U("min-w-0 truncate", !t && "text-muted-foreground", l),
			children: t || r
		}), /* @__PURE__ */ a(q, {
			ref: x,
			type: "button",
			variant: "ghost",
			size: "icon-xs",
			disabled: c,
			"aria-label": d.edit(u ?? t),
			onClick: C,
			className: "shrink-0 text-muted-foreground",
			children: /* @__PURE__ */ a(je, { className: "size-3.5" })
		})]
	});
}
//#endregion
//#region src/blocks/data/use-data-table-views.ts
var rs = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], is = (e) => Ui("views", e);
function as(e, t, n = Qt.dataTable.allView) {
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
function os(e, t, n, r) {
	let i = as(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(is(e)), n = t ? JSON.parse(t) : null;
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
var ss = 800, cs = (e) => e.shared !== void 0;
function ls(t, n, r, i, a) {
	let o = G().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = os(r, t, n, o);
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
			let e = s.filter((e) => !cs(e));
			localStorage.setItem(is(r), JSON.stringify({
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
			let a = new Set(as(t, n).map((e) => e.id)), o = s.filter((e) => !cs(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => cs(e) || !u.has(e.name)),
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
		}, ss)));
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
			return r && cs(r) && g(r.id, t(e(r))), {
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
				icon: rs[n.views.length % rs.length],
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
			t && cs(t) && p.current?.remove(t.id).catch(() => {});
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
var us = {
	table: He,
	list: De,
	board: ze,
	star: Be,
	funnel: xe,
	clock: pe,
	users: Ke,
	tag: Ue,
	eye: be,
	calendar: ie,
	timeline: ue
};
function ds({ name: e, className: t }) {
	let n = us[e] ?? He;
	return /* @__PURE__ */ a(n, { className: t });
}
function fs({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(Or, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(kr, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(Y, {
			align: r,
			className: U("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function ps({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(fs, {
		align: "end",
		width: r,
		className: U(K({
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
var ms = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function hs({ columns: t, onPick: n, empty: r }) {
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
			className: U(ms, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Ne, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? He;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: ms,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function gs({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
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
			className: U(K({
				variant: "ghost",
				size: "icon-xs"
			}), "text-muted-foreground hover:text-danger-fg"),
			children: /* @__PURE__ */ a(We, { className: "size-3.5" })
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
			children: [/* @__PURE__ */ a(Pn, {
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
function _s({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = G().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(Hr, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(Gr, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(Wr, {})
					}), /* @__PURE__ */ a(Kr, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(Jr, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(Hr, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(Gr, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(Wr, {})
					}), /* @__PURE__ */ o(Kr, { children: [/* @__PURE__ */ a(Jr, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(Jr, {
						value: "desc",
						children: s.descending
					})] })]
				}),
				/* @__PURE__ */ a("button", {
					type: "button",
					title: s.removeSort,
					onClick: () => r(e.filter((e, t) => t !== i)),
					className: U(K({
						variant: "ghost",
						size: "icon-xs"
					}), "shrink-0 text-muted-foreground hover:text-danger-fg"),
					children: /* @__PURE__ */ a(R, { className: "size-3.5" })
				})
			]
		}, t.id)),
		c.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([...e, {
				id: c[0].key,
				desc: !1
			}]),
			className: U(ms, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Me, { className: "size-3.5" }),
				" ",
				s.addSort
			]
		}),
		e.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([]),
			className: U(ms, "text-danger-fg hover:bg-danger-subtle"),
			children: [
				/* @__PURE__ */ a(We, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function vs({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Vo).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(Pn, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function ys({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a(fs, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(bs, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function bs({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
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
function xs({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
	let { dataTable: d, common: f } = G(), [p, m] = e.useState(null), [h, g] = e.useState(!1), _ = c.find((e) => e.key === p);
	return _ ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
		className: "mb-1 flex items-center gap-1 border-b pb-1.5",
		children: [/* @__PURE__ */ a("button", {
			type: "button",
			onClick: () => m(null),
			"aria-label": d.back,
			className: U(K({
				variant: "ghost",
				size: "icon-xs"
			}), "text-muted-foreground"),
			children: /* @__PURE__ */ a(ae, { className: "size-3.5" })
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
				children: /* @__PURE__ */ a(R, { className: "size-3.5" })
			})]
		}),
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center gap-2",
			children: [/* @__PURE__ */ a("button", {
				type: "button",
				title: d.changeIcon,
				onClick: () => g((e) => !e),
				className: U("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(ds, {
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
			children: rs.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: U("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(ds, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: ms,
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
				/* @__PURE__ */ a(se, { className: "size-3.5 shrink-0 text-muted-foreground" })
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
var Ss = "application/x-ziku-card", Cs = {
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
function ws({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, loading: l, error: u, onRetry: d, className: f }) {
	let p = G().common, [m, h] = e.useState(null), [g, _] = e.useState(null), v = t.flatMap((e) => e.items), y = m !== null, b = (e) => g === e ? "over" : y ? "ready" : "idle", x = (e) => ({
		onDragOver: (t) => {
			i && (t.preventDefault(), t.dataTransfer.dropEffect = "move", _(e));
		},
		onDragLeave: (e) => {
			e.currentTarget.contains(e.relatedTarget) || _(null);
		},
		onDrop: (t) => {
			if (!i) return;
			t.preventDefault(), _(null), h(null);
			let n = t.dataTransfer.getData(Ss), a = v.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return u && !l ? /* @__PURE__ */ a(fo, {
		variant: "alert",
		title: uo(u),
		onRetry: d,
		className: f
	}) : /* @__PURE__ */ a("div", {
		className: U("flex items-start gap-4 overflow-x-auto pb-4", f),
		"aria-busy": l || void 0,
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(Es, {
			col: e,
			state: b(e.key),
			drop: x(e.key),
			loading: l
		}, e.key) : /* @__PURE__ */ o("div", {
			...x(e.key),
			style: { maxHeight: c },
			className: U("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
				idle: "border-border bg-muted/50",
				ready: "border-ring/50 bg-muted/50",
				over: "border-ring bg-accent"
			}[b(e.key)]),
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-baseline justify-between px-2 py-1.5",
				children: [/* @__PURE__ */ a("span", {
					className: po,
					children: e.title
				}), /* @__PURE__ */ a("span", {
					className: "text-xs text-muted-foreground",
					children: l ? null : e.subtitle ? `${e.items.length} · ${e.subtitle}` : e.items.length
				})]
			}), /* @__PURE__ */ o("div", {
				className: "min-h-10 space-y-2 overflow-y-auto",
				children: [l && /* @__PURE__ */ o("div", {
					role: "status",
					"aria-label": p.loading,
					className: "space-y-2",
					children: [/* @__PURE__ */ a(X, { className: "h-16 w-full" }), /* @__PURE__ */ a(X, { className: "h-16 w-full" })]
				}), !l && e.items.map((c) => {
					let l = r(c), u = !!i && (!s || s(c));
					return /* @__PURE__ */ o("div", {
						draggable: u,
						onDragStart: (e) => {
							if (!u) return;
							h(l), e.dataTransfer.setData(Ss, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							h(null), _(null);
						},
						className: U("group/card relative transition-opacity", u ? "cursor-grab active:cursor-grabbing" : "cursor-default", y && "select-none", m === l && "opacity-30"),
						children: [n(c), u && /* @__PURE__ */ a(Ts, {
							columns: t,
							from: e.key,
							onPick: (e) => i?.(c, e)
						})]
					}, l);
				})]
			})]
		}, e.key))
	});
}
function Ts({ columns: e, from: t, onPick: n }) {
	let r = G().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Gn, { children: [/* @__PURE__ */ a(qn, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: U("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ne, { className: "size-3.5" })
	}), /* @__PURE__ */ a(Jn, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(Xn, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function Es({ col: e, state: t, drop: n, loading: r }) {
	let i = e.tile, s = Cs[i.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: U("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? U("border-solid", s.over) : U("border-dashed", s.idle)),
		children: [
			/* @__PURE__ */ a(i.icon, {
				"aria-hidden": !0,
				className: "size-6"
			}),
			/* @__PURE__ */ a("span", {
				className: U(po, "text-current"),
				children: e.title
			}),
			r ? /* @__PURE__ */ a(X, { className: "h-5 w-6" }) : /* @__PURE__ */ a("span", {
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
//#region src/blocks/data/new-row.tsx
var Ds = (e) => !!e.header && e.addable !== !1;
function Os({ columns: t, onSave: n, onClose: r }) {
	let s = G(), c = s.dataTable, [l, u] = e.useState(() => Object.fromEntries(t.filter(Ds).map((e) => [e.key, ""]))), [d, f] = e.useState(!1), [p, m] = e.useState(!1), h = e.useId();
	async function g() {
		f(!0), m(!1);
		try {
			await n(Object.fromEntries(Object.entries(l).map(([e, t]) => [e, t.trim()]))), r();
		} catch (e) {
			console.error(e), m(!0);
		} finally {
			f(!1);
		}
	}
	function _(e) {
		e.currentTarget.contains(e.target) && (e.key === "Enter" && e.target instanceof HTMLInputElement ? (e.preventDefault(), g()) : e.key === "Escape" && (e.stopPropagation(), r()));
	}
	let v = (e) => (t) => {
		u((n) => ({
			...n,
			[e]: t
		})), p && m(!1);
	}, y = t.findIndex(Ds);
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Z, {
		"data-slot": "new-row",
		className: "bg-accent/40 hover:bg-accent/40",
		onKeyDown: _,
		children: t.map((e, n) => {
			let i = n === t.length - 1, u = Ds(e) ? e.order ? /* @__PURE__ */ o(Hr, {
				value: l[e.key] || void 0,
				onValueChange: v(e.key),
				disabled: d,
				children: [/* @__PURE__ */ a(Gr, {
					size: "sm",
					"aria-label": e.header,
					autoFocus: n === y,
					className: "w-full min-w-28",
					children: /* @__PURE__ */ a(Wr, {})
				}), /* @__PURE__ */ a(Kr, { children: e.order.map((t) => /* @__PURE__ */ a(Jr, {
					value: t,
					children: e.facetLabel ? e.facetLabel(t) : t
				}, t)) })]
			}) : /* @__PURE__ */ a(J, {
				size: "sm",
				"aria-label": e.header,
				"aria-describedby": p ? h : void 0,
				autoFocus: n === y,
				disabled: d,
				value: l[e.key],
				onChange: (t) => v(e.key)(t.target.value),
				className: "min-w-28"
			}) : null;
			return /* @__PURE__ */ a(ba, {
				className: "py-1.5",
				children: /* @__PURE__ */ o("div", {
					className: "flex items-center gap-1",
					children: [u && /* @__PURE__ */ a("div", {
						className: "min-w-0 flex-1",
						children: u
					}), i && /* @__PURE__ */ o("div", {
						className: "ml-auto flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ a(q, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": c.saveRow,
							disabled: d,
							onClick: () => void g(),
							className: "text-success-fg hover:text-success-fg",
							children: d ? /* @__PURE__ */ a(Re, { className: "animate-spin" }) : /* @__PURE__ */ a(de, {})
						}), /* @__PURE__ */ a(q, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": s.common.cancel,
							disabled: d,
							onClick: r,
							className: "text-muted-foreground",
							children: /* @__PURE__ */ a(R, {})
						})]
					})]
				})
			}, e.key);
		})
	}), p && /* @__PURE__ */ a(Z, {
		className: "hover:bg-transparent",
		children: /* @__PURE__ */ a(ba, {
			id: h,
			role: "alert",
			colSpan: t.length,
			className: "py-1.5 text-xs text-danger-fg",
			children: c.addRowFailed
		})
	})] });
}
function ks({ columns: t, onAdd: n }) {
	let r = G().dataTable, [i, s] = e.useState(!1), c = e.useRef(null);
	return i ? /* @__PURE__ */ a(Os, {
		columns: t,
		onSave: n,
		onClose: () => {
			s(!1), requestAnimationFrame(() => c.current?.focus());
		}
	}) : /* @__PURE__ */ a(Z, {
		className: "hover:bg-transparent",
		children: /* @__PURE__ */ a(ba, {
			colSpan: t.length,
			className: "py-1",
			children: /* @__PURE__ */ o(q, {
				ref: c,
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: () => s(!0),
				className: "text-muted-foreground",
				children: [/* @__PURE__ */ a(Me, {}), r.addRow]
			})
		})
	});
}
//#endregion
//#region src/blocks/data/data-table.tsx
var As = Ct({
	rowSortingFeature: St,
	sortedRowModel: vt(),
	columnFilteringFeature: lt,
	filteredRowModel: ht(),
	globalFilteringFeature: yt,
	columnFacetingFeature: V,
	facetedRowModel: pt(),
	facetedUniqueValues: mt(),
	columnGroupingFeature: ut,
	groupedRowModel: gt(),
	rowExpandingFeature: bt,
	expandedRowModel: ft(),
	columnVisibilityFeature: dt,
	rowPaginationFeature: xt,
	paginatedRowModel: _t()
});
function js({ columns: t, data: n, loading: r, error: s, onRetry: c, empty: l, rowId: u, search: d = !0, searchPlaceholder: f, toolbar: p, onRowClick: m, pageSize: h = 0, defaultSort: g, defaultHidden: _, defaultFilters: v, defaultGroup: y = "", defaultMode: b = "table", renderCard: x, boardSubtitle: S, dates: C, presets: w = [], viewKey: T, onStateChange: E, view: ne, viewsBackend: re, paged: k, csv: ae, onAddRow: oe, className: ce }) {
	let le = G(), A = le.dataTable, j = le.common, de = e.useMemo(() => n ?? [], [n]), M = !!k, N = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), fe = e.useMemo(() => ({
		sorting: g ? [{
			id: g.key,
			desc: g.dir === "desc"
		}] : [],
		columnFilters: v ?? [],
		globalFilter: "",
		columnVisibility: Object.fromEntries((_ ?? []).map((e) => [e, !1])),
		grouping: y ? [y] : [],
		mode: b
	}), [
		g,
		y,
		b
	]), pe = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => N[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => N[e.id]).map((e) => N[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: Lo(e.value) ? [] : [Q(e.value)]
		} : e).map((e) => {
			let t = N[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Q(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => N[e])
	}), [N]), me = ls(fe, w, T, re, ne), { views: he, active: _e, isPreset: ve, patch: P } = me, F = e.useMemo(() => pe(_e.state), [_e.state, pe]);
	e.useEffect(() => {
		E?.(F, _e.id);
	}, [
		F,
		_e.id,
		E
	]);
	let Ce = (e) => (t) => P({ [e]: typeof t == "function" ? t(F[e]) : t }), we = e.useMemo(() => {
		let e = t.find(Vo), n = (t) => e ? Ho(e, Q(e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key])) : "";
		return t.map((e) => {
			if (e.onEdit && (e.render || e.facetKey)) throw Error("DataTable: column " + JSON.stringify(e.key) + " has onEdit with " + (e.render ? "render" : "facetKey") + "; an editable column shows and saves its value(row) text, so drop one of them");
			return {
				id: e.key,
				header: e.header,
				accessorFn: (t) => {
					let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
					return n == null || n === "" ? void 0 : n;
				},
				cell: (t) => e.onEdit ? /* @__PURE__ */ a(Gs, {
					column: e,
					row: t.row.original,
					value: Q(t.getValue()),
					rowName: n(t.row.original)
				}) : e.render ? e.render(t.row.original) : Ho(e, Q(t.getValue())) || "—",
				enableSorting: e.sortable !== !1 && (!M || !!e.sortKey),
				enableGlobalFilter: e.sortable !== !1,
				enableGrouping: !!e.facet,
				enableHiding: Vo(e),
				sortUndefined: "last",
				sortFn: (t, n, r) => e.order ? Bo(e)(Q(t.getValue(r)), Q(n.getValue(r))) : Io(t.getValue(r), n.getValue(r)),
				filterFn: (e, t, n) => {
					if (Lo(n)) return !0;
					let r = Q(e.getValue(t));
					return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
				}
			};
		});
	}, [t, M]), [Te, Ee] = e.useState(!0), [De, ke] = e.useState(0), I = F.grouping[0] ?? "", Ae = t.filter((e) => e.facet), je = !!(x && Ae.length && u), Ne = F.mode === "board" && je, Fe = !!(C && u), Ie = F.mode === "timeline" && Fe, Re = F.mode === "calendar" && Fe, Be = [
		[
			"table",
			Pe,
			A.table
		],
		...je ? [[
			"board",
			ze,
			A.board
		]] : [],
		...Fe ? [[
			"timeline",
			ue,
			A.timeline
		], [
			"calendar",
			ie,
			A.calendar
		]] : []
	], Ve = Be.some(([e]) => e === F.mode) ? F.mode : "table", Ue = h > 0 && !I && Ve === "table" && !M, Ge = e.useMemo(() => F.columnFilters.filter((e) => !Lo(e.value) && !N[e.id]?.filterKey), [F.columnFilters, N]), qe = M && (Ge.length > 0 || F.grouping.length > 0 || Ne || Ie || Re), Je = e.useMemo(() => I && !F.sorting.some((e) => e.id === I) ? [{
		id: I,
		desc: !1
	}, ...F.sorting] : F.sorting, [I, F.sorting]), L = wt({
		features: As,
		data: de,
		columns: we,
		state: {
			sorting: Je,
			columnFilters: M ? Ge : F.columnFilters,
			globalFilter: M ? "" : F.globalFilter,
			columnVisibility: F.columnVisibility,
			grouping: F.grouping,
			expanded: Te,
			pagination: {
				pageIndex: Ue ? De : 0,
				pageSize: Ue ? h : 2 ** 53 - 1
			}
		},
		onSortingChange: Ce("sorting"),
		onColumnFiltersChange: Ce("columnFilters"),
		onGlobalFilterChange: Ce("globalFilter"),
		onColumnVisibilityChange: Ce("columnVisibility"),
		onGroupingChange: Ce("grouping"),
		groupedColumnMode: "remove",
		onExpandedChange: Ee,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: De,
				pageSize: Ue ? h : 2 ** 53 - 1
			}) : e;
			ke(t.pageIndex);
		},
		manualSorting: M && !I,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Q(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), Ye = L.getFilteredRowModel().rows;
	function Xe() {
		if (!ae) return;
		let e = ae.decimal ?? ".", t = L.getVisibleLeafColumns().map((e) => N[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = L.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		ts(ae.filename, es(n, t, e));
	}
	e.useEffect(() => {
		ke(0);
	}, [
		F.columnFilters,
		F.globalFilter,
		F.grouping
	]);
	let Ze = Ws(F.globalFilter, Us), Qe = JSON.stringify(Wo(t, {
		...F,
		globalFilter: Ze
	})), $e = e.useRef(k?.setQuery);
	e.useEffect(() => {
		$e.current = k?.setQuery;
	}), e.useEffect(() => {
		$e.current?.(JSON.parse(Qe));
	}, [Qe]);
	let et = e.useRef(null), [tt, nt] = e.useState(!1), rt = e.useRef(null), it = () => {
		nt(!1), requestAnimationFrame(() => rt.current?.focus());
	}, at = t.find((e) => e.header), ot = C && u && (Ie || Re) ? {
		items: L.getSortedRowModel().rows.filter((e) => !e.getIsGrouped()).map((e) => e.original),
		itemKey: u,
		start: C.start,
		end: C.end,
		label: C.label ?? ((e) => at ? Q(at.value ? at.value(e) : e[at.key]) : ""),
		onItemClick: m,
		onReschedule: C.onReschedule
	} : null, st = oe && Ve === "table" && /* @__PURE__ */ o(q, {
		ref: rt,
		type: "button",
		variant: "ghost",
		size: "sm",
		onClick: () => nt(!0),
		className: "text-muted-foreground",
		children: [/* @__PURE__ */ a(Me, {}), A.addRow]
	}), ct = k?.more, z = k?.hasMore ?? !1, B = k?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = et.current;
		if (!e || !ct || !z || B) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && ct();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		ct,
		z,
		B
	]), e.useEffect(() => {
		qe && z && !B && ct?.();
	}, [
		qe,
		z,
		B,
		ct
	]);
	let V = F.columnFilters, lt = Object.values(F.columnVisibility).filter((e) => e === !1).length, ut = V.length > 0 || !!F.globalFilter || F.grouping.length > 0 || F.sorting.length > 0 || lt > 0, dt = ut && (de.length > 0 || M), ft = t.filter((e) => Vo(e) && e.sortable !== !1 && !V.some((t) => t.id === e.key)), pt = t.filter((e) => Vo(e) && e.sortable !== !1 && (!M || !!e.sortKey)), mt = (e) => P({ columnFilters: [...V, {
		id: e,
		value: N[e]?.facet ? [] : ""
	}] }), ht = (e) => P({ columnFilters: V.filter((t) => t.id !== e) }), gt = (e, t) => P({ columnFilters: V.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function _t(e) {
		if (!e.facet) return [];
		let t = M && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: Ho(e, t)
		})) : [...L.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Bo(e)(Q(t[0]), Q(n[0]))).map(([n, r]) => ({
			value: Q(n),
			label: t ? Ho(e, Q(n)) : `${Ho(e, Q(n))} (${r})`
		}));
	}
	let vt = (e) => P({
		mode: e,
		grouping: e === "board" && !I ? [Ae[0].key] : F.grouping
	}), yt = /* @__PURE__ */ a(vs, {
		columns: t,
		visibility: F.columnVisibility,
		onToggle: (e, t) => P({ columnVisibility: {
			...F.columnVisibility,
			[e]: t
		} })
	}), bt = /* @__PURE__ */ a(_s, {
		sorting: F.sorting,
		sortable: pt,
		byKey: N,
		onChange: (e) => P({ sorting: e })
	}), xt = (e) => /* @__PURE__ */ a(hs, {
		columns: Ae,
		empty: {
			label: A.noGrouping,
			onPick: () => {
				P({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			P({ grouping: [t] }), e?.();
		}
	}), St = /* @__PURE__ */ o(i, { children: [
		V.map((e) => {
			let t = N[e.id];
			if (!t) return null;
			let n = t.icon ?? xe;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Uo(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => ht(e.id),
						"aria-label": A.removeFilterFor(t.header),
						className: U(K({
							variant: "ghost",
							size: "icon-xs"
						}), "shrink-0 text-muted-foreground hover:text-danger-fg"),
						children: /* @__PURE__ */ a(R, { className: "size-3.5" })
					})
				]
			}, e.id);
		}),
		V.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(hs, {
			columns: ft,
			onPick: mt
		})
	] }), Ct = [
		...Be.length > 1 ? [{
			key: "layout",
			icon: He,
			label: A.layout,
			value: Be.find(([e]) => e === Ve)?.[2],
			panel: /* @__PURE__ */ a(i, { children: Be.map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => vt(e),
				className: U("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", Ve === e && "font-medium"),
				children: [
					/* @__PURE__ */ a(t, { className: "size-4 text-muted-foreground" }),
					" ",
					n
				]
			}, e)) })
		}] : [],
		{
			key: "columns",
			icon: be,
			label: A.visibleColumns,
			value: lt ? A.hidden(lt) : A.allView,
			panel: yt
		},
		{
			key: "filter",
			icon: Se,
			label: A.filters,
			value: V.length ? String(V.length) : void 0,
			panel: St
		},
		{
			key: "sort",
			icon: Le,
			label: A.sorting,
			value: F.sorting.length ? F.sorting.length === 1 ? N[F.sorting[0].id]?.header : String(F.sorting.length) : void 0,
			panel: bt
		},
		...Ae.length ? [{
			key: "group",
			icon: Pe,
			label: A.groupBy,
			value: I ? N[I]?.header : j.none,
			panel: xt()
		}] : []
	], H = I ? N[I] : null, Et = (e) => e && e !== "—" ? Ho(H ?? void 0, e) : "—", Dt = e.useMemo(() => {
		if (!Ne || !H) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of Ye) {
			let n = Q(t.getValue(I)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...H.order ?? [], ...e.keys()])].sort(Bo(H)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: Et(t),
				items: n,
				subtitle: S?.(n),
				tile: H.boardTile?.(t)
			};
		});
	}, [
		Ne,
		H,
		Ye,
		I,
		S
	]), Ot = L.getVisibleLeafColumns().length, kt = L.getRowModel().rows, At = kt.length > Ms, jt = e.useRef(null), Mt = Tt({
		count: kt.length,
		enabled: At,
		getScrollElement: () => jt.current,
		estimateSize: () => Ns,
		overscan: Ps,
		initialRect: {
			width: 0,
			height: Fs
		},
		measureElement: (e) => e.getBoundingClientRect().height || Ns,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || Fs
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), Nt = Mt.getVirtualItems(), Pt = At ? Nt.map((e) => ({
		row: kt[e.index],
		index: e.index
	})) : kt.map((e, t) => ({
		row: e,
		index: t
	})), Ft = At && Nt.length > 0 ? Nt[0].start : 0, It = At && Nt.length > 0 ? Mt.getTotalSize() - Nt[Nt.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: U("overflow-hidden rounded-md border bg-card", ce),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [he.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => me.select(e.id),
						className: U("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === _e.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(ds, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: A.sharedBy(e.ownerName),
								"aria-label": A.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(Ke, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(ys, {
						align: "start",
						title: A.saveView,
						className: U(K({
							variant: "ghost",
							size: "icon-sm"
						}), "shrink-0 text-muted-foreground"),
						trigger: /* @__PURE__ */ a(Me, { className: "size-4" }),
						defaultValue: A.newView,
						confirmLabel: A.createView,
						onSubmit: me.add,
						shareLabel: me.sharable ? A.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						p,
						d && /* @__PURE__ */ a(ps, {
							icon: Oe,
							label: j.search,
							active: !!F.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(J, {
								className: "h-8",
								placeholder: f ?? j.searchPlaceholder,
								autoFocus: !0,
								value: F.globalFilter,
								onChange: (e) => P({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(ps, {
							icon: Se,
							label: A.filter,
							active: V.length > 0,
							children: (e) => /* @__PURE__ */ a(hs, {
								columns: ft,
								onPick: (t) => {
									mt(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(ps, {
							icon: Le,
							label: A.sort,
							active: F.sorting.length > 0,
							width: "w-88",
							children: bt
						}),
						Ae.length > 0 && /* @__PURE__ */ a(ps, {
							icon: Pe,
							label: A.group,
							active: !!I,
							children: (e) => xt(e)
						}),
						/* @__PURE__ */ a(ps, {
							icon: be,
							label: A.visibleColumns,
							active: lt > 0,
							width: "w-52",
							children: yt
						}),
						Be.length > 1 && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: Be.map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								"aria-pressed": Ve === e,
								onClick: () => vt(e),
								className: U("px-2 py-1 outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80", Ve === e ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(fs, {
							align: "end",
							width: "w-72",
							className: U(K({
								variant: "ghost",
								size: "icon-sm"
							}), "ml-1 text-muted-foreground"),
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": A.viewSettings,
								children: /* @__PURE__ */ a(ge, { className: "size-4" })
							}),
							children: (e) => /* @__PURE__ */ a(xs, {
								name: _e.name,
								icon: _e.icon,
								onIcon: me.setIcon,
								onRename: me.rename,
								onClose: e,
								rows: Ct,
								footer: /* @__PURE__ */ o(i, { children: [ae && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										Xe(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(ye, { className: "size-4 text-muted-foreground" }), A.exportCsv]
								}), !ve && _e.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										me.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger-subtle",
									children: [
										/* @__PURE__ */ a(We, { className: "size-4" }),
										" ",
										A.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(V.length > 0 || F.sorting.length > 0 || I) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-2 border-b px-4 py-2",
				children: [
					F.sorting.length > 0 && /* @__PURE__ */ a(fs, {
						width: "w-88",
						className: Rs,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Le, { className: "size-3.5" }),
								F.sorting.length === 1 ? `${N[F.sorting[0].id]?.header ?? F.sorting[0].id} ${F.sorting[0].desc ? "↓" : "↑"}` : A.sortCount(F.sorting.length),
								/* @__PURE__ */ a(O, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: bt
					}),
					I && /* @__PURE__ */ a(fs, {
						className: Rs,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Pe, { className: "size-3.5" }),
								A.groupedBy(N[I]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(O, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: (e) => xt(e)
					}),
					V.map((e) => {
						let t = N[e.id];
						if (!t) return null;
						let n = t.icon ?? xe;
						return /* @__PURE__ */ a(fs, {
							className: Lo(e.value) ? zs : Rs,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, { className: "size-3.5" }),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Uo(t, e.value)
									}),
									/* @__PURE__ */ a(O, { className: "size-3.5 text-muted-foreground" })
								]
							}),
							children: (n) => /* @__PURE__ */ a(gs, {
								col: t,
								options: _t(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => gt(e.id, t),
								onRemove: () => {
									ht(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(fs, {
						className: Bs,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Me, { className: "size-3.5" }),
								" ",
								A.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(hs, {
							columns: ft,
							onPick: (t) => {
								mt(t), e();
							}
						})
					}),
					ut && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: me.reset,
						className: U(Bs, "ml-auto"),
						children: [
							/* @__PURE__ */ a(R, { className: "size-3.5" }),
							" ",
							A.clearFilters
						]
					})
				]
			}),
			r && (!Ne || Dt.length === 0) ? /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				children: /* @__PURE__ */ o(ha, {
					className: Hs,
					children: [/* @__PURE__ */ a(ga, { children: /* @__PURE__ */ a(Z, {
						className: "hover:bg-transparent",
						children: L.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(ya, {
							className: U(Vs, N[e.id]?.className),
							children: N[e.id]?.header
						}, e.id))
					}) }), /* @__PURE__ */ a(_a, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(Z, {
						className: "hover:bg-transparent",
						children: L.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(ba, {
							className: N[e.id]?.className,
							children: /* @__PURE__ */ a(X, { className: "h-4 w-full" })
						}, e.id))
					}, t)) })]
				})
			}) : r ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(ws, {
					columns: Dt,
					itemKey: u,
					renderCard: x,
					loading: !0
				})
			}) : s ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(fo, {
					variant: "alert",
					title: uo(s),
					onRetry: c
				})
			}) : Ye.length === 0 && !tt ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: dt ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: A.noMatches }), /* @__PURE__ */ o(q, {
						variant: "outline",
						size: "sm",
						onClick: me.reset,
						children: [/* @__PURE__ */ a(R, { className: "size-3.5" }), A.clearAllFilters]
					})]
				}) : /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("div", { children: l ?? j.noResults }), st]
				})
			}) : ot && Ie ? /* @__PURE__ */ a(Po, { ...ot }) : ot && Re ? /* @__PURE__ */ a(Yo, {
				...ot,
				defaultScale: C?.calendarScale
			}) : Ne ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(ws, {
					columns: Dt,
					itemKey: u,
					renderCard: x,
					onDrop: H?.onSet ? (e, t) => H.onSet(e, t) : void 0,
					canDrag: (e) => !!H?.onSet && (H?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(ha, {
					className: Hs,
					containerRef: jt,
					containerClassName: U(At && `${Is} overflow-y-auto`),
					"aria-rowcount": kt.length + 1,
					children: [/* @__PURE__ */ a(ga, { children: L.getHeaderGroups().map((e) => /* @__PURE__ */ a(Z, {
						"aria-rowindex": 1,
						className: "hover:bg-transparent",
						children: e.headers.map((e) => {
							let t = N[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ee : n === "desc" ? D : te, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, { className: "size-3.5 opacity-70" }), /* @__PURE__ */ a(L.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(ya, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: U(Vs, n && "text-foreground", At && "sticky top-0 z-10 bg-card", t?.className),
								children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.column.getToggleSortingHandler(),
									className: U("group/sort inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80"),
									children: [c, /* @__PURE__ */ a(s, {
										"aria-hidden": !0,
										className: U("size-3.5", !n && "opacity-0 group-hover/sort:opacity-100 group-focus-visible/sort:opacity-100")
									})]
								}) : /* @__PURE__ */ a("span", {
									className: "inline-flex items-center gap-1.5",
									children: c
								})
							}, e.id);
						})
					}, e.id)) }), /* @__PURE__ */ o(_a, { children: [
						Ft > 0 && /* @__PURE__ */ a(Z, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(ba, {
								colSpan: Ot,
								className: "p-0",
								style: { height: Ft }
							})
						}),
						Pt.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(Z, {
							ref: At ? Mt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(ya, {
								colSpan: Ot,
								className: U("bg-muted/50", po),
								children: /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.getToggleExpandedHandler(),
									"aria-expanded": e.getIsExpanded(),
									className: "inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
									children: [
										e.getIsExpanded() ? /* @__PURE__ */ a(O, { className: "size-3.5" }) : /* @__PURE__ */ a(se, { className: "size-3.5" }),
										Et(Q(e.getValue(I))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(Z, {
							ref: At ? Mt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: m ? "button" : void 0,
							tabIndex: m ? 0 : void 0,
							onClick: m ? () => m(e.original) : void 0,
							onKeyDown: m ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), m(e.original));
							} : void 0,
							className: m ? "cursor-pointer outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(ba, {
								className: N[e.column.id]?.className,
								children: /* @__PURE__ */ a(L.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						It > 0 && /* @__PURE__ */ a(Z, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(ba, {
								colSpan: Ot,
								className: "p-0",
								style: { height: It }
							})
						}),
						oe && (tt ? /* @__PURE__ */ a(Os, {
							columns: L.getVisibleLeafColumns().map((e) => N[e.id]).filter((e) => !!e),
							onSave: oe,
							onClose: it
						}) : /* @__PURE__ */ a(Z, {
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(ba, {
								colSpan: Ot,
								className: "py-1",
								children: st
							})
						})),
						z && /* @__PURE__ */ a(Z, {
							ref: et,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(ba, {
								colSpan: Ot,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: B ? A.loadingMore : null
							})
						})
					] })]
				})
			}),
			Ue && !r && !s && Ye.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t px-4 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: A.rowCount(Ye.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: A.pageOf(De + 1, Math.max(L.getPageCount(), 1)) }),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => L.previousPage(),
							disabled: !L.getCanPreviousPage(),
							children: A.previousPage
						}),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => L.nextPage(),
							disabled: !L.getCanNextPage(),
							children: A.nextPage
						})
					]
				})]
			})
		]
	});
}
var Ms = 100, Ns = 37, Ps = 12, Fs = 640, Is = "max-h-[70dvh]", Ls = K({
	variant: "outline",
	size: "sm"
}), Rs = U(Ls, "bg-accent text-accent-foreground"), zs = U(Ls, "border-dashed text-muted-foreground"), Bs = U(K({
	variant: "ghost",
	size: "sm"
}), "text-muted-foreground"), Vs = "h-9 text-xs font-medium whitespace-nowrap text-muted-foreground", Hs = "[&_td]:px-3 [&_th]:px-3 [&_tr>:first-child]:pl-4 [&_tr>:last-child]:pr-4", Us = 300;
function Ws(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
function Gs({ column: e, row: t, value: n, rowName: r }) {
	let i = G().dataTable, o = e.onEdit;
	return /* @__PURE__ */ a("span", {
		className: "contents",
		onClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ns, {
			value: n,
			onSave: (e) => o(t, e),
			"aria-label": i.editCell(e.header, r),
			inputMode: e.editInput?.inputMode,
			required: e.editInput?.required
		})
	});
}
//#endregion
//#region src/blocks/data/chip-picker.tsx
function Ks({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = G().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ o(kr, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: U("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(Ht, {
				variant: "secondary",
				className: U("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(O, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(Y, {
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
						/* @__PURE__ */ a("span", {
							"aria-hidden": !0,
							"data-state": n ? "checked" : "unchecked",
							className: "grid size-4 shrink-0 place-content-center rounded-xs border border-input data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
							children: n && /* @__PURE__ */ a(de, { className: "size-3.5" })
						}),
						e.className ? /* @__PURE__ */ a(Ht, {
							variant: "secondary",
							className: U("truncate", e.className),
							children: e.label
						}) : /* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
						e.className && /* @__PURE__ */ a("span", { className: "min-w-0 flex-1" }),
						n && /* @__PURE__ */ a(de, { className: "size-3.5 shrink-0" })
					]
				}, e.value);
			})]
		})
	})] });
}
//#endregion
//#region src/blocks/data/list-url.ts
var qs = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function Js(e) {
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
	i && (n.group = i);
	let a = t.get("mode"), o = zo.find((e) => e === a);
	o && o !== "table" && (n.mode = o);
	let s = t.get("view");
	return s && (n.view = s), n;
}
function Ys(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of qs) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode && e.mode !== "table" && n.set("mode", e.mode), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function Xs(e, t) {
	return Ys(e).toString() === Ys(t).toString();
}
function Zs(e, t) {
	let [n] = e.sorting;
	return {
		q: e.globalFilter ?? "",
		sort: n ? {
			key: n.id,
			dir: n.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(e.columnFilters.map((e) => [e.id, Array.isArray(e.value) ? e.value : []])),
		group: e.grouping[0],
		mode: e.mode === "table" ? void 0 : e.mode,
		view: t
	};
}
function Qs(e) {
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
//#region src/blocks/auth/social-button.tsx
var $s = {
	google: {
		name: "Google",
		icon: Te
	},
	github: {
		name: "GitHub",
		icon: we
	},
	apple: {
		name: "Apple",
		icon: w
	},
	microsoft: {
		name: "Microsoft",
		icon: L
	}
}, ec = Object.keys($s);
function tc({ provider: e, variant: t = "outline", ...n }) {
	let r = G().auth, i = $s[e];
	if (!i) throw Error("SocialButton: unknown provider " + JSON.stringify(e) + ", expected one of " + ec.join(", "));
	let s = i.icon;
	return /* @__PURE__ */ o(q, {
		type: "button",
		variant: t,
		className: "w-full",
		...n,
		children: [/* @__PURE__ */ a(s, {}), r.continueWith(i.name)]
	});
}
//#endregion
//#region src/blocks/shell/app-shell.tsx
function nc({ brand: e, sidebarHeader: t, sidebarFooter: n, nav: r, currentPath: s, user: c, userMenu: l, onSignOut: u, headerActions: d, headerContent: f, classNames: p, bleed: m = !1, children: h }) {
	let g = G().shell;
	return /* @__PURE__ */ o(mi, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: g.skipToContent
		}),
		/* @__PURE__ */ o(hi, {
			collapsible: "icon",
			rootClassName: p?.sidebar,
			children: [
				/* @__PURE__ */ o(bi, { children: [/* @__PURE__ */ o("div", {
					className: "flex h-12 items-center gap-1",
					children: [/* @__PURE__ */ a("div", {
						className: "flex h-12 min-w-0 flex-1 items-center gap-2 p-2 text-sm group-data-[collapsible=icon]:hidden",
						children: typeof e == "string" ? /* @__PURE__ */ a(Na, { children: e }) : e
					}), /* @__PURE__ */ a(gi, { className: "shrink-0 group-data-[collapsible=icon]:mx-auto" })]
				}), t && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: t
				})] }),
				/* @__PURE__ */ a(Ci, { children: r.map((e, t) => /* @__PURE__ */ o(wi, { children: [e.label && /* @__PURE__ */ a(Ti, { children: e.label }), /* @__PURE__ */ a(Di, { children: /* @__PURE__ */ a(Oi, { children: e.items.map((e) => /* @__PURE__ */ o(ki, { children: [/* @__PURE__ */ a(ji, {
					asChild: !0,
					isActive: s === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(Va, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(Ni, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				n && /* @__PURE__ */ a(xi, { children: /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				}) })
			]
		}),
		/* @__PURE__ */ o(vi, {
			as: "div",
			children: [/* @__PURE__ */ o("header", {
				className: U("flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl", p?.header),
				children: [
					/* @__PURE__ */ a(gi, { className: "-ml-1 md:hidden" }),
					/* @__PURE__ */ a("div", {
						className: "flex min-w-0 flex-1 items-center gap-2",
						children: f
					}),
					d && /* @__PURE__ */ a("div", {
						className: "flex items-center gap-2",
						children: d
					}),
					c && /* @__PURE__ */ o(Gn, { children: [/* @__PURE__ */ a(qn, {
						asChild: !0,
						children: /* @__PURE__ */ a(q, {
							variant: "ghost",
							size: "icon",
							"aria-label": g.accountMenu,
							className: "shrink-0 rounded-full",
							children: /* @__PURE__ */ a(zt, {
								name: c.name,
								src: c.avatarUrl,
								className: "size-8"
							})
						})
					}), /* @__PURE__ */ o(Jn, {
						align: "end",
						className: "min-w-56",
						children: [
							/* @__PURE__ */ o(er, {
								className: "font-normal",
								children: [
									/* @__PURE__ */ a("div", {
										className: "text-sm font-medium",
										children: c.name
									}),
									c.role && /* @__PURE__ */ a("div", {
										className: "text-xs text-muted-foreground",
										children: c.role
									}),
									/* @__PURE__ */ a("div", {
										className: "text-xs text-muted-foreground",
										children: c.email
									})
								]
							}),
							l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(tr, {}), l] }),
							u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(tr, {}), /* @__PURE__ */ o(Xn, {
								onSelect: u,
								children: [/* @__PURE__ */ a(Ie, {}), g.signOut]
							})] })
						]
					})] })
				]
			}), /* @__PURE__ */ a("main", {
				id: "content",
				tabIndex: -1,
				className: U("flex flex-1 flex-col outline-none", m ? "gap-0" : "gap-6 p-4 md:p-6", p?.main),
				children: h
			})]
		})
	] });
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
function rc({ className: t }) {
	let n = G().preferences, { zoom: r, setZoom: i } = ra(), [s, c] = e.useState(String(r));
	e.useEffect(() => c(String(r)), [r]);
	let l = () => {
		let e = Number.parseInt(s, 10);
		Number.isNaN(e) ? c(String(r)) : (i(e), c(String(Math.min(150, Math.max(75, e)))));
	}, u = [...qi].reverse().find((e) => e < r), d = qi.find((e) => e > r);
	return /* @__PURE__ */ o("div", {
		className: U("flex w-fit items-center gap-1", t),
		children: [/* @__PURE__ */ o("div", {
			role: "group",
			"aria-label": n.zoom,
			className: "flex items-center rounded-md border",
			children: [
				/* @__PURE__ */ a(q, {
					variant: "ghost",
					size: "icon-sm",
					className: "rounded-r-none",
					"aria-label": n.zoomOut,
					disabled: u === void 0,
					onClick: () => u !== void 0 && i(u),
					children: /* @__PURE__ */ a(I, {})
				}),
				/* @__PURE__ */ o("label", {
					className: "flex h-8 items-center border-x px-2 text-sm tabular-nums focus-within:ring-[1.5px] focus-within:ring-ring/80 focus-within:ring-inset",
					children: [/* @__PURE__ */ a("input", {
						type: "text",
						inputMode: "numeric",
						"aria-label": n.zoomPercent,
						value: s,
						onChange: (e) => c(e.target.value.replace(/[^0-9]/g, "").slice(0, 3)),
						onBlur: l,
						onKeyDown: (e) => {
							e.key === "Enter" && l(), e.key === "Escape" && c(String(r));
						},
						onFocus: (e) => e.currentTarget.select(),
						className: "w-8 bg-transparent text-right outline-none"
					}), /* @__PURE__ */ a("span", {
						"aria-hidden": !0,
						className: "text-muted-foreground",
						children: n.percentSign
					})]
				}),
				/* @__PURE__ */ a(q, {
					variant: "ghost",
					size: "icon-sm",
					className: "rounded-l-none",
					"aria-label": n.zoomIn,
					disabled: d === void 0,
					onClick: () => d !== void 0 && i(d),
					children: /* @__PURE__ */ a(Me, {})
				})
			]
		}), r !== 100 && /* @__PURE__ */ a(q, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": n.resetZoom,
			title: n.resetZoom,
			onClick: () => i(100),
			className: "text-muted-foreground",
			children: /* @__PURE__ */ a(E, {})
		})]
	});
}
var ic = {
	light: Ve,
	dark: Ae,
	system: he
};
function ac({ className: e }) {
	let t = G().preferences, { theme: n, setTheme: r } = ua();
	return /* @__PURE__ */ a(ja, {
		type: "single",
		variant: "outline",
		size: "sm",
		value: n,
		"aria-label": t.appearance,
		onValueChange: (e) => e && r(e),
		className: e,
		children: Ji.map((e) => {
			let n = ic[e];
			return /* @__PURE__ */ o(Ma, {
				value: e,
				className: "gap-1.5 px-2.5",
				children: [/* @__PURE__ */ a(n, {}), t.themes[e]]
			}, e);
		})
	});
}
function oc({ options: e, value: t, onChange: n, className: r }) {
	let i = G().preferences;
	if (!e.some((e) => e.code === t)) throw Error("LanguagePicker: value " + JSON.stringify(t) + " is not one of " + e.map((e) => e.code).join(", "));
	return /* @__PURE__ */ o(Hr, {
		value: t,
		onValueChange: n,
		children: [/* @__PURE__ */ a(Gr, {
			size: "sm",
			"aria-label": i.language,
			className: r,
			children: /* @__PURE__ */ a(Wr, {})
		}), /* @__PURE__ */ a(Kr, { children: e.map((e) => /* @__PURE__ */ a(Jr, {
			value: e.code,
			lang: e.code,
			children: e.label
		}, e.code)) })]
	});
}
function sc({ language: e, side: t, align: n = "end", className: r }) {
	let i = G().preferences, s = (e, t) => /* @__PURE__ */ o("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ a("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: e
		}), t]
	});
	return /* @__PURE__ */ o(Or, { children: [/* @__PURE__ */ a(kr, {
		asChild: !0,
		children: /* @__PURE__ */ a(q, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": i.title,
			className: r,
			children: /* @__PURE__ */ a(Ce, {})
		})
	}), /* @__PURE__ */ o(Y, {
		side: t,
		align: n,
		className: "grid w-auto gap-4 p-3",
		children: [
			s(i.appearance, /* @__PURE__ */ a(ac, {})),
			e && s(i.language, /* @__PURE__ */ a(oc, {
				...e,
				className: "w-full"
			})),
			s(i.zoom, /* @__PURE__ */ a(rc, {}))
		]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var cc = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function lc({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = G().modal;
	return /* @__PURE__ */ a(Fn, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Bn, {
			showCloseButton: !1,
			className: U("flex max-h-[92dvh] flex-col gap-0 p-0", cc[s], c),
			onOpenAutoFocus: ti,
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Un, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(Wn, { children: r })]
					}), /* @__PURE__ */ a(Rn, {
						"aria-label": u.close,
						className: U(K({
							variant: "ghost",
							size: "icon-xs"
						}), "-mr-1 text-muted-foreground"),
						children: /* @__PURE__ */ a(R, { className: "size-4" })
					})]
				}),
				l != null && /* @__PURE__ */ a("div", {
					"data-overlay-body": !0,
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
//#region src/blocks/drawer/drawer.tsx
var uc = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-md",
	lg: "sm:max-w-xl"
};
function dc({ open: e, onOpenChange: t, title: n, description: r, footer: i, side: s = "right", size: c = "md", className: u, children: d }) {
	let f = G().common;
	return /* @__PURE__ */ a(l.Root, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(l.Portal, { children: [/* @__PURE__ */ a(l.Overlay, {
			"data-slot": "drawer-overlay",
			className: gn
		}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "drawer",
			"data-side": s,
			onOpenAutoFocus: ti,
			className: U(hn.base, hn[s], s !== "bottom" && U("w-full", uc[c]), "outline-none", u),
			...r ? {} : { "aria-describedby": void 0 },
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(l.Title, {
							className: "text-base leading-none font-semibold",
							children: n
						}), r && /* @__PURE__ */ a(l.Description, {
							className: "text-sm text-muted-foreground",
							children: r
						})]
					}), /* @__PURE__ */ a(l.Close, {
						"aria-label": f.close,
						className: U(K({
							variant: "ghost",
							size: "icon-xs"
						}), "-mr-1 text-muted-foreground"),
						children: /* @__PURE__ */ a(R, { className: "size-4" })
					})]
				}),
				d != null && /* @__PURE__ */ a("div", {
					"data-overlay-body": !0,
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4",
					children: d
				}),
				i && /* @__PURE__ */ a("div", {
					className: "mt-auto flex shrink-0 flex-wrap justify-end gap-2 border-t bg-muted/40 px-5 py-3",
					children: i
				})
			]
		})] })
	});
}
//#endregion
//#region src/blocks/modal/confirm.tsx
var fc = 0, pc = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function mc({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: fc++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: fc++,
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
	return /* @__PURE__ */ o(pc.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(hc, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function hc({ pending: t, onAnswer: n }) {
	let r = G().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(lc, {
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
			children: [/* @__PURE__ */ a(or, {
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
function gc() {
	return e.useContext(pc);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function _c({ title: e, description: t, actions: n, className: r, ...i }) {
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
//#region src/blocks/page/error-boundary.tsx
function vc({ reset: e }) {
	let t = G().common;
	return /* @__PURE__ */ a(fo, {
		title: t.crashed,
		onRetry: e
	});
}
var yc = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(vc, {
			error: e,
			reset: this.reset
		}) : t;
	}
};
//#endregion
//#region src/blocks/dashboard/dashboard.tsx
function bc({ title: e, description: t, actions: n, stats: r, children: i, className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dashboard",
		className: U("flex flex-col gap-6", s),
		...c,
		children: [
			/* @__PURE__ */ a(_c, {
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
function xc({ title: t, description: n, action: r, span: i = "half", loading: s, error: c, onRetry: l, className: u, children: d, ...f }) {
	let p = e.useId(), m = G();
	return /* @__PURE__ */ o("section", {
		"data-slot": "dashboard-panel",
		"aria-labelledby": p,
		className: U(mn, "flex min-w-0 flex-col gap-3 p-4", i === "full" && "lg:col-span-2", u),
		...f,
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: [/* @__PURE__ */ o("div", {
				className: "grid gap-1",
				children: [/* @__PURE__ */ a("h2", {
					id: p,
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
		}), s ? /* @__PURE__ */ o("div", {
			role: "status",
			"aria-label": m.common.loading,
			className: "grid gap-2.5",
			children: [
				/* @__PURE__ */ a(X, { className: "h-4 w-3/4" }),
				/* @__PURE__ */ a(X, { className: "h-4 w-1/2" }),
				/* @__PURE__ */ a(X, { className: "h-4 w-2/3" })
			]
		}) : c ? /* @__PURE__ */ a(fo, {
			variant: "alert",
			title: uo(c),
			onRetry: l
		}) : d]
	});
}
function Sc({ items: e, loading: t, error: n, onRetry: r, className: i, ...s }) {
	let c = G();
	if (t) return /* @__PURE__ */ a("div", {
		role: "status",
		"aria-label": c.common.loading,
		className: U("grid gap-4", i),
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ o("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ a(X, { className: "size-4 shrink-0" }),
				/* @__PURE__ */ a(X, { className: "h-4 flex-1" }),
				/* @__PURE__ */ a(X, { className: "h-3 w-20 shrink-0" })
			]
		}, e))
	});
	if (n) return /* @__PURE__ */ a(fo, {
		variant: "alert",
		title: uo(n),
		onRetry: r,
		className: i
	});
	if (e === void 0) throw Error("ActivityList: items is undefined but the list is neither loading nor failed");
	return e.length === 0 ? /* @__PURE__ */ a("p", {
		className: "py-4 text-sm text-muted-foreground",
		children: c.dashboard.noActivity
	}) : /* @__PURE__ */ a("ol", {
		"data-slot": "activity-list",
		className: U("flex flex-col divide-y", i),
		...s,
		children: e.map(({ id: e, title: t, description: n, at: r, icon: i }) => /* @__PURE__ */ o("li", {
			className: "flex items-start gap-3 py-2.5 first:pt-0 last:pb-0",
			children: [
				i && /* @__PURE__ */ a(i, {
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
					dateTime: r.toISOString(),
					className: "shrink-0 text-xs text-muted-foreground tabular-nums",
					children: c.format.dateTime(r)
				})
			]
		}, e))
	});
}
//#endregion
//#region src/blocks/date/date-picker.tsx
function Cc(e) {
	if (!e) return "";
	let t = (e) => String(e).padStart(2, "0");
	return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate());
}
function wc({ fields: t, required: n, filled: r, message: s, onInvalid: c }) {
	let l = e.useRef(null);
	return e.useEffect(() => {
		l.current?.setCustomValidity(r ? "" : s);
	}, [r, s]), /* @__PURE__ */ o(i, { children: [t.map(([e, t]) => /* @__PURE__ */ a("input", {
		type: "hidden",
		name: e,
		value: t
	}, e)), n && /* @__PURE__ */ a("input", {
		ref: l,
		required: !0,
		"aria-hidden": !0,
		tabIndex: -1,
		className: "sr-only",
		value: r ? "1" : "",
		onChange: () => {},
		onInvalid: (e) => {
			e.preventDefault(), c();
		}
	})] });
}
function Tc(e, t) {
	if (e && t && e > t) throw Error("DatePicker: min is after max, " + e.toISOString() + " > " + t.toISOString());
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}
function Ec({ empty: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ o(q, {
		variant: "outline",
		"data-empty": e,
		className: U("justify-start font-normal data-[empty=true]:text-muted-foreground", n),
		...r,
		children: [/* @__PURE__ */ a(re, { "aria-hidden": !0 }), /* @__PURE__ */ a("span", {
			className: "truncate",
			children: t
		})]
	});
}
function Dc({ value: t, onChange: n, placeholder: r, disabled: s, min: c, max: l, className: u, name: d, required: f, ...p }) {
	let m = G(), [h, g] = e.useState(!1), [_, v] = e.useState(!1);
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(Or, {
		open: h,
		onOpenChange: g,
		children: [/* @__PURE__ */ a(kr, {
			asChild: !0,
			children: /* @__PURE__ */ a(Ec, {
				empty: !t,
				disabled: s,
				className: u,
				...p,
				"aria-required": f || void 0,
				"aria-invalid": p["aria-invalid"] || _ && !t || void 0,
				children: t ? m.format.date(t) : r ?? m.datePicker.placeholder
			})
		}), /* @__PURE__ */ a(Y, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ a(dn, {
				mode: "single",
				selected: t,
				defaultMonth: t,
				disabled: Tc(c, l),
				onSelect: (e) => {
					n(e), g(!1);
				}
			})
		})]
	}), /* @__PURE__ */ a(wc, {
		fields: d ? [[d, Cc(t)]] : [],
		required: f,
		filled: !!t,
		message: m.datePicker.required,
		onInvalid: () => {
			v(!0), g(!0);
		}
	})] });
}
var Oc = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function kc(e) {
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
				from: Oc(e, -6),
				to: e
			})
		},
		{
			label: e.last30Days,
			range: (e) => ({
				from: Oc(e, -29),
				to: e
			})
		},
		{
			label: e.last90Days,
			range: (e) => ({
				from: Oc(e, -89),
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
function Ac(e, t) {
	return !e?.from || e.to ? {
		from: t,
		to: void 0
	} : t < e.from ? {
		from: t,
		to: e.from
	} : {
		from: e.from,
		to: t
	};
}
function jc({ value: t, onChange: n, presets: r, placeholder: s, disabled: c, min: l, max: u, className: d, name: f, required: p, ...m }) {
	let h = G(), g = ei(), [_, v] = e.useState(!1), [y, b] = e.useState(!1), x = !!t?.from && !!t.to, S = r === !1 ? [] : r ?? kc(h.datePicker), C = t?.from ? t.to ? `${h.format.date(t.from)}${h.datePicker.rangeSeparator}${h.format.date(t.to)}` : h.format.date(t.from) : s ?? h.datePicker.rangePlaceholder;
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(Or, {
		open: _,
		onOpenChange: v,
		children: [/* @__PURE__ */ a(kr, {
			asChild: !0,
			children: /* @__PURE__ */ a(Ec, {
				empty: !t?.from,
				disabled: c,
				className: d,
				...m,
				"aria-required": p || void 0,
				"aria-invalid": m["aria-invalid"] || y && !x || void 0,
				children: C
			})
		}), /* @__PURE__ */ a(Y, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ o("div", {
				className: "flex flex-col sm:flex-row",
				children: [S.length > 0 && /* @__PURE__ */ a("div", {
					className: "flex flex-wrap gap-1 border-b p-2 sm:w-36 sm:flex-col sm:flex-nowrap sm:border-r sm:border-b-0",
					children: S.map((e) => /* @__PURE__ */ a(q, {
						variant: "ghost",
						size: "sm",
						className: "justify-start",
						onClick: () => {
							let t = /* @__PURE__ */ new Date();
							n(e.range(new Date(t.getFullYear(), t.getMonth(), t.getDate()))), v(!1);
						},
						children: e.label
					}, e.label))
				}), /* @__PURE__ */ o("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ a(dn, {
						mode: "range",
						selected: t,
						defaultMonth: t?.from,
						numberOfMonths: g ? 1 : 2,
						disabled: Tc(l, u),
						onSelect: (e, r) => n(Ac(t, r))
					}), t?.from && /* @__PURE__ */ a("div", {
						className: "flex justify-end border-t p-2",
						children: /* @__PURE__ */ a(q, {
							variant: "ghost",
							size: "sm",
							onClick: () => n(void 0),
							children: h.datePicker.clear
						})
					})]
				})]
			})
		})]
	}), /* @__PURE__ */ a(wc, {
		fields: f ? [[f + "[from]", Cc(t?.from)], [f + "[to]", Cc(t?.to)]] : [],
		required: p,
		filled: x,
		message: h.datePicker.required,
		onInvalid: () => {
			b(!0), v(!0);
		}
	})] });
}
//#endregion
//#region src/blocks/copy/copy-button.tsx
var Mc = 2e3;
function Nc({ value: t, label: n, size: r = "icon-sm", onCopy: s, onError: c, className: l }) {
	let u = G().copy, [d, f] = e.useState("idle"), [p, m] = e.useState(!1);
	e.useEffect(() => {
		if (d === "idle") return;
		let e = window.setTimeout(() => f("idle"), Mc);
		return () => window.clearTimeout(e);
	}, [d]);
	async function h() {
		try {
			if (!navigator.clipboard) throw Error("Clipboard API unavailable in this context");
			await navigator.clipboard.writeText(t), f("copied"), s?.(t);
		} catch (e) {
			f("failed"), c?.(e);
		}
	}
	let g = u.copy(n), _ = d === "copied" ? u.copied : d === "failed" ? u.failed : g;
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(ri, {
		open: p || d !== "idle",
		onOpenChange: m,
		children: [/* @__PURE__ */ a(ii, {
			asChild: !0,
			children: /* @__PURE__ */ a(q, {
				type: "button",
				variant: "ghost",
				size: r,
				"aria-label": g,
				disabled: t === "",
				onClick: h,
				className: U("text-muted-foreground hover:text-foreground", l),
				children: /* @__PURE__ */ a(Pc, { state: d })
			})
		}), /* @__PURE__ */ a(ai, { children: _ })]
	}), /* @__PURE__ */ a("span", {
		className: "sr-only",
		"aria-live": "polite",
		children: d === "copied" ? u.copied : d === "failed" ? u.failed : ""
	})] });
}
function Pc({ state: e }) {
	switch (e) {
		case "idle": return /* @__PURE__ */ a(me, { "aria-hidden": !0 });
		case "copied": return /* @__PURE__ */ a(de, {
			"aria-hidden": !0,
			className: "text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(Je, {
			"aria-hidden": !0,
			className: "text-danger-fg"
		});
		default: throw Error("CopyButton: unknown state " + JSON.stringify(e));
	}
}
function Fc({ label: e, value: t, mono: n = !1, copy: r = !0, className: i }) {
	return /* @__PURE__ */ o("div", {
		className: U("flex min-w-0 items-center gap-3 py-1.5 text-sm", i),
		children: [/* @__PURE__ */ a("dt", {
			className: "w-28 shrink-0 text-muted-foreground",
			children: e
		}), /* @__PURE__ */ o("dd", {
			className: "flex min-w-0 flex-1 items-center gap-1",
			children: [/* @__PURE__ */ a("span", {
				className: U("min-w-0 break-words font-medium", n && "font-mono"),
				children: t
			}), r && /* @__PURE__ */ a(Nc, {
				value: t,
				label: e,
				size: "icon-xs"
			})]
		})]
	});
}
//#endregion
//#region src/blocks/upload/validate-files.ts
function Ic(e, { accept: t, maxSize: n, maxFiles: r }) {
	if (n !== void 0 && !(n > 0)) throw Error("validateFiles: maxSize must be a positive number of bytes");
	if (r !== void 0 && !(Number.isInteger(r) && r >= 0)) throw Error("validateFiles: maxFiles must be a whole number, 0 or more");
	let i = (t ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean), a = [], o = [];
	for (let t of e) i.length > 0 && !i.some((e) => Lc(t, e)) ? o.push({
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
function Lc(e, t) {
	if (t.startsWith(".")) return e.name.toLowerCase().endsWith(t);
	let n = e.type.toLowerCase();
	return t.endsWith("/*") ? n.startsWith(t.slice(0, -1)) : n === t;
}
//#endregion
//#region src/blocks/upload/file-drop.tsx
function Rc(e, t) {
	let n = e.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean).map((e) => {
		if (e.startsWith(".")) return e.slice(1).toUpperCase();
		if (e === "image/*") return t;
		let [n, r] = e.split("/");
		return r && r !== "*" ? r.toUpperCase() : n;
	});
	return [...new Set(n)].join(", ");
}
function zc({ accept: t, maxSize: n, maxFiles: r, onFiles: i, onReject: s, disabled: c, className: l, id: u }) {
	let d = G(), [f, p] = e.useState(!1), [m, h] = e.useState([]);
	function g(e) {
		if (!e || e.length === 0) return;
		let a = Ic(Array.from(e), {
			accept: t,
			maxSize: n,
			maxFiles: r
		});
		h(a.rejected), a.accepted.length > 0 && i(a.accepted), a.rejected.length > 0 && s?.(a.rejected);
	}
	let _ = n === void 0 ? void 0 : d.format.fileSize(n), v = d.upload.limits({
		accept: t && Rc(t, d.upload.images),
		maxSize: _,
		maxFiles: r
	}), y = (e) => e.reason === "type" ? d.upload.wrongType(e.file.name) : e.reason === "size" ? d.upload.tooLarge(e.file.name, _ ?? "") : d.upload.tooMany(r ?? 0);
	return /* @__PURE__ */ o("div", {
		className: U("grid gap-2", l),
		children: [/* @__PURE__ */ o("label", {
			"data-slot": "file-drop",
			"data-dragging": f,
			"data-disabled": c,
			className: "flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed bg-card p-6 text-center transition-colors focus-within:border-ring focus-within:ring-[1.5px] focus-within:ring-ring/80 hover:bg-accent/50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[dragging=true]:border-primary data-[dragging=true]:bg-accent",
			onDragOver: (e) => {
				e.preventDefault(), c || p(!0);
			},
			onDragLeave: () => p(!1),
			onDrop: (e) => {
				e.preventDefault(), p(!1), c || g(e.dataTransfer.files);
			},
			children: [
				/* @__PURE__ */ a(Ge, {
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
function Bc({ items: e, onRemove: t, onRetry: n, className: r, ...i }) {
	let s = G();
	if (e.length === 0) return null;
	let c = +!!t + (n && e.some((e) => e.status === "failed") ? 1 : 0), l = c === 2 ? "w-16" : c === 1 ? "w-8" : void 0;
	return /* @__PURE__ */ a("ul", {
		"data-slot": "upload-list",
		className: U("grid gap-2", r),
		...i,
		children: e.map((e) => /* @__PURE__ */ o("li", {
			className: "flex items-center gap-3 rounded-md border bg-card px-3 py-2",
			children: [
				/* @__PURE__ */ a(Vc, { item: e }),
				/* @__PURE__ */ o("div", {
					className: "grid min-w-0 flex-1 gap-1",
					children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-baseline justify-between gap-2 text-sm",
							children: [/* @__PURE__ */ a("span", {
								className: "truncate",
								children: e.name
							}), e.status === "uploading" && /* @__PURE__ */ a("span", {
								className: "shrink-0 text-xs text-muted-foreground tabular-nums",
								children: s.format.fileSize(e.size)
							})]
						}),
						e.status === "uploading" && /* @__PURE__ */ a(Rr, {
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
				e.status !== "uploading" && /* @__PURE__ */ a("span", {
					className: "shrink-0 text-xs text-muted-foreground tabular-nums",
					children: s.format.fileSize(e.size)
				}),
				l && /* @__PURE__ */ o("div", {
					className: U("flex shrink-0 justify-end", l),
					children: [e.status === "failed" && n && /* @__PURE__ */ a(q, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": s.upload.retry,
						onClick: () => n(e.id),
						children: /* @__PURE__ */ a(T, {})
					}), t && /* @__PURE__ */ a(q, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": s.upload.remove(e.name),
						onClick: () => t(e.id),
						children: /* @__PURE__ */ a(R, {})
					})]
				})
			]
		}, e.id))
	});
}
function Vc({ item: e }) {
	switch (e.status) {
		case "uploading": return /* @__PURE__ */ a(F, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-muted-foreground"
		});
		case "done": return /* @__PURE__ */ a(j, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(qe, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-danger-fg"
		});
		default: throw Error("UploadList: unknown status " + JSON.stringify(e));
	}
}
//#endregion
//#region src/blocks/upload/upload-slots.tsx
function Hc({ slots: t, value: n, onFile: r, onReject: s, onRemove: c, onRetry: l, onDownload: u, disabled: d, className: f }) {
	let p = G(), m = p.upload, h = p.format, g = e.useId(), _ = new Set(t.map((e) => e.id));
	if (_.size !== t.length) throw Error("UploadSlots: slot ids must be unique");
	let v = Object.keys(n).filter((e) => !_.has(e));
	if (v.length) throw Error("UploadSlots: value has keys no slot declares: " + v.join(", "));
	let y = (e) => n[e.id] ?? [];
	for (let e of t) if (!e.multiple && y(e).length > 1) throw Error("UploadSlots: slot " + e.id + " holds " + y(e).length + " files but is not multiple");
	let b = t.filter((e) => y(e).length === 0), x = t.filter((e) => e.multiple || y(e).length === 0), S = b.find((e) => !e.optional) ?? b[0] ?? x[0], [C, w] = e.useState(S?.id), T = x.find((e) => e.id === C) ?? S, E = t.filter((e) => y(e).length > 0).length;
	return /* @__PURE__ */ o("div", {
		"data-slot": "upload-slots",
		className: U("grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", f),
		children: [/* @__PURE__ */ a("div", {
			className: "grid content-start gap-3",
			children: x.length === 0 ? /* @__PURE__ */ o("p", {
				className: "flex items-center gap-2 rounded-lg border border-dashed p-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a(j, {
					"aria-hidden": !0,
					className: "size-4 text-success-fg"
				}), m.allIn]
			}) : /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ a(or, {
					htmlFor: g + "-pick",
					children: m.thisFileIs
				}), /* @__PURE__ */ o(Hr, {
					value: T?.id,
					onValueChange: w,
					disabled: d,
					children: [/* @__PURE__ */ a(Gr, {
						id: g + "-pick",
						className: "w-full",
						children: /* @__PURE__ */ a(Wr, { placeholder: m.pickDocument })
					}), /* @__PURE__ */ a(Kr, { children: x.map((e) => /* @__PURE__ */ a(Jr, {
						value: e.id,
						children: e.label
					}, e.id)) })]
				})]
			}), /* @__PURE__ */ a(zc, {
				id: g,
				accept: T?.accept,
				maxSize: T?.maxSize,
				maxFiles: T?.multiple ? void 0 : 1,
				disabled: d || !T,
				onFiles: (e) => {
					if (T) {
						for (let t of e) r(T.id, t);
						T.multiple || w(b.find((e) => e.id !== T.id && !e.optional)?.id);
					}
				},
				onReject: s && T && ((e) => s(T.id, e))
			}, T?.id)] })
		}), /* @__PURE__ */ o("section", {
			"aria-labelledby": g + "-list",
			className: "grid content-start gap-2",
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ a("h3", {
					id: g + "-list",
					className: "text-sm font-medium",
					children: m.documents
				}), /* @__PURE__ */ a("span", {
					className: "text-xs text-muted-foreground tabular-nums",
					children: m.uploadedCount(E, t.length)
				})]
			}), /* @__PURE__ */ a("ul", {
				className: "grid gap-2",
				children: t.map((e) => {
					let t = y(e);
					return /* @__PURE__ */ o("li", {
						className: "flex items-start gap-2 rounded-lg border bg-card p-3",
						children: [/* @__PURE__ */ a(Gc, { files: t }), /* @__PURE__ */ o("div", {
							className: "grid min-w-0 flex-1 gap-1",
							children: [
								/* @__PURE__ */ o("span", {
									className: "text-sm",
									children: [
										e.label,
										e.optional && /* @__PURE__ */ a("span", {
											className: "ml-1.5 text-muted-foreground",
											children: m.optional
										}),
										e.multiple && t.length > 0 && /* @__PURE__ */ a("span", {
											className: "ml-1.5 text-xs text-muted-foreground tabular-nums",
											children: h.number(t.length)
										})
									]
								}),
								e.description && t.length === 0 && /* @__PURE__ */ a("span", {
									className: "text-xs text-muted-foreground",
									children: e.description
								}),
								t.length === 0 ? /* @__PURE__ */ a("span", {
									className: "text-xs text-muted-foreground",
									children: m.missing
								}) : /* @__PURE__ */ a("ul", {
									className: "grid gap-1",
									children: t.map((t) => /* @__PURE__ */ a(Uc, {
										item: t,
										onRemove: c && (() => c(e.id, t.id)),
										onRetry: l && (() => l(e.id, t.id)),
										onDownload: u && (() => u(e.id, t))
									}, t.id))
								})
							]
						})]
					}, e.id);
				})
			})]
		})]
	});
}
function Uc({ item: t, onRemove: n, onRetry: r, onDownload: i }) {
	let s = G(), c = s.upload, l = s.format, [u, d] = e.useState("idle");
	return /* @__PURE__ */ o("li", {
		className: "grid gap-1",
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ a(F, {
						"aria-hidden": !0,
						className: "size-3.5 shrink-0"
					}),
					/* @__PURE__ */ a("span", {
						className: "truncate text-foreground",
						children: t.name
					}),
					/* @__PURE__ */ a("span", {
						className: "shrink-0 tabular-nums",
						children: l.fileSize(t.size)
					}),
					t.uploadedAt && /* @__PURE__ */ a("span", {
						className: "hidden shrink-0 sm:inline",
						children: c.uploadedOn(t.uploadedAt)
					}),
					/* @__PURE__ */ o("span", {
						className: "ml-auto flex shrink-0 items-center",
						children: [
							t.status === "failed" && r && /* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-xs",
								"aria-label": c.retry,
								onClick: r,
								children: /* @__PURE__ */ a(T, {})
							}),
							i && t.status === "done" && /* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-xs",
								"aria-label": u === "pending" ? c.downloading(t.name) : c.download(t.name),
								"aria-busy": u === "pending" || void 0,
								disabled: u === "pending",
								onClick: async () => {
									if (i) {
										d("pending");
										try {
											await i(), d("idle");
										} catch {
											d("failed");
										}
									}
								},
								children: u === "pending" ? /* @__PURE__ */ a(Re, { className: "animate-spin" }) : /* @__PURE__ */ a(ye, {})
							}),
							!i && t.url && t.status === "done" && /* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-xs",
								asChild: !0,
								children: /* @__PURE__ */ a("a", {
									href: t.url,
									download: t.name,
									"aria-label": c.download(t.name),
									children: /* @__PURE__ */ a(ye, {})
								})
							}),
							n && /* @__PURE__ */ a(Wc, {
								name: t.name,
								onConfirm: n
							})
						]
					})
				]
			}),
			t.status === "uploading" && /* @__PURE__ */ a(Rr, {
				value: t.progress,
				"aria-label": c.uploading,
				className: "h-1"
			}),
			t.status === "failed" && /* @__PURE__ */ a("span", {
				className: "text-xs text-danger-fg",
				children: t.error ?? c.failed
			}),
			u === "failed" && /* @__PURE__ */ a("span", {
				role: "alert",
				className: "text-xs text-danger-fg",
				children: c.downloadFailed
			})
		]
	});
}
function Wc({ name: t, onConfirm: n }) {
	let r = G(), [i, s] = e.useState(!1);
	return /* @__PURE__ */ o(Or, {
		open: i,
		onOpenChange: s,
		children: [/* @__PURE__ */ a(kr, {
			asChild: !0,
			children: /* @__PURE__ */ a(q, {
				variant: "ghost",
				size: "icon-xs",
				"aria-label": r.upload.remove(t),
				children: /* @__PURE__ */ a(R, {})
			})
		}), /* @__PURE__ */ o(Y, {
			align: "end",
			className: "grid w-64 gap-3 p-3",
			role: "alertdialog",
			children: [/* @__PURE__ */ a("p", {
				className: "text-sm",
				children: r.upload.removeConfirm(t)
			}), /* @__PURE__ */ o("div", {
				className: "flex justify-end gap-2",
				children: [/* @__PURE__ */ a(q, {
					variant: "ghost",
					size: "sm",
					onClick: () => s(!1),
					children: r.common.cancel
				}), /* @__PURE__ */ a(q, {
					variant: "danger",
					size: "sm",
					onClick: () => {
						s(!1), n();
					},
					children: r.upload.removeAction
				})]
			})]
		})]
	});
}
function Gc({ files: e }) {
	let [t, n] = e.length === 0 ? [N, "text-muted-foreground"] : e.some((e) => e.status === "failed") ? [qe, "text-danger-fg"] : e.some((e) => e.status === "uploading") ? [F, "text-muted-foreground"] : [j, "text-success-fg"];
	return /* @__PURE__ */ a(t, {
		"aria-hidden": !0,
		className: U("mt-0.5 size-4 shrink-0", n)
	});
}
//#endregion
//#region src/lib/strings-pt.ts
var Kc = new Intl.NumberFormat("pt-PT"), $ = (e) => Kc.format(e), qc = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), Jc = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 0
}), Yc = new Intl.DateTimeFormat("pt-PT", {
	month: "long",
	year: "numeric"
}), Xc = new Intl.DateTimeFormat("pt-PT", { month: "long" }), Zc = new Intl.DateTimeFormat("pt-PT", { weekday: "short" }), Qc = new Intl.DateTimeFormat("pt-PT", { dateStyle: "medium" }), $c = new Intl.DateTimeFormat("pt-PT", {
	dateStyle: "medium",
	timeStyle: "short"
}), el = {
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
		confirm: "Confirmar",
		loading: "A carregar…"
	},
	auth: {
		email: "Email",
		emailPlaceholder: "nome@empresa.pt",
		password: "Palavra-passe",
		forgotPassword: "Esqueceu-se da palavra-passe?",
		signIn: "Iniciar sessão",
		or: "ou",
		continueWith: (e) => `Continuar com ${e}`,
		noAccount: "Não tem conta?",
		createOne: "Criar conta",
		registerTitle: "Criar uma conta",
		name: "Nome",
		namePlaceholder: "Jay Oak",
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
		passwordsDoNotMatch: "As palavras-passe não coincidem",
		phone: "Telefone",
		optional: "(opcional)",
		phoneRequired: "Indique o seu número de telefone",
		invalidPhone: "Indique um número de telefone válido",
		consentRequired: "Tem de aceitar para continuar."
	},
	shell: {
		signOut: "Terminar sessão",
		skipToContent: "Saltar para o conteúdo",
		accountMenu: "Menu da conta"
	},
	preferences: {
		title: "Preferências",
		appearance: "Aspeto",
		themes: {
			light: "Claro",
			dark: "Escuro",
			system: "Sistema"
		},
		language: "Idioma",
		zoom: "Zoom",
		zoomIn: "Aumentar",
		zoomOut: "Diminuir",
		zoomPercent: "Zoom, percentagem",
		percentSign: "%",
		resetZoom: `Repor ${$(100)}%`
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
		timeline: "Cronograma",
		calendar: "Calendário",
		timelineScale: "Zoom",
		scales: {
			week: "Semana",
			month: "Mês",
			quarter: "Trimestre"
		},
		undated: (e) => `${$(e)} sem data`,
		moreItems: (e) => `+${$(e)} mais`,
		previousMonth: "Mês anterior",
		nextMonth: "Mês seguinte",
		previousYear: "Ano anterior",
		nextYear: "Ano seguinte",
		calendarScale: "Escala do calendário",
		calendarScales: {
			month: "Mês",
			year: "Ano"
		},
		rescheduleHint: "As setas esquerda e direita movem-no um dia. Com Shift movem o fim.",
		calendarRescheduleHint: "As setas movem-no: esquerda e direita um dia, cima e baixo uma semana.",
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
		editCell: (e, t) => t ? `${e} de ${t}` : e,
		loadingMore: "A carregar mais…",
		noMatches: "Nada corresponde a estas condições.",
		clearAllFilters: "Limpar filtros",
		viewNameRequired: "Dê um nome à vista.",
		rowCount: (e) => e === 1 ? "1 linha" : `${$(e)} linhas`,
		pageOf: (e, t) => `Página ${$(e)} de ${$(t)}`,
		previousPage: "Anterior",
		nextPage: "Seguinte",
		addRow: "Adicionar linha",
		saveRow: "Guardar linha",
		addRowFailed: "A linha não foi guardada. Tente novamente."
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
		commandDescription: "Procure um comando para executar…",
		notifications: "Notificações",
		closeNotification: "Fechar notificação",
		chooseFile: "Escolha um ficheiro",
		filesChosen: (e) => `${$(e)} ficheiros`
	},
	format: {
		number: $,
		date: (e) => Qc.format(e),
		dateTime: (e) => $c.format(e),
		fileSize: (e) => Zt(e, $),
		percent: (e) => Jc.format(e / 100),
		month: (e) => Yc.format(e),
		monthName: (e) => Xc.format(e),
		weekday: (e) => Zc.format(e)
	},
	dashboard: {
		change: (e) => qc.format(e / 100),
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
		required: "Escolha uma data.",
		locale: {
			...H,
			options: {
				...H.options,
				weekStartsOn: 1
			}
		}
	},
	editable: {
		edit: (e) => e ? `Editar ${e}` : "Editar",
		save: "Guardar",
		required: "Não pode ficar vazio.",
		saveFailed: "Não foi possível guardar. Tente novamente."
	},
	copy: {
		copy: (e) => e ? `Copiar ${e}` : "Copiar",
		copied: "Copiado",
		failed: "Não foi possível copiar. Selecione o texto e copie-o manualmente."
	},
	upload: {
		dropHere: "Largue os ficheiros aqui ou",
		dropFile: "Largue um ficheiro aqui ou",
		browse: "procure",
		images: "Imagens",
		limits: ({ accept: e, maxSize: t, maxFiles: n }) => [
			e,
			t && (n === 1 ? `até ${t}` : `até ${t} cada`),
			n && n > 1 && `${$(n)} ficheiros no máximo`
		].filter(Boolean).join(" · "),
		tooLarge: (e, t) => `${e} tem mais de ${t}.`,
		wrongType: (e) => `${e} não é de um tipo aceite.`,
		tooMany: (e) => e === 1 ? "Apenas um ficheiro." : `${$(e)} ficheiros no máximo.`,
		remove: (e) => `Remover ${e}`,
		uploading: "A carregar…",
		failed: "Falhou o carregamento",
		retry: "Tentar novamente",
		optional: "Opcional",
		thisFileIs: "Este ficheiro é",
		pickDocument: "Escolha um documento",
		documents: "Documentos",
		uploadedCount: (e, t) => `${$(e)} de ${$(t)}`,
		missing: "Ainda não carregado",
		allIn: "Todos os documentos estão carregados.",
		removeConfirm: (e) => `Remover ${e}? Não é possível desfazer.`,
		removeAction: "Remover",
		download: (e) => `Descarregar ${e}`,
		downloading: (e) => `A descarregar ${e}…`,
		downloadFailed: "Não foi possível descarregar. Tente novamente.",
		uploadedOn: (e) => `Carregado a ${Qc.format(e)}`
	}
};
//#endregion
export { Sc as ActivityList, Dt as Alert, kt as AlertDescription, Ot as AlertTitle, nc as AppShell, La as AuthFooter, Ra as AuthLayout, Ia as AuthLogo, jt as Avatar, Pt as AvatarBadge, Nt as AvatarFallback, Ft as AvatarGroup, It as AvatarGroupCount, Mt as AvatarImage, Bt as AvatarStack, Ht as Badge, rn as Breadcrumb, un as BreadcrumbEllipsis, on as BreadcrumbItem, sn as BreadcrumbLink, an as BreadcrumbList, cn as BreadcrumbPage, ln as BreadcrumbSeparator, q as Button, qo as CALENDAR_SCALES, Mc as COPY_FEEDBACK_MS, dn as Calendar, fn as CalendarDayButton, Yo as CalendarView, Dn as Card, jn as CardAction, Mn as CardContent, An as CardDescription, Nn as CardFooter, On as CardHeader, kn as CardTitle, bn as ChartContainer, wn as ChartLegend, Tn as ChartLegendContent, xn as ChartStyle, Sn as ChartTooltip, Cn as ChartTooltipContent, Pn as Checkbox, Ks as ChipPicker, co as Combobox, oo as CommandMenu, mc as ConfirmProvider, Nc as CopyButton, Fc as CopyField, zo as DATA_TABLE_MODES, bc as Dashboard, xc as DashboardPanel, js as DataTable, Dc as DatePicker, jc as DateRangePicker, Fn as Dialog, Rn as DialogClose, Bn as DialogContent, Wn as DialogDescription, Hn as DialogFooter, Vn as DialogHeader, zn as DialogOverlay, Ln as DialogPortal, Un as DialogTitle, In as DialogTrigger, dc as Drawer, Gn as DropdownMenu, Zn as DropdownMenuCheckboxItem, Jn as DropdownMenuContent, Yn as DropdownMenuGroup, Xn as DropdownMenuItem, er as DropdownMenuLabel, Kn as DropdownMenuPortal, Qn as DropdownMenuRadioGroup, $n as DropdownMenuRadioItem, tr as DropdownMenuSeparator, nr as DropdownMenuShortcut, rr as DropdownMenuSub, ar as DropdownMenuSubContent, ir as DropdownMenuSubTrigger, qn as DropdownMenuTrigger, ns as EditableText, lo as EmptyState, yc as ErrorBoundary, fo as ErrorState, zc as FileDrop, Xa as ForgotPasswordForm, sr as Form, mr as FormControl, hr as FormDescription, lr as FormField, fr as FormItem, pr as FormLabel, gr as FormMessage, J as Input, ws as Kanban, po as LABEL_CLASS, qs as LIST_PARAMS, or as Label, oc as LanguagePicker, Va as Link, Ba as LinkProvider, Ua as LoginForm, lc as Modal, Fo as NONE, Os as NewRow, _c as PageHeader, xr as Pagination, Sr as PaginationContent, Dr as PaginationEllipsis, Cr as PaginationItem, wr as PaginationLink, Er as PaginationNext, Tr as PaginationPrevious, Or as Popover, Ar as PopoverAnchor, Y as PopoverContent, Nr as PopoverDescription, jr as PopoverHeader, Mr as PopoverTitle, kr as PopoverTrigger, sc as PreferencesMenu, Rr as Progress, zr as ProgressRing, Br as RadioGroup, Vr as RadioGroupItem, Ja as RegisterForm, ec as SOCIAL_PROVIDERS, so as SearchTrigger, ho as SectionLabel, Hr as Select, Kr as SelectContent, Ur as SelectGroup, Jr as SelectItem, qr as SelectLabel, Zr as SelectScrollDownButton, Xr as SelectScrollUpButton, Yr as SelectSeparator, Gr as SelectTrigger, Wr as SelectValue, Qr as Separator, hi as Sidebar, Ci as SidebarContent, xi as SidebarFooter, wi as SidebarGroup, Ei as SidebarGroupAction, Di as SidebarGroupContent, Ti as SidebarGroupLabel, bi as SidebarHeader, yi as SidebarInput, vi as SidebarInset, Oi as SidebarMenu, Mi as SidebarMenuAction, Ni as SidebarMenuBadge, ji as SidebarMenuButton, ki as SidebarMenuItem, Pi as SidebarMenuSkeleton, Fi as SidebarMenuSub, Li as SidebarMenuSubButton, Ii as SidebarMenuSubItem, mi as SidebarProvider, _i as SidebarRail, Si as SidebarSeparator, gi as SidebarTrigger, X as Skeleton, Ri as Slider, tc as SocialButton, _o as StatTile, ma as Switch, Ji as THEMES, Yi as THEME_DEFAULT, To as TIMELINE_SCALES, ha as Table, ks as TableAddRow, _a as TableBody, xa as TableCaption, ba as TableCell, va as TableFooter, ya as TableHead, ga as TableHeader, Z as TableRow, Sa as Tabs, Ea as TabsContent, wa as TabsList, Ta as TabsTrigger, Da as Textarea, ac as ThemePicker, Po as Timeline, fa as Toaster, ka as Toggle, ja as ToggleGroup, Ma as ToggleGroupItem, ri as Tooltip, ai as TooltipContent, ni as TooltipProvider, ii as TooltipTrigger, nn as UIStringsProvider, Bc as UploadList, Hc as UploadSlots, zt as UserAvatar, rs as VIEW_ICON_NAMES, Na as Wordmark, Ki as ZOOM_DEFAULT, Gi as ZOOM_MAX, Wi as ZOOM_MIN, qi as ZOOM_STEPS, rc as ZoomStepper, da as antiFlashScript, Vt as badgeVariants, K as buttonVariants, Uo as chipLabel, U as cn, Io as compare, Xo as csvDelimiter, $o as csvValue, As as dataTableFeatures, kc as defaultRangePresets, Qt as defaultStrings, ts as downloadCsv, uo as errorTitle, Ho as facetText, Ya as forgotPasswordSchema, At as initials, yr as inputVariants, Lo as isBlankFilter, Cc as isoDay, Ro as labelsOf, Zs as listUrlOf, Qs as listUrlProps, Ha as loginSchema, Vo as named, Ac as nextRange, Js as parseListUrl, el as ptPT, Bo as rank, qa as registerSchema, oa as resolveTheme, Xs as sameListUrl, Vi as setStoragePrefix, Ao as shiftSpan, Ui as storageKey, Hi as storagePrefix, Q as str, Ca as tabsListVariants, es as toCsv, Ys as toListUrl, Wo as toQuery, pa as toast, Oa as toggleVariants, gc as useConfirm, ls as useDataTableViews, ur as useFormField, ei as useIsMobile, jo as useReschedule, pi as useSidebar, G as useStrings, ua as useTheme, ra as useZoom, Ic as validateFiles };
