import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import macaron from '../../../shared/assets/Abu/macaron.svg';
import { postUsers } from '../store/action';
import { selectRegisterLoading, selectRegisterError } from '../store/selectors';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectRegisterLoading);
  const error = useSelector(selectRegisterError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(postUsers(formData));

      if (response && response.status === 201) {
        console.log('Registration successful:', response.data);
        // Дополнительные действия после успешной регистрации, например, перенаправление на страницу входа
        navigate('/login');
      } else {
        console.error('Invalid response from server:', response);
        // Обработка других статусов ответа
      }
    } catch (error) {
      console.error('Registration failed:', error);
      // Обработка ошибок регистрации
    }
  };

  return (
    <div className='bg-[#F7EBE5]'>
      <img className='w-full mx-auto mb-[50px]' src={macaron} alt="Macaron"/>
      <Container component="main">
        <Box
          sx={{
            width: '970px',
            height: '622px',
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 'auto',
          }}
        >
          <Typography component='h1' variant='h5' fontWeight={"bold"}>Получите доступ к оптовым ценам</Typography>
          <Typography component="h1" color={"rgb(41, 41, 41)"}>
            Пройдите Регистрация
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Box 
              sx={{
                display: 'flex',
                gap: '50px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '400px'
                }}
              >
                <TextField
                  name="first_name"
                  required
                  id="firstName"
                  label="Имя"
                  value={formData.first_name}
                  onChange={handleChange}
                  autoFocus
                  margin="normal"
                />
                <TextField
                  name="last_name"
                  required
                  id="lastName"
                  label="Фамилия"
                  value={formData.last_name}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name="email"
                  required
                  id="email"
                  label="Электронная почта"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '400px'
                }}
              >
                <TextField
                  name="password"
                  required
                  id="password"
                  label="Пароль"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  name='password_confirmation'
                  required
                  id='password_confirmation'
                  label="Подтвердите пароль"
                  type='password'
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  margin="normal"
                />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Зарегистрироваться
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            <Typography variant="body2" color="textSecondary" align="center">
              Уже есть аккаунт?{' '}
              <Link to={'/login'} variant="body2">
                Войти
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Register;
