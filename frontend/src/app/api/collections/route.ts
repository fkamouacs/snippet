import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

import Collection from '@/models/Collection';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const collections = await Collection.find({});
    return NextResponse.json({ success: true, data: collections });
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

  console.log(body);
  try {
    const collection = await Collection.create(body);
    return NextResponse.json(
      { success: true, data: collection },
      { status: 201 }
    );
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
