const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const zip = document.getElementById("zip");

const namecheck = /^[A-Za-z]{3,30}$/;
const emailcheck = /^[A-Za-z0-9._]{2,20}(.*)[A-za-z][@]{1}[A-za-z]{3,20}[.]{1}[A-Za-z.]{2,6}$/;
const passwordcheck = /^(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)[A-Za-z0-9_.]{8,20}$/;
const zipcheck = /^[0-9]{6}$/;
form.addEventListener('submit',(e) => {
    nameParent = name.parentElement.className;
    emailParent = email.parentElement.className;
    p1Parent = password1.parentElement.className;
    p2Parent = password2.parentElement.className;
    zipParent = zip.parentElement.className;
    checkInputs();
    if(!(nameParent == emailParent && p1Parent == p2Parent && nameParent == p1Parent && nameParent == zipParent && nameParent == 'form-control success')){
        e.preventDefault();
    }
    
});

function valName(){
    if(name.value === ''){
        setErrorFor(name,"Name cannot be Blank");
    }
    else if(!namecheck.test(name.value))
    {
        setErrorFor(name,"Name can contain only Uppercase and Lowercase and minimum 3 characters");
    }
    else{
        setSuccessFor(name);
    }
}

function valEmail(){
    if(email.value === '' || email.value==null)
    {
        setErrorFor(email,"Email cannot be blank");
    }
    else if(!emailcheck.test(email.value))
    {
        setErrorFor(email,"Email should be of the format 'abcd@efg.ijk' or 'abc.pqr@efg.ijk'");
    }
    else
    {
        setSuccessFor(email);
    }
}

function valPass1(){
    if(password1.value === ''){
        setErrorFor(password1,"Password cannot be Blank");
    }
    else if(!passwordcheck.test(password1.value))
    {
        setErrorFor(password1,"Password must have minimum 8 and maximum 20 characters and must contain atleast 1 uppercase 1 lowercase and 1 numeric");

    }
    else{
        setSuccessFor(password1);
    }
}

function valPass(){
    if(password2.value === ''){
        setErrorFor(password2,"Password cannot be Blank");
    }
    else if(password1.value!=password2.value)
    {
        setErrorFor(password2,"Passwords does not match. Re-enter the same password as above")
    }
    else{
        setSuccessFor(password2);
    }
}

function valZip(){
    if(zip.value === ''){
        setErrorFor(zip,"zip-code cannot be Blank");
    }
    else if(!zipcheck.test(zip.value))
    {
        setErrorFor(zip,"Zip-code is a numeric code of length 6");
    }
    else{
        setSuccessFor(zip);
    }
}
function checkInputs(){
    valName();
    valEmail();
    valPass1();
    valPass();
    valZip();
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}
