const products = [
  {
    title: "Sample Product",
    price: "₹999",
    image: "https://via.placeholder.com/250",
    link: "#"
  }
];

const container = document.getElementById("products");
products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
      <a href="${p.link}" target="_blank">Buy Now</a>
    </div>
  `;
});
