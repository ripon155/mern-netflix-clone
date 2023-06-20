import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={" widgetlgbutton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgeLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetlgTr">
            <td className="widgetlguser">
              <img src="assets/profile.jpg" alt="" className="widgetlgimg" />
              <span className="widgetlgname">John Doe</span>
            </td>
            <td className="widgetlgdate">2 june 2023</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetlgTr">
            <td className="widgetlguser">
              <img src="assets/profile.jpg" alt="" className="widgetlgimg" />
              <span className="widgetlgname">John Doe</span>
            </td>
            <td className="widgetlgdate">2 june 2023</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Declines" />
            </td>
          </tr>
          <tr className="widgetlgTr">
            <td className="widgetlguser">
              <img src="assets/profile.jpg" alt="" className="widgetlgimg" />
              <span className="widgetlgname">John Doe</span>
            </td>
            <td className="widgetlgdate">2 june 2023</td>
            <td className="widgetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WidgetLg;
