import React, { useState } from 'react';

const ArticleComponent = ({ article }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
    <div class="container my-24 mx-auto md:px-6">
  <section class="mb-16 text-center md:text-left">

    <div class="mb-6 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
      <div class="mb-6 md:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
         <img src={article.urlToImage} className="w-full" alt="Article" />
          <a href={article.url}>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
            </div>
          </a>
        </div>
      </div>

      <div>
        <h3 class="mb-3 text-2xl font-bold">{article.title}</h3>
        <div
          class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
          Travels
        </div>
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          <small>Published <u>{article.publishedAt}</u> by
            <a href="#!">{article.author}</a></small>
        </p>
        <p class={`text-neutral-500 dark:text-neutral-300 ${isExpanded ? '' : 'overflow-hidden'}`}>
        {isExpanded ? article.content : article.description}
        </p>
        <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded px-4 py-2" onClick={handleReadMoreClick}>
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
      </div>
    </div>
  </section>
</div>

    );
};

export default ArticleComponent;
