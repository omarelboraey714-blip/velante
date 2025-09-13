import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get("tag") || "all";

  try {
    let query = supabase
      .from("projects")
      .select(
        "id, title, category, image, featured, tag, thumbnail, badge, type, liveUrl"
      )
      .order("created_at", { ascending: false });

    if (tag !== "all") {
      query = query.eq("tag", tag);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
