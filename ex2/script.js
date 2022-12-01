const calcPoligno = document.getElementById('botao')
    
calcPoligno.addEventListener("click", () => {
   
let area = document.getElementById('comprimento').value*document.getElementById('comprimento').value
        
 
    if(document.getElementById('lados').value==3){

     alert("triângulo de "+area+" centimetros quadrados")

    }
    else if(document.getElementById('lados').value==4){alert('quadrado de '+area+' centimetros quadrados')}
    else if(document.getElementById('lados').value==5) {alert('pentagono de '+area+' centimetros quadrados')}
    else if(document.getElementById('lados').value<=2){alert('Não é polígono')}   
})