export default function Lcon({ icc, svg }) {
  return (
    <div className="w-5 h-5">
      <a  href={icc} target="_blank" rel="noopener noreferrer">
        <img  src={svg} alt="icon" />
      </a>
    </div>
  );
}