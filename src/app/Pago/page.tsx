import { useEffect, useState } from "react";
import client from "../components/client";
import { gql } from "@apollo/client";

export default function Webpay() {
  const urlNueva = "";
  const tokenNuevo = "";

  const WebpayPlusPage = async (urlNueva: string, tokenNuevo: string) => {
    try {
      const TransactionData = {
        buyOrder: '123456',
        sessionId: 'session123',
        amount: 1000,
        returnUrl: 'https://example.com/return',
      };

      const result = await client.query({
        query: gql`
          query InitTransaction($TransactionData: TransactionDto!) {
            INIT_TRANSACTION(initTransactionDto: $TransactionData) {
              url
              token
            }
          }
        `,
        variables: {
          TransactionData,
        },
      });

      // Maneja el resultado según tus necesidades
      const { url, token } = result.data.INIT_TRANSACTION;
      urlNueva = url;
      tokenNuevo = token;
      console.log('URL:', url);
      console.log('Token:', token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form method="post" action= "https://webpay3gint.transbank.cl/webpayserver/initTransaction">
      <input type="hidden" name="token_ws" value="01abaa1284eee646a0e85b5fe6ce61b9e02258c1409fb20d9f436b3c6c071431" />
      <input type="submit" value="Ir a pagar" />
    </form>
  );
};