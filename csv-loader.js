async function loadCSV(file) {
    const response = await fetch(file);
    const text = await response.text();

    const rows = text.trim().split("\n");

    const headers = rows[0].split(",");

    return rows.slice(1).map(row => {
        const values = row.split(",");
        let obj = {};

        headers.forEach((header, index) => {
            obj[header] = values[index];
        });

        return obj;
    });
}
