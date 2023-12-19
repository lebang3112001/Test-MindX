function updateColor() {
    const color = document.getElementById('colorPicker').value;
    document.getElementById('colorDisplay').textContent = `Mã màu: ${color}`;
    document.body.style.background = color;
  }
  
  document.getElementById('copyButton').addEventListener('click', function() {
    const colorDisplay = document.getElementById('colorDisplay');
    const textArea = document.createElement('textarea');
    textArea.value = colorDisplay.textContent.split(' ')[2];
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Mã màu đã được copy!');
  });
  
  document.getElementById('gradientCheckbox').addEventListener('change', updateColor);
  document.getElementById('colorPicker').addEventListener('input', updateColor);
  
  updateColor(); // Mặc định hiển thị một mã màu khi trang được tải