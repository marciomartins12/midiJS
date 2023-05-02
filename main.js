function tocarsons(elementosom){

    const teste=document.querySelector(elementosom);
    if (teste != null && teste.localName==='audio'){
        teste.play();
    }
    else{
        console.log('Elemento não encontrado ou selector inválido')
    }
}
const listadeteclas= document.querySelectorAll('.tecla');

for(let contador=0; contador < listadeteclas.length; contador++){
    const tecla= listadeteclas[contador];
    let idsom= tecla.classList[1];
    const som= `#som_${idsom}`;
     tecla.onclick= function(){
        tocarsons(som);
     }
     tecla.onkeydown= function (evento){
    if(evento.code==='Space'|| evento.code=== "Enter" ){
            tecla.classList.add('ativa')
        }
     }
     tecla.onkeyup= function(){
    tecla.classList.remove('ativa');
     }
}

