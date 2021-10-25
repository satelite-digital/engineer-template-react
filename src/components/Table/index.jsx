const Table = ({ rows }) => (
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            <th>{row}</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Crimson</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
