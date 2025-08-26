


export interface NavLink {
    name: string;
    dropdown?: string[];
}

export const navLinks: NavLink[] = [
    { name: 'FORSIDE' },
    { name: 'OM', dropdown: [] },
    {
        name: 'KONSULTATIONER OG BEHANDLINGER',
        dropdown: [
            'Telefonkonsultation',
            'Akupunktur',
            'Biodynamisk Kranio Sakral terapi',
            'Diabetes og livsstilsforløb',
            'Fysiurgisk massage',
            'Bindevævs massage',
            'RenKost',
        ],
    },
    { name: 'SYMPTOMER', dropdown: [
        'Rygsmerter',
        'Nakkesmerter',
        'Hovedpine',
        'Kæbesmerter',
        'Stress',
        'Angst',
        'Depression',
        'Fysiske symptomer',
        'Psykiske symptomer',
    ] },
    { name: 'BOOK TID' },
    { name: 'Certifikater' },
    { name: 'EVENTS' },
    { name: '#SOME' , dropdown: [
        'facebook', 
        'instagram',
        'Alexander',
        'Louise'
    ] },
];  