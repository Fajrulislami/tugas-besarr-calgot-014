document.addEventListener("DOMContentLoaded", function () {
	// Load drink data
	fetch("minuman.json") // Ganti dengan nama file JSON minuman Anda
		.then((response) => response.json())
		.then((data) => {
			const container = document.querySelector(".menu-container"); // Menggunakan container yang sama dengan HTML

			// Kosongkan container sebelum menambahkan item baru
			container.innerHTML = "";

			data.drinks.forEach((drink) => {
				const item = document.createElement("div");
				item.className = "menu-item";
				item.innerHTML = `
                    <img src="${drink.image}" alt="${drink.alt}">
                    <h3>${drink.name}</h3>
                    <p>Rp ${drink.price.toLocaleString("id-ID")}</p>
                    <button class="pesan-btn" data-id="${
											drink.id
										}">Pesan Sekarang</button>
                `;
				container.appendChild(item);
			});

			// Add click event to all order buttons
			document.querySelectorAll(".pesan-btn").forEach((button) => {
				button.addEventListener("click", function () {
					const drinkId = this.getAttribute("data-id");
					const selectedDrink = data.drinks.find((item) => item.id == drinkId);

					if (selectedDrink) {
						const whatsappNumber = "6285757106358"; // Ganti dengan nomor Anda
						const message = `Halo, saya ingin memesan:\n\n*${
							selectedDrink.name
						}*\nHarga: Rp ${selectedDrink.price.toLocaleString(
							"id-ID"
						)}\n\nApakah tersedia?`;
						const encodedMessage = encodeURIComponent(message);

						window.open(
							`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
							"_blank"
						);
					}
				});
			});
		})
		.catch((error) => console.error("Error loading drink data:", error));
});


document.addEventListener("DOMContentLoaded", function () {
	const hamburger = document.getElementById("hamburger");
	const nav = document.querySelector(".nav");

	hamburger.addEventListener("click", function () {
		nav.classList.toggle("active");
	});
});
