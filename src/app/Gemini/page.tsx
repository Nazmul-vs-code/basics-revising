import { SiGooglegemini } from "react-icons/si";

const Page = () => {

  const onSubmit = async (e) => {
    console.log(e.target)
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="mx-auto w-full max-w-2xl px-4">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex justify-center items-center gap-2">
            <SiGooglegemini className="text-2xl text-primary" />
            <h1 className="text-2xl font-bold">Gemini AI</h1>
          </div>
          <p className="text-sm text-base-content/60">
            Ask anything and get an AI-powered response.
          </p>
        </div>

        {/* Chat */}
        <div className="rounded-2xl bg-base-100 p-5 shadow-lg space-y-4">

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <SiGooglegemini className="text-primary" />
              </div>
            </div>

            <div className="chat-bubble bg-primary/10 text-base-content">
              Hello! How can I help you today?
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble bg-primary text-primary-content">
              Explain React useMemo.
            </div>
          </div>

          {/* Input */}
          <div className="join w-full mt-6">
            <form onSubmit={onSubmit}>

              <input
                type="text"
                name="userMessage"
                placeholder="Ask Gemini..."
                className="input input-bordered join-item w-full"
              />
              <button type="submit" className="btn btn-primary join-item">
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;