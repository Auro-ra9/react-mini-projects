type ChildProps = {
  propMessage: string;
  propNumber: number;
  onButtonClick: (message: string) => void;
  list: string[];
};

const PropReceiving: React.FC<ChildProps> = ({
  propMessage,
  propNumber,
  onButtonClick,
  list,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Received Data</h2>

      <div className="mb-4">
        <p className="text-lg text-gray-700">Message: </p>
        <p className="text-lg font-medium text-indigo-600">{propMessage}</p>
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-700">Number: </p>
        <p className="text-lg font-medium text-green-600">{propNumber}</p>
      </div>

      <button
        className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors mb-4"
        onClick={() => onButtonClick("hello from child")}
      >
        Send Message
      </button>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Item List</h3>
        <ul className="list-inside list-disc pl-4 space-y-2">
          {list.map((ele, index) => (
            <li key={index} className="text-lg text-gray-700">{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropReceiving;
