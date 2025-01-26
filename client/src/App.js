// import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import FileUpload from "./components/FileUpload";
// import Display from "./components/Display";
// import Modal from "./components/Modal";
// import "./App.css";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [provider, setProvider] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const loadProvider = async () => {
//       try {
//         const provider = new ethers.BrowserProvider(window.ethereum);

//         if (provider) {
//           // Listen for chain and account changes
//           window.ethereum.on("chainChanged", () => {
//             window.location.reload();
//           });

//           window.ethereum.on("accountsChanged", () => {
//             window.location.reload();
//           });

//           // Request account access
//           await provider.send("eth_requestAccounts", []);
//           const signer = await provider.getSigner();
//           const address = await signer.getAddress();

//           setAccount(address);

//           const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

//           const contract = new ethers.Contract(
//             contractAddress,
//             Upload.abi,
//             signer
//           );

//           setContract(contract);
//           setProvider(provider);
//         } else {
//           console.error("Metamask is not installed");
//         }
//       } catch (error) {
//         console.error("Failed to load provider:", error);
//       }
//     };

//     loadProvider();
//   }, []);

//   return (
//     <>
//       {!modalOpen && (
//         <button className="share" onClick={() => setModalOpen(true)}>
//           Share
//         </button>
//       )}
//       {modalOpen && (
//         <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
//       )}

//       <div className="App">
//         <h1 style={{ color: "white" }}>SecureSphere</h1>
//         <div className="bg"></div>
//         <div className="bg bg2"></div>
//         <div className="bg bg3"></div>

//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Not connected"}
//         </p>
//         <FileUpload
//           account={account}
//           provider={provider}
//           contract={contract}
//         ></FileUpload>
//         <Display contract={contract} account={account}></Display>
//       </div>
//     </>
//   );
// }

// export default App;

import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        if (provider) {
          // Listen for chain and account changes
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          // Request account access
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();

          setAccount(address);

          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

          const contract = new ethers.Contract(
            contractAddress,
            Upload.abi,
            signer
          );

          setContract(contract);
          setProvider(provider);
        } else {
          console.error("Metamask is not installed");
        }
      } catch (error) {
        console.error("Failed to load provider:", error);
      }
    };

    loadProvider();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="App">
        <h1>SecureSphere</h1>
        <div className="bg"></div>

        <div className="account-info">
          <p>
            <strong>Account:</strong> {account ? account : "Not connected"}
          </p>
        </div>

        <div className="file-upload">
          <FileUpload
            account={account}
            provider={provider}
            contract={contract}
          ></FileUpload>
        </div>

        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;
