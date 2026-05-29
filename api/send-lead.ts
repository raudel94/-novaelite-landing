import { Resend } from "resend";

const ADMIN_EMAIL = "info@novaelitecorporation.com";
const FROM_EMAIL = "NovaElite Water <leads@novaelitecorporation.com>";
const REPLY_FROM = "NovaElite <info@novaelitecorporation.com>";
const LOGO_URL = "https://novaelitecorporation.com/logo.png";
const SITE_URL = "https://novaelitecorporation.com";
const PHONE_DISPLAY = "(786) 385-3287";
const PHONE_RAW = "+17863853287";
const CALENDLY_URL = "https://calendly.com/lanfercorporation/30min";
const FACEBOOK_URL = "https://www.facebook.com/share/1EWW41ey5G/?mibextid=wwXIfr";
const INSTAGRAM_URL = "https://www.instagram.com/novaelite.corporation";

type LeadBody = {
  industry?: string;
  zone?: string;
  revenue?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
};

const escapeHtml = (str: string | undefined) =>
  String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const firstName = (full: string | undefined) =>
  (full || "").trim().split(/\s+/)[0] || "there";

const buildAdminHtml = (d: LeadBody) => `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;background:#0a0f1d;color:#e5e7eb;border-radius:14px;overflow:hidden">
  <div style="background:linear-gradient(135deg,#1e40af 0%,#06b6d4 100%);padding:28px 32px;text-align:center">
    <img src="${LOGO_URL}" alt="NovaElite" width="56" height="56" style="display:block;margin:0 auto 10px;border-radius:10px"/>
    <h1 style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px">🚰 New FREE Water Test Request</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,.88);font-size:13px">NovaElite Water Landing · /water</p>
  </div>
  <div style="padding:28px 32px;background:#0f172a">
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#e5e7eb">
      <tr><td style="padding:10px 0;color:#94a3b8;width:140px;vertical-align:top">👤 Name</td><td style="padding:10px 0;font-weight:600">${escapeHtml(d.name)}</td></tr>
      <tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">📧 Email</td><td style="padding:10px 0"><a href="mailto:${escapeHtml(d.email)}" style="color:#22d3ee;text-decoration:none">${escapeHtml(d.email)}</a></td></tr>
      <tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">📞 Phone</td><td style="padding:10px 0"><a href="tel:${escapeHtml(d.phone)}" style="color:#22d3ee;text-decoration:none">${escapeHtml(d.phone) || "—"}</a></td></tr>
      <tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">📍 Address / ZIP</td><td style="padding:10px 0;font-weight:600">${escapeHtml(d.zone)}</td></tr>
      <tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">🏠 Household</td><td style="padding:10px 0">${escapeHtml(d.revenue) || "—"}</td></tr>
      <tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">💧 Concern</td><td style="padding:10px 0;font-weight:600;color:#22d3ee">${escapeHtml(d.industry)}</td></tr>
      ${d.company ? `<tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">🏢 Company</td><td style="padding:10px 0">${escapeHtml(d.company)}</td></tr>` : ""}
      ${d.message ? `<tr><td style="padding:10px 0;color:#94a3b8;vertical-align:top">📝 Notes</td><td style="padding:10px 0;white-space:pre-wrap">${escapeHtml(d.message)}</td></tr>` : ""}
    </table>
    <div style="margin-top:24px;padding:14px 16px;background:#1e293b;border-left:3px solid #22d3ee;border-radius:6px;font-size:12px;color:#cbd5e1">
      ⏱ Received: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" })} EST<br/>
      🌐 Source: novaelitecorporation.com${d.source ? ` · ${escapeHtml(d.source)}` : ""}
    </div>
    <div style="margin-top:22px;text-align:center">
      <a href="tel:${escapeHtml(d.phone)}" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;text-decoration:none;padding:12px 24px;border-radius:999px;font-weight:700;font-size:14px">📞 Call ${escapeHtml(d.name)} now</a>
    </div>
  </div>
</div>
`;

const buildClientHtml = (d: LeadBody) => `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;background:#ffffff;color:#0f172a;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb">
  <!-- Header with logo -->
  <div style="background:linear-gradient(135deg,#1e40af 0%,#06b6d4 100%);padding:36px 32px;text-align:center">
    <img src="${LOGO_URL}" alt="NovaElite" width="64" height="64" style="display:block;margin:0 auto 14px;border-radius:12px"/>
    <h1 style="margin:0;font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.5px">Thanks for trusting NovaElite, ${escapeHtml(firstName(d.name))} 💧</h1>
    <p style="margin:10px 0 0;color:rgba(255,255,255,.92);font-size:15px">Your free water test request is in.</p>
  </div>

  <!-- Body -->
  <div style="padding:32px">
    <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#334155">
      Hi ${escapeHtml(firstName(d.name))},
    </p>
    <p style="margin:0 0 18px;font-size:15px;line-height:1.65;color:#334155">
      Thanks for trusting <strong>NovaElite</strong> with your water concerns. One of our
      licensed Miami specialists will reach out within <strong>24 hours</strong> to confirm
      your address and pick a time that works for you.
    </p>
    <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:#334155">
      In the meantime, if you have any urgent questions, just reply to this email or give us a call.
    </p>

    <!-- Summary card -->
    <div style="background:#f1f5f9;border-radius:10px;padding:18px 20px;margin:0 0 26px;font-size:14px;color:#334155">
      <strong style="color:#0f172a;display:block;margin-bottom:8px">Your request summary:</strong>
      💧 <strong>Concern:</strong> ${escapeHtml(d.industry)}<br/>
      📍 <strong>Address / ZIP:</strong> ${escapeHtml(d.zone)}<br/>
      🏠 <strong>Household:</strong> ${escapeHtml(d.revenue) || "—"}
    </div>

    <!-- What to expect -->
    <h3 style="margin:0 0 12px;font-size:16px;color:#0f172a;font-weight:700">What to expect:</h3>
    <ul style="margin:0 0 26px;padding-left:20px;font-size:14px;line-height:1.85;color:#334155">
      <li>✅ A licensed Miami technician arrives at your door</li>
      <li>🧪 Lab-grade test in under 15 minutes</li>
      <li>📋 Clear, no-pressure results walkthrough</li>
      <li>💡 Personalized recommendations — only if needed</li>
    </ul>

    <!-- CTA buttons -->
    <p style="margin:0 0 12px;font-size:14px;color:#334155">Need to reach us sooner?</p>
    <div style="text-align:center;margin:0 0 28px">
      <a href="tel:${PHONE_RAW}" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;text-decoration:none;padding:12px 26px;border-radius:999px;font-weight:700;font-size:14px;margin:0 4px 8px">📞 Call ${PHONE_DISPLAY}</a>
      <a href="${CALENDLY_URL}" style="display:inline-block;background:#fff;color:#0f172a;text-decoration:none;padding:11px 24px;border-radius:999px;font-weight:700;font-size:14px;border:2px solid #e5e7eb;margin:0 4px 8px">📅 Pick a time on Calendly</a>
    </div>

    <!-- Signature -->
    <p style="margin:24px 0 6px;font-size:14px;color:#334155">Talk soon,</p>
    <p style="margin:0;font-size:14px;color:#0f172a;font-weight:700">— The NovaElite team</p>

    <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0 22px"/>

    <!-- Social + footer -->
    <table style="width:100%;border-collapse:collapse">
      <tr>
        <td style="vertical-align:middle;padding-right:12px">
          <img src="${LOGO_URL}" alt="NovaElite" width="40" height="40" style="border-radius:8px;display:block"/>
        </td>
        <td style="vertical-align:middle">
          <div style="font-size:13px;color:#0f172a;font-weight:700">NovaElite Corporation</div>
          <div style="font-size:12px;color:#64748b">Miami, FL · Licensed & insured in Florida</div>
        </td>
        <td style="vertical-align:middle;text-align:right;white-space:nowrap">
          <a href="${FACEBOOK_URL}" style="display:inline-block;margin-left:8px;text-decoration:none">
            <span style="display:inline-block;width:32px;height:32px;line-height:32px;text-align:center;background:#1877f2;color:#fff;border-radius:50%;font-size:14px;font-weight:700;font-family:Arial,sans-serif">f</span>
          </a>
          <a href="${INSTAGRAM_URL}" style="display:inline-block;margin-left:8px;text-decoration:none">
            <span style="display:inline-block;width:32px;height:32px;line-height:32px;text-align:center;background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);color:#fff;border-radius:50%;font-size:14px;font-weight:700;font-family:Arial,sans-serif">IG</span>
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:18px 0 0;font-size:11px;color:#94a3b8;text-align:center;line-height:1.6">
      <a href="${SITE_URL}" style="color:#06b6d4;text-decoration:none">novaelitecorporation.com</a>
      &nbsp;·&nbsp;
      <a href="${FACEBOOK_URL}" style="color:#06b6d4;text-decoration:none">Facebook</a>
      &nbsp;·&nbsp;
      <a href="${INSTAGRAM_URL}" style="color:#06b6d4;text-decoration:none">Instagram</a>
      <br/>
      You received this email because you requested a free water test on our website.
    </p>
  </div>
</div>
`;

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  let data: LeadBody;
  try {
    data = (await req.json()) as LeadBody;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  if (!data.name || !data.email) {
    return new Response(JSON.stringify({ error: "Name and email are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const resend = new Resend(apiKey);

  try {
    // 1) Admin notification
    const adminResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: data.email,
      subject: `🚰 New water test lead — ${data.name} (${data.zone || "no zip"})`,
      html: buildAdminHtml(data)
    });

    if (adminResult.error) {
      console.error("Admin email error:", adminResult.error);
      return new Response(
        JSON.stringify({ error: "Failed to deliver admin email", detail: adminResult.error.message }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2) Auto-response to the client (best-effort)
    try {
      await resend.emails.send({
        from: REPLY_FROM,
        to: [data.email],
        replyTo: ADMIN_EMAIL,
        subject: "✅ We received your free water test request — NovaElite",
        html: buildClientHtml(data)
      });
    } catch (autoErr) {
      console.error("Auto-response error (non-fatal):", autoErr);
    }

    return new Response(JSON.stringify({ ok: true, id: adminResult.data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("send-lead failure:", msg);
    return new Response(JSON.stringify({ error: "Email delivery failed", detail: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
