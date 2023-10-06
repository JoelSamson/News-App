import React from 'react';

const SourceComponent = ({ source }) => {
    return (
        <div>
            <h1>{source.name}</h1>
            <><section class="bg-white dark:bg-gray-900 mb-16" >
                        <div class="container px-6 py-10 mx-auto mb-16">
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">{source.title}</h1>

                            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                                <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={source.urlToImage} alt="" />

                                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                                        <p class="text-sm text-blue-500 uppercase">category</p>

                                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                                            {source.description}
                                        </a>

                                        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                            {source.content}
                                        </p>

                                        <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                                        <div class="flex items-center mt-6">

                                                <div class="mx-4">
                                                    <h1 class="text-sm text-gray-700 dark:text-gray-200">{source.author}</h1>
                                                    <p class="text-sm text-gray-500 dark:text-gray-400">Published at: {source.publishedAt}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </section></>
        </div>
    );
};

export default SourceComponent;
