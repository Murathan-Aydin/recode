import mysql from 'mysql2/promise'
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    const connection = await mysql.createConnection({
        host: '198.244.233.0',
        user: 'twitter',
        password: 'twitter.epitech',
        database: 'twitter_db'
    });

}