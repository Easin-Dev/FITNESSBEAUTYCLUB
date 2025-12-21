import fetch from "node-fetch";
import { PRODUCTS } from "../../lib/products.js";

function getClientIp(event) {
    return (
        event.headers["x-forwarded-for"]?.split(",")[0] ||
        event.headers["client-ip"] ||
        "8.210.99.1" // fallback (Germany)
    );
}

export async function handler(event) {
    try {
        const body = JSON.parse(event.body || "{}");
        const { name = "", phone, productKey = "fungo_killer" } = body;

        if (!phone) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: "Phone required" }),
            };
        }

        const product = PRODUCTS[productKey];
        if (!product) {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: "Invalid product" }),
            };
        }

        const ip = getClientIp(event);

        const url = new URL("https://api.adcombo.com/api/v2/order/create/");
        url.searchParams.append("api_key", process.env.ADCOMBO_API_KEY);
        url.searchParams.append("name", name);
        url.searchParams.append("phone", phone);
        url.searchParams.append("offer_id", product.offer_id);
        url.searchParams.append("country_code", "DE"); // 🇩🇪 fixed
        url.searchParams.append("price", product.price);
        url.searchParams.append("quantity", "1");
        url.searchParams.append("ip", ip);

        const res = await fetch(url.toString());
        const data = await res.json();

        console.log("🧾 AdCombo:", data);

        if (data.code !== "ok") {
            return {
                statusCode: 400,
                body: JSON.stringify({ success: false, error: data.error }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                order_id: data.order_id,
                is_double: data.is_double,
            }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: "Server error" }),
        };
    }
}
