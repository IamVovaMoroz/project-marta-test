// import { NextPage } from "next";
// import { Locales } from "@/types";
// import { getTranslation, getAllTranslations } from "@/utils/dictionary";
// import Heading from "@/app/(landing)/[lang]/blog/components/Heading/Heading";
// import Container from "@/components/Container";
// import "./styles.css";
// import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
// import { articles } from "@/app/(landing)/[lang]/blog/mock/MockData";
// import config from "@/config";
// import Card from "./Card";

// const fetchBlogs = async (params: string) => {
//   const reqOptions: object = {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN1}`,
//     },
//   };

//   const req = await fetch(
//     // "http://localhost:1337/api/tests?populate=*",
//     `${config.api}/api/tests?populate=*&${params}`,
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

// interface BlogsType {
//   attributes: {
//     Category: string;
//     Title: string;
//     Summary: string;
//     slug: string; // Adjust the type as needed
//     Thumbnail: {
//       data: {
//         attributes: {
//           url: string;
//         };
//       };
//     };
//   };
//   id: string;
// }

// const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
//   const language = await getAllTranslations(lang);
//   const t = getTranslation(language);
//   // const [futuredBlogs, blogs] = await Promise.all([
//   const [futuredBlogs] = await Promise.all([
//     await fetchBlogs(""),
//     await fetchBlogs("filters[isFutured][$eq]=false"),
//   ]);

//   // console.log("blogs>>>>", blogs.data);

//   return (
//     <section className="wrapper">
//       <Container className="blog">
//         {futuredBlogs.data && Array.isArray(futuredBlogs.data) ? (
//           futuredBlogs.data.map((blog: BlogsType) => {

//             return (
//               <div className="col col_4" key={blog.id}>
//                 <Card
//                   category={blog.attributes.Category}
//                   title={blog.attributes.Title}
//                   summary={blog.attributes.Summary}
//                   href={`/${blog.attributes.slug}`}
//                   imgSrc={`${blog.attributes.Thumbnail.data.attributes.url}`}
//                   imgAlt="blog img"
//                 />
//               </div>
//             );
//           })
//         ) : (
//           <p>No blogs available</p>
//         )}
//       </Container>
//       <Container className="blog">
//         <Heading data={t("blog")} />
//         <ArticlesList data={articles} />
//       </Container>
//     </section>
//   );
// };

// export default BlogPage;
import { NextPage } from "next";
import { Locales } from "@/types";
import { getTranslation, getAllTranslations } from "@/utils/dictionary";
import Heading from "@/app/(landing)/[lang]/blog/components/Heading/Heading";
import Container from "@/components/Container";
import "./styles.css";
import ArticlesList from "@/app/(landing)/[lang]/blog/components/ArticlesList/ArticlesList";
import { articles } from "@/app/(landing)/[lang]/blog/mock/MockData";
import config from "@/config";
import Card from "./Card";

const fetchBlogs = async (params: string) => {
  const reqOptions: object = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN1}`,
    },
  };

  const req = await fetch(
    `${config.api}/api/tests?populate=*&${params}`,
    reqOptions,
  );
  const res = await req.json();

  return res;
};

interface IProps {
  params: {
    lang: Locales;
  };
}

interface BlogsType {
  attributes: {
    Category: string;
    Title: string;
    Summary: string;
    slug: string; // Adjust the type as needed
    Thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
  id: string;
}

const BlogPage: NextPage<IProps> = async ({ params: { lang } }) => {
  const language = await getAllTranslations(lang);
  const t = getTranslation(language);

  const [futuredBlogs] = await Promise.all([
    await fetchBlogs(""),
    await fetchBlogs("filters[isFutured][$eq]=false"),
  ]);

  return (
    <section className="wrapper">
      <Container className="blog">
        {futuredBlogs.data && Array.isArray(futuredBlogs.data) ? (
          futuredBlogs.data.map((blog: BlogsType) => (
            <div className="col col_4" key={blog.id}>
              <Card
                category={blog.attributes.Category}
                title={blog.attributes.Title}
                summary={blog.attributes.Summary}
                href={`/${blog.attributes.slug}`}
                imgSrc={`${blog.attributes.Thumbnail.data.attributes.url}`}
                imgAlt="blog img"
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

export default BlogPage;
