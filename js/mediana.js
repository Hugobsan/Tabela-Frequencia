function medianaArray(array){
    var n = array.length, mediana = 0
    if (n % 2 == 0){
        mediana = (array[n / 2] + array[(n / 2) - 1]) / 2   
    }
    else {
        mediana = array[(n/2) - 0.5]
    }

    return mediana
}