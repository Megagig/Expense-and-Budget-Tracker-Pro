// import { currentUser } from '@clerk/nextjs/server';
// import { db } from '@/lib/db';

// export const checkUser = async () => {
//   const user = await currentUser();

//   // 1️⃣ Check for the current logged-in Clerk user
//   if (!user) {
//     return null;
//   }

//   // 2️⃣ Check if the user already exists in the database
//   let loggedInUser = await db.user.findUnique({
//     where: {
//       clerkUserId: user.id,
//     },
//   });

//   // 3️⃣ If the user exists, return it
//   if (loggedInUser) {
//     return loggedInUser;
//   }

//   // 4️⃣ If the user doesn't exist, create a new one
//   loggedInUser = await db.user.create({
//     data: {
//       clerkUserId: user.id,
//       name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
//       email: user.emailAddresses[0]?.emailAddress ?? '',
//       imageUrl: user.imageUrl ?? '',
//     },
//   });

//   return loggedInUser;
// };

// import { NextResponse } from 'next/server';
// import { currentUser } from '@clerk/nextjs/server';
// import { db } from '@/lib/db';

// export const checkUser = async () => {
//   const user = await currentUser();

//   if (!user) {
//     return NextResponse.json({ message: 'No user found' }, { status: 401 });
//   }

//   let loggedInUser = await db.user.findUnique({
//     where: { clerkUserId: user.id },
//   });

//   if (!loggedInUser) {
//     loggedInUser = await db.user.create({
//       data: {
//         clerkUserId: user.id,
//         name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
//         email: user.emailAddresses[0]?.emailAddress ?? '',
//         imageUrl: user.imageUrl ?? '',
//       },
//     });
//   }

//   return NextResponse.json(loggedInUser);
// };
