export interface DropdownItem {
  label: string;
  href?: string;
}

export interface NavLink {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export const navLinks: NavLink[] = [
  { name: 'FORSIDE', href: '/' },
  { name: 'OM', dropdown: [
    { label: 'Om os', href: '/om-os' },
    { label: 'Louise', href: 'https://holistisksundhedshus.dk/' },
    { label: 'Alexander', href: '/alexander' },
  ] },
  {
    name: 'KONSULTATIONER OG BEHANDLINGER',
    dropdown: [
      { label: 'Akupunktur', href: '/akupunktur' },
      { label: 'Bindevævs massage', href: '/bindevavs-massage' },
      { label: 'Biodynamisk Kranio Sakral terapi', href: '/biodynamisk-kranio-sakral-terapi' },
      { label: 'Diabetes og livsstilsforløb', href: '/diabetes-og-livsstilsforlob' },
      { label: 'Fysiurgisk massage', href: '/fysiurgisk-massage' },
      { label: 'RenKost', href: '/ren-kost' },
      { label: 'Telefonkonsultation', href: '/telefonkonsultation' },
    ],
  },
  { name: 'SYMPTOMER', dropdown: [
    { label: 'Angst', href: '/angst'},
    { label: 'Depression', href: '/depression' },
    { label: 'Fysiske symptomer', href: '/fysiske-symptomer' },
    { label: 'Hovedpine', href: '/hovedpine' },
    { label: 'Kæbesmerter', href: '/kaebesmerter' },
    { label: 'Nakkesmerter', href: '/nakkesmerter' },
    { label: 'Psykiske symptomer', href: '/psykiske-symptomer' },
    { label: 'Rygsmerter', href: '/rygsmerter' },
    { label: 'Stress', href: '/stress' },
  ] },
  { name: 'BOOK TID', href: '/book-tid' },
  { name: 'Certifikater', href: '/certifikater' },
];
