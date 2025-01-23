import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function Color() {
    const [color, setColor] = useState('');

    const handleChange = (e) => {
        setColor(e.target.value); 
    };

    return (
        <div style={{ background: color, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TextField onChange={handleChange} name='color' placeholder="Enter your color" type='text' value={color} />
        </div>
    );
}