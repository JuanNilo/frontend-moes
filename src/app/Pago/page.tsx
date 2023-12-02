
import { WebpayPlus } from 'transbank-sdk'; // ES6

export default function Pago(){
    const WebpayPlus = require('transbank-sdk').WebpayPlus; // ES5


async function createTransaction(buyOrder, sessionId, amount, returnUrl) {
    try {
      const createResponse = await (new WebpayPlus.Transaction()).create(
        buyOrder, 
        sessionId, 
        amount, 
        returnUrl
      );
  
      
  
      return createResponse;
    } catch (error) {
      console.error('Error al crear la transacción:', error);
      throw error;
    }
  }
    return(
    <form action="https://webpay3gint.transbank.cl/webpayserver/initTransaction" method="POST">
        <input type="hidden" name="token_ws" value="01ab97bd2065ec3543290bdf5ecbba6026948536e017e97f5a6ccfcc5a5d68bc"/>
        <input type="submit" value="Pagar"/>
    </form>
    )
}