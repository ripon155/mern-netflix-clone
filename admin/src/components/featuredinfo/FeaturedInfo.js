import "./featuredinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featureitem">
        <span className="featuretitle">Revanue</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,425</span>
          <span className="featuredmoneyrate">
            -11.4 <ArrowDownwardIcon className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredsub">Compare to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretitle">Sales</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,425</span>
          <span className="featuredmoneyrate">
            -11.4 <ArrowDownwardIcon className="featuredicon negative" />
          </span>
        </div>
        <span className="featuredsub">Compare to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretitle">Cost</span>
        <div className="featuredmoneycontainer">
          <span className="featuredmoney">$2,425</span>
          <span className="featuredmoneyrate">
            -11.4 <ArrowUpwardIcon className="featuredicon " />
          </span>
        </div>
        <span className="featuredsub">Compare to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
