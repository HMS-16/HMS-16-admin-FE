import { React, useRef } from "react";
import "./PatientHistoryCondition.css";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import Logo from "../../assets/images/Logo.png";

const PatientHistoryCondition = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print Success"),
  });

  return (
    <>
      <div className="patient-history-page">
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <button onClick={handlePrint} className="print-button">
            <AiFillPrinter
              style={{
                marginRight: "15px",
                height: "19px",
                width: "15px",
              }}
            />
            Print
          </button>
        </div>
        <div ref={componentRef}>
          <div className="header-history-condition">
            <div>
              <img src={Logo} alt="img" className="logo-header" />
            </div>
            <div className="title-header">
              <h5>Mediclinic General Clinic</h5>
              <p>
                Kaki Street No. 1, Jakarta
                <br />
                <span>021-192836475</span>
              </p>
            </div>
          </div>

          <div className="table-history">
            <table className="minimalistBlack" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th colspan="2">No Medical Record :</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td style={{ marginBottom: "50px" }}>
                    Treating Doctor :
                    <br />
                    (........................................)
                  </td>
                  <td>
                    Treating Nurse :
                    <br />
                    (........................................)
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Name :</td>
                  <td
                    className="text-center"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Condition
                  </td>
                </tr>
                <tr>
                  <td>Place, Date of Birth :</td>
                  <td>Height</td>
                </tr>
                <tr>
                  <td>Gender :</td>
                  <td>Weight :</td>
                </tr>
                <tr>
                  <td>Address :</td>
                  <td>Blood Pressure :</td>
                </tr>
                <tr>
                  <td>Blood Type :</td>
                  <td>Sugar Analysis :</td>
                </tr>
                <tr>
                  <td>Phone Number :</td>
                  <td>Body Temperature :</td>
                </tr>
                <tr>
                  <td>Status :</td>
                  <td>Heart Rate :</td>
                </tr>
                <tr>
                  <td>Family Name :</td>
                  <td>Breath Rate :</td>
                </tr>
                <tr>
                  <td>Family Contact :</td>
                  <td>Cholestreol :</td>
                </tr>
                <tr>
                  <td colspan="2">Register Date :</td>
                </tr>
                <tr>
                  <td colspan="2">Shift :</td>
                </tr>
                <tr>
                  <td className="field-large" colspan="2">
                    Diagnose :
                  </td>
                </tr>
                <tr>
                  <td className="field-large" colspan="2">
                    Presciption :
                  </td>
                </tr>
                <tr>
                  <td className="date" colspan="2">
                    Jakarta, ........................................
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientHistoryCondition;
