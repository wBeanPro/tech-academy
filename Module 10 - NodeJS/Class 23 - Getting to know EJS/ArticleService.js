const article = [
  {
    id: 1,
    title: "Health-tech",
    description: "Notícia placeholder para a exibição com EJS",
  },
  {
    id: 2,
    title: "Java",
    description: "Notícia placeholder sobre Java, para a exibição com EJS",
  },
];

function getArticles() {
  return article;
}

function getArticleById(articleId) {
  return articles.find((article) => {
    return article.id === Number(articleId);
  });
}

export { getArticleById, getArticles };
