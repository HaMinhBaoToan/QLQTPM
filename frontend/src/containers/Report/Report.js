import React, { useEffect, useState, useRef } from "react";
import { DatePicker, Select, Button, Row, Col, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
// import { useReactToPrint } from "react-to-print";
import Template1 from "./components/Template1";
const { RangePicker } = DatePicker;
const { Option } = Select;
const Report = () => {
  const [form] = Form.useForm();
  const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  const [dates, setDates] = useState({
    fromDate: moment("20210101"),
    toDate: moment(),
  });
  const [varReport, setVarReport] = useState();
  const [typeReport, setTypeReport] = useState(0);

  useEffect(() => {
    form.setFieldsValue({
      Date: [moment(dates.fromDate), moment(dates.toDate)],
      report: "Báo Cáo Tổng",
    });
  }, [form, dates]);

  const onFinish = (values) => {
    setVarReport(values);
    if (values.report === "Báo Cáo Tổng") {
      setTypeReport(1);
    } else {
      setTypeReport(0);
    }
  };

  return (
    <div className="report" ref={componentRef}>
      <Row>
        <Col span={24}>
          <h3>Báo Cáo</h3>
        </Col>

        <Col span={24} className="mt-3">
          <Form form={form} onFinish={onFinish}>
            <div className="float-left">
              <Form.Item
                name="Date"
                rules={[
                  { required: true, message: "Vui lòng nhập trường này!" },
                ]}
              >
                <RangePicker format={"DD/MM/YYYY"} />
              </Form.Item>
            </div>
            <div className="ml-3 float-left">
              <Form.Item name="report">
                <Select style={{ width: 220 }}>
                  <Option value="Báo Cáo Tổng">Báo Cáo Tổng</Option>
                  {/* <Option value="Báo Cáo Công Nợ Thu">
                    Báo Cáo Công Nợ Thu
                  </Option>
                  <Option value="Báo Cáo Công Nợ Chi">
                    Báo Cáo Công Nợ Chi
                  </Option> */}
                </Select>
              </Form.Item>
            </div>
            <div className="ml-3 float-left">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Col>
        {varReport ? <Col span={24} className="bg-white ">
          {typeReport === 1 ? (
            <Template1  varReport={varReport} />
          ) : (
            ""
          )}
        </Col> : <div style={{fontSize: 25,margin: '0 auto', paddingTop: 50}}>No data</div>}
        
      </Row>
    </div>
  );
};
export default Report;
