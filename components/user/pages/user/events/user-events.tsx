"use client";
import { Table } from "@mantine/core";
import useUserEvents from "./use-user-events";
import Skeleton from "@/components/share/skeleton/skeleton";
import Link from "@/components/share/link/link";

const UserEvents = () => {
  const { rows, isFetching, isSuccess } = useUserEvents();
  return (
    <>
      <div className="w-full h-full overflow-auto scrollbar dark:dark-scrollbar flex justify-center items-start">
        <div className="border-2 border-slate-200 dark:border-slate-400 rounded-xl overflow-hidden max-w-xl w-full">
          {isFetching && (
            <>
              <div className="w-full h-[49px] border-b-[1px] border-white">
                <Skeleton />
              </div>
              <div className="w-full h-[49px] border-b-[1px] border-white">
                <Skeleton />
              </div>
              <div className="w-full h-[49px]">
                <Skeleton />
              </div>
            </>
          )}
          {isSuccess && (
            <>
              {rows.length === 0 ? (
                <>
                  <div className="w-full text-center p-4 flex justify-center items-center flex-col">
                    <span className="text-slate-500 text-sm">
                      در هیج رویدادی ثبت نام نکردی :({" "}
                    </span>
                    <Link
                      className="mt-2 font-extrabold transition-all duration-200
                       hover:text-slate-500 dark:text-slate-800"
                      href={"/events"}
                    >
                      مشاهده رویداد ها
                    </Link>
                  </div>
                </>
              ) : (
                <Table verticalSpacing="sm" striped highlightOnHover>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "right" }}>نام رویداد</th>
                      <th style={{ textAlign: "right" }}></th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default UserEvents;
