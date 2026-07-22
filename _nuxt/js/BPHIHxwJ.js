import { _ as Ce } from "./nKw-4uvu.js";
import { _ as $e } from "./ijCMTZqP.js";
import {
	o,
	c as r,
	a as l,
	g as n,
	t as M,
	j as G,
	b as f,
	h as $,
	i as S,
	p as N,
	x as ae,
	E as me,
	w as j,
	Z as Me,
	q as J,
	s as q,
	r as A,
	F as C,
	n as O,
	z as K,
	d as Z,
	A as Q,
	H as W,
	I as ne,
	k as ve,
	v as he,
	l as pe,
	D as fe,
	K as _e,
	W as Ne,
	M as D,
	_ as Ie,
	$ as ge,
	O as Se,
	U as re,
	a0 as Ae,
	a1 as oe,
	y as ie,
	a2 as ue,
	a3 as Oe,
	a4 as Le,
	a5 as je,
	a6 as Re,
	a7 as Ve,
	a8 as He,
	f as Pe,
	m as ee,
} from "./B8tedW2S.js";
import { _ as R } from "./DlAUqK2U.js";
import { _ as Fe } from "./PmCtNV9j.js";
import { _ as U } from "./DbXiTmOW.js";
import { _ as se } from "./B6mODPgv.js";
import { u as z } from "./BlTv-wRR.js";
import { _ as le } from "./B1rKZ2bT.js";
import { _ as ye, b as Te, f as Ze, u as Be } from "./Ci9JOfGO.js";
import { u as Y } from "./NTgl4yEg.js";
import { u as ce } from "./BrskilMe.js";
import { u as X, a as De } from "./CIQZrPB2.js";
import { u as xe } from "./D0umOX2w.js";
import { _ as qe } from "./BKiLo3vG.js";
import { _ as be } from "./C-3k_uH6.js";
import { _ as ze } from "./BegM3CFY.js";
import { u as Ee } from "./KUo10E8W.js";
import "./C5rrWGVN.js";
import "./HzSxZUuU.js";
const Ke = {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
};

function Ue(e, t) {
	return (
		o(),
		r("svg", Ke, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "M12 5v14M5 12h14",
							stroke: "#000",
							"stroke-width": "2",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const We = {
		render: Ue,
	},
	Qe = {
		key: 0,
		class: "password-overlay fixed top-0 left-0 w-screen h-screen",
	},
	Ge = {
		class: "bg-notice py-16 px-8 absolute-center-v-h password-form-modal",
	},
	Ye = ["textContent"],
	Je = {
		class: "absolute left-0 uppercase text-body-small bottom-6 mx-auto block w-full flex justify-center",
	},
	Xe = {
		__name: "PasswordProtectedOverlay",
		props: {
			password: String,
			message: String,
		},
		setup(e) {
			const t = N(!0),
				c = N(""),
				i = N(""),
				a = () => {
					if (!c.value.length) return (i.value = "Fields Missing.");
					if (c.value !== e.password)
						return (i.value = "Incorrect Password");
					c.value === e.password && (t.value = !1);
				};
			return (h, s) => {
				const m = Ce,
					u = $e;
				return n(t)
					? (o(),
						r("div", Qe, [
							l("div", Ge, [
								l(
									"p",
									{
										class: "mb-8",
										textContent: M(e.message),
									},
									null,
									8,
									Ye,
								),
								l(
									"form",
									{
										onSubmit: G(a, ["prevent"]),
									},
									[
										f(
											m,
											{
												id: "password-protection",
												class: "mb-4",
												type: "password",
												value: n(c),
												label: "PASSWORD",
												handleChange: (d) =>
													(c.value = d.target.value),
												placeholder: "Password",
											},
											null,
											8,
											["value", "handleChange"],
										),
										s[0] ||
											(s[0] = l(
												"button",
												{
													"aria-label": "Submit",
													class: "btn btn-fill-dark btn-full",
													type: "submit",
												},
												"Submit",
												-1,
											)),
									],
									32,
								),
								l("div", Je, [
									n(i)
										? (o(),
											$(
												u,
												{
													key: 0,
													msg: n(i),
													clearMessage: () =>
														(i.value = ""),
												},
												null,
												8,
												["msg", "clearMessage"],
											))
										: S("", !0),
								]),
							]),
						]))
					: S("", !0);
			};
		},
	},
	et = R(Xe, [["__scopeId", "data-v-0641e9a7"]]),
	tt = {
		key: 0,
		class: "h-8 announcement-bar relative w-full bg-notice flex items-center justify-between px-4 md:px-16 z-[80]",
	},
	nt = {
		class: "text-body-small absolute-center-v-h whitespace-nowrap",
	},
	ot = ["textContent"],
	at = {
		__name: "AnnouncementBar",
		props: {
			messages: {
				type: Array,
				default: () => [],
			},
		},
		setup(e) {
			const { setAnnouncementBar: t, isAnnouncementBarEnabled: c } = z(),
				i = N(null),
				a = N(0);
			e.messages?.length && t(!0);
			const h = J(() => e.messages[a.value]);
			return (
				ae(() => {
					i.value = window.setInterval(() => {
						a.value >= e.messages.length - 1
							? (a.value = 0)
							: (a.value = a.value + 1);
					}, 4e3);
				}),
				me(() => {
					window.clearInterval(i.value);
				}),
				(s, m) => {
					const u = U,
						d = se;
					return n(c)
						? (o(),
							r("div", tt, [
								m[0] ||
									(m[0] = l(
										"span",
										{
											class: "hidden md:block text-body-small",
											textContent: "Notice",
										},
										null,
										-1,
									)),
								l("div", nt, [
									f(
										Me,
										{
											name: "fade",
											mode: "out-in",
										},
										{
											default: j(() => [
												n(h)._type === "message"
													? (o(),
														r(
															"span",
															{
																key: 0,
																textContent: M(
																	n(h).text,
																),
															},
															null,
															8,
															ot,
														))
													: (o(),
														$(
															u,
															{
																key: 1,
																link: n(h),
															},
															null,
															8,
															["link"],
														)),
											]),
											_: 1,
										},
									),
								]),
								f(
									d,
									{
										handleClick: () => n(t)(!1),
									},
									null,
									8,
									["handleClick"],
								),
							]))
						: S("", !0);
				}
			);
		},
	},
	st = R(at, [["__scopeId", "data-v-5499299a"]]),
	lt = ["onMouseenter", "onClick", "textContent"],
	ct = {
		__name: "MegaMenu",
		props: {
			megaMenu: Object,
			setActiveNav: Function,
			activeNav: Object,
			hideActiveNav: Function,
		},
		setup(e) {
			const t = q(),
				c = (i) => {
					if (t.name === "collections-handle") {
						if (t.params.handle.includes("women") && i === "Femme")
							return "border-solid border-b-2 border-erd-black";
						if (
							!t.params.handle.includes("women") &&
							t.params.handle.includes("men") &&
							i === "Homme"
						)
							return (
								console.log("in here"),
								"border-solid border-b-2 border-erd-black"
							);
					}
					return "";
				};
			return (i, a) => {
				const h = U;
				return (
					o(!0),
					r(
						C,
						null,
						A(
							e.megaMenu.dropdownMenu,
							(s) => (
								o(),
								r(
									C,
									{
										key: s._key,
									},
									[
										s._type === "navDropdown"
											? (o(),
												r(
													C,
													{
														key: 0,
													},
													[
														s.isLink
															? (o(),
																$(
																	h,
																	{
																		key: 0,
																		onClick:
																			[
																				G(
																					(
																						m,
																					) =>
																						e.setActiveNav(
																							s,
																						),
																					[
																						"prevent",
																					],
																				),
																				e.hideActiveNav,
																			],
																		onMouseenter:
																			(
																				m,
																			) =>
																				e.setActiveNav(
																					s,
																				),
																		class: O(
																			[
																				e.activeNav &&
																					e
																						.activeNav
																						?.title ===
																						s.title &&
																					"active-dropdown-link",
																				c(
																					s
																						?.grandparentLink
																						?.title,
																				),
																			],
																		),
																		link: s.grandparentLink,
																	},
																	null,
																	8,
																	[
																		"onClick",
																		"onMouseenter",
																		"class",
																		"link",
																	],
																))
															: (o(),
																r(
																	"button",
																	{
																		key: 1,
																		onMouseenter:
																			(
																				m,
																			) =>
																				e.setActiveNav(
																					s,
																				),
																		onClick:
																			(
																				m,
																			) =>
																				e.setActiveNav(
																					s,
																				),
																		textContent:
																			M(
																				s.title,
																			),
																		class: O(
																			e.activeNav &&
																				e
																					.activeNav
																					?.title ===
																					s.title &&
																				"active-dropdown-link",
																		),
																		"aria-label":
																			"Dropdown navigation trigger",
																	},
																	null,
																	42,
																	lt,
																)),
													],
													64,
												))
											: (o(),
												$(
													h,
													{
														key: 1,
														onMouseenter:
															a[0] ||
															(a[0] = (m) =>
																e.setActiveNav(
																	null,
																)),
														onClick:
															e.hideActiveNav,
														link: s,
														class: "md:hover:text-dirt",
													},
													null,
													8,
													["onClick", "link"],
												)),
									],
									64,
								)
							),
						),
						128,
					)
				);
			};
		},
	},
	rt = {
		class: "nav-dropdown",
	},
	it = {
		class: "dropdown-container",
	},
	ut = {
		__name: "NavDropdown",
		props: {
			activeNav: {
				type: [String, Object],
			},
			hideActiveNav: Function,
		},
		setup(e) {
			const t = Y(ye),
				{ customerLogout: c } = ce(),
				i = q(),
				a = K(),
				h = async () => {
					try {
						((t.value = null),
							c(),
							e.hideActiveNav(),
							i.name.includes("customers") && a.push("/"));
					} catch (s) {
						console.log(s);
					}
				};
			return (s, m) => {
				const u = U,
					d = le;
				return (
					o(),
					r("div", null, [
						l(
							"button",
							{
								"aria-label": "Close active dropdown menu",
								onClick:
									m[0] ||
									(m[0] = (...b) =>
										e.hideActiveNav &&
										e.hideActiveNav(...b)),
								onMouseenter:
									m[1] ||
									(m[1] = (...b) =>
										e.hideActiveNav &&
										e.hideActiveNav(...b)),
								class: "nav-dropdown-underlay w-screen h-screen absolute top-0 left-0",
							},
							null,
							32,
						),
						l("div", rt, [
							l("div", it, [
								l(
									"div",
									{
										class: O([
											"menu-area",
											e.activeNav === "account" &&
												"account-menu-area",
										]),
									},
									[
										e.activeNav !== "account"
											? (o(!0),
												r(
													C,
													{
														key: 0,
													},
													A(
														e.activeNav.menuColumns,
														(b) => (
															o(),
															r(
																"div",
																{
																	key: b._key,
																},
																[
																	f(
																		u,
																		{
																			onClick:
																				e.hideActiveNav,
																			link: b,
																			class: "md:hover:text-dirt",
																		},
																		null,
																		8,
																		[
																			"onClick",
																			"link",
																		],
																	),
																],
															)
														),
													),
													128,
												))
											: (o(),
												r(
													C,
													{
														key: 1,
													},
													[
														f(
															d,
															{
																onClick:
																	e.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=details",
															},
															{
																default: j(
																	() => [
																		...(m[2] ||
																			(m[2] =
																				[
																					Z(
																						"Account Details",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														f(
															d,
															{
																onClick:
																	e.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=addresses",
															},
															{
																default: j(
																	() => [
																		...(m[3] ||
																			(m[3] =
																				[
																					Z(
																						"Addresses",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														f(
															d,
															{
																onClick:
																	e.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=orderHistory",
															},
															{
																default: j(
																	() => [
																		...(m[4] ||
																			(m[4] =
																				[
																					Z(
																						"Order History",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														l(
															"button",
															{
																"aria-label":
																	"Logout",
																onClick: h,
																class: "md:hover:text-dirt uppercase",
															},
															"Logout",
														),
													],
													64,
												)),
									],
									2,
								),
							]),
						]),
					])
				);
			};
		},
	},
	dt = R(ut, [["__scopeId", "data-v-ac4e9826"]]),
	mt = {
		class: "w-full",
	},
	vt = ["textContent"],
	ht = ["type", "placeholder", "pattern"],
	pt = {
		__name: "FormField",
		props: {
			type: String,
			hideLabel: Boolean,
			placeholder: String,
			value: String,
			onInputChange: Function,
			required: Boolean,
			pattern: {
				type: String,
				default: () => null,
			},
		},
		setup(e) {
			const t = J(() => {
				if (e.pattern) return e.pattern;
				if (e.type === "tel") return "[0-9]{3}-[0-9]{3}-[0-9]{4}";
			});
			return (c, i) => (
				o(),
				r("div", mt, [
					l(
						"label",
						{
							class: "sr-only text-black bg-white",
							"aria-label": "Search input label",
							for: "name",
							textContent: M(e.placeholder),
						},
						null,
						8,
						vt,
					),
					l(
						"input",
						{
							class: "w-full bg-transparent border-b border-solid border-black p-0 outline-none",
							name: "name",
							id: "name",
							type: e.type,
							placeholder: e.placeholder,
							onInput:
								i[0] ||
								(i[0] = (...a) =>
									e.onInputChange && e.onInputChange(...a)),
							pattern: n(t),
							autocomplete: "off",
							"aria-label": "Search input",
						},
						null,
						40,
						ht,
					),
				])
			);
		},
	},
	ft = R(pt, [["__scopeId", "data-v-7043dee3"]]),
	_t = {
		width: "24",
		height: "24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
	};

function gt(e, t) {
	return (
		o(),
		r("svg", _t, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35",
							stroke: "#000",
							"stroke-width": "2",
							"stroke-linecap": "square",
							"stroke-linejoin": "round",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const yt = {
		render: gt,
	},
	xt = {
		__name: "SearchForm",
		setup(e) {
			q();
			const t = K(),
				c = N(""),
				i = () => {
					if (!c) return;
					const a = c.value;
					(t.push(`/search/${a}`), (c.value = ""));
				};
			return (a, h) => {
				const s = ft;
				return (
					o(),
					r(
						"form",
						{
							onSubmit: G(i, ["prevent"]),
							class: "search-form",
						},
						[
							f(n(yt)),
							f(
								s,
								{
									type: "search",
									value: n(c),
									placeholder: "Search",
									onInputChange: (m) =>
										(c.value = m.target.value),
								},
								null,
								8,
								["value", "onInputChange"],
							),
						],
						32,
					)
				);
			};
		},
	},
	bt = R(xt, [["__scopeId", "data-v-c0bb68cb"]]),
	kt = {
		__name: "Search",
		setup(e) {
			const { isSearchModalOpen: t, setSearchModal: c } = z(),
				i = () => c(!1);
			return (a, h) => {
				const s = bt;
				return (
					o(),
					r(
						"div",
						{
							onMouseleave: i,
							class: O([
								"search-modal",
								n(t) && "search-modal-active",
							]),
						},
						[f(s)],
						34,
					)
				);
			};
		},
	},
	wt = R(kt, [["__scopeId", "data-v-8f37b058"]]),
	Ct = {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 576 157.22",
	};

function $t(e, t) {
	return (
		o(),
		r("svg", Ct, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "m41.19 39.86-2.65 16.87H0v-1.41h1.08c1.74 0 3.06-.58 3.72-1.49.75-.99.91-1.98.91-5.79V10.26c0-3.8-.17-4.8-.91-5.79-.66-.91-1.98-1.41-3.72-1.41H0V1.57h37.3V17.2h-1.41c-.41-3.97-1.74-7.2-3.97-9.43-2.56-2.56-5.87-3.39-13.48-3.39h-1.57v22.83c6.04-.17 8.77-3.89 9.43-12.65h1.49V42.6H26.3c-.33-8.44-3.31-12.41-9.43-12.41v17.2c0 5.62.74 6.53 5.13 6.53 10.01 0 14.56-3.64 17.7-14.06h1.49ZM83.28 57.48 52.43 13.07l.33 34.98c.08 3.81.25 4.8.99 5.79.74.91 2.07 1.49 3.72 1.49h.58v1.41H44.16v-1.41h.99c2.15 0 3.64-.83 4.22-2.4.33-.83.41-1.98.41-4.88l-.17-39.2-2.23-3.06c-1.65-2.32-1.9-2.56-3.23-2.73V1.57h13.4l23.98 34.74V10.34c0-3.8-.17-4.8-.91-5.79-.66-.91-2.07-1.49-3.72-1.49h-.66V1.57h12.98v1.49h-.41c-2.15 0-3.64.83-4.22 2.4-.25.74-.33 2.23-.33 4.88l.41 47.14h-1.41ZM128.27 16.71c-.33-4.05-1.24-6.62-3.06-8.68-2.4-2.73-5.38-3.56-13.23-3.56h-2.56v22.91c7.28 0 10.59-3.56 10.75-11.5h1.57v26.8h-1.57c-.17-8.11-3.89-12.32-10.75-12.24v17.62c0 3.72.17 4.8.91 5.71.75.99 2.07 1.57 3.72 1.57h.58v1.41H93.37v-1.41h.25c1.65 0 3.06-.58 3.72-1.57.74-.91.91-1.98.91-5.71v-37.8c0-3.72-.17-4.8-.91-5.79-.66-.91-1.98-1.49-3.72-1.49h-.25V1.57h36.39v15.14h-1.49ZM168.88 56.74h-19.44v-1.41h.5c2.56 0 3.56-.66 3.56-2.15 0-.83-.33-2.48-.74-3.97l-1.65-5.54h-13.56l-1.65 5.46c-.5 1.49-.74 2.81-.74 3.47 0 1.74 1.24 2.73 3.47 2.73h.5v1.41h-11.41v-1.41c2.9-.5 3.47-1.41 5.87-8.85L147.95 0h1.49l13.98 47.06c1.9 6.29 2.89 7.77 5.46 8.27v1.41Zm-24.07-37.8-6.29 21.75h11.74l-5.46-21.75ZM210.14 57.48l-30.85-44.41.33 34.98c.08 3.81.25 4.8.99 5.79.74.91 2.07 1.49 3.72 1.49h.58v1.41h-13.89v-1.41h.99c2.15 0 3.64-.83 4.22-2.4.33-.83.41-1.98.41-4.88l-.17-39.2-2.23-3.06c-1.65-2.32-1.9-2.56-3.23-2.73V1.57h13.4l23.99 34.74V10.34c0-3.8-.17-4.8-.91-5.79-.66-.91-2.07-1.49-3.72-1.49h-.66V1.57h12.99v1.49h-.41c-2.15 0-3.64.83-4.22 2.4-.25.74-.33 2.23-.33 4.88l.41 47.14h-1.41ZM220.31 16.13V1.57h39.86v14.56h-1.41c-.99-8.68-4.05-11.58-12.32-11.58h-.58v43.5c0 3.72.17 4.8.91 5.79.66.91 2.07 1.49 3.72 1.49h1.49v1.41h-23.24v-1.41h1.32c1.65 0 3.06-.58 3.72-1.49.74-.99.91-2.07.91-5.79V4.55h-1.41c-7.69 0-10.75 3.06-11.58 11.58h-1.41ZM293.58 18.28c-1.65-9.1-6.86-14.8-13.4-14.8-4.63 0-8.1 3.47-8.1 8.11 0 4.05 2.4 6.62 10.26 10.83 5.71 2.98 8.77 5.13 10.83 7.44 2.81 3.06 4.22 7.03 4.22 11.58 0 9.51-6.53 16.54-15.47 16.54-2.73 0-5.29-.66-9.76-2.4-1.57-.66-2.23-.83-2.89-.83-1.49 0-2.4.99-2.9 3.23h-1.41V37.47h1.41c1.32 10.17 7.53 17.45 14.81 17.45 4.8 0 8.27-3.89 8.27-9.18 0-4.88-1.9-7.03-10.67-12.08-5.71-3.31-8.02-4.96-10.17-7.53-2.48-2.89-3.72-6.37-3.72-10.42 0-8.93 5.79-15.38 13.73-15.38 2.56 0 4.8.58 8.19 2.15 1.98.99 2.89 1.24 3.72 1.24 1.65 0 2.23-.83 2.65-3.39h1.49l.41 17.95h-1.49ZM371.24 56.74h-14.06L344.69 31.1h-2.07v16.95c0 3.72.17 4.8.91 5.79.66.91 1.98 1.49 3.72 1.49h.83v1.41h-21.84v-1.41h.58c1.65 0 3.06-.58 3.72-1.49.75-.99.91-1.98.91-5.79V10.26c0-3.8-.17-4.8-.91-5.71-.66-.99-2.07-1.49-3.72-1.49h-.58V1.57h16.38c8.77 0 12.57.58 16.13 2.23 4.38 2.15 7.03 7.03 7.03 12.82 0 6.95-3.72 12.16-9.76 13.89l9.18 18.77c2.4 5.04 3.39 6.04 6.04 6.04v1.41Zm-28.62-28.12h.99c3.97 0 5.96-.58 7.61-2.07 2.07-1.98 3.14-5.38 3.14-10.34 0-8.6-2.81-11.66-10.83-11.66h-.91v24.07ZM396.29 1.57v1.41h-.33c-1.65 0-3.06.58-3.72 1.57-.74.91-.91 1.98-.91 5.71v37.8c0 3.72.17 4.8.91 5.71.66.99 2.07 1.57 3.72 1.57h.33v1.41h-21.01v-1.41h.25c1.65 0 2.98-.58 3.72-1.57.75-.91.91-1.98.91-5.71v-37.8c0-3.72-.17-4.8-.91-5.71-.74-.99-2.07-1.57-3.72-1.57h-.25V1.57h21.01ZM439.05 18.86c-.91-8.6-6.37-15.05-12.74-15.05-8.35 0-12.98 9.1-12.98 25.47 0 7.28.83 13.32 2.31 16.95 2.15 5.38 5.71 8.19 10.17 8.19 5.54 0 10.59-3.47 14.72-10.17v4.55c-4.05 5.87-10.17 9.18-17.04 9.18-13.4 0-22.66-11.33-22.66-27.62S410.85.33 423.83.33c3.72 0 4.8.33 10.92 3.14.74.33 1.49.58 2.07.58 1.24 0 1.9-.99 2.23-3.72h1.49v18.53h-1.49ZM461.79 30.02v18.03c0 3.81.17 4.8.91 5.79.66.91 1.99 1.49 3.72 1.49h.58v1.41h-21.67v-1.41h.66c1.65 0 2.98-.58 3.72-1.49.74-.99.91-2.07.91-5.79V10.34c0-3.8-.17-4.8-.91-5.79-.74-.91-2.07-1.49-3.72-1.49h-.66V1.57H467v1.49h-.58c-1.65 0-3.06.58-3.72 1.49-.74.99-.91 1.98-.91 5.79v16.29H478V10.34c0-3.8-.17-4.8-.91-5.79-.74-.91-2.07-1.49-3.8-1.49h-.58V1.57h21.59v1.49h-.58c-1.65 0-2.98.58-3.64 1.49-.75.99-.91 1.98-.91 5.79v37.71c0 3.72.17 4.8.91 5.79.66.91 1.98 1.49 3.64 1.49h.58v1.41h-21.59v-1.41h.58c1.74 0 3.06-.58 3.8-1.49.74-1.08.91-1.98.91-5.79V30.02h-16.21ZM538.29 39.86l-2.65 16.87H497.1v-1.41h1.08c1.74 0 3.06-.58 3.72-1.49.74-.99.91-1.98.91-5.79V10.26c0-3.8-.16-4.8-.91-5.79-.66-.91-1.99-1.41-3.72-1.41h-1.08V1.57h37.3V17.2h-1.41c-.41-3.97-1.74-7.2-3.97-9.43-2.56-2.56-5.87-3.39-13.48-3.39h-1.57v22.83c6.04-.17 8.77-3.89 9.43-12.65h1.49V42.6h-1.49c-.33-8.44-3.31-12.41-9.43-12.41v17.2c0 5.62.75 6.53 5.13 6.53 10.01 0 14.56-3.64 17.7-14.06h1.49ZM572.2 18.28c-1.65-9.1-6.86-14.8-13.4-14.8-4.63 0-8.1 3.47-8.1 8.11 0 4.05 2.4 6.62 10.26 10.83 5.71 2.98 8.77 5.13 10.83 7.44 2.81 3.06 4.22 7.03 4.22 11.58 0 9.51-6.53 16.54-15.47 16.54-2.73 0-5.29-.66-9.76-2.4-1.57-.66-2.23-.83-2.89-.83-1.49 0-2.4.99-2.89 3.23h-1.41V37.47H545c1.32 10.17 7.53 17.45 14.8 17.45 4.8 0 8.27-3.89 8.27-9.18 0-4.88-1.9-7.03-10.67-12.08-5.71-3.31-8.02-4.96-10.17-7.53-2.48-2.89-3.72-6.37-3.72-10.42 0-8.93 5.79-15.38 13.73-15.38 2.56 0 4.8.58 8.19 2.15 1.99.99 2.89 1.24 3.72 1.24 1.65 0 2.23-.83 2.65-3.39h1.49l.41 17.95h-1.49ZM16.87 100.81c11.83 0 16.54 1.57 21.09 7.03 4.3 5.04 6.53 11.99 6.53 20.43 0 10.92-3.47 19.19-9.84 23.65-4.71 3.31-8.68 4.05-21.67 4.05H.5v-1.41h.58c1.65 0 3.06-.58 3.72-1.49.75-.99.91-2.07.91-5.79v-37.8c0-3.72-.16-4.8-.91-5.71-.66-.91-2.07-1.49-3.72-1.49H.5v-1.49h16.38Zm0 42.51c0 6.37.08 7.61.58 8.52.5.91 1.41 1.32 2.98 1.32 3.47 0 6.12-1.16 7.77-3.56 2.65-3.47 4.05-11.08 4.05-21.09 0-8.52-1.24-15.55-3.56-19.85-1.98-3.56-4.96-4.96-10.67-4.96h-1.16v39.62ZM88.82 139.1l-2.65 16.87H47.63v-1.41h1.08c1.74 0 3.06-.58 3.72-1.49.74-.99.91-1.98.91-5.79v-37.8c0-3.81-.17-4.8-.91-5.79-.66-.91-1.98-1.41-3.72-1.41h-1.08v-1.49h37.3v15.63h-1.41c-.41-3.97-1.74-7.2-3.97-9.43-2.56-2.56-5.87-3.39-13.48-3.39H64.5v22.83c6.04-.17 8.77-3.89 9.43-12.65h1.49v28.04h-1.49c-.33-8.43-3.31-12.41-9.43-12.41v17.2c0 5.62.74 6.53 5.13 6.53 10.01 0 14.56-3.64 17.7-14.06h1.49ZM108.5 147.29c0 3.72.17 4.8.91 5.79.66.91 2.07 1.49 3.72 1.49h1.41v1.41H92.21v-1.41h.5c1.65 0 3.06-.58 3.72-1.49.75-.99.91-2.07.91-5.79v-37.71c0-3.72-.16-4.8-.91-5.79-.74-.99-2.07-1.49-3.72-1.49h-.5v-1.49h13.15c12.65 0 17.12.5 20.92 2.48 4.22 2.15 7.03 7.11 7.03 12.32 0 5.54-3.22 10.75-8.02 12.9-3.56 1.65-7.77 2.32-14.64 2.32h-2.15v16.46Zm0-19.35h1.41c4.8 0 6.7-.5 8.35-2.15 1.82-1.82 2.81-5.46 2.81-10.01s-1.08-8.02-3.14-9.84c-1.65-1.57-3.72-2.07-8.02-2.07h-1.41v24.07ZM180.37 155.98h-14.06l-12.49-25.64h-2.07v16.95c0 3.72.17 4.8.91 5.79.66.91 1.98 1.49 3.72 1.49h.83v1.41h-21.83v-1.41h.58c1.65 0 3.06-.58 3.72-1.49.74-.99.91-1.98.91-5.79v-37.8c0-3.81-.17-4.8-.91-5.71-.66-.99-2.07-1.49-3.72-1.49h-.58v-1.49h16.38c8.77 0 12.57.58 16.13 2.23 4.38 2.15 7.03 7.03 7.03 12.82 0 6.95-3.72 12.16-9.76 13.89l9.18 18.77c2.4 5.04 3.39 6.04 6.04 6.04v1.41Zm-28.62-28.12h.99c3.97 0 5.95-.58 7.61-2.07 2.07-1.99 3.14-5.38 3.14-10.34 0-8.6-2.81-11.66-10.83-11.66h-.91v24.07ZM205.43 100.81v1.41h-.33c-1.65 0-3.06.58-3.72 1.57-.74.91-.91 1.98-.91 5.71v37.8c0 3.72.17 4.8.91 5.71.66.99 2.07 1.57 3.72 1.57h.33v1.41h-21.01v-1.41h.25c1.65 0 2.98-.58 3.72-1.57.74-.91.91-1.98.91-5.71v-37.8c0-3.72-.17-4.8-.91-5.71-.74-.99-2.07-1.57-3.72-1.57h-.25v-1.41h21.01ZM226.35 100.81l11.58 35.48 11.83-35.48h16.62v1.41c-2.07.17-2.89.58-3.64 1.57-.83 1.16-.91 1.98-.91 7.2v34.9c0 4.88.17 6.04.91 7.2.66.91 1.65 1.32 3.64 1.49v1.41h-21.09v-1.41h.74c1.65 0 3.06-.58 3.72-1.49.75-.99.91-2.07.91-5.79v-40.11l-16.29 48.8h-1.24l-16.05-48.47v39.78c0 3.72.17 4.8.91 5.79.74.91 2.07 1.49 3.8 1.49h.41v1.41h-12.82v-1.41c1.98-.08 3.06-.5 3.8-1.49.75-.99.91-2.07.91-5.79v-37.8c0-3.72-.17-4.8-.91-5.71-.74-1.08-1.74-1.49-3.8-1.57v-1.41h16.95ZM311.04 139.1l-2.65 16.87h-38.54v-1.41h1.08c1.74 0 3.06-.58 3.72-1.49.75-.99.91-1.98.91-5.79v-37.8c0-3.81-.16-4.8-.91-5.79-.66-.91-1.98-1.41-3.72-1.41h-1.08v-1.49h37.3v15.63h-1.41c-.41-3.97-1.74-7.2-3.97-9.43-2.56-2.56-5.87-3.39-13.48-3.39h-1.57v22.83c6.04-.17 8.77-3.89 9.43-12.65h1.49v28.04h-1.49c-.33-8.43-3.31-12.41-9.43-12.41v17.2c0 5.62.74 6.53 5.13 6.53 10.01 0 14.56-3.64 17.7-14.06h1.49ZM344.94 117.52c-1.65-9.1-6.87-14.8-13.4-14.8-4.63 0-8.11 3.47-8.11 8.1 0 4.05 2.4 6.62 10.26 10.83 5.71 2.98 8.77 5.13 10.83 7.44 2.81 3.06 4.22 7.03 4.22 11.58 0 9.51-6.53 16.54-15.47 16.54-2.73 0-5.29-.66-9.76-2.4-1.57-.66-2.23-.83-2.9-.83-1.49 0-2.4.99-2.89 3.22h-1.41v-20.51h1.41c1.32 10.17 7.53 17.45 14.8 17.45 4.8 0 8.27-3.89 8.27-9.18 0-4.88-1.9-7.03-10.67-12.07-5.71-3.31-8.02-4.96-10.17-7.53-2.48-2.9-3.72-6.37-3.72-10.42 0-8.93 5.79-15.38 13.73-15.38 2.56 0 4.8.58 8.19 2.15 1.99.99 2.9 1.24 3.72 1.24 1.65 0 2.23-.83 2.65-3.39h1.49l.41 17.95h-1.49ZM73.02 75.88h10.84L72.03 89.61h-3.06l4.05-13.73zM297.64 75.88h10.84l-11.83 13.73h-3.06l4.05-13.73z",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const ke = {
		render: $t,
	},
	Mt = {
		width: "24",
		height: "24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
	};

function Nt(e, t) {
	return (
		o(),
		r("svg", Mt, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "M3 12h18M3 6h18M3 18h18",
							stroke: "#fff",
							"stroke-width": "2",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const It = {
		render: Nt,
	},
	St = {
		class: "hidden lg:flex items-center h-full gap-x-6",
	},
	At = {
		class: "lg:flex items-center h-full gap-x-6 hidden",
	},
	Ot = {
		__name: "Header",
		props: {
			menu: {
				type: Object,
				default: () => null,
			},
			megaMenu: {
				type: Object,
				default: () => null,
			},
			announcementBar: Object,
		},
		setup(e) {
			const t = q(),
				c = K(),
				i = N(t.name),
				a = N(null),
				{ cart: h } = X();
			xe();
			const { customer: s } = ce(),
				{
					setMobileMenu: m,
					setCartOpen: u,
					isFilterActive: d,
					isAddressFormActive: b,
					globalEcomConfig: k,
					lightHeader: g,
				} = z();
			t?.name === "index" &&
				De(() => ({
					"@context": "http://schema.org",
					"@type": "Organization",
					name: "Torture Equals Solution",
					url: "https://torturequalsolution.github.io/",
				}));
			const x = N(null),
				v = N(""),
				p = J(() => h?.value?.lines || []),
				I = (L) => (x.value = L),
				y = () => (x.value = null),
				_ = () => {
					v?.value?.length &&
						(c.push(`/search/${v.value}`),
						(v.value = ""),
						a.value && a.value.blur());
				};
			return (
				Q(i, (L) => {
					L && (x.value = null);
				}),
				(L, w) => {
					const B = st,
						H = le,
						V = U,
						P = ct,
						F = dt,
						T = wt;
					return (
						o(),
						r(
							"header",
							{
								id: "site-header",
								class: O([
									"transition-all duration-300",
									[
										n(t).name,
										(n(d) || n(b)) && "pl-[390px]",
										n(g) &&
											n(t).name === "index" &&
											"light-header",
									],
								]),
							},
							[
								f(B, W(ne(e.announcementBar)), null, 16),
								l(
									"div",
									{
										class: O([
											"header-content text-desktop-body uppercase h-auto w-full p-4 md:pt-8 md:px-8 md:pb-0 flex items-start justify-between mx-auto relative",
											[n(x) && "active-nav"],
										]),
									},
									[
										f(
											H,
											{
												"aria-label":
													"Link to homepage",
												to: "/",
												class: "w-[145px] h-[40px] md:w-[205px] md:h-[56px]",
											},
											{
												default: j(() => [
													f(n(ke), {
														class: "logo",
													}),
												]),
												_: 1,
											},
										),
										l(
											"button",
											{
												"aria-label": "Menu",
												onClick:
													w[0] ||
													(w[0] = () => n(m)(!0)),
												class: "menu-icon text-left lg:hidden",
											},
											[f(n(It))],
										),
										l("nav", St, [
											e.menu
												? (o(!0),
													r(
														C,
														{
															key: 0,
														},
														A(
															e.menu.navItems,
															(E) => (
																o(),
																$(
																	V,
																	{
																		key: E._key,
																		link: E,
																	},
																	null,
																	8,
																	["link"],
																)
															),
														),
														128,
													))
												: e.megaMenu
													? (o(),
														$(
															P,
															{
																key: 1,
																megaMenu:
																	e.megaMenu,
																setActiveNav: I,
																activeNav: n(x),
																hideActiveNav:
																	y,
															},
															null,
															8,
															[
																"megaMenu",
																"activeNav",
															],
														))
													: S("", !0),
										]),
										l("div", At, [
											l(
												"form",
												{
													onSubmit: G(_, ["prevent"]),
												},
												[
													w[4] ||
														(w[4] = l(
															"label",
															{
																for: "search",
																class: "sr-only",
															},
															"Search",
															-1,
														)),
													ve(
														l(
															"input",
															{
																ref_key:
																	"searchInput",
																ref: a,
																id: "search",
																name: "search",
																"onUpdate:modelValue":
																	w[1] ||
																	(w[1] = (
																		E,
																	) =>
																		pe(v)
																			? (v.value =
																					E)
																			: null),
																type: "text",
																class: "text-right bg-transparent input-search hidden md:hover:text-dirt uppercase md:block",
																placeholder:
																	"search",
															},
															null,
															512,
														),
														[[he, n(v)]],
													),
												],
												32,
											),
											f(
												H,
												{
													to: "/customers/account",
													onMouseenter:
														w[2] ||
														(w[2] = (E) =>
															n(s)?.id
																? I("account")
																: null),
													class: "text-left hidden md:hover:text-dirt md:block",
												},
												{
													default: j(() => [
														...(w[5] ||
															(w[5] = [
																Z(
																	"Account",
																	-1,
																),
															])),
													]),
													_: 1,
												},
											),
											l(
												"button",
												{
													"aria-label": "Open cart",
													onClick:
														w[3] ||
														(w[3] = (E) =>
															n(u)(!0)),
													class: "text-left md:hover:text-dirt uppercase hidden md:block",
												},
												M(
													n(k)?.cartTitle
														? n(k).cartTitle
														: "Cart",
												) +
													" (" +
													M(n(p)?.length || 0) +
													")",
												1,
											),
										]),
									],
									2,
								),
								n(x)
									? (o(),
										$(
											F,
											{
												key: n(x),
												activeNav: n(x),
												hideActiveNav: y,
											},
											null,
											8,
											["activeNav"],
										))
									: S("", !0),
								f(T),
							],
							2,
						)
					);
				}
			);
		},
	},
	Lt = R(Ot, [["__scopeId", "data-v-3c4f4391"]]),
	jt = {
		width: "16",
		height: "16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
	};

function Rt(e, t) {
	return (
		o(),
		r("svg", jt, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "M3.333 8H12M8 3.333 12.667 8 8 12.667",
							stroke: "#fff",
							"stroke-width": "2",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const Vt = {
		render: Rt,
	},
	Ht = {
		class: "mobile-menu-header absolute top-0 w-full flex items-center justify-between p-4",
	},
	Pt = {
		key: 1,
		class: "mb-16 flex flex-col gap-y-2 text-center text-mobile-heading uppercase",
	},
	Ft = ["aria-label", "onClick"],
	Tt = {
		class: "flex flex-col gap-y-2 text-center text-mobile-heading uppercase",
	},
	Zt = {
		key: 0,
		class: "flex flex-col gap-y-2 text-center text-mobile-heading uppercase nav-width absolute",
	},
	Bt = {
		__name: "MobileMenu",
		props: {
			menu: {
				type: Object,
				default: () => null,
			},
			megaMenu: {
				type: Object,
				default: () => null,
			},
		},
		setup(e) {
			const t = Y(ye),
				c = q(),
				i = K(),
				{ setMobileMenu: a, setCartOpen: h } = z(),
				{ customer: s, customerLogout: m } = ce(),
				u = N(null),
				d = N(""),
				b = () => d.value?.length && i.push(`/search/${d.value}`),
				k = () => {
					(a(!1), h(!0));
				},
				g = async () => {
					try {
						((t.value = null),
							m(),
							c.name.includes("customers") && i.push("/"),
							a(!1));
					} catch (x) {
						console.log(x);
					}
				};
			return (x, v) => {
				const p = le,
					I = se,
					y = U;
				return (
					o(),
					r(
						"div",
						{
							class: O([
								"mobile-menu fixed top-0 left-0 w-screen min-h-screen overflow-y-auto bg-erd-black text-white flex items-center justify-center overscroll-contain py-16 px-4 z-[90]",
								n(u) && "nav-active",
							]),
						},
						[
							l("div", Ht, [
								f(
									p,
									{
										to: "/",
										class: "w-[145px] h-[40px] mobile-menu-logo",
									},
									{
										default: j(() => [
											f(n(ke), {
												class: "w-full h-full",
											}),
										]),
										_: 1,
									},
								),
								f(
									I,
									{
										handleClick: () => n(a)(!1),
									},
									null,
									8,
									["handleClick"],
								),
							]),
							l(
								"nav",
								{
									class: O([
										"flex flex-col gap-y-2 text-center text-mobile-heading uppercase nav-start nav-width absolute",
										e.megaMenu && "mobile-mega-menu-nav",
									]),
								},
								[
									e.menu
										? (o(!0),
											r(
												C,
												{
													key: 0,
												},
												A(
													e.menu.navItems,
													(_) => (
														o(),
														$(
															y,
															{
																key: _._key,
																link: _,
															},
															null,
															8,
															["link"],
														)
													),
												),
												128,
											))
										: e.megaMenu
											? (o(),
												r("div", Pt, [
													(o(!0),
													r(
														C,
														null,
														A(
															e.megaMenu
																.dropdownMenu,
															(_) => (
																o(),
																r(
																	C,
																	{
																		key: _._key,
																	},
																	[
																		_._type ===
																		"navDropdown"
																			? (o(),
																				r(
																					"button",
																					{
																						key: 0,
																						"aria-label": `Set active subnavigation to ${_.isLink ? _.grandparentLink?.title : _.title}`,
																						onClick:
																							(
																								L,
																							) =>
																								(u.value =
																									_),
																						class: "text-mobile-heading uppercase",
																					},
																					M(
																						_.isLink
																							? _
																									.grandparentLink
																									?.title
																							: _.title,
																					),
																					9,
																					Ft,
																				))
																			: (o(),
																				$(
																					y,
																					{
																						key: 1,
																						link: _,
																					},
																					null,
																					8,
																					[
																						"link",
																					],
																				)),
																	],
																	64,
																)
															),
														),
														128,
													)),
												]))
											: S("", !0),
									l("div", Tt, [
										l(
											"form",
											{
												onSubmit: G(b, ["prevent"]),
											},
											[
												v[3] ||
													(v[3] = l(
														"label",
														{
															for: "mobile-search",
															textContent:
																"Search",
															class: "sr-only",
														},
														null,
														-1,
													)),
												ve(
													l(
														"input",
														{
															class: "input-mobile-search",
															placeholder:
																"Search",
															type: "text",
															name: "mobile-search",
															id: "mobile-search",
															"onUpdate:modelValue":
																v[0] ||
																(v[0] = (_) =>
																	pe(d)
																		? (d.value =
																				_)
																		: null),
														},
														null,
														512,
													),
													[[he, n(d)]],
												),
											],
											32,
										),
										n(s)
											? (o(),
												r(
													"button",
													{
														key: 1,
														"aria-label":
															"Set active subnavigation to account",
														onClick:
															v[1] ||
															(v[1] = (_) =>
																(u.value =
																	"account")),
														class: "text-mobile-heading uppercase",
													},
													"Account",
												))
											: (o(),
												$(
													p,
													{
														key: 0,
														to: "/customers/login",
														class: "text-mobile-heading uppercase",
													},
													{
														default: j(() => [
															...(v[4] ||
																(v[4] = [
																	Z(
																		" Log in ",
																		-1,
																	),
																])),
														]),
														_: 1,
													},
												)),
										l(
											"button",
											{
												"aria-label": "Open cart",
												onClick: k,
												class: "text-mobile-heading uppercase",
											},
											" Cart ",
										),
									]),
								],
								2,
							),
							n(u)
								? (o(),
									r("nav", Zt, [
										l(
											"button",
											{
												"aria-label":
													"Remove active subnavigation",
												onClick:
													v[2] ||
													(v[2] = (_) =>
														(u.value = null)),
												class: "mb-8 mx-auto arrow",
											},
											[f(n(Vt))],
										),
										n(u) === "account"
											? (o(),
												r(
													C,
													{
														key: 0,
													},
													[
														f(
															p,
															{
																onClick:
																	x.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=details",
															},
															{
																default: j(
																	() => [
																		...(v[5] ||
																			(v[5] =
																				[
																					Z(
																						"Account Details",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														f(
															p,
															{
																onClick:
																	x.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=addresses",
															},
															{
																default: j(
																	() => [
																		...(v[6] ||
																			(v[6] =
																				[
																					Z(
																						"Addresses",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														f(
															p,
															{
																onClick:
																	x.hideActiveNav,
																class: "md:hover:text-dirt",
																to: "/customers/account?ac=orderHistory",
															},
															{
																default: j(
																	() => [
																		...(v[7] ||
																			(v[7] =
																				[
																					Z(
																						"Order History",
																						-1,
																					),
																				])),
																	],
																),
																_: 1,
															},
															8,
															["onClick"],
														),
														l(
															"button",
															{
																"aria-label":
																	"Logout",
																onClick: g,
																class: "md:hover:text-dirt uppercase",
															},
															"Logout",
														),
													],
													64,
												))
											: (o(!0),
												r(
													C,
													{
														key: 1,
													},
													A(
														n(u)?.menuColumns,
														(_) => (
															o(),
															$(
																y,
																{
																	link: _,
																	key: _._key,
																},
																null,
																8,
																["link"],
															)
														),
													),
													128,
												)),
									]))
								: S("", !0),
						],
						2,
					)
				);
			};
		},
	},
	Dt = R(Bt, [["__scopeId", "data-v-cb4b7ea6"]]),
	qt = {
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
	};

function zt(e, t) {
	return (
		o(),
		r("svg", qt, [
			...(t[0] ||
				(t[0] = [
					l(
						"path",
						{
							d: "M5 12h14",
							stroke: "#000",
							"stroke-width": "2",
						},
						null,
						-1,
					),
				])),
		])
	);
}
const Et = {
		render: zt,
	},
	Kt = ["disabled"],
	Ut = ["textContent"],
	Wt = ["disabled"],
	Qt = {
		__name: "QuantityAdjuster",
		props: {
			id: String,
			quantity: Number,
			lineItemId: String,
			lineItem: Object,
		},
		setup(e) {
			const t = N(!1),
				{ updateLineItem: c, removeLineItem: i } = X(),
				a = e,
				{ id: h, quantity: s, lineItemId: m, lineItem: u } = fe(a),
				d = async () => {
					try {
						t.value = !0;
						const k = s + 1,
							g = await c(u.value);
						t.value = !1;
					} catch (k) {
						(console.log(k), (t.value = !1));
					}
				},
				b = async () => {
					try {
						if (((t.value = !0), s.value - 1 < 1)) {
							await i(u.value?.id);
							return;
						}
						const g = {
								...u.value,
								quantity: s.value,
							},
							x = await c(g, !0);
						x.isError &&
							console.error(
								"Failed to update quantity:",
								x.message,
							);
					} catch (k) {
						console.error("Remove item error:", k);
					} finally {
						t.value = !1;
					}
				};
			return (k, g) => (
				o(),
				r(
					"div",
					{
						class: O([
							"quantity-adjuster h-8 flex items-center text-desktop-label font-helvNeueRoman",
							n(t) && "opacity-50 pointer-events-none",
						]),
					},
					[
						l(
							"button",
							{
								"aria-label":
									"Remove 1 quantity of item from cart",
								onClick: b,
								disabled: n(t),
								class: "w-4 h-4 adjustor-btn flex items-center justify-center",
							},
							[f(n(Et))],
							8,
							Kt,
						),
						l(
							"span",
							{
								class: "block mx-4",
								textContent: M(n(s)),
							},
							null,
							8,
							Ut,
						),
						l(
							"button",
							{
								"aria-label":
									"Add 1 quantity of item from cart",
								onClick: d,
								disabled: n(t),
								class: "w-4 h-4 adjustor-btn flex items-center justify-center",
							},
							[f(n(We))],
							8,
							Wt,
						),
					],
					2,
				)
			);
		},
	},
	Gt = R(Qt, [["__scopeId", "data-v-eac42a35"]]),
	Yt = {
		class: "line-item flex flex-col w-full flex-shrink-0 items-center",
	},
	Jt = {
		class: "flex flex-col items-center text-center w-full",
	},
	Xt = ["textContent"],
	en = {
		class: "text-desktop-label uppercase font-helvNeueRoman",
	},
	tn = ["textContent"],
	nn = {
		__name: "LineItem",
		props: {
			image: Object,
			title: String,
			vendor: String,
			selectedOptions: Array,
			lineItemId: String,
			merchId: String,
			quantity: Number,
			price: Object,
			lineItem: Object,
		},
		setup(e) {
			const t = e,
				{
					lineItem: c,
					image: i,
					title: a,
					vendor: h,
					selectedOptions: s,
					lineItemId: m,
					merchId: u,
					quantity: d,
					cost: b,
					price: k,
				} = fe(t);
			return (
				ae(() => {
					console.log("image", i, c);
				}),
				(g, x) => {
					const v = qe,
						p = be,
						I = Gt;
					return (
						o(),
						r("div", Yt, [
							f(
								v,
								{
									class: "mb-4",
									image: n(i),
									width: 390,
									sizes: "sm:390px md:390px lg:390px",
									quality: 100,
									srcSizes: [390, 390, 390, 390],
								},
								null,
								8,
								["image"],
							),
							l("div", Jt, [
								l(
									"h5",
									{
										class: "text-desktop-body uppercase",
										textContent: M(n(a)),
									},
									null,
									8,
									Xt,
								),
								l("div", en, [
									(o(!0),
									r(
										C,
										null,
										A(
											n(s),
											(y) => (
												o(),
												r(
													"span",
													{
														class: "block",
														key: y.value,
														textContent: M(
															`${y.name} ${y.value}`,
														),
													},
													null,
													8,
													tn,
												)
											),
										),
										128,
									)),
									f(
										p,
										{
											class: "justify-center",
											price: n(k),
										},
										null,
										8,
										["price"],
									),
								]),
								(o(),
								$(
									I,
									{
										lineItemId: n(c).id,
										lineItem: n(c),
										quantity: n(d),
										key: n(d),
									},
									null,
									8,
									["lineItemId", "lineItem", "quantity"],
								)),
							]),
						])
					);
				}
			);
		},
	},
	on = R(nn, [["__scopeId", "data-v-3ca08bba"]]),
	an = {
		class: "cart-header flex items-center justify-between relative h-[80px] sticky top-0 px-6 py-6 text-body-large z-20",
	},
	sn = {
		class: "mb-0 text-desktop-small-heading uppercase",
	},
	ln = {
		key: 0,
		class: "cart-body p-16 flex flex-col items-center justify-start gap-y-4 absolute overflow-x-auto",
	},
	cn = {
		key: 1,
		class: "empty-cart-body text-heading p-8 flex flex-col gap-y-4 uppercase",
	},
	rn = ["textContent"],
	un = {
		key: 2,
		class: "checkout-container text-erd-black",
	},
	dn = {
		class: "p-8",
	},
	mn = {
		class: "text-desktop-label font-helvNeueRoman uppercase flex mb-4 gap-x-[1ch] justify-center",
	},
	vn = ["href", "target"],
	hn = {
		__name: "Cart",
		setup(e) {
			const { setCartOpen: t, isCartOpen: c, globalEcomConfig: i } = z(),
				{ cart: a } = X(),
				h = J(() => a?.value?.lines),
				s = N(!1);
			return (
				Q(h, (m) => {}, {
					deep: !0,
				}),
				Q(c, (m) => {
					m
						? setTimeout(
								() => {
									s.value.style.zIndex = 1e4;
								},
								window.innerWidth > 768 ? 300 : 0,
							)
						: s && (s.value.style.zIndex = -1);
				}),
				(m, u) => {
					const d = se,
						b = on,
						k = be;
					return (
						o(),
						r("div", null, [
							l(
								"aside",
								{
									ref_key: "cartNode",
									ref: s,
									class: O([
										"cart",
										n(c)
											? "cart-active opacity-100"
											: "opacity-0 md:opacity-100",
									]),
								},
								[
									l("div", an, [
										l(
											"h3",
											sn,
											M(
												n(i)?.cartTitle
													? n(i).cartTitle
													: "Cart",
											) +
												" (" +
												M(n(h)?.length || 0) +
												")",
											1,
										),
										f(
											d,
											{
												handleClick: () => n(t)(!1),
											},
											null,
											8,
											["handleClick"],
										),
									]),
									n(h)?.length
										? (o(),
											r("div", ln, [
												(o(!0),
												r(
													C,
													null,
													A(
														n(h),
														(g) => (
															o(),
															$(
																b,
																{
																	key: g.id,
																	image: g
																		.merchandise
																		.image,
																	title: g
																		.merchandise
																		.product
																		.title,
																	vendor: g
																		.merchandise
																		.product
																		.vendor,
																	selectedOptions:
																		g
																			.merchandise
																			.selectedOptions,
																	lineItemId:
																		g.id,
																	merchId:
																		g
																			.merchandise
																			.id,
																	quantity:
																		g.quantity,
																	cost: g.cost,
																	price: g
																		.merchandise
																		.price,
																	lineItem: g,
																},
																null,
																8,
																[
																	"image",
																	"title",
																	"vendor",
																	"selectedOptions",
																	"lineItemId",
																	"merchId",
																	"quantity",
																	"cost",
																	"price",
																	"lineItem",
																],
															)
														),
													),
													128,
												)),
											]))
										: (o(),
											r("div", cn, [
												l(
													"h4",
													{
														class: "text-justify",
														textContent: M(
															n(i)?.emptyCartText
																? n(i)
																		.emptyCartText
																: "Your cart is currently empty.",
														),
													},
													null,
													8,
													rn,
												),
											])),
									n(h)?.length
										? (o(),
											r("div", un, [
												l("div", dn, [
													l("div", mn, [
														u[1] ||
															(u[1] = l(
																"span",
																{
																	class: "block",
																	textContent:
																		"Subtotal: ",
																},
																null,
																-1,
															)),
														f(
															k,
															{
																price: n(a)
																	?.cost
																	.subtotalAmount,
															},
															null,
															8,
															["price"],
														),
													]),
													l(
														"a",
														{
															href: n(
																a,
															).checkoutUrl?.replace(
																"enfants-r-deprimes.myshopify",
																"checkout.enfantsrichesdeprimes",
															),
															class: "erd-btn primary",
															textContent:
																"Continue to Checkout",
															target:
																m.dev &&
																"_blank",
														},
														null,
														8,
														vn,
													),
												]),
											]))
										: S("", !0),
								],
								2,
							),
							n(c)
								? (o(),
									r("button", {
										key: 0,
										"aria-label": "Close cart",
										onClick:
											u[0] || (u[0] = (g) => n(t)(!1)),
										class: "cart-underlay fixed w-screen h-screen top-0 left-0 underlay-style",
									}))
								: S("", !0),
						])
					);
				}
			);
		},
	},
	pn = R(hn, [["__scopeId", "data-v-32d75c7a"]]),
	we = (e = "RouteProvider") =>
		_e({
			name: e,
			props: {
				route: {
					type: Object,
					required: !0,
				},
				vnode: Object,
				vnodeRef: Object,
				renderKey: String,
				trackRootNodes: Boolean,
			},
			setup(t) {
				const c = t.renderKey,
					i = t.route,
					a = {};
				for (const h in t.route)
					Object.defineProperty(a, h, {
						get: () => (c === t.renderKey ? t.route[h] : i[h]),
						enumerable: !0,
					});
				return (
					Ne(ge, Ie(a)),
					() =>
						t.vnode
							? D(t.vnode, {
									ref: t.vnodeRef,
								})
							: t.vnode
				);
			},
		}),
	fn = we(),
	de = new WeakMap(),
	_n = _e({
		name: "NuxtPage",
		inheritAttrs: !1,
		props: {
			name: {
				type: String,
			},
			transition: {
				type: [Boolean, Object],
				default: void 0,
			},
			keepalive: {
				type: [Boolean, Object],
				default: void 0,
			},
			route: {
				type: Object,
			},
			pageKey: {
				type: [Function, String],
				default: null,
			},
		},
		setup(e, { attrs: t, slots: c, expose: i }) {
			const a = Se(),
				h = N(),
				s = re(ge, null);
			let m;
			i({
				pageRef: h,
			});
			const u = re(Ae, null);
			let d;
			const b = a.deferHydration();
			let k = !1,
				g = !1,
				x = 0;
			if (a.isHydrating) {
				const p = a.hooks.hookOnce("app:error", b),
					I = K().beforeEach(() => {
						(p(), I());
					});
			}
			e.pageKey &&
				Q(
					() => e.pageKey,
					(p, I) => {
						p !== I && a.callHook("page:loading:start");
					},
				);
			let v = !1;
			{
				const p = K().beforeResolve(() => {
					v = !1;
				});
				me(() => {
					(p(), b());
				});
			}
			return () =>
				D(
					He,
					{
						name: e.name,
						route: e.route,
						...t,
					},
					{
						default: (p) => {
							const I = gn(s, p.route, p.Component),
								y =
									s &&
									s.matched.length === p.route.matched.length;
							if (!p.Component) {
								if (d && !y && !te(d)) return d;
								b();
								return;
							}
							if (d && u && !te(d) && !u.isCurrent(p.route))
								return d;
							if (I && s && (!u || u?.isCurrent(s)))
								return (y || d) && !te(d) ? d : null;
							const _ = oe(p, e.pageKey),
								L = yn(s, p.route, p.Component);
							(!a.isHydrating &&
								m === _ &&
								!L &&
								ie(() => {
									v ||
										((v = !0),
										a.callHook("page:loading:end"));
								}),
								k && m !== _ && g && x++,
								(m = _));
							const w = !!(
									e.transition ??
									p.route.meta.pageTransition ??
									ue
								),
								B =
									w &&
									Oe([
										e.transition,
										p.route.meta.pageTransition,
										ue,
										{
											onAfterLeave() {
												(a["~transitionFinish"]?.(),
													delete a[
														"~transitionFinish"
													],
													delete a[
														"~transitionPromise"
													],
													a.callHook(
														"page:transition:finish",
														p.Component,
													));
											},
										},
									]),
								H = e.keepalive ?? p.route.meta.keepalive ?? Le;
							return (
								(d = je(
									w && B,
									Re(
										H,
										D(
											Ve,
											{
												key: x,
												suspensible: !0,
												onPending: () => {
													((k = !0),
														w &&
															!a[
																"~transitionPromise"
															] &&
															(a[
																"~transitionPromise"
															] = new Promise(
																(V) => {
																	a[
																		"~transitionFinish"
																	] = V;
																},
															)),
														a.callHook(
															"page:start",
															p.Component,
														));
												},
												onResolve: async () => {
													((k = !1), (g = !0));
													try {
														(await ie(),
															a._route.sync?.(),
															await a.callHook(
																"page:finish",
																p.Component,
															),
															!v &&
																!L &&
																((v = !0),
																await a.callHook(
																	"page:loading:end",
																)));
													} finally {
														b();
													}
												},
											},
											{
												default: () => {
													const V = {
														key: _ || void 0,
														vnode: c.default
															? xn(c.default, p)
															: p.Component,
														route: p.route,
														renderKey: _ || void 0,
														trackRootNodes: w,
														vnodeRef: h,
													};
													if (!H) return D(fn, V);
													const P = p.Component.type,
														F = P;
													let T = de.get(F);
													return (
														T ||
															((T = we(
																P.name ||
																	P.__name,
															)),
															de.set(F, T)),
														D(T, V)
													);
												},
											},
										),
									),
								).default()),
								d
							);
						},
					},
				);
		},
	});

function gn(e, t, c) {
	if (!e) return !1;
	const i = t.matched.findIndex((s) => s.components?.default === c?.type);
	if (i === -1) return !1;
	const a = t.matched.slice(0, i).filter((s) => s.components?.default);
	if (!a.length) return !1;
	const h = e.matched.filter((s) => s.components?.default);
	return (
		a.some((s, m) => s.components?.default !== h[m]?.components?.default) ||
		(c &&
			oe({
				route: t,
				Component: c,
			}) !==
				oe({
					route: e,
					Component: c,
				}))
	);
}

function yn(e, t, c) {
	return e
		? t.matched.findIndex((a) => a.components?.default === c?.type) <
				t.matched.length - 1
		: !1;
}

function xn(e, t) {
	const c = e(t);
	return c.length === 1 ? D(c[0]) : D(C, void 0, c);
}

function te(e) {
	return !!e && (!!e.suspense?.isUnmounted || !!e.component?.isUnmounted);
}
const bn = {
		class: "footer-content",
	},
	kn = {
		key: 0,
		class: "flex md:flex-row flex-col gap-y-4 md:gap-x-12 lg:gap-x-32 items-start w-full md:w-2/3",
	},
	wn = ["textContent"],
	Cn = {
		class: "md:hidden w-full mb-12 border-t border-solid border-black",
	},
	$n = {
		key: 0,
		class: "flex flex-col",
	},
	Mn = {
		class: "footer-bottom text-desktop-body uppercase w-full flex flex-col md:flex-row justify-between items-center",
	},
	Nn = {
		class: "flex md:flex-row flex-col items-center gap-x-4 text-mobile-heading md:text-desktop-body mb-16 md:mb-0",
	},
	In = {
		class: "hidden md:block",
	},
	Sn = {
		class: "md:hidden block mb-2",
	},
	An = {
		__name: "Footer",
		props: {
			menus: {
				type: Array,
				default: () => [],
			},
			menu: {
				type: Object,
				default: () => [],
			},
			newsletter: {
				type: Object,
			},
		},
		setup(e) {
			const { isFilterActive: t, isAddressFormActive: c } = z(),
				i = q();
			return (a, h) => {
				const s = U,
					m = ze;
				return (
					o(),
					r(
						"footer",
						{
							class: O([
								"relative z-[9999]",
								[
									n(t) || n(c)
										? "pl-[422px] pr-4 md:pr-8"
										: "px-4 md:px-8",
									n(i).name,
								],
							]),
						},
						[
							l("div", bn, [
								e.menus.length
									? (o(),
										r("div", kn, [
											(o(!0),
											r(
												C,
												null,
												A(
													e.menus,
													(u) => (
														o(),
														r(
															"div",
															{
																class: "column hidden md:block",
																key: u._key,
															},
															[
																l(
																	"p",
																	{
																		textContent:
																			M(
																				u.title,
																			),
																	},
																	null,
																	8,
																	wn,
																),
																u.navItems
																	?.length
																	? (o(!0),
																		r(
																			C,
																			{
																				key: 0,
																			},
																			A(
																				u.navItems,
																				(
																					d,
																				) => (
																					o(),
																					$(
																						s,
																						{
																							key: d._key,
																							link: d,
																						},
																						null,
																						8,
																						[
																							"link",
																						],
																					)
																				),
																			),
																			128,
																		))
																	: S("", !0),
															],
														)
													),
												),
												128,
											)),
											l("div", Cn, [
												(o(!0),
												r(
													C,
													null,
													A(
														e.menus,
														(u) => (
															o(),
															$(
																m,
																{
																	class: "w-full",
																	key: u._key,
																	title: u.title,
																},
																{
																	default: j(
																		() => [
																			u
																				.navItems
																				?.length
																				? (o(),
																					r(
																						"div",
																						$n,
																						[
																							(o(
																								!0,
																							),
																							r(
																								C,
																								null,
																								A(
																									u.navItems,
																									(
																										d,
																									) => (
																										o(),
																										$(
																											s,
																											{
																												key: d._key,
																												link: d,
																											},
																											null,
																											8,
																											[
																												"link",
																											],
																										)
																									),
																								),
																								128,
																							)),
																						],
																					))
																				: S(
																						"",
																						!0,
																					),
																		],
																	),
																	_: 2,
																},
																1032,
																["title"],
															)
														),
													),
													128,
												)),
											]),
										]))
									: S("", !0),
							]),
							l("div", Mn, [
								l("div", Nn, [
									l(
										"span",
										In,
										" torture equals solution © " +
											M(new Date().getFullYear()),
										1,
									),
									(o(!0),
									r(
										C,
										null,
										A(
											e.menu?.navItems,
											(u) => (
												o(),
												$(
													s,
													{
														key: u._key,
														link: u,
														class: "md:hover:text-dirt",
													},
													null,
													8,
													["link"],
												)
											),
										),
										128,
									)),
								]),
								l(
									"span",
									Sn,
									" torture equals solution © " +
										M(new Date().getFullYear()),
									1,
								),
								h[0] ||
									(h[0] = l(
										"a",
										{
											class: "md:hover:text-dirt",
											href: "https://specialoffer.inc",
										},
										"site by special offer, inc.",
										-1,
									)),
							]),
						],
						2,
					)
				);
			};
		},
	},
	On = R(An, [["__scopeId", "data-v-a4a3cf14"]]),
	Jn = {
		__name: "default",
		async setup(e) {
			let t, c;
			const i = new Date();
			(i.setTime(i.getTime() + 365 * 24 * 60 * 60 * 1e3),
				Y(Te, {
					expires: i,
				}));
			const a = Y(Ze, {
				maxAge: 3600 * 24 * 365,
				path: "/",
				watch: !0,
				secure: !0,
				sameSite: "lax",
				default: () => null,
			});
			xe();
			const { retrieveCart: h } = X(),
				{
					isCartOpen: s,
					isMobileMenuOpen: m,
					isAnnouncementBarEnabled: u,
					setIsMobile: d,
					setGlobalSiteSettings: b,
					setMobileMenu: k,
				} = z(),
				{ setCurrencyPreferences: g } = Be(),
				x = q(),
				{ data: v } =
					(([t, c] = Pe(async () =>
						Ee(async () => {
							try {
								const [y, _] = await Promise.all([g(), b()]);
								if (!_)
									return {
										isError: !0,
									};
								const {
									header: L,
									title: w,
									footer: B,
									siteUrl: H,
									seo: V,
									cookieConsent: P,
									newsletterPopup: F,
									passwordProtection: T,
								} = _;
								return {
									userLocale: y,
									header: L,
									footer: B,
									title: w,
									seo: V,
									siteUrl: H,
									cookieConsent: P,
									newsletterPopup: F,
									passwordProtection: T,
								};
							} catch (y) {
								return (
									console.log(y),
									{
										isError: y,
									}
								);
							}
						}, "$pbiUf6UDZG"),
					)),
					(t = await t),
					c(),
					t);
			Q(
				() => x.fullPath,
				async () => {
					setTimeout(() => {
						k(!1);
					}, 250);
				},
			);
			const p = () => {
					(window.innerWidth < 640 && d(!0),
						window.addEventListener(
							"resize",
							() => {
								(window.innerWidth < 640 && d(!0),
									window.innerWidth > 640 && d(!1));
							},
							{
								passive: !0,
							},
						));
				},
				I = async () => {
					try {
						console.log("RETRIEVING CART", a?.value);
						const y = await h(a?.value ? a.value : null);
						(console.log("Cart ID", y), (a.value = y.id));
					} catch (y) {
						console.log("cart error in default.vue", y);
					}
				};
			return (
				ae(() => {
					(p(), I());
				}),
				(y, _) => {
					const L = et,
						w = Fe,
						B = Lt,
						H = Dt,
						V = pn,
						P = _n,
						F = On;
					return (
						o(),
						r(
							"div",
							{
								id: "app-layout",
								class: O([n(s) && "move-page-left"]),
							},
							[
								n(v)?.passwordProtection?.passwordCheckbox
									? (o(),
										$(
											L,
											W(
												ee(
													{
														key: 0,
													},
													n(v).passwordProtection,
												),
											),
											null,
											16,
										))
									: S("", !0),
								f(
									w,
									ee(n(v).seo, {
										canonical: n(v).siteUrl,
									}),
									null,
									16,
									["canonical"],
								),
								f(B, W(ne(n(v).header)), null, 16),
								n(m)
									? (o(),
										$(
											H,
											W(
												ee(
													{
														key: 1,
													},
													n(v).header,
												),
											),
											null,
											16,
										))
									: S("", !0),
								f(V),
								l(
									"main",
									{
										class: O([
											"min-h-screen",
											n(u) ? "pt-8" : "",
										]),
									},
									[f(P)],
									2,
								),
								f(F, W(ne(n(v).footer)), null, 16),
							],
							2,
						)
					);
				}
			);
		},
	};
export { Jn as default };
