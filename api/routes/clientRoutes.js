app.get('/clients', (req, res) => {
    connection.query('SELECT * FROM clients', (err, rows, fields) => {
        if (err) {
            console.log('Error getting clients from DB');
            return;
        }
        res.send(rows);
    });
});