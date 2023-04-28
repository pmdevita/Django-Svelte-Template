<script>
    export let inertia = false;
    let counter = 0;
    let incCounter = () => counter++;
</script>
<p>Hello from Svelte!
    <span style="color: transparent">
        <span class="text-blue-500">and Tailwind!</span>
    </span>
    {#if inertia}
        <span>and Inertia!</span>
    {/if}
    <button on:click={incCounter}>Counter: {counter}</button>
</p>