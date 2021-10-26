
const Table = ({ rows, headers, onRowClick }) => (
  <div className="overflow-x-auto">
    <table className="table w-full">
      <thead>
        <tr>
          {headers.map((header)=>(
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr className="cursor-pointer" key={row} onClick={()=>{onRowClick(row)}}>
            <td>Marjy Ferencz</td>
            <td>Marjy Ferencz</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
