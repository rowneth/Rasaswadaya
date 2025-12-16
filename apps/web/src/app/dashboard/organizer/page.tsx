
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import type { Event } from "@prisma/client";
import Link from "next/link";
import { Plus, Calendar } from "lucide-react";
import { redirect } from "next/navigation";

export default async function OrganizerDashboard() {
  const session = await getSession();
  if (!session || session.user.role !== "ORGANIZER") {
    redirect("/dashboard");
  }

  const events = await prisma.event.findMany({
    where: { organizerId: session.user.id },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Events</h1>
        <Link
          href="/dashboard/organizer/create"
          className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Create Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800">
          <Calendar className="w-12 h-12 mx-auto text-slate-300 dark:text-zinc-600 mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">No events yet</h3>
          <p className="text-slate-500 dark:text-zinc-400 mb-4">Create your first event to get started</p>
          <Link
            href="/dashboard/organizer/create"
            className="text-brand-600 hover:underline font-medium"
          >
            Create Event
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <div key={event.id} className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 overflow-hidden">
              <div className="h-40 bg-slate-100 dark:bg-zinc-800 relative">
                {/* Image placeholder or actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    {event.imageUrl ? (
                        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                    ) : (
                        <Calendar className="w-8 h-8" />
                    )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 truncate">{event.title}</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{new Date(event.eventDate || event.createdAt).toLocaleDateString()}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
