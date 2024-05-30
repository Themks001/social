import React, { useState, useEffect } from "react";
import FollowCard from "../component/followCard.tsx";
const follow = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile");
        const dataFromProfile = await response.json();
        setdata(dataFromProfile.profiles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {data.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-evenly">
            {data.map((item, index) => {
              return (
                <FollowCard
                  key={index}
                  name={item.username}
                  email={item.email}
                />
              );
            })}
          </div>
        ) : (
          <div>Loading profiles...</div>
        )}
      </div>
    </>
  );
};

export default follow;
