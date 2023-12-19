function chuoiDaiNhat(arr) {
    // Kiểm tra nếu mảng rỗng
    if (arr.length === 0) {
      return [];
    }
  
    // Tìm độ dài lớn nhất trong mảng
    let maxLength = Math.max(...arr.map(s => s.length));
  
    // Lọc các chuỗi có độ dài bằng độ dài lớn nhất
    let result = arr.filter(s => s.length === maxLength);
  
    return result;
  }
  // Ví dụ sử dụng
  let mangChuoi = ["Binh", "Hung", "Phuoc", "Cao", "Khanh" , " "];
  let ketQua = chuoiDaiNhat(mangChuoi);
  
  console.log("Mảng các chuỗi có độ dài lớn nhất:", ketQua);