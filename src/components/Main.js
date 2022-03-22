import React from 'react';
import Product from './Product';

export default function Main (props) {
    const {products,onAdd}=props;
    return <main className="block col-2">
        <h2 className='h11'>Menu</h2>
        <div className=" row col-1">
            {products.map((product)=>(
                <div className="card">
                     <div>
                            
                <Product key={product.id}product={product} onAdd={onAdd}></Product>
                </div>
                </div>
                
            ))}
        </div>
    </main>
}

