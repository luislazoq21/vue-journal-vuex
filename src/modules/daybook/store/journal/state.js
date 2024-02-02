import { v4 as uuidv4 } from 'uuid'

export default () => ({
    isLoading: true,
    entries: [
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            title: 'Entry 1',
            content: 'Magna consectetur ullamco esse ad eiusmod fugiat. Nulla proident non nostrud voluptate sit ut magna ullamco pariatur officia. Ex occaecat quis officia et adipisicing quis sunt mollit ex aliqua laboris aute deserunt. Velit exercitation elit ad id. Veniam cillum culpa veniam occaecat veniam qui et minim qui magna exercitation. Nisi eu duis id consequat adipisicing ea excepteur labore dolor eiusmod nisi Lorem minim. Sunt dolor elit adipisicing incididunt anim amet mollit elit tempor occaecat ut.',
            picture: null,
        },
        {
            id: uuidv4(),
            date: new Date().toDateString(),
            title: 'Entry 2',
            content: 'Velit enim Lorem esse officia voluptate occaecat non voluptate amet incididunt. Laborum excepteur sint sint aute exercitation excepteur incididunt aliquip qui non ex amet. Laborum reprehenderit ut fugiat ad irure. Esse proident Lorem dolore qui excepteur aute enim excepteur amet veniam. Tempor adipisicing incididunt labore nulla id eu est ex esse.',
            picture: null,
        },
    ],
})