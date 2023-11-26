import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography, Box,MenuItem,
  Menu,Drawer,IconButton,Divider,TextField,Checkbox,Select,FormGroup } from '@mui/material';

import { ProductSort} from '../sections/@dashboard/products';
import Scrollbar from '../components/scrollbar';

// components
import Iconify from '../components/iconify';

import { BlogPostCard, BlogPostsSort, BlogPostsSearch,ProductFilterSidebar } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

export default function BlogPage() {




  const FILTER_CATEGORIA_OPTIONS = ['Matemática', 'Música', 'Química', 'Historia', 'Geografía', 'Inglés', 'Programación' ];
  const FILTER_TIPOCLASE_OPTIONS = ['Individual', 'Grupal'];
  const FILTER_RATING_OPTIONS = ['5 estrellas', '4 estrellas', '3 estrellas', '2 estrellas', '1 estrella'];
  const FILTER_FRECUENCIA_OPTIONS = ['Única', 'Semanal', 'Mensual'];

  const [selectedCategoria, setSelectedCategoria] = useState([]);
  const [selectedTipo, setSelectedTipo] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);
  const [selectedFrecuencia, setSelectedFrecuencia] = useState([]);


  const handleLogin = async () => {}


  const [openFilter, setOpenFilter] = useState(false);
  const [open, setOpen] = useState(null);
  
  
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [filteredBlog, setFilteredBlog] = useState(POSTS);
  const [orden, setOrden] = useState('Destacado');

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Filtra las cartas en función de la búsqueda y orden actual
    const filtered = POSTS.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBlog(filtered); // Actualiza el estado con el resultado de la búsqueda
  };

  const handleMayorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return priceB - priceA;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Mayor Precio');
  };

  const handleMenorPrecio = () => {
    const sortedBlog = [...filteredBlog];
    sortedBlog.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return  priceA - priceB;
    });
    setFilteredBlog(sortedBlog); // Actualiza el estado con el nuevo orden
    setOpen(null);
    setOrden('Menor Precio');
  };
  

  const handleDestacado = () => {
    setFilteredBlog(POSTS);
    setOpen(null);
    setOrden('Destacado');
  };

  const handleCategoriaChange = (e, categoria) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedCategoria([...selectedCategoria, categoria]);
    } else {
      setSelectedCategoria(selectedCategoria.filter((g) => g !== categoria));
    }
  };
  const handleTipoChange = (e, tipo) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedTipo([...selectedTipo, tipo]);
    } else {
      setSelectedTipo(selectedTipo.filter((g) => g !== tipo));
    }
  };
  const handleRatingChange = (e, rating) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedRating([...selectedRating, rating]);
    } else {
      setSelectedRating(selectedRating.filter((g) => g !== rating));
    }
  };
  const handleFrecuenciaChange = (e, frecuencia) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedFrecuencia([...selectedFrecuencia, frecuencia]);
    } else {
      setSelectedFrecuencia(selectedFrecuencia.filter((g) => g !== frecuencia));
    }
  };


  
  return (

  
    <>
      <Helmet>
        <title> Servicios | Neilo </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h3" gutterBottom>
            Servicios
          </Typography>
          
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <input
              type="text"
              placeholder="Buscar por título..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                width: '300px',
                height: '55px', 
                fontSize: '16px',
                borderRadius: '10px', 
                border: '2px solid #f0f0f0',
                paddingLeft: "10px",
                backgroundColor: '#F9FAFB',
                
              }}
            />




            <Box sx={{textAlign: "right"}}>
            


            <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={handleOpenFilter}>
                Filtrar&nbsp;
             </Button>



                <Button
                  color="inherit"
                  disableRipple
                  onClick={handleOpen}
                  endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} 
                   
                  />
                 
                }
                >
              
                  &nbsp;
                  <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary', ml:0.5 }}>
                    {orden}
                  </Typography>
                </Button>
                <Menu
                  keepMounted
                  anchorEl={open}
                  open={Boolean(open)}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  
                    <MenuItem
                      key={"destacado"}
                      selected={"destacado" === 'newest'}
                      onClick={handleDestacado}
                      sx={{ typography: 'body2' }}
                    >
                      {"Destacado"}
                    </MenuItem>
                  

                    <MenuItem
                      key={"mayor precio"}
                      selected={"mayor precio" === 'newest'}
                      onClick={handleMayorPrecio}
                      sx={{ typography: 'body2' }}
                    >
                      {"Mayor precio"}
                    </MenuItem>


                    <MenuItem
                      key={"menor precio"}
                      selected={"menor precio" === 'newest'}
                      onClick={handleMenorPrecio}
                      sx={{ typography: 'body2' }}
                    >
                      {"Menor precio"}
                    </MenuItem>




                </Menu>













            </Box>

        </Stack>



























        <Grid container spacing={3}>
          {filteredBlog.map((post, index) => (
            <BlogPostCard post={post} index={index} />
          ))}
        </Grid>
      </Container>







      <Drawer
        anchor="right"
        open={openFilter}
        onClose={handleCloseFilter}
        PaperProps={{
          sx: { width: 350, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
        
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filtrar
          </Typography>
          <IconButton onClick={handleCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>


          
        




   

          
             <div>
                
             <Typography variant="subtitle1" gutterBottom >
               Categoría
             </Typography>
            
             <FormGroup>
             {FILTER_CATEGORIA_OPTIONS.map((categoria, index) => (
              <label key={index} htmlFor={`categoria-${index}`} >


                <Checkbox
                checked={selectedCategoria.includes(categoria)}
                onChange={(e) => handleCategoriaChange(e, categoria)}
                
              />
                {categoria}
              </label >
            ))}

             </FormGroup>
           </div>

           <Divider/>

           <div>
                
             <Typography variant="subtitle1" gutterBottom >
               Tipo de clase
             </Typography>
            
             <FormGroup>
             {FILTER_TIPOCLASE_OPTIONS.map((tipo, index) => (
              <label key={index} htmlFor={`genero-${index}`} >


                <Checkbox
                checked={selectedTipo.includes(tipo)}
                onChange={(e) => handleTipoChange(e, tipo)}
                
              />
                {tipo}
              </label >
            ))}

             </FormGroup>
           </div>

           <Divider/>

           <div>
                
             <Typography variant="subtitle1" gutterBottom >
               Calificación
             </Typography>
            
             <FormGroup>
             {FILTER_RATING_OPTIONS.map((rating, index) => (
              <label key={index} htmlFor={`genero-${index}`} >


                <Checkbox
                checked={selectedRating.includes(rating)}
                onChange={(e) => handleRatingChange(e, rating)}
                
              />
                {rating}
              </label >
            ))}

             </FormGroup>
           </div>

           <Divider/>

           <div>
                
             <Typography variant="subtitle1" gutterBottom >
               Frecuencia
             </Typography>
            
             <FormGroup>
             {FILTER_FRECUENCIA_OPTIONS.map((frecuencia, index) => (
              <label key={index} htmlFor={`genero-${index}`} >


                <Checkbox
                checked={selectedFrecuencia.includes(frecuencia)}
                onChange={(e) => handleFrecuenciaChange(e, frecuencia)}
                
              />
                {frecuencia}
              </label >
            ))}

             </FormGroup>
           </div>

           <Divider/>









          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"

            variant="contained"
            startIcon={<Iconify icon="ic:round-clear-all" />}
            onClick={handleLogin}
          >
            Buscar
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
