const express = require('express')


const app = express();


app.use('/static/', express.static('.'));


app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'text/html;charset=utf-8',
        'Link': [
            '</static/style.css>; rel="stylesheet"',
            '</static/client.js>; rel="fragment-script"'
        ]
    });

    res.send(`
        <div class="fragment">
            Hint: this is served from the "fragment"
        </div>
    `);
});


app.listen(9090, (err) => {
    if (err) {
        console.error('Failed booting the server on 9090:', err.message);
    } else {
        console.log('Fragment server listening on port 9090')
    }
});
