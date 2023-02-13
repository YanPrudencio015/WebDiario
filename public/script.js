

document.addEventListener("DOMContentLoaded",()=>{
    updateDiario()
})

function updateDiario(){
    let promise = fetch("http://localhost:3000/diario/dias").then(res=>{
        return res.json();

    })

    promise.then(json=>{
        let diarioElementos = "";

        let dias = JSON.parse(json);

        dias.forEach(dia=>{

            let diarioElemento = `<div id="card" class="border ">

                                    <div class="d-flex justify-content-between" style="width:100%;">
                                        <div id="data" class="border bg-info text-white">${dia.data}</div>
                                        <div id="titulo">${dia.titulo}</div>
                                    </div>

                                    <div  id="texto" class="border border secondary mt-2 ">${dia.texto}</div>
                                </div>
                                <div id="ensinamento" class="border border-info">${dia.ensinamento}</div>`

                                diarioElementos += diarioElemento
        })

        document.getElementById("diarioopdate").innerHTML = diarioElementos

    })
}


function adicionar(){
    let data = document.getElementById("dataInput").value;
    let titulo = document.getElementById("tituloInput").value;
    let texto = document.getElementById("textoInput").value;
    let ensinamento = document.getElementById("ensinamentoInput").value;

    let diario = {data,titulo,texto,ensinamento}

    const opcao = {
        method:"POST", 
        headers:new Headers({"content-type":"application/json"}),
        body:JSON.stringify(diario)}

    fetch("http://localhost:3000/diario/escrever",opcao).then(res =>{
        console.log(res)
        updateDiario()  
    })
}



function limpar(){
document.getElementById("dataInput").value = ' ';
document.getElementById("tituloInput").value = ' ';
document.getElementById("textoInput").value = ' ';
document.getElementById("ensinamentoInput").value = ' ';

 
}