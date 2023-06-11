const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const getResult = async (category, respuestas) => { // No es necesario pasar req y res si no se está utilizando en este ejemplo
  try {
    msgSystem = `Eres un asistente que permite categorizar todas las palabras que te entregan,\
   es por eso que debes responder en formato json de la siguiente manera: \
   {palabras: Corresponde a un arreglo [p1,p2,p3] de todo lo que te dijieron y pertenecen a la categoria indicada, \
    total: corresponde a la cantidad de dichas palabras}. La categoria es ${category}`;

    chat = [
      { role: "system", content: msgSystem },
      { role: "user", content: respuestas },
    ];

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chat, // "chat" en lugar de "chat"
      temperature: 0,
    });

    const objJSON = JSON.parse(completion.data.choices[0].message.content);
    return (objJSON)
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
    getResult
};
