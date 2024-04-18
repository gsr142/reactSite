import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Form data:', formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </Box>
    );
}


