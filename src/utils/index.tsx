import { Images } from '@Root/config/images';

export const isProduction = process.env.NODE_ENV === 'production';

export const topNav = [
    { title: 'Dashboard', url: '#', hasChild: false, icons: '', class: '' },
    { title: 'CMS', url: '#', hasChild: false, icons: '', class: 'active' },
    { title: 'Services Bus', url: '#', hasChild: false, icons: '', class: '' },
    { title: 'Systems configuration', url: '#', hasChild: false, icons: '', class: '' },
];

export const sidebarNavMain = [
    {title: 'FlyMed', url: '#', icons: Images.Note}
];

export const sidebarTemplates = [
    {title: 'Procedures', url: '/', icons: ''}
];

export const sidebarCategories = [
    {title: 'Methods', url: '#', icons: ''},
    {title: 'Benefits', url: '/benefit', icons: ''},
    {title: 'Risks', url: '/risk', icons: ''},
    {title: 'Considerations', url: '#', icons: ''},
    {title: 'Future-considerations', url: '#', icons: ''},
    {title: 'Anaesthetics', url: '#', icons: ''},
    {title: 'Specialties', url: '#', icons: ''},
    {title: 'Treatment-providers', url: '#', icons: ''},
    {title: 'Additional-treatments', url: '#', icons: ''},
    {title: 'Sites', url: '#', icons: ''},
];