import React, { useState, useEffect } from "react";
import getUserId from "../hooks/userId.tsx";
const profile = () => {
  const [data, setdata] = useState({});
  const userId = getUserId();
  console.log("this is profile user id ", userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/profile/${userId}`);
        const dataFromProfile = await response.json();
        setdata(dataFromProfile.profile);
        console.log( dataFromProfile)
        console.log(data, typeof dataFromProfile)
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data.username}</h1>
    </div>
  );
};

export default profile;
