function checkpoint7 (num1,num2,num3,num4) {
    const sum1= num1 + num2;
    const sum2= num3 + num4;
    const resultado = sum1 * sum2;
    if (resultado >50) {
        return "es mayor que 50";
    } else if (resultado < 50) {
        return "es menor que 50"
    } else {
        return ("es igual que 50");
    }
}