import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'
import QtyForm from './QtyForm'

//library yarn
import NumberFormat from 'react-number-format';

//sweet alert
import swal from 'sweetalert';

const CartContent = function ({ backend, cart_product, ...props }) {
    const router = useRouter()
    const { addToast } = useToasts()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const total = useSelector((state) => state.total)
    // console.log(cart)

    const [qty, setQty] = React.useState(1)

    const increment = () => {
        setQty(qty + 1)
    }

    const decrement = () => {
        setQty(qty - 1)
    }

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            id: pId
        })
        addToast('Cart Removed Successfully', { appearance: 'error' })
    }

    const reset = () => {
        dispatch({
            type: 'RESET'
        })
        addToast('Thanks for your order.', { appearance: 'success' })
        router.push('/')
    }

    const [formValue, setFormValue] = React.useState({
        transaction_id: GenerateID(),
        product_img: "",
        product_name: "",
        product_color: "",
        product_quantity: "",
        product_total: "",
    });

    function GenerateID() {
        var dt = new Date().getTime();
        var uuid = 'Trx-Ord-yyyyyyyy'.replace(/[y]/g, function (c) {
            var r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    // console.log(GenerateID());

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                var newformValue = {
                    ...formValue,
                    product_name: cart_product[0].product_name,
                    product_color: cart_product[0].product_color,
                }
                setFormValue(newformValue)
                // console.log(JSON.stringify(newformValue));
                const response = await fetch(
                    "/api/transaction/AddToCheckout",
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newformValue),
                    }
                );
                if (response.ok) {
                    var res = await response.json();
                    // console.log("cek response :", res);
                    if (res["STATUS"] === 1) {
                        res["DATA"]["checkout"];
                        swal("Produk Berhasil Ditambah ke Keranjang", "Silahkan Cek Keranjang Belanja Anda", "success");
                        router.push("/yamaha/Shop/Checkout");
                    }
                    else {
                        swal("Produk Gagal di Checkout", "Silahkan Coba Lagi", "error");
                    }
                } else {
                    swal("Transaksi Gagal", "Silahkan Coba Lagi", "error");
                }
                return false;
            }}
        >
            <div className="cart-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Nama Product</th>
                            <th scope="col">Warna Product</th>
                            <th scope="col">Harga Product</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart_product.length ? cart_product.map(data => (
                            <tr key={data.id}>
                                <td className="product-thumbnail">
                                    <Link href="/product-details">
                                        <a>
                                            {/* <img src={`${backend}${data.product_img["url"]}`} alt="item" /> */}
                                        </a>
                                    </Link>
                                </td>

                                <td className="product-name">
                                    <Link href="/product-details">
                                        <a>{data.product_name}</a>
                                    </Link>
                                </td>

                                <td className="product-name">
                                    <Link href="/product-details">
                                        <a>{data.product_color}</a>
                                    </Link>
                                </td>

                                <td className="product-price">
                                    <span className="unit-amount"><NumberFormat value={data.product_price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                                </td>

                                <td className="product-quantity">
                                    <div className="input-counter">
                                        <span className="minus-btn" onClick={decrement}>
                                            <Icon.Minus />
                                        </span>

                                        <input
                                            type="text"
                                            value={qty}
                                            onChange={e => e}
                                            name="product_quantity"
                                            onInput={(e) => {
                                                setFormValue({
                                                    ...formValue,
                                                    product_quantity: e.target.value.toString(),
                                                })
                                            }}
                                        />

                                        <span className="plus-btn" onClick={increment}>
                                            <Icon.Plus />
                                        </span>
                                    </div>
                                </td>

                                {/* <td className="product-subtotal">
                                    <span className="subtotal-amount"><NumberFormat value={(data.quantity * data.product_price).toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>

                                    <a href="#" className="remove" onClick={() => {removeItem(data.id)}}>
                                        <Icon.Trash2 />
                                    </a>
                                </td> */}
                                <td className="product-subtotal">
                                    <span className="subtotal-amount">
                                        <NumberFormat
                                            name="product_total"
                                            value={(qty * data.product_price).toFixed(2)}
                                            displayType={'text'} thousandSeparator={true}
                                            prefix={'Rp.'}
                                            onInput={(e) => {
                                                setFormValue({
                                                    ...formValue,
                                                    product_total: e.target.value.toString(),
                                                })
                                                // console.log("isi target value : ", e.target.value);
                                            }}
                                        />
                                    </span>

                                    <a href="#" className="remove" onClick={() => { removeItem(data) }}>
                                        <Icon.Trash2 />
                                    </a>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center">Tidak Ada Product di Keranjang</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            <div className="cart-buttons">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <div className="continue-shopping-box">
                            <a href="/yamaha/Product/Motor" className="btn btn-light" style={{ color: 'white' }}>Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-totals">
                <h3>Cart Totals</h3>

                <ul>
                    <li>Subtotal <span>${total.toFixed(2)}</span></li>
                    <li>Total <span><b>${(total + 10).toFixed(2)}</b></span></li>
                </ul>

                {/* <Link href="/yamaha/Shop/Checkout">
                    <a onClick={e => {
                        e.preventDefault();
                        reset()
                    }} className="btn btn-primary">Proceed to Checkout</a>
                    <button type="submit" className="btn btn-primary">Proceed to Checkout</button>
                </Link> */}

                <button type="submit" className="btn btn-primary">Proceed to Checkout</button>
            </div>
        </form>
    )
}

export default CartContent
