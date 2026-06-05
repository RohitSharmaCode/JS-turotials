<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sync vs Async JavaScript</title>
</head>
<body>
    <h1>Open the Console (F12) to see the output</h1>

    <script>
        console.log("========== SYNCHRONOUS CODE ==========");

        console.log("Step 1");
        console.log("Step 2");
        console.log("Step 3");

        console.log("\n========== ASYNCHRONOUS: setTimeout ==========");

        console.log("Start");

        setTimeout(() => {
            console.log("setTimeout Callback Executed");
        }, 2000);

        console.log("End");

        console.log("\n========== PROMISE ==========");

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise Resolved");
            }, 1000);
        });

        promise.then((result) => {
            console.log(result);
        });

        console.log("Promise Created");

        console.log("\n========== ASYNC / AWAIT ==========");

        function fetchData() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Data Received");
                }, 3000);
            });
        }

        async function getData() {
            console.log("Fetching Data...");

            const data = await fetchData();

            console.log(data);
            console.log("Async Function Finished");
        }

        getData();

        console.log("\n========== EVENT LOOP DEMO ==========");

        console.log("1");

        setTimeout(() => {
            console.log("2 (Macrotask)");
        }, 0);

        Promise.resolve().then(() => {
            console.log("3 (Microtask)");
        });

        console.log("4");

        console.log("\n========== SCRIPT FINISHED ==========");
    </script>
</body>
</html>
