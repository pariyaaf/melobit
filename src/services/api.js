import axios from "axios"

const getSlider = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/slider/latest')
    return response.data.results;
  }
  

  const getTopDaySong = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/top/day/0/10')
    return response.data.results;
  }

const getTLatestSong = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/new/0/11')
    return response.data.results;
  }
  

  
const getTopWeekSong = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/top/week/0/11')
    return response.data.results;
  }
  
const getTrendingArtists = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/artist/trending/0/4')
    return response.data.results;
  }

  const getSong = async()=>{
    const response=await axios.get('https://api-beta.melobit.com/v1/song/NThRYnA')
    return response.data.results;
  }

  
  export{getSlider, getTLatestSong ,getTopDaySong, getTopWeekSong, getTrendingArtists ,getSong}
  