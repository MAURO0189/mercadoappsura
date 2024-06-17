let url="http://localhost:8080/storeapi/v1/usuario"

let req={
    method:"GET",
    Headers:{}
}

fetch(url,req)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)
    let fila=document.getElementById("fila")
    res.forEach(function(user){
        let column=document.createElement("div")
            column.classList.add("col")
        let card=document.createElement("div")
            card.classList.add("card","shadow","h-100")
       
        let nameUser=document.createElement("h4")
            nameUser.classList.add("text-center")
            nameUser.textContent=user.nombres

            let docuUser=document.createElement("h4")
            docuUser.classList.add("text-center")
            docuUser.textContent=user.cedula 
            
            let emailUser=document.createElement("h4")
            emailUser.classList.add("text-center")
            emailUser.textContent=user.correo


        card.appendChild(nameUser)
        card.appendChild(docuUser)
        card.appendChild(emailUser)
        column.appendChild(card)
        fila.appendChild(column)    
    })
})
.catch(function(res){
    console.log(res)
})