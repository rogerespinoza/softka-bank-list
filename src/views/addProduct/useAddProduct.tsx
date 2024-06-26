import { FinancialProduct } from '../../domain';
import { DataHandler } from '../../infraestructure';
import { useProducts } from '../../contexts';

export function useAddProduct() {
  const { addProducts } = useProducts();

  const createProduct = async (_item: FinancialProduct) => {
    await DataHandler.createProduct(_item);
    // const response = await DataHandler.createProduct(product);
    // if (response === "Can't create because product is duplicate") {
    //   throw response;
    // }
  };

  const getProducts = async () => {
    const productsData = await DataHandler.fetchProducts();
    addProducts(productsData);
  };

  return {
    getProducts,
    createProduct,
  };
}
