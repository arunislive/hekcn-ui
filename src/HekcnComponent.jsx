// 1️⃣ Install Vite and dependencies
// Run these commands in your terminal:
// npm create vite@latest hekcn-ui --template react
// cd hekcn-ui
// npm i framer-motion lucide-react @shadcn/ui tailwind-variants
// npx shadcn-ui@latest init

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const HekcnComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Card className="w-96 bg-gray-800 shadow-xl rounded-2xl">
        <CardContent className="p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold">Welcome to Hekcn-UI</h2>
            <p className="text-gray-400 mt-2">
              Your custom UI setup with Tailwind & ShadCN.
            </p>
            <Button className="mt-4">Get Started</Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HekcnComponent;

// 3️⃣ Render it in `App.jsx`
// import HekcnComponent from "./HekcnComponent";
// function App() {
//   return <HekcnComponent />;
// }
// export default App;
