var kW = 100;
var name = "Jamie";

function CheckingElecPrice(elec){
    var usedkW =elec;

    if(usedkW >= 350){
        return 50*500 + 50* 650 + 100 * 850 + 150 * 1100 + (usedkW - 350) * 1300;
    }else if( usedkW < 350 && usedkW > 200 ){
        return 50 * 500 + 50 *650 + 100 * 850 + (usedkW - 200) * 1100;
    }else if (usedkW <= 200 && usedkW > 100){
        return 50 * 500 + 50 * 650 + (usedkW - 100) *850;
    }else if (usedkW <= 100 && usedkW > 50){
        return 50 * 500 + (usedkW - 50) * 650;
    }else {
        return usedkW * 500;
    }

}


var result =  CheckingElecPrice(kW) ;

let strResult = result.toLocaleString("en-US");


console.log("Bài 2: Tiền điện "+ name+ " cần đóng với" , kW, "kW là: ", strResult + " VND");