

function CheckingElecPrice(){
    var name = document.getElementById('Ten').value;
    var usedkW = +document.getElementById('SoKw').value;
    var result =0;
    if(usedkW >= 350){
        result= 50*500 + 50* 650 + 100 * 850 + 150 * 1100 + (usedkW - 350) * 1300;
    }else if( usedkW < 350 && usedkW > 200 ){
        result= 50 * 500 + 50 *650 + 100 * 850 + (usedkW - 200) * 1100;
    }else if (usedkW <= 200 && usedkW > 100){
        result= 50 * 500 + 50 * 650 + (usedkW - 100) *850;
    }else if (usedkW <= 100 && usedkW > 50){
        result= 50 * 500 + (usedkW - 50) * 650;
    }else {
        result= usedkW * 500;
    }

   
    let strResult = result.toLocaleString("en-US");
    
    
    document.getElementById('ex2Result').innerHTML="Tiền điện "+ name+ " cần đóng với " + usedkW + " kW là: " + strResult + " VND";
}


