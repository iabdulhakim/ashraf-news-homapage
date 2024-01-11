import Content from "../components/Content";
import News from "../components/News";
import Other from "../components/Other";
import Header from "../components/Header";



function Home() {
    return (
        <div className="container">
            <Header />
            <main>
                <Content />
                <News />
            </main>
            <Other />
        </div>
    )
}

export default Home;