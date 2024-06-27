// src/components/FamilyTree.js

import React from 'react';

const FamilyTree = ({ familyTree }) => {
    return (
        <div className="flex flex-col items-center">
            {familyTree.map((familyMember) => (
                <div key={familyMember.name} className="mt-4">
                    <div className="text-lg font-semibold">{familyMember.name}</div>
                    <div className="flex mt-2">
                        {familyMember.children.map((child) => (
                            <div key={child.name} className="flex flex-col items-center mr-4">
                                {/* Display the child's image */}
                                <img src={child.imageUrl} alt={child.name} className="w-20 h-20 rounded-full mb-2" />
                                {/* Display the child's name */}
                                <div className="text-sm">{child.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FamilyTree;
