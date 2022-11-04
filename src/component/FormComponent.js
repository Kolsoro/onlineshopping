import React from 'react'

export default function FormComponent() {
    const [getName, setName] = React.useState("");
    const [getPrice, setPrice] = React.useState("");
    const [getStock, setStock] = React.useState("Yes");  // we can define a value here as well 
    const [getCity, setCity] = React.useState("");

    const SubmitClick = (e) => {
        document.write(`Name=${getName}<br>Price=${getPrice}<br>ShippedTo=${getCity}<br>Stock=${getStock}`)
    }

    return (
        <form className='container' onSubmit={SubmitClick}>
            <h2>Register Product</h2>
            <div className='mt-2'>
                <label className='form-label'></label>
                <div>
                    <input type="text" name='Name' onChange={e => setName(e.target.value)} value={getName} className='form-control' />
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label'>Price</label>
                <div>
                    <input type="text" name='Price' onChange={e => setPrice(e.target.value)} value={getPrice} className='form-control' />
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label' >Shipped To</label>
                <div>
                    <select className='form-select' onChange={e => setCity(e.target.value)} name='City' value={getCity}>
                        <option>Delhi</option>
                        <option>Hyd</option>
                        <option>Chennai</option>
                    </select>
                </div>
            </div>
            <div className='mt-2'>
                <label className='form-label'>In Stock</label>
                <div className='form-check'>
                    <input type="checkbox" onChange={e => setStock(e.target.value)} name='Stock' value={getStock} className='form-check-input' />Yes
                </div>
            </div>
            <div className='mt-2'>
                <div className='d-grid'>
                    <button className='btn btn-primary'>
                        Register
                    </button>
                </div>
            </div>
        </form>
    )
}