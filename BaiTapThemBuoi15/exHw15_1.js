// var name = "Jamie";
// var income = 9700000000 ;
// var familyMember = 2;
function CountingIncomeTax(){
    var name = document.getElementById('Name').value;
    var income = +document.getElementById('income').value;
    var familyMember = +document.getElementById('familyMember').value;

    var paidIncome = income - 4000000 - (familyMember * 1600000) ;
    
    var result = 0;

    if(paidIncome <= 60000000 )
    {
        result= paidIncome * 0.05;

    }else if(paidIncome > 60000000 &&  paidIncome <= 120000000)
    {
        result= 60000000 * 0.05 + (paidIncome-60000000) * 0.1;
    }else if (paidIncome > 120000000 && paidIncome <= 210000000)
    {
        result= 60000000 * 0.05 + 60000000 * 0.1 + (paidIncome - 120000000) * 0.15 ;
    }else if (paidIncome > 210000000 && paidIncome <= 384000000)
    {
        result= 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + (paidIncome - 210000000) * 0.2;
    }else if (paidIncome > 384000000 && paidIncome <= 624000000)
    {
        result= 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + (paidIncome - 384000000) * 0.25 ;
    }else if (paidIncome > 624000000 && paidIncome <= 960000000)
    {
        result= 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (paidIncome - 624000000) * 0.3;
    }else if (paidIncome > 960000000)
    {
        result= 60000000 * 0.05 + 60000000 * 0.1 +  90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000  * 0.3 + (paidIncome - 960000000) * 0.35;
    }
    let strResult = result.toLocaleString("en-US");

    document.getElementById('Ex_ex1Result').innerHTML= " Số tiền thuế mà " + name +" phải đóng là: "+ strResult;
}



