import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../../Data";

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const movieDetail = moviesData.find((el) => el.id == id);
    setDetail(movieDetail);
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop :"30px"
       }}
    >
      <Button style={{
        marginBottom: "20px"
       }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <h3
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {detail.description}
      </h3>
      <div
        style={{
          position: "relative",
          width: "50%",
          paddingBottom: "28.125%",
          height: "0",
          marginTop: "20px"
        }}
      >
        <iframe
          title="trailer"
          src={detail.trailer}
          frameborder="0"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
