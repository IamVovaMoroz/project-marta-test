import styles from "./Report.module.css";

const ReportPage = () => (
  <embed
    src="/files/reporting.pdf#toolbar=0"
    type="application/pdf"
    className={styles.report}
  />
);

export default ReportPage;
