import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: BookingEmailRequest = await req.json();

    console.log("Processing booking request from:", email);

    // Send email to business owner
    const emailResponse = await resend.emails.send({
      from: "Roule Propre <onboarding@resend.dev>",
      to: ["contact@roulepropre.fr"], // TODO: Replace with actual business email
      replyTo: email,
      subject: `Nouvelle demande de rendez-vous - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border: 1px solid #e2e8f0;
                border-top: none;
              }
              .info-row {
                background: white;
                padding: 15px;
                margin: 10px 0;
                border-radius: 8px;
                border-left: 4px solid #2563eb;
              }
              .info-label {
                font-weight: bold;
                color: #1e40af;
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
              }
              .info-value {
                color: #334155;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                margin: 20px 0;
                border-radius: 8px;
                border: 1px solid #e2e8f0;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #64748b;
                font-size: 14px;
                border-top: 1px solid #e2e8f0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚗 Nouvelle Demande de Rendez-vous</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="info-label">👤 Nom du client</span>
                <span class="info-value">${name}</span>
              </div>
              
              <div class="info-row">
                <span class="info-label">📧 Email</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="info-row">
                <span class="info-label">📱 Téléphone</span>
                <span class="info-value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              
              <div class="info-row">
                <span class="info-label">🔧 Service demandé</span>
                <span class="info-value">${service}</span>
              </div>
              
              ${message ? `
                <div class="message-box">
                  <span class="info-label">💬 Message du client</span>
                  <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Cette demande a été envoyée depuis le site Roule Propre</p>
              <p style="margin: 5px 0 0 0;">📅 ${new Date().toLocaleString('fr-FR', { 
                dateStyle: 'full', 
                timeStyle: 'short',
                timeZone: 'Europe/Paris'
              })}</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      message: "Email envoyé avec succès" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
