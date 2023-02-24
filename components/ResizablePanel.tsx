import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function ResizablePanel({
  children,
}: {
  children: React.ReactNode;
}) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={height ? { height } : {}}
      style={height ? { height } : {}}
      className="relative w-full overflow-y-auto mb-20"
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div ref={ref} className={height ? "absolute inset-x-0" : "relative"}>
        {children}
      </div>
    </motion.div>
  );
}
