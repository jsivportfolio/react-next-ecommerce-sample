import data from './data.json';

export function getProductsByCategory(category) {
  const products = data.filter((product) => product.category === category);
  console.log('[category].js category filter = ' + category)
  return products;
}

export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', ['GET']);
    response.status(405).json({ message: `Method ${request.method} is not allowed` });
  } else {
    const products = getProductsByCategory(request.query.category);
    response.status(200).json(products);
  }
}