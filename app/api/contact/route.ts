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

function isCompanyEmail(email: string) {
  const value = email.trim().toLowerCase();
  const atIndex = value.lastIndexOf('@');
  if (atIndex <= 0 || atIndex === value.length - 1) return false;
  const domain = value.slice(atIndex + 1);
  if (!domain.includes('.')) return false;
  if (domain === 'gmail.com' || domain === 'googlemail.com') return false;
  return true;
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
  const phoneNumber = (payload.phone_number ?? '').trim();
  const category = (payload.category ?? '').trim();
  const monthlyActiveUsers = (payload.monthly_active_users ?? '').trim();
  const annualRevenue = (payload.annual_revenue ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!firstName) return badRequest('First name is required.');
  if (!lastName) return badRequest('Last name is required.');
  if (!email) return badRequest('Email is required.');
  if (!isCompanyEmail(email)) return badRequest('Please use a company email address (no Gmail).');
  if (!phoneNumber) return badRequest('Phone number is required.');
  if (!category) return badRequest('Category is required.');
  if (!monthlyActiveUsers) return badRequest('Monthly active users is required.');
  if (!annualRevenue) return badRequest('Annual revenue is required.');
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
        phone_number: phoneNumber,
        category,
        monthly_active_users: monthlyActiveUsers,
        annual_revenue: annualRevenue,
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
