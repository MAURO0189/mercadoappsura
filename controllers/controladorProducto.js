// consumiendo el API para acceder a la BD
let url="http://localhost:8080/storeapi/v1/producto"

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
    res.forEach(function(product){
        let column=document.createElement("div")
            column.classList.add("col")
        let card=document.createElement("div")
            card.classList.add("card","shadow","h-100")
        let image=document.createElement("img")
            image.classList.add("img-fluid")
            image.src=product.foto

            let nameProduct=document.createElement("h4")
                nameProduct.classList.add("text-center")
                nameProduct.textContent=product.nombre 
                
            let priceProduct=document.createElement("h4")
                priceProduct.classList.add("text-center")
                priceProduct.textContent=product.precio  

        card.appendChild(image)
        card.appendChild(nameProduct)
        card.appendChild(priceProduct)
        column.appendChild(card)
        fila.appendChild(column)    
    })
})
.catch(function(res){
    console.log(res)
})