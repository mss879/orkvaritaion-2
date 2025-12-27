import { NextResponse } from 'next/server';

type ContactPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  category?: string;
  monthly_active_users?: string;
  annual_revenue?: string;
  message: string;
};

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return badRequest('Invalid request body.');
  }

  const firstName = (payload.first_name ?? '').trim();
  const lastName = (payload.last_name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!firstName) return badRequest('First name is required.');
  if (!lastName) return badRequest('Last name is required.');
  if (!email) return badRequest('Email is required.');
  if (!message) return badRequest('Message is required.');

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return NextResponse.json(
      {
        error:
          'Email service is not configured. Please set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY.',
      },
      { status: 500 }
    );
  }

  const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: (payload.phone_number ?? '').trim(),
        category: (payload.category ?? '').trim(),
        monthly_active_users: (payload.monthly_active_users ?? '').trim(),
        annual_revenue: (payload.annual_revenue ?? '').trim(),
        message,
      },
    }),
  });

  if (!emailJsResponse.ok) {
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later.',
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
