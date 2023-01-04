import Product from "./Product";

export default function ProductFeed({ products }) {
    return (
        <div className="">
            <h1>Products</h1>
            {products.map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
        </div>
    );
}
