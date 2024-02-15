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



submit.addEventListener('click', function (e) {
    if(Mode === "create"){

        let EmployeObject = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            phone: phone.value
        }
        arrayOfEmployes.push(EmployeObject)
        localStorage.setItem('arrayOfEmployes', JSON.stringify(arrayOfEmployes))
        console.log(arrayOfEmployes)
        DispayInfos()
        clearText()
    }
    else{
        submit.textContent = "Update"
        UpdateEmploye(TmpId)  // here we replace id with TmpId var because id is local variable
        DispayInfos()
        submit.textContent = "Create"
        Mode = "create"
    }
    e.preventDefault()
})
