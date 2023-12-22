// import { NextPage } from "next";
// import { Locales } from "@/types";
// import { getTranslation, getAllTranslations } from "@/utils/dictionary";
// import config from "@/config";
// import Image from "next/image";

// const fetchNews = async (params: string) => {
//   const reqOptions: object = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN1}`,
//     },
//   };

//   const req = await fetch(
//     `${config.api}/api/news?populate=*&${params}`,
//     reqOptions,
//   );
//   const res = await req.json();

//   return res;
// };

// interface IProps {
//   params: {
//     lang: Locales;
//   };
// }

// // interface NewsType {
// //   attributes: object;
// // }

// const NewsPage: NextPage<IProps> = async ({ params: { lang } }) => {
//   const language = await getAllTranslations(lang);
//   const t = getTranslation(language);

//   const [futuredNews, news] = await Promise.all([
//     await fetchNews("filters[isFutured][$eq]=true"),
//     await fetchNews("filters[isFutured][$eq]=false"),
//   ]);

//   // console.log("futuredNews>>>>", futuredNews.data);

//   return (
//     <main>
//       <ul>
//         {futuredNews.data.map((item: any) => (
//           <li key={item.id}>
//             <h3>Category: {item.attributes.Category}</h3>
//             <h1>{item.attributes.Title}</h1>
//             <p>{item.attributes.Description}</p>
//             <Image src={item.attributes.Image.data[0].attributes.url} alt="" />
//           </li>
//         ))}
//       </ul>
//       <ul>
//         {news.data.map((item: any) => (
//           <li key={item.id}>
//             <h3>Category: {item.attributes.Category}</h3>
//             <h1>{item.attributes.Title}</h1>
//             <p>{item.attributes.Description}</p>
//             <Image src={item.attributes.Image.data[0].attributes.url} alt="" />
//           </li>
//         ))}
//       </ul>
//       <h1>{t("news.title")}</h1>
//     </main>
//   );
// };

// export default NewsPage;

import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
// import Heading from "@/app/(landing)/[lang]/blog/components/Heading/Heading";
import Container from "@/components/Container";
// import "./styles.css";
// import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
import { articles } from "@/app/(landing)/[lang]/blog/mock/MockData";
import config from "@/config";
import Card from "../blog/Card";
import ArticlesList from "../blog/components/ArticlesList/ArticlesList";
import Heading from "../blog/components/Heading/Heading";

const fetchNews = async (params: string) => {
  const reqOptions: object = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN1}`,
    },
  };

  const req = await fetch(
    `${config.api}/api/news?populate=*&${params}`,
    reqOptions,
  );

  const res = await req.json();
  // https://marta-back.onrender.com/api/news?populate=*
  // console.log(res);
  return res;
};

interface IProps {
  params: {
    lang: Locales;
  };
}

interface BlogsType {
  attributes: {
    category: string;
    title: string;
    date: string;
    author: string;
    description: string;
    slug: string; // Adjust the type as needed
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  id: string;
}

const NewsPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  // const [futuredBlogs] = await Promise.all([
  //   await fetchBlogs(""),
  //   // await fetchBlogs("filters[isFutured][$eq]=false"),
  // ]);
  const futuredBlogs = await fetchNews("");
  // выводим
  // console.log("Data from fetchBlogs:", futuredBlogs.data);
  // console.log("Data title =>>:", futuredBlogs.data[0].attributes.title);
  // console.log("Data date =>>:", futuredBlogs.data[0].attributes.date);
  // console.log("Data author =>>:", futuredBlogs.data[0].attributes.author);
  // console.log(
  //   "Data image =>>:",
  //   futuredBlogs.data[0].attributes.image.data.attributes.url,
  // );
  // console.log(
  //   "Data description =>>:",
  //   futuredBlogs.data[0].attributes.description,
  // );
  // console.log("Data description =>>:", futuredBlogs.data[0].attributes.slug);

  return (
    <section className="wrapper">
      <Container className="blog">
        {futuredBlogs.data && Array.isArray(futuredBlogs.data) ? (
          futuredBlogs.data.map((blog: BlogsType) => (
            <div className="col col_4" key={blog.id}>
              <Card
                imgSrc={blog.attributes.image.data.attributes.url}
                imgAlt="blog img"
                category={blog.attributes.category}
                title={blog.attributes.title}
                description={blog.attributes.description}
                date={blog.attributes.date}
                author={blog.attributes.author}
                slug={blog.attributes.slug}

                // category={blog.attributes.Category}
                // title={blog.attributes.Title}
                // summary={blog.attributes.Summary}
                // href={`/${blog.attributes.slug}`}
                // imgSrc={`${blog.attributes.Thumbnail.data.attributes.url}`}
                // imgAlt="blog img"
              />
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </Container>
      <Container className="blog">
        <Heading data={t("blog")} />
        <ArticlesList data={articles} />
      </Container>
    </section>
  );
};

export default NewsPage;
