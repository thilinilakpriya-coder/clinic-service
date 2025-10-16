import "../index.css";

export default function StatsSection(){
  const stats = [
    {title:'Doctors at Work', count:'120+'},
    {title:'Happy Patients', count:'32500+'},
    {title:'Medical Beds', count:'450+'},
    {title:'Winning Awards', count:'150+'},
  ];

  return (
    <section className="container">
      <div className="stats-row" role="list">
        {stats.map((s,i) => (
          <div key={i} className="stat-card" role="listitem">
            <div style={{fontSize:22,opacity:0.95,fontWeight:800}}>{s.title.split(' ')[0]}</div>
            <div className="count">{s.count}</div>
            <small>{s.title}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
