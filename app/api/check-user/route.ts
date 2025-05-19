import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export async function POST() {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ message: 'No user found' }, { status: 401 });
    }

    let loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!loggedInUser) {
      loggedInUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
          email: user.emailAddresses[0]?.emailAddress ?? '',
          imageUrl: user.imageUrl ?? '',
        },
      });
    }

    return NextResponse.json(loggedInUser);
  } catch (error) {
    console.error('Error in POST /api/check-user:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
