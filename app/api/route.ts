import { NextResponse, NextRequest } from "next/server";
import { connection } from "@/lib/db";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { tweet } = body;

    const data = await connection.query("INSERT INTO tweets (user_id, parent_id, type, tweet) VALUES (?, ?, ?, ?)", [1, null, "orignal", tweet]); 

    return NextResponse.json(data);
}

export async function GET() {
    const data = await connection.query("SELECT * FROM tweets WHERE type != ? LIMIT 10", ["reply"]); 

    return NextResponse.json(data);
}