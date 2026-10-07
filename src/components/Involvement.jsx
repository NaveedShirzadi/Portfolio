import { involvements } from "../data";

export default function Involvement() {
  return (
    <section id="involvement" className="section">
      <h2 className="section-title">Leadership and research</h2>
      <div className="section-body involvement-list">
        {involvements.map((item) => (
          <div key={item.role} className="involvement-item">
            <h3>{item.role}</h3>
            <p className="involvement-org">{item.org}</p>
            <p className="involvement-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
