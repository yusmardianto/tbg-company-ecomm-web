import React from 'react'

//component
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'

//addon library
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

//library yarn
import NumberFormat from 'react-number-format';
import ReactHtmlParser from "react-html-parser";

//sweet alert
import swal from 'sweetalert';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    items: 1,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const ProductDetails = function ({ detailygp, backend, user, ...props }) {
    // console.log(detailygp);

    const [formValue, setFormValue] = React.useState({
        product_img: "",
        product_name: "",
        product_color: "",
        product_price: "",
    });

    const router = useRouter();

    const MotorDetail = detailygp.map((data) => {

        return (
            <div>
                <PageBanner pageTitle={data.name} />
                <div className="shop-details-area ptb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <OwlCarousel
                                    className="products-details-image products-details-image-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <img src={`${backend}${data.img["url"]}`} />
                                </OwlCarousel>
                            </div>

                            <div className="col-lg-7">
                                <div className="products-details">
                                    <h3>{data.name}</h3>
                                    <h3>
                                        <NumberFormat value={data.price1 - data.price1 * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                    </h3>
                                    <h5>
                                        <div className="price" style={{marginTop:"20px"}}>
                                            <NumberFormat
                                                style={{ color: "#EB1928" }}
                                                displayType={'text'}
                                                prefix={'%'}
                                                decimalScale={2}
                                                value={data.discount * 100}
                                            />
                                            <NumberFormat value={data.price1} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                        </div>
                                    </h5>

                                    <ul className="rating">
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                    </ul>

                                    <div className="availability">
                                        Availability: <span>{data.stock}</span>
                                    </div>
                                    <form
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            var newformValue = {
                                                ...formValue,
                                                product_name: detailproduct[0].name,
                                            }
                                            setFormValue(newformValue)
                                            // console.log(JSON.stringify(newformValue));
                                            const response = await fetch(
                                                "/api/transaction/AddToCart",
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
                                                    res["DATA"]["cart"];
                                                    swal("Produk Berhasil Ditambah ke Keranjang", "Silahkan Cek Keranjang Belanja Anda", "success");
                                                    router.push("/yamaha/Shop/Cart");
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
                                        {/* <label>Product OTR <span className="required">*</span></label>

                                        <div className="select-box" placeholder="Pilih Harga OTR">
                                            <select className="form-select"
                                                name="product_otr"
                                                onInput={(e) => {
                                                    setFormValue({
                                                        ...formValue,
                                                        product_price: e.target.value.toString(),
                                                    })
                                                }}
                                            >
                                                <option value="0">- Pilih Product OTR -</option>
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_otrs[0].price}>{option.product_otrs[0].name}</option>
                                                ))}
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_otrs[1].price}>{option.product_otrs[1].name}</option>
                                                ))}
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_otrs[2].price}>{option.product_otrs[2].name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <br />

                                        <label>Product Color <span className="required">*</span></label>
                                        <div className="select-box" placeholder="Pilih Harga OTR">
                                            <select className="form-select"
                                                name="product_color"
                                                onInput={(e) => {
                                                    setFormValue({
                                                        ...formValue,
                                                        product_color: e.target.value.toString()
                                                    })
                                                }}
                                            >
                                                <option value="0">- Pilih Product Color -</option>
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_image_colors[0].name}>{option.product_image_colors[0].name}</option>
                                                ))}
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_image_colors[1].name}>{option.product_image_colors[1].name}</option>
                                                ))}
                                                {detailproduct.map((option) => (
                                                    <option value={option.product_image_colors[2].name}>{option.product_image_colors[2].name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <br /> */}

                                        {/* <button type="submit">Add to Cart</button> */}

                                        <a href="#" className="add-to-wishlist-btn" title="Add to Wishlist">
                                            <Icon.Heart />
                                        </a>
                                    </form>

                                    <div className="custom-payment-options">
                                        <span>Metode Pembayaran : </span>

                                        <div className="payment-methods">
                                            <img src="/images/payment-image/Mastercard.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/Visa.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/BNI.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/BCA.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/Mandiri.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/BSI.svg" width="50px" alt="image" />
                                            <img src="/images/payment-image/Indomaret.svg" width="50px" alt="image" />
                                        </div>
                                    </div>

                                    <div className="products-share-social">
                                        <span>Share:</span>

                                        <ul>
                                            <li>
                                                <a href="#" className="facebook" target="_blank">
                                                    <Icon.Facebook />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="twitter" target="_blank">
                                                    <Icon.Twitter />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="linkedin" target="_blank">
                                                    <Icon.Linkedin />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="instagram" target="_blank">
                                                    <Icon.Instagram />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="products-details-tabs">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Deskripsi</Tab>
                                            <Tab>Info Penting</Tab>
                                            {/* <Tab>Review</Tab> */}
                                        </TabList>

                                        <TabPanel>
                                            <div className="products-description" align="left">
                                                <p>{ReactHtmlParser(data.description)}</p>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="products-description" align="left">
                                                <p>
                                                    <p><b>Informasi mengenai prosedur pengiriman, pembelian dan dokumen</b></p>
                                                    <ul>
                                                        <li>Kota Palembang, Kayu Agung, Prabumulih, Pangkalan Balai, Betung : 2-3 hari kerja*</li>
                                                        <li>Untuk daerah Sungsang/daerah lain yang menggunakan kapal motor, maka motor diantar sampai di dermaga sesuai dengan jadwal yang diinformasikan</li>
                                                        <li>Sekayu, Babat Toman, Pendopo, Baturaja, Martapura, Muara Dua, Lahat, Tanjung Enim, Tugu Mulyo, Belitang : 4-5 hari kerja*</li>
                                                        <li>Lubuk Linggau, Curup, Pagar Alam : 6-7 hari kerja*</li>
                                                    </ul>

                                                    <p><b>Harga</b></p>
                                                    <ul>
                                                        <li>Harga OTR sudah termasuk biaya pengiriman dan BBN, kecuali tambahan pengenaan pajak progresif kepemilikan kendaraan bermotor (sesuai dengan peraturan yang telah ditetapkan oleh pemerintah)</li>
                                                        <li>Harga OTR diatas berlaku untuk KTP domisili PALEMBANG, OGAN ILIR, dan BANYUASIN, diluar wilayah tersebut harap menghubungi kami untuk konfirmasi harga.</li>
                                                        <li>Harga OTR sewaktu-waktu dapat berubah.</li>
                                                        <li>Proses pemesanan sepeda motor tidak dapat dibatalkan dan warna yang sudah dipesan tidak dapat diubah.</li>
                                                        <li>Proses pemesanan yang terkait waktu pengiriman produk dan kelengkapan dokumen yang dibutuhkan untuk pembuatan STNK dan BPKB akan  diinformasikan oleh pihak Dealer.</li>
                                                        <li>Proses pengiriman sepeda motor akan dilakukan setelah pelunasan transaksi dan dokumen yang dibutuhkan telah lengkap.</li>
                                                    </ul>

                                                    <p><b>Dokumen</b></p>
                                                    <ul>
                                                        <li>Proses pembuatan STNK setelah KTP diterima oleh pihak dealer adalah 19-25 hari kerja*.</li>
                                                        <li>Proses pembuatan BPKB adalah 3-4 bulan.</li>
                                                        <li>STNK dan BPKB wajib diambil sendiri oleh pihak yang bersangkutan sesuai dengan identitas yang tertera STNK di dealer yang ditunjuk.</li>
                                                        <li>Untuk proses pembuatan STNK dan BPKB sepenuhnya menjadi tanggung jawab dealer terkait.</li>
                                                        <li>Buku servis diterima bersamaan dengan pengiriman sepeda motor.</li>
                                                    </ul>

                                                    <p><b>*tidak termasuk Sabtu dan Minggu.</b></p>
                                                </p>
                                            </div>
                                        </TabPanel>

                                        {/* <TabPanel>
                                            <div className="products-reviews">
                                                <h3>Customer Reviews</h3>
                                                <p>There are no reviews yet.</p>

                                                <form className="review-form">
                                                    <p>Rate this item:</p>

                                                    <div className="star-rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>

                                                        <p>Very good product!</p>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <textarea name="review-message" id="message" cols="30" rows="4" placeholder="Write your review*" className="form-control"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" placeholder="Name*" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <input type="email" placeholder="Email*" className="form-control" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12">
                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </TabPanel> */}
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            {MotorDetail}
        </>
    )
}

export default ProductDetails;