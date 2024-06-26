import { useState, useEffect } from 'react';

import { ProductsUI } from './ProductsUI';
import Categories from './Categories';
import Search from './Search';

const Main = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    category: 'all',
    search: '',
    min: '',
    max: '',
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState({});

  useEffect(() => {
    // https://api.escuelajs.co/api/v1/products
    // https://dummyjson.com/products
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        // setData(data.products);
        console.log('data is fetched', data.products);
        setData(data.products);

        setProducts(data.products);

        setCategories(
          data.products.reduce(
            (acc, item) =>
              !acc.includes(item.category) ? [...acc, item.category] : acc,
            ['all']
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (selected) => {
    setFilter({ ...filter, category: selected });
  };

  const handleSelected = (id) => {
    const temp = [...products];
    const index = temp.findIndex((item) => item.id === id);
    temp[index].selected = !temp[index].selected;
    console.log(temp);
    setProducts(temp);
  };

  useEffect(() => {
    let filtered = [];
    if (filter.category === 'all') {
      filtered = data;
    } else {
      filtered = data.filter(
        (item) => item.category.toLowerCase() === filter.category.toLowerCase()
      );
    }

    filtered = filtered.filter(
      (item) =>
        item.price > (+filter?.min || 0) &&
        item.price < (+filter?.max || 100000)
    );

    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(filter.search.toLowerCase())
    );
    console.log(filtered);
    setProducts(filtered);
  }, [filter, data]);

  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-span-8 text-center ">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="my-5">
          Clarusway Shopping
        </h1>
        <Categories {...{ categories, handleFilter }} />
      </div>

      <div className="col-span-2 lg:col-span-1 ml-2">
        <Search
          {...{ data, setProducts, price, setPrice, setFilter, filter }}
        />
      </div>
      <div className="col-span-6 lg:col-span-7 mr-2">
        <ProductsUI products={products} handleSelected={handleSelected} />
      </div>
    </div>
  );
};

export default Main;
