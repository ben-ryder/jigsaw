import { JTable } from "./table";

export default {
  title: "Components/Table",
  parameters: {
    status: {
      type: "stable",
    },
  },
};

export function Default() {
  return (
    <JTable>
      <thead>
        <tr>
          <th>Wrestler</th>
          <th>Origin</th>
          <th>Finisher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bret "The Hitman" Hart</td>
          <td>Calgary, AB</td>
          <td>Sharpshooter</td>
        </tr>
        <tr>
          <td>Stone Cold Steve Austin</td>
          <td>Austin, TX</td>
          <td>Stone Cold Stunner</td>
        </tr>
        <tr>
          <td>Randy Savage</td>
          <td>Sarasota, FL</td>
          <td>Elbow Drop</td>
        </tr>
        <tr>
          <td>Vader</td>
          <td>Boulder, CO</td>
          <td>Vader Bomb</td>
        </tr>
        <tr>
          <td>Razor Ramon</td>
          <td>Chuluota, FL</td>
          <td>Razor's Edge</td>
        </tr>
      </tbody>
    </JTable>
  );
}
