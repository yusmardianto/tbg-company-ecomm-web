import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import AddToCartBtn from '@/components/Shop/AddToCartBtn'
import NumberFormat from 'react-number-format';
import Select from 'react-select';
import Router from 'next/router'

const ProductCard = function ({ selected, product, backend, user, ...props }) {
    const products = useSelector((state) => state.products)

    const handleName = values => {
        Router.push({
            pathname: '/yamaha/Product/Motor',
            query: (values&&values.length!=0)?{ filter: values["name"] }:{},
        })
    }

    const Product = product.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img[0]["url"]}`}
                        />

                        <ul>
                            <li>
                                <a href="#">
                                    <Icon.Search />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon.Heart />
                                </a>
                            </li>
                            <li>
                                <Link href="/products/[id]" as={`/products/${product.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Motor_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span><NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /> s/d <NumberFormat value={data.price2} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Motor_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div className="shop-area ptb-80">
            <div className="container">
                <div className="woocommerce-topbar">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="woocommerce-result-count">
                                <p>Showing 1-8 of 14 results</p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5">
                            <Select
                                value={(selected) ? product.filter((i) => i.id == selected) : null}
                                getOptionLabel={option => `${option.name}`}
                                getOptionValue={option => option.id}
                                options={product}
                                isClearable="true"
                                instanceId="name"
                                placeholder="Cari Produk"
                                onChange={values => handleName(values)}
                            />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-md-center">

                    {Product}

                    {/* Pagination */}
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="pagination-area">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>

                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>

                                    <li className="page-item"><a className="page-link" href="#">2</a></li>

                                    <li className="page-item"><a className="page-link" href="#">3</a></li>

                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;