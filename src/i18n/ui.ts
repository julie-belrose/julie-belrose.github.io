// Interface texts (everything that is not in the CV files).
// "en" is the reference: "fr" is typed with its keys, so a missing or extra key fails the build.
// Use {name} placeholders for values, filled by t("key", { name: "..." }).

const en = {
	"nav.home": "Home",
	"nav.projects": "Projects",
	"nav.experiences": "Experiences",
	"nav.education": "Education",
	"nav.skills": "Skills",
	"nav.contact": "Contact",
	"nav.languages": "Available languages",

	"theme.toDark": "Switch to dark mode",
	"theme.toLight": "Switch to light mode",

	"section.profile": "My profile",
	"section.projects": "Projects",
	"section.experiences": "Experiences",
	"section.education": "Education",
	"section.skills": "Skills",
	"section.interests": "Interests",
	"section.languages": "Languages",

	"hero.copied": "Copied!",
	"hero.call": "Call {name} at {phone}",
	"hero.visitProfile": "Visit {name} profile on {network}",

	"projects.view": "View {name}",
	"projects.viewRepo": "View {name} repository on GitHub",

	"experience.present": "Present",
	"experience.summary": "Summary:",
	"experience.responsibilities": "Responsibilities:",
	"experience.achievements": "Achievements:",
	"experience.showMore": "Show more",
	"experience.showLess": "Show less",
	"experience.technologies": "Technologies used",

	"education.diplomas": "Diplomas",
	"education.certifications": "Professional certifications",
	"education.courses": "Courses",
	"education.ongoing": "Ongoing",

	"keyboard.press": "Press",
	"keyboard.toOpen": "to open the command palette.",
	"keyboard.search": "Search command",
	"keyboard.social": "Social",
	"keyboard.visit": "Visit {network}",
	"keyboard.actions": "Actions",
	"keyboard.print": "Print resume",

	"contact.title": "Contact",
	"contact.desc": "Let's take the time to talk",
	"contact.intro": "Need more information or want to collaborate?",
	"contact.cta": "Don't hesitate to contact me via this form. I'll be delighted to get back to you as soon as possible.",

	"form.firstName": "First name",
	"form.firstNameError": "Please provide your first name.",
	"form.lastName": "Last name",
	"form.lastNameError": "Please provide your last name.",
	"form.email": "Email address",
	"form.emailEmpty": "Please provide your email address.",
	"form.emailInvalid": "Please provide a valid email address.",
	"form.message": "Your message",
	"form.messageError": "Please enter your message.",
	"form.send": "Send message",
	"form.sending": "Sending...",
	"form.error": "Something went wrong!",
};

export type UIKey = keyof typeof en;

const fr: Record<UIKey, string> = {
	"nav.home": "Accueil",
	"nav.projects": "Projets",
	"nav.experiences": "Expériences",
	"nav.education": "Formation",
	"nav.skills": "Compétences",
	"nav.contact": "Contact",
	"nav.languages": "Langues disponibles",

	"theme.toDark": "Passer en mode sombre",
	"theme.toLight": "Passer en mode clair",

	"section.profile": "Mon profil",
	"section.projects": "Projets",
	"section.experiences": "Expériences",
	"section.education": "Formation",
	"section.skills": "Compétences",
	"section.interests": "Centres d'intérêt",
	"section.languages": "Langues",

	"hero.copied": "Copié !",
	"hero.call": "Appeler {name} au {phone}",
	"hero.visitProfile": "Voir le profil {network} de {name}",

	"projects.view": "Voir {name}",
	"projects.viewRepo": "Voir le dépôt GitHub de {name}",

	"experience.present": "Aujourd'hui",
	"experience.summary": "Résumé :",
	"experience.responsibilities": "Responsabilités :",
	"experience.achievements": "Réalisations :",
	"experience.showMore": "Voir plus",
	"experience.showLess": "Voir moins",
	"experience.technologies": "Technologies utilisées",

	"education.diplomas": "Diplômes",
	"education.certifications": "Certifications professionnelles",
	"education.courses": "Formations suivies",
	"education.ongoing": "En cours",

	"keyboard.press": "Appuyez sur",
	"keyboard.toOpen": "pour ouvrir la palette de commandes.",
	"keyboard.search": "Rechercher une commande",
	"keyboard.social": "Réseaux",
	"keyboard.visit": "Ouvrir {network}",
	"keyboard.actions": "Actions",
	"keyboard.print": "Imprimer le CV",

	"contact.title": "Contact",
	"contact.desc": "Prenons le temps d'échanger",
	"contact.intro": "Besoin de plus d'informations ou envie de collaborer ?",
	"contact.cta": "N'hésitez pas à me contacter via ce formulaire. Je vous répondrai avec plaisir dans les meilleurs délais.",

	"form.firstName": "Prénom",
	"form.firstNameError": "Merci d'indiquer votre prénom.",
	"form.lastName": "Nom",
	"form.lastNameError": "Merci d'indiquer votre nom.",
	"form.email": "Adresse e-mail",
	"form.emailEmpty": "Merci d'indiquer votre adresse e-mail.",
	"form.emailInvalid": "Merci d'indiquer une adresse e-mail valide.",
	"form.message": "Votre message",
	"form.messageError": "Merci d'écrire votre message.",
	"form.send": "Envoyer le message",
	"form.sending": "Envoi en cours...",
	"form.error": "Une erreur est survenue !",
};

export const ui = { en, fr };
