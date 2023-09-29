import { Helmet } from 'react-helmet-async';
import { Navigate, useNavigate, useState } from 'react-router-dom';
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
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();

  const { state, setState } = useState();

  const handleClick = () => {
        setState(false);
  }

  return (
    <>
      <Helmet>
        <title> Recupero | Neilo </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        
        (state ? (<><Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h3" gutterBottom>
                Recuperar cuenta
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Por favor, ingresa tu correo electrónico {''}
            </Typography>

            <Stack spacing={3}>
            <TextField name="correo" label="Correo electrónico" sx={{my:2}}/>
             </Stack>

            <Button fullWidth size="large" type="submit" variant="contained" onClick={handleClick}sx={{mt:2}} >
             Enviar Correo
              </Button>

          </StyledContent>
        </Container></>) : (<p>EL CORREO HA SIDO ENVIADO</p>))
        
      </StyledRoot>
    </>
  );
}