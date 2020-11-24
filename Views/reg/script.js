constform = document.getElementById('form');
constname = document.getElementById('name');
constphone = document.getElementById('phone');
constemail = document.getElementById('email');
constpassword = document.getElementById('password');
constcpassword =  document.getElementById('cpassword');
//addanevent
form.addEventListener('submit',(event)=>{
event.preventDefault();
validate();
})
constsendData =(nameVal,sRate,count)=>{
if(sRate===count){
alert('RegistrationSuccessful');
swal("Welcome!"+nameVal,"RegistrationSuccessful","success")
}
}
//AfterAllSuccesdataentries
constsuccessMsg =(nameVal)=>{
letformCon=document.getElementsByClassName('form-control');
varcount=formCon.length-1;
for(vari=0;i<formCon.length;i++){
if(formCon[i].className==="form-controlsuccess"){
varsRate=0+i;
sendData(nameVal,sRate,count);
}else{
returnfalse;
}
}
}
//advanceemailvalidation
constisEmail=(emailVal)=>{
varatSymbol=emailVal.indexOf("@");
if(atSymbol<1)returnfalse;
vardot=emailVal.lastIndexOf('.');
if(dot<=atSymbol+3)returnfalse;
if(dot===emailVal.length-1)returnfalse;
returntrue;
}
//definingthevalidatefunction
constvalidate=()=>{
constnameVal=name.value.trim();
constphoneVal=phone.value.trim();
constemailVal=email.value.trim();
constpasswordVal=password.value.trim();
constcpasswordVal=cpassword.value.trim();
//validatingname
if(nameVal===""){
setErrorMsg(name,'Namecannotbeblank');
}
else if(nameVal.length<=2){
setErrorMsg(name,'Nameshouldcontainatleast3characters');
}
else{
setSuccessMsg(name);
}
//validatingemail
if(emailVal===""){
setErrorMsg(email,'Emailcannotbeblank');
}else if(!isEmail(emailVal)){
setErrorMsg(email,'Notavalidemail');
}
else{
setSuccessMsg(email);
}
//validatingphone
if(phoneVal===""){
setErrorMsg(phone,'PhoneNumbercannotbeblank');
}else if(phoneVal.length!=10){
setErrorMsg(phone,'NotavalidPhonenumber');
}
else{
setSuccessMsg(phone);
}
//validatingpassword
if(passwordVal===""){
setErrorMsg(password,'Passwordcannotbeblank');
}else if(passwordVal.length<=5){
setErrorMsg(password,'Shouldcontainminimum 6characters');
}
else{
setSuccessMsg(password);
}
//validatingpassword
if(cpasswordVal===""){
setErrorMsg(cpassword,'Confirm Passwordcannotbeblank');
}else if(passwordVal!=cpasswordVal){
setErrorMsg(cpassword,'Passworddoesnotmatch');
}
else{
setSuccessMsg(cpassword);
}
successMsg(nameVal);
}
functionsetErrorMsg(input,errormsgs);{
constformControl=input.parentElement;
constsmall=formControl.querySelector('small');
formControl.className="form-controlerror";
small.innerText=errormsgs;
}
functionsetSuccessMsg(input);{
constformControl=input.parentElement;
formControl.className="form-controlsuccess";
}