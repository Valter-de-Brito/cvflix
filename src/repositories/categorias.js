import config from "../config";

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error("Não foi possível pegar os dados :(");
  });
}

async function getAllWithVideos() {
  const respostaDoServidor = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error("Não foi possível pegar os dados :(");
}

export default {
  getAllWithVideos,
  getAll,
};
