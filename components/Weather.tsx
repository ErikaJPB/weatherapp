import React from "react";
import Image from "next/image";

interface Props {
  data: {
    name: string;
    main: { temp: number; feels_like: number; humidity: number };
    weather: [{ main: string; description: string; icon: string }];
    wind: { speed: number };
  };
}

function Weather({ data }: Props) {
  return (
    <React.Fragment>
      {data &&
        data.name &&
        data.main &&
        data.weather &&
        data.wind &&
        data.weather.length > 0 && (
          <div className="relative flex-col justify-between max-w-[500px] w-full h-full m-auto p-4 text-gray-200 z-10">
            <div className="relative flex justify-between pt-12">
              <div className="flex flex-col align-items-center">
                <Image
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="/"
                  width={100}
                  height={100}
                />
                <p className="text-2xl">{data.weather[0].main}</p>
              </div>
              <p className="text-9xl">{data.main.temp.toFixed(0)}°C</p>
            </div>
            <div className="bg-black/40 relative p-8 mt-10 rounded-md">
              <p className="text-2xl text-center pb-6">
                Weather in {data.name}
              </p>
              <div className="flex justify-between text-center">
                <div>
                  <p className="font-bold text-2xl">
                    {data.main.feels_like.toFixed(0)}°C
                  </p>
                  <p className="text-xl">Feels Like</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">{data.main.humidity}%</p>
                  <p className="text-xl">Humidity</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">
                    {data.wind.speed.toFixed(0)}KM/H
                  </p>
                  <p className="text-xl">Winds</p>
                </div>
              </div>
            </div>
          </div>
        )}
    </React.Fragment>
  );
}

export default Weather;
