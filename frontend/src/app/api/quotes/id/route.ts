import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Quote from '@/models/Quote';

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  console.log(body);
  try {
    const quotes = await Quote.findById(body);
    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );

    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      { status: 400 }
    );
  }
}
