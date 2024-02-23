import { useSDK } from "@metamask/sdk-react";
import React, { useState } from "react";

export default function ConnectToMetamask() {
    const [account, setAccount] = useState();
    const { sdk, connected, chainId } = useSDK();
  
    const connectWallet = async() => {
        if(typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /*Metamask is installed... */
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
                console.log(accounts[0]);
            } catch(err) {
                console.log("Please install Metamask")
            }
        }
    }

        


    return (
        <div className="App">
            <button className="bg-blue-500 text-white shadow-md px-8 py-2 rounded-full hover:bg-blue-700 active:bg-blue-900" 
            style={{ padding: 10, margin: 10 }} onClick={connectWallet} disabled={connected}>
                {connected ? "Connected" : "Connect"}
            </button>
            {connected && (
                <div>
                    {chainId && <p>Connected chain: {chainId}</p>}
                    {account && <p>Connected account: {account}</p>}
                </div>
            )}
        </div>
    );
}
