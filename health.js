window.onload = async function onLoad() {
    const dispTemp = document.getElementById("temp");
    const dispTime = document.getElementById("time");
    const uri = "https://api.health.zawk.net/";
    const data = {
        write: false,
    };

    let res;
    await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((res) => {
            dispTemp.innerHTML = `只今の室温:${res["temperature"][0]["01-Inlet Ambient"]}℃`;
            dispTime.innerHTML = `${new Date(
                Number(res["time"]),
            ).getHours()}時${new Date(Number(res["time"])).getMinutes()}分更新`;
        });
};
