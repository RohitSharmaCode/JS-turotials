<!DOCTYPE html>
<html>
<head>
    <title>Event Bubbling Demo</title>
    <style>
        .grandparent {
            padding: 40px;
            background-color: lightblue;
        }

        .parent {
            padding: 30px;
            background-color: lightgreen;
        }

        .child {
            padding: 20px;
            background-color: lightcoral;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="grandparent">
        Grandparent
        <div class="parent">
            Parent
            <button class="child">Click Me</button>
        </div>
    </div>

    <script>
        const grandparent = document.querySelector(".grandparent");
        const parent = document.querySelector(".parent");
        const child = document.querySelector(".child");

        grandparent.addEventListener("click", () => {
            console.log("Grandparent clicked");
        });

        parent.addEventListener("click", () => {
            console.log("Parent clicked");
        });

        child.addEventListener("click", () => {
            console.log("Child clicked");
        });
    </script>

</body>
</html>
