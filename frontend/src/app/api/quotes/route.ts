// app/api/quotes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Quote from '@/models/Quote';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const quotes = await Quote.find({});
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

export async function POST(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  try {
    const quote = await Quote.create(body);
    return NextResponse.json({ success: true, data: quote }, { status: 201 });
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

export async function PUT(request: NextRequest) {
  await dbConnect();
  const body = await request.json();

  try {
    const quote = await Quote.findByIdAndUpdate(
      body._id,
      { text: body.text, author: body.author },
      { new: true }
    );
    return NextResponse.json({ success: true, data: quote });
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
