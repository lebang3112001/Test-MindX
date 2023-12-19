function chiaNhom(arr) {
    let team1 = 0;
    let team2 = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        team1 += arr[i];
      } else {
        team2 += arr[i];
      }
    }
  
    return [team1, team2];
  }
  
  // Ví dụ sử dụng
  let mangCanNang = [70, 80, 90, 60, 85,50,85,74];
  let ketQua = chiaNhom(mangCanNang);

  console.log("Tổng cân nặng của Team 1:", ketQua[0]);
  console.log("Tổng cân nặng của Team 2:", ketQua[1]);
