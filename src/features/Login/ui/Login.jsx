// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Link, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import macaron from '../../../shared/assets/Abu/macaron.svg';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login Data:', formData);
//   };

//   const handleRegisterRedirect = () => {
//     navigate('/register');
//   };

//   return (
//     <div className='bg-[#F7EBE5]'>
//       <img className='w-full mx-auto mb-[50px]' src={macaron} alt="Macaron"/>
//       <Container component="main">
//         <Box
//           sx={{
//             width: '970px',
//             height: '622px',
//             marginTop: '100px',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: 'auto',
//           }}
//         >
//           <Typography component='h1' variant='h5' fontWeight={"bold"}>Добро пожаловать обратно</Typography>
//           <Typography component="h1" color={"rgb(41, 41, 41)"}>
//             Пожалуйста, войдите
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Box 
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '20px',
//                 width: '400px',
//                 margin: 'auto',
//               }}
//             >
//               <TextField
//                 name="email"
//                 required
//                 id="email"
//                 label="Электронная почта"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//               <TextField
//                 name="password"
//                 required
//                 id="password"
//                 label="Пароль"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 margin="normal"
//               />
//             </Box>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color='secondary'
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Войти
//             </Button>
//             <Typography variant="body2" color="textSecondary" align="center">
//               Нет аккаунта?{' '}
//               <Link to={'/register'} onClick={handleRegisterRedirect} variant="body2">
//                 Зарегистрироваться
//               </Link>
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default Login;







import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
import macaron from '../../../shared/assets/Abu/macaron.svg';
import { postLogin } from '../store/action';
import { selectLoginLoading, selectLoginError } from '../store/selectors';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoginLoading);
  const error = useSelector(selectLoginError);

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
      const response = await dispatch(postLogin(formData));
      
      if (response && response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        navigate('/'); // Перенаправляем на защищенную страницу после успешного входа
      } else {
        console.error('Token not found in response');
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Обработка ошибок входа
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
          <Typography component='h1' variant='h5' fontWeight={"bold"}>Добро пожаловать обратно</Typography>
          <Typography component="h1" color={"rgb(41, 41, 41)"}>
            Пожалуйста, войдите
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '400px',
                margin: 'auto',
              }}
            >
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
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Войти
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            <Typography variant="body2" color="textSecondary" align="center">
              Нет аккаунта?{' '}
              <Link to={'/register'}  variant="body2">
                Зарегистрироваться
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
