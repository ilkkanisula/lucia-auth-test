<script>
	import { enhance } from "$app/forms";
</script>

<section>
	<h1>Create an account</h1>
	<span>or <a href="/signin">Sign in</a></span>
	<form method="POST" use:enhance>
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" placeholder="Email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" placeholder="Password" />
		</div>
		<button type="submit">Sign Up</button>
	</form>
</section>
