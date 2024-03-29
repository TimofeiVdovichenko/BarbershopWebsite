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
    // const form_data = {
    //   ...req.body
    // }
    const data_jwt = jwt.sign(form_data.password, String(process.env.NEXT_PUBLIC_API_SECRET_KEY));
    
    const send_data = {
      data: {
        ...form_data,
      password: data_jwt,
      raspisanies: []
      }
    }

    const find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/klients?filters[email][$eq]=${form_data.email}`, {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    })

    const users = find.data.data;

    if ((users.length > 0)) {
      return NextResponse.json('exist', {status: 400});
    }

    const create = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/klients`, JSON.stringify(send_data), {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    })

    return NextResponse.json(form_data, {status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json('error', {status: 500});
  }
}