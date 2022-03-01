import { Fragment } from "react";

export default function Row({ content, fee, content2, fee2 }) {
  return (
    <Fragment>
      <tr>
        <td>{content}</td>
        <td>{fee}</td>
      </tr>
      <tr>
        <td>{content2}</td>
        <td>{fee2}</td>
      </tr>
    </Fragment>
  );
}
