// Everything a page or component needs to know about the current language.
// English is served at the root ("/projects"), other languages under a prefix ("/fr/projects").

import type { CV } from "@/cv";
import en from "../../cv_en.json";
import fr from "../../cv.json";
import { ui, type UIKey } from "./ui";

export const LANGS = ["en", "fr"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

// `satisfies` makes the build fail if a CV file does not match the CV type.
const CVS = { en, fr } satisfies Record<Lang, CV>;

const isLang = (value: string | undefined): value is Lang => LANGS.includes(value as Lang);

/** Language of the current page, read from its URL ("/fr/..." -> "fr", anything else -> "en"). */
export function getLang(url: URL): Lang {
	const firstSegment = url.pathname.split("/")[1];
	return isLang(firstSegment) ? firstSegment : DEFAULT_LANG;
}

export function getCV(lang: Lang): CV {
	return CVS[lang];
}

/** Returns t("key") for the given language. Placeholders like {name} are filled from `values`. */
export function useTranslations(lang: Lang) {
	return (key: UIKey, values: Record<string, string> = {}) =>
		Object.entries(values).reduce<string>((text, [name, value]) => text.replaceAll(`{${name}}`, value), ui[lang][key]);
}

/** Path without its language prefix: "/fr/projects/" -> "/projects". */
export function stripLang(pathname: string): string {
	const [, first, ...rest] = pathname.split("/");
	const path = "/" + (isLang(first) ? rest : [first, ...rest]).filter(Boolean).join("/");
	return path;
}

/** Same page in another language: localizePath("/projects", "fr") -> "/fr/projects". */
export function localizePath(path: string, lang: Lang): string {
	const clean = stripLang(path);
	if (lang === DEFAULT_LANG) return clean;
	return clean === "/" ? `/${lang}` : `/${lang}${clean}`;
}

/** For getStaticPaths() in src/pages/[...lang]/: builds each page once per language. */
export function getLangPaths() {
	return LANGS.map((lang) => ({ params: { lang: lang === DEFAULT_LANG ? undefined : lang } }));
}
