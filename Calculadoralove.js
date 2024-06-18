function Calculadoralove(){
    const name1= document.getElementById("name1").value
    const name2= document.getElementById("name2").value

    if(name1 && name2){
        const hash = (name1+name2).split('').reduce((acc, char)=>acc + char.charCodeAt(0), 0)
        const poncentaje=hash % 101
        document.getElementById("Result").style.color='green'
        document.getElementById("Result").textContent=`tienes un ${poncentaje}% de compatibilidad`
    } else {
        document.getElementById("Result").style.color='red'
        document.getElementById("Result").textContent=`ingresa ambos nombres`
    }
}