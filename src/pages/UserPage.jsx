import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://reqres.in/api/users/${params.id}`,
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
  }, [params.id]);
  // console.log(data);

  if (loading) {
    return <div>Loading</div>;
  }

  let users = data.data;
  return  (
    <div>
      <div>ID: {users?.id}</div>
      <div>E-mail: {users?.email}</div>
      <div>
        Full Name: {users?.first_name} {users?.last_name}
      </div>
      <div>
        <img src={users?.avatar} alt={users?.id} />
      </div>
    </div>
  )
};
export default UserPage;
