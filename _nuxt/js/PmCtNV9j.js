import { T as N, M as T, L as y, H as h } from "./C5rrWGVN.js";
import {
	O as p,
	o as c,
	h as w,
	w as s,
	c as l,
	F as i,
	b as e,
	d as x,
	t as C,
	g as a,
	i as r,
	q as d,
} from "./B8tedW2S.js";
const M = {
	__name: "Sanity",
	props: {
		title: String,
		image: Object,
		description: String,
		canonical: { type: String, default: () => "" },
	},
	setup(t) {
		const { $urlFor: g } = p(),
			o = d(() => g(t.image).url()),
			u = d(() => {
				let m = t.title.replace("&", "and");
				return t.title.toUpperCase().includes("TORTURE EQUALS SOLUTION")
					? m
					: m + " — TORTURE EQUALS SOLUTION";
			});
		return (m, E) => {
			const f = N,
				n = T,
				S = y,
				k = h;
			return (
				c(),
				w(k, null, {
					default: s(() => [
						t.title
							? (c(),
								l(
									i,
									{ key: 0 },
									[
										e(f, null, {
											default: s(() => [x(C(a(u)), 1)]),
											_: 1,
										}),
										e(
											n,
											{
												name: "twitter:title",
												content: a(u),
											},
											null,
											8,
											["content"],
										),
										e(
											n,
											{ name: "og:title", content: a(u) },
											null,
											8,
											["content"],
										),
									],
									64,
								))
							: r("", !0),
						t.description
							? (c(),
								l(
									i,
									{ key: 1 },
									[
										e(
											n,
											{
												name: "description",
												content: t.description,
											},
											null,
											8,
											["content"],
										),
										e(
											n,
											{
												name: "twitter:description",
												content: t.description,
											},
											null,
											8,
											["content"],
										),
										e(
											n,
											{
												name: "og:description",
												content: t.description,
											},
											null,
											8,
											["content"],
										),
									],
									64,
								))
							: r("", !0),
						t.image && a(o)
							? (c(),
								l(
									i,
									{ key: 2 },
									[
										e(
											n,
											{ name: "image", content: a(o) },
											null,
											8,
											["content"],
										),
										e(
											n,
											{ name: "og:image", content: a(o) },
											null,
											8,
											["content"],
										),
										e(
											n,
											{
												name: "twitter:image",
												content: a(o),
											},
											null,
											8,
											["content"],
										),
									],
									64,
								))
							: r("", !0),
						t.canonical?.length
							? (c(),
								l(
									i,
									{ key: 3 },
									[
										e(
											S,
											{
												rel: "canonical",
												href: t.canonical,
											},
											null,
											8,
											["href"],
										),
										e(
											n,
											{
												name: "og:url",
												content: t.canonical,
											},
											null,
											8,
											["content"],
										),
									],
									64,
								))
							: r("", !0),
					]),
					_: 1,
				})
			);
		};
	},
};
export { M as _ };
