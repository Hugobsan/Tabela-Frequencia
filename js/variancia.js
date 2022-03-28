function varianceArray(array, Xmed){
    var i=0, somaVar = 0, n = array.length
    while (i<n) {
        somaVar += (array[i++]-Xmed)**2 
    }
    return somaVar/(n-1)
}