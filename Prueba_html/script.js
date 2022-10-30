function Registrar(){
    var nombre = document.getElementsByName("nombre")[0].value;
    var carrera = document.getElementsByName("carrera")[0].value;
    var nota_1 = document.getElementsByName("nota1")[0].value;
    var nota_2 = document.getElementsByName("nota2")[0].value;
    var nota_3 = document.getElementsByName("nota3")[0].value;
    var nota_4 = document.getElementsByName("nota4")[0].value;
    var nota_5 = document.getElementsByName("nota5")[0].value;
    var nota_6 = document.getElementsByName("nota6")[0].value;

    
    var v_nombre = document.getElementById("verificar_nombre");
    var v_nota1 = document.getElementById("verificar_nota1");
    var v_nota2 = document.getElementById("verificar_nota2");
    var v_nota3 = document.getElementById("verificar_nota3");
    var v_nota4 = document.getElementById("verificar_nota4");
    var v_nota5 = document.getElementById("verificar_nota5");
    var v_nota6 = document.getElementById("verificar_nota6");
    var v_carrera = document.getElementById("verificar_carrera");
    var v_promedio = document.getElementById("resultado");


    v_nombre.innerHTML = "";
    v_carrera.innerHTML = "";
    v_nota1.innerHTML = "";
    v_nota2.innerHTML = "";
    v_nota3.innerHTML = "";
    v_nota4.innerHTML = "";
    v_nota5.innerHTML = "";
    v_nota6.innerHTML = "";

    ponderacion1 = ((nota_1*0.12)+(nota_2*0.21));
    ponderacion2 = ((nota_3*0.12)+(nota_4*0.21));
    ponderacion3 = ((nota_5*0.13)+(nota_6*0.21));

    promedio = ((ponderacion1)+(ponderacion2)+(ponderacion3));
    promediofinal = (promedio).toFixed(1);


    if(!isNaN(nombre)||/^[]*$/.test(nombre)||nombre.length > 10){
       v_nombre.innerHTML = ("❌ Nombre invalido ❌");
    }else if(!isNaN(carrera)|| carrera ===""||carrera.length > 25){
        v_carrera.innerHTML = ("❌ Seleccione carrera ❌");  

    }else if(isNaN(nota_1)||nota_1<=0  || nota_1>7.0 || nota_1 ==="" ){
       v_nota1.innerHTML = ("❌ Error en la nota 1 ❌");
    }else if(isNaN(nota_2)||nota_2<=0  || nota_2>7.0 || nota_2 ==="" ){
        v_nota2.innerHTML = ("❌ Error en la nota 2 ❌");
    
    }else if(isNaN(nota_3)||nota_3<=0  || nota_3>7.0 || nota_3 ==="" ){
        v_nota3.innerHTML = ("❌ Error en la nota 3 ❌");
    }else if(isNaN(nota_4)||nota_4<=0  || nota_4>7.0 || nota_4 ==="" ){
        v_nota4.innerHTML = ("❌ Error en la nota 4 ❌");
    
    }else if(isNaN(nota_5)||nota_5<=0  || nota_5>7.0 || nota_5 ==="" ){
        v_nota5.innerHTML = ("❌ Error en la nota 5 ❌");  
    }else if(isNaN(nota_6)||nota_6<=0  || nota_6>7.0 || nota_6 ==="" ){
        v_nota6.innerHTML = ("❌ Error en la nota 6 ❌"); 
        
    }else if(promedio>=4.0){
        v_promedio.innerHTML = ("<table>"+
        "<tr>"+
            "<th colspan='3'> <h1>Has Aprobado</h1> </th>"+
        "</tr>"+
        "<tr>"+
            "<th colspan='3'>Nombre del Estudiante: "+nombre+"</th>"+
        "</tr>"+
        "<tr>"+
            "<th colspan='3'>Asignatura: "+carrera+"</th>"+
        "</tr>"+
        "<tr>"+
            "<td><b>UNIDAD 1</b></td>"+
            "<td><b>UNIDAD 2</b></td>"+
            "<td><b>UNIDAD 3</b></td>"+
    "</tr>"+
        
        "<tr>"+
            "<td class= 'td1'><b>Nota 1 (12%): </b>"+nota_1+"</td>"+
            "<td class= 'td1'><b>Nota 1 (12%): </b>"+nota_3+"</td>"+
            "<td class= 'td1'><b>Nota 1 (13%): </b>"+nota_5+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_2+"</td>"+
            "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_4+"</td>"+
            "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_6+"</td>"+
    "</tr>"+
    "<tr>"+
            "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion1).toFixed(1)+"</td>"+
            "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion2).toFixed(1)+"</td>"+
            "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion3).toFixed(1)+"</td>"+
    "</tr>"+
    "<tr>"+
            "<th colspan='3'>Promedio: "+promediofinal+"</th>"+
        "</tr>"+
    "</table>");
    } 
    else{
        v_promedio.innerHTML = (
            "<table>"+
                "<tr>"+
                    "<th colspan='3'> <h1>Has Reprobado</h1> </th>"+
                "</tr>"+
                "<tr>"+
                    "<th colspan='3'>Nombre del Estudiante: "+nombre+"</th>"+
                "</tr>"+
                "<tr>"+
                    "<th colspan='3'>Asignatura: "+carrera+"</th>"+
                "</tr>"+
                "<tr>"+
                    "<td><b>UNIDAD 1</b></td>"+
                    "<td><b>UNIDAD 2</b></td>"+
                    "<td><b>UNIDAD 3</b></td>"+
            "</tr>"+
                
                "<tr>"+
                    "<td class= 'td1'><b>Nota 1 (12%): </b>"+nota_1+"</td>"+
                    "<td class= 'td1'><b>Nota 1 (12%): </b>"+nota_3+"</td>"+
                    "<td class= 'td1'><b>Nota 1 (13%): </b>"+nota_5+"</td>"+
            "</tr>"+
            "<tr>"+
                    "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_2+"</td>"+
                    "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_4+"</td>"+
                    "<td class= 'td1'><b>Nota 2 (21%): </b>"+nota_6+"</td>"+
            "</tr>"+
            "<tr>"+
                    "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion1).toFixed(1)+"</td>"+
                    "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion2).toFixed(1)+"</td>"+
                    "<td class= 'td1'><b>Ponderacion: </b>"+(ponderacion3).toFixed(1)+"</td>"+
            "</tr>"+
            "<tr>"+
                    "<th colspan='3'>Promedio: "+promediofinal+"</th>"+
                "</tr>"+
            "</table>"

        );
    } 
}  










    