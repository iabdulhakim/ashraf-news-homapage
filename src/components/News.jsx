function News() {
    return (
        <div className="news-wrapper">
            <h2 className="news_title">New</h2>
            <div className="news-item">
                <h3 className="news-item_subtitle">Hydrogen VS Electric Cars</h3>
                <p className="news-item_desc">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr className="news_line" />
            <div className="news-item">
                <h3 className="news-item_subtitle">The Downsides of AI Artistry</h3>
                <p className="news-item_desc">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr className="news_line" />
            <div className="news-item">
                <h3 className="news-item_subtitle">Is VC Funding Drying Up?</h3>
                <p className="news-item_desc">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}


export default News;