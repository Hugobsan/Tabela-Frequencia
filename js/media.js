function mediaArray(array){
    var i = 0, soma = 0, n = array.length
    while (i<n) {
        soma += array[i++];
    }
    return soma/n
}