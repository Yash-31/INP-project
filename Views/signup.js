const form = document.getElementById('form');
const name = document.getElementById('inputUsername');
const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const cpassword = document.getElementById('inputConfirmPassword');

//add an event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
    })

const sendData=(nameVal,sRate,count)=>{
    if(sRate===count){
        alert('Registration Successful');
        swal("Welcome!"+nameVal,"Registration Successful","success")
    }
}

//After All Success data entries
const successMsg=(nameVal)=>{
    let formCon=document.getElementsByClassName('form-control');
    var count=formCon.length-1;
    for(var i=0;i<formCon.length;i++){
    if(formCon[i].className==="form-control success"){
    var sRate=0+i;
    sendData(nameVal,sRate,count);
    }else{
    return false;
    }
    }
}

//advance email validation
const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf("@");
    if(atSymbol<1)
    return false;
    var dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+3)
    return false;
    if(dot===emailVal.length-1)return false;
    return true;
    }

 //defining the validate function
const validate=()=>{
    const nameVal=name.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim(); 
    
    //validating name
if(nameVal===""){
    setErrorMsg('Name cannot be blank');
    }else if(nameVal.length<=2){
    setErrorMsg('Name should contain at least 3 characters');
    }else{
    setSuccessMsg(name);
    }

    //validating email
if(emailVal===""){
    setErrorMsg('Email cannot be blank');
    }else if(!isEmail(emailVal)){
    setErrorMsg('Not a valid email');
    }else{
    setSuccessMsg(email);
    }

    //validating password
if(passwordVal===""){
    setErrorMsg('Password cannot be blank');
    }else if(passwordVal.length<=5){
    setErrorMsg('Should contain minimum 6 characters');
    }else{
    setSuccessMsg(password);
    }

    //validating cpassword
    if(cpasswordVal===""){
    setErrorMsg('Confirm Password cannot be blank');
    }else if(passwordVal!=cpasswordVal){
    setErrorMsg('Password does not match');
    }else{
    setSuccessMsg(cpassword);
    }
    successMsg(nameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsgs;
}

function setSuccessMsg(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}
