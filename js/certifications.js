// Fungsi untuk menampilkan data dalam HTML
function tampilkanDataCertificate(data) {
    // Dapatkan elemen HTML tempat Anda ingin menampilkan data
    var certificateid = document.getElementById("certificateid");

    // Loop melalui setiap item dalam data JSON
    for (var i = 0; i < data.length; i++) {
        // Buat elemen HTML untuk setiap item
        var certificateItem = document.createElement("div");
        certificateItem.classList.add("col-sm-6");

        // Isi elemen dengan informasi dari data JSON
        // certificateItem.textContent = "Nama: " + data[i].title + ", By: " + data[i].by;
        certificateItem.innerHTML = `
        <div class="row mb-1"></div>
        <!-- Button trigger modal -->
        <button type="button"
            class="mybtngrid bg-transparent rounded-4 d-flex flex-column px-4 py-4 gap-2 text-start"
            data-bs-toggle="modal" data-bs-target="#certificatemodel-${i}">
            <p class="m-0 text-disable mysmalltext">${data[i].date}</p>
            <img src="${data[i].path}"
                class="mycertificate rounded-1" alt="">
            <h5 class="m-0 ">${data[i].title}</h5>
            <p class="m-0 text-disable">by ${data[i].by}</p>
        </button>
        <!-- Modal -->
        <div class="modal fade" id="certificatemodel-${i}" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class=" bg-dark">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">${data[i].title}</h1>
                    </div>
                    <div class="modal-body">
                        <img src="${data[i].path}"
                            class="rounded-1 mysertificatedetail" alt="">
                        <div class="mb-3"></div>
                        <p class="m-0 text-disable">by ${data[i].by}</p>
                        <p class="m-0 text-disable mysmalltext">${data[i].date}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4"></div>
        `;

        // Tambahkan elemen ke dalam certificateid
        certificateid.appendChild(certificateItem);
    }
}

// Buat objek XMLHttpRequest untuk melakukan permintaan HTTP
var xhrcertificate = new XMLHttpRequest();

// Tentukan jenis permintaan dan URL file JSON
xhrcertificate.open("GET", "/json/certifications.json", true);

// Setel jenis konten yang akan diterima sebagai JSON
xhrcertificate.setRequestHeader("Content-Type", "application/json");

// Atur fungsi yang akan dijalankan ketika permintaan selesai
xhrcertificate.onload = function () {
    // Periksa status HTTP
    if (xhrcertificate.status === 200) {
        // Parse JSON menjadi objek JavaScript
        var data = JSON.parse(xhrcertificate.responseText);

        // Panggil fungsi untuk menampilkan data dalam HTML
        tampilkanDataCertificate(data);
    }
};

// Kirim permintaan
xhrcertificate.send();
