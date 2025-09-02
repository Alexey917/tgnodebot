import type  { FC }  from 'react';
import Button from '../../kit/Button/Button'

export interface IProduct {
  id: string
  title: string;
  description: string;
  price: number;
}


interface IProductItem {
  product: IProduct;
  onAdd: (product: IProduct) => void;
}

const ProductItem:FC<IProductItem> = ({product, onAdd}) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <div>
      <img src="" alt="" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <span>Стоимость: <b>{product.price}</b></span>
      </p>
      <Button onClick={onAddHandler}>Добавить в корзину</Button>
    </div>
  )
}

export default ProductItem
