import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack,Card,CardContent,Divider,Button, IconButton, InputAdornment, TextField, Checkbox, Typography, Container, Box, MenuItem,InputLabel, FormControl, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useAuth } from '../../../Auth'

// components
import Iconify from '../../../components/iconify';

import negocio from '../../../negocio.jpg'


// ----------------------------------------------------------------------

export default function CrearServicioForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth } = useAuth();
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [duracion, setDuracion] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState("");

  const [banner, setBanner] = useState(null);


  const handleClick = () => {
    navigate('/dashboard/mispublicaciones');
  }

  const handleBannerChange = (e) => {
    const selectedFile = e.target.files[0];
    setBanner(selectedFile);
  };

  
  return (
    <>
      <Stack spacing={2}>
      <TextField name="Nombre del servicio" label="Nombre del servicio" value={nombre}
          onChange={(e) => setNombre(e.target.value)}/>
      <Box sx={{ minWidth: 120, }}>


      

      <FormControl fullWidth>
        <InputLabel id="Categoria">Categoría</InputLabel>
        <Select
          labelId="Categoria"
          id="Categoria"
          label="Categoria"
          MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
        <MenuItem value="Idiomas">Idiomas</MenuItem>
        <MenuItem value="Deportes">Deportes</MenuItem>
        <MenuItem value="Música">Música</MenuItem>
        <MenuItem value="Arte">Arte</MenuItem>
        <MenuItem value="Baile">Baile</MenuItem>
        <MenuItem value="Apoyo Escolar">Apoyo Escolar</MenuItem>
        <MenuItem value="Apoyo Universitario">Apoyo Universitario</MenuItem>
        <MenuItem value="Cocina">Cocina</MenuItem>
        
        <MenuItem value="Otros">Otros</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="duracion">Duracion</InputLabel>
        <Select
          labelId="duracion"
          id="duracion"
          label="Duracion"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        >
         <MenuItem value="30 Minutos">30 Minutos</MenuItem>
         <MenuItem value="1 Hora">1 Hora</MenuItem>
         <MenuItem value="2 Horas">2 Horas</MenuItem>
         <MenuItem value="3 Horas">3 Horas</MenuItem>
         <MenuItem value="4 Horas">4 Horas</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="frecuencia">Frecuencia</InputLabel>
        <Select
          labelId="frecuencia"
          id="frecuencia"
          label="Frecuencia"
          value={frecuencia}
          onChange={(e) => setFrecuencia(e.target.value)}
        >
         <MenuItem value="Única">Única</MenuItem>
         <MenuItem value="Semanal">Semanal</MenuItem>
         <MenuItem value="Mensual">Mensual</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <TextField name="descripcion" label="Descripcion" multiline rows={5} value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}/>
        <TextField name="costo" label="Costo (USD)" type="number" value={costo}
          onChange={(e) => setCosto(e.target.value)}/>






<Card  sx={{mb:4,mr:3, ml:6, backgroundColor:'transparent',}}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
            
          }}
        >
   
              <img src={banner ? URL.createObjectURL(banner) : negocio} alt='banner' style={{ 
              width: "200px",
              height: "200px", 
              objectFit: "cover", 
              objectPosition: "center",
              borderRadius: "10%",
              }
              }/>

              
        
        </Box>
      </CardContent>
      <Divider />
      <label htmlFor="fileInput2" >
              <input
              type="file"
              accept="image/*" 
              style={{ display: 'none' }}
              onChange={handleBannerChange}
              id="fileInput2"
            />
        <Button
          fullWidth
          variant="text"
          color='secondary'
          component="span"
        >
          Subir foto del servicio
        </Button></label>
    </Card>
        
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick} sx={{mt:3}}>
        Publicar
      </LoadingButton>
    </>
  );
}
