import data from './data.json';

export function getProducts() {
    console.log('products folder index.js | function getProducts return data = ' + data)
  return data;
}

export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', ['GET']);
    response.status(405).json({ message: `Method ${request.method} is not allowed` });
  } else {
    const products = getProducts();
    console.log('products folder index.js | function getProducts response = ' + products)
    response.status(200).json(products);
  }
}