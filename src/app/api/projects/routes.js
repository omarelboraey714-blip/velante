import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const validCategories = ["هوية بصرية", "إعلانات ممولة", "تطوير المواقع"];

  try {
    let query = supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (category && validCategories.includes(category)) {
      query = query.eq("category", category);
    } else if (category && !validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch projects" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
