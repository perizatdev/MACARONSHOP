import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Имя"
            value={formData.firstName}
            onChange={handleChange}
            autoFocus
            margin="normal"
          />
          <TextField
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="email"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="password"
            required
            fullWidth
            id="password"
            label="Пароль"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            Уже есть аккаунт?{' '}
            <Link to={'/login'} onClick={handleLoginRedirect} variant="body2">
              Войти
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
