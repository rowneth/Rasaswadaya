"use server";

import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const session = await getSession();
  if (!session || session.user.role !== "ORGANIZER") {
    throw new Error("Unauthorized");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const dateStr = formData.get("date") as string;
  const location = formData.get("location") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!title || !description || !dateStr || !location) {
    throw new Error("Missing required fields");
  }

  try {
    await prisma.event.create({
      data: {
        title,
        description,
        eventDate: new Date(dateStr),
        location,
        imageUrl,
        organizerId: session.user.id,
        // Fill required fields from old schema with defaults if needed, or rely on optional
        city: location.split(',')[0], // Simple heuristic
        venue: location,
        startTime: new Date(dateStr), // Placeholder
        endTime: new Date(dateStr),   // Placeholder
        category: "General",
        ticketLink: "",
      },
    });
  } catch (error) {
    console.error("Create event error:", error);
    throw new Error("Failed to create event");
  }

  redirect("/dashboard/organizer");
}
