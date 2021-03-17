import axios from 'axios';

export const getCurrentWeather = async (capitalID: number, lang: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${capitalID}&units=metric&lang=${lang}&appid=811e4ee6996e6079253ada8ff16c4991`;

  const response = await axios.get(url);
  const data = response.data;
  if (data) {
    return data;
  }
};
