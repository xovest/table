import './Sort.css';

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
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Topson</td>
          <td>23</td>
          <td>Finland</td>
          <td>OG</td>
        </tr>
        <tr>
          <td>2</td>
          <td>MidOne</td>
          <td>25</td>
          <td>Malaysia</td>
          <td>SMG</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Puppey</td>
          <td>31</td>
          <td>Estonia</td>
          <td>Secret</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Sccc</td>
          <td>26</td>
          <td>China</td>
          <td>Newbee</td>
        </tr>
        <tr>
          <td>5</td>
          <td>SumaiL</td>
          <td>22</td>
          <td>Pakistan</td>
          <td>OG</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Sort