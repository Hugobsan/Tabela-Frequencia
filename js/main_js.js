function calc(){

    /*Recebendo os valores inseridos*/
    input_xi = document.getElementById("values").value.split(" ").join("")
    vet_xi = input_xi.match(/-?\d+(?:\.\d+)?/g).map(Number)

    /* Organizar amostra em Rol */
    vet_xi = vet_xi.sort((a, b) => a - b)

    /*Determinando a quantidade n de dados*/
    n = vet_xi.length

    /*Determinando o Xmax*/
    Xmax=vet_xi[n-1] 

    /*Determinando o Xmin*/
    Xmin=vet_xi[0]

    /*Determinando o número k de classes que serão usadas*/
    var k = Math.sqrt(n)
    k = Math.round(k)

    /*Determinando o tamanho C de cada classe*/
    C = (Xmax - Xmin) / (k-1)

    /*Determinando o limite inferior da primeira classe*/
    li = Xmin - (C/2)

    /*Determinando a média a partir da amostra*/
    Xmedia = mediaArray(vet_xi)

    /*Determinando a mediana da amostra*/
    Md = medianaArray(vet_xi)

    /*Determinando a moda da amostra*/
    mode(vet_xi) == "" ? moda = "Amodal"  : moda = mode(vet_xi)

    /*Determinando a variância e desvio padrão a partir da amostra*/
    s2 = varianceArray(vet_xi, Xmedia) // Variância
    s = Math.sqrt(s2) // Desvio Padrão

    resultado = document.getElementById("resultado")
    resultado.innerHTML = '<b>Rol: <b>'
    for (i = 0; i < n; i++){
        resultado.innerHTML += vet_xi[i] + ", ";
    }
    resultado.innerHTML += "<br>"+
    "<b>Média:</b>" + Xmedia.toFixed(4) + 
    " | <b>Mediana:</b>" + Md.toFixed(4) +
    " | <b>Moda:</b>" + moda +
    " | <b>Variância:</b>" + s2.toFixed(4) +
    " | <b>Desvio Padrão:</b>" + s.toFixed(4)

    resultado.innerHTML += '<table class="table table-striped" id="tbl-values"> <tr> <th>Variável</th> <th>Fi</th> <th>Fr</th> <th>Fac</th> </tr></table>'
    tabela = document.getElementById("tbl-values")
    initInterClass = li //Inicio do intervalo da 1ª classe
    finalInterClass = li + C //Final do intervalo da 1ª classe
    fi=0
    fr_ant = 0
    for (i = 0; i < k ; i++){
        for (var j = 0; j < n; j++) {
            if (vet_xi[j] >= initInterClass.toFixed(2) && vet_xi[j]<finalInterClass.toFixed(2)) fi++;
        }
        fr = (fi / n);
        fac = (fr+fr_ant);
        fr_ant += fr;
        tabela.innerHTML += '<tr class="text-left"> <td>('+initInterClass.toFixed(2)+', '+finalInterClass.toFixed(2)+']</td> <td>'+fi+'</td> <td>'+fr.toFixed(4)+'</td> <td>'+fac.toFixed(4)+'</td> </tr>'
        initInterClass = finalInterClass
        finalInterClass +=C
        fi=0
    }
    tabela.innerHTML += '<tr class="text-left"> <td>Total</td> <td>'+ n +'</td> <td> 1.00</td> <td> - </td> </tr></table>'

}
