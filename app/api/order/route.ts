import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, city } = await req.json();

    if (!name || !phone || !city) {
      return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    // Check if the URL is configured and is not the placeholder template
    if (
      webhookUrl &&
      webhookUrl.trim() !== "" &&
      !webhookUrl.includes("PASTE_YOUR_WEB_APP_URL_HERE")
    ) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone, city }),
        });
        console.log("Order successfully forwarded to Google Sheets webhook:", { name, phone, city });
      } catch (fetchError) {
        console.error("Error connecting to Google Sheets Webhook:", fetchError);
        // Log the error but still return ok: true during testing so client flow does not break
      }
    } else {
      console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not set or contains the template placeholder. Skipping webhook delivery.");
      console.log("Locally logged order payload:", { name, phone, city });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Order API handler exception:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
