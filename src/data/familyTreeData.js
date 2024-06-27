// familyTreeData.js

const familyTreeData = [
    {
        name: 'Juthathep Patriarch',
        imageUrl: 'path/to/juthathep_patriarch.jpg',
        children: [
            {
                name: 'Brother 1',
                imageUrl: 'path/to/brother_1.jpg',
                children: [
                    {
                        name: "Brother 1's Child",
                        imageUrl: 'path/to/brother_1_child.jpg',
                        children: []
                    }
                ]
            },
            {
                name: 'Brother 2',
                imageUrl: 'path/to/brother_2.jpg',
                children: [
                    {
                        name: "Brother 2's Child",
                        imageUrl: 'path/to/brother_2_child.jpg',
                        children: []
                    }
                ]
            }
            // Add more family members as needed
        ]
    }
    // Add more top-level family members as needed
];

export default familyTreeData;
