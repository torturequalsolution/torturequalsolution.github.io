import { x as e, o as n, c as o, t as a } from "./B8tedW2S.js";
const s = ["textContent"],
	i = {
		__name: "Error",
		props: {
			msg: String,
			clearMessage: Function,
			duration: { type: Number, default: () => 3e3 },
		},
		setup(t) {
			return (
				e(() => {
					setTimeout(() => {
						t.clearMessage();
					}, t.duration);
				}),
				(r, c) => (
					n(),
					o("span", { textContent: a(t.msg) }, null, 8, s)
				)
			);
		},
	};
export { i as _ };
