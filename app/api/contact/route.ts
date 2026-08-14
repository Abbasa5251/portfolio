import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
};

const MAX = { name: 120, email: 200, service: 80, budget: 40, message: 4000 };

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    const name = clean(body.name, MAX.name);
    const email = clean(body.email, MAX.email);
    const service = clean(body.service, MAX.service);
    const budget = clean(body.budget, MAX.budget);
    const message = clean(body.message, MAX.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error. Please email me directly." },
        { status: 500 }
      );
    }

    if (
      botToken.includes("your_bot_token") ||
      chatId.includes("your_chat_id")
    ) {
      console.error("Placeholder values detected in Telegram env vars");
      return NextResponse.json(
        { error: "Server configuration error. Please email me directly." },
        { status: 500 }
      );
    }

    /* Sent as plain text on purpose: with parse_mode set, any asterisk,
       underscore or backtick a visitor happens to type makes Telegram reject
       the whole request, which would look like a broken form to them. */
    const telegramMessage = [
      "🔔 New enquiry from your portfolio",
      "",
      `👤 Name:    ${name}`,
      `📧 Email:   ${email}`,
      service ? `🧩 Service: ${service}` : null,
      budget ? `💰 Budget:  ${budget}` : null,
      "",
      "💬 Message:",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          disable_web_page_preview: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
