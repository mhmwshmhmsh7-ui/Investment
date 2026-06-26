export default function Deposit() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Deposit</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <p className="text-gray-600">
          Send funds to the following wallet address:
        </p>

        <div className="bg-gray-100 p-3 rounded-xl break-all">
          0xYOUR_DEPOSIT_ADDRESS_HERE
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full border p-3 rounded-xl"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
          Confirm Deposit
        </button>

      </div>
    </div>
  );
}
