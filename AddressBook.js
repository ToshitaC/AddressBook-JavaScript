console.log("Welcome To Addressbook System JavaScript Program");
const prompt=require('prompt-sync')();
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER_PATTERN = RegExp('^(0/91)?[6-9][0-9]{9}$'); 
const EMAIL_REGEX_PATTERN=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');

class Contact{ 
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        if(!NAME_REGEX_PATTERN.test(firstName)) { 
            console.log('Please enter valid firstname.');
        }
        else {
            this.firstName = firstName;
        }
        if(!NAME_REGEX_PATTERN.test(lastName)) { 
            console.log('Please enter valid lastname.');
        }
        else {
            this.lastName = lastName;
        }
        if(!ADDRESS_REGEX_PATTERN.test(address)){ 
            console.log('Please enter valid address.');
        }
        else {
            this.address = address;
        }
        if(!ADDRESS_REGEX_PATTERN.test(city)){ 
            console.log('Please enter valid city.');
        }
        else {
            this.city = city;
        }
        if(!ADDRESS_REGEX_PATTERN.test(state)){ 
            console.log('Please enter valid state.');
        }
        else {
            this.state = state;
        }
        if(!PINCODE_REGEX_PATTERN.test(zip)){ 
            console.log('Please enter valid pincode.');
        }
        else {
            this.zip = zip;
        }
        if(!PHONE_NUMBER_PATTERN.test(phoneNumber)){ 
            console.log('Please enter valid phone number.');
        }
        else {
            this.phoneNumber = phoneNumber;
        }
        if(!EMAIL_REGEX_PATTERN.test(email)){ 
            console.log('Please enter valid email ID.');
        }
        else {
            this.email = email;
        }
    }
    set firstName(firstName){
        this.firstName = firstName;
     }
    
    //method
    toString(){
        return "Firstname: "+this.firstName+" Lastname: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

function findContact(userData){
    let contactToEdit;
    for(let i = 0; i < addressBookArray.length; i++){
        if(addressBookArray[i].firstName === userData)
            contactToEdit = addressBookArray[i];
        if(contactToEdit != null){
            let input = 1;
            while(input != 9){
                console.log("\nChoose:");
                console.log("\n1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
                console.log("6. Edit ZipCode \n7. Edit Phone No \n8. Edit Email \n9. View Edited Details & Exit");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let fname = prompt("Enter the firstname: ");
                            contactToEdit.firstName = fname;
                            break;
                    case 2: let lname = prompt("Enter the last Name: ");
                            contactToEdit.lastName = lname;
                            break;
                    case 3: let address_edit = prompt("Enter the address: ");
                            contactToEdit.address = address_edit;
                            break;
                    case 4: let city_edit = prompt("Enter the city: ");
                            contactToEdit.city = city_edit;
                            break;
                    case 5: let state_edit = prompt("Enter the state: ");
                            contactToEdit.state = state_edit;
                            break;
                    case 6: let zip_edit = prompt("Enter the pincode: ");
                            contactToEdit.zip = zip_edit;
                            break;
                    case 7: let phone_edit = prompt("Enter the phone number: ");
                            contactToEdit.phoneNumber = phone_edit;
                            break;
                    case 8: let mail_edit = prompt("Enter the email: ");
                            contactToEdit.email = mail_edit;
                            break;
                    case 9: console.log("\n",contactToEdit);
                            break;
                    default: console.log("Wrong Input");
                    }
                }
            }
    }
}

//array to store contacts
let addressBookArray = new Array();
let countEntry = 0;
do{
    countEntry = prompt("Press 1) Add Contact 2) Edit Contact 3) View Contact 0) Exit: ");
    if(countEntry == 1){
        let FirstName = prompt("Enter Firstname: ");
        let LastName = prompt("Enter Lastname: ");
        let Address = prompt("Enter Address: ");
        let City = prompt("Enter City name: ");
        let State = prompt("Enter State name: ");
        let Zip = prompt("Enter pincode: ");
        let PhoneNumber = prompt("Enter phone number: ");
        let EmailId = prompt("Enter email id: ");
        try{
            let person = new Contact(FirstName,LastName,Address,City,State,Zip,PhoneNumber,EmailId);
            addressBookArray.push(person);
            console.log("Contact is added. ");
        }catch(e){
            console.log(e);
        }
    }
    if(countEntry == 2){
        if(addressBookArray.length==0){
            console.log("No contacts");
        }
        let userData = prompt("Enter the contact firstname which you want to edit: ");
        findContact(userData); 
    }
    if(countEntry == 3){
        console.log(addressBookArray.toString()+"\n");
    }
}while(countEntry != 0);