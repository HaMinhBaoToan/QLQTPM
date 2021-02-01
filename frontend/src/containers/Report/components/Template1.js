import React from "react";
import moment from "moment";
import { formatDate, formatNumber } from "../../../utils/index";

const Template1 = ({varReport}) => {
    console.log()
  return (
    <>
      <div className="project-name text-dark  text-left">Project SmartMan</div>
      <p className="font-weight-bold">Trường Đại Học Khoa Học Tự Nhiên</p>
      <p className="font-weight-bold">
        Số 227, Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM{" "}
      </p>
      <h4 className="text-center font-weight-bold">Báo Cáo Chi Tiết</h4>
      <p className="text-center">Từ ngày {moment(varReport.Date[0]).format('MM/DD/YYYY')} đến ngày {moment(varReport.Date[1]).format('MM/DD/YYYY')}</p>
    </>
  );
};

export default Template1;
