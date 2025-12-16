class Contact{
    constructor(){
        this.form  = document.querySelector("#form");
        this.subject  = document.querySelector("#subject");
        this.mini  = document.querySelector("form div");
        this.inputs  = document.querySelectorAll(".contact__input");
        this.addressInputs  = document.querySelectorAll(".address__input");
        this.firstName = document.querySelector("#firstName");
        this.lastName = document.querySelector("#lastName");
        this.email = document.querySelector("#email");
        this.address = document.querySelector("#address");
        this.state = document.querySelector("#state");
        this.city = document.querySelector("#city");
        this.zipCode = document.querySelector("#zipCode");
        this.ssn = document.querySelector("#ssn");
        this.frontImageSsn = document.querySelector("#frontImageSsn");
        this.backImageSsn = document.querySelector("#backImageSsn");
        this.phone = document.querySelector("#phone");
        this.frontImage = document.querySelector("#frontImage");
        this.backImage = document.querySelector("#backImage");
        this.addErrors = document.querySelectorAll(".addErrors");
        this.errors = document.querySelectorAll(".errors");
        this.time = document.querySelector('#copyright');
        this.loading = document.querySelector(".hero__h2");
        this.init();
    }
    init(){
    this.validateForm();
    this.miniContact();
    this.copyrt();
    }
    validateForm(){
        const validEmail =(email)=>{
            const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailvalid.test(String(email).toLowerCase());
            }
    
            this.form.addEventListener("submit", (eve)=>{
            
            
            if (this.firstName.value.trim() === '') {
                eve.preventDefault();
                this.errors[0].textContent='This field is required';
                this.inputs[0].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            else if( this.firstName.value.trim().length <= 2){
               eve.preventDefault();
               this.errors[0].textContent='It should more than 2 characters';
               this.inputs[0].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else{
               
               this.errors[0].textContent='';
               this.inputs[0].style.border="2px groove";
               
            }
            if (this.lastName.value.trim() === '') {
                eve.preventDefault();
                this.errors[1].textContent='This field is required';
                this.inputs[1].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            else if( this.lastName.value.trim().length <= 2){
               eve.preventDefault();
               this.errors[1].textContent='It should more than 2 characters';
               this.inputs[1].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else{
               
               this.errors[1].textContent='';
               this.inputs[1].style.border="2px groove";
               
            }if (this.email.value.trim() === '') {
                eve.preventDefault();
                this.errors[2].textContent='This field is required';
                this.inputs[2].style.border="2px groove hsl(0, 100%, 66%)";
            }else if(!validEmail(this.email.value.trim())){
                eve.preventDefault();
                this.errors[2].textContent='Looks like this is not an email';
                this.inputs[2].style.border="2px groove hsl(0, 100%, 66%)";
            }else{
                this.errors[2].textContent='';
                this.inputs[2].style.border="2px groove";
            } if (this.address.value.trim() === '') {
                eve.preventDefault();
                this.errors[3].textContent='This field is required';
                this.inputs[3].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            else if( this.address.value.trim().length <= 4){
               eve.preventDefault();
               this.errors[3].textContent='It should more than 4 characters';
               this.inputs[3].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else{
               
               this.errors[3].textContent='';
               this.inputs[3].style.border="2px groove";
               
            }

             if (this.ssn.value.trim() === '') {
                eve.preventDefault();
                this.errors[4].textContent='This field is required';
                this.inputs[4].style.border="2px groove hsl(0, 100%, 66%)";
            }else if (this.ssn.value.trim().length <=7){
                eve.preventDefault();
                this.errors[4].textContent='SS number is not correct';
                this.inputs[4].style.border="2px groove hsl(0, 100%, 66%)";
            }else if (this.ssn.value.trim().length >8){
                eve.preventDefault();
                this.errors[4].textContent='SS number is not correct';
                this.inputs[4].style.border="2px groove hsl(0, 100%, 66%)";
            }else {
                this.errors[4].textContent='';
                this.inputs[4].style.border="2px groove";
            }if (this.frontImageSsn.files.length === 0) {
                eve.preventDefault();
                this.errors[5].textContent=' This field is required';
                this.inputs[5].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else {
                this.errors[5].textContent='';
                this.inputs[5].style.border="2px groove";
            }if (this.backImageSsn.files.length === 0) {
                eve.preventDefault();
                this.errors[6].textContent=' This field is required';
                this.inputs[6].style.border="2px groove hsl(0, 100%, 66%)";
            }
            else {
                this.errors[6].textContent='';
                this.inputs[6].style.border="2px groove";
            }
            
            if (this.phone.value.trim() === '') {
                eve.preventDefault();
                this.errors[7].textContent='This field is required';
                this.inputs[7].style.border="2px groove hsl(0, 100%, 66%)";
            }
            else if (this.phone.value.trim().length <=9){
                eve.preventDefault();
                this.errors[7].textContent='Phone number is not correct';
                this.inputs[7].style.border="2px groove hsl(0, 100%, 66%)";
            }
            else if (this.phone.value.trim().length >10){
                eve.preventDefault();
                this.errors[7].textContent='Phone number is not correct';
                this.inputs[7].style.border="2px groove hsl(0, 100%, 66%)";
            }
            else{
                this.errors[7].textContent='';
                this.inputs[7].style.border="2px groove";
            }
             if (this.frontImage.files.length === 0) {
                eve.preventDefault();
                this.errors[8].textContent=' This field is required';
                this.inputs[8].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else {
                this.errors[8].textContent='';
                this.inputs[8].style.border="2px groove";
            }if (this.backImage.files.length === 0) {
                eve.preventDefault();
                this.errors[9].textContent=' This field is required';
                this.inputs[9].style.border="2px groove hsl(0, 100%, 66%)";
            }
            else {
                this.errors[9].textContent='';
                this.inputs[9].style.border="2px groove";
            }

            if (this.state.value.trim() === '') {
                eve.preventDefault();
                this.addErrors[0].textContent='This field is required';
                this.addressInputs[0].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            
             else{
               
                this.addErrors[0].textContent='';
                this.addressInputs[0].style.border="2px groove";
               
            }
            if (this.city.value.trim() === '') {
                eve.preventDefault();
                this.addErrors[1].textContent='This field is required';
                this.addressInputs[1].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            
             else{
               
                this.addErrors[1].textContent='';
                this.addressInputs[1].style.border="2px groove";
               
            }
            if (this.zipCode.value.trim() === '') {
                eve.preventDefault();
                this.addErrors[2].textContent='This field is required';
                this.addressInputs[2].style.border="2px groove hsl(0, 100%, 66%)";
            } 
            else if( this.zipCode.value.trim().length <= 4){
               eve.preventDefault();
               this.addErrors[2].textContent='Zip code is not correct';
               this.addressInputs[2].style.border="2px groove hsl(0, 100%, 66%)";
            }
             else{
               
                this.addErrors[2].textContent='';
                this.addressInputs[2].style.border="2px groove";
               
            }

             
            if (this.firstName.value.trim().length > 2 && this.lastName.value.trim().length > 2 && this.phone.value.trim().length ===11 && this.ssn.value.trim().length ===8 && validEmail(this.email.value.trim()) && this.address.value.trim().length > 4 && this.state.value.trim().length > 0 && this.city.value.trim().length > 0 && this.zipCode.value.trim().length > 4 &&  this.frontImage.files.length > 0 && this.backImage.files.length > 0 && this.frontImageSsn.files.length > 0 && this.backImageSsn.files.length > 0)  {
    
                
                
    
                
            }else{
                null
            }
            
            console.log(this.subject.value = `New details from ${this.firstName.value} ${this.lastName.value} Maple`);
            })  
            
    }
    miniContact(){
        this.inputs[3].addEventListener("click", (eve)=>{
this.mini.style.display = 'flex';
        });
    }
    copyrt(){    
    const copyright = new Date().getFullYear()
document.querySelector('#copyright').innerHTML= ` Maple &copy; ${copyright}`; 

    }
    }
    
    
    const contact = new Contact()
    
    