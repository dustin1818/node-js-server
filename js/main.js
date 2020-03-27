let personData = [];

let jsDOM = {
    data: {
        fname: document.getElementById('fNameInput'),
        lname: document.getElementById('lNameInput'),
        email: document.getElementById('emailInput'),
        phone: document.getElementById('phoneInput'),
        city: document.getElementById('cityInput'),
        message: document.getElementById('messageInput')
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },
    personData: document.getElementById('personData')
}

let jsFunc = {
    myFunction: () => {
        jsDOM.fnameOutput.innerHTML = `First Name: ${jsDOM.fname.value}`;
        jsDOM.lnameOutput.innerHTML = `Last Name: ${jsDOM.lname.value}`;
        jsDOM.emailOutput.innerHTML = `Email: ${jsDOM.email.value}`;
        jsDOM.phoneOutput.innerHTML = `Phone Number: ${jsDOM.phone.value}`;
        jsDOM.cityOutput.innerHTML = `City: ${jsDOM.city.value}`;
        jsDOM.messageOutput.innerHTML = `Message: ${jsDOM.message.value}`;
    },
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';

        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);

        let fullname, email, message;


            personData.forEach(x => {
                fullname = `${x.firstname} ${x.lastname}`, email = x.email, phone = x.phone, city = x.city, message = x.message;
                let personData = document.createElement('p');
                let personDataText = document.createTextNode(`Name:\u00a0\ ${fullname}\u00a0\, Email:\u00a0\ ${email}\u00a0\, Phone:\u00a0\ ${phone}\u00a0\, City:\u00a0\ ${city}\u00a0\, Message:\u00a0\ ${message}`);
                personData.appendChild(personDataText);
                node.appendChild(personData);
            })
            parentDiv.appendChild(node);
        },
        clearFields: () => {
        jsDOM.data.fname.value = "";
        jsDOM.data.lname.value = "";
        jsDOM.data.email.value = "";
        jsDOM.data.phone.value = "";
        jsDOM.data.city.value = "";
        jsDOM.data.message.value = "";
    },

    addData: () => {
        if ((document.getElementById('fNameInput').value === "" || document.getElementById('lNameInput').value === "" || document.getElementById('emailInput').value === ""
            || document.getElementById('phoneInput').value === "" || document.getElementById('cityInput').value === "" || document.getElementById('messageInput').value === "")) {
            alert("Please enter data to the required fields (*) ");
        } else {
            personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value, message: jsDOM.data.message.value });
            jsFunc.clearFields();
        }
    }
}

jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);


//|| document.getElementById('emailInput').value === ""
//\u00a0\
// personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, message: jsDOM.data.message.value });
// jsFunc.clearFields();