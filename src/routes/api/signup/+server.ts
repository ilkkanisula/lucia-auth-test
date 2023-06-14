import { auth } from "$lib/server/lucia";
import { json } from "@sveltejs/kit";

export const POST = async ({ request, locals }) => {
    const { email, password } = await request.json();
    if (!email || !password || typeof email !== "string" || typeof password !== "string") {
        return json({ success: false, error: "Login failed" });
    }
    try {

        const user = await auth.createUser({
            primaryKey: {
                providerId: "email",
                providerUserId: email,
                password
            },
            attributes: {
                email
            }
        });
        const session = await auth.createSession(user.userId);
        locals.auth.setSession(session);
        return json({ success: true, session });
    } catch (error) {
        console.log(error);
        return json({ success: false, error: "Login failed" });
    }
};