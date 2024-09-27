import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'
import simpleTemplate from './templates/simple'
import gradientTemplate from './templates/gradient'
import wonderTemplate from './templates/wonder'
import templates from '../../config/templates'
import blogTemplate from './templates/blog'

export const config = {
  runtime: 'edge',
}

const templateHandlers = {
  simple: simpleTemplate,
  gradient: gradientTemplate,
  blog: blogTemplate,
  wonder: wonderTemplate,
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const template = searchParams.get('template') || 'simple';

    if (!templateHandlers[template]) {
      return new Response(`Template ${template} not found`, { status: 404 });
    }

    const templateConfig = templates[template];
    const templateData = templateConfig.fields.reduce((acc, field) => {
      acc[field.name] = searchParams.get(field.name) || field.default || '';
      return acc;
    }, {});

    return templateHandlers[template](templateData);
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
