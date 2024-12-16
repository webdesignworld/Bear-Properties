"use server";

import connectDB from "../../config/database";
import User from "../../models/User";
import { getSessionUser } from "../../utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);

  let isBookmarked = user.bookmarks.includes(propertyId);
//   console.log(isBookmarked);

  let message;

  if (isBookmarked) {
    // If already bookmarked, remove it
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed successfully";
    isBookmarked = false;
  } else {
    // If not bookmarked, add it
    user.bookmarks.push(propertyId);
    message = "Bookmark added successfully";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath("/properties/saved");
  return { message, isBookmarked };
}

export default bookmarkProperty;

