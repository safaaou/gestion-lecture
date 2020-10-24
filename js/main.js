
let alire= document.getElementById("alire");
let lu= document.getElementById("lu");

document.getElementById("ajouter").addEventListener("click",function(){

    let titre= document.getElementById('titre').value;
    let lien= document.getElementById('lien').value;

    if(lien == "" || titre == ""){
        alert("les deux champs doivent être remplis")
    }else{
        document.getElementById("titre1").style.visibility = "visible";
        document.getElementById("pretexte").style.visibility = "hidden";

        alire.insertAdjacentHTML("afterbegin",`<li>${titre}<i class="fas fa-trash-alt"  
        id=${titre} onClick=supprimer(this.id)></i><i id=${titre} class="fas fa-check" 
        onClick=marquerLu(this.id)></i><a href=${lien} target="blank">
        <i class="fas fa-shopping-cart"></i></a></li>`);
        document.getElementById('titre').value = "";
        document.getElementById('lien').value = "";
        
    }
    
    
})

function supprimer(id){
    document.getElementById(id).parentElement.outerHTML= "";
    test();
}

function marquerLu(id){
    
    document.getElementById("titre2").style.visibility = "visible";
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<i class="fas fa-trash-alt"  
        id=${id} onClick=supprimer(this.id)></i></li>`);
    supprimer(id);
    
}

function test(){
    if(document.getElementById('alire').childElementCount == 0){
        document.getElementById("titre1").style.visibility = "hidden";
    }
    if(document.getElementById('lu').childElementCount == 0){
        document.getElementById("titre2").style.visibility = "hidden";
    }
    if(document.getElementById('alire').childElementCount == 0 && document.getElementById('lu').childElementCount == 0){
        document.getElementById("titre1").style.visibility = "hidden";
        document.getElementById("titre2").style.visibility = "hidden";
        document.getElementById("pretexte").style.visibility = "visible";
    }
}