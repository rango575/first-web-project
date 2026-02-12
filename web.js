 let selectedProduct = {}


//Order now button functionality

    document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.dataset.product;
    const product2 = btn.dataset.value;
    const message = `Hi Mullar Cycle Mart! I'd like to order the ${product}, ${product2}`;
    const url = `https://wa.me/254706316378?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
/*
const whatsappBtn = document.getElementById("order-btn").forEach(orderbtn =>{
   orderbtn.addEventListener("click", () =>{
      btn.dataset.info = selectedProduct.name
const productName = selectedProduct.name
const message = `Hi Mullar Cycle Mart! I'd like to order the ${productName}`
const url = `https://wa.me/254706316378?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank")

   })
})
*/


//Product dispaly modal functionality


document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelectorAll(".products");
    const modal = document.getElementById("productModal");

    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    products.forEach(function(product) {

        product.addEventListener("click", function() {

            // Accessing data-* attributes using .dataset
            selectedProduct = {
                  name: this.dataset.name,
                  price: this.dataset.price,
                  image: this.dataset.image,
                  description: this.dataset.description
            };

            modalImage.src =  selectedProduct.image;
            modalName.textContent =  selectedProduct.name;
            modalPrice.textContent =  selectedProduct.price;
            modalDescription.textContent =  selectedProduct.description;

            modal.style.display = "flex";
            document.body.style.overflow = "hidden"
        });

    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"
    });

    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});

// Proceed to Order button functionality

 const whatsappBtn = document.getElementById("whatsappOrder");

whatsappBtn.addEventListener("click", function() {

    const phoneNumber = "254706316378"; 

    const message = `Hello, I would like to order:

Product: ${selectedProduct.name}
Price: ${selectedProduct.price}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
});


