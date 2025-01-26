import { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
    const [accessList, setAccessList] = useState([]);

    // Function to share access with a new address
    const sharing = async() => {
        const address = document.querySelector(".address").value;
        try {
            await contract.allow(address);
            setModalOpen(false);
        } catch (error) {
            console.error("Error sharing access:", error);
        }
    };

    // Fetch the access list when the modal is opened
    useEffect(() => {
        const fetchAccessList = async() => {
            try {
                const addressList = await contract.shareAccess();
                setAccessList(addressList); // Update state with fetched access list
            } catch (error) {
                console.error("Error fetching access list:", error);
            }
        };

        contract && fetchAccessList();
    }, [contract]);

    return ( <
        >
        <
        div className = "modalBackground" >
        <
        div className = "modalContainer" >
        <
        div className = "title" > Share with < /div> <
        div className = "body" >
        <
        input type = "text"
        className = "address"
        placeholder = "Enter Address" /
        >
        <
        /div> <
        form id = "myForm" >
        <
        select id = "selectNumber" >
        <
        option className = "address" > People With Access < /option> {
            accessList.map((access, index) => ( <
                option key = { index }
                value = { access.user } > { access.user } - { access.access ? "Granted" : "Revoked" } <
                /option>
            ))
        } <
        /select> <
        /form> <
        div className = "footer" >
        <
        button onClick = {
            () => {
                setModalOpen(false);
            }
        }
        id = "cancelBtn" >
        Cancel <
        /button> <
        button onClick = {
            () => sharing() } > Share < /button> <
        /div> <
        /div> <
        /div> <
        />
    );
};

export default Modal;