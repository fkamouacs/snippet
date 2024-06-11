import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
  // if (!user) {
  //   console.log('hi');
  //   return NextResponse.redirect(new URL('/login', request.url));
  // } else {
  //   console.log('bye');
  //   return NextResponse.redirect(new URL('/app', request.url));
  // }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// };
