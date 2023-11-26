import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';

// mocks_
import account from '../../../_mock/account';
import accountNo from '../../../_mock/accountNo';

import { useAuth } from '../../../Auth'

// ----------------------------------------------------------------------


export default function AccountPopover() {

  const { auth, setAuth } = useAuth();
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleAuth = () => {
    setOpen(null);
    setAuth(false);
    navigate('/dashboard/app');
  };

  const handleInicio = () => {
    setOpen(null);
    navigate('/dashboard/app');
  };

  const handleServicios = () => {
    setOpen(null);
    navigate('/dashboard/blog');
  };

  const handleContrataciones = () => {
    setOpen(null);
    navigate('/dashboard/user');
  };

  const handleMensajes = () => {
    setOpen(null);
    navigate('/dashboard/mensajes');
  };

  const handleMisPublicaciones = () => {
    setOpen(null);
    navigate('/dashboard/mispublicaciones');
  };
  const handleComentarios = () => {
    setOpen(null);
    navigate('/dashboard/comentarios');
  };


  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {auth ? (<Avatar src={account.photoURL} alt="photoURL" />) : (<><Avatar src={accountNo.photoURL} alt="photoURL" /></>)}
        
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
          {auth ? (<>{account.displayName}</>) : (<>{accountNo.displayName}</>)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {auth ? (<>{account.email}</>) : (<></>)}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          
            <MenuItem onClick={handleInicio}>
              Inicio
            </MenuItem>

            <MenuItem onClick={handleServicios}>
              Servicios
            </MenuItem>


            {auth ? (<>
          <MenuItem onClick={handleContrataciones}>
              Contrataciones
            </MenuItem>

            <MenuItem onClick={handleMensajes}>
              Mensajes
            </MenuItem>

            <MenuItem onClick={handleMisPublicaciones}>
              Mis publicaciones
            </MenuItem>

            <MenuItem onClick={handleComentarios}>
              Comentarios
            </MenuItem>
        


        <Divider sx={{ borderStyle: 'dashed' }} />
        
        <MenuItem onClick={handleAuth} >
          Cerrar sesión
        </MenuItem></>) : (<></>)}
            
          
        </Stack>

        


      </Popover>
    </>
  );
}
