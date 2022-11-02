var name = "Jamie";
var income = 9700000000 ;
var familyMember = 2;
function CountingIncomeTax(inC, fM){
    var paidIncome = inC - 4000000 - (fM * 1600000) ;
    
    if(paidIncome <= 60000000 )
    {
        return paidIncome * 0.05;

    }else if(paidIncome > 60000000 &&  paidIncome <= 120000000)
    {
        return 60000000 * 0.05 + (paidIncome-60000000) * 0.1;
    }else if (paidIncome > 120000000 && paidIncome <= 210000000)
    {
        return 60000000 * 0.05 + 60000000 * 0.1 + (paidIncome - 120000000) * 0.15 ;
    }else if (paidIncome > 210000000 && paidIncome <= 384000000)
    {
        return 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + (paidIncome - 210000000) * 0.2;
    }else if (paidIncome > 384000000 && paidIncome <= 624000000)
    {
        return 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + (paidIncome - 384000000) * 0.25 ;
    }else if (paidIncome > 624000000 && paidIncome <= 960000000)
    {
        return 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (paidIncome - 624000000) * 0.3;
    }else if (paidIncome > 960000000)
    {
        return 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000  * 0.3 + (paidIncome - 960000000) * 0.35;
    }

}

var result = CountingIncomeTax(income, familyMember);

let strResult = result.toLocaleString("en-US");

console.log("Bài 1: Số tiền thuế mà",name,"phải đóng là:",strResult);