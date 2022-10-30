

var client = "Business";  // inhabitant and business 
var ports =12;
var channels = 5;


function CableInvoice (guest, ports, channels){

    if(guest === "Inhabitant"){
        return 4.5 + 20.5 + channels * 7.5 ;
    }
    if(guest === "Business"){
        if(ports > 10){
            return 15 + 75 + (ports - 10) * 5 + 50 * channels;
        }else {
            return 15 + 75 + 50 * channels;
        }
    }
}

var result = CableInvoice(client,ports, channels);

console.log("Bài 2: Số tiền cáp mà khách hàng:", client,"phải trả là:",result);