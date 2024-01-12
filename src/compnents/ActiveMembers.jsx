import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ActiveMembers = () => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Advocate Name</th>
            <th>Enrollment</th>
            <th>Plan choosed</th>
            <th>Amount</th>
            <th>Paid On</th>
            <th>Membership status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manoj</td>
            <td>Lp/1245/22</td>
            <td>12 Month</td>
            <td>2000</td>
            <td>2023-12-06</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActiveMembers;
