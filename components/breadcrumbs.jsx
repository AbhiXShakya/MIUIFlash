import Link from "next/link";
import { motion } from "framer-motion";

export const Breadcrumbs = ({ breadm }) => {
  return (
    <div className="mb-10 text-sm font-semibold text-orange-500">
      {breadm.map((item, index) => {
        return (
          <>
            <Link href={item.href} key={item.href}>
              <a className="text-orange-500">{item.name}</a>
            </Link>
            {index + 1 != breadm.length ? (
              <span className="text-gray-700 dark:text-gray-400">
                &nbsp;&gt;&nbsp;
              </span>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
