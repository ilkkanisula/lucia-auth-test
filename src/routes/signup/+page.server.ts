import { fail, redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
    if (session) throw redirect(302, "/account");
    return {};
};


export const actions = {
    default: async ({ request, locals, fetch }) => {
        const formdata = await request.formData();
        const email = formdata.get('email');
        const password = formdata.get('password');

        if (!email || !password || typeof email !== "string" || typeof password !== "string") {
            return fail(400, { message: 'Invalid email or password' });
        }

        const resp = await (await fetch(`/api/signup`, {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })).json();

        if (!resp.success) {
            return fail(400, { message: resp.error });
        }

        throw redirect(302, "/account");
    }
}