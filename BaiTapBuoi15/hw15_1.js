
//////////////////

function CheckingMarks() {
    var subject1 = +document.getElementById('mon1').value;
    var subject2 = +document.getElementById('mon2').value;
    var subject3 = +document.getElementById('mon3').value;
    var area = +document.getElementById('khuVuc').value;
    var priorityOb = +document.getElementById('doiTuong').value;
    var passingGrade = +document.getElementById('diemChuan').value;

    var sumS = subject1 + subject2 + subject3 + area + priorityOb;

    var result = "";

   

    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {

        result = "Điểm của bạn KHÔNG đạt yêu cầu để xét tuyển."; 
        document.getElementById('ex1Result').innerHTML = result;
        return;
    }
    else if (sumS >= passingGrade) {

         result = "Bạn đã ĐẠT tiêu chuẩn đậu.";
         document.getElementById('ex1Result').innerHTML = result;
         document.getElementById('tongDiem').innerHTML = 'Tổng điểm: ' + sumS;
    } else {
         result = "Bạn KHÔNG đủ điểm đậu.";
         document.getElementById('ex1Result').innerHTML = result;
         document.getElementById('tongDiem').innerHTML = 'Tổng điểm: ' + sumS;
    }


}


