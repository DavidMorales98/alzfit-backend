const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("71fffde859734c77b2d8639109883925");

const getNews = async () => {
    const response = await newsapi.v2
    .everything({
    q: 'Alzheimer OR\
        Enfermedad de Alzheimer OR\
        Demencia OR\
        Trastorno neurodegenerativo OR\
        Pérdida de memoria OR\
        Cuidado de pacientes con Alzheimer OR\
        Investigación sobre el Alzheimer OR\
        Síntomas del Alzheimer OR\
        Prevención del Alzheimer OR \
      Tratamientos para el Alzheimer',
      language: "es",
    })
    const articles = response.articles.slice(0, 5); // Limitar a los primeros 5 elementos
    return articles;

};

module.exports = {
  getNews,
};
