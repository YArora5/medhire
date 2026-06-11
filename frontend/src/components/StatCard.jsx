function StatCard({
  title,
  value,
}) {
  return (
    <div className="stat-box">

      <h2>{value}</h2>

      <span>{title}</span>

    </div>
  );
}

export default StatCard;