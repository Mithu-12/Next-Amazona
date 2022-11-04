import Layout from '../Components/Layout';
import ProductItems from '../Components/ProductItems';
import data from '../utils/data';

export default function Home() {
  return (
    <div>
      <Layout title="Home-Page">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product) => (
            <ProductItems product={product} key={product.slug} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
