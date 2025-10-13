// src/routes/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia()
    .get('/', () => 'hello SvelteKit')
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const fallback: RequestHandler = ({ request }) => app.handle(request)
