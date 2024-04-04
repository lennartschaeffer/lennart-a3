const submitButton = document.querySelector("#submitButton").addEventListener("click", (event) =>
    {
        let isValid = true;

        const firstName = document.querySelector("#firstName");
        const lastName = document.querySelector("#lastName");
        const phoneNumber = document.querySelector("#phoneNumber");
        const pattern = /^\d{3}-?\d{3}-?\d{4}$/;
        const email = document.querySelector('#email');
        const date = document.getElementById("date");
        const errorMsg = document.querySelector(".errorMessage");

        if(firstName.value === "" && lastName.value === "" && phoneNumber.value === "" && email.value === "" && date.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "All fields must be filled out!"
            isValid = false;
        }
        else if(firstName.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "You need to enter a first name!"
            isValid = false;
        }
        else if(lastName.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "You need to enter a last name!"
            isValid = false;
        }
        else if(phoneNumber.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "You need to enter a phone number!"
            isValid = false;
        }
        else if(!pattern.test(phoneNumber.value)){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "Please use the format xxx-xxx-xxxx for phone number!"
            isValid = false;
        }
        else if(email.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "You need to enter an email!"
            isValid = false;
        }
        else if(date.value === ""){
            errorMsg.style.display = "flex";
            errorMsg.innerHTML = "You need to enter a date!"
            isValid = false;
        }
        else if(!email.value.endsWith("@dal.ca")){
            errorMsg.style.display = "flex";
            alert("Email needs to end with @dal.ca!")
            errorMsg.innerHTML = "Email needs to end with @dal.ca"
            isValid = false;
        }

        if(!isValid){
            event.preventDefault();
        }
        else{
            errorMsg.style.display = "flex";
            errorMsg.style.backgroundColor = "lightGreen"
            errorMsg.innerHTML = "Success!"
            event.preventDefault();
        }
    })

function showSideBar(){
    console.log("test");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'flex';
}

function removeSideBar(){
    console.log("remove sidebar");
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'none';
}
