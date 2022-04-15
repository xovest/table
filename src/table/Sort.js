function Sort() {
  function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
  
    //sorting each row
    const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
  
      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });
  
    //removing the existing table rows
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    }
  
    //readding the new sorted rows
    tBody.append(...sortedRows);
  
    //remember the way the column is sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1 })`).classList.toggle("th-sort-desc", !asc);
  }
  
  document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener('click', () => {
      const tableEl = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");
  
      sortTableByColumn(tableEl, headerIndex, !currentIsAscending);
    });
  });
  
  return (

  )
}

export default Sort