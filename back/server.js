
let intialPath = path.join(__dirname, "ignitia");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "test.html"));
})

app.get('/Login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

/*

*/
app.post('/sign_up', (req, res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('Fill all the fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('Already exists')){
                res.json('email already exists');
            }
        })
    }
})

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Email or Password is incorrect');
        }
    })
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})