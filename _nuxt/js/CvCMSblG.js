import { l as e, p as t } from "./BlTv-wRR.js";

const o = `
	...,

	_type = 'textMarquee' => {
		...,

		textSlices[] {
			...,

			_type == 'navBar' => {
				${e}
			}
		}
	},

	_type == 'hero' => {
		...,

		media,

		ctaLink {
			${e}
		}
	},

	_type == 'card' => {
		...,

		media,

		button {
			${e}
		}
	},

	_type == 'longFormText' => {
		...,

		content[] {
			${t}
		}
	},

	_type == 'cardGroupCTA' => {
		...,

		link {
			${e}
		},

		content[] {
			...,

			"link": link -> {
				"_key": _id,
				"title": coalesce(store.title, title),

				"page": {
					"type": _type,

					"slug": coalesce(store.slug.current, slug.current, handle, slug)
				}
			}
		}
	},

	_type == 'featuredProducts' => {
		...,

		products[] -> {
			"handle": store.slug.current,
			"id": store.gid
		}
	},

	_type == 'featuredCollection' => {
		...,

		isLink,

		link {
			${e}
		},

		collection ->
	}
`;

export { o as b };
