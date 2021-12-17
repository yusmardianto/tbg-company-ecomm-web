import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const News = function ({ backend, news, othernews, ...props }) {

    const NewsList = news.map((data) => {
        return (
            <>
                <div className="col-lg-6 col-md-6">
                    <div className="single-blog-post">
                        <div className="blog-image">
                            <Link href="/blog-details">
                                <a>
                                    <img src={`${backend}${data.img[0]["url"]}`} />
                                </a>
                            </Link>

                            <div className="date">
                                <Icon.Calendar /> {data.published_at}
                            </div>
                        </div>

                        <div className="blog-post-content">
                            <h3>
                                <Link href={"/yamaha/LatestNews/LatestNewsDetail?s="+data.id}>
                                    <a>{data.title}</a>
                                </Link>
                            </h3>

                            <span>By <a href="#">Admin</a></span>

                            <Link href={"/yamaha/LatestNews/LatestNewsDetail?s="+data.id}>
                                <a className="read-more-btn">
                                    Read More <Icon.ArrowRight />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    const PopularNews = othernews.map((data) => {
        return (
            <article className="item">
                <Link href="/blog-details">
                    <a className="thumb">
                        <span className="fullimage cover bg1" role="img"></span>
                    </a>
                </Link>

                <div className="info">
                    <img src={`${backend}${data.img[0]["url"]}`} style={{width:"100px"}} />
                    <time>{data.published_at}</time>
                    <h4 className="title usmall">
                        <Link href="/blog-details">
                            <a style={{ fontSize:"15px" }}>{data.title}</a>
                        </Link>
                    </h4>
                </div>

                <div className="clear"></div>
            </article>
        )
    })
    return (
        <div>
            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">

                                {NewsList}

                                {/* Pagination */}
                                <div className="col-lg-12 col-md-12">
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

                        <div className="col-lg-4 col-md-12">
                            <div className="widget-area" id="secondary">
                                <div className="widget widget_search">
                                    <form className="search-form">
                                        <label>
                                            <input type="search" className="search-field" placeholder="Search..." />
                                        </label>
                                        <button type="submit">
                                            <Icon.Search />
                                        </button>
                                    </form>
                                </div>

                                {PopularNews}

                                <div className="widget widget_categories">
                                    <h3 className="widget-title">Categories</h3>

                                    <ul>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Tips</a></li>
                                        <li><a href="#">Uncategorized</a></li>
                                    </ul>
                                </div>

                                <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Tags</h3>

                                    <div className="tagcloud">
                                        <a href="#">Motor <span className="tag-link-count">(3)</span></a>
                                        <a href="#">Services <span className="tag-link-count">(3)</span></a>
                                        <a href="#">Sparepart <span className="tag-link-count">(2)</span></a>
                                        <a href="#">Promo <span className="tag-link-count">(2)</span></a>
                                        <a href="#">Event <span className="tag-link-count">(1)</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;