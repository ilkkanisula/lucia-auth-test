import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    return { user }
};

export const actions = {
    default: async ({ request, locals, fetch }) => {
        const resp = await (await fetch('/api/logout', {
            method: 'POST',
            body: JSON.stringify({})
        })).json();
        if (!resp.success) {
            return fail(400, { message: resp.error });
        }
        locals.auth.setSession(null);
        throw redirect(302, "/login");
    }
}