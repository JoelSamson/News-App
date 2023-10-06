import React, { useState } from 'react';
import axios from 'axios';
import ArticleComponent from '../Article/ArticleComponent';
import SourceComponent from '../Sourcesfile/SourcesComponent';

const News = () => {
    const [data, setData] = useState();
    const API = '1f8714aedac34c14bab3aa55bd01ec65';
    const [searchQuery, setSearchQuery] = useState('');
    const allNewsUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API}`;
    const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`;
    const bbc_news =`https://newsapi.org/v2/everything?domains=bbc.com&apiKey=${API}`
    const cnn =`https://newsapi.org/v2/everything?domains=cnn.com&apiKey=${API}`
    const enews =`https://newsapi.org/v2/everything?domains=eonline.com&apiKey=${API}`
    const ESPN =`https://newsapi.org/v2/everything?domains=espn.com&apiKey=${API}`
    const verge =`https://newsapi.org/v2/everything?domains=theverge.com&apiKey=${API}`


    const grabNews = (url) => {
        axios.get(url)
            .then((response) => {
                console.clear();
                setData(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const grabSearchNews = (query) => {
        const url= `https://newsapi.org/v2/everything?q=${query}&apiKey=${API}`
        axios.get(url)
            .then((response) => {
                console.clear();
                setData(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className="container px-6 py-10 mx-auto">
        <div className="flex justify-center mb-6 space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(allNewsUrl)}>All News</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(topHeadlinesUrl)}>Top Headlines US</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(cnn)}>CNN News</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(bbc_news)}>BBC News</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(enews)}>E News</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(ESPN)}>ESPN</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabNews(verge)}>The Verge</button>
        </div>
        <div className="container px-6 py-10 mx-auto">
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search for news..."
                    className="px-4 py-2 border rounded text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" onClick={() => grabSearchNews(searchQuery)}>Search</button>
            </div>
</div>
        {data && (
                data.articles ? 
                    data.articles.map((article, index) => <ArticleComponent key={index} article={article} />) :
                    data.sources.map((source, index) => <SourceComponent key={index} source={source} />)
            )}
        </div>
    ) 
    
};

export default News;
