import * as e from "react";
import { cva as t } from "class-variance-authority";
import { clsx as n } from "clsx";
import { twMerge as r } from "tailwind-merge";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Avatar as s, Checkbox as c, Dialog as l, DropdownMenu as u, Label as d, Popover as f, Progress as p, RadioGroup as m, Select as h, Separator as g, Slider as _, Slot as v, Switch as y, Tabs as b, Toggle as x, ToggleGroup as S, Tooltip as C } from "radix-ui";
import { AppleLogoIcon as w, ArrowClockwiseIcon as T, ArrowCounterClockwiseIcon as E, ArrowDownIcon as D, ArrowLeftIcon as ee, ArrowRightIcon as te, ArrowUpIcon as ne, ArrowsDownUpIcon as re, ArrowsOutCardinalIcon as O, CalendarBlankIcon as k, CalendarDotsIcon as ie, CaretDownIcon as ae, CaretDownIcon as oe, CaretLeftIcon as se, CaretLeftIcon as ce, CaretRightIcon as le, CaretRightIcon as A, CaretRightIcon as ue, CaretUpIcon as de, ChartBarHorizontalIcon as fe, CheckCircleIcon as j, CheckIcon as M, CheckIcon as pe, CircleDashedIcon as me, CircleIcon as N, ClockIcon as he, CopyIcon as ge, DesktopIcon as _e, DotsThreeIcon as ve, DotsThreeIcon as P, DotsThreeIcon as F, DownloadSimpleIcon as ye, EnvelopeSimpleIcon as be, EyeIcon as xe, FileIcon as Se, FunnelIcon as Ce, FunnelSimpleIcon as we, GearSixIcon as Te, GithubLogoIcon as Ee, GoogleLogoIcon as De, InfoIcon as Oe, ListBulletsIcon as I, ListIcon as ke, MagnifyingGlassIcon as Ae, MagnifyingGlassIcon as je, MinusIcon as Me, MoonIcon as Ne, PencilSimpleIcon as Pe, PlusIcon as Fe, ProhibitIcon as Ie, RowsIcon as Le, SidebarSimpleIcon as Re, SignOutIcon as ze, SortAscendingIcon as Be, SpinnerIcon as L, SquaresFourIcon as Ve, StarIcon as He, SunIcon as Ue, TableIcon as We, TagIcon as Ge, TrashIcon as Ke, UploadSimpleIcon as R, UsersIcon as qe, WarningCircleIcon as Je, WarningIcon as Ye, WindowsLogoIcon as Xe, XCircleIcon as Ze, XIcon as Qe, XIcon as $e } from "@phosphor-icons/react";
import { enUS as et } from "react-day-picker/locale/en-US";
import { DayPicker as tt, getDefaultClassNames as nt } from "react-day-picker";
import * as rt from "recharts";
import { Controller as it, FormProvider as at, useForm as ot, useFormContext as st, useFormState as ct } from "react-hook-form";
import { Toaster as lt, toast as ut } from "sonner";
import { zodResolver as z } from "@hookform/resolvers/zod";
import { z as B } from "zod";
import { Command as dt } from "cmdk";
import { columnFacetingFeature as ft, columnFilteringFeature as pt, columnGroupingFeature as mt, columnVisibilityFeature as ht, createExpandedRowModel as gt, createFacetedRowModel as _t, createFacetedUniqueValues as vt, createFilteredRowModel as yt, createGroupedRowModel as bt, createPaginatedRowModel as xt, createSortedRowModel as St, globalFilteringFeature as Ct, rowExpandingFeature as wt, rowPaginationFeature as V, rowSortingFeature as Tt, tableFeatures as Et, useTable as Dt } from "@tanstack/react-table";
import { useVirtualizer as Ot } from "@tanstack/react-virtual";
import { pt as kt } from "react-day-picker/locale/pt";
//#region src/lib/utils.ts
function H(...e) {
	return r(n(e));
}
//#endregion
//#region src/components/ui/alert.tsx
var At = t("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
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
		className: H(At({ variant: t }), e),
		...n
	});
}
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-title",
		className: H("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function Mt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "alert-description",
		className: H("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
//#endregion
//#region src/lib/initials.ts
function Nt(e) {
	let t = e.trim().split(/\s+/).filter(Boolean);
	return t.length === 0 ? "" : ((Array.from(t[0])[0] ?? "") + (t.length > 1 ? Array.from(t[t.length - 1])[0] ?? "" : "")).toUpperCase();
}
//#endregion
//#region src/components/ui/avatar.tsx
function Pt({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(s.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: H("group/avatar relative flex size-8 shrink-0 rounded-full border border-border bg-muted select-none data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function Ft({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Image, {
		"data-slot": "avatar-image",
		className: H("aspect-square size-full rounded-full object-cover", e),
		...t
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ a(s.Fallback, {
		"data-slot": "avatar-fallback",
		className: H("flex size-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground group-data-[size=lg]/avatar:text-sm group-data-[size=sm]/avatar:text-[0.625rem]", e),
		...t
	});
}
function Lt({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "avatar-badge",
		className: H("absolute -right-0.5 -bottom-0.5 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-card select-none", "group-data-[size=sm]/avatar:size-2.5 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-3 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3.5 group-data-[size=lg]/avatar:[&>svg]:size-2.5", e),
		...t
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group",
		className: H("group/avatar-group flex -space-x-1.5 has-data-[size=sm]:-space-x-1 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card", e),
		...t
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "avatar-group-count",
		className: H("relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground tabular-nums ring-2 ring-card group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:text-sm group-has-data-[size=sm]/avatar-group:text-[0.625rem] group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3.5", e),
		...t
	});
}
var Bt = [
	"bg-slot-1-subtle text-slot-1",
	"bg-slot-2-subtle text-slot-2",
	"bg-slot-3-subtle text-slot-3",
	"bg-slot-4-subtle text-slot-4",
	"bg-slot-5-subtle text-slot-5"
];
function Vt(e) {
	let t = 0;
	for (let n of e) t = t * 31 + n.codePointAt(0) | 0;
	return Bt[Math.abs(t) % Bt.length];
}
function Ht({ name: e, src: t, fallback: n, className: r, ...i }) {
	return /* @__PURE__ */ o(Pt, {
		className: r,
		...i,
		children: [/* @__PURE__ */ a(Ft, {
			src: t,
			alt: e
		}), /* @__PURE__ */ a(It, {
			className: Vt(e),
			children: n ?? Nt(e)
		})]
	});
}
function Ut({ people: e, max: t = 4, size: n, className: r, ...i }) {
	let s = e.slice(0, t), c = e.slice(t);
	return /* @__PURE__ */ o(Rt, {
		className: r,
		...i,
		children: [s.map((e, t) => /* @__PURE__ */ a(Ht, {
			name: e.name,
			src: e.src,
			size: n
		}, `${e.name}-${t}`)), c.length > 0 && /* @__PURE__ */ o(zt, {
			title: c.map((e) => e.name).join(", "),
			children: ["+", c.length]
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var Wt = t("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3.5", {
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
function Gt({ className: e, variant: t = "default", asChild: n = !1, ...r }) {
	let i = n ? v.Root : "span";
	return /* @__PURE__ */ a(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: H(Wt({ variant: t }), e),
		...r
	});
}
//#endregion
//#region src/lib/strings.tsx
var Kt = new Intl.NumberFormat(), W = (e) => Kt.format(e), qt = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), Jt = new Intl.NumberFormat(void 0, {
	style: "percent",
	maximumFractionDigits: 0
}), Yt = new Intl.DateTimeFormat(void 0, {
	month: "long",
	year: "numeric"
}), Xt = new Intl.DateTimeFormat(void 0, { month: "long" }), Zt = new Intl.DateTimeFormat(void 0, { weekday: "short" }), Qt = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }), $t = new Intl.DateTimeFormat(void 0, {
	dateStyle: "medium",
	timeStyle: "short"
});
function en(e, t, n = [
	"B",
	"KB",
	"MB",
	"GB"
]) {
	let r = e, i = 0;
	for (; r >= 1024 && i < n.length - 1;) r /= 1024, i++;
	return `${t(i === 0 || r >= 10 ? Math.round(r) : Math.round(r * 10) / 10)}\u00A0${n[i]}`;
}
var tn = {
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
		date: (e) => Qt.format(e),
		dateTime: (e) => $t.format(e),
		fileSize: (e) => en(e, W),
		percent: (e) => Jt.format(e / 100),
		month: (e) => Yt.format(e),
		monthName: (e) => Xt.format(e),
		weekday: (e) => Zt.format(e)
	},
	dashboard: {
		change: (e) => qt.format(e / 100),
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
		locale: et
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
		uploadedOn: (e) => `Uploaded ${Qt.format(e)}`
	},
	site: {
		skipToContent: "Skip to content",
		menu: "Menu",
		mainNav: "Main",
		footerNav: "Footer",
		copyright: (e, t) => `© ${e} ${t}`,
		contents: "Contents",
		lastUpdated: (e) => `Last updated ${Qt.format(e)}`,
		published: (e) => Qt.format(e),
		readingTime: (e) => `${W(e)} min read`,
		allPosts: "All posts",
		noPosts: "Nothing published yet.",
		recommended: "Recommended",
		newsletterEmail: "Email address",
		newsletterPlaceholder: "you@company.com",
		subscribe: "Subscribe",
		subscribed: "Subscribed. Check your inbox to confirm.",
		feature: "Feature",
		included: "Included",
		notIncluded: "Not included",
		name: "Name",
		email: "Email",
		message: "Message",
		messagePlaceholder: "What do you need?",
		send: "Send message",
		sentTitle: "Message sent",
		sentDescription: "We will reply to the address you gave.",
		nameRequired: "Enter your name.",
		invalidEmail: "Enter an email address like name@example.com.",
		messageTooShort: "Write at least 10 characters.",
		topic: "What is it about?",
		topicRequired: "Pick what your message is about."
	}
};
function nn(e, t, n, r) {
	e[r] = {
		...t[r],
		...n[r]
	};
}
function rn(e, t) {
	if (!t) return e;
	let n = { ...e };
	for (let r of Object.keys(t)) nn(n, e, t, r);
	return n;
}
var an = e.createContext(tn);
function on({ strings: t, children: n }) {
	let r = e.useContext(an), i = e.useMemo(() => rn(r, t), [r, t]);
	return /* @__PURE__ */ a(an.Provider, {
		value: i,
		children: n
	});
}
function G() {
	return e.useContext(an);
}
//#endregion
//#region src/components/ui/breadcrumb.tsx
function sn({ ...e }) {
	return /* @__PURE__ */ a("nav", {
		"aria-label": G().ui.breadcrumb,
		"data-slot": "breadcrumb",
		...e
	});
}
function cn({ className: e, ...t }) {
	return /* @__PURE__ */ a("ol", {
		"data-slot": "breadcrumb-list",
		className: H("flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5", e),
		...t
	});
}
function ln({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-item",
		className: H("inline-flex items-center gap-1.5", e),
		...t
	});
}
function un({ asChild: e, className: t, ...n }) {
	let r = e ? v.Root : "a";
	return /* @__PURE__ */ a(r, {
		"data-slot": "breadcrumb-link",
		className: H("transition-colors hover:text-foreground", t),
		...n
	});
}
function dn({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: H("font-normal text-foreground", e),
		...t
	});
}
function fn({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: H("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ a(A, {})
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		className: H("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(P, {
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
function mn({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", formatters: o, components: s, locale: c, ...l }) {
	let u = nt(), d = G().datePicker.locale, f = c ?? d;
	return /* @__PURE__ */ a(tt, {
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
			dropdown_root: H("relative rounded-md border border-input shadow-xs has-focus:border-ring has-focus:ring-[1.5px] has-focus:ring-ring/80", u.dropdown_root),
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
			Chevron: ({ className: e, orientation: t, ...n }) => a(t === "left" ? ce : t === "right" ? ue : oe, {
				className: H("size-4", e),
				...n
			}),
			DayButton: hn,
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
function hn({ className: t, day: n, modifiers: r, ...i }) {
	let o = nt(), s = e.useRef(null);
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
		className: H("flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[1.5px] group-data-[focused=true]/day:ring-ring/80 data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...i
	});
}
//#endregion
//#region src/lib/surfaces.ts
var gn = "border bg-popover text-popover-foreground shadow-overlay", _n = "rounded-lg border bg-card text-card-foreground", vn = {
	base: "fixed z-50 flex flex-col bg-popover text-popover-foreground shadow-overlay transition ease-settle data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-250",
	right: "inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
	left: "inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
	bottom: "inset-x-0 bottom-0 max-h-[85dvh] rounded-t-lg border-t pb-[env(safe-area-inset-bottom)] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
}, yn = "fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", bn = [
	"bg-stage-1",
	"bg-stage-2",
	"bg-stage-3",
	"bg-stage-4"
], xn = (e) => bn[(e % bn.length + bn.length) % bn.length], Sn = {
	width: 320,
	height: 200
}, Cn = e.createContext(null);
function wn() {
	let t = e.useContext(Cn);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function Tn({ id: t, className: n, children: r, config: i, initialDimension: s = Sn, ...c }) {
	let l = e.useId(), u = `chart-${t ?? l.replace(/:/g, "")}`;
	return /* @__PURE__ */ a(Cn.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ o("div", {
			"data-slot": "chart",
			"data-chart": u,
			className: H("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...c,
			children: [/* @__PURE__ */ a(En, {
				id: u,
				config: i
			}), /* @__PURE__ */ a(rt.ResponsiveContainer, {
				initialDimension: s,
				children: r
			})]
		})
	});
}
var En = ({ id: e, config: t }) => {
	let n = Object.entries(t).flatMap(([e, t]) => t.color ? ["--color-" + e + ": " + t.color + ";"] : []);
	return n.length ? /* @__PURE__ */ a("style", { dangerouslySetInnerHTML: { __html: "[data-chart=" + e + "] {" + n.join(" ") + "}" } }) : null;
}, Dn = rt.Tooltip;
function On({ active: t, payload: n, className: r, indicator: s = "dot", hideLabel: c = !1, hideIndicator: l = !1, label: u, labelFormatter: d, labelClassName: f, formatter: p, color: m, nameKey: h, labelKey: g }) {
	let { config: _ } = wn(), v = G().format, y = e.useMemo(() => {
		if (c || !n?.length) return null;
		let [e] = n, t = `${g ?? e?.dataKey ?? e?.name ?? "value"}`, r = jn(_, e, t), i = !g && typeof u == "string" ? _[u]?.label ?? u : r?.label;
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
		className: H(gn, "grid min-w-[8rem] items-start gap-1.5 rounded-lg px-2.5 py-1.5 text-xs", r),
		children: [b ? null : y, /* @__PURE__ */ a("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${h ?? e.name ?? e.dataKey ?? "value"}`, r = jn(_, e, n), c = m ?? e.payload?.fill ?? e.color;
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
var kn = rt.Legend;
function An({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: s } = wn();
	return n?.length ? /* @__PURE__ */ a("div", {
		className: H("flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, c = jn(s, e, r);
			return /* @__PURE__ */ o("div", {
				className: H("flex items-center gap-1.5 whitespace-nowrap text-muted-foreground [&>svg]:size-3.5"),
				children: [c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), c?.label]
			}, n);
		})
	}) : null;
}
function jn(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
//#endregion
//#region src/components/ui/card.tsx
function Mn({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card",
		"data-variant": t,
		className: H(_n, "flex flex-col gap-6 py-6", t === "glass" && "border-[var(--surface-glass-border)] bg-[var(--surface-glass)] shadow-[var(--surface-shadow)] backdrop-blur-xl", e),
		...n
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-header",
		className: H("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", e),
		...t
	});
}
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-title",
		className: H("leading-none font-semibold", e),
		...t
	});
}
function Fn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function In({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-action",
		className: H("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Ln({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-content",
		className: H("px-6", e),
		...t
	});
}
function Rn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "card-footer",
		className: H("flex items-center px-6 [.border-t]:pt-6", e),
		...t
	});
}
//#endregion
//#region src/components/ui/checkbox.tsx
function zn({ className: e, ...t }) {
	return /* @__PURE__ */ a(c.Root, {
		"data-slot": "checkbox",
		className: H("peer relative size-4 shrink-0 rounded-xs border border-input shadow-xs transition-shadow outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
		...t,
		children: /* @__PURE__ */ a(c.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ a(pe, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
function Bn({ ...e }) {
	return /* @__PURE__ */ a(l.Root, {
		"data-slot": "dialog",
		...e
	});
}
function Vn({ ...e }) {
	return /* @__PURE__ */ a(l.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Hn({ ...e }) {
	return /* @__PURE__ */ a(l.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function Un({ ...e }) {
	return /* @__PURE__ */ a(l.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function Wn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Overlay, {
		"data-slot": "dialog-overlay",
		className: H(yn, e),
		...t
	});
}
function Gn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ o(Hn, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ a(Wn, {}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "dialog-content",
			className: H(gn, "fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto overscroll-contain rounded-lg p-6 duration-250 ease-settle outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ o(l.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 -m-3.5 rounded-md p-3.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 focus-visible:outline-hidden disabled:pointer-events-none sm:-m-2 sm:p-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ a($e, {}), /* @__PURE__ */ a("span", {
					className: "sr-only",
					children: G().ui.close
				})]
			})]
		})]
	});
}
function Kn({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-header",
		className: H("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function qn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
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
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Title, {
		"data-slot": "dialog-title",
		className: H("text-base leading-none font-semibold", e),
		...t
	});
}
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ a(l.Description, {
		"data-slot": "dialog-description",
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/dropdown-menu.tsx
function Xn({ ...e }) {
	return /* @__PURE__ */ a(u.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Zn({ ...e }) {
	return /* @__PURE__ */ a(u.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function Qn({ ...e }) {
	return /* @__PURE__ */ a(u.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function $n({ className: e, align: t = "start", sideOffset: n = 4, collisionPadding: r = 16, ...i }) {
	return /* @__PURE__ */ a(u.Portal, { children: /* @__PURE__ */ a(u.Content, {
		"data-slot": "dropdown-menu-content",
		align: t,
		sideOffset: n,
		collisionPadding: r,
		className: H(gn, "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...i
	}) });
}
function er({ ...e }) {
	return /* @__PURE__ */ a(u.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function tr({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ a(u.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-danger-fg data-[variant=destructive]:focus:bg-danger-subtle data-[variant=destructive]:focus:text-danger-fg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-danger-fg!", e),
		...r
	});
}
function nr({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ o(u.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(pe, { className: "size-4" }) })
		}), t]
	});
}
function rr({ ...e }) {
	return /* @__PURE__ */ a(u.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function ir({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(u.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(u.ItemIndicator, { children: /* @__PURE__ */ a(N, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function ar({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ a(u.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: H("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: H("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function cr({ ...e }) {
	return /* @__PURE__ */ a(u.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function lr({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ o(u.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: H("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ a(ue, { className: "ml-auto size-4" })]
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ a(u.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: H(gn, "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg p-1 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
//#endregion
//#region src/components/ui/label.tsx
function dr({ className: e, ...t }) {
	return /* @__PURE__ */ a(d.Root, {
		"data-slot": "label",
		className: H("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
//#endregion
//#region src/components/ui/form.tsx
var fr = at, pr = e.createContext({}), mr = ({ ...e }) => /* @__PURE__ */ a(pr.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ a(it, { ...e })
}), hr = () => {
	let t = e.useContext(pr), n = e.useContext(gr);
	if (!t?.name) throw Error("useFormField should be used within <FormField>");
	let { getFieldState: r } = st(), i = ct({ name: t.name }), a = r(t.name, i), { id: o } = n;
	return {
		id: o,
		name: t.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, gr = e.createContext({});
function _r({ className: t, ...n }) {
	let r = e.useId();
	return /* @__PURE__ */ a(gr.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ a("div", {
			"data-slot": "form-item",
			className: H("grid gap-2", t),
			...n
		})
	});
}
function vr({ className: e, ...t }) {
	let { error: n, formItemId: r } = hr();
	return /* @__PURE__ */ a(dr, {
		"data-slot": "form-label",
		"data-error": !!n,
		className: H("data-[error=true]:text-danger-fg", e),
		htmlFor: r,
		...t
	});
}
function yr({ ...e }) {
	let { error: t, formItemId: n, formDescriptionId: r, formMessageId: i } = hr();
	return /* @__PURE__ */ a(v.Root, {
		"data-slot": "form-control",
		id: n,
		"aria-describedby": t ? `${r} ${i}` : `${r}`,
		"aria-invalid": !!t,
		...e
	});
}
function br({ className: e, ...t }) {
	let { formDescriptionId: n } = hr();
	return /* @__PURE__ */ a("p", {
		"data-slot": "form-description",
		id: n,
		className: H("text-sm text-muted-foreground", e),
		...t
	});
}
function xr({ className: e, ...t }) {
	let { error: n, formMessageId: r } = hr(), i = n ? String(n?.message ?? "") : t.children;
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
var Sr = "border border-input bg-field focus-visible:border-ring", Cr = {
	ghost: "rounded-md border border-transparent bg-muted shadow-none transition-colors hover:bg-accent focus-visible:border-ring focus-visible:bg-field",
	cell: "rounded-none border-0 bg-transparent shadow-none focus-visible:bg-accent focus-visible:ring-inset"
}, wr = t(H("w-full min-w-0 rounded-md py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:ring-[1.5px] focus-visible:ring-ring/80", "aria-invalid:border-destructive aria-invalid:ring-destructive/20"), {
	variants: {
		variant: {
			default: Sr,
			ghost: Cr.ghost,
			cell: `px-2 ${Cr.cell}`
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
	return t === "file" ? /* @__PURE__ */ a(Tr, {
		className: e,
		variant: n,
		size: r,
		...i
	}) : /* @__PURE__ */ a("input", {
		type: t,
		"data-slot": "input",
		"data-variant": n ?? "default",
		"data-size": r ?? "default",
		className: H(wr({
			variant: n,
			size: r
		}), e),
		...i
	});
}
function Tr({ className: t, variant: n, size: r, onChange: i, disabled: s, ...c }) {
	let l = G().ui, [u, d] = e.useState([]), f = u.length === 0 ? l.chooseFile : u.length === 1 ? u[0] : l.filesChosen(u.length);
	return /* @__PURE__ */ o("label", {
		"data-slot": "input",
		"data-variant": n ?? "default",
		"data-size": r ?? "default",
		"data-disabled": s || void 0,
		className: H(wr({
			variant: n,
			size: r
		}), "flex cursor-pointer items-center gap-2 pl-1.5", "focus-within:border-ring focus-within:ring-[1.5px] focus-within:ring-ring/80", "has-[[aria-invalid=true]]:border-destructive", "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", t),
		children: [
			/* @__PURE__ */ a("span", {
				"aria-hidden": !0,
				className: H("flex shrink-0 items-center justify-center rounded-sm bg-primary-button text-primary-button-foreground", r === "sm" ? "size-5" : "size-6"),
				children: /* @__PURE__ */ a(R, { className: "size-3.5" })
			}),
			/* @__PURE__ */ a("span", {
				className: H("min-w-0 truncate text-sm", u.length === 0 && "text-muted-foreground"),
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
function Er({ className: e, ...t }) {
	return /* @__PURE__ */ a("nav", {
		role: "navigation",
		"aria-label": G().ui.pagination,
		"data-slot": "pagination",
		className: H("mx-auto flex w-full justify-center", e),
		...t
	});
}
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pagination-content",
		className: H("flex flex-row flex-wrap items-center justify-center gap-1", e),
		...t
	});
}
function Or({ ...e }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function kr({ className: e, isActive: t, size: n = "icon", ...r }) {
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
function Ar({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(kr, {
		"aria-label": n.goToPreviousPage,
		size: "default",
		className: H("gap-1 px-2.5 sm:pl-2.5", e),
		...t,
		children: [/* @__PURE__ */ a(ce, {}), /* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.previous
		})]
	});
}
function jr({ className: e, ...t }) {
	let n = G().ui;
	return /* @__PURE__ */ o(kr, {
		"aria-label": n.goToNextPage,
		size: "default",
		className: H("gap-1 px-2.5 sm:pr-2.5", e),
		...t,
		children: [/* @__PURE__ */ a("span", {
			className: "hidden sm:block",
			children: n.next
		}), /* @__PURE__ */ a(ue, {})]
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ o("span", {
		"data-slot": "pagination-ellipsis",
		className: H("flex size-9 items-center justify-center", e),
		...t,
		children: [/* @__PURE__ */ a(F, {
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
function Nr({ ...e }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "popover",
		...e
	});
}
function Pr({ ...e }) {
	return /* @__PURE__ */ a(f.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function Fr({ className: e, align: t = "start", sideOffset: n = 4, collisionPadding: r = 16, ...i }) {
	return /* @__PURE__ */ a(f.Portal, { children: /* @__PURE__ */ a(f.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		collisionPadding: r,
		className: H(gn, "z-50 max-h-(--radix-popover-content-available-height) w-72 max-w-[calc(100vw-2rem)] origin-(--radix-popover-content-transform-origin) overflow-y-auto rounded-lg p-4 outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...i
	}) });
}
function Ir({ ...e }) {
	return /* @__PURE__ */ a(f.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-header",
		className: H("flex flex-col gap-1 text-sm", e),
		...t
	});
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "popover-title",
		className: H("font-medium", e),
		...t
	});
}
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ a("p", {
		"data-slot": "popover-description",
		className: H("text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/progress.tsx
var Br = {
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
}, Vr = {
	sm: "h-1",
	default: "h-2",
	lg: "h-3"
}, Hr = "after:absolute after:inset-y-0 after:left-0 after:w-1/2 after:bg-linear-to-r after:from-transparent after:via-card/20 after:to-transparent after:animate-progress-shimmer motion-reduce:after:hidden", Ur = (e) => Math.min(100, Math.max(0, e));
function Wr({ className: e, value: t, variant: n = "default", size: r = "default", shimmer: i, label: s, showValue: c, ...l }) {
	let u = G().format, d = Br[n], f = t != null, m = /* @__PURE__ */ a(p.Root, {
		"data-slot": "progress",
		"data-variant": n,
		value: f ? Ur(t) : null,
		className: H("relative w-full overflow-hidden rounded-full", Vr[r], d.track, e),
		...l,
		children: /* @__PURE__ */ a(p.Indicator, {
			"data-slot": "progress-indicator",
			className: H("h-full rounded-full", d.fill, f ? "transition-[width] duration-500 ease-settle" : "w-1/3 animate-progress-indeterminate motion-reduce:w-full motion-reduce:animate-none motion-reduce:opacity-60", i && f && H("relative overflow-hidden", Hr)),
			style: f ? { width: `${Ur(t)}%` } : void 0
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
				children: u.percent(Ur(t))
			})]
		}), m]
	});
}
function Gr({ value: e, variant: t = "default", size: n = 40, thickness: r = 4, showValue: i, className: s, style: c, ...l }) {
	let u = G().format, d = Br[t], f = e != null, p = (n - r) / 2, m = 2 * Math.PI * p, h = f ? Ur(e) : 25;
	return /* @__PURE__ */ o("div", {
		"data-slot": "progress-ring",
		"data-variant": t,
		role: "progressbar",
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-valuenow": f ? Ur(e) : void 0,
		className: H("relative inline-grid shrink-0 place-items-center", s),
		style: {
			width: n,
			height: n,
			...c
		},
		...l,
		children: [/* @__PURE__ */ o("svg", {
			viewBox: `0 0 ${n} ${n}`,
			className: H("absolute inset-0 -rotate-90", !f && "animate-spin [animation-duration:1.1s] motion-reduce:animate-none"),
			"aria-hidden": !0,
			children: [/* @__PURE__ */ a("circle", {
				cx: n / 2,
				cy: n / 2,
				r: p,
				fill: "none",
				strokeWidth: r,
				className: H(d.stroke, "opacity-15")
			}), /* @__PURE__ */ a("circle", {
				cx: n / 2,
				cy: n / 2,
				r: p,
				fill: "none",
				strokeWidth: r,
				strokeLinecap: "round",
				strokeDasharray: m,
				strokeDashoffset: m * (1 - h / 100),
				className: H(d.stroke, "transition-[stroke-dashoffset] duration-500 ease-settle")
			})]
		}), i && f && n >= 40 && /* @__PURE__ */ a("span", {
			className: "relative text-[0.65rem] font-medium tabular-nums",
			children: u.percent(Ur(e))
		})]
	});
}
//#endregion
//#region src/components/ui/radio-group.tsx
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Root, {
		"data-slot": "radio-group",
		className: H("grid gap-3", e),
		...t
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ a(m.Item, {
		"data-slot": "radio-group-item",
		className: H("peer relative aspect-square size-4 shrink-0 rounded-full border border-input data-[state=checked]:border-primary shadow-xs transition-[color,box-shadow] outline-none before:absolute before:-inset-1 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20", e),
		...t,
		children: /* @__PURE__ */ a(m.Indicator, {
			"data-slot": "radio-group-indicator",
			className: "relative flex items-center justify-center",
			children: /* @__PURE__ */ a(N, { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-primary" })
		})
	});
}
//#endregion
//#region src/components/ui/select.tsx
function Jr({ ...e }) {
	return /* @__PURE__ */ a(h.Root, {
		"data-slot": "select",
		...e
	});
}
function Yr({ ...e }) {
	return /* @__PURE__ */ a(h.Group, {
		"data-slot": "select-group",
		...e
	});
}
function Xr({ ...e }) {
	return /* @__PURE__ */ a(h.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Zr({ className: e, size: t = "default", children: n, variant: r, ...i }) {
	return /* @__PURE__ */ o(h.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		"data-variant": r ?? "default",
		className: H("flex w-fit items-center justify-between gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", r ? Cr[r] : H(Sr, "enabled:hover:bg-accent"), e),
		...i,
		children: [n, /* @__PURE__ */ a(h.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ a(oe, { className: "size-4 text-muted-foreground" })
		})]
	});
}
function Qr({ className: e, children: t, position: n = "popper", align: r = "start", sideOffset: i = 4, collisionPadding: s = 16, ...c }) {
	return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ o(h.Content, {
		"data-slot": "select-content",
		className: H(gn, "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "min-w-(--radix-select-trigger-width)", e),
		position: n,
		align: r,
		sideOffset: i,
		collisionPadding: s,
		...c,
		children: [
			/* @__PURE__ */ a(ni, {}),
			/* @__PURE__ */ a(h.Viewport, {
				className: H("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ a(ri, {})
		]
	}) });
}
function $r({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Label, {
		"data-slot": "select-label",
		className: H("px-2 py-1.5 text-xs text-muted-foreground", e),
		...t
	});
}
function ei({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ o(h.Item, {
		"data-slot": "select-item",
		className: H("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ a("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(pe, { className: "size-4" }) })
		}), /* @__PURE__ */ a(h.ItemText, { children: t })]
	});
}
function ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.Separator, {
		"data-slot": "select-separator",
		className: H("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(de, { className: "size-4" })
	});
}
function ri({ className: e, ...t }) {
	return /* @__PURE__ */ a(h.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: H("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ a(oe, { className: "size-4" })
	});
}
//#endregion
//#region src/components/ui/separator.tsx
function ii({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ a(g.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: H("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/hooks/use-mobile.ts
var ai = 768;
function oi() {
	let [t, n] = e.useState(void 0);
	return e.useEffect(() => {
		let e = window.matchMedia("(max-width: 767px)"), t = () => {
			n(window.innerWidth < ai);
		};
		return e.addEventListener("change", t), n(window.innerWidth < ai), () => e.removeEventListener("change", t);
	}, []), !!t;
}
//#endregion
//#region src/lib/focus.ts
function si(e) {
	e.preventDefault();
	let t = e.currentTarget;
	if (!(t instanceof HTMLElement)) throw Error("focusFirstField: expected the panel element as currentTarget");
	(t.querySelector("[data-overlay-body] :is(input, textarea, select, [role=combobox]):not(:disabled)") ?? t).focus();
}
//#endregion
//#region src/components/ui/skeleton.tsx
function Y({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "skeleton",
		className: H("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tooltip.tsx
function ci({ delayDuration: e = 400, ...t }) {
	return /* @__PURE__ */ a(C.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function li({ ...e }) {
	return /* @__PURE__ */ a(ci, { children: /* @__PURE__ */ a(C.Root, {
		"data-slot": "tooltip",
		...e
	}) });
}
function ui({ ...e }) {
	return /* @__PURE__ */ a(C.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function di({ className: e, sideOffset: t = 4, collisionPadding: n = 16, children: r, ...i }) {
	return /* @__PURE__ */ a(C.Portal, { children: /* @__PURE__ */ a(C.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		collisionPadding: n,
		className: H(gn, "z-50 w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md px-2.5 py-1.5 text-xs text-balance fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...i,
		children: r
	}) });
}
//#endregion
//#region src/components/ui/sidebar.tsx
var fi = "sidebar_state", pi = 604800, mi = "16rem", hi = "18rem", gi = "3rem", _i = "b", vi = e.createContext(null);
function yi() {
	let t = e.useContext(vi);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function bi({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: o, children: s, ...c }) {
	let l = oi(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${fi}=${t}; path=/; max-age=${pi}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === _i && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ a(vi.Provider, {
		value: v,
		children: /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": mi,
				"--sidebar-width-icon": gi,
				...o
			},
			className: H("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: s
		})
	});
}
function xi({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, rootClassName: i, children: s, ...c }) {
	let { isMobile: u, state: d, openMobile: f, setOpenMobile: p } = yi(), m = G().ui;
	if (n === "none") return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar",
		className: H("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...c,
		children: s
	});
	if (u) return /* @__PURE__ */ a(l.Root, {
		open: f,
		onOpenChange: p,
		...c,
		children: /* @__PURE__ */ o(l.Portal, { children: [/* @__PURE__ */ a(l.Overlay, { className: yn }), /* @__PURE__ */ o(l.Content, {
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			onOpenAutoFocus: si,
			onCloseAutoFocus: (e) => {
				let t = document.querySelector("[data-sidebar=\"trigger\"]");
				t && (e.preventDefault(), t.focus());
			},
			className: H(vn.base, vn[e], "w-(--sidebar-width) bg-sidebar text-sidebar-foreground outline-none"),
			style: { "--sidebar-width": hi },
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
		className: H("group peer hidden text-sidebar-foreground md:block", i),
		"data-state": d,
		"data-collapsible": d === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ a("div", {
			"data-slot": "sidebar-gap",
			className: H("relative w-(--sidebar-width) bg-transparent", "group-data-[side=right]:rotate-180", h ? "group-data-[collapsible=offcanvas]:w-0" : ["transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"])
		}), /* @__PURE__ */ a("div", {
			"data-slot": "sidebar-container",
			className: H("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) md:flex", e === "left" ? "left-0" : "right-0", h ? ["transition-transform duration-200 ease-settle", e === "left" ? "group-data-[state=collapsed]:-translate-x-full" : "group-data-[state=collapsed]:translate-x-full"] : "transition-[width] duration-200 ease-settle", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
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
function Si({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = yi();
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
		children: [/* @__PURE__ */ a(Re, {}), /* @__PURE__ */ a("span", {
			className: "sr-only",
			children: G().ui.toggleSidebar
		})]
	});
}
function Ci({ className: e, ...t }) {
	let { toggleSidebar: n } = yi(), r = G().ui;
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
function wi({ className: e, as: t = "main", ...n }) {
	return /* @__PURE__ */ a(t, {
		"data-slot": "sidebar-inset",
		className: H("relative flex w-full min-w-0 flex-1 flex-col bg-background", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...n
	});
}
function Ti({ className: e, ...t }) {
	return /* @__PURE__ */ a(J, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: H("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function Ei({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Di({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: H("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Oi({ className: e, ...t }) {
	return /* @__PURE__ */ a(ii, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: H("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function ki({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: H("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function Ai({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: H("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function ji({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "div";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: H("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-ring/80 outline-hidden transition-opacity duration-200 ease-settle focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
		...n
	});
}
function Mi({ className: e, asChild: t = !1, ...n }) {
	let r = t ? v.Root : "button";
	return /* @__PURE__ */ a(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: H("absolute top-3.5 right-3 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/80 outline-hidden transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", e),
		...n
	});
}
function Ni({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: H("w-full text-sm", e),
		...t
	});
}
function Pi({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: H("flex w-full min-w-0 flex-col gap-1", e),
		...t
	});
}
function Fi({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: H("group/menu-item relative", e),
		...t
	});
}
var Ii = t("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-ring/80 outline-hidden transition-[width,height] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
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
function Li({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: s, ...c }) {
	let l = e ? v.Root : "button", { isMobile: u, state: d } = yi(), f = /* @__PURE__ */ a(l, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: H(Ii({
			variant: n,
			size: r
		}), s),
		...c
	});
	return !i || d !== "collapsed" || u ? f : (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ o(li, {
		delayDuration: 0,
		children: [/* @__PURE__ */ a(ui, {
			asChild: !0,
			children: f
		}), /* @__PURE__ */ a(di, {
			side: "right",
			align: "center",
			...i
		})]
	}));
}
function Ri({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? v.Root : "button";
	return /* @__PURE__ */ a(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: H("absolute top-1.5 right-1 flex size-6 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-ring/80 outline-hidden transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] [&>svg]:size-4 [&>svg]:shrink-0", "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0", e),
		...r
	});
}
function zi({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: H("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Bi({ className: t, showIcon: n = !1, ...r }) {
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
		children: [n && /* @__PURE__ */ a(Y, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ a(Y, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": s }
		})]
	});
}
function Vi({ className: e, ...t }) {
	return /* @__PURE__ */ a("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: H("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Hi({ className: e, ...t }) {
	return /* @__PURE__ */ a("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: H("group/menu-sub-item relative", e),
		...t
	});
}
function Ui({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let o = e ? v.Root : "a";
	return /* @__PURE__ */ a(o, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: H("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-ring/80 outline-hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-[1.5px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", t === "sm" && "text-xs", t === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", r),
		...i
	});
}
//#endregion
//#region src/components/ui/slider.tsx
function Wi({ className: t, defaultValue: n, value: r, min: i = 0, max: s = 100, ...c }) {
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
			className: "block size-4 shrink-0 rounded-full border border-primary bg-card ring-ring/80 transition-[color,box-shadow] hover:ring-[1.5px] focus-visible:ring-[1.5px] focus-visible:outline-hidden"
		}, t))]
	});
}
//#endregion
//#region src/lib/storage.ts
var Gi = "ziku", Ki = Gi;
function qi(e) {
	if (!e || e.includes(".")) throw Error(`Storage prefix must be a non-empty string with no dots, got "${e}"`);
	if (Ki !== Gi && Ki !== e) throw Error(`Storage prefix is already "${Ki}", cannot change it to "${e}"`);
	Ki = e;
}
var Ji = () => Ki, Yi = (...e) => [Ki, ...e].join("."), Xi = 75, Zi = 150, Qi = 100, $i = [
	75,
	90,
	100,
	110,
	125,
	150
], ea = [
	"light",
	"dark",
	"system"
], ta = "system";
function na(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function ra(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch {}
}
function ia(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i, a = () => i ??= t(na(Yi(e)));
	return {
		get: a,
		set: (t) => {
			Object.is(t, a()) || (i = t, ra(Yi(e), String(t)), n(t), r.forEach((e) => e()));
		},
		subscribe: (e) => (r.add(e), n(a()), () => r.delete(e)),
		notify: () => r.forEach((e) => e())
	};
}
var aa = () => typeof document < "u", oa = (e) => Math.min(150, Math.max(75, Math.round(e))), sa = ia("zoom", (e) => {
	let t = Number(e);
	return e !== null && Number.isFinite(t) && t > 0 ? oa(t) : 100;
}, (e) => {
	aa() && document.documentElement.style.setProperty("--app-zoom", String(e / 100));
}), ca = (e) => sa.set(oa(e));
function la() {
	return {
		zoom: e.useSyncExternalStore(sa.subscribe, sa.get, () => 100),
		setZoom: ca
	};
}
var ua = "(prefers-color-scheme: dark)", da = () => typeof matchMedia < "u" && matchMedia(ua).matches ? "dark" : "light", fa = (e) => e === "system" ? da() : e, pa = (e) => {
	if (!aa()) return;
	let t = fa(e);
	document.documentElement.dataset.theme = t, document.documentElement.style.colorScheme = t;
}, ma = ia("theme", (e) => ea.find((t) => t === e) ?? "system", pa);
typeof matchMedia < "u" && matchMedia(ua).addEventListener("change", () => {
	ma.get() === "system" && (pa("system"), ma.notify());
});
var ha = (e) => {
	if (!ea.includes(e)) throw Error(`Unknown theme "${e}", expected one of ${ea.join(", ")}`);
	ma.set(e);
};
function ga() {
	let t = e.useSyncExternalStore(ma.subscribe, ma.get, () => ta);
	return {
		theme: t,
		resolved: fa(t),
		setTheme: ha
	};
}
function _a(e = Ji()) {
	let t = JSON.stringify(e);
	return `(function(){try{var d=document.documentElement;var z=parseFloat(localStorage.getItem(${t}+".zoom"));if(z>=75&&z<=150)d.style.setProperty("--app-zoom",String(z/100));var t=localStorage.getItem(${t}+".theme");if(t!=="light"&&t!=="dark")t=matchMedia(${JSON.stringify(ua)}).matches?"dark":"light";d.dataset.theme=t;d.style.colorScheme=t}catch(e){}})()`;
}
//#endregion
//#region src/components/ui/sonner.tsx
var va = ({ theme: e, ...t }) => {
	let { resolved: n } = ga(), r = G().ui;
	return /* @__PURE__ */ a(lt, {
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
			info: /* @__PURE__ */ a(Oe, { className: "size-4" }),
			warning: /* @__PURE__ */ a(Ye, { className: "size-4" }),
			error: /* @__PURE__ */ a(Ze, { className: "size-4" }),
			loading: /* @__PURE__ */ a(L, { className: "size-4 animate-spin" })
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
}, ya = Object.assign((...e) => ut(...e), ut, { danger: ut.error });
//#endregion
//#region src/components/ui/switch.tsx
function ba({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ a(y.Root, {
		"data-slot": "switch",
		"data-size": t,
		className: H("peer group/switch relative inline-flex shrink-0 items-center rounded-full border p-px transition-[background-color,border-color,box-shadow,filter] outline-none before:absolute before:-inset-1 hover:brightness-95 focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-5 data-[size=default]:w-9 data-[size=sm]:h-4 data-[size=sm]:w-7 data-[state=checked]:border-primary-button-foreground/20 data-[state=checked]:bg-primary-button data-[state=unchecked]:bg-muted", e),
		...n,
		children: /* @__PURE__ */ a(y.Thumb, {
			"data-slot": "switch-thumb",
			className: H("pointer-events-none block rounded-full transition-[translate,background-color] ease-settle group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-[state=checked]:translate-x-4 group-data-[size=sm]/switch:data-[state=checked]:translate-x-3 data-[state=checked]:bg-primary-button-foreground data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-card data-[state=unchecked]:shadow-xs data-[state=unchecked]:ring-1 data-[state=unchecked]:ring-border")
		})
	});
}
//#endregion
//#region src/components/ui/table.tsx
function xa({ className: e, containerClassName: t, containerRef: n, ...r }) {
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
function Sa({ className: e, ...t }) {
	return /* @__PURE__ */ a("thead", {
		"data-slot": "table-header",
		className: H("[&_tr]:border-b", e),
		...t
	});
}
function Ca({ className: e, ...t }) {
	return /* @__PURE__ */ a("tbody", {
		"data-slot": "table-body",
		className: H("[&_tr:last-child]:border-0", e),
		...t
	});
}
function wa({ className: e, ...t }) {
	return /* @__PURE__ */ a("tfoot", {
		"data-slot": "table-footer",
		className: H("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function X({ className: e, ...t }) {
	return /* @__PURE__ */ a("tr", {
		"data-slot": "table-row",
		className: H("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-accent", e),
		...t
	});
}
function Ta({ className: e, ...t }) {
	return /* @__PURE__ */ a("th", {
		"data-slot": "table-head",
		className: H("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Ea({ className: e, ...t }) {
	return /* @__PURE__ */ a("td", {
		"data-slot": "table-cell",
		className: H("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", e),
		...t
	});
}
function Da({ className: e, ...t }) {
	return /* @__PURE__ */ a("caption", {
		"data-slot": "table-caption",
		className: H("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/components/ui/tabs.tsx
function Oa({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ a(b.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: H("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var ka = t("group/tabs-list inline-flex w-fit max-w-full items-center justify-center overflow-x-auto rounded-lg p-[3px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:items-stretch group-data-[orientation=vertical]/tabs:gap-0.5 data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted group-data-[orientation=vertical]/tabs:bg-transparent group-data-[orientation=vertical]/tabs:p-0",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function Aa({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ a(b.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: H(ka({ variant: t }), e),
		...n
	});
}
function ja({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Trigger, {
		"data-slot": "tabs-trigger",
		className: H("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,background-color,border-color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=default]/tabs-list:data-[state=active]:bg-primary-button group-data-[variant=default]/tabs-list:data-[state=active]:text-primary-button-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-xs", "group-data-[variant=line]/tabs-list:data-[state=active]:text-primary-button-foreground", "after:absolute after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-1.5 group-data-[orientation=vertical]/tabs:after:left-0 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", "group-data-[orientation=vertical]/tabs:h-8 group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:flex-none group-data-[orientation=vertical]/tabs:justify-start group-data-[orientation=vertical]/tabs:px-2.5 group-data-[orientation=vertical]/tabs:hover:bg-accent group-data-[orientation=vertical]/tabs:data-[state=active]:hover:bg-primary-button", e),
		...t
	});
}
function Ma({ className: e, ...t }) {
	return /* @__PURE__ */ a(b.Content, {
		"data-slot": "tabs-content",
		className: H("flex-1 outline-none", e),
		...t
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Na({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ a("textarea", {
		"data-slot": "textarea",
		"data-variant": t ?? "default",
		className: H("flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm", t ? Cr[t] : Sr, e),
		...n
	});
}
//#endregion
//#region src/components/ui/toggle.tsx
var Pa = t("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function Fa({ className: e, variant: t, size: n, ...r }) {
	return /* @__PURE__ */ a(x.Root, {
		"data-slot": "toggle",
		className: H(Pa({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
//#endregion
//#region src/components/ui/toggle-group.tsx
var Ia = e.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function La({ className: e, variant: t, size: n, spacing: r = 0, children: i, ...o }) {
	return /* @__PURE__ */ a(S.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		style: { "--gap": r },
		className: H("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
		...o,
		children: /* @__PURE__ */ a(Ia.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r
			},
			children: i
		})
	});
}
function Ra({ className: t, children: n, variant: r, size: i, ...o }) {
	let s = e.useContext(Ia);
	return /* @__PURE__ */ a(S.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": s.variant || r,
		"data-size": s.size || i,
		"data-spacing": s.spacing,
		className: H(Pa({
			variant: s.variant || r,
			size: s.size || i
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", t),
		...o,
		children: n
	});
}
//#endregion
//#region src/blocks/brand/wordmark.tsx
function za({ children: e, className: t, ...n }) {
	if (e.trim() === "") throw Error("Wordmark: children must be a non-empty name");
	return /* @__PURE__ */ a("span", {
		"data-slot": "wordmark",
		className: H("inline-block text-xl leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-foreground select-none", t),
		...n,
		children: e
	});
}
//#endregion
//#region src/blocks/auth/auth-layout.tsx
var Ba = e.createContext({}), Va = (e) => e != null && e !== !1;
function Ha() {
	let { logo: t } = e.useContext(Ba);
	return Va(t) ? /* @__PURE__ */ a("div", {
		"data-slot": "auth-logo",
		className: "flex justify-center",
		children: typeof t == "string" ? /* @__PURE__ */ a(za, {
			className: "text-2xl",
			children: t
		}) : t
	}) : null;
}
function Ua() {
	let { footer: t } = e.useContext(Ba);
	return Va(t) ? /* @__PURE__ */ a("p", {
		"data-slot": "auth-footer",
		className: "mt-6 text-balance border-t pt-4 text-center text-xs text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4",
		children: t
	}) : null;
}
function Wa({ logo: e, footer: t, className: n, children: r, ...i }) {
	return /* @__PURE__ */ a("main", {
		className: H("flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10", n),
		...i,
		children: /* @__PURE__ */ a("div", {
			className: "flex w-full max-w-sm flex-col gap-6",
			children: /* @__PURE__ */ a(Ba.Provider, {
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
var Ga = e.createContext((e) => /* @__PURE__ */ a("a", { ...e }));
function Ka({ component: e, children: t }) {
	return /* @__PURE__ */ a(Ga.Provider, {
		value: e,
		children: t
	});
}
function Z(t) {
	let n = e.useContext(Ga);
	return /* @__PURE__ */ a(n, { ...t });
}
//#endregion
//#region src/blocks/auth/login-form.tsx
var qa = (e) => B.object({
	email: B.email(e.invalidEmail),
	password: B.string().min(1, e.passwordRequired)
});
function Ja({ onSubmit: t, error: n, title: r, description: s, registerHref: c = "/register", forgotPasswordHref: l = "/forgot-password", providers: u }) {
	let d = G().auth, f = e.useMemo(() => qa(d), [d]), p = ot({
		resolver: z(f),
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
	return /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ o(Nn, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ha, {}),
			/* @__PURE__ */ a("h1", {
				className: r ? "text-xl leading-none font-semibold" : "sr-only",
				children: r ?? d.signIn
			}),
			s && /* @__PURE__ */ a(Fn, { children: s })
		]
	}), /* @__PURE__ */ o(Ln, { children: [/* @__PURE__ */ a(fr, {
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
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					id: h,
					children: /* @__PURE__ */ a(Mt, { children: n })
				}),
				/* @__PURE__ */ a(mr, {
					control: p.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
						/* @__PURE__ */ a(vr, { children: d.email }),
						/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: d.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(xr, {})
					] })
				}),
				/* @__PURE__ */ a(mr, {
					control: p.control,
					name: "password",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
						/* @__PURE__ */ o("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ a(vr, { children: d.password }), l && /* @__PURE__ */ a(Z, {
								href: l,
								className: "text-sm text-link underline-offset-4 hover:underline",
								children: d.forgotPassword
							})]
						}),
						/* @__PURE__ */ a(yr, {
							"aria-invalid": n ? !0 : void 0,
							"aria-describedby": n ? h : void 0,
							children: /* @__PURE__ */ a(J, {
								type: "password",
								autoComplete: "current-password",
								...e
							})
						}),
						/* @__PURE__ */ a(xr, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: m,
					children: [m && /* @__PURE__ */ a(L, { className: "animate-spin" }), d.signIn]
				}),
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
	}), /* @__PURE__ */ a(Ua, {})] })] });
}
//#endregion
//#region src/blocks/auth/register-form.tsx
var Ya = /^[\d\s+\-()]+$/, Xa = (e) => {
	let t = e.replace(/\D/g, "").length;
	return Ya.test(e) && t >= 6 && t <= 20;
}, Za = ["optional", "required"], Qa = (e, t = {}) => B.object({
	name: B.string().min(2, e.nameTooShort),
	email: B.email(e.invalidEmail),
	password: B.string().min(8, e.passwordTooShort),
	confirmPassword: B.string(),
	phone: B.string().trim().optional().superRefine((n, r) => {
		if (t.phone) {
			if (!n) {
				t.phone === "required" && r.addIssue({
					code: "custom",
					message: e.phoneRequired
				});
				return;
			}
			Xa(n) || r.addIssue({
				code: "custom",
				message: e.invalidPhone
			});
		}
	}),
	consent: B.boolean().optional().refine((e) => !t.consent || e === !0, e.consentRequired)
}).refine((e) => e.password === e.confirmPassword, {
	path: ["confirmPassword"],
	message: e.passwordsDoNotMatch
}).transform(({ phone: e, consent: n, ...r }) => ({
	...r,
	...t.phone && e ? { phone: e } : {},
	...t.consent ? { consent: !0 } : {}
}));
function $a({ onSubmit: t, error: n, title: r, description: s, loginHref: c = "/login", providers: l, phone: u, consent: d }) {
	let f = G().auth;
	if (u !== void 0 && !Za.includes(u)) throw Error("RegisterForm: phone must be one of " + Za.join(", ") + ", got " + JSON.stringify(u));
	let p = d != null, m = e.useMemo(() => Qa(f, {
		phone: u,
		consent: p
	}), [
		f,
		u,
		p
	]), h = ot({
		resolver: z(m),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
			consent: !1
		}
	}), g = h.formState.isSubmitting, _ = (e, t, n, r) => /* @__PURE__ */ a(mr, {
		control: h.control,
		name: e,
		render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
			/* @__PURE__ */ a(vr, { children: t }),
			/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
				...n,
				...e,
				value: e.value ?? ""
			}) }),
			r && /* @__PURE__ */ a(br, { children: r }),
			/* @__PURE__ */ a(xr, {})
		] })
	});
	return /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ o(Nn, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ha, {}),
			/* @__PURE__ */ a(Pn, {
				className: "text-xl",
				children: r ?? f.registerTitle
			}),
			s && /* @__PURE__ */ a(Fn, { children: s })
		]
	}), /* @__PURE__ */ o(Ln, { children: [/* @__PURE__ */ a(fr, {
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
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(Mt, { children: n })
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
				p && /* @__PURE__ */ a(mr, {
					control: h.control,
					name: "consent",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [/* @__PURE__ */ o("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(zn, {
							className: "mt-0.5",
							checked: e.value === !0,
							onCheckedChange: (t) => e.onChange(t === !0),
							onBlur: e.onBlur,
							ref: e.ref,
							name: e.name
						}) }), /* @__PURE__ */ a(vr, {
							className: "block text-sm leading-snug font-normal",
							children: d
						})]
					}), /* @__PURE__ */ a(xr, {})] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: g,
					children: [g && /* @__PURE__ */ a(L, { className: "animate-spin" }), f.createAccount]
				}),
				c && /* @__PURE__ */ o("p", {
					className: "text-center text-sm text-muted-foreground",
					children: [
						f.haveAccount,
						" ",
						/* @__PURE__ */ a(Z, {
							href: c,
							className: "text-link underline underline-offset-4",
							children: f.signIn
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ a(Ua, {})] })] });
}
//#endregion
//#region src/blocks/auth/forgot-password-form.tsx
var eo = (e) => B.object({ email: B.email(e.invalidEmail) });
function to({ onSubmit: t, error: n, sent: r, loginHref: i = "/login" }) {
	let s = G().auth, c = e.useMemo(() => eo(s), [s]), l = ot({
		resolver: z(c),
		defaultValues: { email: "" }
	}), u = l.formState.isSubmitting;
	return r ? /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ o(Nn, {
		className: "items-center text-center",
		children: [
			/* @__PURE__ */ a(Ha, {}),
			/* @__PURE__ */ a(be, {
				"aria-hidden": !0,
				className: "size-6 text-success-fg"
			}),
			/* @__PURE__ */ a(Pn, {
				className: "text-xl",
				children: s.sentTitle
			}),
			/* @__PURE__ */ a(Fn, { children: s.sentDescription(l.getValues("email") || s.thatEmail) })
		]
	}), i && /* @__PURE__ */ a(Ln, {
		className: "text-center text-sm",
		children: /* @__PURE__ */ a(Z, {
			href: i,
			className: "text-link underline underline-offset-4",
			children: s.backToSignIn
		})
	})] }) : /* @__PURE__ */ o(Mn, { children: [/* @__PURE__ */ o(Nn, {
		className: "text-center",
		children: [
			/* @__PURE__ */ a(Ha, {}),
			/* @__PURE__ */ a(Pn, {
				className: "text-xl",
				children: s.resetTitle
			}),
			/* @__PURE__ */ a(Fn, { children: s.resetDescription })
		]
	}), /* @__PURE__ */ o(Ln, { children: [/* @__PURE__ */ a(fr, {
		...l,
		children: /* @__PURE__ */ o("form", {
			onSubmit: l.handleSubmit(t),
			className: "grid gap-5",
			noValidate: !0,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(Mt, { children: n })
				}),
				/* @__PURE__ */ a(mr, {
					control: l.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
						/* @__PURE__ */ a(vr, { children: s.email }),
						/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
							type: "email",
							autoComplete: "email",
							placeholder: s.emailPlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(xr, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full",
					disabled: u,
					children: [u && /* @__PURE__ */ a(L, { className: "animate-spin" }), s.sendResetLink]
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
	}), /* @__PURE__ */ a(Ua, {})] })] });
}
//#endregion
//#region src/components/ui/command.tsx
function no({ className: e, ...t }) {
	return /* @__PURE__ */ a(dt, {
		"data-slot": "command",
		className: H("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function ro({ title: e, description: t, children: n, className: r, showCloseButton: i = !0, ...s }) {
	let c = G().ui;
	return /* @__PURE__ */ a(Bn, {
		...s,
		children: /* @__PURE__ */ o(Gn, {
			className: H("overflow-hidden p-0", r),
			showCloseButton: i,
			children: [/* @__PURE__ */ o(Kn, {
				className: "sr-only",
				children: [/* @__PURE__ */ a(Jn, { children: e ?? c.commandTitle }), /* @__PURE__ */ a(Yn, { children: t ?? c.commandDescription })]
			}), /* @__PURE__ */ a(no, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2 [&_[cmdk-item]_svg]:size-4",
				children: n
			})]
		})
	});
}
function io({ className: e, ...t }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ a(je, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ a(dt.Input, {
			"data-slot": "command-input",
			className: H("flex h-full w-full rounded-md bg-transparent text-base outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
			...t
		})]
	});
}
function ao({ className: e, ...t }) {
	return /* @__PURE__ */ a(dt.List, {
		"data-slot": "command-list",
		className: H("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function oo({ ...e }) {
	return /* @__PURE__ */ a(dt.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function so({ className: e, ...t }) {
	return /* @__PURE__ */ a(dt.Group, {
		"data-slot": "command-group",
		className: H("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function co({ className: e, ...t }) {
	return /* @__PURE__ */ a(dt.Separator, {
		"data-slot": "command-separator",
		className: H("-mx-1 h-px bg-border", e),
		...t
	});
}
function lo({ className: e, ...t }) {
	return /* @__PURE__ */ a(dt.Item, {
		"data-slot": "command-item",
		className: H("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function uo({ className: e, ...t }) {
	return /* @__PURE__ */ a("span", {
		"data-slot": "command-shortcut",
		className: H("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
//#endregion
//#region src/blocks/search/command-menu.tsx
function fo({ groups: t, open: n, onOpenChange: r, placeholder: i, emptyMessage: s, onQueryChange: c, disableShortcut: l }) {
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
	]), /* @__PURE__ */ o(ro, {
		open: p,
		onOpenChange: m,
		showCloseButton: !1,
		children: [/* @__PURE__ */ a(io, {
			placeholder: i ?? u.placeholder,
			onValueChange: c
		}), /* @__PURE__ */ o(ao, { children: [/* @__PURE__ */ a(oo, { children: s ?? u.empty }), t.map((t, n) => /* @__PURE__ */ o(e.Fragment, { children: [n > 0 && /* @__PURE__ */ a(co, {}), /* @__PURE__ */ a(so, {
			heading: t.heading,
			children: t.items.map((e) => /* @__PURE__ */ o(lo, {
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
					e.shortcut && /* @__PURE__ */ a(uo, { children: e.shortcut })
				]
			}, e.id))
		})] }, t.heading ?? n))] })]
	});
}
function po({ placeholder: e, shortcut: t, className: n, ...r }) {
	let i = G().search, s = t === void 0 ? i.shortcut : t;
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-slot": "search-trigger",
		className: H("inline-flex h-8 w-full items-center gap-2 rounded-md border border-input bg-field px-3 text-sm text-muted-foreground transition-colors outline-none select-none sm:w-56", "hover:bg-accent focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80", n),
		...r,
		children: [
			/* @__PURE__ */ a(Ae, {
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
function mo({ items: t, onSelect: n, label: r, placeholder: i, query: s, onQueryChange: c, empty: l, loading: u = !1, autoFocus: d, disabled: f, className: p }) {
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
	return /* @__PURE__ */ o(Nr, {
		open: ee,
		onOpenChange: (e) => !e && b(!1),
		children: [/* @__PURE__ */ a(Ir, {
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
		}), /* @__PURE__ */ a(Fr, {
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
						className: H("cursor-pointer rounded-sm px-2 py-1.5 text-sm", t === w && "bg-accent text-accent-foreground"),
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
function ho({ icon: e, title: t, as: n = "h2", tone: r = "neutral", description: i, action: s, className: c, ...l }) {
	return /* @__PURE__ */ o("div", {
		className: H("flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-8 text-center sm:p-12", c),
		...l,
		children: [
			e && /* @__PURE__ */ a("div", {
				className: H("flex size-12 items-center justify-center rounded-full", r === "danger" ? "bg-danger-subtle" : "bg-muted"),
				children: /* @__PURE__ */ a(e, {
					"aria-hidden": !0,
					className: H("size-6", r === "danger" ? "text-danger-fg" : "text-muted-foreground")
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
function go(e) {
	return e === !0 ? void 0 : e;
}
function _o({ onRetry: e, action: t, title: n, variant: r = "panel", icon: i = Je, className: s }) {
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
		children: /* @__PURE__ */ o(Mt, {
			className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2",
			children: [l, d]
		})
	}) : /* @__PURE__ */ a(ho, {
		tone: "danger",
		icon: i,
		title: l,
		action: d,
		className: s
	});
}
//#endregion
//#region src/blocks/page/stat-tile.tsx
var vo = "text-xs font-medium tracking-wider text-muted-foreground uppercase", yo = vo;
function bo({ as: e = "h2", className: t, ...n }) {
	return /* @__PURE__ */ a(e, {
		"data-slot": "section-label",
		className: H(yo, t),
		...n
	});
}
var xo = {
	up: "text-success-fg",
	down: "text-danger-fg",
	flat: "text-muted-foreground"
};
function So({ label: e, value: t, hint: n, icon: r, change: s, trend: c, loading: l, error: u, pressed: d, onPressedChange: f, className: p, ...m }) {
	let h = G(), g = h.dashboard;
	if (d !== void 0 && !f) throw Error("StatTile: pressed needs onPressedChange; pass both, or neither for a plain tile");
	let _ = c ?? (s === void 0 || s === 0 ? "flat" : s > 0 ? "up" : "down"), v = f ? "span" : "div", y = /* @__PURE__ */ o(i, { children: [
		/* @__PURE__ */ o(v, {
			className: "flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ a("span", {
				className: yo,
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
			children: [/* @__PURE__ */ a(Y, { className: "mt-2 h-8 w-24" }), /* @__PURE__ */ a(Y, { className: "mt-1.5 h-3 w-32" })]
		}) : u ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(v, {
			className: "mt-2 block text-2xl font-semibold text-muted-foreground",
			"aria-hidden": !0,
			children: "—"
		}), /* @__PURE__ */ a(v, {
			className: "mt-1 block text-xs text-danger-fg",
			children: go(u) ?? h.common.loadFailed
		})] }) : /* @__PURE__ */ a(v, {
			className: "mt-2 block text-2xl font-semibold tabular-nums",
			children: t
		}),
		!l && !u && (n || s !== void 0) && /* @__PURE__ */ o(v, {
			className: H("mt-1 flex flex-wrap gap-x-1 text-xs", xo[_]),
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
		className: H(_n, "block w-full p-4 text-left transition-colors outline-none", "hover:bg-accent/50 focus-visible:ring-[1.5px] focus-visible:ring-ring/80", "aria-pressed:border-primary aria-pressed:bg-accent", "disabled:pointer-events-none", p),
		...m,
		onClick: (e) => {
			m.onClick?.(e), f(!d);
		},
		children: y
	}) : /* @__PURE__ */ a("div", {
		"data-slot": "stat-tile",
		className: H(_n, "p-4", p),
		...m,
		children: y
	});
}
//#endregion
//#region src/blocks/data/days.ts
var Co = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), wo = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t), To = (e, t) => Math.round((Co(t).getTime() - Co(e).getTime()) / 864e5), Eo = (e, t) => wo(Co(e), -((e.getDay() - t + 7) % 7)), Do = (e) => `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, Oo = (e, t) => To(e, t) === 0;
function ko(e, t) {
	if (!e) return null;
	if (Number.isNaN(e.getTime())) throw Error("dates.start returned an invalid Date");
	let n = Co(e);
	if (!t) return {
		from: n,
		to: n
	};
	if (Number.isNaN(t.getTime())) throw Error("dates.end returned an invalid Date");
	let r = Co(t);
	if (r < n) throw Error("dates.end is before dates.start (" + Do(r) + " < " + Do(n) + ")");
	return {
		from: n,
		to: r
	};
}
//#endregion
//#region src/blocks/data/timeline.tsx
var Ao = [
	"week",
	"month",
	"quarter"
], jo = {
	week: 44,
	month: 22,
	quarter: 8
}, Mo = {
	week: 7,
	month: 14,
	quarter: 30
}, No = "w-40 sm:w-52", Po = "h-9";
function Fo(e, t, n) {
	if (t === "move") return {
		from: wo(e.from, n),
		to: wo(e.to, n)
	};
	if (t === "start") {
		let t = wo(e.from, n);
		return {
			from: t > e.to ? e.to : t,
			to: e.to
		};
	}
	let r = wo(e.to, n);
	return {
		from: e.from,
		to: r < e.from ? e.from : r
	};
}
function Io(t, n) {
	let [r, i] = e.useState({});
	return {
		pending: r,
		commit: e.useCallback((e, r, a, o) => {
			if (!t || Oo(a.from, r.from) && Oo(a.to, r.to)) return;
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
var Lo = 4;
function Ro({ items: e, start: t, end: n }) {
	let r = [], i = 0;
	for (let a of e) {
		let e = n?.(a), o = ko(t(a), e);
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
function zo({ items: t, itemKey: n, start: r, end: i, label: s, onItemClick: c, onReschedule: l, today: u }) {
	let d = G(), f = d.datePicker.locale.options?.weekStartsOn ?? 0, [p, m] = e.useState("month"), h = e.useRef(null), g = Co(u ?? /* @__PURE__ */ new Date()), { placed: _, undated: v } = Ro({
		items: t,
		start: r,
		end: i
	}), y = e.useId(), [b, x] = e.useState(null), { pending: S, commit: C } = Io(l, n), w = e.useRef(null), T = e.useRef(!1), E = jo[p], D = _.reduce((e, t) => t.from < e ? t.from : e, g), ee = _.reduce((e, t) => t.to > e ? t.to : e, g), te = Eo(wo(D, -Mo[p]), f), ne = To(te, wo(ee, Mo[p])) + 1, re = e.useMemo(() => Array.from({ length: ne }, (e, t) => wo(te, t)), [te.getTime(), ne]), O = (e) => To(te, e) * E, k = O(g), ie = [];
	for (let e of re) {
		let t = `${e.getFullYear()}-${e.getMonth()}`, n = ie[ie.length - 1];
		n?.key === t ? n.days++ : ie.push({
			key: t,
			date: e,
			days: 1
		});
	}
	let ae = e.useCallback(() => {
		let e = h.current;
		e && (e.scrollLeft = Math.max(0, k - e.clientWidth / 3));
	}, [k]);
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
		style: { left: k + E / 2 }
	});
	return /* @__PURE__ */ o("div", {
		"data-slot": "timeline",
		className: "flex flex-col",
		children: [/* @__PURE__ */ o("div", {
			className: "flex flex-wrap items-center gap-2 border-b px-3 py-2",
			children: [
				/* @__PURE__ */ a(La, {
					type: "single",
					variant: "outline",
					size: "sm",
					value: p,
					"aria-label": d.dataTable.timelineScale,
					onValueChange: (e) => e && m(e),
					children: Ao.map((e) => /* @__PURE__ */ a(Ra, {
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
						children: [/* @__PURE__ */ a("div", { className: H(No, "sticky left-0 z-10 shrink-0 border-r bg-card") }), /* @__PURE__ */ o("div", {
							className: "relative",
							style: { width: ne * E },
							children: [/* @__PURE__ */ a("div", {
								className: "flex h-7 items-end border-b",
								children: ie.map((e) => /* @__PURE__ */ a("div", {
									className: "h-full shrink-0 truncate border-l px-2 pt-1.5 text-xs font-medium first:border-l-0",
									style: { width: e.days * E },
									children: d.format.month(e.date)
								}, e.key))
							}), /* @__PURE__ */ a("div", {
								className: "relative flex h-7",
								children: re.map((e, t) => /* @__PURE__ */ a("div", {
									className: H("shrink-0 pt-1.5 text-center text-xs tabular-nums", Oo(e, g) ? "font-semibold text-danger-fg" : "text-muted-foreground"),
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
						}, { from: p, to: m } = f, h = O(p), g = (To(p, m) + 1) * E, _ = s(e), v = i || Oo(p, m) ? d.format.date(p) : `${d.format.date(p)}${d.datePicker.rangeSeparator}${d.format.date(m)}`, D = !!(c || l), ee = D ? "button" : "div", te = (n) => C(e, {
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
								!t.moved && Math.abs(n) < Lo || (t.moved = !0, x({
									key: u,
									span: Fo(t.span, t.edge, Math.round(n / E))
								}));
							},
							onPointerUp: (e) => {
								let t = w.current;
								w.current = null, !(!t || !t.moved) && (T.current = !0, x(null), te(Fo(t.span, t.edge, Math.round((e.clientX - t.x0) / E))));
							},
							onPointerCancel: () => {
								w.current = null, x(null);
							},
							onKeyDown: (e) => {
								(e.key === "ArrowLeft" || e.key === "ArrowRight") && (e.preventDefault(), te(Fo(f, e.shiftKey && !i ? "end" : "move", e.key === "ArrowLeft" ? -1 : 1)));
							},
							"aria-describedby": y
						}, k = D ? () => {
							if (T.current) {
								T.current = !1;
								return;
							}
							c?.(e);
						} : void 0, ie = (e) => /* @__PURE__ */ a("span", {
							"aria-hidden": !0,
							"data-edge": e,
							className: H("absolute inset-y-0 w-2 cursor-ew-resize", e === "start" ? "left-0" : "right-0")
						});
						return /* @__PURE__ */ o("li", {
							className: H("flex border-b last:border-b-0", Po),
							children: [/* @__PURE__ */ a("div", {
								className: H(No, "sticky left-0 z-10 flex shrink-0 items-center border-r bg-card px-3 text-sm"),
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
										onClick: k,
										...re,
										title: `${_} · ${v}`,
										"aria-label": `${_}, ${v}`,
										className: H("absolute top-1/2 z-[2] flex -translate-y-1/2 items-center gap-2 rounded-sm outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80", l && "cursor-grab touch-none select-none active:cursor-grabbing"),
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
										onClick: k,
										...re,
										title: `${_} · ${v}`,
										"aria-label": `${_}, ${v}`,
										className: H("absolute inset-y-1.5 z-[2] flex items-center overflow-hidden rounded-md border border-ring/40 bg-accent px-2 text-left text-xs text-accent-foreground outline-none", c && "cursor-pointer hover:brightness-95", l && "cursor-grab touch-none select-none active:cursor-grabbing", b?.key === u && "z-[3] shadow-md", "focus-visible:ring-[1.5px] focus-visible:ring-ring/80"),
										style: {
											left: h,
											width: g
										},
										children: [
											/* @__PURE__ */ a("span", {
												className: "pointer-events-none truncate",
												children: _
											}),
											l && ie("start"),
											l && ie("end")
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
var Bo = "—", Q = (e) => e == null || e === "" ? "" : String(e);
function Vo(e, t) {
	return typeof e == "number" && typeof t == "number" ? e - t : String(e).localeCompare(String(t), void 0, { numeric: !0 });
}
var Ho = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0, Uo = (e) => Array.isArray(e) ? e.map(Q) : [Q(e)], Wo = [
	"table",
	"board",
	"timeline",
	"calendar"
], Go = (e) => (t, n) => {
	if (!e.order) return Vo(t, n);
	let r = e.order.indexOf(t), i = e.order.indexOf(n);
	return (r < 0 ? e.order.length : r) - (i < 0 ? e.order.length : i);
}, Ko = (e) => !!e.header;
function qo(e, t) {
	return e?.facetLabel ? e.facetLabel(t) : t;
}
function Jo(e, t) {
	if (Ho(t)) return e.header;
	let n = Uo(t).map((t) => qo(e, t)), r = n.slice(0, 2).join(", ");
	return `${e.header}: ${n.length > 2 ? `${r} +${n.length - 2}` : r}`;
}
function Yo(e, t) {
	let n = Object.fromEntries(e.map((e) => [e.key, e])), r = t.sorting[0], i = r ? n[r.id]?.sortKey : void 0;
	return {
		q: t.globalFilter,
		sort: i ? {
			key: i,
			dir: r.desc ? "desc" : "asc"
		} : void 0,
		filters: Object.fromEntries(t.columnFilters.flatMap((e) => {
			let t = n[e.id]?.filterKey;
			return !t || Ho(e.value) ? [] : [[t, Uo(e.value)]];
		}))
	};
}
//#endregion
//#region src/blocks/data/calendar-view.tsx
var Xo = 3, Zo = 5, Qo = ["month", "year"], $o = "application/x-ziku-calendar-item";
function es({ items: t, itemKey: n, start: r, end: s, label: c, onItemClick: l, onReschedule: u, today: d, defaultScale: f = "month" }) {
	let p = G(), m = p.datePicker.locale.options?.weekStartsOn ?? 0, h = Co(d ?? /* @__PURE__ */ new Date()), [g, _] = e.useState(() => new Date(h.getFullYear(), h.getMonth(), 1)), [v, y] = e.useState(f), { pending: b, commit: x } = Io(u, n), [S, C] = e.useState(null), w = e.useId(), T = e.useRef(null), E = e.useRef(null);
	e.useEffect(() => {
		let e = E.current;
		if (!e) return;
		let t = T.current?.querySelector(`[data-item-key="${CSS.escape(e)}"]`);
		t && (t.focus(), E.current = null);
	});
	let D = Eo(g, m), ee = new Date(g.getFullYear(), g.getMonth() + 1, 0), te = Math.ceil((To(D, ee) + 1) / 7), ne = Array.from({ length: te * 7 }, (e, t) => wo(D, t)), re = ne[ne.length - 1], O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), ie = 0;
	for (let e of t) {
		let t = s?.(e), i = ko(r(e), t);
		if (!i) {
			ie++;
			continue;
		}
		let a = n(e), o = {
			row: e,
			key: a,
			own: i,
			shown: b[a] ?? i,
			point: !t
		};
		k.set(a, o);
		let c = o.shown.to;
		if (c < D || c > re) continue;
		let l = O.get(Do(c));
		l ? l.push(o) : O.set(Do(c), [o]);
	}
	let ae = (e, t) => x(e.row, e.own, Fo(e.shown, "move", To(e.shown.to, t)), e.point), oe = v === "year" ? 12 : 1, ce = (e) => _((t) => new Date(t.getFullYear(), t.getMonth() + e * oe, 1)), A = Array.from({ length: 12 }, () => []);
	if (v === "year") for (let e of k.values()) e.shown.to.getFullYear() === g.getFullYear() && A[e.shown.to.getMonth()].push(e);
	for (let e of A) e.sort((e, t) => e.shown.to.getTime() - t.shown.to.getTime());
	let ue = (e, t) => u && {
		onDragOver: (t) => {
			t.dataTransfer.types.includes($o) && (t.preventDefault(), t.dataTransfer.dropEffect = "move", S !== e && C(e));
		},
		onDragLeave: (e) => {
			e.currentTarget.contains(e.relatedTarget) || C(null);
		},
		onDrop: (e) => {
			e.preventDefault(), C(null);
			let n = k.get(e.dataTransfer.getData($o));
			n && ae(n, t(n));
		}
	}, de = ({ row: e, key: t, shown: n, ...r }, s) => {
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
			className: H(p, "outline-none hover:brightness-95 focus-visible:ring-[1.5px] focus-visible:ring-ring/80", u && "cursor-grab active:cursor-grabbing"),
			...u && {
				draggable: !0,
				"aria-describedby": w,
				onDragStart: (e) => {
					e.dataTransfer.setData($o, t), e.dataTransfer.effectAllowed = "move";
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
					let o = wo(n.to, a);
					E.current = t, (o.getMonth() !== g.getMonth() || o.getFullYear() !== g.getFullYear()) && _(new Date(o.getFullYear(), o.getMonth(), 1)), ae({
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
					ie > 0 && /* @__PURE__ */ a("span", {
						className: "hidden text-xs text-muted-foreground sm:inline",
						children: p.dataTable.undated(ie)
					}),
					/* @__PURE__ */ o("div", {
						className: "flex shrink-0 items-center gap-1",
						children: [
							/* @__PURE__ */ a(La, {
								type: "single",
								variant: "outline",
								size: "sm",
								value: v,
								"aria-label": p.dataTable.calendarScale,
								onValueChange: (e) => e && y(e),
								children: Qo.map((e) => /* @__PURE__ */ a(Ra, {
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
								onClick: () => ce(-1),
								children: /* @__PURE__ */ a(se, {})
							}),
							/* @__PURE__ */ a(q, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": v === "year" ? p.dataTable.nextYear : p.dataTable.nextMonth,
								onClick: () => ce(1),
								children: /* @__PURE__ */ a(le, {})
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
					let r = new Date(g.getFullYear(), n, 1), i = Do(r), s = n === h.getMonth() && g.getFullYear() === h.getFullYear(), c = t.length - Zo, l = (e) => /* @__PURE__ */ a("span", {
						"aria-hidden": !0,
						className: "mr-1.5 inline-block w-4 text-right tabular-nums opacity-70",
						children: e.shown.to.getDate()
					});
					return /* @__PURE__ */ o("li", {
						...ue(i, (e) => {
							let t = new Date(g.getFullYear(), n + 1, 0).getDate();
							return new Date(g.getFullYear(), n, Math.min(e.shown.to.getDate(), t));
						}),
						className: H("flex min-h-36 min-w-0 flex-col gap-1 rounded-lg border p-2", S === i && "bg-accent/60 ring-1 ring-ring/80 ring-inset"),
						children: [
							/* @__PURE__ */ o("div", {
								className: "flex items-center justify-between gap-2 pb-1",
								children: [/* @__PURE__ */ a("button", {
									type: "button",
									onClick: () => {
										_(r), y("month");
									},
									className: H("truncate rounded-sm text-sm font-medium outline-none hover:underline focus-visible:ring-[1.5px] focus-visible:ring-ring/80", s && "text-link"),
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
							t.slice(0, Zo).map((t) => /* @__PURE__ */ a(e.Fragment, { children: de(t, l(t)) }, t.key)),
							c > 0 && /* @__PURE__ */ o(Nr, { children: [/* @__PURE__ */ a(Pr, {
								className: "truncate rounded-sm px-1.5 text-left text-xs whitespace-nowrap text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
								children: p.dataTable.moreItems(c)
							}), /* @__PURE__ */ a(Fr, {
								className: "grid max-h-80 w-64 gap-1 overflow-y-auto p-2",
								children: t.map((t) => /* @__PURE__ */ a(e.Fragment, { children: de(t, l(t)) }, t.key))
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
					let n = O.get(Do(t)) ?? [], r = t.getMonth() !== g.getMonth(), i = Oo(t, h), s = n.length - Xo, c = Do(t);
					return /* @__PURE__ */ o("li", {
						...ue(c, () => t),
						className: H("flex min-h-20 min-w-0 flex-col gap-1 border-r border-b p-1 sm:min-h-24 [&:nth-child(7n)]:border-r-0", r && "bg-muted/40", S === c && "bg-accent/60 ring-1 ring-ring/80 ring-inset"),
						children: [
							/* @__PURE__ */ a("time", {
								dateTime: Do(t),
								"aria-label": p.format.date(t),
								className: H("flex size-6 items-center justify-center self-end rounded-full text-xs tabular-nums", i ? "bg-primary font-medium text-primary-foreground" : r ? "text-muted-foreground" : "text-foreground"),
								children: t.getDate()
							}),
							n.slice(0, Xo).map((t) => /* @__PURE__ */ a(e.Fragment, { children: de(t) }, t.key)),
							s > 0 && /* @__PURE__ */ o(Nr, { children: [/* @__PURE__ */ a(Pr, {
								className: "truncate rounded-sm px-1.5 text-left whitespace-nowrap text-xs text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
								children: p.dataTable.moreItems(s)
							}), /* @__PURE__ */ o(Fr, {
								className: "grid w-56 gap-1 p-2",
								children: [/* @__PURE__ */ a("div", {
									className: "px-1.5 pb-1 text-xs font-medium text-muted-foreground",
									children: p.format.date(t)
								}), n.map((t) => /* @__PURE__ */ a(e.Fragment, { children: de(t) }, t.key))]
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
var ts = (e) => e === "," ? ";" : ",", ns = /^[=+\-@\t\r]/;
function rs(e, t) {
	let n = ns.test(e) ? `'${e}` : e;
	return /["\n\r]/.test(n) || n.includes(t) ? `"${n.replaceAll("\"", "\"\"")}"` : n;
}
function is(e, t) {
	if (e == null) return "";
	if (typeof e == "number") {
		if (!Number.isFinite(e)) return "";
		let n = String(e);
		return t === "," ? n.replace(".", ",") : n;
	}
	return e instanceof Date ? Number.isNaN(e.getTime()) ? "" : e.toISOString() : typeof e == "boolean" ? e ? "true" : "false" : String(e);
}
function as(e, t, n = ".") {
	let r = ts(n), i = (e) => e.map((e) => rs(e, r)).join(r);
	return [i(t.map((e) => e.header)), ...e.map((e) => i(t.map((t) => is(t.value(e), n))))].join("\r\n");
}
function os(e, t) {
	let n = new Blob(["﻿", t], { type: "text/csv;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e.endsWith(".csv") ? e : `${e}.csv`, document.body.appendChild(i), i.click(), i.remove(), setTimeout(() => URL.revokeObjectURL(r), 0);
}
//#endregion
//#region src/blocks/edit/editable-text.tsx
function ss({ value: t, onSave: n, placeholder: r, required: i, inputMode: s, disabled: c, className: l, "aria-label": u }) {
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
					children: y ? /* @__PURE__ */ a(L, { className: "animate-spin" }) : /* @__PURE__ */ a(M, {})
				}),
				/* @__PURE__ */ a(q, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					"aria-label": f.cancel,
					disabled: y,
					onClick: w,
					className: "shrink-0 text-muted-foreground",
					children: /* @__PURE__ */ a(Qe, {})
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
			className: H("min-w-0 truncate", !t && "text-muted-foreground", l),
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
			children: /* @__PURE__ */ a(Pe, { className: "size-3.5" })
		})]
	});
}
//#endregion
//#region src/blocks/data/use-data-table-views.ts
var cs = [
	"table",
	"list",
	"board",
	"star",
	"funnel",
	"clock",
	"users",
	"tag",
	"eye"
], ls = (e) => Yi("views", e);
function us(e, t, n = tn.dataTable.allView) {
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
function ds(e, t, n, r) {
	let i = us(t, n, r), a = {
		views: i,
		activeId: i[0].id
	};
	if (!e || typeof localStorage > "u") return a;
	try {
		let t = localStorage.getItem(ls(e)), n = t ? JSON.parse(t) : null;
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
var fs = 800, ps = (e) => e.shared !== void 0;
function ms(t, n, r, i, a) {
	let o = G().dataTable.allView, [{ views: s, activeId: c }, l] = e.useState(() => {
		let e = ds(r, t, n, o);
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
			let e = s.filter((e) => !ps(e));
			localStorage.setItem(ls(r), JSON.stringify({
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
			let a = new Set(us(t, n).map((e) => e.id)), o = s.filter((e) => !ps(e) && !a.has(e.id)), c = [];
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
					...e.views.filter((e) => ps(e) || !u.has(e.name)),
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
		}, fs)));
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
			return r && ps(r) && g(r.id, t(e(r))), {
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
				icon: cs[n.views.length % cs.length],
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
			t && ps(t) && p.current?.remove(t.id).catch(() => {});
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
var hs = {
	table: We,
	list: I,
	board: Ve,
	star: He,
	funnel: Ce,
	clock: he,
	users: qe,
	tag: Ge,
	eye: xe,
	calendar: ie,
	timeline: fe
};
function gs({ name: e, className: t }) {
	let n = hs[e] ?? We;
	return /* @__PURE__ */ a(n, { className: t });
}
function _s({ trigger: t, className: n, align: r = "start", width: i = "w-64", children: s }) {
	let [c, l] = e.useState(!1), u = e.useCallback(() => l(!1), []);
	return /* @__PURE__ */ o(Nr, {
		open: c,
		onOpenChange: l,
		children: [/* @__PURE__ */ a(Pr, {
			className: n,
			children: t
		}), /* @__PURE__ */ a(Fr, {
			align: r,
			className: H("p-1.5", i),
			children: typeof s == "function" ? s(u) : s
		})]
	});
}
function vs({ icon: e, label: t, active: n, width: r, children: i }) {
	return /* @__PURE__ */ a(_s, {
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
var ys = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm outline-none hover:bg-accent focus-visible:bg-accent";
function bs({ columns: t, onPick: n, empty: r }) {
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
			className: H(ys, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Ie, { className: "size-3.5" }),
				" ",
				r.label
			]
		}),
		d.length === 0 && /* @__PURE__ */ a("p", {
			className: "px-2 py-1.5 text-sm text-muted-foreground",
			children: c.noResults
		}),
		d.map((e) => {
			let t = e.icon ?? We;
			return /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => n(e.key),
				className: ys,
				children: [
					/* @__PURE__ */ a(t, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					" ",
					e.header
				]
			}, e.key);
		})
	] });
}
function xs({ col: t, options: n, value: r, onChange: s, onRemove: c }) {
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
			children: /* @__PURE__ */ a(Ke, { className: "size-3.5" })
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
			children: [/* @__PURE__ */ a(zn, {
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
function Ss({ sorting: e, sortable: t, byKey: n, onChange: r }) {
	let s = G().dataTable, c = t.filter((t) => !e.some((e) => e.id === t.key));
	return /* @__PURE__ */ o(i, { children: [
		e.map((t, i) => /* @__PURE__ */ o("div", {
			className: "mb-1 flex items-center gap-1",
			children: [
				/* @__PURE__ */ o(Jr, {
					value: t.id,
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						id: t
					} : e)),
					children: [/* @__PURE__ */ a(Zr, {
						className: "h-8 min-w-0 flex-1 text-sm",
						children: /* @__PURE__ */ a(Xr, {})
					}), /* @__PURE__ */ a(Qr, { children: [n[t.id], ...c].filter(Boolean).map((e) => /* @__PURE__ */ a(ei, {
						value: e.key,
						children: e.header
					}, e.key)) })]
				}),
				/* @__PURE__ */ o(Jr, {
					value: t.desc ? "desc" : "asc",
					onValueChange: (t) => r(e.map((e, n) => n === i ? {
						...e,
						desc: t === "desc"
					} : e)),
					children: [/* @__PURE__ */ a(Zr, {
						className: "h-8 w-28 shrink-0 text-sm",
						children: /* @__PURE__ */ a(Xr, {})
					}), /* @__PURE__ */ o(Qr, { children: [/* @__PURE__ */ a(ei, {
						value: "asc",
						children: s.ascending
					}), /* @__PURE__ */ a(ei, {
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
					children: /* @__PURE__ */ a(Qe, { className: "size-3.5" })
				})
			]
		}, t.id)),
		c.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([...e, {
				id: c[0].key,
				desc: !1
			}]),
			className: H(ys, "text-muted-foreground"),
			children: [
				/* @__PURE__ */ a(Fe, { className: "size-3.5" }),
				" ",
				s.addSort
			]
		}),
		e.length > 0 && /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => r([]),
			className: H(ys, "text-danger-fg hover:bg-danger-subtle"),
			children: [
				/* @__PURE__ */ a(Ke, { className: "size-3.5" }),
				" ",
				s.removeSorting
			]
		})
	] });
}
function Cs({ columns: e, visibility: t, onToggle: n }) {
	return /* @__PURE__ */ a(i, { children: e.filter(Ko).map((e) => {
		let r = t[e.key] !== !1, i = e.icon;
		return /* @__PURE__ */ o("label", {
			className: "flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-accent",
			children: [
				/* @__PURE__ */ a(zn, {
					checked: r,
					onCheckedChange: (t) => n(e.key, t === !0)
				}),
				i && /* @__PURE__ */ a(i, { className: "size-3.5 text-muted-foreground" }),
				e.header
			]
		}, e.key);
	}) });
}
function ws({ trigger: e, className: t, title: n, align: r = "start", defaultValue: i, confirmLabel: o, onSubmit: s, shareLabel: c }) {
	return /* @__PURE__ */ a(_s, {
		align: r,
		width: "w-64",
		className: t,
		trigger: /* @__PURE__ */ a("span", {
			title: n,
			children: e
		}),
		children: (e) => /* @__PURE__ */ a(Ts, {
			defaultValue: i,
			confirmLabel: o,
			shareLabel: c,
			onSubmit: s,
			close: e
		})
	});
}
function Ts({ defaultValue: t, confirmLabel: n, shareLabel: r, onSubmit: i, close: s }) {
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
function Es({ name: t, icon: n, onIcon: r, onRename: s, rows: c, footer: l, onClose: u }) {
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
			children: /* @__PURE__ */ a(se, { className: "size-3.5" })
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
				children: /* @__PURE__ */ a(Qe, { className: "size-3.5" })
			})]
		}),
		/* @__PURE__ */ o("div", {
			className: "mb-2 flex items-center gap-2",
			children: [/* @__PURE__ */ a("button", {
				type: "button",
				title: d.changeIcon,
				onClick: () => g((e) => !e),
				className: H("shrink-0 rounded-md border p-2 hover:bg-accent", h ? "bg-accent text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(gs, {
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
			children: cs.map((e) => /* @__PURE__ */ a("button", {
				type: "button",
				onClick: () => {
					r(e), g(!1);
				},
				className: H("rounded-md p-1.5 hover:bg-card", e === n ? "bg-card text-link" : "text-muted-foreground"),
				children: /* @__PURE__ */ a(gs, {
					name: e,
					className: "size-4"
				})
			}, e))
		}),
		c.map((e) => /* @__PURE__ */ o("button", {
			type: "button",
			onClick: () => m(e.key),
			className: ys,
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
				/* @__PURE__ */ a(le, { className: "size-3.5 shrink-0 text-muted-foreground" })
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
var Ds = "application/x-ziku-card", Os = {
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
function ks({ columns: t, renderCard: n, itemKey: r, onDrop: i, canDrag: s, maxHeight: c, loading: l, error: u, onRetry: d, className: f }) {
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
			let n = t.dataTransfer.getData(Ds), a = v.find((e) => r(e) === n);
			a && i(a, e);
		}
	});
	return u && !l ? /* @__PURE__ */ a(_o, {
		variant: "alert",
		title: go(u),
		onRetry: d,
		className: f
	}) : /* @__PURE__ */ a("div", {
		className: H("flex items-start gap-4 overflow-x-auto pb-4", f),
		"aria-busy": l || void 0,
		children: t.map((e) => e.tile ? /* @__PURE__ */ a(js, {
			col: e,
			state: b(e.key),
			drop: x(e.key),
			loading: l
		}, e.key) : /* @__PURE__ */ o("div", {
			...x(e.key),
			style: { maxHeight: c },
			className: H("flex w-64 shrink-0 flex-col rounded-md border-2 p-2 transition-colors", {
				idle: "border-border bg-muted/50",
				ready: "border-ring/50 bg-muted/50",
				over: "border-ring bg-accent"
			}[b(e.key)]),
			children: [/* @__PURE__ */ o("div", {
				className: "flex items-baseline justify-between px-2 py-1.5",
				children: [/* @__PURE__ */ a("span", {
					className: vo,
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
					children: [/* @__PURE__ */ a(Y, { className: "h-16 w-full" }), /* @__PURE__ */ a(Y, { className: "h-16 w-full" })]
				}), !l && e.items.map((c) => {
					let l = r(c), u = !!i && (!s || s(c));
					return /* @__PURE__ */ o("div", {
						draggable: u,
						onDragStart: (e) => {
							if (!u) return;
							h(l), e.dataTransfer.setData(Ds, l), e.dataTransfer.effectAllowed = "move";
							let t = e.currentTarget.getBoundingClientRect();
							e.dataTransfer.setDragImage(e.currentTarget, e.clientX - t.left, e.clientY - t.top);
						},
						onDragEnd: () => {
							h(null), _(null);
						},
						className: H("group/card relative transition-opacity", u ? "cursor-grab active:cursor-grabbing" : "cursor-default", y && "select-none", m === l && "opacity-30"),
						children: [n(c), u && /* @__PURE__ */ a(As, {
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
function As({ columns: e, from: t, onPick: n }) {
	let r = G().dataTable, i = e.filter((e) => e.key !== t);
	return i.length === 0 ? null : /* @__PURE__ */ o(Xn, { children: [/* @__PURE__ */ a(Qn, {
		"aria-label": r.moveCard,
		title: r.moveCard,
		className: H("absolute top-1 right-1 rounded-sm p-1 text-muted-foreground opacity-0 transition-opacity", "hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2", "group-hover/card:opacity-100 data-[state=open]:opacity-100 pointer-coarse:opacity-100"),
		draggable: !1,
		onDragStart: (e) => e.preventDefault(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(O, { className: "size-3.5" })
	}), /* @__PURE__ */ a($n, {
		align: "end",
		children: i.map((e) => /* @__PURE__ */ a(tr, {
			onSelect: () => n(e.key),
			children: e.title
		}, e.key))
	})] });
}
function js({ col: e, state: t, drop: n, loading: r }) {
	let i = e.tile, s = Os[i.tone];
	return /* @__PURE__ */ o("div", {
		...n,
		className: H("flex h-36 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-md border-2 p-3 text-center transition-colors", t === "over" ? H("border-solid", s.over) : H("border-dashed", s.idle)),
		children: [
			/* @__PURE__ */ a(i.icon, {
				"aria-hidden": !0,
				className: "size-6"
			}),
			/* @__PURE__ */ a("span", {
				className: H(vo, "text-current"),
				children: e.title
			}),
			r ? /* @__PURE__ */ a(Y, { className: "h-5 w-6" }) : /* @__PURE__ */ a("span", {
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
var Ms = (e) => !!e.header && e.addable !== !1;
function Ns({ columns: t, onSave: n, onClose: r }) {
	let s = G(), c = s.dataTable, [l, u] = e.useState(() => Object.fromEntries(t.filter(Ms).map((e) => [e.key, ""]))), [d, f] = e.useState(!1), [p, m] = e.useState(!1), h = e.useId();
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
	}, y = t.findIndex(Ms);
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(X, {
		"data-slot": "new-row",
		className: "bg-accent/40 hover:bg-accent/40",
		onKeyDown: _,
		children: t.map((e, n) => {
			let i = n === t.length - 1, u = Ms(e) ? e.order ? /* @__PURE__ */ o(Jr, {
				value: l[e.key] || void 0,
				onValueChange: v(e.key),
				disabled: d,
				children: [/* @__PURE__ */ a(Zr, {
					size: "sm",
					"aria-label": e.header,
					autoFocus: n === y,
					className: "w-full min-w-28",
					children: /* @__PURE__ */ a(Xr, {})
				}), /* @__PURE__ */ a(Qr, { children: e.order.map((t) => /* @__PURE__ */ a(ei, {
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
			return /* @__PURE__ */ a(Ea, {
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
							children: d ? /* @__PURE__ */ a(L, { className: "animate-spin" }) : /* @__PURE__ */ a(M, {})
						}), /* @__PURE__ */ a(q, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": s.common.cancel,
							disabled: d,
							onClick: r,
							className: "text-muted-foreground",
							children: /* @__PURE__ */ a(Qe, {})
						})]
					})]
				})
			}, e.key);
		})
	}), p && /* @__PURE__ */ a(X, {
		className: "hover:bg-transparent",
		children: /* @__PURE__ */ a(Ea, {
			id: h,
			role: "alert",
			colSpan: t.length,
			className: "py-1.5 text-xs text-danger-fg",
			children: c.addRowFailed
		})
	})] });
}
function Ps({ columns: t, onAdd: n }) {
	let r = G().dataTable, [i, s] = e.useState(!1), c = e.useRef(null);
	return i ? /* @__PURE__ */ a(Ns, {
		columns: t,
		onSave: n,
		onClose: () => {
			s(!1), requestAnimationFrame(() => c.current?.focus());
		}
	}) : /* @__PURE__ */ a(X, {
		className: "hover:bg-transparent",
		children: /* @__PURE__ */ a(Ea, {
			colSpan: t.length,
			className: "py-1",
			children: /* @__PURE__ */ o(q, {
				ref: c,
				type: "button",
				variant: "ghost",
				size: "sm",
				onClick: () => s(!0),
				className: "text-muted-foreground",
				children: [/* @__PURE__ */ a(Fe, {}), r.addRow]
			})
		})
	});
}
//#endregion
//#region src/blocks/data/data-table.tsx
var Fs = Et({
	rowSortingFeature: Tt,
	sortedRowModel: St(),
	columnFilteringFeature: pt,
	filteredRowModel: yt(),
	globalFilteringFeature: Ct,
	columnFacetingFeature: ft,
	facetedRowModel: _t(),
	facetedUniqueValues: vt(),
	columnGroupingFeature: mt,
	groupedRowModel: bt(),
	rowExpandingFeature: wt,
	expandedRowModel: gt(),
	columnVisibilityFeature: ht,
	rowPaginationFeature: V,
	paginatedRowModel: xt()
});
function Is({ columns: t, data: n, loading: r, error: s, onRetry: c, empty: l, rowId: u, search: d = !0, searchPlaceholder: f, toolbar: p, onRowClick: m, pageSize: h = 0, defaultSort: g, defaultHidden: _, defaultFilters: v, defaultGroup: y = "", defaultMode: b = "table", renderCard: x, boardSubtitle: S, dates: C, presets: w = [], viewKey: T, onStateChange: E, view: ee, viewsBackend: te, paged: O, csv: k, onAddRow: oe, className: se }) {
	let ce = G(), A = ce.dataTable, ue = ce.common, de = e.useMemo(() => n ?? [], [n]), j = !!O, M = e.useMemo(() => Object.fromEntries(t.map((e) => [e.key, e])), [t]), pe = e.useMemo(() => ({
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
	]), me = e.useCallback((e) => ({
		...e,
		sorting: (e.sorting ?? []).filter((e) => M[e.id]),
		columnFilters: (e.columnFilters ?? []).filter((e) => M[e.id]).map((e) => M[e.id]?.facet && !Array.isArray(e.value) ? {
			...e,
			value: Ho(e.value) ? [] : [Q(e.value)]
		} : e).map((e) => {
			let t = M[e.id]?.order;
			return t && Array.isArray(e.value) ? {
				...e,
				value: e.value.filter((e) => t.includes(Q(e)))
			} : e;
		}),
		grouping: (e.grouping ?? []).filter((e) => M[e])
	}), [M]), N = ms(pe, w, T, te, ee), { views: he, active: ge, isPreset: _e, patch: P } = N, F = e.useMemo(() => me(ge.state), [ge.state, me]);
	e.useEffect(() => {
		E?.(F, ge.id);
	}, [
		F,
		ge.id,
		E
	]);
	let be = (e) => (t) => P({ [e]: typeof t == "function" ? t(F[e]) : t }), Se = e.useMemo(() => {
		let e = t.find(Ko), n = (t) => e ? qo(e, Q(e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key])) : "";
		return t.map((e) => {
			if (e.onEdit && (e.render || e.facetKey)) throw Error("DataTable: column " + JSON.stringify(e.key) + " has onEdit with " + (e.render ? "render" : "facetKey") + "; an editable column shows and saves its value(row) text, so drop one of them");
			return {
				id: e.key,
				header: e.header,
				accessorFn: (t) => {
					let n = e.facetKey ? e.facetKey(t) : e.value ? e.value(t) : t[e.key];
					return n == null || n === "" ? void 0 : n;
				},
				cell: (t) => e.onEdit ? /* @__PURE__ */ a(Xs, {
					column: e,
					row: t.row.original,
					value: Q(t.getValue()),
					rowName: n(t.row.original)
				}) : e.render ? e.render(t.row.original) : qo(e, Q(t.getValue())) || "—",
				enableSorting: e.sortable !== !1 && (!j || !!e.sortKey),
				enableGlobalFilter: e.sortable !== !1,
				enableGrouping: !!e.facet,
				enableHiding: Ko(e),
				sortUndefined: "last",
				sortFn: (t, n, r) => e.order ? Go(e)(Q(t.getValue(r)), Q(n.getValue(r))) : Vo(t.getValue(r), n.getValue(r)),
				filterFn: (e, t, n) => {
					if (Ho(n)) return !0;
					let r = Q(e.getValue(t));
					return Array.isArray(n) ? n.includes(r) : r.toLowerCase().includes(String(n).toLowerCase());
				}
			};
		});
	}, [t, j]), [Te, Ee] = e.useState(!0), [De, Oe] = e.useState(0), I = F.grouping[0] ?? "", ke = t.filter((e) => e.facet), je = !!(x && ke.length && u), Me = F.mode === "board" && je, Ne = !!(C && u), Pe = F.mode === "timeline" && Ne, Ie = F.mode === "calendar" && Ne, Re = [
		[
			"table",
			Le,
			A.table
		],
		...je ? [[
			"board",
			Ve,
			A.board
		]] : [],
		...Ne ? [[
			"timeline",
			fe,
			A.timeline
		], [
			"calendar",
			ie,
			A.calendar
		]] : []
	], ze = Re.some(([e]) => e === F.mode) ? F.mode : "table", L = h > 0 && !I && ze === "table" && !j, He = e.useMemo(() => F.columnFilters.filter((e) => !Ho(e.value) && !M[e.id]?.filterKey), [F.columnFilters, M]), Ue = j && (He.length > 0 || F.grouping.length > 0 || Me || Pe || Ie), Ge = e.useMemo(() => I && !F.sorting.some((e) => e.id === I) ? [{
		id: I,
		desc: !1
	}, ...F.sorting] : F.sorting, [I, F.sorting]), R = Dt({
		features: Fs,
		data: de,
		columns: Se,
		state: {
			sorting: Ge,
			columnFilters: j ? He : F.columnFilters,
			globalFilter: j ? "" : F.globalFilter,
			columnVisibility: F.columnVisibility,
			grouping: F.grouping,
			expanded: Te,
			pagination: {
				pageIndex: L ? De : 0,
				pageSize: L ? h : 2 ** 53 - 1
			}
		},
		onSortingChange: be("sorting"),
		onColumnFiltersChange: be("columnFilters"),
		onGlobalFilterChange: be("globalFilter"),
		onColumnVisibilityChange: be("columnVisibility"),
		onGroupingChange: be("grouping"),
		groupedColumnMode: "remove",
		onExpandedChange: Ee,
		onPaginationChange: (e) => {
			let t = typeof e == "function" ? e({
				pageIndex: De,
				pageSize: L ? h : 2 ** 53 - 1
			}) : e;
			Oe(t.pageIndex);
		},
		manualSorting: j && !I,
		globalFilterFn: (e, t, n) => {
			let r = String(n).toLowerCase();
			return !r || e.getAllCells().some((e) => Q(e.getValue()).toLowerCase().includes(r));
		},
		autoResetExpanded: !1
	}), Je = R.getFilteredRowModel().rows;
	function Ye() {
		if (!k) return;
		let e = k.decimal ?? ".", t = R.getVisibleLeafColumns().map((e) => M[e.id]).filter((e) => !!e?.header).map((e) => ({
			header: e.header,
			value: (t) => e.value ? e.value(t.original) : t.getValue(e.key)
		})), n = R.getSortedRowModel().rows.filter((e) => !e.getIsGrouped());
		os(k.filename, as(n, t, e));
	}
	e.useEffect(() => {
		Oe(0);
	}, [
		F.columnFilters,
		F.globalFilter,
		F.grouping
	]);
	let Xe = Ys(F.globalFilter, Js), Ze = JSON.stringify(Yo(t, {
		...F,
		globalFilter: Xe
	})), $e = e.useRef(O?.setQuery);
	e.useEffect(() => {
		$e.current = O?.setQuery;
	}), e.useEffect(() => {
		$e.current?.(JSON.parse(Ze));
	}, [Ze]);
	let et = e.useRef(null), [tt, nt] = e.useState(!1), rt = e.useRef(null), it = () => {
		nt(!1), requestAnimationFrame(() => rt.current?.focus());
	}, at = t.find((e) => e.header), ot = C && u && (Pe || Ie) ? {
		items: R.getSortedRowModel().rows.filter((e) => !e.getIsGrouped()).map((e) => e.original),
		itemKey: u,
		start: C.start,
		end: C.end,
		label: C.label ?? ((e) => at ? Q(at.value ? at.value(e) : e[at.key]) : ""),
		onItemClick: m,
		onReschedule: C.onReschedule
	} : null, st = oe && ze === "table" && /* @__PURE__ */ o(q, {
		ref: rt,
		type: "button",
		variant: "ghost",
		size: "sm",
		onClick: () => nt(!0),
		className: "text-muted-foreground",
		children: [/* @__PURE__ */ a(Fe, {}), A.addRow]
	}), ct = O?.more, lt = O?.hasMore ?? !1, ut = O?.loadingMore ?? !1;
	e.useEffect(() => {
		let e = et.current;
		if (!e || !ct || !lt || ut) return;
		let t = new IntersectionObserver(([e]) => {
			e.isIntersecting && ct();
		}, { rootMargin: "200px" });
		return t.observe(e), () => t.disconnect();
	}, [
		ct,
		lt,
		ut
	]), e.useEffect(() => {
		Ue && lt && !ut && ct?.();
	}, [
		Ue,
		lt,
		ut,
		ct
	]);
	let z = F.columnFilters, B = Object.values(F.columnVisibility).filter((e) => e === !1).length, dt = z.length > 0 || !!F.globalFilter || F.grouping.length > 0 || F.sorting.length > 0 || B > 0, ft = dt && (de.length > 0 || j), pt = t.filter((e) => Ko(e) && e.sortable !== !1 && !z.some((t) => t.id === e.key)), mt = t.filter((e) => Ko(e) && e.sortable !== !1 && (!j || !!e.sortKey)), ht = (e) => P({ columnFilters: [...z, {
		id: e,
		value: M[e]?.facet ? [] : ""
	}] }), gt = (e) => P({ columnFilters: z.filter((t) => t.id !== e) }), _t = (e, t) => P({ columnFilters: z.map((n) => n.id === e ? {
		...n,
		value: t
	} : n) });
	function vt(e) {
		if (!e.facet) return [];
		let t = j && !!e.filterKey;
		return t && e.order ? e.order.map((t) => ({
			value: t,
			label: qo(e, t)
		})) : [...R.getColumn(e.key)?.getFacetedUniqueValues()?.entries() ?? []].filter(([e]) => e != null && e !== "").sort((t, n) => Go(e)(Q(t[0]), Q(n[0]))).map(([n, r]) => ({
			value: Q(n),
			label: t ? qo(e, Q(n)) : `${qo(e, Q(n))} (${r})`
		}));
	}
	let yt = (e) => P({
		mode: e,
		grouping: e === "board" && !I ? [ke[0].key] : F.grouping
	}), bt = /* @__PURE__ */ a(Cs, {
		columns: t,
		visibility: F.columnVisibility,
		onToggle: (e, t) => P({ columnVisibility: {
			...F.columnVisibility,
			[e]: t
		} })
	}), xt = /* @__PURE__ */ a(Ss, {
		sorting: F.sorting,
		sortable: mt,
		byKey: M,
		onChange: (e) => P({ sorting: e })
	}), St = (e) => /* @__PURE__ */ a(bs, {
		columns: ke,
		empty: {
			label: A.noGrouping,
			onPick: () => {
				P({ grouping: [] }), e?.();
			}
		},
		onPick: (t) => {
			P({ grouping: [t] }), e?.();
		}
	}), Ct = /* @__PURE__ */ o(i, { children: [
		z.map((e) => {
			let t = M[e.id];
			if (!t) return null;
			let n = t.icon ?? Ce;
			return /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
				children: [
					/* @__PURE__ */ a(n, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ a("span", {
						className: "flex-1 truncate",
						children: Jo(t, e.value)
					}),
					/* @__PURE__ */ a("button", {
						type: "button",
						onClick: () => gt(e.id),
						"aria-label": A.removeFilterFor(t.header),
						className: H(K({
							variant: "ghost",
							size: "icon-xs"
						}), "shrink-0 text-muted-foreground hover:text-danger-fg"),
						children: /* @__PURE__ */ a(Qe, { className: "size-3.5" })
					})
				]
			}, e.id);
		}),
		z.length > 0 && /* @__PURE__ */ a("div", { className: "my-1 border-t" }),
		/* @__PURE__ */ a(bs, {
			columns: pt,
			onPick: ht
		})
	] }), wt = [
		...Re.length > 1 ? [{
			key: "layout",
			icon: We,
			label: A.layout,
			value: Re.find(([e]) => e === ze)?.[2],
			panel: /* @__PURE__ */ a(i, { children: Re.map(([e, t, n]) => /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => yt(e),
				className: H("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent", ze === e && "font-medium"),
				children: [
					/* @__PURE__ */ a(t, { className: "size-4 text-muted-foreground" }),
					" ",
					n
				]
			}, e)) })
		}] : [],
		{
			key: "columns",
			icon: xe,
			label: A.visibleColumns,
			value: B ? A.hidden(B) : A.allView,
			panel: bt
		},
		{
			key: "filter",
			icon: we,
			label: A.filters,
			value: z.length ? String(z.length) : void 0,
			panel: Ct
		},
		{
			key: "sort",
			icon: Be,
			label: A.sorting,
			value: F.sorting.length ? F.sorting.length === 1 ? M[F.sorting[0].id]?.header : String(F.sorting.length) : void 0,
			panel: xt
		},
		...ke.length ? [{
			key: "group",
			icon: Le,
			label: A.groupBy,
			value: I ? M[I]?.header : ue.none,
			panel: St()
		}] : []
	], V = I ? M[I] : null, Tt = (e) => e && e !== "—" ? qo(V ?? void 0, e) : "—", Et = e.useMemo(() => {
		if (!Me || !V) return [];
		let e = /* @__PURE__ */ new Map();
		for (let t of Je) {
			let n = Q(t.getValue(I)) || "—";
			e.set(n, [...e.get(n) ?? [], t.original]);
		}
		return [.../* @__PURE__ */ new Set([...V.order ?? [], ...e.keys()])].sort(Go(V)).map((t) => {
			let n = e.get(t) ?? [];
			return {
				key: t,
				title: Tt(t),
				items: n,
				subtitle: S?.(n),
				tile: V.boardTile?.(t)
			};
		});
	}, [
		Me,
		V,
		Je,
		I,
		S
	]), kt = R.getVisibleLeafColumns().length, At = R.getRowModel().rows, U = At.length > Ls, jt = e.useRef(null), Mt = Ot({
		count: At.length,
		enabled: U,
		getScrollElement: () => jt.current,
		estimateSize: () => Rs,
		overscan: zs,
		initialRect: {
			width: 0,
			height: Bs
		},
		measureElement: (e) => e.getBoundingClientRect().height || Rs,
		observeElementRect: (e, t) => {
			let n = e.scrollElement;
			if (!n) return;
			let r = () => {
				let e = n.getBoundingClientRect();
				t({
					width: e.width,
					height: e.height || Bs
				});
			};
			r();
			let i = new ResizeObserver(r);
			return i.observe(n), () => i.disconnect();
		}
	}), Nt = Mt.getVirtualItems(), Pt = U ? Nt.map((e) => ({
		row: At[e.index],
		index: e.index
	})) : At.map((e, t) => ({
		row: e,
		index: t
	})), Ft = U && Nt.length > 0 ? Nt[0].start : 0, It = U && Nt.length > 0 ? Mt.getTotalSize() - Nt[Nt.length - 1].end : 0;
	return /* @__PURE__ */ o("div", {
		className: H("overflow-hidden rounded-md border bg-card", se),
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex items-center gap-1 border-b px-2 pt-1.5",
				children: [/* @__PURE__ */ o("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: [he.map((e) => /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => N.select(e.id),
						className: H("-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors", e.id === ge.id ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"),
						children: [
							/* @__PURE__ */ a(gs, {
								name: e.icon,
								className: "size-4"
							}),
							e.name,
							e.shared && e.ownerName && !e.canDelete && /* @__PURE__ */ a("span", {
								title: A.sharedBy(e.ownerName),
								"aria-label": A.sharedBy(e.ownerName),
								children: /* @__PURE__ */ a(qe, { className: "size-3.5 opacity-70" })
							})
						]
					}, e.id)), /* @__PURE__ */ a(ws, {
						align: "start",
						title: A.saveView,
						className: H(K({
							variant: "ghost",
							size: "icon-sm"
						}), "shrink-0 text-muted-foreground"),
						trigger: /* @__PURE__ */ a(Fe, { className: "size-4" }),
						defaultValue: A.newView,
						confirmLabel: A.createView,
						onSubmit: N.add,
						shareLabel: N.sharable ? A.shareView : void 0
					})]
				}), /* @__PURE__ */ o("div", {
					className: "-mb-px flex shrink-0 items-center gap-1 pb-1.5",
					children: [
						p,
						d && /* @__PURE__ */ a(vs, {
							icon: Ae,
							label: ue.search,
							active: !!F.globalFilter,
							width: "w-72",
							children: /* @__PURE__ */ a(J, {
								className: "h-8",
								placeholder: f ?? ue.searchPlaceholder,
								autoFocus: !0,
								value: F.globalFilter,
								onChange: (e) => P({ globalFilter: e.target.value })
							})
						}),
						/* @__PURE__ */ a(vs, {
							icon: we,
							label: A.filter,
							active: z.length > 0,
							children: (e) => /* @__PURE__ */ a(bs, {
								columns: pt,
								onPick: (t) => {
									ht(t), e();
								}
							})
						}),
						/* @__PURE__ */ a(vs, {
							icon: Be,
							label: A.sort,
							active: F.sorting.length > 0,
							width: "w-88",
							children: xt
						}),
						ke.length > 0 && /* @__PURE__ */ a(vs, {
							icon: Le,
							label: A.group,
							active: !!I,
							children: (e) => St(e)
						}),
						/* @__PURE__ */ a(vs, {
							icon: xe,
							label: A.visibleColumns,
							active: B > 0,
							width: "w-52",
							children: bt
						}),
						Re.length > 1 && /* @__PURE__ */ a("div", {
							className: "ml-1 flex overflow-hidden rounded-md border",
							children: Re.map(([e, t, n]) => /* @__PURE__ */ a("button", {
								type: "button",
								title: n,
								"aria-label": n,
								"aria-pressed": ze === e,
								onClick: () => yt(e),
								className: H("px-2 py-1 outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80", ze === e ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"),
								children: /* @__PURE__ */ a(t, { className: "size-4" })
							}, e))
						}),
						/* @__PURE__ */ a(_s, {
							align: "end",
							width: "w-72",
							className: H(K({
								variant: "ghost",
								size: "icon-sm"
							}), "ml-1 text-muted-foreground"),
							trigger: /* @__PURE__ */ a("span", {
								"aria-label": A.viewSettings,
								children: /* @__PURE__ */ a(ve, { className: "size-4" })
							}),
							children: (e) => /* @__PURE__ */ a(Es, {
								name: ge.name,
								icon: ge.icon,
								onIcon: N.setIcon,
								onRename: N.rename,
								onClose: e,
								rows: wt,
								footer: /* @__PURE__ */ o(i, { children: [k && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										Ye(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent",
									children: [/* @__PURE__ */ a(ye, { className: "size-4 text-muted-foreground" }), A.exportCsv]
								}), !_e && ge.canDelete !== !1 && /* @__PURE__ */ o("button", {
									type: "button",
									onClick: () => {
										N.remove(), e();
									},
									className: "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-danger-fg hover:bg-danger-subtle",
									children: [
										/* @__PURE__ */ a(Ke, { className: "size-4" }),
										" ",
										A.deleteView
									]
								})] })
							})
						})
					]
				})]
			}),
			(z.length > 0 || F.sorting.length > 0 || I) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center gap-2 border-b px-4 py-2",
				children: [
					F.sorting.length > 0 && /* @__PURE__ */ a(_s, {
						width: "w-88",
						className: Us,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Be, { className: "size-3.5" }),
								F.sorting.length === 1 ? `${M[F.sorting[0].id]?.header ?? F.sorting[0].id} ${F.sorting[0].desc ? "↓" : "↑"}` : A.sortCount(F.sorting.length),
								/* @__PURE__ */ a(ae, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: xt
					}),
					I && /* @__PURE__ */ a(_s, {
						className: Us,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Le, { className: "size-3.5" }),
								A.groupedBy(M[I]?.header.toLowerCase() ?? ""),
								/* @__PURE__ */ a(ae, { className: "size-3.5 text-muted-foreground" })
							]
						}),
						children: (e) => St(e)
					}),
					z.map((e) => {
						let t = M[e.id];
						if (!t) return null;
						let n = t.icon ?? Ce;
						return /* @__PURE__ */ a(_s, {
							className: Ho(e.value) ? Ws : Us,
							trigger: /* @__PURE__ */ o("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ a(n, { className: "size-3.5" }),
									/* @__PURE__ */ a("span", {
										className: "max-w-56 truncate",
										children: Jo(t, e.value)
									}),
									/* @__PURE__ */ a(ae, { className: "size-3.5 text-muted-foreground" })
								]
							}),
							children: (n) => /* @__PURE__ */ a(xs, {
								col: t,
								options: vt(t),
								value: e.value ?? (t.facet ? [] : ""),
								onChange: (t) => _t(e.id, t),
								onRemove: () => {
									gt(e.id), n();
								}
							})
						}, e.id);
					}),
					/* @__PURE__ */ a(_s, {
						className: Gs,
						trigger: /* @__PURE__ */ o("span", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ a(Fe, { className: "size-3.5" }),
								" ",
								A.addFilter
							]
						}),
						children: (e) => /* @__PURE__ */ a(bs, {
							columns: pt,
							onPick: (t) => {
								ht(t), e();
							}
						})
					}),
					dt && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: N.reset,
						className: H(Gs, "ml-auto"),
						children: [
							/* @__PURE__ */ a(Qe, { className: "size-3.5" }),
							" ",
							A.clearFilters
						]
					})
				]
			}),
			r && (!Me || Et.length === 0) ? /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				role: "status",
				"aria-live": "polite",
				"aria-busy": "true",
				children: /* @__PURE__ */ o(xa, {
					className: qs,
					children: [/* @__PURE__ */ a(Sa, { children: /* @__PURE__ */ a(X, {
						className: "hover:bg-transparent",
						children: R.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Ta, {
							className: H(Ks, M[e.id]?.className),
							children: M[e.id]?.header
						}, e.id))
					}) }), /* @__PURE__ */ a(Ca, { children: Array.from({ length: 5 }).map((e, t) => /* @__PURE__ */ a(X, {
						className: "hover:bg-transparent",
						children: R.getVisibleLeafColumns().map((e) => /* @__PURE__ */ a(Ea, {
							className: M[e.id]?.className,
							children: /* @__PURE__ */ a(Y, { className: "h-4 w-full" })
						}, e.id))
					}, t)) })]
				})
			}) : r ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(ks, {
					columns: Et,
					itemKey: u,
					renderCard: x,
					loading: !0
				})
			}) : s ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(_o, {
					variant: "alert",
					title: go(s),
					onRetry: c
				})
			}) : Je.length === 0 && !tt ? /* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				className: "p-12 text-center text-sm text-muted-foreground",
				children: ft ? /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("span", { children: A.noMatches }), /* @__PURE__ */ o(q, {
						variant: "outline",
						size: "sm",
						onClick: N.reset,
						children: [/* @__PURE__ */ a(Qe, { className: "size-3.5" }), A.clearAllFilters]
					})]
				}) : /* @__PURE__ */ o("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ a("div", { children: l ?? ue.noResults }), st]
				})
			}) : ot && Pe ? /* @__PURE__ */ a(zo, { ...ot }) : ot && Ie ? /* @__PURE__ */ a(es, {
				...ot,
				defaultScale: C?.calendarScale
			}) : Me ? /* @__PURE__ */ a("div", {
				className: "p-3",
				children: /* @__PURE__ */ a(ks, {
					columns: Et,
					itemKey: u,
					renderCard: x,
					onDrop: V?.onSet ? (e, t) => V.onSet(e, t) : void 0,
					canDrag: (e) => !!V?.onSet && (V?.canSet?.(e) ?? !0)
				})
			}) : /* @__PURE__ */ a("div", {
				className: "overflow-auto",
				children: /* @__PURE__ */ o(xa, {
					className: qs,
					containerRef: jt,
					containerClassName: H(U && `${Vs} overflow-y-auto`),
					"aria-rowcount": At.length + 1,
					children: [/* @__PURE__ */ a(Sa, { children: R.getHeaderGroups().map((e) => /* @__PURE__ */ a(X, {
						"aria-rowindex": 1,
						className: "hover:bg-transparent",
						children: e.headers.map((e) => {
							let t = M[e.column.id], n = e.column.getIsSorted(), r = t?.icon, s = n === "asc" ? ne : n === "desc" ? D : re, c = /* @__PURE__ */ o(i, { children: [r && /* @__PURE__ */ a(r, { className: "size-3.5 opacity-70" }), /* @__PURE__ */ a(R.FlexRender, { header: e })] });
							return /* @__PURE__ */ a(Ta, {
								"aria-sort": n === "asc" ? "ascending" : n === "desc" ? "descending" : e.column.getCanSort() ? "none" : void 0,
								className: H(Ks, n && "text-foreground", U && "sticky top-0 z-10 bg-card", t?.className),
								children: e.column.getCanSort() ? /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.column.getToggleSortingHandler(),
									className: H("group/sort inline-flex items-center gap-1.5 rounded-sm outline-none select-none", "hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80"),
									children: [c, /* @__PURE__ */ a(s, {
										"aria-hidden": !0,
										className: H("size-3.5", !n && "opacity-0 group-hover/sort:opacity-100 group-focus-visible/sort:opacity-100")
									})]
								}) : /* @__PURE__ */ a("span", {
									className: "inline-flex items-center gap-1.5",
									children: c
								})
							}, e.id);
						})
					}, e.id)) }), /* @__PURE__ */ o(Ca, { children: [
						Ft > 0 && /* @__PURE__ */ a(X, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ea, {
								colSpan: kt,
								className: "p-0",
								style: { height: Ft }
							})
						}),
						Pt.map(({ row: e, index: t }) => e.getIsGrouped() ? /* @__PURE__ */ a(X, {
							ref: U ? Mt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ta, {
								colSpan: kt,
								className: H("bg-muted/50", vo),
								children: /* @__PURE__ */ o("button", {
									type: "button",
									onClick: e.getToggleExpandedHandler(),
									"aria-expanded": e.getIsExpanded(),
									className: "inline-flex items-center gap-1.5 rounded-sm outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
									children: [
										e.getIsExpanded() ? /* @__PURE__ */ a(ae, { className: "size-3.5" }) : /* @__PURE__ */ a(le, { className: "size-3.5" }),
										Tt(Q(e.getValue(I))),
										/* @__PURE__ */ a("span", {
											className: "rounded-full bg-card px-1.5 py-0.5 text-[0.65rem] font-normal",
											children: e.subRows.length
										})
									]
								})
							})
						}, e.id) : /* @__PURE__ */ a(X, {
							ref: U ? Mt.measureElement : void 0,
							"data-index": t,
							"aria-rowindex": t + 2,
							role: m ? "button" : void 0,
							tabIndex: m ? 0 : void 0,
							onClick: m ? () => m(e.original) : void 0,
							onKeyDown: m ? (t) => {
								(t.key === "Enter" || t.key === " ") && (t.preventDefault(), m(e.original));
							} : void 0,
							className: m ? "cursor-pointer outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80" : void 0,
							children: e.getVisibleCells().map((e) => /* @__PURE__ */ a(Ea, {
								className: M[e.column.id]?.className,
								children: /* @__PURE__ */ a(R.FlexRender, { cell: e })
							}, e.id))
						}, e.id)),
						It > 0 && /* @__PURE__ */ a(X, {
							"aria-hidden": !0,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ea, {
								colSpan: kt,
								className: "p-0",
								style: { height: It }
							})
						}),
						oe && (tt ? /* @__PURE__ */ a(Ns, {
							columns: R.getVisibleLeafColumns().map((e) => M[e.id]).filter((e) => !!e),
							onSave: oe,
							onClose: it
						}) : /* @__PURE__ */ a(X, {
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ea, {
								colSpan: kt,
								className: "py-1",
								children: st
							})
						})),
						lt && /* @__PURE__ */ a(X, {
							ref: et,
							className: "hover:bg-transparent",
							children: /* @__PURE__ */ a(Ea, {
								colSpan: kt,
								role: "status",
								"aria-live": "polite",
								className: "text-center text-xs text-muted-foreground",
								children: ut ? A.loadingMore : null
							})
						})
					] })]
				})
			}),
			L && !r && !s && Je.length > 0 && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t px-4 py-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ a("span", {
					role: "status",
					"aria-live": "polite",
					children: A.rowCount(Je.length)
				}), /* @__PURE__ */ o("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", { children: A.pageOf(De + 1, Math.max(R.getPageCount(), 1)) }),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => R.previousPage(),
							disabled: !R.getCanPreviousPage(),
							children: A.previousPage
						}),
						/* @__PURE__ */ a(q, {
							variant: "outline",
							size: "sm",
							onClick: () => R.nextPage(),
							disabled: !R.getCanNextPage(),
							children: A.nextPage
						})
					]
				})]
			})
		]
	});
}
var Ls = 100, Rs = 37, zs = 12, Bs = 640, Vs = "max-h-[70dvh]", Hs = K({
	variant: "outline",
	size: "sm"
}), Us = H(Hs, "bg-accent text-accent-foreground"), Ws = H(Hs, "border-dashed text-muted-foreground"), Gs = H(K({
	variant: "ghost",
	size: "sm"
}), "text-muted-foreground"), Ks = "h-9 text-xs font-medium whitespace-nowrap text-muted-foreground", qs = "[&_td]:px-3 [&_th]:px-3 [&_tr>:first-child]:pl-4 [&_tr>:last-child]:pr-4", Js = 300;
function Ys(t, n) {
	let [r, i] = e.useState(t);
	return e.useEffect(() => {
		let e = setTimeout(() => i(t), n);
		return () => clearTimeout(e);
	}, [t, n]), r;
}
function Xs({ column: e, row: t, value: n, rowName: r }) {
	let i = G().dataTable, o = e.onEdit;
	return /* @__PURE__ */ a("span", {
		className: "contents",
		onClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ a(ss, {
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
function Zs({ options: e, value: t, onChange: n, placeholder: r, max: i = 3, disabled: s, className: c }) {
	let l = G().common, u = e.filter((e) => t.includes(e.value)), d = u.slice(0, i), f = u.length - d.length, p = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]);
	return /* @__PURE__ */ o(Nr, { children: [/* @__PURE__ */ o(Pr, {
		type: "button",
		disabled: s,
		"aria-label": r,
		className: H("flex h-9 w-full min-w-0 items-center gap-1 rounded-md border border-transparent bg-transparent px-2 text-sm hover:border-input focus-visible:border-ring focus-visible:ring-[1.5px] focus-visible:ring-ring/80 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", c),
		children: [/* @__PURE__ */ o("span", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
			children: [d.length === 0 ? /* @__PURE__ */ a("span", {
				className: "text-muted-foreground",
				children: r
			}) : d.map((e) => /* @__PURE__ */ a(Gt, {
				variant: "secondary",
				className: H("max-w-40 truncate", e.className),
				children: e.label
			}, e.value)), f > 0 && /* @__PURE__ */ o("span", {
				className: "text-xs text-muted-foreground",
				children: ["+", f]
			})]
		}), /* @__PURE__ */ a(ae, { className: "size-3.5 shrink-0 text-muted-foreground" })]
	}), /* @__PURE__ */ a(Fr, {
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
							children: n && /* @__PURE__ */ a(M, { className: "size-3.5" })
						}),
						e.className ? /* @__PURE__ */ a(Gt, {
							variant: "secondary",
							className: H("truncate", e.className),
							children: e.label
						}) : /* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1 truncate",
							children: e.label
						}),
						e.className && /* @__PURE__ */ a("span", { className: "min-w-0 flex-1" }),
						n && /* @__PURE__ */ a(M, { className: "size-3.5 shrink-0" })
					]
				}, e.value);
			})]
		})
	})] });
}
//#endregion
//#region src/blocks/data/list-url.ts
var Qs = [
	"q",
	"sort",
	"filter",
	"group",
	"mode",
	"view"
];
function $s(e) {
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
	let a = t.get("mode"), o = Wo.find((e) => e === a);
	o && o !== "table" && (n.mode = o);
	let s = t.get("view");
	return s && (n.view = s), n;
}
function ec(e, t) {
	let n = new URLSearchParams(typeof t == "string" ? t : t ?? void 0);
	for (let e of Qs) n.delete(e);
	e.q && n.set("q", e.q), e.sort && n.set("sort", `${e.sort.dir === "desc" ? "-" : ""}${e.sort.key}`);
	let r = Object.entries(e.filters).filter(([, e]) => e.length > 0).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${e}:${t.join(",")}`).join(";");
	return r && n.set("filter", r), e.group && n.set("group", e.group), e.mode && e.mode !== "table" && n.set("mode", e.mode), e.view && e.view !== "default" && n.set("view", e.view), n;
}
function tc(e, t) {
	return ec(e).toString() === ec(t).toString();
}
function nc(e, t) {
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
function rc(e) {
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
var ic = {
	google: {
		name: "Google",
		icon: De
	},
	github: {
		name: "GitHub",
		icon: Ee
	},
	apple: {
		name: "Apple",
		icon: w
	},
	microsoft: {
		name: "Microsoft",
		icon: Xe
	}
}, ac = Object.keys(ic);
function oc({ provider: e, variant: t = "outline", ...n }) {
	let r = G().auth, i = ic[e];
	if (!i) throw Error("SocialButton: unknown provider " + JSON.stringify(e) + ", expected one of " + ac.join(", "));
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
function sc({ brand: e, sidebarHeader: t, sidebarFooter: n, nav: r, currentPath: s, user: c, userMenu: l, onSignOut: u, headerActions: d, headerContent: f, classNames: p, bleed: m = !1, children: h }) {
	let g = G().shell;
	return /* @__PURE__ */ o(bi, { children: [
		/* @__PURE__ */ a("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:outline-2 focus:outline-ring",
			children: g.skipToContent
		}),
		/* @__PURE__ */ o(xi, {
			collapsible: "icon",
			rootClassName: p?.sidebar,
			children: [
				/* @__PURE__ */ o(Ei, { children: [/* @__PURE__ */ o("div", {
					className: "flex h-12 items-center gap-1",
					children: [/* @__PURE__ */ a("div", {
						className: "flex h-12 min-w-0 flex-1 items-center gap-2 p-2 text-sm group-data-[collapsible=icon]:hidden",
						children: typeof e == "string" ? /* @__PURE__ */ a(za, { children: e }) : e
					}), /* @__PURE__ */ a(Si, { className: "shrink-0 group-data-[collapsible=icon]:mx-auto" })]
				}), t && /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: t
				})] }),
				/* @__PURE__ */ a(ki, { children: r.map((e, t) => /* @__PURE__ */ o(Ai, { children: [e.label && /* @__PURE__ */ a(ji, { children: e.label }), /* @__PURE__ */ a(Ni, { children: /* @__PURE__ */ a(Pi, { children: e.items.map((e) => /* @__PURE__ */ o(Fi, { children: [/* @__PURE__ */ a(Li, {
					asChild: !0,
					isActive: s === e.href,
					tooltip: e.title,
					children: /* @__PURE__ */ o(Z, {
						href: e.href,
						children: [e.icon && /* @__PURE__ */ a(e.icon, {}), /* @__PURE__ */ a("span", { children: e.title })]
					})
				}), e.badge !== void 0 && e.badge !== null && /* @__PURE__ */ a(zi, { children: e.badge })] }, e.href)) }) })] }, e.label ?? t)) }),
				n && /* @__PURE__ */ a(Di, { children: /* @__PURE__ */ a("div", {
					className: "group-data-[collapsible=icon]:hidden",
					children: n
				}) })
			]
		}),
		/* @__PURE__ */ o(wi, {
			as: "div",
			children: [/* @__PURE__ */ o("header", {
				className: H("flex h-14 shrink-0 items-center gap-2 border-b border-[var(--surface-glass-border)] bg-[var(--surface-glass)] px-4 backdrop-blur-xl", p?.header),
				children: [
					/* @__PURE__ */ a(Si, { className: "-ml-1 md:hidden" }),
					/* @__PURE__ */ a("div", {
						className: "flex min-w-0 flex-1 items-center gap-2",
						children: f
					}),
					d && /* @__PURE__ */ a("div", {
						className: "flex items-center gap-2",
						children: d
					}),
					c && /* @__PURE__ */ o(Xn, { children: [/* @__PURE__ */ a(Qn, {
						asChild: !0,
						children: /* @__PURE__ */ a(q, {
							variant: "ghost",
							size: "icon",
							"aria-label": g.accountMenu,
							className: "shrink-0 rounded-full",
							children: /* @__PURE__ */ a(Ht, {
								name: c.name,
								src: c.avatarUrl,
								className: "size-8"
							})
						})
					}), /* @__PURE__ */ o($n, {
						align: "end",
						className: "min-w-56",
						children: [
							/* @__PURE__ */ o(ar, {
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
							l && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(or, {}), l] }),
							u && /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(or, {}), /* @__PURE__ */ o(tr, {
								onSelect: u,
								children: [/* @__PURE__ */ a(ze, {}), g.signOut]
							})] })
						]
					})] })
				]
			}), /* @__PURE__ */ a("main", {
				id: "content",
				tabIndex: -1,
				className: H("flex flex-1 flex-col outline-none", m ? "gap-0" : "gap-6 p-4 md:p-6", p?.main),
				children: h
			})]
		})
	] });
}
//#endregion
//#region src/blocks/shell/preference-menus.tsx
function cc({ className: t }) {
	let n = G().preferences, { zoom: r, setZoom: i } = la(), [s, c] = e.useState(String(r));
	e.useEffect(() => c(String(r)), [r]);
	let l = () => {
		let e = Number.parseInt(s, 10);
		Number.isNaN(e) ? c(String(r)) : (i(e), c(String(Math.min(150, Math.max(75, e)))));
	}, u = [...$i].reverse().find((e) => e < r), d = $i.find((e) => e > r);
	return /* @__PURE__ */ o("div", {
		className: H("flex w-fit items-center gap-1", t),
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
					children: /* @__PURE__ */ a(Me, {})
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
					children: /* @__PURE__ */ a(Fe, {})
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
var lc = {
	light: Ue,
	dark: Ne,
	system: _e
};
function uc({ className: e }) {
	let t = G().preferences, { theme: n, setTheme: r } = ga();
	return /* @__PURE__ */ a(La, {
		type: "single",
		variant: "outline",
		size: "sm",
		value: n,
		"aria-label": t.appearance,
		onValueChange: (e) => e && r(e),
		className: e,
		children: ea.map((e) => {
			let n = lc[e];
			return /* @__PURE__ */ o(Ra, {
				value: e,
				className: "gap-1.5 px-2.5",
				children: [/* @__PURE__ */ a(n, {}), t.themes[e]]
			}, e);
		})
	});
}
function dc({ options: e, value: t, onChange: n, className: r }) {
	let i = G().preferences;
	if (!e.some((e) => e.code === t)) throw Error("LanguagePicker: value " + JSON.stringify(t) + " is not one of " + e.map((e) => e.code).join(", "));
	return /* @__PURE__ */ o(Jr, {
		value: t,
		onValueChange: n,
		children: [/* @__PURE__ */ a(Zr, {
			size: "sm",
			"aria-label": i.language,
			className: r,
			children: /* @__PURE__ */ a(Xr, {})
		}), /* @__PURE__ */ a(Qr, { children: e.map((e) => /* @__PURE__ */ a(ei, {
			value: e.code,
			lang: e.code,
			children: e.label
		}, e.code)) })]
	});
}
function fc({ language: e, side: t, align: n = "end", className: r }) {
	let i = G().preferences, s = (e, t) => /* @__PURE__ */ o("div", {
		className: "grid gap-1.5",
		children: [/* @__PURE__ */ a("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: e
		}), t]
	});
	return /* @__PURE__ */ o(Nr, { children: [/* @__PURE__ */ a(Pr, {
		asChild: !0,
		children: /* @__PURE__ */ a(q, {
			variant: "ghost",
			size: "icon-sm",
			"aria-label": i.title,
			className: r,
			children: /* @__PURE__ */ a(Te, {})
		})
	}), /* @__PURE__ */ o(Fr, {
		side: t,
		align: n,
		className: "grid w-auto gap-4 p-3",
		children: [
			s(i.appearance, /* @__PURE__ */ a(uc, {})),
			e && s(i.language, /* @__PURE__ */ a(dc, {
				...e,
				className: "w-full"
			})),
			s(i.zoom, /* @__PURE__ */ a(cc, {}))
		]
	})] });
}
//#endregion
//#region src/blocks/modal/modal.tsx
var pc = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-lg",
	lg: "sm:max-w-3xl",
	xl: "sm:max-w-5xl"
};
function mc({ open: e, onOpenChange: t, title: n, description: r, footer: i, size: s = "md", className: c, children: l }) {
	let u = G().modal;
	return /* @__PURE__ */ a(Bn, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(Gn, {
			showCloseButton: !1,
			className: H("flex max-h-[92dvh] flex-col gap-0 p-0", pc[s], c),
			onOpenAutoFocus: si,
			children: [
				/* @__PURE__ */ o("div", {
					className: "flex shrink-0 items-start justify-between gap-4 border-b px-5 py-3.5",
					children: [/* @__PURE__ */ o("div", {
						className: "grid gap-1",
						children: [/* @__PURE__ */ a(Jn, {
							className: "text-base",
							children: n
						}), r && /* @__PURE__ */ a(Yn, { children: r })]
					}), /* @__PURE__ */ a(Un, {
						"aria-label": u.close,
						className: H(K({
							variant: "ghost",
							size: "icon-xs"
						}), "-mr-1 text-muted-foreground"),
						children: /* @__PURE__ */ a(Qe, { className: "size-4" })
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
var hc = {
	sm: "sm:max-w-sm",
	md: "sm:max-w-md",
	lg: "sm:max-w-xl"
};
function gc({ open: e, onOpenChange: t, title: n, description: r, footer: i, side: s = "right", size: c = "md", className: u, children: d }) {
	let f = G().common;
	return /* @__PURE__ */ a(l.Root, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ o(l.Portal, { children: [/* @__PURE__ */ a(l.Overlay, {
			"data-slot": "drawer-overlay",
			className: yn
		}), /* @__PURE__ */ o(l.Content, {
			"data-slot": "drawer",
			"data-side": s,
			onOpenAutoFocus: si,
			className: H(vn.base, vn[s], s !== "bottom" && H("w-full", hc[c]), "outline-none", u),
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
						className: H(K({
							variant: "ghost",
							size: "icon-xs"
						}), "-mr-1 text-muted-foreground"),
						children: /* @__PURE__ */ a(Qe, { className: "size-4" })
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
var _c = 0, vc = e.createContext({
	confirm: () => Promise.resolve(!1),
	prompt: () => Promise.resolve(null)
});
function yc({ children: t }) {
	let [n, r] = e.useState([]), i = n[0], s = e.useMemo(() => ({
		confirm: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: _c++,
				kind: "confirm",
				options: e,
				settle: t
			}]);
		}),
		prompt: (e) => new Promise((t) => {
			r((n) => [...n, {
				id: _c++,
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
	return /* @__PURE__ */ o(vc.Provider, {
		value: s,
		children: [t, i && /* @__PURE__ */ a(bc, {
			pending: i,
			onAnswer: c
		}, i.id)]
	});
}
function bc({ pending: t, onAnswer: n }) {
	let r = G().common, { options: s } = t, c = t.kind === "prompt" && null, [l, u] = e.useState(t.kind === "prompt" ? t.options.defaultValue ?? "" : ""), d = e.useId(), f = () => n(t.kind !== "prompt" || l);
	return /* @__PURE__ */ a(mc, {
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
			children: [/* @__PURE__ */ a(dr, {
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
function xc() {
	return e.useContext(vc);
}
//#endregion
//#region src/blocks/page/page-header.tsx
function Sc({ title: e, description: t, actions: n, className: r, ...i }) {
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
//#region src/blocks/page/error-boundary.tsx
function Cc({ reset: e }) {
	let t = G().common;
	return /* @__PURE__ */ a(_o, {
		title: t.crashed,
		onRetry: e
	});
}
var wc = class extends e.Component {
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
		}) : t === void 0 ? /* @__PURE__ */ a(Cc, {
			error: e,
			reset: this.reset
		}) : t;
	}
};
//#endregion
//#region src/blocks/dashboard/dashboard.tsx
function Tc({ title: e, description: t, actions: n, stats: r, children: i, className: s, ...c }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "dashboard",
		className: H("flex flex-col gap-6", s),
		...c,
		children: [
			/* @__PURE__ */ a(Sc, {
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
function Ec({ title: t, description: n, action: r, span: i = "half", loading: s, error: c, onRetry: l, className: u, children: d, ...f }) {
	let p = e.useId(), m = G();
	return /* @__PURE__ */ o("section", {
		"data-slot": "dashboard-panel",
		"aria-labelledby": p,
		className: H(_n, "flex min-w-0 flex-col gap-3 p-4", i === "full" && "lg:col-span-2", u),
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
				/* @__PURE__ */ a(Y, { className: "h-4 w-3/4" }),
				/* @__PURE__ */ a(Y, { className: "h-4 w-1/2" }),
				/* @__PURE__ */ a(Y, { className: "h-4 w-2/3" })
			]
		}) : c ? /* @__PURE__ */ a(_o, {
			variant: "alert",
			title: go(c),
			onRetry: l
		}) : d]
	});
}
function Dc({ items: e, loading: t, error: n, onRetry: r, className: i, ...s }) {
	let c = G();
	if (t) return /* @__PURE__ */ a("div", {
		role: "status",
		"aria-label": c.common.loading,
		className: H("grid gap-4", i),
		children: [
			0,
			1,
			2
		].map((e) => /* @__PURE__ */ o("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ a(Y, { className: "size-4 shrink-0" }),
				/* @__PURE__ */ a(Y, { className: "h-4 flex-1" }),
				/* @__PURE__ */ a(Y, { className: "h-3 w-20 shrink-0" })
			]
		}, e))
	});
	if (n) return /* @__PURE__ */ a(_o, {
		variant: "alert",
		title: go(n),
		onRetry: r,
		className: i
	});
	if (e === void 0) throw Error("ActivityList: items is undefined but the list is neither loading nor failed");
	return e.length === 0 ? /* @__PURE__ */ a("p", {
		className: "py-4 text-sm text-muted-foreground",
		children: c.dashboard.noActivity
	}) : /* @__PURE__ */ a("ol", {
		"data-slot": "activity-list",
		className: H("flex flex-col divide-y", i),
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
function Oc(e) {
	if (!e) return "";
	let t = (e) => String(e).padStart(2, "0");
	return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate());
}
function kc({ fields: t, required: n, filled: r, message: s, onInvalid: c }) {
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
function Ac(e, t) {
	if (e && t && e > t) throw Error("DatePicker: min is after max, " + e.toISOString() + " > " + t.toISOString());
	let n = [];
	return e && n.push({ before: e }), t && n.push({ after: t }), n;
}
function jc({ empty: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ o(q, {
		variant: "outline",
		"data-empty": e,
		className: H("justify-start font-normal data-[empty=true]:text-muted-foreground", n),
		...r,
		children: [/* @__PURE__ */ a(k, { "aria-hidden": !0 }), /* @__PURE__ */ a("span", {
			className: "truncate",
			children: t
		})]
	});
}
function Mc({ value: t, onChange: n, placeholder: r, disabled: s, min: c, max: l, className: u, name: d, required: f, ...p }) {
	let m = G(), [h, g] = e.useState(!1), [_, v] = e.useState(!1);
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(Nr, {
		open: h,
		onOpenChange: g,
		children: [/* @__PURE__ */ a(Pr, {
			asChild: !0,
			children: /* @__PURE__ */ a(jc, {
				empty: !t,
				disabled: s,
				className: u,
				...p,
				"aria-required": f || void 0,
				"aria-invalid": p["aria-invalid"] || _ && !t || void 0,
				children: t ? m.format.date(t) : r ?? m.datePicker.placeholder
			})
		}), /* @__PURE__ */ a(Fr, {
			className: "w-auto p-0",
			align: "start",
			children: /* @__PURE__ */ a(mn, {
				mode: "single",
				selected: t,
				defaultMonth: t,
				disabled: Ac(c, l),
				onSelect: (e) => {
					n(e), g(!1);
				}
			})
		})]
	}), /* @__PURE__ */ a(kc, {
		fields: d ? [[d, Oc(t)]] : [],
		required: f,
		filled: !!t,
		message: m.datePicker.required,
		onInvalid: () => {
			v(!0), g(!0);
		}
	})] });
}
var Nc = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function Pc(e) {
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
				from: Nc(e, -6),
				to: e
			})
		},
		{
			label: e.last30Days,
			range: (e) => ({
				from: Nc(e, -29),
				to: e
			})
		},
		{
			label: e.last90Days,
			range: (e) => ({
				from: Nc(e, -89),
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
function Fc(e, t) {
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
function Ic({ value: t, onChange: n, presets: r, placeholder: s, disabled: c, min: l, max: u, className: d, name: f, required: p, ...m }) {
	let h = G(), g = oi(), [_, v] = e.useState(!1), [y, b] = e.useState(!1), x = !!t?.from && !!t.to, S = r === !1 ? [] : r ?? Pc(h.datePicker), C = t?.from ? t.to ? `${h.format.date(t.from)}${h.datePicker.rangeSeparator}${h.format.date(t.to)}` : h.format.date(t.from) : s ?? h.datePicker.rangePlaceholder;
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(Nr, {
		open: _,
		onOpenChange: v,
		children: [/* @__PURE__ */ a(Pr, {
			asChild: !0,
			children: /* @__PURE__ */ a(jc, {
				empty: !t?.from,
				disabled: c,
				className: d,
				...m,
				"aria-required": p || void 0,
				"aria-invalid": m["aria-invalid"] || y && !x || void 0,
				children: C
			})
		}), /* @__PURE__ */ a(Fr, {
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
					children: [/* @__PURE__ */ a(mn, {
						mode: "range",
						selected: t,
						defaultMonth: t?.from,
						numberOfMonths: g ? 1 : 2,
						disabled: Ac(l, u),
						onSelect: (e, r) => n(Fc(t, r))
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
	}), /* @__PURE__ */ a(kc, {
		fields: f ? [[f + "[from]", Oc(t?.from)], [f + "[to]", Oc(t?.to)]] : [],
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
var Lc = 2e3;
function Rc({ value: t, label: n, size: r = "icon-sm", onCopy: s, onError: c, className: l }) {
	let u = G().copy, [d, f] = e.useState("idle"), [p, m] = e.useState(!1);
	e.useEffect(() => {
		if (d === "idle") return;
		let e = window.setTimeout(() => f("idle"), Lc);
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
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ o(li, {
		open: p || d !== "idle",
		onOpenChange: m,
		children: [/* @__PURE__ */ a(ui, {
			asChild: !0,
			children: /* @__PURE__ */ a(q, {
				type: "button",
				variant: "ghost",
				size: r,
				"aria-label": g,
				disabled: t === "",
				onClick: h,
				className: H("text-muted-foreground hover:text-foreground", l),
				children: /* @__PURE__ */ a(zc, { state: d })
			})
		}), /* @__PURE__ */ a(di, { children: _ })]
	}), /* @__PURE__ */ a("span", {
		className: "sr-only",
		"aria-live": "polite",
		children: d === "copied" ? u.copied : d === "failed" ? u.failed : ""
	})] });
}
function zc({ state: e }) {
	switch (e) {
		case "idle": return /* @__PURE__ */ a(ge, { "aria-hidden": !0 });
		case "copied": return /* @__PURE__ */ a(M, {
			"aria-hidden": !0,
			className: "text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(Ye, {
			"aria-hidden": !0,
			className: "text-danger-fg"
		});
		default: throw Error("CopyButton: unknown state " + JSON.stringify(e));
	}
}
function Bc({ label: e, value: t, mono: n = !1, copy: r = !0, className: i }) {
	return /* @__PURE__ */ o("div", {
		className: H("flex min-w-0 items-center gap-3 py-1.5 text-sm", i),
		children: [/* @__PURE__ */ a("dt", {
			className: "w-28 shrink-0 text-muted-foreground",
			children: e
		}), /* @__PURE__ */ o("dd", {
			className: "flex min-w-0 flex-1 items-center gap-1",
			children: [/* @__PURE__ */ a("span", {
				className: H("min-w-0 break-words font-medium", n && "font-mono"),
				children: t
			}), r && /* @__PURE__ */ a(Rc, {
				value: t,
				label: e,
				size: "icon-xs"
			})]
		})]
	});
}
//#endregion
//#region src/blocks/upload/validate-files.ts
function Vc(e, { accept: t, maxSize: n, maxFiles: r }) {
	if (n !== void 0 && !(n > 0)) throw Error("validateFiles: maxSize must be a positive number of bytes");
	if (r !== void 0 && !(Number.isInteger(r) && r >= 0)) throw Error("validateFiles: maxFiles must be a whole number, 0 or more");
	let i = (t ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean), a = [], o = [];
	for (let t of e) i.length > 0 && !i.some((e) => Hc(t, e)) ? o.push({
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
function Hc(e, t) {
	if (t.startsWith(".")) return e.name.toLowerCase().endsWith(t);
	let n = e.type.toLowerCase();
	return t.endsWith("/*") ? n.startsWith(t.slice(0, -1)) : n === t;
}
//#endregion
//#region src/blocks/upload/file-drop.tsx
function Uc(e, t) {
	let n = e.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean).map((e) => {
		if (e.startsWith(".")) return e.slice(1).toUpperCase();
		if (e === "image/*") return t;
		let [n, r] = e.split("/");
		return r && r !== "*" ? r.toUpperCase() : n;
	});
	return [...new Set(n)].join(", ");
}
function Wc({ accept: t, maxSize: n, maxFiles: r, onFiles: i, onReject: s, disabled: c, className: l, id: u }) {
	let d = G(), [f, p] = e.useState(!1), [m, h] = e.useState([]);
	function g(e) {
		if (!e || e.length === 0) return;
		let a = Vc(Array.from(e), {
			accept: t,
			maxSize: n,
			maxFiles: r
		});
		h(a.rejected), a.accepted.length > 0 && i(a.accepted), a.rejected.length > 0 && s?.(a.rejected);
	}
	let _ = n === void 0 ? void 0 : d.format.fileSize(n), v = d.upload.limits({
		accept: t && Uc(t, d.upload.images),
		maxSize: _,
		maxFiles: r
	}), y = (e) => e.reason === "type" ? d.upload.wrongType(e.file.name) : e.reason === "size" ? d.upload.tooLarge(e.file.name, _ ?? "") : d.upload.tooMany(r ?? 0);
	return /* @__PURE__ */ o("div", {
		className: H("grid gap-2", l),
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
				/* @__PURE__ */ a(R, {
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
function Gc({ items: e, onRemove: t, onRetry: n, className: r, ...i }) {
	let s = G();
	if (e.length === 0) return null;
	let c = +!!t + (n && e.some((e) => e.status === "failed") ? 1 : 0), l = c === 2 ? "w-16" : c === 1 ? "w-8" : void 0;
	return /* @__PURE__ */ a("ul", {
		"data-slot": "upload-list",
		className: H("grid gap-2", r),
		...i,
		children: e.map((e) => /* @__PURE__ */ o("li", {
			className: "flex items-center gap-3 rounded-md border bg-card px-3 py-2",
			children: [
				/* @__PURE__ */ a(Kc, { item: e }),
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
						e.status === "uploading" && /* @__PURE__ */ a(Wr, {
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
					className: H("flex shrink-0 justify-end", l),
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
						children: /* @__PURE__ */ a(Qe, {})
					})]
				})
			]
		}, e.id))
	});
}
function Kc({ item: e }) {
	switch (e.status) {
		case "uploading": return /* @__PURE__ */ a(Se, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-muted-foreground"
		});
		case "done": return /* @__PURE__ */ a(j, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-success-fg"
		});
		case "failed": return /* @__PURE__ */ a(Je, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-danger-fg"
		});
		default: throw Error("UploadList: unknown status " + JSON.stringify(e));
	}
}
//#endregion
//#region src/blocks/upload/upload-slots.tsx
function qc({ slots: t, value: n, onFile: r, onReject: s, onRemove: c, onRetry: l, onDownload: u, disabled: d, className: f }) {
	let p = G(), m = p.upload, h = p.format, g = e.useId(), _ = new Set(t.map((e) => e.id));
	if (_.size !== t.length) throw Error("UploadSlots: slot ids must be unique");
	let v = Object.keys(n).filter((e) => !_.has(e));
	if (v.length) throw Error("UploadSlots: value has keys no slot declares: " + v.join(", "));
	let y = (e) => n[e.id] ?? [];
	for (let e of t) if (!e.multiple && y(e).length > 1) throw Error("UploadSlots: slot " + e.id + " holds " + y(e).length + " files but is not multiple");
	let b = t.filter((e) => y(e).length === 0), x = t.filter((e) => e.multiple || y(e).length === 0), S = b.find((e) => !e.optional) ?? b[0] ?? x[0], [C, w] = e.useState(S?.id), T = x.find((e) => e.id === C) ?? S, E = t.filter((e) => y(e).length > 0).length;
	return /* @__PURE__ */ o("div", {
		"data-slot": "upload-slots",
		className: H("grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]", f),
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
				children: [/* @__PURE__ */ a(dr, {
					htmlFor: g + "-pick",
					children: m.thisFileIs
				}), /* @__PURE__ */ o(Jr, {
					value: T?.id,
					onValueChange: w,
					disabled: d,
					children: [/* @__PURE__ */ a(Zr, {
						id: g + "-pick",
						className: "w-full",
						children: /* @__PURE__ */ a(Xr, { placeholder: m.pickDocument })
					}), /* @__PURE__ */ a(Qr, { children: x.map((e) => /* @__PURE__ */ a(ei, {
						value: e.id,
						children: e.label
					}, e.id)) })]
				})]
			}), /* @__PURE__ */ a(Wc, {
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
						children: [/* @__PURE__ */ a(Xc, { files: t }), /* @__PURE__ */ o("div", {
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
									children: t.map((t) => /* @__PURE__ */ a(Jc, {
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
function Jc({ item: t, onRemove: n, onRetry: r, onDownload: i }) {
	let s = G(), c = s.upload, l = s.format, [u, d] = e.useState("idle");
	return /* @__PURE__ */ o("li", {
		className: "grid gap-1",
		children: [
			/* @__PURE__ */ o("div", {
				className: "flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ a(Se, {
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
								children: u === "pending" ? /* @__PURE__ */ a(L, { className: "animate-spin" }) : /* @__PURE__ */ a(ye, {})
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
							n && /* @__PURE__ */ a(Yc, {
								name: t.name,
								onConfirm: n
							})
						]
					})
				]
			}),
			t.status === "uploading" && /* @__PURE__ */ a(Wr, {
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
function Yc({ name: t, onConfirm: n }) {
	let r = G(), [i, s] = e.useState(!1);
	return /* @__PURE__ */ o(Nr, {
		open: i,
		onOpenChange: s,
		children: [/* @__PURE__ */ a(Pr, {
			asChild: !0,
			children: /* @__PURE__ */ a(q, {
				variant: "ghost",
				size: "icon-xs",
				"aria-label": r.upload.remove(t),
				children: /* @__PURE__ */ a(Qe, {})
			})
		}), /* @__PURE__ */ o(Fr, {
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
function Xc({ files: e }) {
	let [t, n] = e.length === 0 ? [me, "text-muted-foreground"] : e.some((e) => e.status === "failed") ? [Je, "text-danger-fg"] : e.some((e) => e.status === "uploading") ? [Se, "text-muted-foreground"] : [j, "text-success-fg"];
	return /* @__PURE__ */ a(t, {
		"aria-hidden": !0,
		className: H("mt-0.5 size-4 shrink-0", n)
	});
}
//#endregion
//#region src/blocks/site/site-layout.tsx
var Zc = e.createContext(void 0), Qc = "mx-auto w-full max-w-6xl px-4 sm:px-6", $c = 5;
function el({ links: e, currentHref: t, className: n }) {
	return /* @__PURE__ */ a("ul", {
		className: n,
		children: e.map((e) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Z, {
			href: e.href,
			"aria-current": e.href === t ? "page" : void 0,
			className: "flex h-9 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors outline-none hover:bg-accent/60 hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground",
			children: e.label
		}) }, e.href))
	});
}
function tl({ brand: t, brandHref: n = "/", nav: r = [], currentHref: i, actions: s, footer: c, className: l, children: u, ...d }) {
	if (r.length > $c) throw Error("SiteLayout: nav takes at most 5 links, got " + r.length);
	let f = G().site, [p, m] = e.useState(!1), h = e.useId();
	return /* @__PURE__ */ o("div", {
		"data-slot": "site-layout",
		className: H("flex min-h-svh flex-col bg-background text-foreground", l),
		...d,
		children: [
			/* @__PURE__ */ a("a", {
				href: `#${h}`,
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-popover focus:px-3 focus:py-2 focus:text-sm focus:shadow-overlay",
				children: f.skipToContent
			}),
			/* @__PURE__ */ a("header", {
				className: H(Qc, "sticky top-3 z-40 mt-3"),
				children: /* @__PURE__ */ o("div", {
					className: "flex h-12 items-center gap-2 rounded-xl border bg-background/90 py-1.5 pr-1.5 pl-4 shadow-overlay backdrop-blur-xl lg:-mx-4",
					children: [
						/* @__PURE__ */ a(Z, {
							href: n,
							className: "mr-2 shrink-0 rounded-md outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
							children: typeof t == "string" ? /* @__PURE__ */ a(za, {
								className: "text-lg",
								children: t
							}) : t
						}),
						r.length > 0 && /* @__PURE__ */ a("nav", {
							"aria-label": f.mainNav,
							className: "hidden md:block",
							children: /* @__PURE__ */ a(el, {
								links: r,
								currentHref: i,
								className: "flex items-center gap-0.5"
							})
						}),
						/* @__PURE__ */ a("div", {
							className: "ml-auto hidden items-center gap-1.5 md:flex",
							children: s
						}),
						(r.length > 0 || s) && /* @__PURE__ */ a(q, {
							variant: "ghost",
							size: "icon",
							className: "ml-auto md:hidden",
							"aria-label": f.menu,
							"aria-expanded": p,
							onClick: () => m(!0),
							children: /* @__PURE__ */ a(ke, {})
						})
					]
				})
			}),
			/* @__PURE__ */ a(gc, {
				open: p,
				onOpenChange: m,
				title: f.menu,
				size: "sm",
				footer: s && /* @__PURE__ */ a("div", {
					className: "flex w-full flex-col gap-2 [&>*]:w-full",
					children: s
				}),
				children: /* @__PURE__ */ a("nav", {
					"aria-label": f.mainNav,
					onClick: (e) => e.target.closest("a") && m(!1),
					children: /* @__PURE__ */ a(el, {
						links: r,
						currentHref: i,
						className: "-mx-3 grid gap-1"
					})
				})
			}),
			/* @__PURE__ */ a("main", {
				id: h,
				tabIndex: -1,
				className: "flex-1 outline-none",
				children: u
			}),
			/* @__PURE__ */ a(Zc.Provider, {
				value: i,
				children: c
			})
		]
	});
}
function nl({ columns: t, aside: n, owner: r, note: i, className: s, ...c }) {
	if (t.length === 0) throw Error("SiteFooter: needs at least one column");
	if (t.length > 4) throw Error("SiteFooter: takes at most 4 columns, got " + t.length);
	let l = G().site, u = e.useContext(Zc);
	return /* @__PURE__ */ a("footer", {
		"data-slot": "site-footer",
		className: H("border-t", s),
		...c,
		children: /* @__PURE__ */ o("div", {
			className: H(Qc, "grid gap-10 py-12"),
			children: [/* @__PURE__ */ o("div", {
				className: H("grid gap-10", n && "lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16"),
				children: [/* @__PURE__ */ a("nav", {
					"aria-label": l.footerNav,
					className: H("grid grid-cols-2 gap-8", t.length >= 3 && "sm:grid-cols-3", t.length === 4 && "lg:grid-cols-4"),
					children: t.map((e) => /* @__PURE__ */ o("div", {
						className: "grid content-start gap-3",
						children: [/* @__PURE__ */ a("h2", {
							className: "text-sm font-medium",
							children: e.title
						}), /* @__PURE__ */ a("ul", {
							className: "grid gap-2",
							children: e.links.map((e) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(Z, {
								href: e.href,
								"aria-current": e.href === u ? "page" : void 0,
								className: "rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80 aria-[current=page]:text-foreground",
								children: e.label
							}) }, e.href))
						})]
					}, e.title))
				}), n && /* @__PURE__ */ a("div", {
					className: "min-w-0",
					children: n
				})]
			}), (r || i) && /* @__PURE__ */ o("div", {
				className: "flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t pt-6 text-xs text-muted-foreground",
				children: [r && /* @__PURE__ */ a("p", { children: l.copyright((/* @__PURE__ */ new Date()).getFullYear(), r) }), i && /* @__PURE__ */ a("div", { children: i })]
			})]
		})
	});
}
//#endregion
//#region src/blocks/site/code-block.tsx
function rl({ code: e, title: t, prompt: n, className: r, ...i }) {
	if (e.trim() === "") throw Error("CodeBlock: code must be non-empty");
	let s = e.replace(/\n$/, "").split("\n"), c = /* @__PURE__ */ a(Rc, {
		value: e,
		label: t,
		size: "icon-sm",
		className: "shrink-0"
	});
	return /* @__PURE__ */ o("div", {
		"data-slot": "code-block",
		className: H(_n, "min-w-0 overflow-hidden text-left", r),
		...i,
		children: [t && /* @__PURE__ */ o("div", {
			className: "flex items-center justify-between gap-2 border-b py-1 pr-1 pl-4",
			children: [/* @__PURE__ */ a("span", {
				className: "truncate font-mono text-xs text-muted-foreground",
				children: t
			}), c]
		}), /* @__PURE__ */ o("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ a("pre", {
				className: "min-w-0 flex-1 overflow-x-auto px-4 py-3 font-mono text-sm leading-6",
				children: /* @__PURE__ */ a("code", { children: s.map((e, t) => /* @__PURE__ */ o("span", {
					className: "block min-h-6",
					children: [n && e !== "" && !s[t - 1]?.endsWith("\\") && /* @__PURE__ */ a("span", {
						"aria-hidden": !0,
						className: "text-muted-foreground select-none",
						children: "$ "
					}), e]
				}, t)) })
			}), !t && /* @__PURE__ */ a("div", {
				className: "p-1.5",
				children: c
			})]
		})]
	});
}
//#endregion
//#region src/blocks/site/sections.tsx
var il = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function al(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of t) {
		if (!il.test(r)) throw Error(e + ": id " + JSON.stringify(r) + " must be lowercase letters, digits and dashes");
		if (n.has(r)) throw Error(e + ": id " + JSON.stringify(r) + " is used twice");
		n.add(r);
	}
}
var ol = "text-4xl font-semibold tracking-tight text-balance sm:text-5xl", sl = "text-2xl font-semibold tracking-tight text-balance sm:text-3xl", cl = "text-base text-pretty text-muted-foreground sm:text-lg", ll = "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:ease-settle motion-safe:fill-mode-backwards", ul = (e) => ({ animationDelay: e * 90 + "ms" }), dl = (e) => ({ animationRange: "entry " + e * 8 + "% entry " + (70 + e * 8) + "%" });
function fl({ frame: e = !0, stage: t, children: n, className: r, style: i }) {
	return /* @__PURE__ */ a("div", {
		style: i,
		className: H("min-w-0 rounded-2xl p-3 sm:p-6 lg:p-8", xn(t), r),
		children: /* @__PURE__ */ a("div", {
			className: H("min-w-0 [&_img]:block [&_img]:h-auto [&_img]:w-full", e && H("rounded-lg border bg-card text-card-foreground", "overflow-hidden shadow-overlay")),
			children: n
		})
	});
}
function pl({ title: t, description: n, align: r = "start", width: i = "default", tone: s = "default", className: c, children: l, ...u }) {
	let d = e.useId(), f = t || n;
	return /* @__PURE__ */ a("section", {
		"data-slot": "site-section",
		"aria-labelledby": t ? d : void 0,
		className: H("py-16 sm:py-24", s === "muted" && "border-y bg-muted/40", c),
		...u,
		children: /* @__PURE__ */ o("div", {
			className: H(Qc, i === "narrow" && "max-w-3xl", "grid gap-10 sm:gap-12"),
			children: [f && /* @__PURE__ */ o("header", {
				className: H("scroll-reveal grid max-w-2xl gap-3", r === "center" && "mx-auto text-center"),
				children: [t && /* @__PURE__ */ a("h2", {
					id: d,
					className: sl,
					children: t
				}), n && /* @__PURE__ */ a("p", {
					className: cl,
					children: n
				})]
			}), l]
		})
	});
}
function ml({ title: e, description: t, actions: n, command: r, media: i, mediaFrame: s = !0, layout: c = "centered", background: l, className: u, ...d }) {
	if (c === "split" && !i) throw Error("Hero: layout=\"split\" needs media");
	let f = c === "split";
	return /* @__PURE__ */ o("section", {
		"data-slot": "site-hero",
		className: H("relative isolate pt-16 pb-16 sm:pt-24 sm:pb-24", u),
		...d,
		children: [l && /* @__PURE__ */ a("div", {
			"aria-hidden": !0,
			className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",
			children: /* @__PURE__ */ a("div", {
				className: "scroll-sink absolute inset-0",
				children: l
			})
		}), /* @__PURE__ */ o("div", {
			className: H(Qc, "grid gap-12", f && "items-center lg:grid-cols-2 lg:gap-16"),
			children: [/* @__PURE__ */ o("div", {
				className: H("scroll-recede grid gap-5", !f && "mx-auto max-w-3xl justify-items-center text-center"),
				children: [
					/* @__PURE__ */ a("h1", {
						className: H(ol, ll),
						style: ul(0),
						children: e
					}),
					t && /* @__PURE__ */ a("p", {
						className: H(cl, "max-w-xl", ll),
						style: ul(1),
						children: t
					}),
					n && /* @__PURE__ */ a("div", {
						className: H("mt-2 flex flex-wrap gap-3", ll),
						style: ul(2),
						children: n
					}),
					r && /* @__PURE__ */ a(rl, {
						code: r,
						prompt: !0,
						className: H("mt-1 w-full max-w-xl", ll),
						style: ul(3)
					})
				]
			}), i && /* @__PURE__ */ a(fl, {
				frame: s,
				stage: 0,
				className: ll,
				style: ul(f ? 1 : 4),
				children: i
			})]
		})]
	});
}
function hl({ rows: e, mediaFrame: t = !0, className: n, ...r }) {
	if (e.length === 0) throw Error("FeatureSplit: needs at least one row");
	return /* @__PURE__ */ a("div", {
		"data-slot": "feature-split",
		className: H("grid gap-20 sm:gap-24", n),
		...r,
		children: e.map((e, n) => /* @__PURE__ */ o("div", {
			className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ o("div", {
				className: H("scroll-reveal grid content-start gap-3", n % 2 == 1 && "lg:order-last"),
				children: [
					/* @__PURE__ */ a("h3", {
						className: "text-xl font-semibold tracking-tight text-balance sm:text-2xl",
						children: e.title
					}),
					/* @__PURE__ */ a("p", {
						className: "text-base text-pretty text-muted-foreground",
						children: e.description
					}),
					e.points && e.points.length > 0 && /* @__PURE__ */ a("ul", {
						className: "mt-2 grid gap-2",
						children: e.points.map((e) => /* @__PURE__ */ o("li", {
							className: "flex gap-2 text-sm",
							children: [/* @__PURE__ */ a(M, {
								"aria-hidden": !0,
								className: "mt-0.5 size-4 shrink-0 text-success-fg"
							}), e]
						}, e))
					})
				]
			}), /* @__PURE__ */ a(fl, {
				frame: t,
				stage: n + 1,
				className: "scroll-drift",
				children: e.media
			})]
		}, e.title))
	});
}
function gl({ label: e, logos: t, className: n, ...r }) {
	if (t.length === 0) throw Error("LogoStrip: needs at least one logo");
	return /* @__PURE__ */ o("div", {
		"data-slot": "logo-strip",
		className: H("scroll-reveal grid gap-6 text-center", n),
		...r,
		children: [e && /* @__PURE__ */ a("p", {
			className: "text-sm text-muted-foreground",
			children: e
		}), /* @__PURE__ */ a("ul", {
			className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-muted-foreground [&_img]:h-7 [&_img]:w-auto [&_svg]:h-7 [&_svg]:w-auto",
			children: t.map(({ name: e, logo: t }) => /* @__PURE__ */ a("li", {
				"aria-label": e,
				children: t
			}, e))
		})]
	});
}
var _l = [
	"",
	"md:max-w-sm",
	"md:grid-cols-2",
	"md:grid-cols-3",
	"md:grid-cols-2 lg:grid-cols-4"
];
function vl({ plans: e, className: t, ...n }) {
	if (e.length < 1 || e.length > 4) throw Error("PricingTable: takes 1 to 4 plans, got " + e.length);
	al("PricingTable", e.map((e) => e.id));
	let r = e.filter((e) => e.highlighted).length;
	if (r > 1) throw Error("PricingTable: at most one plan is highlighted, got " + r);
	let i = G().site;
	return /* @__PURE__ */ a("ul", {
		"data-slot": "pricing-table",
		className: H("mx-auto grid w-full gap-6", _l[e.length], t),
		...n,
		children: e.map((e, t) => /* @__PURE__ */ o("li", {
			id: e.id,
			style: dl(t),
			className: H(_n, "scroll-reveal flex flex-col gap-6 p-6", e.highlighted && "border-primary ring-1 ring-primary"),
			children: [
				/* @__PURE__ */ o("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ o("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ a("h3", {
							className: "text-base font-semibold",
							children: e.name
						}), e.highlighted && /* @__PURE__ */ a(Gt, { children: i.recommended })]
					}), e.description && /* @__PURE__ */ a("p", {
						className: "text-sm text-muted-foreground",
						children: e.description
					})]
				}),
				/* @__PURE__ */ o("p", {
					className: "flex items-baseline gap-1",
					children: [/* @__PURE__ */ a("span", {
						className: "text-3xl font-semibold tracking-tight tabular-nums",
						children: e.price
					}), e.period && /* @__PURE__ */ a("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				/* @__PURE__ */ a("ul", {
					className: "grid flex-1 content-start gap-2",
					children: e.features.map((e) => /* @__PURE__ */ o("li", {
						className: "flex gap-2 text-sm",
						children: [/* @__PURE__ */ a(M, {
							"aria-hidden": !0,
							className: "mt-0.5 size-4 shrink-0 text-success-fg"
						}), e]
					}, e))
				}),
				/* @__PURE__ */ a("div", {
					className: "grid [&>*]:w-full",
					children: e.action
				})
			]
		}, e.id))
	});
}
function yl({ items: e, className: t, ...n }) {
	if (e.length === 0) throw Error("Faq: needs at least one item");
	return al("Faq", e.map((e) => e.id)), /* @__PURE__ */ a("div", {
		"data-slot": "faq",
		className: H("scroll-reveal divide-y border-y", t),
		...n,
		children: e.map((e) => /* @__PURE__ */ o("details", {
			id: e.id,
			className: "group",
			children: [/* @__PURE__ */ o("summary", {
				className: "flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-medium outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring/80 [&::-webkit-details-marker]:hidden",
				children: [e.question, /* @__PURE__ */ a(ae, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
				})]
			}), /* @__PURE__ */ a("div", {
				className: "pb-5 text-sm text-pretty text-muted-foreground [&_a]:text-link [&_a]:underline [&_a]:underline-offset-4",
				children: e.answer
			})]
		}, e.id))
	});
}
function bl({ title: e, description: t, actions: n, className: r, ...i }) {
	return /* @__PURE__ */ o("div", {
		"data-slot": "cta-band",
		className: H("scroll-reveal grid justify-items-center gap-4 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16", xn(3), r),
		...i,
		children: [
			/* @__PURE__ */ a("h2", {
				className: sl,
				children: e
			}),
			t && /* @__PURE__ */ a("p", {
				className: H(cl, "max-w-xl"),
				children: t
			}),
			/* @__PURE__ */ a("div", {
				className: "mt-2 flex flex-wrap justify-center gap-3",
				children: n
			})
		]
	});
}
var xl = {
	2: "lg:grid-cols-2",
	3: "lg:grid-cols-3",
	4: "lg:grid-cols-4"
};
function Sl({ items: e, className: t, ...n }) {
	if (e.length < 2 || e.length > 4) throw Error("Specs: takes 2 to 4 items, got " + e.length);
	return /* @__PURE__ */ a("dl", {
		"data-slot": "specs",
		className: H("grid grid-cols-2 gap-y-8", xl[e.length], t),
		...n,
		children: e.map((e, t) => /* @__PURE__ */ o("div", {
			style: dl(t),
			className: "scroll-reveal flex flex-col-reverse gap-2 border-l-2 border-primary/40 pr-4 pl-4 sm:pl-6",
			children: [/* @__PURE__ */ a("dt", {
				className: "text-sm text-pretty text-muted-foreground",
				children: e.label
			}), /* @__PURE__ */ o("dd", {
				className: "flex items-baseline gap-1",
				children: [/* @__PURE__ */ a("span", {
					className: "text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl",
					children: e.value
				}), e.unit && /* @__PURE__ */ a("span", {
					className: "text-base text-muted-foreground",
					children: e.unit
				})]
			})]
		}, e.label))
	});
}
function Cl({ links: e, className: t, ...n }) {
	if (e.length < 2 || e.length > 4) throw Error("PageLinks: takes 2 to 4 links, got " + e.length);
	return /* @__PURE__ */ a("ul", {
		"data-slot": "page-links",
		className: H("grid gap-4 sm:grid-cols-2", xl[e.length], t),
		...n,
		children: e.map((e, t) => /* @__PURE__ */ o("li", {
			style: dl(t),
			className: H(_n, "group scroll-reveal relative grid gap-1.5 p-5 transition-colors hover:bg-accent"),
			children: [/* @__PURE__ */ o(Z, {
				href: e.href,
				className: "flex items-center justify-between gap-2 rounded-sm text-base font-semibold outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-[1.5px] focus-visible:after:ring-ring/80",
				children: [e.title, /* @__PURE__ */ a(te, {
					"aria-hidden": !0,
					className: "size-4 text-muted-foreground transition-transform duration-200 ease-settle group-hover:translate-x-1 group-hover:text-foreground"
				})]
			}), /* @__PURE__ */ a("p", {
				className: "text-sm text-pretty text-muted-foreground",
				children: e.description
			})]
		}, e.href))
	});
}
function wl({ items: e, columns: t = 3, className: n, ...r }) {
	if (e.length < 2) throw Error("FeatureList: needs at least 2 items, got " + e.length);
	let i = e.filter((e) => e.media !== void 0).length;
	if (i !== 0 && i !== e.length) throw Error("FeatureList: give every item media or none, got " + i + " of " + e.length);
	return /* @__PURE__ */ a("ul", {
		"data-slot": "feature-list",
		className: H("grid gap-x-8 gap-y-10 sm:grid-cols-2", t === 3 && "lg:grid-cols-3", i > 0 && "gap-x-6", n),
		...r,
		children: e.map(({ icon: e, media: t, title: n, description: r }, i) => /* @__PURE__ */ o("li", {
			style: dl(i % 3),
			className: "scroll-reveal grid content-start gap-2",
			children: [
				t !== void 0 && /* @__PURE__ */ a("div", {
					"aria-hidden": !0,
					className: H("mb-3 h-60 rounded-2xl p-4", xn(i + 1)),
					children: /* @__PURE__ */ a("div", {
						className: H("rounded-lg border bg-card text-card-foreground", "h-full overflow-hidden shadow-overlay"),
						children: t
					})
				}),
				/* @__PURE__ */ o("h3", {
					className: "flex items-center gap-2 text-base font-semibold",
					children: [e && /* @__PURE__ */ a(e, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-muted-foreground"
					}), n]
				}),
				/* @__PURE__ */ a("p", {
					className: "text-sm text-pretty text-muted-foreground",
					children: r
				})
			]
		}, n))
	});
}
function Tl({ quote: e, name: t, role: n, avatar: r, logo: i, metric: s, className: c, ...l }) {
	if (t.trim() === "" || n.trim() === "") throw Error("Testimonial: name and role must be non-empty");
	if (s && (s.value.trim() === "" || s.label.trim() === "")) throw Error("Testimonial: metric needs a value and a label");
	return /* @__PURE__ */ o("figure", {
		"data-slot": "testimonial",
		className: H(_n, "scroll-reveal grid overflow-hidden md:grid-cols-[minmax(0,1fr)_auto]", c),
		...l,
		children: [/* @__PURE__ */ o("div", {
			className: "grid content-start gap-6 p-6 sm:p-10",
			children: [
				i && /* @__PURE__ */ a("div", {
					className: "text-muted-foreground [&_img]:h-6 [&_img]:w-auto [&_svg]:h-6 [&_svg]:w-auto",
					children: i
				}),
				/* @__PURE__ */ a("blockquote", {
					className: "text-xl font-medium tracking-tight text-balance sm:text-2xl",
					children: e
				}),
				/* @__PURE__ */ o("figcaption", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ a(Ht, {
						name: t,
						src: r,
						className: "size-11"
					}), /* @__PURE__ */ o("div", {
						className: "grid",
						children: [/* @__PURE__ */ a("span", {
							className: "text-sm font-medium",
							children: t
						}), /* @__PURE__ */ a("span", {
							className: "text-sm text-muted-foreground",
							children: n
						})]
					})]
				})
			]
		}), s && /* @__PURE__ */ o("div", {
			className: H("grid content-center gap-2 p-6 sm:p-10 md:w-72", xn(0)),
			children: [/* @__PURE__ */ a("span", {
				className: "text-5xl font-semibold tracking-tight tabular-nums",
				children: s.value
			}), /* @__PURE__ */ a("span", {
				className: "text-sm text-pretty text-muted-foreground",
				children: s.label
			})]
		})]
	});
}
//#endregion
//#region src/blocks/site/long-form.tsx
var El = H("text-base leading-7 text-pretty", "[&>*+*]:mt-5", "[&_h2]:mt-12 [&_h2]:scroll-mt-20 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight", "[&_h3]:mt-8 [&_h3]:scroll-mt-20 [&_h3]:text-base [&_h3]:font-semibold", "[&_h2+*]:mt-3 [&_h3+*]:mt-2", "[&_a]:text-link [&_a]:underline [&_a]:underline-offset-4", "[&_strong]:font-semibold", "[&_ul]:list-disc [&_ol]:list-decimal [&_ul,&_ol]:pl-6 [&_li]:mt-2 [&_li]:pl-1 [&_li::marker]:text-muted-foreground", "[&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground", "[&_code]:rounded-sm [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm", "[&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:bg-card [&_pre]:p-4 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0", "[&_hr]:my-10 [&_hr]:border-border", "[&_img]:rounded-lg [&_img]:border", "[&_table]:w-full [&_table]:text-sm [&_th]:border-b [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_td]:border-b [&_td]:py-2");
function Dl({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "prose",
		className: H(El, e),
		...t
	});
}
var Ol = "text-3xl font-semibold tracking-tight text-balance sm:text-4xl";
function kl({ title: e, updated: t, intro: n, sections: r, className: i, ...s }) {
	if (r.length === 0) throw Error("LegalPage: needs at least one section");
	if (Number.isNaN(t.getTime())) throw Error("LegalPage: updated is an invalid date");
	al("LegalPage", r.map((e) => e.id));
	let c = G().site;
	return /* @__PURE__ */ o("article", {
		"data-slot": "legal-page",
		className: H(Qc, "py-16 sm:py-24", i),
		...s,
		children: [/* @__PURE__ */ o("header", {
			className: "grid max-w-3xl gap-3 border-b pb-8",
			children: [/* @__PURE__ */ a("h1", {
				className: Ol,
				children: e
			}), /* @__PURE__ */ a("p", {
				className: "text-sm text-muted-foreground",
				children: /* @__PURE__ */ a("time", {
					dateTime: t.toISOString().slice(0, 10),
					children: c.lastUpdated(t)
				})
			})]
		}), /* @__PURE__ */ o("div", {
			className: "mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16",
			children: [/* @__PURE__ */ o("nav", {
				"aria-label": c.contents,
				className: "lg:sticky lg:top-20 lg:self-start",
				children: [/* @__PURE__ */ a("h2", {
					className: "mb-3 text-sm font-medium",
					children: c.contents
				}), /* @__PURE__ */ a("ol", {
					className: "grid list-decimal gap-2 pl-5 text-sm text-muted-foreground marker:tabular-nums",
					children: r.map((e) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a("a", {
						href: `#${e.id}`,
						className: "rounded-sm outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
						children: e.title
					}) }, e.id))
				})]
			}), /* @__PURE__ */ o(Dl, {
				className: "max-w-3xl",
				children: [n && /* @__PURE__ */ a("div", { children: n }), r.map((e, t) => /* @__PURE__ */ o("section", {
					"aria-labelledby": e.id,
					children: [/* @__PURE__ */ o("h2", {
						id: e.id,
						children: [
							t + 1,
							". ",
							e.title
						]
					}), e.body]
				}, e.id))]
			})]
		})]
	});
}
function Al(e) {
	if (Number.isNaN(e.getTime())) throw Error("published is an invalid date");
	return e.toISOString().slice(0, 10);
}
function jl({ title: e, description: t, author: n, published: r, readingMinutes: i, cover: s, backHref: c = "/blog", className: l, children: u, ...d }) {
	let f = G().site, p = [/* @__PURE__ */ a("time", {
		dateTime: Al(r),
		children: f.published(r)
	}, "date"), i !== void 0 && /* @__PURE__ */ a("span", { children: f.readingTime(i) }, "time")].filter(Boolean);
	return /* @__PURE__ */ o("article", {
		"data-slot": "article-page",
		className: H(Qc, "py-12 sm:py-20", l),
		...d,
		children: [
			/* @__PURE__ */ o("div", {
				className: "mx-auto grid max-w-2xl gap-5",
				children: [
					c && /* @__PURE__ */ o(Z, {
						href: c,
						className: "inline-flex w-fit items-center gap-1.5 rounded-sm text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
						children: [/* @__PURE__ */ a(ee, {
							"aria-hidden": !0,
							className: "size-4"
						}), f.allPosts]
					}),
					/* @__PURE__ */ a("h1", {
						className: Ol,
						children: e
					}),
					t && /* @__PURE__ */ a("p", {
						className: "text-lg text-pretty text-muted-foreground",
						children: t
					}),
					/* @__PURE__ */ o("div", {
						className: "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground",
						children: [n && /* @__PURE__ */ o("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ a(Ht, {
								name: n.name,
								src: n.avatar,
								className: "size-8"
							}), /* @__PURE__ */ o("span", {
								className: "grid",
								children: [/* @__PURE__ */ a("span", {
									className: "font-medium text-foreground",
									children: n.name
								}), n.role && /* @__PURE__ */ a("span", {
									className: "text-xs",
									children: n.role
								})]
							})]
						}), /* @__PURE__ */ a("span", {
							className: "flex items-center gap-2 [&>*+*]:before:mr-2 [&>*+*]:before:content-['·']",
							children: p
						})]
					})
				]
			}),
			s && /* @__PURE__ */ a("div", {
				className: "mx-auto mt-10 max-w-4xl overflow-hidden rounded-lg border [&_img]:block [&_img]:h-auto [&_img]:w-full",
				children: s
			}),
			/* @__PURE__ */ a(Dl, {
				className: "mx-auto mt-10 max-w-2xl",
				children: u
			})
		]
	});
}
function Ml({ posts: e, className: t, ...n }) {
	let r = G().site;
	return e.length === 0 ? /* @__PURE__ */ a("p", {
		className: "border-y py-10 text-center text-sm text-muted-foreground",
		children: r.noPosts
	}) : /* @__PURE__ */ a("ol", {
		"data-slot": "post-list",
		className: H("divide-y border-y", t),
		...n,
		children: e.map((e) => /* @__PURE__ */ o("li", {
			className: "relative grid gap-2 py-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8",
			children: [/* @__PURE__ */ a("time", {
				dateTime: Al(e.published),
				className: "text-sm text-muted-foreground tabular-nums sm:pt-0.5",
				children: r.published(e.published)
			}), /* @__PURE__ */ o("div", {
				className: "grid gap-1.5",
				children: [
					/* @__PURE__ */ a("h2", {
						className: "text-lg font-semibold tracking-tight",
						children: /* @__PURE__ */ a(Z, {
							href: e.href,
							className: "rounded-sm outline-none after:absolute after:inset-0 hover:underline hover:underline-offset-4 focus-visible:ring-[1.5px] focus-visible:ring-ring/80",
							children: e.title
						})
					}),
					e.description && /* @__PURE__ */ a("p", {
						className: "text-sm text-pretty text-muted-foreground",
						children: e.description
					}),
					(e.author || e.readingMinutes !== void 0) && /* @__PURE__ */ o("p", {
						className: "flex gap-2 text-xs text-muted-foreground [&>*+*]:before:mr-2 [&>*+*]:before:content-['·']",
						children: [e.author && /* @__PURE__ */ a("span", { children: e.author }), e.readingMinutes !== void 0 && /* @__PURE__ */ a("span", { children: r.readingTime(e.readingMinutes) })]
					})
				]
			})]
		}, e.href))
	});
}
//#endregion
//#region src/blocks/site/contact-form.tsx
var Nl = (e, t) => B.object({
	topic: B.string().optional(),
	name: B.string().trim().min(1, e.nameRequired),
	email: B.email(e.invalidEmail),
	message: B.string().trim().min(10, e.messageTooShort)
}).superRefine((n, r) => {
	!t || t.length === 0 || (!n.topic || !t.includes(n.topic)) && r.addIssue({
		code: "custom",
		path: ["topic"],
		message: e.topicRequired
	});
});
function Pl(e) {
	if (!e) return;
	if (e.length < 2 || e.length > 6) throw Error("ContactForm: topics takes 2 to 6, got " + e.length);
	let t = e.map((e) => e.value);
	if (new Set(t).size !== t.length) throw Error("ContactForm: topic values must be unique, got " + t.join(", "));
}
function Fl({ onSubmit: t, error: n, sent: r, topics: i, className: s, ...c }) {
	Pl(i);
	let l = G().site, u = e.useMemo(() => i?.map((e) => e.value), [i]), d = e.useMemo(() => Nl(l, u), [l, u]), f = ot({
		resolver: z(d),
		defaultValues: {
			topic: void 0,
			name: "",
			email: "",
			message: ""
		}
	}), p = f.formState.isSubmitting;
	return r ? /* @__PURE__ */ o("div", {
		role: "status",
		className: "grid justify-items-center gap-2 rounded-lg border p-8 text-center",
		children: [
			/* @__PURE__ */ a(j, {
				"aria-hidden": !0,
				className: "size-6 text-success-fg"
			}),
			/* @__PURE__ */ a("p", {
				className: "text-base font-semibold",
				children: l.sentTitle
			}),
			/* @__PURE__ */ a("p", {
				className: "text-sm text-muted-foreground",
				children: l.sentDescription
			})
		]
	}) : /* @__PURE__ */ a(fr, {
		...f,
		children: /* @__PURE__ */ o("form", {
			"data-slot": "contact-form",
			onSubmit: f.handleSubmit(t),
			className: H("grid gap-5", s),
			noValidate: !0,
			...c,
			children: [
				n && /* @__PURE__ */ a(U, {
					variant: "danger",
					children: /* @__PURE__ */ a(Mt, { children: n })
				}),
				i && /* @__PURE__ */ a(mr, {
					control: f.control,
					name: "topic",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
						/* @__PURE__ */ a(vr, { children: l.topic }),
						/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(Kr, {
							value: e.value ?? "",
							onValueChange: e.onChange,
							className: "grid gap-2 sm:grid-cols-2",
							children: i.map((e) => /* @__PURE__ */ o("label", {
								className: "flex cursor-pointer items-start gap-3 rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-accent",
								children: [/* @__PURE__ */ a(qr, {
									value: e.value,
									className: "mt-0.5"
								}), /* @__PURE__ */ o("span", {
									className: "grid gap-0.5",
									children: [/* @__PURE__ */ a("span", {
										className: "text-sm font-medium",
										children: e.label
									}), e.description && /* @__PURE__ */ a("span", {
										className: "text-xs text-pretty text-muted-foreground",
										children: e.description
									})]
								})]
							}, e.value))
						}) }),
						/* @__PURE__ */ a(xr, {})
					] })
				}),
				/* @__PURE__ */ o("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [/* @__PURE__ */ a(mr, {
						control: f.control,
						name: "name",
						render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
							/* @__PURE__ */ a(vr, { children: l.name }),
							/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
								autoComplete: "name",
								...e
							}) }),
							/* @__PURE__ */ a(xr, {})
						] })
					}), /* @__PURE__ */ a(mr, {
						control: f.control,
						name: "email",
						render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
							/* @__PURE__ */ a(vr, { children: l.email }),
							/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
								type: "email",
								autoComplete: "email",
								...e
							}) }),
							/* @__PURE__ */ a(xr, {})
						] })
					})]
				}),
				/* @__PURE__ */ a(mr, {
					control: f.control,
					name: "message",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, { children: [
						/* @__PURE__ */ a(vr, { children: l.message }),
						/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(Na, {
							rows: 6,
							placeholder: l.messagePlaceholder,
							...e
						}) }),
						/* @__PURE__ */ a(xr, {})
					] })
				}),
				/* @__PURE__ */ o(q, {
					type: "submit",
					className: "w-full sm:w-fit",
					disabled: p,
					children: [p && /* @__PURE__ */ a(L, { className: "animate-spin" }), l.send]
				})
			]
		})
	});
}
var Il = (e) => e ? "font-mono text-xs leading-5 [overflow-wrap:anywhere]" : "truncate";
function Ll({ channels: e, className: t, ...n }) {
	if (e.length === 0) throw Error("ContactChannels: needs at least one channel");
	return /* @__PURE__ */ a("dl", {
		"data-slot": "contact-channels",
		className: H("grid gap-6", t),
		...n,
		children: e.map(({ icon: e, label: t, value: n, href: r, note: i, copy: s, mono: c }) => /* @__PURE__ */ o("div", {
			className: "grid min-w-0 gap-0.5",
			children: [
				/* @__PURE__ */ o("dt", {
					className: "flex items-center gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ a(e, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-muted-foreground"
					}), t]
				}),
				/* @__PURE__ */ o("dd", {
					className: "flex min-w-0 items-start gap-1",
					children: [r ? /* @__PURE__ */ a(Z, {
						href: r,
						className: H("rounded-sm text-sm text-link outline-none hover:underline hover:underline-offset-4 focus-visible:ring-[1.5px] focus-visible:ring-ring/80", Il(c)),
						children: n
					}) : /* @__PURE__ */ a("span", {
						className: H("text-sm", Il(c)),
						children: n
					}), s && /* @__PURE__ */ a(Rc, {
						value: n,
						label: t,
						size: "icon-xs"
					})]
				}),
				i && /* @__PURE__ */ a("dd", {
					className: "text-xs text-pretty text-muted-foreground",
					children: i
				})
			]
		}, t))
	});
}
//#endregion
//#region src/blocks/site/visuals.tsx
function Rl({ title: e, meta: t, className: n, children: r, ...i }) {
	if (e.trim() === "") throw Error("WindowFrame: title must be non-empty");
	return /* @__PURE__ */ o("div", {
		"data-slot": "window-frame",
		className: H(_n, "min-w-0 overflow-hidden text-left shadow-overlay", n),
		...i,
		children: [/* @__PURE__ */ o("div", {
			className: "flex h-10 items-center gap-3 border-b bg-muted/40 px-4",
			children: [/* @__PURE__ */ a("span", {
				className: "min-w-0 truncate font-mono text-xs text-muted-foreground",
				children: e
			}), t && /* @__PURE__ */ a("span", {
				className: "ml-auto flex shrink-0 items-center gap-2",
				children: t
			})]
		}), /* @__PURE__ */ a("div", {
			className: "min-w-0",
			children: r
		})]
	});
}
var zl = {
	command: "text-foreground",
	output: "text-muted-foreground",
	ok: "text-success-fg",
	warn: "text-warning-fg",
	error: "text-danger-fg",
	comment: "text-muted-foreground italic"
}, Bl = {
	command: 700,
	output: 160,
	ok: 260,
	warn: 260,
	error: 260,
	comment: 400
};
function Vl({ title: t, lines: n, play: r, meta: i, className: s, ...c }) {
	if (n.length === 0) throw Error("Terminal: needs at least one line");
	for (let e of n) if (!(e.kind in zl)) throw Error("Terminal: unknown line kind " + JSON.stringify(e.kind) + ", expected one of " + Object.keys(zl).join(", "));
	let l = e.useRef(null), [u, d] = e.useState(r ? 0 : n.length);
	e.useEffect(() => {
		if (!r) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			d(n.length);
			return;
		}
		let e = l.current;
		if (!e) return;
		let t, i = new IntersectionObserver(([e]) => {
			if (!e?.isIntersecting) return;
			i.disconnect();
			let r = 0, a = () => {
				r += 1, d(r), r < n.length && (t = setTimeout(a, Bl[n[r - 1].kind]));
			};
			t = setTimeout(a, 300);
		}, { threshold: .4 });
		return i.observe(e), () => {
			i.disconnect(), clearTimeout(t);
		};
	}, [r, n]);
	let f = u < n.length;
	return /* @__PURE__ */ o(Rl, {
		ref: l,
		title: t,
		meta: i,
		className: s,
		...c,
		children: [/* @__PURE__ */ a("pre", {
			className: "sr-only",
			children: n.map((e) => (e.kind === "command" ? "$ " : "") + e.text).join("\n")
		}), /* @__PURE__ */ o("pre", {
			"aria-hidden": !0,
			style: r ? { minHeight: (n.length + 1) * 24 } : void 0,
			className: "overflow-x-auto bg-card px-4 py-3 font-mono text-[13px] leading-6",
			children: [n.slice(0, u).map((e, t) => /* @__PURE__ */ o("span", {
				className: H("block min-h-6 whitespace-pre", zl[e.kind]),
				children: [e.kind === "command" && /* @__PURE__ */ a("span", {
					className: "text-muted-foreground select-none",
					children: "$ "
				}), e.text]
			}, t)), f && /* @__PURE__ */ a("span", { className: "inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-foreground/70" })]
		})]
	});
}
//#endregion
//#region src/blocks/site/plan-comparison.tsx
function Hl({ plans: e, groups: t }) {
	if (e.length < 2 || e.length > 4) throw Error("PlanComparison: compares 2 to 4 plans, got " + e.length);
	if (al("PlanComparison", e.map((e) => e.id)), e.filter((e) => e.highlighted).length > 1) throw Error("PlanComparison: at most one plan is highlighted");
	if (t.length === 0) throw Error("PlanComparison: needs at least one group");
	let n = e.map((e) => e.id);
	for (let e of t) {
		if (e.rows.length === 0) throw Error("PlanComparison: group " + JSON.stringify(e.title) + " has no rows");
		for (let t of e.rows) {
			let e = Object.keys(t.values), r = n.filter((t) => !e.includes(t)), i = e.filter((e) => !n.includes(e));
			if (r.length || i.length) throw Error("PlanComparison: row " + JSON.stringify(t.feature) + " needs a value for exactly " + n.join(", ") + (r.length ? "; missing " + r.join(", ") : "") + (i.length ? "; unknown " + i.join(", ") : ""));
		}
	}
}
function Ul(e) {
	Hl(e);
	let { plans: t, groups: n, className: r, ...s } = e, c = G().site, l = (e) => e.highlighted && "bg-accent/50";
	return /* @__PURE__ */ a("div", {
		"data-slot": "plan-comparison",
		className: H("min-w-0", r),
		...s,
		children: /* @__PURE__ */ o(xa, {
			className: "min-w-[36rem] table-fixed",
			children: [/* @__PURE__ */ a(Sa, { children: /* @__PURE__ */ o(X, {
				className: "hover:bg-transparent",
				children: [/* @__PURE__ */ a(Ta, {
					className: "sticky left-0 z-10 w-[40%] bg-background",
					children: /* @__PURE__ */ a("span", {
						className: "sr-only",
						children: c.feature
					})
				}), t.map((e) => /* @__PURE__ */ a(Ta, {
					scope: "col",
					className: H("text-center text-sm font-semibold text-foreground", l(e)),
					children: /* @__PURE__ */ o("span", {
						className: "inline-flex flex-wrap items-center justify-center gap-2",
						children: [e.name, e.highlighted && /* @__PURE__ */ a(Gt, { children: c.recommended })]
					})
				}, e.id))]
			}) }), n.map((e) => /* @__PURE__ */ o(Ca, { children: [/* @__PURE__ */ a(X, {
				className: "hover:bg-transparent",
				children: /* @__PURE__ */ a(Ta, {
					scope: "colgroup",
					colSpan: t.length + 1,
					className: H(vo, "sticky left-0 bg-background pt-6"),
					children: e.title
				})
			}), e.rows.map((e) => /* @__PURE__ */ o(X, {
				className: "hover:bg-transparent",
				children: [/* @__PURE__ */ o(Ta, {
					scope: "row",
					className: "sticky left-0 z-10 h-auto bg-background py-3 align-top font-normal whitespace-normal text-foreground",
					children: [e.feature, e.hint && /* @__PURE__ */ a("span", {
						className: "block text-xs text-muted-foreground",
						children: e.hint
					})]
				}), t.map((t) => {
					let n = e.values[t.id];
					return /* @__PURE__ */ a(Ea, {
						className: H("py-3 text-center align-top whitespace-normal", l(t)),
						children: n === !0 ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(M, {
							"aria-hidden": !0,
							className: "mx-auto size-4 text-success-fg"
						}), /* @__PURE__ */ a("span", {
							className: "sr-only",
							children: c.included
						})] }) : n === !1 ? /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(Me, {
							"aria-hidden": !0,
							className: "mx-auto size-4 text-muted-foreground"
						}), /* @__PURE__ */ a("span", {
							className: "sr-only",
							children: c.notIncluded
						})] }) : /* @__PURE__ */ a("span", {
							className: "tabular-nums",
							children: n
						})
					}, t.id);
				})]
			}, e.feature))] }, e.title))]
		})
	});
}
//#endregion
//#region src/blocks/site/newsletter.tsx
var Wl = (e) => B.object({ email: B.email(e.invalidEmail) });
function Gl({ onSubmit: t, error: n, sent: r, className: i, ...s }) {
	let c = G().site, l = e.useMemo(() => Wl(c), [c]), u = ot({
		resolver: z(l),
		defaultValues: { email: "" }
	}), d = u.formState.isSubmitting;
	return r ? /* @__PURE__ */ o("p", {
		role: "status",
		className: H("flex items-center gap-2 text-sm", i),
		children: [/* @__PURE__ */ a(j, {
			"aria-hidden": !0,
			className: "size-4 shrink-0 text-success-fg"
		}), c.subscribed]
	}) : /* @__PURE__ */ a(fr, {
		...u,
		children: /* @__PURE__ */ o("form", {
			"data-slot": "newsletter-form",
			onSubmit: u.handleSubmit(t),
			noValidate: !0,
			className: H("grid gap-2", i),
			...s,
			children: [/* @__PURE__ */ o("div", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-start",
				children: [/* @__PURE__ */ a(mr, {
					control: u.control,
					name: "email",
					render: ({ field: e }) => /* @__PURE__ */ o(_r, {
						className: "flex-1",
						children: [
							/* @__PURE__ */ a(vr, {
								className: "sr-only",
								children: c.newsletterEmail
							}),
							/* @__PURE__ */ a(yr, { children: /* @__PURE__ */ a(J, {
								type: "email",
								autoComplete: "email",
								placeholder: c.newsletterPlaceholder,
								...e
							}) }),
							/* @__PURE__ */ a(xr, {})
						]
					})
				}), /* @__PURE__ */ o(q, {
					type: "submit",
					variant: "outline",
					disabled: d,
					className: "shrink-0",
					children: [d && /* @__PURE__ */ a(L, { className: "animate-spin" }), c.subscribe]
				})]
			}), n && /* @__PURE__ */ a("p", {
				role: "alert",
				className: "text-sm text-danger-fg",
				children: n
			})]
		})
	});
}
function Kl({ title: t, description: n, onSubmit: r, error: i, sent: s, className: c, ...l }) {
	let u = e.useId();
	return /* @__PURE__ */ a("section", {
		"data-slot": "newsletter-band",
		"aria-labelledby": u,
		className: H("py-16 sm:py-24", c),
		...l,
		children: /* @__PURE__ */ a("div", {
			className: Qc,
			children: /* @__PURE__ */ o("div", {
				className: H("scroll-reveal grid gap-6 rounded-2xl p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-12", xn(1)),
				children: [/* @__PURE__ */ o("div", {
					className: "grid gap-1.5",
					children: [/* @__PURE__ */ a("h2", {
						id: u,
						className: "text-xl font-semibold tracking-tight text-balance",
						children: t
					}), n && /* @__PURE__ */ a("p", {
						className: "text-sm text-pretty text-muted-foreground",
						children: n
					})]
				}), /* @__PURE__ */ a(Gl, {
					onSubmit: r,
					error: i,
					sent: s
				})]
			})
		})
	});
}
//#endregion
//#region src/lib/strings-pt.ts
var ql = new Intl.NumberFormat("pt-PT"), $ = (e) => ql.format(e), Jl = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
}), Yl = new Intl.NumberFormat("pt-PT", {
	style: "percent",
	maximumFractionDigits: 0
}), Xl = new Intl.DateTimeFormat("pt-PT", {
	month: "long",
	year: "numeric"
}), Zl = new Intl.DateTimeFormat("pt-PT", { month: "long" }), Ql = new Intl.DateTimeFormat("pt-PT", { weekday: "short" }), $l = new Intl.DateTimeFormat("pt-PT", { dateStyle: "medium" }), eu = new Intl.DateTimeFormat("pt-PT", {
	dateStyle: "medium",
	timeStyle: "short"
}), tu = {
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
		date: (e) => $l.format(e),
		dateTime: (e) => eu.format(e),
		fileSize: (e) => en(e, $),
		percent: (e) => Yl.format(e / 100),
		month: (e) => Xl.format(e),
		monthName: (e) => Zl.format(e),
		weekday: (e) => Ql.format(e)
	},
	dashboard: {
		change: (e) => Jl.format(e / 100),
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
			...kt,
			options: {
				...kt.options,
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
		uploadedOn: (e) => `Carregado a ${$l.format(e)}`
	},
	site: {
		skipToContent: "Saltar para o conteúdo",
		menu: "Menu",
		mainNav: "Principal",
		footerNav: "Rodapé",
		copyright: (e, t) => `© ${e} ${t}`,
		contents: "Índice",
		lastUpdated: (e) => `Última atualização a ${$l.format(e)}`,
		published: (e) => $l.format(e),
		readingTime: (e) => `${$(e)} min de leitura`,
		allPosts: "Todos os artigos",
		noPosts: "Ainda não há nada publicado.",
		recommended: "Recomendado",
		newsletterEmail: "Endereço de email",
		newsletterPlaceholder: "nome@empresa.pt",
		subscribe: "Subscrever",
		subscribed: "Subscrição feita. Confirme no seu email.",
		feature: "Funcionalidade",
		included: "Incluído",
		notIncluded: "Não incluído",
		name: "Nome",
		email: "Email",
		message: "Mensagem",
		messagePlaceholder: "Em que podemos ajudar?",
		send: "Enviar mensagem",
		sentTitle: "Mensagem enviada",
		sentDescription: "Respondemos para o endereço que indicou.",
		nameRequired: "Indique o seu nome.",
		invalidEmail: "Indique um email como nome@exemplo.pt.",
		messageTooShort: "Escreva pelo menos 10 caracteres.",
		topic: "Sobre o que é?",
		topicRequired: "Escolha o assunto da mensagem."
	}
};
//#endregion
export { Dc as ActivityList, U as Alert, Mt as AlertDescription, jt as AlertTitle, sc as AppShell, jl as ArticlePage, Ua as AuthFooter, Wa as AuthLayout, Ha as AuthLogo, Pt as Avatar, Lt as AvatarBadge, It as AvatarFallback, Rt as AvatarGroup, zt as AvatarGroupCount, Ft as AvatarImage, Ut as AvatarStack, Gt as Badge, sn as Breadcrumb, pn as BreadcrumbEllipsis, ln as BreadcrumbItem, un as BreadcrumbLink, cn as BreadcrumbList, dn as BreadcrumbPage, fn as BreadcrumbSeparator, q as Button, Qo as CALENDAR_SCALES, Lc as COPY_FEEDBACK_MS, mn as Calendar, hn as CalendarDayButton, es as CalendarView, Mn as Card, In as CardAction, Ln as CardContent, Fn as CardDescription, Rn as CardFooter, Nn as CardHeader, Pn as CardTitle, Tn as ChartContainer, kn as ChartLegend, An as ChartLegendContent, En as ChartStyle, Dn as ChartTooltip, On as ChartTooltipContent, zn as Checkbox, Zs as ChipPicker, rl as CodeBlock, mo as Combobox, fo as CommandMenu, yc as ConfirmProvider, Ll as ContactChannels, Fl as ContactForm, Rc as CopyButton, Bc as CopyField, bl as CtaBand, Wo as DATA_TABLE_MODES, Tc as Dashboard, Ec as DashboardPanel, Is as DataTable, Mc as DatePicker, Ic as DateRangePicker, Bn as Dialog, Un as DialogClose, Gn as DialogContent, Yn as DialogDescription, qn as DialogFooter, Kn as DialogHeader, Wn as DialogOverlay, Hn as DialogPortal, Jn as DialogTitle, Vn as DialogTrigger, gc as Drawer, Xn as DropdownMenu, nr as DropdownMenuCheckboxItem, $n as DropdownMenuContent, er as DropdownMenuGroup, tr as DropdownMenuItem, ar as DropdownMenuLabel, Zn as DropdownMenuPortal, rr as DropdownMenuRadioGroup, ir as DropdownMenuRadioItem, or as DropdownMenuSeparator, sr as DropdownMenuShortcut, cr as DropdownMenuSub, ur as DropdownMenuSubContent, lr as DropdownMenuSubTrigger, Qn as DropdownMenuTrigger, ss as EditableText, ho as EmptyState, wc as ErrorBoundary, _o as ErrorState, yl as Faq, wl as FeatureList, hl as FeatureSplit, Wc as FileDrop, to as ForgotPasswordForm, fr as Form, yr as FormControl, br as FormDescription, mr as FormField, _r as FormItem, vr as FormLabel, xr as FormMessage, ml as Hero, J as Input, ks as Kanban, vo as LABEL_CLASS, Qs as LIST_PARAMS, dr as Label, dc as LanguagePicker, kl as LegalPage, Z as Link, Ka as LinkProvider, Ja as LoginForm, gl as LogoStrip, mc as Modal, Bo as NONE, Ns as NewRow, Kl as NewsletterBand, Gl as NewsletterForm, El as PROSE, Sc as PageHeader, Cl as PageLinks, Er as Pagination, Dr as PaginationContent, Mr as PaginationEllipsis, Or as PaginationItem, kr as PaginationLink, jr as PaginationNext, Ar as PaginationPrevious, Ul as PlanComparison, Nr as Popover, Ir as PopoverAnchor, Fr as PopoverContent, zr as PopoverDescription, Lr as PopoverHeader, Rr as PopoverTitle, Pr as PopoverTrigger, Ml as PostList, fc as PreferencesMenu, vl as PricingTable, Wr as Progress, Gr as ProgressRing, Dl as Prose, Kr as RadioGroup, qr as RadioGroupItem, $a as RegisterForm, Qc as SITE_CONTAINER, ac as SOCIAL_PROVIDERS, po as SearchTrigger, pl as Section, bo as SectionLabel, Jr as Select, Qr as SelectContent, Yr as SelectGroup, ei as SelectItem, $r as SelectLabel, ri as SelectScrollDownButton, ni as SelectScrollUpButton, ti as SelectSeparator, Zr as SelectTrigger, Xr as SelectValue, ii as Separator, xi as Sidebar, ki as SidebarContent, Di as SidebarFooter, Ai as SidebarGroup, Mi as SidebarGroupAction, Ni as SidebarGroupContent, ji as SidebarGroupLabel, Ei as SidebarHeader, Ti as SidebarInput, wi as SidebarInset, Pi as SidebarMenu, Ri as SidebarMenuAction, zi as SidebarMenuBadge, Li as SidebarMenuButton, Fi as SidebarMenuItem, Bi as SidebarMenuSkeleton, Vi as SidebarMenuSub, Ui as SidebarMenuSubButton, Hi as SidebarMenuSubItem, bi as SidebarProvider, Ci as SidebarRail, Oi as SidebarSeparator, Si as SidebarTrigger, nl as SiteFooter, tl as SiteLayout, Y as Skeleton, Wi as Slider, oc as SocialButton, Sl as Specs, So as StatTile, ba as Switch, ea as THEMES, ta as THEME_DEFAULT, Ao as TIMELINE_SCALES, xa as Table, Ps as TableAddRow, Ca as TableBody, Da as TableCaption, Ea as TableCell, wa as TableFooter, Ta as TableHead, Sa as TableHeader, X as TableRow, Oa as Tabs, Ma as TabsContent, Aa as TabsList, ja as TabsTrigger, Vl as Terminal, Tl as Testimonial, Na as Textarea, uc as ThemePicker, zo as Timeline, va as Toaster, Fa as Toggle, La as ToggleGroup, Ra as ToggleGroupItem, li as Tooltip, di as TooltipContent, ci as TooltipProvider, ui as TooltipTrigger, on as UIStringsProvider, Gc as UploadList, qc as UploadSlots, Ht as UserAvatar, cs as VIEW_ICON_NAMES, Rl as WindowFrame, za as Wordmark, Qi as ZOOM_DEFAULT, Zi as ZOOM_MAX, Xi as ZOOM_MIN, $i as ZOOM_STEPS, cc as ZoomStepper, _a as antiFlashScript, al as assertAnchors, Wt as badgeVariants, K as buttonVariants, Jo as chipLabel, H as cn, Vo as compare, Nl as contactSchema, ts as csvDelimiter, is as csvValue, Fs as dataTableFeatures, Pc as defaultRangePresets, tn as defaultStrings, os as downloadCsv, go as errorTitle, qo as facetText, eo as forgotPasswordSchema, Nt as initials, wr as inputVariants, Ho as isBlankFilter, Oc as isoDay, Uo as labelsOf, nc as listUrlOf, rc as listUrlProps, qa as loginSchema, Ko as named, Wl as newsletterSchema, Fc as nextRange, $s as parseListUrl, tu as ptPT, Go as rank, Qa as registerSchema, fa as resolveTheme, dl as revealStagger, tc as sameListUrl, qi as setStoragePrefix, Fo as shiftSpan, Yi as storageKey, Ji as storagePrefix, Q as str, ka as tabsListVariants, as as toCsv, ec as toListUrl, Yo as toQuery, ya as toast, Pa as toggleVariants, xc as useConfirm, ms as useDataTableViews, hr as useFormField, oi as useIsMobile, Io as useReschedule, yi as useSidebar, G as useStrings, ga as useTheme, la as useZoom, Vc as validateFiles };
