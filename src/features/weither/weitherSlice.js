import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=36.9&lon=7.8&appid=890f845829060d12440eda2c255628ae"
  );
  // handle success
  return response;
  /* const ville = response.data.name;
  const temp = Math.round(response.data.main.temp - 272.15);
  const description = response.data.weather[0].description;
  const feel = response.data.main.feels_like;
  const min = Math.round(response.data.main.temp_min - 272.15);
  const max = Math.round(response.data.main.temp_max - 272.15);
  const pressure = response.data.main.pressure;
  const humidity = response.data.main.humidity;
  const sea = response.data.main.sea_level;
  const grnd = response.data.main.grnd_level;
  const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;*/
  /*setWeather({
    ...weather,
    villeName: ville,
    temp: temp,
    description: description,
    feels_like: feel,
    temp_min: min,
    temp_max: max,
    pressure: pressure,
    humidity: humidity,
    sea_level: sea,
    grnd_level: grnd,
    icon: icon,
  }); */
});
export const weitherApiSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {}, // لتخزين البيانات التي يتم جلبها من API
    loading: false, // حالة التحميل لمعرفة ما إذا كان الطلب قيد المعالجة
    error: null, // لتخزين أي أخطاء تحدث أثناء جلب البيانات
  },
  reducers: {
    changeResult: (state) => {
      state.result = "changed";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        // Clear out the list of posts whenever the user logs out
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, actions) => {
        const ville = actions.payload.data.name;
        const temp = Math.round(actions.payload.data.main.temp - 272.15);
        const description = actions.payload.data.weather[0].description;
        const feel = actions.payload.data.main.feels_like;
        const min = Math.round(actions.payload.data.main.temp_min - 272.15);
        const max = Math.round(actions.payload.data.main.temp_max - 272.15);
        const pressure = actions.payload.data.main.pressure;
        const humidity = actions.payload.data.main.humidity;
        const sea = actions.payload.data.main.sea_level;
        const grnd = actions.payload.data.main.grnd_level;
        const icon = `https://openweathermap.org/img/wn/${actions.payload.data.weather[0].icon}@2x.png`;
        // Clear out the list of posts whenever the user logs out

        state.loading = false;
        state.weather = {
          villeName: ville,
          temp: temp,
          description: description,
          feels_like: feel,
          temp_min: min,
          temp_max: max,
          pressure: pressure,
          humidity: humidity,
          sea_level: sea,
          grnd_level: grnd,
          icon: icon,
        };
      });
  },
});

// Action creators are generated for each case reducer function
export const { changeResult } = weitherApiSlice.actions;

export default weitherApiSlice.reducer;
