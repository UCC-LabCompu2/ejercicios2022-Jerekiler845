/**
 * convierte unidades metros,yardas,pies,pulgadas.
 * @method cambiarunidades
 * @param (string) id de los metros,yardas,pulgadas,pie.
 * @param (int) valor de los metros,ayrdas,pulgadas,pie.
 */
function cambiarunidades(id, value){
    var metro,yarda,pie,pulgada;
    if(value.includes(",")){
        value=value.replace(",",".");
    }
    if(isNaN(value)){

        alert("se ingreso un dato invalido en"+id);
        metro="";
        yarda= "";
        pie= "";
        pulgada= "";
    }else if (id=="metro"){
        pulgada= 39.3701*value;
        yarda= 1.09361*value;
        pie= 3.28084*value;
        metro=value;
    }else if (id=="yarda"){
        metro= 0.9144*value;
        yarda=value;
        pulgada= 36*value;
        pie= 3*value;
    }else if (id=="pie"){
        pulgada= 12*value;
        yarda= 0.33333*value;
        metro= 0.3048*value;
        pie=value;
    }else if (id=="pulgada"){
        metro= 0.0254*value;
        pie=0.0833333*value;
        yarda=0.0277778*value;
        pulgada=value;

    }
    document.lasunidades.unid_pulgada.value= Math.round(pulgada*100)/100;
    document.lasunidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasunidades.unid_yarda.value= Math.round(yarda*100)/100;
    document.lasunidades.unid_pie.value= Math.round(pie*100)/100;
}
function mostrarocul(value){
    if (value=='val_mostrar'){
    document.getElementById("divocu").style.display='block';
    }else
        if (value=='val_ocultar'){
            document.getElementById("divocu").style.display='none';
        }
}

function convertirgradosarad(id){
    var grad,rad;
    if (id=="grados"){
        grad= document.getElementById("grados").value
        rad= (grad*Math.PI)/180;

    }else if(id=="radianes"){
        rad= document.getElementById("radianes").value
        grad= (rad/180)*Math.PI;

    }
document.getElementById("grados").value= grad;
    document.getElementById("radianes").value=rad;
}
function suma(){
    var resul,num1,num2;
    num1= Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);
    resul=num1+num2;
    document.getElementsByName("sum_total")[0].innerHTML=resul;

}
function resta(){
    var resul,num1,num2;
    num1= Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);
    resul=num1-num2;
    document.getElementsByName("res_total")[0].innerHTML=resul;

}function mul(){
    var resul,num1,num2;
    num1= Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);
    resul=num1*num2;
    document.getElementsByName("mul_total")[0].innerHTML=resul;

}function division(){
    var resul,num1,num2;
    num1= Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);
    resul=num1/num2;
    document.getElementsByName("div_total")[0].innerHTML=resul;

}
function web2(){
    var uni,cant,urlc;
    cant=document.getElementById("distancia").value;
    uni=document.getElementsByName("unidades")[0].value;
    urlc="segundaWeb.html#"+ cant+"#"+uni;
    window.open(urlc);
}
function cargarres(){
    var urlc,uni,cant;
    urlc=window.location.href.split("/")[5];
    cant=urlc.split("#")[1];
    uni=urlc.split("#")[2];
document.getElementById("dist").value=cant+" "+uni ;
}
function localc(){
  let uni,cant;
    cant=document.getElementById("distancia").value;
    uni=document.getElementsByName("unidades")[0].value;
    localStorage.setItem("cantls",cant);
    localStorage.setItem("unils",uni)
    window.open("segundaWeb.html");
}
function localm(){
let cant,uni;
cant=localStorage.getItem("cantls");
uni=localStorage.getItem("unils");
document.getElementById("dist").value=cant+" "+uni;
}
