import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
const Option1=()=>{
    return(<>
          <div className="container mb-3">
        <div className="row">
          <div className="col-12 col-sm-5 sub-container shadow-sm m-1 p-2">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h6>
                <small>
                  Total
                  <br />
                  VEDRs
                </small>
              </h6>
              <h5>2522</h5>
            </div>
            <hr className="hr-line-dotted p-0 m-1" />
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h6>
                <small>
                  VEDRs Days since
                  <br />
                  Request Buckets
                </small>
              </h6>
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    621
                    <br />
                    <span className="text-color-box">
                      <small>G)5-9 Days</small>
                    </span>
                  </small>
                </h6>
              </div>
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    1901
                    <br />
                    <span className="text-color-box">
                      <small>H)0-4 Days</small>
                    </span>
                  </small>
                </h6>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-5 sub-container shadow-sm m-1 p-2">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h6>
                <small>
                  Total New
                  <br />
                  Engagements Counts
                </small>
              </h6>
              <h3>41</h3>
            </div>
            <hr className="hr-line-dotted p-0 m-1" />
            <div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    34
                    <br />
                    <span className="text-color-box">
                      <small>CCPA</small>
                    </span>
                  </small>
                </h6>
              </div>
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    10
                    <br />
                    <span className="text-color-box">
                      <small>GDPR</small>
                    </span>
                  </small>
                </h6>
              </div>
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    3<br />
                    <span className="text-color-box">
                      <small>LGPD</small>
                    </span>
                  </small>
                </h6>
              </div>
              <div>
                <h6 className="text-center text-primary">
                  <small>
                    0<br />
                    <span className="text-color-box">
                      <small>PIPEDA</small>
                    </span>
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="ms-3">Open VEDR count-by regulations</h6>
      <div className="table-responsive-sm">
      <table class="table table-hover  ms-3">
        <thead>
          <tr>
            <th scope="col">VEDER Status</th>
            <th scope="col">By CCPA</th>
            <th scope="col">By GDPR</th>
            <th scope="col">BY LGPD</th>
            <th scope="col">Total VEDRs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-primary">New</th>
            <td>214</td>
            <td>1</td>
            <td>-</td>
            <td>215</td>
          </tr>
          <tr>
            <th className="text-primary">In Process</th>
            <td>2281</td>
            <td>23</td>
            <td>2</td>
            <td>2306</td>
          </tr>
          <tr>
            <th className="text-primary">Review In Process</th>
            <td>1</td>
            <td>-</td>
            <td>-</td>
            <td>1</td>
          </tr>
          <tr>
            <th>Total(6 Groups)</th>
            <td>2496</td>
            <td>24</td>
            <td>2</td>
            <td>2522</td>
          </tr>
        </tbody>
      </table>
      </div>
      <h6 className="ms-3">Open VEDR count-by Engagement and Days since requests buckets</h6>
      <div className="table-responsive-sm">
      <table class="table table-hover table-responsive-sm ms-3">
        <thead>
          <tr>
            <th scope="col">VEDER Status</th>
            <th scope="col">By G)5-9 Days</th>
            <th scope="col">By H)0-4 Days</th>
            <th scope="col">Total VEDRs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-primary">Chadwik Matrin Bailey,INC-SBSEG-QB Desktop Lineups</th>
            <td>27</td>
            <td>49</td>
            <td className="text-primary">76</td>
          </tr>
          <tr>
            <th className="text-primary">Chillpier Marketing Calendering Tool</th>
            <td>27</td>
            <td>49</td>
            <td className="text-primary">76</td>
          </tr>
          <tr>
            <th className="text-primary">Connect ans Sell S&M leads</th>
            <td>1</td>
            <td>1</td>
            <td className="text-primary">2</td>
          </tr>
          <tr>
            <th  className="text-primary">EXECVISION INC-SESBG-Sales coaching tool + slack</th>
            <td>1</td>
            <td>1</td>
            <td  className="text-primary">2</td>
          </tr>
          <tr>
            <th  className="text-primary">Fresh Cut Viedo-Marketing & Comms-Case Study Viedos</th>
            <td>1</td>
            <td>1</td>
            <td  className="text-primary">2</td>
          </tr>
          <tr>
            <th  className="text-primary">Infiutive Corporation-CG-Ambessador Engagement Platform Renewal</th>
            <td>1</td>
            <td>1</td>
            <td  className="text-primary">2</td>
          </tr>
          <tr>
            <th  className="text-primary">Infiutive Corporation-Marketing &Comms-SMB Loyalty Program</th>
            <td>1</td>
            <td>1</td>
            <td  className="text-primary">2</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>)
}
export default Option1