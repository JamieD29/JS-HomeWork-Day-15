// Nhập thông tin cứng ở here

var studentName="Jamie";
var subject1 = 5; 
var subject2= 10;
var subject3 = 5;
var area = "X";
var priorityOb= 0;


var passingGrade= 22;
//////////////////

function CheckingMarks(pG,s1,s2,s3,ar,pOb){
    // // Điểm chuẩn
    // pG = passingGrade;
    // //Khu vực
    // ar= area;
    // //Đối tượng
    // pOb= priorityOb;
    // //Điểm 3 môn
    // s1=subject1;
    // s2=subject2;
    // s3=subject3;
   


    var sumS = s1 + s2 + s3;

    var result = "";

    if(s1 === 0 || s2 === 0 || s3 === 0){

       return result=" điểm KHÔNG đạt yêu cầu để xét tuyển.";
        
    }
    else{

        if(ar ==="A"){
            sumS +=2;
        }else if(ar === "B"){
            sumS+=1;
        }else if(ar==="C"){
            sumS+=0.5;
        }else{
            
        }
    
        if(pOb === 1){
            sumS+=2.5;
        }else if(pOb===2){
            sumS+=1.5;
        }else if(pOb === 3){
            sumS+=1;
        }else{
    
        }
    
        if(sumS >= pG){
           return result=" đã ĐẠT tiêu chuẩn đậu.";
        }else{
        return result=" KHÔNG đủ điểm.";
        }
        
    }
}


var result = CheckingMarks(passingGrade, subject1, subject2, subject3, area, priorityOb);

console.log("Bài 1: Thí sinh "+ studentName + result);