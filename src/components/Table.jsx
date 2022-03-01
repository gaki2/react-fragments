import Row from "./Row";
export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">급여내역</th>
        </tr>
      </thead>
      <tbody>
        <Row
          content={"swimming"}
          fee={"4000$"}
          content2={"piano"}
          fee2={"400$"}
        ></Row>
      </tbody>
    </table>
  );
}
