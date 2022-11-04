import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Layout from '../../Components/Layout';
import { Store } from '../../utils/Store';

export default function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <Layout title="sopping-cart">
      <h1 className="mb-4 text-xl">Sopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <p>cart is empty. </p>
          <Link href="/"> Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <th>
                  <tr className="px-5 text-left">Item</tr>
                  <tr className="p-5 text-right">Quantity</tr>
                  <tr className="p-5 text-right">Price</tr>
                  <tr className="p-5">Action</tr>
                </th>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        &nbsp;
                        {item.name}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Layout>
  );
}
