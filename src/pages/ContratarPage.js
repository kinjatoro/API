import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, TextField } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections


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
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

// ----------------------------------------------------------------------

export default function RegisterPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();
  const [state, setState ] = useState(true);

  const [telefono, setTelefono ] = useState('');
  const [email, setEmail ] = useState('');
  const [horario, setHorario ] = useState('');
  const [mensaje, setMensaje ] = useState('');



  const handleClick = () => {
    setState(false);
  }
  const handleClick2 = () => {
    navigate('/dashboard/blog');
  }

  return (
    <>
      <Helmet>
        <title> Contratar | Neilo </title>
      </Helmet>

      <StyledRoot>

        <Container maxWidth="sm">
          <StyledContent>
          {(state ? (<>
            <Typography variant="h3" gutterBottom>
            Contratar servicio
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
                Por favor, llená el formulario con tus datos personales.
            </Typography>

            <Stack spacing={2}>
        <TextField name="telefono" label="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        <TextField name="mail" label="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField name="horario" label="Horario de referencia" value={horario} onChange={(e) => setHorario(e.target.value)}/>
        <TextField name="mensaje" label="Mensaje al proveedor" multiline rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>
        
      </Stack>

      <Button fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Contratar
      </Button></>
      ):(
      <>
      <Stack spacing={2} sx={{ p: 25, px: 3 , alignItems: "center"}}>
        <Typography align="center" variant="h5">
          El profesor próximamente se pondrá en contacto con vos. ¡Gracias por usar Neilo! 
        </Typography>
        <Button  variant="outlined" sx={{width:"50%"}} onClick={handleClick2} >Ver más servicios</Button>
      </Stack>
      </>))}

          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
