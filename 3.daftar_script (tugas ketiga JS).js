javascript
// Array daftar belanja
let shoppingList = [];

// Render daftar ke tampilan
function renderList() {
    const ul = document.getElementById("itemsBelanja");
    ul.innerHTML = ""; // kosongkan isi ul

    for (let i = 0; i < shoppingList.length; i++) {
        const li = document.createElement("li");
        li.textContent = shoppingList[i];
        ul.appendChild(li);
    }

    document.getElementById("jumlahItem").innerText = "Jumlah item: " + shoppingList.length;
}

// Tambah item
function tambahItem() {
    const input = document.getElementById("newItem");
    const value = input.value.trim();

    if (value !== "") {
        shoppingList.push(value);
    }

    input.value = ""; // kosongkan input
    renderList();
}

// Hapus item terakhir
function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
    }
    renderList();
}

// Inisialisasi awal
renderList();
