// Add your code here

const body = document.getElementsByTagName("body"[0]);

function submitData(firstName, email) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", configObject)
    .then(resp => resp.json())
    .then(body => addNewContact(body.id))
    .catch(error => document.querySelector('body').innerHTML = error)
}

function addNewContact(newId) {
    document.getElementsByTagName("body")[0].innerHTML = newId;
    document.body.append('Unauthorized Access')
}

submitData("Name", "name@name.com");