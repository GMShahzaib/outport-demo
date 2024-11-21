import app from './src/app.js';

const PORT = process.env.PORT || 8085;

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}.`);
});


export default app;