// import React from 'react'

// export default function Button2() {
//     return (
//         <div>
//             <button className='bg-blue-400 p-4'>test</button>
//         </div>
//     )
// }


import React from 'react';

const Button2 = ({ label, backgroundColor, size, ...props }) => {
    const styles = {
        backgroundColor,
        padding: size === 'large' ? '16px' : '8px',
    };

    return (
        <button style={styles} {...props}>
            {label}
        </button>
    );
};

export default Button2;
