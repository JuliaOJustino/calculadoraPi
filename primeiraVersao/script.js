function func_form() {
    console.log("A função está sendo chamada! sucesso");
    if (inp_area.value < 0 || inp_duracao.value < 0){
       alert("Número inválido, preencha novamente");
       inp_area.value = ""; inp_duracao.value = "";inp_temperatura.value="";
    } else{
    let area = Number(inp_area.value);
    let temperatura = Number(inp_temperatura.value);
    let duracao = Number(inp_duracao.value);
    console.log(`Valor do perimetro é  ${area} <br> valor da temperatura é ${temperatura} <br> valor da duração é ${duracao}.`);
    msg.innerHTML = `<h1>Resultado</h1></br><p> Valor do perimetro é ${area} <br> valor da temperatura é ${temperatura} <br> valor da duração é ${duracao}.</p>`;
    }
   
}
 function fun_info(){
        alert("Para saber quantos sensores serão necessários para aumentar seus lucros, insira a quantidade de receita que a sua empresa gera, atualmente:");
        console.log("Está chamando a função");
    }