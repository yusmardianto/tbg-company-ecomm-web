import React from 'react';
import PageBanner from '@/components/Common/PageBanner';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import * as Icon from 'react-feather';
import Link from 'next/link';

import ReactHtmlParser from "react-html-parser";

const News = function ({ backend, news, othernews, ...props }) {

    const NewsList = news.map((data) => {
        return (
            <>
                <div className="blog-details-desc">
                    <div className="article-image">
                        <img src={`${backend}${data.img[0]["url"]}`} width="800px" alt="image" />
                    </div>

                    <div className="article-content">
                        <div className="entry-meta">
                            <ul>
                                <li>
                                    <Icon.Clock /> September 31, 2021
                                </li>
                                <li>
                                    <Icon.User /> <a href="#">Steven Smith</a>
                                </li>
                            </ul>
                        </div>

                        <h2>{data.title}</h2>

                        <p>{ReactHtmlParser(data.description)}</p>

                        {/* <blockquote>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                            <cite>Tom Cruise</cite>
                        </blockquote> */}

                        <div className="article-footer">
                            <div className="article-tags">
                                <a href="#">Motor</a>
                                <a href="#">Services</a>
                                <a href="#">Sparepart</a>
                                <a href="#">Event</a>
                                <a href="#">Promo</a>
                            </div>
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
                    <img src={`${backend}${data.img[0]["url"]}`} style={{ width: "100px" }} />
                    <time>{data.published_at}</time>
                    <h4 className="title usmall">
                        <Link href="/blog-details">
                            <a style={{ fontSize: "15px" }}>{data.title}</a>
                        </Link>
                    </h4>
                </div>

                <div className="clear"></div>
            </article>
        )
    })
    return (
        <div>
            <PageBanner pageTitle="Latest News" />

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">

                            {NewsList}
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