<script lang="ts">
    export let data;
    $: user = data.user;
</script>

<h1>Account page</h1>
<table>
    <tr>
        <th>userId</th>
        <th>email</th>
    </tr>
    <tr>
        <td>{user?.userId}</td>
        <td>{user?.email}</td>
    </tr>
</table>
<form method="POST">
    <input type="hidden" name="action" value="logout" />
    <button type="submit">Logout</button>
</form>

<style>
    table {
        border-collapse: collapse;
    }

    table,
    th,
    td {
        border: 1px solid black;
        padding: 1rem;
        text-align: left;
    }
</style>
