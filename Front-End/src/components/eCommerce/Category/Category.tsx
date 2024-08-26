import { Link } from 'react-router-dom';
import { TCategory } from '@customTypes/category';

import classes from './Category.module.css';
const { category, categoryImg, categoryTitle } = classes;

const Category = ({ img, title, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
