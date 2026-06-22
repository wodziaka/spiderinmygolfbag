async function loadCSV(file) {
    const response = await fetch(file);
    const text = await response.text();

    const rows = text.trim().split("\n");

    const headers = rows[0].split("\t");

    return rows.slice(1).map(row => {
        const values = row.split("\t");

        let obj = {};

        headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim() || "";
        });

        return obj;
    });
}
