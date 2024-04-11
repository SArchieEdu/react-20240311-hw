export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {title}
    </button>
  );
};
