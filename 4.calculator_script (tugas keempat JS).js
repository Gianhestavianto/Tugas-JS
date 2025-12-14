function tambah() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent =
            "Error: Masukkan angka yang valid!";
        return;
    }

    let hasil = num1 + num2;
    document.getElementById("hasilKalkulasi").textContent =
        "Hasil: " + hasil;
}

function kurang() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent =
            "Error: Masukkan angka yang valid!";
        return;
    }

    let hasil = num1 - num2;
    document.getElementById("hasilKalkulasi").textContent =
        "Hasil: " + hasil;
}

function kali() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent =
            "Error: Masukkan angka yang valid!";
        return;
    }

    let hasil = num1 * num2;
    document.getElementById("hasilKalkulasi").textContent =
        "Hasil: " + hasil;
}

function bagi() {
    let num1 = Number(document.getElementById("angka1").value);
    let num2 = Number(document.getElementById("angka2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("hasilKalkulasi").textContent =
            "Error: Masukkan angka yang valid!";
        return;
    }

    if (num2 === 0) {
        document.getElementById("hasilKalkulasi").textContent =
            "Error: Tidak bisa membagi dengan nol!";
        return;
    }

    let hasil = num1 / num2;
    document.getElementById("hasilKalkulasi").textContent =
        "Hasil: " + hasil;
}
