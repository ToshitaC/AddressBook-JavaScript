console.log("Welcome To Addressbook System JavaScript Program");
const prompt = require('prompt-sync')();
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER_PATTERN = RegExp('^(0/91)?[6-9][0-9]{9}$');
const EMAIL_REGEX_PATTERN = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');

class Contact {
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
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!NAME_REGEX_PATTERN.test(firstName)) throw 'Please enter valid firstname.'
        {
            this.firstName = firstName;
        }
        if (!NAME_REGEX_PATTERN.test(lastName)) throw 'Please enter valid lastname.'
        {
            this.lastName = lastName;
        }
        if (!ADDRESS_REGEX_PATTERN.test(address)) throw 'Please enter valid address.'
        {
            this.address = address;
        }
        if (!ADDRESS_REGEX_PATTERN.test(city)) throw 'Please enter valid city.'
        {
            this.city = city;
        }
        if (!ADDRESS_REGEX_PATTERN.test(state)) throw 'Please enter valid state.'
        {
            this.state = state;
        }
        if (!PINCODE_REGEX_PATTERN.test(zip)) throw 'Please enter valid pincode.'
        {
            this.zip = zip;
        }
        if (!PHONE_NUMBER_PATTERN.test(phoneNumber)) throw 'Please enter valid phone number.'
        {
            this.phoneNumber = phoneNumber;
        }
        if (!EMAIL_REGEX_PATTERN.test(email)) throw 'Please enter valid email ID.'
        {
            this.email = email;
        }
    }
    set firstName(firstName) {
        this.firstName = firstName;
    }

    //method
    toString() {
        return "Firstname: " + this.firstName + " Lastname: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}
function addContacts() {
    let FirstName = prompt("Enter Firstname: ");
    let LastName = prompt("Enter Lastname: ");
    if (addressBookArray.find((contact) => (contact.firstName + contact.lastName) == (FirstName + LastName))) {
        console.log("Name is already present in addressbook.");
        return;
    }
    let Address = prompt("Enter Address: ");
    let City = prompt("Enter City name: ");
    let State = prompt("Enter State name: ");
    let Zip = prompt("Enter pincode: ");
    let PhoneNumber = prompt("Enter phone number: ");
    let EmailId = prompt("Enter email id: ");
    try {
        let person = new Contact(FirstName, LastName, Address, City, State, Zip, PhoneNumber, EmailId);
        addressBookArray.push(person);
        console.log("Contact is added. ");
    } catch (e) {
        console.log(e);
    }
}
function findContact(userData) {
    let contactToEdit;
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName === userData)
            contactToEdit = addressBookArray[i];
        if (contactToEdit != null) {
            let input = 1;
            while (input != 9) {
                console.log("\nChoose:");
                console.log("\n1. Edit First Name \n2. Edit Last Name \n3. Edit Address \n4. Edit City \n5. Edit State");
                console.log("6. Edit Pincode \n7. Edit Phone No \n8. Edit Email \n9. View Edited Details & Exit");
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
                    case 9: console.log("\n", contactToEdit);
                        break;
                    default: console.log("Wrong Input");
                }
            }
        }
    }
}
let deletContact = () => {
    if (addressBookArray.length == 0) {
        console.log("No contact in the list");
    }
    let deleteName = prompt("Enter contact firstname you want to delete: ");
    let found = addressBookArray.find((contact) => contact.firstName == deleteName);
    if (found == undefined) {
        console.log("No such contact in Addressbook.");
    } else {
        addressBookArray = addressBookArray.filter((contacts) => contacts.firstName != deleteName);
        console.log("Contact is deleleted in Addressbook.")
    }
}
//searching and viewing contact in city or state
function searchByCityState(place, choice) {
    let contacts = new Array();
    if (choice == 1) {
        contacts = addressBookArray.filter(contact => contact.city === place)
    }
    if (choice == 2) {
        contacts = addressBookArray.filter(contact => contact.state === place)
    }
    console.log("Contact: ", contacts);
}
//count contact in city or state
function countByCityState(place, countChoice) {
    let contacts = new Array();
    if (countChoice == 1) {
        console.log("Contacts in " + place + " city are: ", addressBookArray.filter(contact => contact.city == place).reduce(contacts => contacts + 1, 0));
    }
    if (countChoice == 2) {
        console.log("Contacts in " + place + " state are: ", addressBookArray.filter(contact => contact.state == place).reduce(contacts => contacts + 1, 0));
    }
}

//Sorting Contacts by City or State or Zip
function sortContactByCity_State_Zip(inputSort) {
    if (inputSort == 1) {
        addressBookArray.sort(function (a, b) { return a.city.localeCompare(b.city) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
    if (inputSort == 2) {
        addressBookArray.sort(function (a, b) { return a.state.localeCompare(b.state) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
    if (inputSort == 3) {
        addressBookArray.sort(function (a, b) { return parseInt(a.zip) - parseInt(b.zip) });
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
}
//array to store contacts
let addressBookArray = new Array();
let countEntry = 0;
do {
    console.log("Press: 1) Add Contact 2) Edit Contact 3) View Contact");
    console.log("\t4) Delete Contact 5) Number of Contacts");
    console.log("\t6) Search contact by city or state 7) View contact by city or state");
    console.log("\t8) Count Contacts by city or state 9) Sort By Name");
    console.log("\t10) Sort by city or state or zip 0)Exit: ");
    countEntry = Number(prompt("Enter your choice: "));
    if (countEntry == 1) {
        addContacts();
    }
    if (countEntry == 2) {
        if (addressBookArray.length == 0) {
            console.log("No contacts in Addressbook.");
        }
        let userData = prompt("Enter the contact firstname which you want to edit: ");
        findContact(userData);
    }
    if (countEntry == 3) {
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
    if (countEntry == 4) {
        deletContact();
    }
    if (countEntry == 5) {
        console.log("Number of Contacts: " + addressBookArray.reduce(contacts => contacts + 1, 0));
    }
    if (countEntry == 6) {
        console.log("1.) Search By City     2.) Search By State");
        let choice = Number(prompt("Enter your choice: "));
        switch (choice) {
            case 1: let city = prompt("Enter the city name: ");
                searchByCityState(city, 1);
                break;
            case 2: let state = prompt("Enter the state name: ");
                searchByCityState(state, 2);
                break;
        }
    }
    if (countEntry == 7) {
        console.log("1.) View By City     2.) View By State");
        let choose = Number(prompt("Enter your choice: "));
        switch (choose) {
            case 1: let city = prompt("Enter the city name: ");
                searchByCityState(city, 1);
                break;
            case 2: let state = prompt("Enter the state name: ");
                searchByCityState(state, 2);
                break;
        }
    }
    if (countEntry == 8) {
        console.log("1.) Count By City     2.) Count By State");
        let countChoice = Number(prompt("Enter your choice: "));
        switch (countChoice) {
            case 1: let city = prompt("Enter the city name: ");
                countByCityState(city, 1);
                break;
            case 2: let state = prompt("Enter the state name: ");
                countByCityState(state, 2);
                break;
        }
    }
    if (countEntry == 9) {
        addressBookArray.sort();
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
    if (countEntry == 10) {
        console.log("Sort Contacts based on \t1.) City \t2.) State \t3.) Pincode")
        let inputSort = parseInt(prompt("Enter your choice:  "))
        sortContactByCity_State_Zip(inputSort);
    }
} while (countEntry != 0);