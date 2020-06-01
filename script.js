function calcularIMC() {
    let txtAltura = document.querySelector("#inputMetros");
    let txtPeso = document.querySelector("#inputPeso");

    let Altura = txtAltura.value;
    let Peso = txtPeso.value;

    if(txtAltura.value.length == 0 || txtPeso.value.length == 0){
        alert("[ERROR] Preencha os dados corretamente e tente novamente!!");
        Results.innerHTML = "<p>Clique para obter os resultados</p>"
    }else{
        let IMC =  Peso / (Altura**2);
        let rIMC = IMC.toFixed(2)

        Results.innerHTML = "<p>Resultado: </p>";
        Results.innerHTML += "<p>IMC  |  CLASSIFICAÇÃO</p>";
        
        if( IMC <= 18.5 ){
            Results.innerHTML += `<p>${rIMC}  |      MAGREZA    </p>`;
        }else if ( IMC < 25 ){
            Results.innerHTML += `<p>${rIMC}  |       NORMAL    </p>`;
        }else if( IMC < 30){
            Results.innerHTML += `<p>${rIMC}  |     SOBREPESO   </p>`;
        }else if( IMC < 40 ){
            Results.innerHTML += `<p>${rIMC}  |     OBESIDADE   </p>`;
        }else{
            Results.innerHTML += `<p>${rIMC}  |  OBESIDADE GRAVE</p>`;
        }
    }
}


/*IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III*/