'use client'
import { useEffect, useState } from "react";
import client from "@/app/components/client";
import { gql } from "@apollo/client";

export default function Webpay() {
  const [urlNueva, setUrlNueva] = useState("");
  const [tokenNuevo, setTokenNuevo] = useState("");
  const [buyOrderUser, setBuyOrderUser] = useState("123456");
  const [sessionIDUser, setSessionIDUser] = useState("session123");
  const [amountUser, setAmountUser] = useState(1000);
  const [returnUrlUser, setReturnUrlUser] = useState("http://localhost:3000/");

 

const WebpayPlusPage = async () => {
  try {
    const result = await client.query({
      query: gql`
      query {
        INIT_TRANSACTION(
          input: {
            buyOrder: "${buyOrderUser}",
      sessionId: "${sessionIDUser}",
      amount: ${amountUser},
      returnUrl: "${returnUrlUser}",
          }
        ) 
        {
          token
          url
        }
      }
    
    `
    });

    // Maneja el resultado según tus necesidades
    const { url, token } = result.data.INIT_TRANSACTION;
    setUrlNueva(url);
    setTokenNuevo(token);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <button onClick={WebpayPlusPage}>Pagar</button>
    
    <form method="post" action= {urlNueva}>
      <input type="hidden" name="token_ws" value={tokenNuevo} />
      <input type="submit" value="Ir a pagar" />
    </form>
    </div>
  );
};