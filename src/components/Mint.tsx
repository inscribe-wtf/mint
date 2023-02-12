import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Countdown from "react-countdown";
import QRCode from "react-qr-code";

type Props = {
  handleClose: () => void;
};
export default function Mint({ handleClose }: Props) {
  const [inscribes, setInscribes] = useState(1);
  const [fee, setFee] = useState(0.0001);
  const [step, setStep] = useState(0);
  const [feeRate, setFeeRate] = useState(9);
  const [address, setAddress] = useState("");
  const [paymentRequest, setPaymentRequest] = useState(
    "lntbs450n1p37j8axpp5w9wellujhn2aka3ahh8ck77azx4l6xyc9hcavfefmqhltp3thhyqhp5g4z8k7hm6hj5fa7s780slnxjvq2dnpgpxz4a8upqhz0lj6uzq70scqzpuxqyz5vqsp53pvyec6tkygzt3exn3etdd2fq683y8cr7r7kqh4ryqd4e9kj9qrq9qyyssqtmnw882848ql6fgjj4lnffs7vjx26cxs7xqp8qm2yu38rtljq5s90nfnr4xly2md7r2p43ua4mf6rlfgarkul4edl58qwz4g9qm2nssqnjvadh"
  );

  return (
    <motion.div
      className="fixed inset-0 bg-gray-100 bg-opacity-100 z-10"
      onClick={() => {
        handleClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        className="absolute inset-0 flex justify-center items-center w-full"
      >
        <div
          className="rounded-lg shadow-lg bg-white w-1/3 min-h-2/5"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={"step-0"}
              >
                <h1 className="text-6xl font-bold mb-8">Mint</h1>
                <div className="">
                  How many inscribes would you like to mint?
                </div>
                <input
                  value={inscribes}
                  onChange={(e) => setInscribes(parseInt(e.target.value))}
                  type="number"
                  className="input input-bordered w-full max-w-xs my-2"
                  min={1}
                  max={10}
                />
                <div className="font-bold">
                  {(fee * inscribes).toFixed(5)} BTC + Mining Fee
                </div>
                <button
                  className="btn btn-primary mt-8"
                  onClick={() => setStep(1)}
                >
                  Next
                </button>
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="step-1"
              >
                <h1 className="text-6xl font-bold mb-8">Fee Rate</h1>
                <div className="">Select a fee rate for your mint</div>
                <div className="font-bold">{feeRate} sat / vbyte</div>
                <input
                  type="range"
                  min="1"
                  max="41"
                  value={feeRate}
                  className="range"
                  step="2"
                  onChange={(e) => setFeeRate(parseInt(e.target.value))}
                />
                <div className="font-bold">
                  {(fee * inscribes).toFixed(5)} BTC + Mining Fee
                </div>
                <div className="flex flex-row gap-4 mt-8">
                  <button className="btn" onClick={() => setStep(0)}>
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="step-2"
              >
                <h1 className="text-6xl font-bold mb-8">Address</h1>
                <div className="">
                  This should be a wallet with coin control dedicated to your
                  ordinals. Sparrow is a good option
                </div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input input-bordered w-full max-w-xs my-2"
                  min={1}
                  max={10}
                  placeholder="bc1q..."
                />
                <div className="flex flex-row gap-4 mt-8">
                  <button className="btn" onClick={() => setStep(1)}>
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(3)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="step-3"
              >
                <h1 className="text-6xl font-bold mb-8">Confirm</h1>
                <div className="">
                  <div className="font-bold">Inscribes: {inscribes}</div>
                  <div className="font-bold">Fee Rate: {feeRate}</div>
                  <div className="font-bold">Address: {address}</div>
                  <div className="font-bold">
                    Total Fee: {(fee * inscribes).toFixed(5)} BTC
                  </div>
                </div>
                <div className="flex flex-row gap-4 mt-8">
                  <button className="btn" onClick={() => setStep(2)}>
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(4)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="step-4"
              >
                <h1 className="text-6xl font-bold mb-8">Payment</h1>
                <div className="">Minting {inscribes} inscribe</div>
                <div className="flex flex-row gap-4">
                  <QRCode
                    value={paymentRequest}
                    size={256}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                  />
                  <div className="flex flex-col w-1/2 align-center">
                    <button
                      className="btn btn-ghost mt-8"
                      onClick={() => {
                        navigator.clipboard.writeText(paymentRequest);
                      }}
                    >
                      Copy Invoice
                    </button>
                    <Countdown
                      date={Date.now() + 120000}
                      renderer={({ minutes, seconds, completed }) => {
                        if (completed) {
                          return (
                            <div className="text-center">
                              Invoice expired try again!
                            </div>
                          );
                        } else {
                          return (
                            <div className="text-center">
                              Pay within the next {minutes}:{seconds}
                            </div>
                          );
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-4 mt-8">
                  <button className="btn" onClick={() => setStep(3)}>
                    Back
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => setStep(5)}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}
            {step === 5 && (
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="step-4"
              >
                <h1 className="text-6xl font-bold mb-8">Mining</h1>
                <div className="">
                  Waiting for {inscribes} inscribes to be mined
                </div>
                <div className="flex flex-row gap-4">
                  Please wait for the transaction to be mined. This can take a
                  while.
                </div>
                <div className="flex flex-row gap-4 mt-8">
                  <button className="btn btn-primary">Contact Support</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
