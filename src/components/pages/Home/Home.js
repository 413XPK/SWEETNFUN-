import React, { useState, useEffect } from 'react';

import useStyles from './styles';

import { client } from '../../../utilities/client';
import HeroBanner from '../../HeroBanner/HeroBanner.js';

const Home = ({ bannerData, products }) => {
  const styles = useStyles();

  const [prodData, setData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "product"]`;
    const products = client
      .fetch(query)
      .then((data) => setData(data))
      .catch(console.error);

    const bannerQuery = `*[_type == "banner"]`;
    const bannerData = client
      .fetch(bannerQuery)
      .fetch(query)
      .then((data) => setData(data))
      .catch(console.error);

    return {
      props: { products, bannerData },
    };
  });
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData} />

      <div>
        <h1 className={styles.body_header}>
          <span className={styles.pop}>Pop</span>ular Products
        </h1>
      </div>
      <div className={styles.popular}>
        {products?.map((product) => product.name)}
      </div>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData },
//   };
// };

export default Home;
