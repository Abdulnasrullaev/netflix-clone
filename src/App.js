import './App.css';
import Row from "./row/row";
import requests from "./requests";
import Banner from "./banner/Banner";
import Nav from "./nav/nav";


function App() {
    return (
        <div className="app">
          <Nav/>
            <Banner/>
            <Row isLargeRow={true} title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaries Movies' fetchUrl={requests.fetchDocumentariesMovies}/>
        </div>
    );
}

export default App;
