import {NextRequest, NextResponse} from 'next/server';
import {customerByUUID} from '@/utils/customer-in-memory-db';
import {NextPageContext} from 'next';

export async function GET(request: NextRequest, context: any): Promise<NextResponse> {

  const id = context.params.id;

  if (!id) {
    console.error('no id');
    return NextResponse.json({error: 'no id'})
  } else {
    console.log(`id is ${id}`);
  }
  console.log(`Searching for Customer - ${id}`);
  const customer = await customerByUUID(id);
  if (!customer) {
    console.log(`customer not found ${id}`);
    // TODO - how to handle properly?
    // NextResponse.error() doesn't seem to work and can't be returned properly
    return NextResponse.json({error: 'not found'})
  }

  console.log('Customer returned.');
  console.dir(customer);
  return NextResponse.json(customer);
}
