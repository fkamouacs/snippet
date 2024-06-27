import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Collection from '@/models/Collection';

export async function GET(
  request: NextRequest,
  { params }: { params: { _id: string } }
) {
  await dbConnect();
  const { _id } = params;
  console.log('XD');
  console.log(_id);
  try {
    const filter = { _id: _id };
    const collection = await Collection.findOne(filter);

    if (!collection) {
      return NextResponse.json(
        { success: false, error: 'Quote not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: collection });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error,
      },
      { status: 400 }
    );
  }
}
