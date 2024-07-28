import Link from "next/link";
import { ReactNode } from "react";

interface ListProps {
  children: ReactNode,
  classname: string
}

const List: React.FC<ListProps> = ({children, classname}) => {
  return (
    <li className={classname}>
      <Link href="">{children}</Link>
    </li>
  );
};

export default List;