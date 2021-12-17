import React from 'react';
import * as Icon from 'react-feather';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

//library yarn
import NumberFormat from 'react-number-format';

//sweet alert
import swal from 'sweetalert';

const CheckoutContent = function ({ backend, checkout_product, user, provinces, ...props }) {
    const [formValue, setFormValue] = React.useState({
        order_id: "",
        product_name: "",
        product_color: "",
        product_quantity: "",
        product_price: "",
        product_courier: "JNE",
        cust_name: "",
        cust_telp: "",
        cust_email: "",
        cust_postCode: "",
        cust_address: "",
        cust_village: "",
        cust_district: "",
        cust_city: "",
        cust_province: "",
        note: "",
    });

    return (
        <>
            <div className="checkout-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="user-actions">
                                <Icon.Edit />
                                <span>Returning customer? <a href="#">Click here to login</a></span>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            var newformValue = {
                                ...formValue,
                                order_id: checkout_product[0].transaction_id,
                                product_name: checkout_product[0].product_name,
                                product_color: checkout_product[0].product_color,
                                product_quantity: checkout_product[0].product_quantity,
                                product_price: checkout_product[0].product_total,
                            }
                            setFormValue(newformValue)
                            // console.log(JSON.stringify(newformValue));
                            const response = await fetch(
                                "/api/transaction/create",
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
                                    res["DATA"]["transaction"];
                                    swal("Produk Berhasil Ditambah ke Keranjang", "Silahkan Cek Keranjang Belanja Anda", "success");
                                    // router.push("/yamaha/Shop/Cart");
                                }
                                else {
                                    swal("Produk Gagal Ditambah ke Keranjang", "Silahkan Coba Lagi", "error");
                                }
                            } else {
                                swal("Transaksi Gagal", "Silahkan Coba Lagi", "error");
                            }
                            return false;
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="billing-details">
                                    <h3 className="title">Alamat Pengiriman</h3>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Nama Lengkap <span className="required">*</span></label>
                                                <input 
                                                    name="cust_name" 
                                                    type="text" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_name: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Nomer Telpon <span className="required">*</span></label>
                                                <input 
                                                    name="cust_telp" 
                                                    type="text" 
                                                    className="form-control" 
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_telp: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Email <span className="required">*</span></label>
                                                <input 
                                                    name="cust_email" 
                                                    type="email" 
                                                    className="form-control" 
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_email: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Kode Pos <span className="required">*</span></label>
                                                <input 
                                                    name="cust_postCode" 
                                                    type="text" 
                                                    className="form-control" 
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_postCode: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Alamat Lengkap <span className="required">*</span></label>
                                                <textarea 
                                                    name="cust_address" 
                                                    cols="30" rows="4" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_address: e.target.value.toString(),
                                                        })
                                                    }}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Kelurahan / Desa <span className="required">*</span></label>
                                                <input 
                                                    name="cust_village" 
                                                    type="text" 
                                                    className="form-control" 
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_village: e.target.value.toString(),
                                                        })
                                                    }}    
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Kecamatan <span className="required">*</span></label>
                                                <input 
                                                    name="cust_district" 
                                                    type="text" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_district: e.target.value.toString(),
                                                        })
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Kabupaten / Kota <span className="required">*</span></label>
                                                <input 
                                                    name="cust_city" 
                                                    type="text" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_city: e.target.value.toString(),
                                                        })
                                                    }}    
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Provinsi <span className="required">*</span></label>
                                                <input 
                                                    name="cust_province" 
                                                    type="text" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            cust_province: e.target.value.toString(),
                                                        })
                                                    }}  
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Provinsi <span className="required">*</span></label>

                                                <div className="select-box">
                                                    <select className="form-select">
                                                        {provinces["provinsi"].map((option) => (
                                                            <option value={option.id}>{option.nama}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className="col-lg-12 col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="create-an-account" />
                                                <label className="form-check-label" htmlFor="create-an-account">Create an account?</label>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="ship-different-address" />
                                                <label className="form-check-label" htmlFor="ship-different-address">Ship to a different address?</label>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="note" 
                                                    id="notes" 
                                                    cols="30" rows="4" 
                                                    placeholder="Order Notes" 
                                                    className="form-control"
                                                    onInput={(e) => {
                                                        setFormValue({
                                                            ...formValue,
                                                            note: e.target.value.toString(),
                                                        })
                                                    }}  
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="order-details">
                                    <h3 className="title">Metode Pengiriman</h3>

                                    <div className="order-table table-responsive">
                                        <div className="services-details">
                                            <div className="services-details-desc">
                                                <div className="services-details-accordion">
                                                    <Accordion>
                                                        <AccordionItem uuid="a">
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    <span> JNE </span><br />
                                                                    <p style={{ marginLeft: "25px" }}>
                                                                        Akan diterima pada tanggal 13 - 16 Nov <br />
                                                                    </p>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>Pilih Waktu Pengiriman</p>
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Setiap Saat </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Pada Jam Kantor </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                            </AccordionItemPanel>
                                                        </AccordionItem>

                                                        <AccordionItem uuid="b">
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    <span> Kargo - JNE Trucking (JTR) </span><br />
                                                                    <p style={{ marginLeft: "25px" }}>
                                                                        Akan diterima pada tanggal 14 - 17 Nov <br />
                                                                    </p>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>Pilih Waktu Pengiriman</p>
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Setiap Saat </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Pada Jam Kantor </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                            </AccordionItemPanel>
                                                        </AccordionItem>

                                                        <AccordionItem uuid="c">
                                                            <AccordionItemHeading>
                                                                <AccordionItemButton>
                                                                    <span> Next Day </span><br />
                                                                    <p style={{ marginLeft: "25px" }}>
                                                                        Akan diterima pada tanggal 13 - 14 Nov <br />                                                                    </p>
                                                                </AccordionItemButton>
                                                            </AccordionItemHeading>
                                                            <AccordionItemPanel>
                                                                <p>Pilih Waktu Pengiriman</p>
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Setiap Saat </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                                <input type="radio" id="kantor" name="radio-group" defaultChecked />
                                                                <span htmlFor="kantor"> Pengiriman Pada Jam Kantor </span><br />
                                                                <span htmlFor="kantor" style={{ marginLeft: "17px" }}> Disarankan untuk alamat rumah </span><br /><br />
                                                            </AccordionItemPanel>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="order-details">
                                    <h3 className="title">Pesanan Anda</h3>

                                    <div className="order-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead align="center">
                                                <tr>
                                                    <th scope="col">Nama Produk</th>
                                                    <th scope="col">Jumlah</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody align="center">
                                                {checkout_product.length ? checkout_product.map(data => (
                                                    <tr key={data.id}>
                                                        <td className="product-name">
                                                            <a>{data.product_name}</a>
                                                        </td>

                                                        <td className="product-name">
                                                            <a>{data.product_quantity} Unit</a>
                                                        </td>

                                                        <td className="product-total">
                                                            <span className="subtotal-amount">
                                                                <NumberFormat
                                                                    name="product_total"
                                                                    value={data.product_total}
                                                                    displayType={'text'} thousandSeparator={true}
                                                                    prefix={'Rp. '}
                                                                />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">Tidak Ada Product di Keranjang</td>
                                                    </tr>
                                                )}

                                            </tbody>
                                            <tbody align="center">
                                                <tr align="center">
                                                    <td className="order-subtotal">
                                                        <span>Cart Subtotal</span>
                                                    </td>

                                                    <td className="shipping-price">
                                                        <span></span>
                                                    </td>

                                                    <td className="order-subtotal-price">
                                                        <span className="order-subtotal-amount">10$2.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="order-shipping">
                                                        <span>Shipping</span>
                                                    </td>

                                                    <td className="shipping-price">
                                                        <span></span>
                                                    </td>

                                                    <td className="shipping-price">
                                                        <span>$5.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="total-price">
                                                        <span>Order Total</span>
                                                    </td>

                                                    <td className="shipping-price">
                                                        <span></span>
                                                    </td>

                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$215.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <div className="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>

                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </p>
                                        <p>
                                            <input type="radio" id="paypal" name="radio-group" />
                                            <label htmlFor="paypal">PayPal</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="cash-on-delivery" name="radio-group" />
                                            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                                        </p>
                                    </div> */}

                                    <button type="submit" className="btn btn-primary order-btn">Lanjutkan Pembayaran</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default CheckoutContent;