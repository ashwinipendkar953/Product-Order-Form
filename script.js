const productOrderForm = document.querySelector("#productOrderForm");

productOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectProductName = document.querySelector("#selectProductName").value;

  const quantity = document.querySelector("#quantity").value;

  const shippingAddress = document.querySelector("#shippingAddress").value;

  const paymentMethod = document.querySelector(
    "input[name='paymentMethod']:checked"
  ).value;

  const selectDeliverySpeed = document.querySelector(
    "#selectDeliverySpeed"
  ).value;

  const displayOrderDetails = document.querySelector("#displayOrderDetails");

  const orderDetails = `
    <h2>Order Details</h2>
    <p><strong>Product Name:</strong> ${selectProductName}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Shipping Address:</strong> ${shippingAddress}</p>
    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
    <p><strong>Delivery Speed:</strong> ${selectDeliverySpeed}</p>
  `;

  displayOrderDetails.innerHTML = orderDetails;
});
