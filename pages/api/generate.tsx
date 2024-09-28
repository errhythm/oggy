import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import templates from '../../config/templates'
import templateRegistry from './templateRegistry'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const template = searchParams.get('template') || 'simple';

    if (!templateRegistry[template]) {
      return new Response(`Template ${template} not found`, { status: 404 });
    }

    const templateConfig = templates[template];
    const templateData = templateConfig.fields.reduce((acc, field) => {
      acc[field.name] = searchParams.get(field.name) || field.default || '';
      return acc;
    }, {});

    return templateRegistry[template](templateData);
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
