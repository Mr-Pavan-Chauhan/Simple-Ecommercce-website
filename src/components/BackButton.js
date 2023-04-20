import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
    const navigate = useNavigate();
    return (
        <p onClick={() => navigate(-1)} style={{ backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} size="1x" /> Back
        </p>
    );
}

export default BackButton;
