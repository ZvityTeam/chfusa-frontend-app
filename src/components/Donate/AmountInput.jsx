export default function AmountInput({ value, onChange, readOnly = false }) {
  return (
    <div className="relative inline-block">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-2">
        <div className="flex items-center justify-center w-6 h-6 bg-secondary rounded-full">
          <span className="text-white text-sm">$</span>
        </div>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        readOnly={readOnly}
        className={`pl-10 pr-3 py-2 border border-gray-200 rounded-lg w-28 ${
          readOnly ? 'bg-gray-50' : 'bg-white'
        } focus:outline-none focus:ring-2 focus:ring-primary/20`}
      />
    </div>
  );
}