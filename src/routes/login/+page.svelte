<script>
	import { enhance } from "$app/forms";
</script>

<section>
	<h1>Login</h1>
	<span>or <a href="/signup">Sign up</a></span>
	<form method="POST" use:enhance>
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" placeholder="Email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" placeholder="Password" />
		</div>
		<button type="submit">Login</button>
	</form>
</section>
