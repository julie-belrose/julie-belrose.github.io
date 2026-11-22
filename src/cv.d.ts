// Shape of cv_en.json and cv.json. Both files are checked against it in src/i18n/utils.ts,
// so the build fails if one language is missing a field.
export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  certificates: Array<Certificates>;
  courses: Array<Courses>;
  skills: Array<SkillCategory>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

type DateStr = string;
type Highlight = Array<string>;

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  summary_second: string;
  theme: string;
  location: Location;
  availability: string;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  location_type: string;
  location: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights?: Highlight;
  responsibilities?: Highlight;
  achievements?: Highlight;
  skills: Array<string>;
}

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr | null;
  score: string;
  courses: Array<string>;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url?: string;
}

interface Courses {
  name: string;
  date: DateStr;
  issuer: string;
  url?: string;
  teaching?: string;
  courses?: Array<string>;
  category: string;
}

interface SkillCategory {
  category: string;
  items: Array<Skills>;
}

interface Skills {
  icon: string;
  name?: string;
  level: string;
  keywords: Array<string>;
}

interface Languages {
  language: string;
  fluency: string;
  url?: string;
  icon: string;
}

interface Interests {
  name: string;
  icon: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Technos = {
  icon: string;
  name?: string;
};

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url?: string;
  github?: string;
  technos: Technos[];
}
