import React from 'react';
import useStyles from './styles';

import { client } from '../../../utilities/client';
import { Product } from '../../Product';

const PopProds = ({ products, bannerData }) => {
  const styles = useStyles();

  return (
    <>
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

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default PopProds;
