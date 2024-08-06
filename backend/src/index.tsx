import { Hono } from 'hono'
import satori from 'satori'
import sharp from 'sharp'
import wasm from 'svg2png-wasm/svg2png_wasm_bg.wasm';
import {
  initialize,
  svg2png,
} from 'svg2png-wasm';
import OGImageComponent from './utils/og'


initialize(wasm).catch(() => {});

const app = new Hono()

async function fetchFontData(url: string): Promise<Buffer> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch font: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/og', async (c) => {
  const { title, content, imageUrl } = c.req.query();
  console.log(imageUrl);
  // const svg = await satori({
  //   <OGImageComponent post={{ title, content, image: imageUrl }} />
  // })

  const svg = await satori(
    <div
    style={{
      display: 'flex',
    }}>
    <OGImageComponent post={{ title, content, image: imageUrl }} />
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
          data: await fetchFontData(`https://og-playground.vercel.app/inter-latin-ext-400-normal.woff`),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
  const opt= {
    width: 1200,
    height: 630
}
const buf = await svg2png(svg, opt);

  // const trasformer = Transformer.fromSvg(svg);
  // const pngBuffer = await trasformer.png()  

  return new Response(buf, {
    headers: { 'Content-Type': 'image/png' },
  })
})

export default app