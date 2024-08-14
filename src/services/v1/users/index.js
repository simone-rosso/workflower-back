app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
  
    // Aquí iría la lógica para obtener los detalles del perfil de un usuario
    
    res.send('User details');
  });
  
  app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const userDetails = req.body;
  
    // Aquí iría la lógica para actualizar los detalles del perfil de un usuario
    
    res.send('User updated');
  });