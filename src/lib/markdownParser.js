// src/lib/markdownParser.js

import remark from 'remark';
import visit from 'unist-util-visit';

// Define a function to parse the Markdown data and extract the family tree structure
function parseMarkdownData(markdownContent) {
    const tree = remark().parse(markdownContent);

    const familyTree = [];

    // Traverse the Markdown tree and extract the family tree structure
    visit(tree, 'list', (listNode) => {
        const listItems = listNode.children;

        listItems.forEach((listItem) => {
            const listItemText = listItem.children[0].value;
            const familyMember = parseListItem(listItemText);

            if (familyMember) {
                familyTree.push(familyMember);
            }
        });
    });

    return familyTree;
}

// Define a function to parse a list item and extract family member information
function parseListItem(listItemText) {
    // Define a regular expression to match the structure of a family tree list item
    const listItemRegex = /^- (.+)$/;

    const match = listItemText.match(listItemRegex);

    if (match) {
        const name = match[1];
        // You can extract additional information such as image URLs here if needed
        return { name, children: [] };
    }

    return null;
}

export { parseMarkdownData };
