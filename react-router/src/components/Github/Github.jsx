import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //Method Two
  const data = useLoaderData();

  //Method One
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/JuborajSujon")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // });
  return (
    <div className=" m-4 bg-gray-600 text-white p-4">
      <h1 className="text-center p-4 text-4xl">
        Github Followers: {data.followers}
      </h1>
      <div className="flex justify-center items-center">
        <img
          className="rounded-full"
          src={data.avatar_url}
          alt="profile image"
          width={300}
        />
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/JuborajSujon");
  const data = await res.json();
  return data;
};
