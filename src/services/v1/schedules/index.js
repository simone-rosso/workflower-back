app.post('/api/schedules', (req, res) => {
    const { userId, shiftDetails } = req.body;
    
    // Aquí iría la lógica para crear un nuevo turno y asignarlo al usuario
    
    res.status(201).send('Shift created');
  });
  
  app.get('/api/schedules', (req, res) => {
    // Aquí iría la lógica para obtener los turnos
    res.send('List of schedules');
  });