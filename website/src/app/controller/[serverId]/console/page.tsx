export default function Console() {
  return (
    <div className="h-[90vh] overflow-auto">
      <div className="h-full w-full">
        <div className="h-full w-full bg-gray-900 text-white">
          <div className="h-full w-full p-4">
            <div className="h-full w-full rounded-md border border-gray-800 bg-gray-950 p-4 font-mono text-sm">
              <div className="flex h-full flex-col justify-end">
                <div>
                  <span className="text-blue-500">user@host</span>
                  <span className="mx-1">:</span>
                  <span className="text-green-500">~</span>
                  <span className="mx-1">$</span>
                  <span className="ml-2">ls -la</span>
                </div>
                <div>
                  <span className="text-blue-500">user@host</span>
                  <span className="mx-1">:</span>
                  <span className="text-green-500">~</span>
                  <span className="mx-1">$</span>
                  <span className="ml-2">cd documents</span>
                </div>
                <div>
                  <span className="text-blue-500">user@host</span>
                  <span className="mx-1">:</span>
                  <span className="text-green-500">~/documents</span>
                  <span className="mx-1">$</span>
                  <span className="ml-2">ls -la</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
