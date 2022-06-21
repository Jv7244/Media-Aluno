let alunos = [
    "joão",
    "maria",
    "josé",
    "geovane"
]

let notas = new Array()

function media(notasMath, notasPort){
    // retorna a media das notas recebidas pelo sistema
    let media
    return media = (notasMath + notasPort)/2
}


let nome
let valor = new Array()


for(let i = 0;i<alunos.length+1;i++){
    nome = prompt("Digite o nome do aluno: Ou digite 'novo' para cadrastar novo aluno")
    if(nome == 'novo'){
        nome = prompt("Digite o nome do novo aluno: ")
        alunos.push(nome)
    }

    while(valor.indexOf(alunos.indexOf(nome)) !== -1 || alunos.indexOf(nome) === -1){
        if(valor.indexOf(alunos.indexOf(nome)) !== -1){ // verifica se as notas do aluno aluno já foram para o sistema
            nome = prompt("Notas do aluno já cadrastrada, digite novamente: ")
        }
    
        if(alunos.indexOf(nome) === -1){// verifca de o nome digitado está cadrastrado no sistema pelo indice retornado
            nome = prompt("Aluno não encontrado, digite novamente: ")
        }
    }

    valor.push(alunos.indexOf(nome))
   //* let index = alunos.length
   //* while(nome  != alunos[index]){  // verifca de o nome digitado está cadrastrado no sistema 
        //*index--
        //*** */ if(index < 0){
        //     nome = prompt("Aluno não encontrado, digite novamente: ")
        //     index = alunos.length
        // ***}


    //valor = alunos.indexOf(nome)    // retorna o indice do array que nome está

    nota1 = prompt("Aluno: "+nome+"\nNota1: ")
    nota2 = prompt("Aluno: "+nome+"\nNota2: ")
    notas[alunos.indexOf(nome)] = media(parseInt(nota1), parseInt(nota2))

    conn = confirm("Cadrastrar notas de novo aluno?: ")

    if(conn == false){
        i = alunos.length + 1
    }
    
}

