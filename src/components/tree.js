// components/Tree.js
const Tree = ({ tree }) => {
    return (
        <ul className="list-none pl-5">
            <TreeNode node={tree} />
        </ul>
    );
};

const TreeNode = ({ node }) => {
    return (
        <li className="mb-2">
            {node.name}
            {node.children && node.children.length > 0 && (
                <ul className="list-none pl-5">
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default Tree;
