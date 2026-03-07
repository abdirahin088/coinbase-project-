"use client";

import { useIsInitialized, useIsSignedIn } from "@coinbase/cdp-hooks";
import { useState } from "react";

import Loading from "@/components/Loading";
import SignedInScreen from "@/components/SignedInScreen";
import SignInScreen from "@/components/SignInScreen";

export default function ClientApp() {
  const { isInitialized } = useIsInitialized();
  const { isSignedIn } = useIsSignedIn();

  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  return (
    <div className="app flex-col-container flex-grow">
      {!isInitialized && <Loading />}

      {isInitialized && (
        <>
          {!isSignedIn && <SignInScreen />}

          {isSignedIn && (
            <>
              <SignedInScreen />

              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button
                  onClick={async () => {
                    if (!isSignedIn) {
                      alert("User not authenticated");
                      return;
                    }

                    const res = await fetch("/api/onramp/create-order", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer signed-in-user",
                      },
                      body: JSON.stringify({
                        purchaseCurrency: "USDC",
                        paymentAmount: "100.00",
                        paymentCurrency: "USD",
                        paymentMethod: "APPLE_PAY",
                        country: "US",
                        partnerUserRef: "sandbox-abdik-001",
                        email: "test@example.com",
                        phoneNumber: "+12345678901",
                      }),
                    });

                    const data = await res.json();
                    console.log("Order response:", data);

                    if (data?.paymentLinkUrl) {
                      setPaymentLink(
                        data.paymentLinkUrl + "&useApplePaySandbox=true"
                      );
                    }
                  }}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Create Sandbox Onramp Order
                </button>

                {paymentLink && (
                  <iframe
                    src={paymentLink}
                    allow="payment"
                    sandbox="allow-scripts allow-same-origin"
                    referrerPolicy="no-referrer"
                    style={{
                      width: "400px",
                      height: "600px",
                      border: "none",
                      marginTop: "20px",
                    }}
                  />
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}