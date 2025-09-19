import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";

  try {
    let query = supabase
      .from("services")
      .select("id, title, description, price, category")
      .order("created_at", { ascending: true });

    if (category !== "all") {
      query = query.eq("category", category);
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
    console.error("Error fetching services:", error);
    return NextResponse.json({ error: "فشل في جلب الخدمات" }, { status: 500 });
  }
}
