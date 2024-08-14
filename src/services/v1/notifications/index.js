app.post('/api/notifications', async (req, res) => {
    const { userId, message } = req.body;
  
    // Aquí iría la lógica para enviar notificaciones (email, WhatsApp, etc.)
    
    res.status(200).send('Notification sent');
  });