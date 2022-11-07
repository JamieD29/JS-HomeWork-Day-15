

// var client = "Business";  // inhabitant and business 
// var ports =12;
// var channels = 5;






 function checkClient(){
    var client = document.getElementById('client').value;
    if(client === "Business"){
    document.getElementById('PortsInput').style.display ='block';
    }else{
        document.getElementById('PortsInput').style.display ='none'; 
    }
    return client;
 }




function CableInvoice (){
    var guestCode =document.getElementById('guestCode').value;
    var guest = checkClient();
    var ports = +document.getElementById('ports').value ;
    var channels = +document.getElementById('channels').value;
    var result = 0;
    if(guest === "Inhabitant"){
        result = 4.5 + 20.5 + channels * 7.5 ;
    }
    if(guest === "Business"){
       
        if(ports > 10){
            result = 15 + 75 + (ports - 10) * 5 + 50 * channels;
        }else {
            result = 15 + 75 + 50 * channels;
        }
    }
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    document.getElementById('Ex_ex2Result').innerHTML = "Số tiền cáp mà khách hàng "+ guestCode + " phải trả là: " + dollarUS.format(result);

}


