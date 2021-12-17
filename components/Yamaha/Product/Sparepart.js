import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'
import AddToCartBtn from '@/components/Shop/AddToCartBtn'
import Select from 'react-select';
import Router from 'next/router'

//addon library
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

//yarn library
import NumberFormat from 'react-number-format';

const ProductCard = function ({ selected, ygp, yamalube, helmet, apparel, accessories, backend, ...props }) {

    const handleName = values => {
        Router.push({
            pathname: '/yamaha/Product/Sparepart',
            query: (values && values.length != 0) ? { filter: values["name"] } : {},
        })
    }

    const YGP = ygp.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={ygp.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img["url"]}`} />

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
                                <Link href="/products/[id]" as={`/products/${ygp.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Ygp_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span>
                            <NumberFormat value={data.price1 - data.price1 * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </span><br />
                        <span></span>
                        <span>
                            <div className="products-details">
                                <div className="price">
                                    <NumberFormat
                                        style={{ color: "#EB1928" }}
                                        displayType={'text'}
                                        prefix={'%'}
                                        decimalScale={2}
                                        value={data.discount * 100}
                                    />
                                    <NumberFormat value={data.price1} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Ygp_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    })

    const Yamalube = yamalube.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={ygp.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img["url"]}`} />

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
                                <Link href="/products/[id]" as={`/products/${ygp.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Yamalube_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span>
                            <NumberFormat value={data.price - data.price * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </span><br />
                        <span></span>
                        <span>
                            <div className="products-details">
                                <div className="price">
                                    <NumberFormat
                                        style={{ color: "#EB1928" }}
                                        displayType={'text'}
                                        prefix={'%'}
                                        decimalScale={2}
                                        value={data.discount * 100}
                                    />
                                    <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Yamalube_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    })

    const Helmet = helmet.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={helmet.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img["url"]}`} />

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
                                <Link href="/products/[id]" as={`/products/${ygp.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Helmet_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span>
                            <NumberFormat value={data.price - data.price * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </span><br />
                        <span></span>
                        <span>
                            <div className="products-details">
                                <div className="price">
                                    <NumberFormat
                                        style={{ color: "#EB1928" }}
                                        displayType={'text'}
                                        prefix={'%'}
                                        decimalScale={2}
                                        value={data.discount * 100}
                                    />
                                    <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Helmet_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    const Apparel = apparel.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={apparel.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img["url"]}`} />

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
                                <Link href="/products/[id]" as={`/products/${ygp.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Apparel_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span>
                            <NumberFormat value={data.price - data.price * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </span><br />
                        <span></span>
                        <span>
                            <div className="products-details">
                                <div className="price">
                                    <NumberFormat
                                        style={{ color: "#EB1928" }}
                                        displayType={'text'}
                                        prefix={'%'}
                                        decimalScale={2}
                                        value={data.discount * 100}
                                    />
                                    <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Apparel_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    const Accessories = accessories.map((data) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={accessories.id}>
                <div className="single-products">
                    <div className="products-image">
                        <img src={`${backend}${data.img["url"]}`} />

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
                                <Link href="/products/[id]" as={`/products/${ygp.id}`}>
                                    <a>
                                        <Icon.Link />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="products-content">
                        <h3>
                            <Link href={"/yamaha/Product/Accessories_Detail?s=" + data.id}>
                                <a>{data.name}</a>
                            </Link>
                        </h3>
                        <span>
                            <NumberFormat value={data.price - data.price * data.discount} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                        </span><br />
                        <span></span>
                        <span>
                            <div className="products-details">
                                <div className="price">
                                    <NumberFormat
                                        style={{ color: "#EB1928" }}
                                        displayType={'text'}
                                        prefix={'%'}
                                        decimalScale={2}
                                        value={data.discount * 100}
                                    />
                                    <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
                                </div>
                            </div>
                        </span>
                        <ul>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                            <li><i className="flaticon-star-1"></i></li>
                        </ul>

                        <Link href={"/yamaha/Product/Accessories_Detail?s=" + data.id}>
                            <a className="add-to-cart-btn">Detail Product</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
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

                        {/* <div className="col-lg-5 col-md-5 col-sm-5">
                            <Select
                                value={(selected) ? ygp.filter((i) => i.id == selected) : null}
                                getOptionLabel={option => `${option.name}`}
                                getOptionValue={option => option.id}
                                options={ygp}
                                isSearchable
                                isMulti
                                isClearable
                                instanceId="name"
                                placeholder="Cari Produk"
                                onChange={values => handleName(values)}
                            />
                        </div> */}
                    </div>
                </div>

                <div width="fullwidth">
                    <div className="products-details-tabs">
                        <Tabs>
                            <TabList>
                                <Tab>YGP</Tab>
                                <Tab>Yamalube</Tab>
                                <Tab>helmet</Tab>
                                <Tab>Apparel</Tab>
                                <Tab>Accessories</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="row justify-content-md-center">
                                    {YGP}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row justify-content-md-center">
                                    {Yamalube}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row justify-content-md-center">
                                    {Helmet}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row justify-content-md-center">
                                    {Apparel}
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row justify-content-md-center">
                                    {Accessories}
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>

                {/* <div className="row justify-content-md-center">
                    
                    {Product}

                    Pagination
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
                </div> */}
            </div>
        </div>
    )
}

export default ProductCard;