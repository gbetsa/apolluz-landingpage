export default async function handler(req, res) {
    const apiKey = process.env.SERPAPI_KEY; // Assumindo que a chave da API está configurada no .env
    const data_id = "0x203439822c6cd729:0xe672a7c7fa98ab61"; // Este é o ID da empresa ou lugar no Google Maps

    const serApiUrl = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${data_id}&hl=pt&api_key=${apiKey}`;

    try {
        // Requisição para o SerpApi para obter as avaliações
        const response = await fetch(serApiUrl);

        if (!response.ok) {
            throw new Error('Falha na requisição à SerpApi');
        }

        const data = await response.json();
        res.status(200).json(data); // Retorna os dados ao frontend
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
