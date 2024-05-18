// linksData.js
const links = [
    {
        id: 1,
        text: 'Home',
        path: '/',
        dropdownOptions: [] // Array of dropdown options for the 'Home' link
    },
    {
        id: 2,
        text: 'Blogs',
        path: '/blogs',
    },
    {
        id: 3,
        text: 'Recipes',
        path: '/recipes',
    },
    {
        id: 4,
        text: 'Contact',
        path: '/contact',
        dropdownOptions: ['Email', 'Phone', 'Address'] // Example dropdown options for the 'Contact' link
    },
    {
        id: 5,
        text: 'Profile',
        dropdownOptions: ['Edit','Logout']
    },
    
];

export default links;
