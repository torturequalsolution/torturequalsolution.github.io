import {
	x as u,
	o,
	c as s,
	a as l,
	t as r,
	n as c,
	g as v,
	p as d,
} from "./B8tedW2S.js";
const g = ["for", "textContent"],
	f = ["id", "type", "value"],
	C = {
		__name: "Field",
		props: {
			type: String,
			label: String,
			value: String,
			handleChange: Function,
			id: String,
		},
		setup(e) {
			const t = d(!1),
				i = (n) => {
					(n.target.value.length > 0
						? (t.value = !0)
						: (t.value = !1),
						e.handleChange(n));
				};
			return (
				u(() => {
					t.value = !!e.value.length;
				}),
				(n, a) => (
					o(),
					s(
						"div",
						{
							class: c(["input-group", v(t) && "active"]),
							onClick: a[0] || (a[0] = (h) => (t.value = !0)),
						},
						[
							l(
								"label",
								{ for: e.id, textContent: r(e.label) },
								null,
								8,
								g,
							),
							l(
								"input",
								{
									id: e.id,
									type: e.type,
									value: e.value,
									onInput: i,
								},
								null,
								40,
								f,
							),
						],
						2,
					)
				)
			);
		},
	};
export { C as _ };
