fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-container') || document.getElementById('featured-products');
    if (!container) return;
    container.innerHTML = '';
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>${product.price}</p>
        <a href="https://wa.me/917703929090?text=${encodeURIComponent(product.whatsappMessage)}" target="_blank">
          Order on WhatsApp
        </a>
      `;
      container.appendChild(div);
    });
  });
