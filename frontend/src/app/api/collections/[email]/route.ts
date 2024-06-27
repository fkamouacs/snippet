// app/api/quotes/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Collection from '@/models/Collection';

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  await dbConnect();
  const { email } = params;
  try {
    const filter = { owner: email };
    const collection = await Collection.find(filter);

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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;
  const body = await request.json();

  try {
    const collection = await Collection.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { id } = params;

  try {
    const deletedCollection = await Collection.deleteOne({ _id: id });
    if (!deletedCollection) {
      return NextResponse.json(
        { success: false, error: 'Quote not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: {} });
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
