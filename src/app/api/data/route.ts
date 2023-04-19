import {faker} from '@faker-js/faker';
import {NextRequest, NextResponse} from 'next/server';
import {allCustomers} from '@/utils/customer-in-memory-db';


export async function GET(request: NextRequest): Promise<NextResponse> {
  const customers = await allCustomers();
  return NextResponse.json({customers});
}
