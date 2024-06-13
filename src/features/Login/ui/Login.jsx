import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
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
    console.log('Login Data:', formData);
    // Здесь вы можете добавить логику для авторизации пользователя
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
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
          Вход
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
            autoFocus
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
            Войти
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            Нет аккаунта?{' '}
            <Link to={'/register'} onClick={handleRegisterRedirect} variant="body2">
              Зарегистрироваться
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
