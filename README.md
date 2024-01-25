
# News App

This project is a Next.js-based news application that utilizes the News API to fetch news articles based on user-defined keywords and from popular news sources such as CNN. It incorporates technologies like Axios for making HTTP requests, Tailwind CSS for styling, and React useState hook for managing state.

## Features

- **Search Functionality:** Users can search for news articles based on specific keywords.
- **Popular News Sources:** Articles are fetched from well-known news sources like CNN.
- **React Components:** The project is built using React components, making it modular and easy to maintain.
- **HTTP Requests:** Axios is used to make HTTP requests to the News API for fetching news data.
- **Styling with Tailwind CSS:** Tailwind CSS is utilized for styling the UI, providing a sleek and modern design.
- **Hosting:** The project is hosted on Vercel.

## Technologies Used

- Next.js
- React
- Axios
- Tailwind CSS
- useState, useEffect hook

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/news-app.git
```

2. Navigate into the project directory:

```bash
cd news-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Acknowledgements

- News API: For providing access to news articles.
- Next.js: For building a powerful and efficient React application.
- Tailwind CSS: For styling the application in a responsive and modern way.
- Axios: For making HTTP requests to fetch data from external APIs.

This project doesnt work as Newsapi doesnt allow PUBLIC API calls for free only local. I have hosted it to show the UI.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
