import { NextResponse } from "next/server";
import { generateJwt } from "@coinbase/cdp-sdk/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKeyId = process.env.CDP_API_KEY_ID!;
    const apiKeySecret = process.env.CDP_API_KEY_SECRET!;

    const requestPath = "/platform/v2/onramp/orders";
    const requestHost = "api.cdp.coinbase.com";

    const token = await generateJwt({
      apiKeyId,
      apiKeySecret,
      requestMethod: "POST",
      requestHost,
      requestPath,
    });

    const response = await fetch(
      `https://${requestHost}${requestPath}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agreementAcceptedAt: new Date().toISOString(),
          destinationAddress:
            "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          destinationNetwork: "base",
          email: body.email,
          partnerUserRef: body.partnerUserRef,
          paymentCurrency: body.paymentCurrency,
          paymentMethod: "GUEST_CHECKOUT_APPLE_PAY",
          phoneNumber: body.phoneNumber,
          phoneNumberVerifiedAt: new Date().toISOString(),
          purchaseCurrency: body.purchaseCurrency,
          paymentAmount: body.paymentAmount,
          clientIp: "127.0.0.1",
          domain: "localhost",
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Onramp error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}