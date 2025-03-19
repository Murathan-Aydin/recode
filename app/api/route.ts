import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { tweet } = body;

    const data = await db.query("INSERT INTO tweets (user_id, parent_id, type, tweet) VALUES (?, ?, ?, ?)", [1, null, "orignal", tweet]); 

    return NextResponse.json(data);
}

export async function GET() {
    const data = await db.query("SELECT * FROM tweets WHERE type != ? LIMIT 10", ["reply"]); 

    return NextResponse.json(data);
}