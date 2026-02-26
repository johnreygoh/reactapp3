import React, { memo } from 'react';

// Wraps the component in memo
const StatBox = memo(({ title, value }) => {
    // component code here
    console.log(`Rendering StatBox: ${title}`);
    return <div className="box"><h2>{title}</h2><p>{value}</p></div>;
});

export default StatBox;
