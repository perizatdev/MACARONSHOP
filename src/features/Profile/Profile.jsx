import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import profilePng from '../../shared/assets/Peri/profile.png';
import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        url: '',
        firstName: '',
        lastName: '',
        paragraph: ''
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
        handleClose();
    };




    return (
        <div className='bg-[#F7EBE5] h-screen flex items-center'>
            <div className='w-[800px] h-[500px] shadow-lg bg-white rounded-lg mx-auto '>
                <Link to={'/'}>
                    <img  className='absolute w-[32px] h-[32px] ml-[750px] mt-3' src='https://cdn.onlinewebfonts.com/svg/img_403105.png'/>
                </Link>
                <div className='flex flex-col'>
                    <div className='flex '>
                        <img className='w-[200px] h-[200px] border border-red-400 rounded-full ml-[12px] mt-[12px]' src={profilePng} alt="Profile"/>
                        <img
                            className='w-[24px] h-[24px] mt-[180px] cursor-pointer'
                            src="https://w7.pngwing.com/pngs/330/7/png-transparent-computer-icons-pencil-quill-svg-angle-pencil-rectangle.png"
                            alt="Edit"
                            onClick={handleOpen}
                        />
                        <div className='flex flex-col gap-[50px] mt-[100px] ml-[100px]'>
                            <div className='w-[400px] h-[25px] border-b border-gray-500 '></div>
                            <div className='w-[400px] h-[25px] border-b border-gray-500 '></div>
                        </div>
                    </div>
                    <div className='w-[700px] min-h-[24px] flex justify-start border-b border-gray-500 ml-[35px] mt-[50px]'></div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Profile
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="URL"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Paragraph"
                        name="paragraph"
                        value={formData.paragraph}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                    <Button onClick={handleSubmit} sx={{ mt: 2 }} variant="contained" color="primary">OK</Button>
                </Box>
            </Modal>
        </div>
    );
}
