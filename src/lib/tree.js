// lib/tree.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { JSDOM } from 'jsdom';

const dataDirectory = path.join(process.cwd(), 'src', 'data');

export function getTreeData() {
    const fullPath = path.join(dataDirectory, 'familyTree.md');
    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { content } = matter(fileContents);
    
    return parseMarkdownToTree(content);
}

function parseMarkdownToTree(markdown) {
    const html = marked(markdown);
    const dom = new JSDOM(html);
    const rootElement = dom.window.document.body.firstElementChild;

    const createTree = (element) => {
        if (!element) return [];

        const children = [];
        element.childNodes.forEach((child) => {
            if (child.nodeName === 'LI') {
                const childText = child.firstChild ? child.firstChild.textContent.trim() : '';
                const grandChildren = createTree(child.querySelector('ul'));
                children.push({ name: childText, children: grandChildren });
            }
        });
        return children;
    };

    const tree = createTree(rootElement);
    return { name: "Root", children: tree };
}
