function Hitungluas() {
    // Ambil nilai input
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);

    // Validasi Input
    if (isNaN(sideA) || isNaN(sideB)) {
        alert('Masukkan nilai yang valid.');
        return;
    }

    // Hitung luas
    var luas = 0.5 * sideA * sideB;

    // Tampilkan hasil dengan menambahkan kelas "show" ke elemen result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>L = 1/2 x a x t</p>
        <p>L = 1/2 × ${sideA} × ${sideB}</p>
        <p>L = ${luas.toFixed()}</p>
        <p> Jadi Luas Segitiga Tersebut Adalah ${luas.toFixed()} </p>
    `;

    // Tambahkan kelas "show" untuk menampilkan hasil
    resultElement.classList.add('show');
}

function resetForm() {
    // Reset nilai input
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';

    // Hapus hasil
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    // Hapus kelas "show" untuk menyembunyikan hasil
    resultElement.classList.remove('show');
}

function calculatePerimeter() {
    
    var sideA = parseFloat(document.getElementById('perimeterSideA').value);
    var sideB = parseFloat(document.getElementById('perimeterSideB').value);
    var sideC = parseFloat(document.getElementById('perimeterSideC').value);

    
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Masukkan nilai yang valid untuk setiap sisi segitiga :)');
        return;
    }

    
    var keliling = sideA + sideB + sideC;


    var resultElement = document.getElementById('perimeterResult');
    resultElement.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>K = S1 + S2 + S3</p>
        <p>K = ${sideA} + ${sideB} + ${sideC}</p>
        <p>K = ${keliling.toFixed()}</p>
        <p> Jadi Keliling Segitiga Tersebut Adalah ${keliling.toFixed()} </p>
    `;

   
    resultElement.classList.add('show');
}

function resetPerimeterForm() {
    
    document.getElementById('perimeterSideA').value = '';
    document.getElementById('perimeterSideB').value = '';
    document.getElementById('perimeterSideC').value = '';

   
    var resultElement = document.getElementById('perimeterResult');
    resultElement.innerHTML = '';

    
    resultElement.classList.remove('show');
}