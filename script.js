// Saat formulir dikirim
    document.getElementById("registerform").addEventListener("submit", function(e){
      e.preventDefault(); // Mencegah reload halaman

      // Mengambil nilai dari setiap input
      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const phone_number = document.getElementById("phone_number").value;
      const tanggal_lahir = document.getElementById("tanggal_lahir").value;

      // Mendapatkan tabel dan menambahkan baris baru
      const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
      const newRow = table.insertRow();

      // Menambahkan data ke dalam baris tabel
      newRow.insertCell(0).textContent = nama;
      newRow.insertCell(1).textContent = email;
      newRow.insertCell(2).textContent = phone_number;
      newRow.insertCell(3).textContent = tanggal_lahir;

      // Mengosongkan form setelah submit
      document.getElementById("registerform").reset();
    });