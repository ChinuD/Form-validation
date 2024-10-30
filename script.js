const nameError = document.getElementById("name-Error");
const emailError = document.getElementById("email-Error");
const companyError = document.getElementById("company-Error");
const jobError = document.getElementById("title-Error");
const submitError = document.getElementById("submitError");
const submitBtn = document.getElementById("submitBtn");
function validateName(){
    let name = document.getElementById("name").value
    // console.log(name.value);

    if(name.length == 0){
        nameError.textContent = `Enter Valid Input`;
        nameError.style.color = "red";
        return false
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.textContent = `Enter Full Name`;
        nameError.style.color = "red";
        return false
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green"></i>`
    return true
}
function validateEmail(){
    let email = document.getElementById("email").value
    // console.log(name.value);
    
    if(email.length == 0){
        emailError.innerHTML = `Enter Valid Input`;
        emailError.style.color = "red";
        return false
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.textContent = `Enter Vaild Email`;
        emailError.style.color = "red";
        return false
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green"></i>`
    return true
}

function validateCompany(){
    let company = document.getElementById("company").value
    // console.log(name.value);

    if(company.length == 0){
        companyError.textContent = `Enter Valid Input`;
        companyError.style.color = "red";
        return false
    }
    companyError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green"></i>`
    return true
}
function validateTitle(){
    let title = document.getElementById("job-title").value
    // console.log(name.value);

    if(title.length == 0){
        jobError.textContent = `Enter Valid Input`;
        jobError.style.color = "red";
        return false
    }
    jobError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green"></i>`
    return true
}
function checkAll(){
    if(!validateCompany || !validateEmail || !validateName || !validateTitle){
        submitError = `Invalid inputs`;
        return false
    }
}