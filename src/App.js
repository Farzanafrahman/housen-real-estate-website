import React, { useState, useEffect, fragment } from 'react';
import axios from 'axios';
import TopNav from './components/ui/TopNav'
import Heading from './components/ui/Heading'
import SearchBar from './components/ui/SearchBar'
import Footer from './components/ui/Footer'
import SearchGrid from './components/searchResult/searchGrid'
import './App.css';

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const found = await axios(
        `https://dev.gozayaan.com/api/gozayaan_campaign/real_estate_list?city_name=${query}`
      )
      //console.log(found.data)
      if(query) setItems(getMatchingItem( query, found.data.result));
      else setItems(found.data.result)
      setIsLoading(false)

    }

    fetchItems()
  }, [query])

  // Get items list by matching from first
  const getMatchingItem = (queryString, items) => {
    let matchedItms = [];
    if( queryString && items && items.length>0) {
      items.forEach(item=>{
          const cityName = item.city_name.toLowerCase();
          if(cityName.startsWith(queryString.toLowerCase())) matchedItms.push(item);
      });
    };

      return matchedItms;
  };

  return (
    <fragment>
    <div className="container">
      <TopNav />
      <div className="block-container">
        <Heading />
        <SearchBar getQuery={(q) => setQuery(q)} />
        <SearchGrid isLoading={isLoading} items={items} />
      </div>
      <Footer />
    </div>
    <div className="false-space"></div>
    </fragment>
  );
}

export default App;
