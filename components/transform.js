import React, { useState } from 'react';
import styles from '../styles/TransformButton.module.css';

const TransformButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className={styles.buttons}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered ? '< /A > Home' break;}: 'D@hbfrg'}
        </div>
    );
}

export default TransformButton;
