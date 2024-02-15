let fname = document.getElementById('fname'),
    lname = document.getElementById('lname'),
    email = document.getElementById('email'),
    phone = document.getElementById('phone')
submit = document.getElementById('submit')


let arrayOfEmployes 

let Mode = "create"

let TmpId  // temporary variable to save the employe id 

// let's save informations in localstorage

if(localStorage.arrayOfEmployes != null){
    arrayOfEmployes = JSON.parse(localStorage.getItem('arrayOfEmployes'))
}
else{
     arrayOfEmployes = []
}
