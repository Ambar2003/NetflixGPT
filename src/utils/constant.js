export  const background = "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const netflixLogo = "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";
export const avatar = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,  
    }
  };
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;