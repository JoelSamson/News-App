import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArticleComponent from '../Article/ArticleComponent';
import Head from '../Heading/Head'; // Import the Head component

const News = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [headingClass, setHeadingClass] = useState('m-48');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const API = process.env.NEXT_PUBLIC_API_KEY;

    const allNewsUrl = `https://newsapi.org/v2/everything?pageSize=${pageSize}&page=${page}&q=keyword&apiKey=${API}`;
    const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${page}&country=us&apiKey=${API}`;
    const bbc_news =`https://newsapi.org/v2/everything?pageSize=${pageSize}&page=${page}&domains=bbc.com&apiKey=${API}`
    const cnn =`https://newsapi.org/v2/everything?pageSize=${pageSize}&page=${page}&domains=cnn.com&apiKey=${API}`
    const enews =`https://newsapi.org/v2/everything?pageSize=${pageSize}&page=${page}&domains=eonline.com&apiKey=${API}`
    const ESPN =`https://newsapi.org/v2/everything?${pageSize}&page=${page}&domains=espn.com&apiKey=${API}`
    const verge =`https://newsapi.org/v2/everything?${pageSize}&page=${page}&domains=theverge.com&apiKey=${API}`
    const buzzfeed =`https://newsapi.org/v2/everything?${pageSize}&page=${page}&domains=buzzfeed.com&apiKey=${API}`
    const DC =`https://newsapi.org/v2/everything?${pageSize}&page=${page}&domains=washingtonpost.com&apiKey=${API}`

  const grabNews = (url) => {
    axios
      .get(url)
      .then((response) => {
        console.clear();
        setData(response.data.articles);
        console.log(response.data);
        setHeadingClass('m-16');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const grabSearchNews = (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=1&apiKey=${API}`;
    axios
      .get(url)
      .then((response) => {
        console.clear();
        setData(response.data.articles);
        console.log(response.data);
        setHeadingClass('m-16');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoadMore = () => {
    const nextPageUrl = `https://newsapi.org/v2/everything?pageSize=${pageSize}&page=${page + 1}&q=keyword&apiKey=${API}`;
    axios
      .get(nextPageUrl)
      .then((response) => {
        setData([...data, ...response.data.articles]);
        setPage(page + 1);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`container mx-auto p-4 ${headingClass}`}>
      <Head headingClass={headingClass} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(topHeadlinesUrl)}>🇺🇸 Top Headlines US</button>
<button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(cnn)}>CNN News</button>
<button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(bbc_news)}>BBC News</button>
<button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(enews)}>Fashion and Celebrity News</button>
<button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(ESPN)}>Sports News</button>
<button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(verge)}>Technology News</button>

<button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => grabNews(buzzfeed)}>
          Buzz Feed
        </button>
        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(DC)}>Washington Post</button>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => grabNews(allNewsUrl)}>All News</button>
      </div>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search News..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => grabSearchNews(searchQuery)}
        >
          Search
        </button>
      </div>
      {data.map((article, index) => (
        <ArticleComponent key={index} article={article} />
      ))}
      {data.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
