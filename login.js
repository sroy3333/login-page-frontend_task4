async function login(e) {
    e.preventDefault();
    console.log(e.target.name);

    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
        
    }
    console.log(loginDetails);
    await axios.post('http://localhost:5000/user/login', loginDetails).then(response => {
            alert(response.data.message)
    }).catch(err => {
        console.log(json.stingify(err))
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    })

}
