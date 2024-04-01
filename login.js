async function login(e) {
    try {
        e.preventDefault();

        const loginDetails = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const response = await axios.post('http://localhost:5000/user/login', loginDetails);

        if(response.status === 200) {
            window.location.href = "../Dashboard/dashboard.html";
        } else {
            throw new Error('Failed to login');
        }
    } catch(err) {
        document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    }
}