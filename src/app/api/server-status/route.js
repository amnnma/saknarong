import { NextResponse } from 'next/server';


export async function GET() {
  const serverIP = '54.206.156.8';
  
  try {
    const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
    const data = await response.json();

    return NextResponse.json({
      online: data.online,
      players: data.players,
      version: data.version
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch server status' }, { status: 500 });
  }
}
