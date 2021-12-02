import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'pi',
        price: 1,
        title: 'My First Book1',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p2',
        price: 2,
        title: 'My First Book2',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p3',
        price: 3,
        title: 'My First Book3',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p4',
        price: 4,
        title: 'My First Book4',
        description: 'The first book I ever wrote',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product =>
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />)}
            </ul>
        </section>
    );
};

export default Products;
