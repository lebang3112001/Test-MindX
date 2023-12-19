function chuoiDaiNhat(arr) {
  // Kiểm tra nếu mảng rỗng
  if (arr.length === 0) {
    return [];
  }

  let maxLength = 0;
  let result = [];
  // Tìm độ dài lớn nhất trong mảng
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = [arr[i]];
    } else if (arr[i].length === maxLength) {
      result.push(arr[i]);
    }
  }

  return result;
}
// Ví dụ sử dụng
let mangChuoi = ["Binh", "Hung", "Phuoc", "Cao", "Khanh" ];
let ketQua = chuoiDaiNhat(mangChuoi);

console.log("Mảng các chuỗi có độ dài lớn nhất:", ketQua);