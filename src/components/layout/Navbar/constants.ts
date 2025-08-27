
export interface DropdownItem {
  label: string;
  href?: string;
}

export interface NavLink {
  name: string;
  dropdown?: DropdownItem[];
}

export const navLinks: NavLink[] = [
  { name: 'FORSIDE' },
  { name: 'OM', dropdown: [
    { label: 'Om os' },
    { label: 'Louise', href: '/louise' },
    { label: 'Alexander', href: '/alexander' },
  ] },
  {
    name: 'KONSULTATIONER OG BEHANDLINGER',
    dropdown: [
      { label: 'Telefonkonsultation' },
      { label: 'Akupunktur' },
      { label: 'Biodynamisk Kranio Sakral terapi' },
      { label: 'Diabetes og livsstilsforløb' },
      { label: 'Fysiurgisk massage' },
      { label: 'Bindevævs massage' },
      { label: 'RenKost' },
    ],
  },
  { name: 'SYMPTOMER', dropdown: [
    { label: 'Rygsmerter' },
    { label: 'Nakkesmerter' },
    { label: 'Hovedpine' },
    { label: 'Kæbesmerter' },
    { label: 'Stress' },
    { label: 'Angst' },
    { label: 'Depression' },
    { label: 'Fysiske symptomer' },
    { label: 'Psykiske symptomer' },
  ] },
  { name: 'BOOK TID' },
  { name: 'Certifikater' },
];
