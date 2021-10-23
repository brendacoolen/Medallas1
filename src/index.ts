let posicion: number = document.getElementById("posicion");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let llegadas: number= Number(posicion.value)
if(llegadas===1){
  console.log("Medalla de oro")
}else{
  if (llegadas===2) {
    console.log("Medalla de plata")
  }else{
    if(llegadas===3){
      console.log("Medalla de bronce")
    }else{
      console.log("Gracias por participar")
    }
  }
}
}
