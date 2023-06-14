import { auth } from "$lib/server/lucia";
import { json } from "@sveltejs/kit";

export const POST = async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
    if (!session) {
        return json({ success: false, error: "Not logged in" });
    }

    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);

    return json({ success: true });
};