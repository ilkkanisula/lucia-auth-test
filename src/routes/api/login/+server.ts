import { auth } from "$lib/server/lucia";
import { json } from "@sveltejs/kit";

export const POST = async ({ request, locals }) => {
    const { email, password } = await request.json();
    if (!email || !password || typeof email !== "string" || typeof password !== "string") {
        return json({ success: false, error: "Login failed" });
    }
    const key = await auth.useKey("email", email, password);
    const session = await auth.createSession(key.userId);
    locals.auth.setSession(session);
    return json({ success: true, session });
};