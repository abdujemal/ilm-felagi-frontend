export default function LinearProgress({ value, max = 100 }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary-light dark:bg-primary-dark transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
