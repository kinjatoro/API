import { Helmet } from 'react-helmet-async';
import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button,
  InputAdornment,TextField,IconButton,CardActions,Card,Avatar,
  CardContent,Box
  } from '@mui/material';

  import { LoadingButton } from '@mui/lab';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import { useAuth } from '../Auth'
// sections
import { RegisterForm } from '../sections/auth/login';
import foto from '../fb.jpg'

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function RegisterPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  }

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();
  const [bool, setBool] = useState(true);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [titulo, setTitulo] = useState('');
  const [experiencia, setExperiencia] = useState('');


  const [cambioLogo, setCambioLogo] = useState(false);
  const [logo, setLogo] = useState();
  const handleLogoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile){
      setLogo(selectedFile);
      setCambioLogo(true);
    }
  };


  const handleClick2 = () => {
    setBool(false);

  };

  const handleClick3 = () => {
    navigate('/dashboard');
    setAuth(true);
  }

  return (
    <>
      <Helmet>
        <title> Registro | Neilo </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        

        <Container maxWidth="sm">
          <StyledContent>


          {bool ? (<>
            <Typography variant="h3" gutterBottom>
              Registrarse
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              ¿Ya tenés cuenta? {''}
              <Link variant="subtitle2" onClick={handleClick} sx={{ cursor: 'pointer' }}>Iniciar Sesión</Link>
            </Typography>
           
            <Stack spacing={3}>
            <TextField name="nombre" label="Nombre y Apellido" value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
            <TextField name="mail" label="Correo Electrónico" value={correo}
            onChange={(e) => setCorreo(e.target.value)}/>
            <TextField name="telefono" label="Teléfono" value={telefono}
            onChange={(e) => setTelefono(e.target.value)}/>
            <TextField
              name="Contraseña"
              label="Contraseña"
              type={showPassword ? 'text' : 'password'}
              value={password}
             onChange={(e) => setPassword(e.target.value)}
              InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick2} sx={{mt:3}}>
        Continuar
      </LoadingButton>
           
           
           </>):(<>


           
            <Typography variant="h3" gutterBottom>
            Experiencia
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
                Por favor, completá los datos con tu información profesional.
            </Typography>
            <Stack spacing={1}>


                 











            <TextField name="titulo" label="Título" value={titulo}
            onChange={(e) => setTitulo(e.target.value)}/>
            <TextField name="experiencia" label="Experiencia" value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)} multiline rows={5}/>




<Card sx={{mb:4,mr:3, ml:6, backgroundColor:'transparent',}}>
            <CardContent>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Avatar
                    src={logo ? URL.createObjectURL(logo) : foto}
                    sx={{
                      height: 40,
                      mb: 1,
                      width: 40
                    }}
                    style={{ width: 80, height: 80 }}
                  />
                
                
                <Typography
                  gutterBottom
                  variant="h5"
                >
                
                      {nombre}
                
          
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {correo}
                </Typography>

              </Box>
            </CardContent>
            <Divider />
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

            <label htmlFor="fileInput" >
                    <input
                    type="file"
                    accept="image/*" 
                    style={{ display: 'none' }}
                    onChange={handleLogoChange}
                    id="fileInput"
                  />
              <Button
                fullWidth
                variant="text"
                color='secondary'
                component="span"
              >
                Subir foto de usuario
              </Button></label>




            </CardActions>
          </Card>
            
          </Stack>

          <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick3} sx={{mt:3}}>
            Registrarme
          </LoadingButton>
           
           </>)}

           











          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
