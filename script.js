function createTable() {
  // Get table reference
  const table = document.getElementById("myTable");

  // Ask for number of rows
  const rnInput = window.prompt("Input number of rows");
  // Ask for number of columns
  const cnInput = window.prompt("Input number of columns");

  // If user cancelled any prompt, do nothing
  if (rnInput === null || cnInput === null) {
    return;
  }

  // Convert to numbers
  const rn = Number(rnInput);
  const cn = Number(cnInput);

  // Validate: numeric and positive
  if (!Number.isFinite(rn) || !Number.isFinite(cn)) {
    // Non‑numeric input → ignore and do not create table
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be positive numbers greater than 0.");
    return;
  }

  // Clear any existing rows
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  // Create table with rn rows and cn columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);
      cell.textContent = "Row-" + i + " Column-" + j;
    }
  }
}
