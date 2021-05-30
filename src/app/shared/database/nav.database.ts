import { Nav } from "../models/nav";

export const NAV: Nav[] = [
    {
        title: 'Agreement',
        icon: 'star',
        value: 'agreement',
        color: 'green',
        url: '/home/agreement'
    },
    {
        title: 'Agreement Specification',
        icon: 'star',
        value: 'agreement-specification',
        color: 'blue',
        url: '/home/agreement-specification'
    },
    {
        title: 'Add Agreement',
        icon: 'add_agreement',
        value: 'add-agreement',
        color: 'orange',
        url: '/home/add-agreement'
    }
];