import { useState, useEffect } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
    const [data, setData] = useState("");

    const getdata = async() => {
        let dataArray;
        const Otheraddress = document.querySelector(".address").value;

        try {
            if (Otheraddress) {
                // Get data for a specific address
                dataArray = await contract.display(Otheraddress);
            } else {
                // Get data for the connected account
                dataArray = await contract.display(account);
            }

            console.log(dataArray); // Log the data to check its structure

            // Check if dataArray is empty (length of array should be 0)
            if (dataArray.length > 0) {
                // Map the array of URLs to image elements
                const images = dataArray.map((item, i) => ( <
                    a href = { item }
                    key = { i }
                    target = "_blank"
                    rel = "noopener noreferrer" >
                    <
                    img src = { `https://gateway.pinata.cloud/ipfs/${item.substring(6)}` }
                    alt = { `Image ${i}` }
                    className = "image-list" /
                    >
                    <
                    /a>
                ));
                setData(images);
            } else {
                alert("No image to display");
            }
        } catch (e) {
            alert("You don't have access");
            console.error("Error fetching data: ", e);
        }
    };

    return ( <
        >
        <
        div className = "image-list" > { data } < /div> <
        input type = "text"
        placeholder = "Enter Address"
        className = "address" / >
        <
        button className = "center button"
        onClick = { getdata } >
        Get Data <
        /button> < / >
    );
};

export default Display;