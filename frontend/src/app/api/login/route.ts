import jwt from 'jsonwebtoken';
import axios from 'axios';
import Response from 'next'
import { NextResponse } from 'next/server';

const secret = 'yoursecret';

export async function POST (
  req: Request,
  res: Response,
  ) {
  try {
    const form_data = await req.json();

    const find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/klients?filters[email][$eq]=${form_data.email}`, {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    })

    const users = find.data.data;

    if (!(users.length > 0)) {
      return NextResponse.json('not_found', {status: 404});
    }

    const data_jwt = jwt.sign(form_data.password, String(process.env.NEXT_PUBLIC_API_SECRET_KEY));

    //@ts-ignore
    if (data_jwt !== users[0].attributes.password) {
      return NextResponse.json('wrong_password', {status: 301});
    }

    return NextResponse.json(users[0].attributes, {status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json('error', {status: 500});
  }
}