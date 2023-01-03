import Header from './components/Header'
import Footer from './components/Footer'


function App() {

    const params = {
        api_key: "5CBB6903EB224F6881E33D647EA0AF52",
        search_term: "skincare",
        type: "search"
    }

    // make the http GET request to RedCircle API
    const fetchData = async() => {
        const res = await fetch('https://api.redcircleapi.com/request?api_key='+params.api_key+'&search_term=skincare&type=search', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()
        
        //console.log(data)
        return data
    }

    const getData = async() => {
        const allProducts = await fetchData()
        console.log(allProducts.search_results)
    }

    getData()

   

  return (
    <div className="">
        <Header />
        welcome!
        <Footer />
    </div>
  );
}

export default App;
