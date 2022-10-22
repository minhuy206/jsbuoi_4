/** Bài 1
 * Mô hình 3 khối:
 *  -Đầu vào: Nhập 3 số khác nhau lần lượt a, b, c;
 *  -Xử lí:
 *    -Nếu a > b => đúng => đổi a thành b, b thành a. Sau đó nếu b > c => đúng => đổi b thành c, b thành c. Sau đó nếu a > b => đúng => đổi a thành b, b thành a => kết quả
 *                                                           nếu b > c => sai => kết quả
 *                                                                                                                 nếu a > b => sai => kết quả
 *                  sai => so sánh b > c => đúng => đổi b thành c, b thành c. Sau đó nếu a > b => đổi a thành b, b thành a => kết quả
 *                         so sánh b > c => sai => kết quả
 *                                                                                   nếu a > b => sai => kết quả
 *  -Đầu ra: in ra a < b < c
 */
document.getElementById("btnOrder").onclick = function name(params) {
  var a = document.getElementById("num1").value * 1;
  var b = document.getElementById("num2").value * 1;
  var c = document.getElementById("num3").value * 1;
  var d;
  if (a > b) {
    d = a;
    a = b;
    b = d;
    if (b > c) {
      d = b;
      b = c;
      c = d;
      if (a > b) {
        d = a;
        a = b;
        b = d;
      }
    }
  } else {
    if (b > c) {
      d = b;
      b = c;
      c = d;
      if (a > b) {
        d = a;
        a = b;
        b = d;
      }
    }
  }
  document.getElementById("infoOrder").innerHTML = "";
  var rs = document.createElement("p");
  rs.innerHTML = a + " < " + b + " < " + c;
  document.getElementById("infoOrder").appendChild(rs);
  rs.className = "alert alert-success";
};

/**
 * Bài 2
 * Mô hình 3 khối
 * - Đầu vào: chọn ai là người đang sử dụng máy
 * - Xử lí: gán value "Ba", "Mẹ", "Anh", "Em" cho từng selection = a
 * - Đầu ra: in ra màn hình "Xin chào" + a
 */
document.getElementById("btnHello").onclick = function () {
  var a = document.getElementById("using").value;
  document.getElementById("infoHello").innerHTML = "";
  var rs = document.createElement("p");
  rs.innerHTML = "Xin chào " + a;
  document.getElementById("infoHello").appendChild(rs);
  rs.className = "alert alert-success";
};

/**
 * Bài 3
 *  - Đầu vào: nhập 3 số nguyên
 *  - Xử lí: a = số lẻ % 2 = 1 và b = số chẵn % 2 = 0   ==>  số lượng số lẻ = a + b và số lượng số chẵn = 3 - số lượng số lẻ
 *  - Đầu ra: in số lượng số lẻ và số lượng số chẵn ra màn hình
 */
document.getElementById("btnCount").onclick = function () {
  var a = (document.getElementById("num3.1").value * 1) % 2;
  var b = (document.getElementById("num3.2").value * 1) % 2;
  var c = (document.getElementById("num3.3").value * 1) % 2;
  var d = a + b + c;
  document.getElementById("infoCount").innerHTML = "";
  var rs = document.createElement("p");
  rs.innerHTML = "Có " + d + " số lẻ và " + (3 - d) + " số chẵn";
  document.getElementById("infoCount").appendChild(rs);
  rs.className = "alert alert-success";
};

/**
 * Bài 4
 * Mô hình 3 khối
 *  -Đầu vào: nhập 3 cạnh của tam giác
 *  -Xử lí:
 *    -Nếu a <= b + c || b <= a + c || c <= a + b => đây không phải là tam giác
 *    -Nếu a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b => đây là tam giác vuông
 *    -Nếu a != b && a != c && b != c => đây là tam giác
 *    -Nếu (a === b && a != c) || (b === c && a != b) || (a === c && a != b) => đây là tam giác cân
 *    -Nếu (a = b) && (a = c) => đây là tam giác đều
 *  -Đầu ra: in ra màn hình kết quả
 */
document.getElementById("btnAnalys").onclick = function () {
  var a = document.getElementById("side1").value * 1;
  var b = document.getElementById("side2").value * 1;
  var c = document.getElementById("side3").value * 1;
  var d = a * a;
  var e = b * b;
  var f = c * c;
  var g = b * b + c * c;
  var h = a * a + c * c;
  var k = a * a + b * b;
  var rs = "";
  if (a >= b + c || b >= a + c || c >= a + b) {
    rs += "Đây không phải là tam giác";
  } else {
    if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      rs += "Đây là tam giác vuông";
    } else {
      if (a != b && a != c && b != c) {
        rs += "Đây là tam giác";
      } else {
        if ((a === b && a != c) || (b === c && a != b) || (a === c && a != b)) {
          rs += "Đây là tam giác cân";
        } else {
          if ((a = b) && (a = c)) {
            rs += "Đây là tam giác đều";
          }
        }
      }
    }
  }
  document.getElementById("infoAnalys").innerHTML = "";
  var result = document.createElement("p");
  result.innerHTML = rs;
  document.getElementById("infoAnalys").appendChild(result);
  result.className = "alert alert-success";
};
