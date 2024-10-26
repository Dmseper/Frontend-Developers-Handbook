async function executeTasks() {
    console.log(1);

    setTimeout(() => console.log(2), 1000);

    try {
        await Promise.reject(3);
    } catch (error) {
        console.log(error);
    }

    await new Promise(resolve => setTimeout(resolve));

    console.log(4);

    console.log(await Promise.resolve(5));

    console.log(6);

    setTimeout(() => console.log(7), 0);
}

executeTasks();

