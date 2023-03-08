function func_form() {
    console.log("A função está sendo chamada! sucesso");
    if (inp_perimetro.value < 0 || inp_duracao.value < 0){
       alert("Número inválido, preencha novamente");
       inp_perimetro.value = ""; inp_duracao.value = "";inp_temperatura.value="";
    } else{
    let perimetro = Number(inp_perimetro.value);
    let temperatura = Number(inp_temperatura.value);
    let duracao = Number(inp_duracao.value);
    console.log(`Valor do perimetro é ${perimetro} <br> valor da temperatura é ${temperatura} <br> valor da duração é ${duracao}.`);
    msg.innerHTML = `<h1>Resultado</h1></br><p> Valor do perimetro é ${perimetro} <br> valor da temperatura é ${temperatura} <br> valor da duração é ${duracao}.</p>`;
    }
}
