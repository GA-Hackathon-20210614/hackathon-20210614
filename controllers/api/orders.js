const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add the item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id); 
  res.json(cart);
}

// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  let cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty); 
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save(); 
  res.json(cart);
}
