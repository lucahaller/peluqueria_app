const Product = require("../models/ProductModel");

const createProduct = async (productData) => {
  try {
    return await Product.create(productData);
  } catch (error) {
    throw new Error("Error al crear el producto.");
  }
};

const getProducts = async () => {
  try {
    return await Product.findAll();
  } catch (error) {
    throw new Error("Error al obtener los productos.");
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    return product;
  } catch (error) {
    throw new Error("Error al obtener el producto.");
  }
};

const updateProduct = async (id, updatedData) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    await product.update(updatedData);
    return product;
  } catch (error) {
    throw new Error("Error al actualizar el producto.");
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    await product.destroy();
  } catch (error) {
    throw new Error("Error al eliminar el producto.");
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
