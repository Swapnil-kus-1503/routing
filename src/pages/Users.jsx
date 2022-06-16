import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://reqres.in/api/users",
      params: {
        page: 1,
      },
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        alert("error");
      });
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  // const user = [
  //   { id: 1, name: "Swapnil" },
  //   { id: 2, name: "Ayush" },
  //   { id: 3, name: "Akshay" },
  //   { id: 4, name: "Ashish" },
  //   { id: 5, name: "Sonam" },
  // ];

  let user = data.data;
  // console.log(user);

  return (
    <div>
      Users
      <div>
        {user?.map((users) => {
          return (
            <div>
              <div>id: {users.id}</div>
              <div>
                <img src={users.avatar} width="70px" />
              </div>
              <div>name: {users.first_name}</div>
              <div>
                <Link to={`/users/${users.id}`}>See More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
