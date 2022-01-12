// Create Header
let header = document.createElement('h1')
header.textContent = 'Warranty Information'
header.style.textAlign = 'center'


// Main Container
let mainContainer = document.createElement('section')
mainContainer.style.marginRight = 'auto'

// User Input Container
let inputContainer = document.createElement('fieldset')
inputContainer.style.fontFamily = 'sans-serif'
inputContainer.style.fontWeight = 'bold'
inputContainer.style.display = 'flex'
inputContainer.style.flexFlow = 'column wrap'
inputContainer.style.width = '60%'
inputContainer.style.margin = 'auto'
inputContainer.style.paddingLeft = '3em'
inputContainer.style.paddingRight = '3em'
inputContainer.style.paddingTop = '1em'
inputContainer.style.paddingBottom = '1em'
let userInfo = document.createElement


// Creating User-Input Fields
// First Name
let firstname = document.createElement('label')
firstname.innerHTML = 'First Name'
let firstnameInput = document.createElement('input')
firstnameInput.type = 'text'
// Last Name
let lastname = document.createElement('label')
lastname.innerHTML = 'Last Name'
let lastnameInput = document.createElement('input')
lastnameInput.type = 'text'
// Address
let address = document.createElement('label')
address.innerHTML = 'Address'
let addressInput = document.createElement('input')
addressInput.type = 'text'
// Company
let company = document.createElement('label')
company.innerHTML = 'Company Name'
let companyInput = document.createElement('input')
companyInput.type = 'text'
// Email
let email = document.createElement('label')
email.innerHTML = 'Email'
let emailInput = document.createElement('input')
emailInput.type = 'email'
// Phone Number
let phone = document.createElement('label')
phone.innerHTML = 'Phone Number'
let phoneInput = document.createElement('input')
phoneInput.type = 'tel'
// Fax Number



// Save and Close Buttons
let saveButton = document.createElement('button')
saveButton.innerHTML = 'Save'
saveButton.style.width = '4em'
saveButton.style.margin = 'auto'

let closeButton = document.createElement('button')
closeButton.innerHTML = 'Close'
closeButton.style.width = '4em'
closeButton.style.margin = 'auto'


// Appending content to the body
document.body.appendChild(mainContainer)

mainContainer.append(header)
mainContainer.appendChild(inputContainer)

inputContainer.appendChild(firstname)
inputContainer.appendChild(firstnameInput)
inputContainer.appendChild(lastname)
inputContainer.appendChild(lastnameInput)
inputContainer.appendChild(address)
inputContainer.appendChild(addressInput)
inputContainer.appendChild(company)
inputContainer.appendChild(companyInput)
inputContainer.appendChild(email)
inputContainer.appendChild(emailInput)
inputContainer.appendChild(phone)
inputContainer.appendChild(phoneInput)

inputContainer.append(saveButton)
inputContainer.append(closeButton)
