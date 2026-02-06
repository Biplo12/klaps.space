import { NextRequest, NextResponse } from "next/server";
import { getScreenings } from "@/lib/screenings";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const cityId = searchParams.get("cityId");
  const genreId = searchParams.get("genreId");
  const date = searchParams.get("date");

  try {
    const screenings = await getScreenings({
      cityId,
      genreId,
      date,
    });

    return NextResponse.json(screenings);
  } catch (error) {
    console.error("Error fetching screenings:", error);
    return NextResponse.json(
      { error: "Failed to fetch screenings" },
      { status: 500 }
    );
  }
}
