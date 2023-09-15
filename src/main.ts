import './style.css'



menu_head()

function menu_head() {

    const div_head = document.createElement("div")
    div_head.classList.add("div_head")
    document.body.appendChild(div_head)

    const div_head_centre = document.createElement("div")
    div_head_centre.classList.add("div_head_centre")
    div_head.appendChild(div_head_centre)



    const div_nom = document.createElement("div")
    div_nom.classList.add("div_nom")
    div_head_centre.appendChild(div_nom)

    const p_nom:HTMLParagraphElement = document.createElement("p")
    p_nom.classList.add('p_nom')
    p_nom.innerText = "nom"
    div_nom.appendChild(p_nom)

    const input_nom = document.createElement("input")
    input_nom.classList.add("input_nom")
    input_nom.setAttribute("type","text")
    div_nom.appendChild(input_nom)



    const div_imag = document.createElement("div")
    div_imag.classList.add("div_imag")
    div_head_centre.appendChild(div_imag)

    const p_imag = document.createElement("p")
    p_imag.classList.add('p_imag')
    p_imag.innerText = "lien image"
    div_imag.appendChild(p_imag)

    const input_imag = document.createElement("input")
    input_imag.classList.add("input_imag")
    input_imag.setAttribute("type","text")
    div_imag.appendChild(input_imag)



    const div_duree = document.createElement("div")
    div_duree.classList.add("div_duree")
    div_head_centre.appendChild(div_duree)

    const p_duree = document.createElement("p")
    p_duree.classList.add('p_duree')
    p_duree.innerText = "durée"
    div_duree.appendChild(p_duree)

    const input_duree = document.createElement("input")
    input_duree.classList.add("input_duree")
    input_duree.setAttribute("type","text")
    div_duree.appendChild(input_duree)



    const div_note = document.createElement("div")
    div_note.classList.add("div_note")
    div_head_centre.appendChild(div_note)

    const p_note = document.createElement("p")
    p_note.classList.add('p_note')
    p_note.innerText = "note"
    div_note.appendChild(p_note)

    const input_note = document.createElement("input")
    input_note.classList.add("input_note")
    input_note.setAttribute("type","text")
    div_note.appendChild(input_note)



    const bouton_ajouter = document.createElement("button")
    bouton_ajouter.classList.add('bouton_ajouter')
    bouton_ajouter.setAttribute("type","button")
    bouton_ajouter.innerText = "Ajouté"
    div_head.appendChild(bouton_ajouter)

    bouton_ajouter.addEventListener("click", () => { 
        SERVEUR_recette_save
        ()
        ma_recette(input_nom.value, input_imag.value, input_duree.value, input_note.value)

        // input_nom.value = ""
        // input_imag.value = ""
        // input_duree.value = ""
        // input_note.value = ""

        async function SERVEUR_recette_save
        () {
            const res = await fetch("http://localhost:3086/recettes_save", {
              headers: new Headers({
                "Content-Type": "application/json",
              }),
              method: "POST",
              body: JSON.stringify({
                api_nom: input_nom.value ,
                api_img: input_imag.value,
                api_duree: input_duree.value,
                api_note: input_note.value,
              }),
            })
            const data = await res.json()
            console.log(data)
        }
    })
}

function ma_recette(input_nom:string, input_imag:string , input_duree:string, input_note:string) {
    const div_recette = document.createElement("div")
    div_recette.classList.add("div_recettes")
    document.body.appendChild(div_recette)

    const div_info = document.createElement("div")
    div_info.classList.add("div_info")
    div_recette.appendChild(div_info)

    const div_info_p_nom = document.createElement("p")
    div_info_p_nom.classList.add("div_info_p_nom")
    div_info_p_nom.innerText = input_nom
    div_info.appendChild(div_info_p_nom)

    const div_info_p_duree = document.createElement("p")
    div_info_p_duree.classList.add("div_info_p_duree")
    div_info_p_duree.innerText = input_duree
    div_info.appendChild(div_info_p_duree)

    const div_info_p_note = document.createElement("p")
    div_info_p_note.classList.add("div_info_p_note")
    div_info_p_note.innerText = input_note
    div_info.appendChild(div_info_p_note)

    const button_copier = document.createElement("button")
    button_copier.classList.add("button_copier")
    button_copier.setAttribute("type","button")
    button_copier.innerText = "copier"
    div_info.appendChild(button_copier)

    const button_delete = document.createElement("button")
    button_delete.classList.add("button_delete")
    button_delete.setAttribute("type","button")
    button_delete.innerText = "delete"
    button_delete.addEventListener("click", () => {
        SERVEUR_recette_delete()
        async function SERVEUR_recette_delete() {
            const res = await fetch("http://localhost:3086/recettes_delete/" + "xxx" ,{method: "DELETE",}) // pas de id pour supprimer mais marche manuellement 
            const message = await res.text()
            console.log("delete" + message);
        }
    })

    div_info.appendChild(button_delete)

    const div_img = document.createElement("img") // pour cette aprème faire une apel API qui rend des image de recette
    div_img.classList.add("div_img")
    div_img.setAttribute("src","https://assets.afcdn.com/recipe/20200821/113242_w150h150c1cx311cy560cxb543cyb700.webp")
    div_img.innerText = input_imag
    div_recette.appendChild(div_img)
}



const h2_body = document.createElement("h2")
h2_body.classList.add("h2_body")
h2_body.innerText = "Mes recettes"
document.body.appendChild(h2_body)