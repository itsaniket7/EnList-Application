const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f180cf2dd185c0d4919faa8d3c032140',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;